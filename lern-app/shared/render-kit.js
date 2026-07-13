// ══════════════════════════════════════════════════════════
// shared/render-kit.js — portierte (nicht referenzierte) Kopien von
// Render-Logik aus app/app.js. Das Wiki kapselt alles in einer IIFE
// (app.js:6), daher kann hier nichts importiert werden — bewusste,
// dokumentierte Duplikation. Bei Änderungen an der Wiki-Renderlogik
// (buildRadarSVG app.js:402, buildBMC app.js:325, Glossar app.js:1013-1090)
// muss dieser Datei manuell nachgezogen werden.
// ══════════════════════════════════════════════════════════
(function () {
  'use strict';

  // ── BMC (Business Model Canvas), ported von app.js:313-369 ─────────
  function splitSentences(text) {
    if (!text) return [];
    return text.split(/(?<=[.!?])\s+(?=[A-ZÄÖÜ0-9§])/);
  }
  function pickSentences(sentences, keywords, claimed) {
    const hits = sentences.filter(s => !claimed.has(s) && keywords.some(k => s.toLowerCase().includes(k)));
    const unique = [...new Set(hits)];
    unique.forEach(s => claimed.add(s));
    return unique.length ? unique.join(' ') : null;
  }

  function buildBMC(item) {
    let channels = item.bmc_kanaele || null;
    let relationships = item.bmc_kundenbeziehung || null;
    let cost = item.bmc_kostenstruktur || null;

    if (!channels || !relationships || !cost) {
      const sentences = [
        ...splitSentences(item.definition),
        ...splitSentences(item.wertschoepfung),
        ...splitSentences(item.herausforderungen)
      ];
      const claimed = new Set();
      if (!relationships) relationships = pickSentences(sentences, ['self-service', 'community', 'kundenservice', 'abo', 'vertrag', 'support', 'beratung', 'treueprogramm', 'gamification'], claimed);
      if (!channels) channels = pickSentences(sentences, ['app', 'plattform', 'website', 'vergleichsportal', 'vertrieb', 'kanal', 'online', 'marktplatz', 'dongle'], claimed);
      if (!cost) cost = pickSentences(sentences, ['kosten', 'capex', 'opex', 'investition', 'marge', 'aufwand', 'finanzier', 'prämie', 'beschaffungskosten'], claimed);
    }

    let keyPartners = null;
    if (item.akteure && item.akteure.length) {
      const isSelfOnly = item.akteure.length === 1 && item.title.toLowerCase().includes(item.akteure[0].toLowerCase());
      if (!isSelfOnly) keyPartners = item.akteure.join(', ');
    }

    return {
      vp: item.differenzierung || null,
      cs: item.kundensegment || null,
      rs: [item.erloesmodell, item.erloesTyp ? `(Erlöstyp: ${item.erloesTyp})` : ''].filter(Boolean).join(' ') || null,
      kp: keyPartners,
      ka: item.wertschoepfung || null,
      kr: item.wertschoepfung || null,
      ch: channels,
      cr: relationships,
      cost: cost
    };
  }

  // Guard für BMC-Puzzle: nur Items mit redaktionell gepflegten bmc_*-Feldern
  // sind für bewertete Aufgaben geeignet (Stichwort-Heuristik ist zu unzuverlässig
  // für Quizinhalte). Siehe Plan §4 "BMC-Puzzle".
  function hasBmcFieldsExplicit(item) {
    return !!(item.bmc_kanaele && item.bmc_kundenbeziehung && item.bmc_kostenstruktur);
  }

  const BMC_LABELS = {
    kp: 'Schlüsselpartner', ka: 'Schlüsselaktivitäten', vp: 'Wertangebote',
    cr: 'Kundenbeziehungen', cs: 'Kundensegmente', kr: 'Schlüsselressourcen',
    ch: 'Kanäle', cost: 'Kostenstruktur', rs: 'Einnahmequellen'
  };

  // ── Radar-SVG, ported von app.js:402-450 (+ Dual-Overlay-Erweiterung) ──
  const RADAR_DIMS = ['regulierung', 'skalierbarkeit', 'marktrisiko', 'digitalisierung', 'wettbewerb', 'nachhaltigkeit'];
  const RADAR_LABELS = ['Regulierungs-schutz', 'Skalier-barkeit', 'Markt-risiko', 'Digitali-sierung', 'Wettbewerbs-intensität', 'Nachhaltig-keit'];

  function radarPolygon(radar, color, cx, cy, r, max) {
    const n = RADAR_DIMS.length;
    function pt(i, val) {
      const angle = (Math.PI * 2 * i / n) - Math.PI / 2;
      const rr = (val / max) * r;
      return [cx + rr * Math.cos(angle), cy + rr * Math.sin(angle)];
    }
    const dataPoints = RADAR_DIMS.map((d, i) => pt(i, radar[d] || 0).join(',')).join(' ');
    const dots = RADAR_DIMS.map((d, i) => { const [x, y] = pt(i, radar[d] || 0); return `<circle cx="${x}" cy="${y}" r="3.5" fill="${color}"/>`; }).join('');
    return `<polygon points="${dataPoints}" fill="${color}33" stroke="${color}" stroke-width="2" stroke-linejoin="round"/>${dots}`;
  }

  // Baut ein Radar-SVG. `series` = [{radar, color}] — ein Eintrag für die
  // normale Wiki-Ansicht, zwei Einträge für "Radar-Schätzen" (Schätzung vs. echt).
  function buildRadarSVG(series) {
    const n = RADAR_DIMS.length;
    const cx = 110, cy = 110, r = 80, max = 5;

    function ptFull(i) {
      const angle = (Math.PI * 2 * i / n) - Math.PI / 2;
      return [cx + r * Math.cos(angle), cy + r * Math.sin(angle)];
    }
    let gridLines = '';
    for (let g = 1; g <= 5; g++) {
      const pts = RADAR_DIMS.map((_, i) => { const angle = (Math.PI * 2 * i / n) - Math.PI / 2; const rr = (g / max) * r; return `${cx + rr * Math.cos(angle)},${cy + rr * Math.sin(angle)}`; }).join(' ');
      gridLines += `<polygon points="${pts}" fill="none" stroke="#E5E0D5" stroke-width="1"/>`;
    }
    const axes = RADAR_DIMS.map((_, i) => { const [x, y] = ptFull(i); return `<line x1="${cx}" y1="${cy}" x2="${x}" y2="${y}" stroke="#E5E0D5" stroke-width="1"/>`; }).join('');
    const labelEls = RADAR_DIMS.map((d, i) => {
      const [x, y] = ptFull(i);
      const dx = (x - cx); const dy = (y - cy);
      const lx = cx + (dx / r) * (r + 22);
      const ly = cy + (dy / r) * (r + 18);
      const anchor = dx > 5 ? 'start' : dx < -5 ? 'end' : 'middle';
      const lines = RADAR_LABELS[i].split('-');
      return lines.map((line, li) => `<text x="${lx}" y="${ly + li * 12}" text-anchor="${anchor}" fill="#888" font-size="9.5" font-family="DM Sans,sans-serif">${line}</text>`).join('');
    }).join('');

    const polygons = series.map(s => radarPolygon(s.radar, s.color, cx, cy, r, max)).join('');

    return `<svg viewBox="0 0 220 240" width="220" height="240" xmlns="http://www.w3.org/2000/svg">
      ${gridLines}${axes}${polygons}${labelEls}
    </svg>`;
  }

  function avgAbsDeviation(estimate, real) {
    const diffs = RADAR_DIMS.map(d => Math.abs((estimate[d] || 0) - (real[d] || 0)));
    return diffs.reduce((a, b) => a + b, 0) / diffs.length;
  }

  // ── Glossar: Highlight + Popover, ported von app.js:1013-1090 ──────
  let _glossaryRegex = null;
  let _glossaryMap = null;

  function getGlossaryMap() {
    if (!_glossaryMap) {
      _glossaryMap = {};
      (window.GM_GLOSSARY || []).forEach(g => { _glossaryMap[g.term] = g; });
    }
    return _glossaryMap;
  }

  function getGlossaryRegex() {
    if (!_glossaryRegex) {
      const terms = (window.GM_GLOSSARY || GM_GLOSSARY || []).map(g => g.term).sort((a, b) => b.length - a.length);
      if (!terms.length) return null;
      const escaped = terms.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
      _glossaryRegex = new RegExp(`(?<![A-Za-zÄÖÜäöüß0-9])(${escaped.join('|')})(?![A-Za-zÄÖÜäöüß0-9])`, 'g');
    }
    return _glossaryRegex;
  }

  function highlightGlossary(text) {
    if (!text) return text;
    let out = text;
    const re = getGlossaryRegex();
    if (re) out = out.replace(re, (match) => `<span class="glossary-term" data-term="${match.replace(/"/g, '&quot;')}">${match}</span>`);
    out = out.replace(/\[\[Q:([a-z0-9\-]+)\]\]/g, ''); // Quellen-Marker: in der Lern-App nicht gerendert (kein Quellen-Tab), Text bleibt lesbar
    return out;
  }

  // Extrahiert alle Glossarbegriffe, die im Text vorkommen (für auto-generierte
  // Leitner-Karten, siehe leitner.js / Plan §5 "glossary:<term>").
  function findGlossaryTermsIn(text) {
    if (!text) return [];
    const re = getGlossaryRegex();
    if (!re) return [];
    const found = new Set();
    let m;
    const re2 = new RegExp(re.source, 'g');
    while ((m = re2.exec(text))) found.add(m[1]);
    return [...found];
  }

  function closeGlossaryPopover() {
    const pop = document.getElementById('glossaryPopover');
    if (pop) pop.remove();
  }

  function showGlossaryPopover(el) {
    closeGlossaryPopover();
    const map = getGlossaryMap();
    const g = map[el.dataset.term];
    if (!g) return;
    const pop = document.createElement('div');
    pop.id = 'glossaryPopover';
    pop.className = 'glossary-popover';
    pop.innerHTML = `
      <span class="gp-term">${g.term}${g.full ? ' — ' + g.full : ''}</span>
      <div>${g.definition}</div>
    `;
    document.body.appendChild(pop);
    const rect = el.getBoundingClientRect();
    const popW = pop.offsetWidth, popH = pop.offsetHeight;
    let top = window.scrollY + rect.bottom + 8;
    let left = window.scrollX + rect.left;
    if (left + popW > window.scrollX + window.innerWidth - 16) left = window.scrollX + window.innerWidth - popW - 16;
    if (left < 8) left = 8;
    if (top + popH > window.scrollY + window.innerHeight - 8) top = window.scrollY + rect.top - popH - 8;
    pop.style.top = top + 'px';
    pop.style.left = left + 'px';
  }

  function bindGlossaryPopover() {
    document.addEventListener('click', e => {
      const term = e.target.closest('.glossary-term');
      if (term) { e.stopPropagation(); showGlossaryPopover(term); return; }
      if (!e.target.closest('.glossary-popover')) closeGlossaryPopover();
    });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeGlossaryPopover(); });
    window.addEventListener('scroll', () => closeGlossaryPopover(), true);
  }

  // ── Steckbrief-Lookup-Helfer (GM_DATA durchsuchen) ─────────────────
  let _steckbriefIndex = null;
  function getSteckbrief(id) {
    if (!_steckbriefIndex) {
      _steckbriefIndex = {};
      (window.GM_DATA || GM_DATA || []).forEach(domain => {
        (domain.capabilities || []).forEach(cap => {
          (cap.items || []).forEach(item => { _steckbriefIndex[item.id] = item; });
        });
      });
    }
    return _steckbriefIndex[id] || null;
  }

  window.RenderKit = {
    buildBMC, hasBmcFieldsExplicit, BMC_LABELS,
    buildRadarSVG, RADAR_DIMS, RADAR_LABELS, avgAbsDeviation,
    highlightGlossary, findGlossaryTermsIn, bindGlossaryPopover, showGlossaryPopover, closeGlossaryPopover,
    getSteckbrief
  };
})();
