"use client";

import { motion } from "framer-motion";

export interface OwnershipNode {
  id: string;
  label: string;
  sub?: string;
  type: "acquirer" | "target" | "public" | "entity" | "fund";
  stake?: string;
}

export interface OwnershipEdge {
  from: string;
  to: string;
  label?: string;
}

interface DiagramProps {
  title: string;
  nodes: OwnershipNode[];
  edges: OwnershipEdge[];
  delay?: number;
}

const NODE_STYLES: Record<OwnershipNode["type"], string> = {
  acquirer: "bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 border-gray-900 dark:border-gray-100",
  target:   "bg-blue-50 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 border-blue-300 dark:border-blue-700",
  public:   "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600",
  entity:   "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-600",
  fund:     "bg-gray-50 dark:bg-gray-800/60 text-gray-500 dark:text-gray-400 border-gray-200 dark:border-gray-700",
};

function NodeBox({ node, delay }: { node: OwnershipNode; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay }}
      className={`rounded-xl border-2 px-4 py-2.5 text-center min-w-[120px] ${NODE_STYLES[node.type]}`}
    >
      <p className="text-sm font-bold leading-tight">{node.label}</p>
      {node.sub && <p className="text-[11px] mt-0.5 opacity-70">{node.sub}</p>}
      {node.stake && (
        <span className="inline-block mt-1 text-[10px] font-semibold px-1.5 py-0.5 rounded bg-black/10 dark:bg-white/10">
          {node.stake}
        </span>
      )}
    </motion.div>
  );
}

function Arrow({ label, delay }: { label?: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
      className="flex flex-col items-center gap-0.5 my-1"
    >
      {label && <span className="text-[10px] text-gray-400 dark:text-gray-500 font-medium">{label}</span>}
      <div className="w-px h-5 bg-gray-300 dark:bg-gray-600" />
      <div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[6px] border-t-gray-300 dark:border-t-gray-600" />
    </motion.div>
  );
}

export default function OwnershipDiagram({ title, nodes, edges, delay = 0 }: DiagramProps) {
  // Simple vertical-chain layout: nodes ordered top-to-bottom per edges
  const orderedIds: string[] = [];
  const edgeMap = new Map(edges.map((e) => [e.from, e]));

  // Find root (node not in 'to' set)
  const toIds = new Set(edges.map((e) => e.to));
  const root = nodes.find((n) => !toIds.has(n.id));
  if (root) {
    let cur: string | undefined = root.id;
    while (cur) {
      orderedIds.push(cur);
      const next = edgeMap.get(cur);
      cur = next?.to;
    }
  }
  // Add any remaining nodes not in chain
  nodes.forEach((n) => { if (!orderedIds.includes(n.id)) orderedIds.push(n.id); });

  const nodeMap = new Map(nodes.map((n) => [n.id, n]));

  return (
    <div className="flex flex-col items-center">
      <p className="text-[11px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-4">{title}</p>
      {orderedIds.map((id, idx) => {
        const node = nodeMap.get(id);
        if (!node) return null;
        const edge = edgeMap.get(id);
        return (
          <div key={id} className="flex flex-col items-center">
            <NodeBox node={node} delay={delay + idx * 0.1} />
            {edge && (
              <Arrow label={edge.label} delay={delay + idx * 0.1 + 0.15} />
            )}
          </div>
        );
      })}
    </div>
  );
}
