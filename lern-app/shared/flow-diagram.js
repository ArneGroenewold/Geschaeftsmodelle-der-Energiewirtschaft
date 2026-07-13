// ══════════════════════════════════════════════════════════
// shared/flow-diagram.js — einfacher Box+Pfeil-SVG-Renderer für
// "Geldfluss-Diagramme" (wer zahlt wem wofür) in der Kernidee-Phase
// einer Lerneinheit. Layout: Knoten werden auf einer horizontalen
// Linie verteilt, Kanten als gebogene Pfeile mit Label darüber.
// ══════════════════════════════════════════════════════════
(function () {
  'use strict';

  function buildFlowDiagram(nodes, edges) {
    const w = 300, h = 130, pad = 40;
    const n = nodes.length;
    const step = n > 1 ? (w - pad * 2) / (n - 1) : 0;
    const positions = {};
    nodes.forEach((node, i) => { positions[node.id] = { x: pad + i * step, y: h / 2 }; });

    const boxes = nodes.map(node => {
      const p = positions[node.id];
      const boxW = Math.min(90, Math.max(56, node.label.length * 6.5));
      return `
        <rect x="${p.x - boxW / 2}" y="${p.y - 16}" width="${boxW}" height="32" rx="8"
              fill="#FFFFFF" stroke="#E5E0D5" stroke-width="1.5"/>
        <text x="${p.x}" y="${p.y + 4}" text-anchor="middle" font-size="10.5" font-family="DM Sans,sans-serif" fill="#1A1A1A">${node.label}</text>
      `;
    }).join('');

    const arrows = edges.map((edge, i) => {
      const from = positions[edge.from], to = positions[edge.to];
      if (!from || !to) return '';
      const dir = to.x >= from.x ? 1 : -1;
      const curveY = from.y - 42 - (i % 2) * 4;
      const midX = (from.x + to.x) / 2;
      const labelY = curveY - 6;
      return `
        <path d="M ${from.x} ${from.y - 16} Q ${midX} ${curveY} ${to.x} ${to.y - 16}"
              fill="none" stroke="#C8571A" stroke-width="1.5" marker-end="url(#arrowhead)"/>
        <text x="${midX}" y="${labelY}" text-anchor="middle" font-size="9" font-family="DM Sans,sans-serif" fill="#555555">${edge.label}</text>
      `;
    }).join('');

    return `<svg viewBox="0 0 ${w} ${h}" width="100%" style="max-width:340px;display:block;margin:0 auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrowhead" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill="#C8571A"/>
        </marker>
      </defs>
      ${arrows}
      ${boxes}
    </svg>`;
  }

  window.FlowDiagram = { buildFlowDiagram };
})();
