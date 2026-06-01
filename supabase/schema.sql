-- Deal Story - Supabase Schema
-- Run this in the Supabase SQL editor

-- deal_posts 테이블
create table if not exists deal_posts (
  id              bigserial primary key,
  slug            text not null unique,
  title           text not null,
  excerpt         text,
  body_md         text not null default '',

  -- 카테고리: ma | pe_vc | ipo | divestiture
  category        text not null check (category in ('ma', 'pe_vc', 'ipo', 'divestiture')),

  cover_image_url text,

  -- 딜 핵심 정보
  deal_value_usd      numeric,          -- 딜 금액 (USD 백만 달러 기준)
  deal_value_display  text,             -- 표시용: "약 2.5조 원" 등
  announced_at        date,             -- 딜 발표일
  closed_at           date,             -- 딜 완료일
  acquirer_name       text,             -- 인수자/매수자
  target_name         text,             -- 피인수자
  seller_name         text,             -- 매도자 (별도인 경우)
  industry            text,             -- 산업군 (예: "부동산", "IT", "헬스케어")
  country             text,             -- 거래 주요 국가

  -- 태그
  tags            text[],

  -- 블로그 메타
  author          text,
  reading_minutes integer,
  view_count      integer not null default 0,
  is_published    boolean not null default false,
  is_featured     boolean not null default false,
  published_at    timestamptz,
  created_at      timestamptz not null default now(),
  updated_at      timestamptz not null default now()
);

-- updated_at 자동 갱신 트리거
create or replace function update_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create or replace trigger deal_posts_updated_at
  before update on deal_posts
  for each row execute function update_updated_at();

-- RLS (Row Level Security) 설정
alter table deal_posts enable row level security;

-- 공개 정책: is_published = true 인 행만 읽기 허용 (anon 포함)
create policy "Published deals are publicly readable"
  on deal_posts for select
  using (is_published = true);

-- 인덱스
create index if not exists deal_posts_slug_idx on deal_posts (slug);
create index if not exists deal_posts_category_idx on deal_posts (category);
create index if not exists deal_posts_published_at_idx on deal_posts (published_at desc);
create index if not exists deal_posts_is_published_idx on deal_posts (is_published);

-- ── Page Likes ────────────────────────────────────────────────────────────────
create table if not exists page_likes (
  slug text primary key,
  count integer not null default 0
);
alter table page_likes enable row level security;
create policy "Anyone can read page_likes" on page_likes for select using (true);
create policy "Anyone can upsert page_likes" on page_likes for insert with check (true);
create policy "Anyone can update page_likes" on page_likes for update using (true);

-- ── Comments ───────────────────────────────────────────────────────────────────
create table if not exists comments (
  id uuid primary key default gen_random_uuid(),
  slug text not null,
  parent_id uuid references comments(id) on delete cascade,
  nickname text not null,
  body text not null,
  likes integer not null default 0,
  created_at timestamptz not null default now()
);
create index on comments(slug);
create index on comments(parent_id);
alter table comments enable row level security;
create policy "Anyone can read comments" on comments for select using (true);
create policy "Anyone can insert comments" on comments for insert with check (true);
create policy "Anyone can update comment likes" on comments for update using (true);
create policy "Admin can delete comments" on comments for delete using (true);

create table if not exists comment_likes (
  comment_id uuid references comments(id) on delete cascade,
  fingerprint text not null,
  primary key (comment_id, fingerprint)
);
alter table comment_likes enable row level security;
create policy "Anyone can read comment_likes" on comment_likes for select using (true);
create policy "Anyone can insert comment_likes" on comment_likes for insert with check (true);

-- ── Profiles (온보딩 데이터) ───────────────────────────────────────────────────
create table if not exists profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text,
  full_name text,
  avatar_url text,
  region text,
  interests text[],
  career_status text,
  mba_consideration text,
  onboarded boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
alter table profiles enable row level security;
create policy "Users can read own profile" on profiles for select using (auth.uid() = id);
create policy "Users can insert own profile" on profiles for insert with check (auth.uid() = id);
create policy "Users can update own profile" on profiles for update using (auth.uid() = id);

-- ── Weekly Reports ─────────────────────────────────────────────────────────────
create table if not exists weekly_reports (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  title_en text,
  preview text not null,
  preview_en text,
  content text not null,
  content_en text,
  published_at timestamptz,
  is_published boolean not null default false,
  created_at timestamptz not null default now()
);
alter table weekly_reports enable row level security;
create policy "Anyone can read published reports preview" on weekly_reports for select using (is_published = true);
create policy "Admin can do anything" on weekly_reports for all using (true);

-- 샘플 데이터 (선택사항 — 필요 없으면 아래 insert 제거)
insert into deal_posts (
  slug, title, excerpt, body_md,
  category, deal_value_usd, deal_value_display,
  announced_at, closed_at,
  acquirer_name, target_name,
  industry, country, tags,
  author, reading_minutes,
  is_published, published_at
) values (
  'blackstone-kenedix-2023',
  '블랙스톤, 일본 케네딕스 2.5조 원에 인수 — 아시아 부동산 최대 베팅',
  '글로벌 사모펀드 블랙스톤이 일본 최대 독립 부동산 운용사 케네딕스를 공개매수로 인수했다. 44% 프리미엄이 얹힌 이번 딜은 블랙스톤의 아시아 전략에서 역대 최대 규모다.',
  E'2023년 10월, 글로벌 사모펀드 블랙스톤(Blackstone)은 일본 부동산 투자 플랫폼 케네딕스(Kenedix)의 지분 100%를 약 2.5조 원에 인수했다.\n\n## 배경 — 왜 지금, 왜 일본인가\n\n블랙스톤은 2010년대 중반부터 일본 부동산 시장에 공격적으로 진출해왔다.\n\n## 딜 구조\n\n공개매수(TOB)를 통해 주당 1,100엔, 직전 종가 대비 44% 프리미엄으로 취득했다.\n\n## 이후 행보\n\n블랙스톤은 케네딕스를 비상장 전환 후 물류 및 주거 섹터 위주로 포트폴리오를 재편하고 있다.',
  'pe_vc',
  1800,
  '약 2.5조 원 ($1.8B)',
  '2023-10-12',
  '2024-02-01',
  '블랙스톤',
  '케네딕스',
  '부동산',
  '일본',
  array['블랙스톤', '케네딕스', '일본', '부동산', 'PE', 'TOB'],
  'Deal Story',
  5,
  true,
  now()
);
