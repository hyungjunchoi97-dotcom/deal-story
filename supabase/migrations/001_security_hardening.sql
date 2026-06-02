-- ============================================================
-- Migration 001: Security Hardening
-- 적용 방법: Supabase 대시보드 → SQL Editor에서 실행
-- ============================================================

-- ── 1. comment_likes DELETE 정책 누락 수정 ──────────────────
--  기존에 delete 정책이 없어서 "unlike" 동작이 RLS에 의해 차단됨.
--  서버 API에서만 호출되므로 anon 포함 허용 (fingerprint 검증은 API 레벨에서 수행).
drop policy if exists "Anyone can delete own comment_like" on comment_likes;
create policy "Anyone can delete own comment_like"
  on comment_likes for delete
  using (true);

-- ── 2. weekly_reports — anon 쓰기 차단 ──────────────────────
--  기존 "Admin can do anything" 정책은 anon key로도 INSERT/UPDATE/DELETE 가능.
--  이제 쓰기는 서버 API(/api/admin/reports)에서만 수행하므로
--  anon key를 통한 직접 쓰기를 차단한다.
drop policy if exists "Admin can do anything" on weekly_reports;

-- SELECT: 발행된 리포트만 공개
-- (기존 정책 유지 — 이미 존재하면 skip)
do $$
begin
  if not exists (
    select 1 from pg_policies
    where tablename = 'weekly_reports'
      and policyname = 'Anyone can read published reports preview'
  ) then
    execute $p$
      create policy "Anyone can read published reports preview"
        on weekly_reports for select
        using (is_published = true)
    $p$;
  end if;
end $$;

-- INSERT / UPDATE / DELETE: 비활성화 (서버 API가 service_role 없이 anon key 사용 중이므로
-- 현재 구조에서는 API 라우트의 ADMIN_SECRET 헤더 검증으로 접근 제어)
-- 추후 service_role key 도입 시 이 정책들을 삭제하고 service_role 전용으로 전환 권장.
create policy "Block direct anon writes to weekly_reports (insert)"
  on weekly_reports for insert
  with check (false);

create policy "Block direct anon writes to weekly_reports (update)"
  on weekly_reports for update
  using (false);

create policy "Block direct anon writes to weekly_reports (delete)"
  on weekly_reports for delete
  using (false);

-- ── 3. page_likes — atomic increment RPC ────────────────────
--  read-then-write race condition 제거.
create or replace function increment_page_like(p_slug text)
returns integer
language plpgsql
security definer
as $$
declare
  new_count integer;
begin
  insert into page_likes (slug, count)
  values (p_slug, 1)
  on conflict (slug) do update
    set count = page_likes.count + 1
  returning count into new_count;

  return new_count;
end;
$$;

-- ── 4. comments — atomic increment/decrement RPC ─────────────
create or replace function increment_comment_like(p_comment_id uuid)
returns integer
language plpgsql
security definer
as $$
declare
  new_likes integer;
begin
  update comments
  set likes = likes + 1
  where id = p_comment_id
  returning likes into new_likes;

  return coalesce(new_likes, 0);
end;
$$;

create or replace function decrement_comment_like(p_comment_id uuid)
returns integer
language plpgsql
security definer
as $$
declare
  new_likes integer;
begin
  update comments
  set likes = greatest(0, likes - 1)
  where id = p_comment_id
  returning likes into new_likes;

  return coalesce(new_likes, 0);
end;
$$;

-- ── 5. RPC 함수 anon 실행 권한 부여 ─────────────────────────
grant execute on function increment_page_like(text) to anon;
grant execute on function increment_comment_like(uuid) to anon;
grant execute on function decrement_comment_like(uuid) to anon;
