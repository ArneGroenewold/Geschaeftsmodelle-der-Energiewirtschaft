// ============================================================
// ENERGIEWIRTSCHAFT GESCHÄFTSMODELL-WIKI  v1.1
// app.js — Navigation, Rendering, Radar, Matrix, Akteure
// ============================================================
(function () {
  'use strict';

  // ── State ──────────────────────────────────────────────
  let currentView     = 'hero';
  let currentDomainId = null;
  let currentCapId    = null;
  let currentTab      = 'wiki';
  let searchTimeout   = null;

  // ── DOM refs ───────────────────────────────────────────
  const sidebarNav     = document.getElementById('sidebarNav');
  const hero           = document.getElementById('hero');
  const domainView     = document.getElementById('domainView');
  const detailView     = document.getElementById('detailView');
  const domainHeader   = document.getElementById('domainHeader');
  const capabilityGrid = document.getElementById('capabilityGrid');
  const detailContent  = document.getElementById('detailContent');
  const backBtn        = document.getElementById('backBtn');
  const searchInput    = document.getElementById('searchInput');
  const heroStats      = document.getElementById('heroStats');
  const versionTag     = document.getElementById('versionTag');
  const mobileToggle   = document.getElementById('mobileToggle');
  const sidebar        = document.getElementById('sidebar');
  const main           = document.getElementById('main');
  const matrixView     = document.getElementById('matrixView');
  const akteureView    = document.getElementById('akteureView');
  const tabBtns        = document.querySelectorAll('.tab-btn');

  // ── Init ───────────────────────────────────────────────
  function init() {
    versionTag.textContent = GM_WIKI_VERSION;
    renderHeroStats();
    buildSidebarNav();
    bindEvents();
    renderMatrix();
    renderAkteure();
    renderTimeline();
    buildExportPanel();
    renderMethodik();
  }

  // ── Hero Stats ─────────────────────────────────────────
  function renderHeroStats() {
    let totalCaps = 0, totalItems = 0;
    GM_DATA.forEach(d => {
      totalCaps += d.capabilities.length;
      d.capabilities.forEach(c => { totalItems += c.items.length; });
    });
    heroStats.innerHTML = `
      <div class="stat-item">
        <span class="stat-number">${GM_DATA.length}</span>
        <span class="stat-label">Wertschöpfungsstufen</span>
      </div>
      <div class="stat-item">
        <span class="stat-number">${totalCaps}</span>
        <span class="stat-label">Capability-Gruppen</span>
      </div>
      <div class="stat-item">
        <span class="stat-number">${totalItems}</span>
        <span class="stat-label">Geschäftsmodelle</span>
      </div>
      <div class="stat-item">
        <span class="stat-number">${Object.keys(GM_ACTORS_INDEX).length}</span>
        <span class="stat-label">Akteure vernetzt</span>
      </div>
    `;
  }

  // ── Sidebar Nav ────────────────────────────────────────
  function buildSidebarNav() {
    sidebarNav.innerHTML = '';
    GM_DATA.forEach(domain => {
      const wrap = document.createElement('div');
      wrap.className = 'nav-domain';
      wrap.dataset.id = domain.id;

      const btn = document.createElement('button');
      btn.className = 'nav-domain-btn';
      btn.dataset.id = domain.id;
      btn.innerHTML = `
        <span class="nav-domain-icon">${domain.icon}</span>
        <span>${domain.title}</span>
        <span class="nav-domain-dot" style="background:${domain.color}"></span>
      `;
      btn.addEventListener('click', () => { switchTab('wiki'); showDomain(domain.id); });

      const capList = document.createElement('div');
      capList.className = 'nav-capabilities';
      capList.id = `nav-caps-${domain.id}`;

      domain.capabilities.forEach(cap => {
        const capBtn = document.createElement('button');
        capBtn.className = 'nav-cap-btn';
        capBtn.textContent = cap.title;
        capBtn.dataset.capId = cap.id;
        capBtn.title = cap.title;
        capBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          switchTab('wiki');
          showCapability(domain.id, cap.id);
        });
        capList.appendChild(capBtn);
      });

      wrap.appendChild(btn);
      wrap.appendChild(capList);
      sidebarNav.appendChild(wrap);
    });
  }

  // ── Tabs ───────────────────────────────────────────────
  function switchTab(tab) {
    currentTab = tab;
    tabBtns.forEach(b => b.classList.toggle('active', b.dataset.tab === tab));
    hero.classList.add('hidden');
    domainView.classList.add('hidden');
    detailView.classList.add('hidden');
    matrixView.classList.add('hidden');
    akteureView.classList.add('hidden');
    const timelineView = document.getElementById('timelineView');
    const exportView   = document.getElementById('exportView');
    if (timelineView) timelineView.classList.add('hidden');
    if (exportView)   exportView.classList.add('hidden');
    const old = document.getElementById('searchResults');
    if (old) old.remove();

    if (tab === 'matrix')   { matrixView.classList.remove('hidden'); return; }
    if (tab === 'akteure')  { akteureView.classList.remove('hidden'); return; }
    if (tab === 'timeline') { if (timelineView) timelineView.classList.remove('hidden'); return; }
    if (tab === 'export')   { if (exportView)   exportView.classList.remove('hidden'); return; }
    if (tab === 'methodik') { const mv = document.getElementById('methodik-view'); if (mv) mv.classList.remove('hidden'); return; }
    if (tab === 'wiki') {
      if (currentCapId)    { setView('detail'); return; }
      if (currentDomainId) { setView('domain'); return; }
      setView('hero');
    }
  }

  // ── View: Domain ───────────────────────────────────────
  function showDomain(domainId) {
    const domain = GM_DATA.find(d => d.id === domainId);
    if (!domain) return;
    currentDomainId = domainId;
    currentCapId    = null;
    updateNavActive(domainId, null);
    setView('domain');

    domainHeader.innerHTML = `
      <div class="domain-eyebrow" style="color:${domain.color}">
        ${domain.icon} Wertschöpfungsstufe
      </div>
      <h2>${domain.title}</h2>
      <p class="domain-desc">${domain.description}</p>
    `;

    capabilityGrid.innerHTML = '';
    domain.capabilities.forEach(cap => {
      const card = document.createElement('div');
      card.className = 'cap-card';
      card.style.setProperty('--card-color', domain.color);
      const actorTags = cap.actors.slice(0, 3).map(a => `<span class="cap-actor-tag">${a}</span>`).join('');
      const more = cap.actors.length > 3 ? `<span class="cap-actor-tag">+${cap.actors.length - 3}</span>` : '';
      card.innerHTML = `
        <div class="cap-card-header">
          <h3 class="cap-card-title">${cap.title}</h3>
          <span class="cap-card-count">${cap.items.length} GM</span>
        </div>
        <p class="cap-card-desc">${cap.description}</p>
        <div class="cap-actors">${actorTags}${more}</div>
      `;
      card.addEventListener('click', () => showCapability(domainId, cap.id));
      capabilityGrid.appendChild(card);
    });
    closeMobileNav();
  }

  // ── View: Capability Detail ────────────────────────────
  function showCapability(domainId, capId) {
    const domain = GM_DATA.find(d => d.id === domainId);
    if (!domain) return;
    const cap = domain.capabilities.find(c => c.id === capId);
    if (!cap) return;
    currentDomainId = domainId;
    currentCapId    = capId;
    updateNavActive(domainId, capId);
    setView('detail');

    const actorTags = cap.actors.map(a => `<span class="detail-actor-tag">${a}</span>`).join('');
    const itemsHtml = cap.items.map(item => renderItemCard(item, domain.color, domain, cap)).join('');

    detailContent.innerHTML = `
      <div class="detail-cap-header">
        <div class="detail-cap-eyebrow">${domain.icon} ${domain.title}</div>
        <h2 class="detail-cap-title">${cap.title}</h2>
        <p class="detail-cap-desc">${cap.description}</p>
        <div class="detail-actors">${actorTags}</div>
      </div>
      <div class="items-list">${itemsHtml}</div>
    `;

    // Wire BMC canvas toggle (Pilot, v1.8)
    detailContent.querySelectorAll('.bmc-toggle-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const card = btn.closest('.item-card');
        const textView = card.querySelector('.item-view--text');
        const canvasView = card.querySelector('.item-view--canvas');
        const isCanvas = canvasView.style.display === 'none';
        textView.style.display = isCanvas ? 'none' : '';
        canvasView.style.display = isCanvas ? '' : 'none';
        btn.textContent = isCanvas ? '📄 Fließtext' : '📋 Canvas';
      });
    });

    // Wire copy buttons
    detailContent.querySelectorAll('.copy-steckbrief-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const itemId = btn.dataset.itemId;
        const item = cap.items.find(i => i.id === itemId);
        if (!item) return;
        const md = exportItemMarkdown(item, domain, cap);
        navigator.clipboard.writeText(md).then(() => {
          btn.textContent = '✓ Kopiert!';
          setTimeout(() => { btn.textContent = '⊟ Kopieren'; }, 2000);
        });
      });
    });
    closeMobileNav();
  }

  function renderItemCard(item, color, domain, cap) {
    const statusLabel = { aktiv: 'Aktiv', emerging: 'Emerging', planned: 'Geplant' }[item.status] || item.status;
    const radarSvg = item.radar ? buildRadarSVG(item.radar, color) : '';
    const akteurLinks = item.akteure ? item.akteure.map(a =>
      `<span class="akteur-chip" data-akteur="${a}">${a}</span>`
    ).join('') : '';
    // Typ-Markierung (seit v1.9): istUnternehmen === false → Canvas konzeptionell
    // nicht anwendbar (Institution/Marktinfrastruktur statt Unternehmen mit BMC).
    const bmcApplicable = item.istUnternehmen !== false;

    return `
      <div class="item-card">
        <div class="item-header">
          <h3 class="item-title">${item.title}</h3>
          <div class="item-header-right">
            <span class="item-status ${item.status}">${statusLabel}</span>
            ${bmcApplicable
              ? `<button class="bmc-toggle-btn" data-item-id="${item.id}" title="Zwischen Fließtext und Business Model Canvas wechseln (Pilot)">📋 Canvas</button>`
              : `<span class="bmc-na-tag" title="Business Model Canvas nicht anwendbar: ${item.title} ist eine Institution/Marktinfrastruktur, kein Unternehmen mit eigenem Geschäftsmodell im BMC-Sinn">📋 Canvas n/a</span>`}
            <button class="copy-steckbrief-btn" data-item-id="${item.id}" title="Steckbrief als Markdown kopieren">⊟ Kopieren</button>
          </div>
        </div>
        <div class="item-view item-view--text">
          <div class="item-body">
            <div class="item-left">
              <div class="item-definition">${item.definition}</div>
              ${item.wertschoepfung ? `<div class="item-deep-section"><div class="deep-label">💡 Wertschöpfungslogik</div><div class="deep-text">${item.wertschoepfung}</div></div>` : ''}
              ${item.herausforderungen ? `<div class="item-deep-section"><div class="deep-label">⚠ Strategische Herausforderungen</div><div class="deep-text">${item.herausforderungen}</div></div>` : ''}
              ${item.ausblick ? `<div class="item-deep-section"><div class="deep-label">→ Markttrends & Ausblick</div><div class="deep-text">${item.ausblick}</div></div>` : ''}
              ${item.angreifbarkeit ? `<div class="item-deep-section item-deep-section--angreifbarkeit"><div class="deep-label">🎯 Angreifbarkeit / Disruptionsrisiko</div><div class="deep-text">${item.angreifbarkeit}</div></div>` : ''}
              <div class="item-meta">
                ${metaRow('Erlösmodell', item.erloesmodell)}
                ${metaRow('Erlöstyp', item.erloesTyp ? `<span class="erloestyp-badge et-${item.erloesTyp.toLowerCase().replace('-','')}">${item.erloesTyp}</span>` : '')}
                ${metaRow('Regulierung', item.regulierung)}
                ${metaRow('Kundensegment', item.kundensegment)}
                ${metaRow('Differenzierung', item.differenzierung)}
              </div>
              ${akteurLinks ? `<div class="akteur-chips-row"><span class="meta-label-inline">Akteure:</span>${akteurLinks}</div>` : ''}
            </div>
            ${radarSvg ? `<div class="item-radar">${radarSvg}</div>` : ''}
          </div>
        </div>
        ${bmcApplicable ? `<div class="item-view item-view--canvas" style="display:none">
          ${renderBMCGrid(item)}
        </div>` : ''}
      </div>
    `;
  }

  // ── Business Model Canvas (Pilot, v1.8) ─────────────────
  // Mappt bestehende Steckbrief-Felder auf die 9 BMC-Bausteine.
  // Bewusst OHNE neue Schema-Felder (pragmatischer Einstieg laut
  // 04_BUSINESS_MODEL_CANVAS.md). Cost Structure/Channels/Customer
  // Relationships werden heuristisch aus Fließtext extrahiert;
  // ohne Treffer wird die Datenlücke offen ausgewiesen.
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
    const sentences = [
      ...splitSentences(item.definition),
      ...splitSentences(item.wertschoepfung),
      ...splitSentences(item.herausforderungen)
    ];

    // claimed: verhindert, dass derselbe Satz in mehrere BMC-Felder gezogen
    // wird (Reihenfolge = Priorität bei Mehrfachtreffern: Kundenbeziehungen
    // vor Kanäle vor Kostenstruktur).
    const claimed = new Set();
    const relationships = pickSentences(sentences, ['self-service','community','kundenservice','abo','vertrag','support','beratung','treueprogramm','gamification'], claimed);
    const channels = pickSentences(sentences, ['app','plattform','website','vergleichsportal','vertrieb','kanal','online','marktplatz','dongle'], claimed);
    const cost = pickSentences(sentences, ['kosten','capex','opex','investition','marge','aufwand','finanzier','prämie','beschaffungskosten'], claimed);

    // Key Partners aus 'akteure' ist eine Näherung: das Feld listet
    // meist vergleichbare/konkurrierende Marktakteure, nicht echte
    // Schlüsselpartner. Bei Einzel-Leitakteur-Items (akteure = [item selbst])
    // ist die Zuordnung sogar falsch (Unternehmen ist nicht sein eigener Partner) — dann Datenlücke.
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

  function renderBMCGrid(item) {
    const b = buildBMC(item);
    function cell(cls, label, hint, value) {
      const filled = !!value;
      return `<div class="bmc-cell ${cls} ${filled ? '' : 'bmc-cell--gap'}">
        <div class="bmc-cell-label">${label}${hint ? ` <span class="bmc-hint">${hint}</span>` : ''}</div>
        <div class="bmc-cell-text">${filled ? value : '— nicht erfasst (Datenlücke im Schema) —'}</div>
      </div>`;
    }
    return `
      <div class="bmc-pilot-note">📋 Business Model Canvas — automatisch aus bestehenden Steckbrief-Feldern abgeleitet (Pilot, keine separate inhaltliche Pflege). Rot markierte Felder sind Datenlücken im aktuellen Schema.</div>
      <div class="bmc-grid">
        ${cell('bmc-kp', 'Schlüsselpartner', '(Näherung)', b.kp)}
        ${cell('bmc-ka', 'Schlüsselaktivitäten', '(abgeleitet)', b.ka)}
        ${cell('bmc-vp', 'Wertangebote', '', b.vp)}
        ${cell('bmc-cr', 'Kundenbeziehungen', '', b.cr)}
        ${cell('bmc-cs', 'Kundensegmente', '', b.cs)}
        ${cell('bmc-kr', 'Schlüsselressourcen', '(abgeleitet)', b.kr)}
        ${cell('bmc-ch', 'Kanäle', '', b.ch)}
        ${cell('bmc-cost', 'Kostenstruktur', '', b.cost)}
        ${cell('bmc-rs', 'Einnahmequellen', '', b.rs)}
      </div>
    `;
  }

  function metaRow(label, value) {
    if (!value) return '';
    return `<div class="meta-row"><div class="meta-label">${label}</div><div class="meta-value">${value}</div></div>`;
  }

  // ── Radar SVG ──────────────────────────────────────────
  function buildRadarSVG(radar, color) {
    const dims = ['regulierung','skalierbarkeit','marktrisiko','digitalisierung','wettbewerb','nachhaltigkeit'];
    const labels = ['Regulierungs-schutz','Skalier-barkeit','Markt-risiko','Digitali-sierung','Wettbewerbs-intensität','Nachhaltig-keit'];
    const n = dims.length;
    const cx = 110, cy = 110, r = 80;
    const max = 5;

    function pt(i, val) {
      const angle = (Math.PI * 2 * i / n) - Math.PI / 2;
      const rr = (val / max) * r;
      return [cx + rr * Math.cos(angle), cy + rr * Math.sin(angle)];
    }
    function ptFull(i) {
      const angle = (Math.PI * 2 * i / n) - Math.PI / 2;
      return [cx + r * Math.cos(angle), cy + r * Math.sin(angle)];
    }

    // grid circles
    let gridLines = '';
    for (let g = 1; g <= 5; g++) {
      const pts = dims.map((_, i) => { const angle = (Math.PI * 2 * i / n) - Math.PI / 2; const rr = (g / max) * r; return `${cx + rr * Math.cos(angle)},${cy + rr * Math.sin(angle)}`; }).join(' ');
      gridLines += `<polygon points="${pts}" fill="none" stroke="#E5E0D5" stroke-width="1"/>`;
    }

    // axes
    let axes = dims.map((_, i) => { const [x, y] = ptFull(i); return `<line x1="${cx}" y1="${cy}" x2="${x}" y2="${y}" stroke="#E5E0D5" stroke-width="1"/>`; }).join('');

    // data polygon
    const dataPoints = dims.map((d, i) => pt(i, radar[d] || 0).join(',')).join(' ');
    const dataPolygon = `<polygon points="${dataPoints}" fill="${color}33" stroke="${color}" stroke-width="2" stroke-linejoin="round"/>`;

    // dots
    const dots = dims.map((d, i) => { const [x, y] = pt(i, radar[d] || 0); return `<circle cx="${x}" cy="${y}" r="3.5" fill="${color}"/>`; }).join('');

    // labels
    const labelEls = dims.map((d, i) => {
      const [x, y] = ptFull(i);
      const dx = (x - cx); const dy = (y - cy);
      const lx = cx + (dx / r) * (r + 22);
      const ly = cy + (dy / r) * (r + 18);
      const anchor = dx > 5 ? 'start' : dx < -5 ? 'end' : 'middle';
      const lines = labels[i].split('-');
      return lines.map((line, li) => `<text x="${lx}" y="${ly + li * 12}" text-anchor="${anchor}" fill="#888" font-size="9.5" font-family="DM Sans,sans-serif">${line}</text>`).join('');
    }).join('');

    return `<svg viewBox="0 0 220 220" width="180" height="180" style="flex-shrink:0">
      ${gridLines}${axes}${dataPolygon}${dots}${labelEls}
    </svg>`;
  }

  // ── Vergleichsmatrix ───────────────────────────────────
  function renderMatrix() {
    const container = document.getElementById('matrixContainer');
    if (!container) return;

    const allItems = [];
    GM_DATA.forEach(domain => {
      domain.capabilities.forEach(cap => {
        cap.items.forEach(item => {
          allItems.push({ domain, cap, item });
        });
      });
    });

    const filterBar = document.createElement('div');
    filterBar.className = 'matrix-filter-bar';
    filterBar.innerHTML = `
      <span class="matrix-filter-label">Filter:</span>
      ${['Alle', ...GM_ERLOESTYPEN].map(t =>
        `<button class="matrix-filter-btn${t === 'Alle' ? ' active' : ''}" data-type="${t}">${t}</button>`
      ).join('')}
      <span class="matrix-filter-label" style="margin-left:16px">Status:</span>
      <button class="matrix-filter-btn active" data-status="alle">Alle</button>
      <button class="matrix-filter-btn" data-status="aktiv">Aktiv</button>
      <button class="matrix-filter-btn" data-status="emerging">Emerging</button>
    `;

    const tableWrap = document.createElement('div');
    tableWrap.className = 'matrix-table-wrap';
    tableWrap.id = 'matrixTableWrap';

    container.appendChild(filterBar);
    container.appendChild(tableWrap);

    function rebuildTable(typeFilter, statusFilter) {
      const filtered = allItems.filter(({ item }) => {
        const typeOk = typeFilter === 'Alle' || item.erloesTyp === typeFilter;
        const statusOk = statusFilter === 'alle' || item.status === statusFilter;
        return typeOk && statusOk;
      });

      const dims = ['regulierung','skalierbarkeit','marktrisiko','digitalisierung','wettbewerb','nachhaltigkeit'];
      const dimLabels = ['Reg.-schutz','Skalierbar.','Marktrisiko','Digitalisierung','Wettbewerb','Nachhaltigkeit'];

      const rows = filtered.map(({ domain, cap, item }) => {
        const statusLabel = { aktiv: 'Aktiv', emerging: 'Emerging', planned: 'Geplant' }[item.status] || item.status;
        const radarCells = dims.map(d => {
          const v = item.radar ? (item.radar[d] || 0) : 0;
          return `<td class="radar-cell"><div class="radar-bar"><div class="radar-fill" style="width:${v * 20}%;background:${domain.color}"></div></div><span class="radar-val">${v}</span></td>`;
        }).join('');
        return `
          <tr class="matrix-row" data-domain="${domain.id}" data-cap="${cap.id}">
            <td class="mx-icon">${domain.icon}</td>
            <td class="mx-title"><strong>${item.title}</strong><br/><span class="mx-sub">${cap.title}</span></td>
            <td><span class="erloestyp-badge et-${(item.erloesTyp||'').toLowerCase().replace('-','')}">${item.erloesTyp || '—'}</span></td>
            <td><span class="item-status ${item.status}">${statusLabel}</span></td>
            ${radarCells}
          </tr>
        `;
      }).join('');

      tableWrap.innerHTML = `
        <table class="matrix-table">
          <thead>
            <tr>
              <th></th>
              <th>Geschäftsmodell</th>
              <th>Erlöstyp</th>
              <th>Status</th>
              ${dimLabels.map(l => `<th class="dim-header">${l}</th>`).join('')}
            </tr>
          </thead>
          <tbody>${rows || '<tr><td colspan="10" style="text-align:center;padding:32px;color:#999">Keine Treffer</td></tr>'}</tbody>
        </table>
      `;

      // Row click → navigate to detail
      tableWrap.querySelectorAll('.matrix-row').forEach(row => {
        row.addEventListener('click', () => {
          switchTab('wiki');
          showCapability(row.dataset.domain, row.dataset.cap);
        });
      });
    }

    let activeType = 'Alle', activeStatus = 'alle';
    rebuildTable(activeType, activeStatus);

    filterBar.addEventListener('click', e => {
      const btn = e.target.closest('.matrix-filter-btn');
      if (!btn) return;
      if (btn.dataset.type) {
        activeType = btn.dataset.type;
        filterBar.querySelectorAll('[data-type]').forEach(b => b.classList.toggle('active', b === btn));
      }
      if (btn.dataset.status) {
        activeStatus = btn.dataset.status;
        filterBar.querySelectorAll('[data-status]').forEach(b => b.classList.toggle('active', b === btn));
      }
      rebuildTable(activeType, activeStatus);
    });
  }

  // ── Akteurs-Vernetzung ─────────────────────────────────
  function renderAkteure() {
    const container = document.getElementById('akteureContainer');
    if (!container) return;

    const sorted = Object.entries(GM_ACTORS_INDEX).sort((a, b) => b[1].length - a[1].length);

    const searchWrap = document.createElement('div');
    searchWrap.className = 'akteur-search-wrap';
    searchWrap.innerHTML = `<input type="text" id="akteurSearch" placeholder="Akteur suchen…" class="akteur-search-input"/>`;

    const grid = document.createElement('div');
    grid.className = 'akteur-grid';
    grid.id = 'akteurGrid';

    container.appendChild(searchWrap);
    container.appendChild(grid);

    function renderCards(filter) {
      const filtered = filter
        ? sorted.filter(([name]) => name.toLowerCase().includes(filter.toLowerCase()))
        : sorted;
      grid.innerHTML = filtered.map(([name, entries]) => {
        const maxCount = Math.max(...sorted.map(e => e[1].length));
        const domains = [...new Set(entries.map(e => e.domainIcon + ' ' + e.domainTitle))];
        const items = entries.map(e => `
          <div class="akteur-item-link" data-domain="${e.domainId}" data-cap="${entries.find(x => x.itemId === e.itemId)?.domainId}">
            <span class="ail-icon">${e.domainIcon}</span>
            <span class="ail-text">${e.itemTitle}</span>
            <span class="ail-sub">${e.capTitle}</span>
          </div>
        `).join('');
        return `
          <div class="akteur-card">
            <div class="akteur-card-header">
              <div class="akteur-name">${name}</div>
              <div class="akteur-count-bar">
                <div class="akteur-count-fill" style="width:${(entries.length / maxCount) * 100}%"></div>
              </div>
              <div class="akteur-count-label">${entries.length} GM${entries.length !== 1 ? 's' : ''}</div>
            </div>
            <div class="akteur-domains">${domains.map(d => `<span class="akteur-domain-tag">${d}</span>`).join('')}</div>
            <div class="akteur-items-list">${items}</div>
          </div>
        `;
      }).join('');

      // click to navigate
      grid.querySelectorAll('.akteur-item-link').forEach(el => {
        el.addEventListener('click', () => {
          // find the matching entry
          const name = el.closest('.akteur-card').querySelector('.akteur-name').textContent;
          const title = el.querySelector('.ail-text').textContent;
          let targetDomain = null, targetCap = null;
          GM_DATA.forEach(domain => {
            domain.capabilities.forEach(cap => {
              cap.items.forEach(item => {
                if (item.titel === title || item.title === title) {
                  if (item.akteure && item.akteure.includes(name)) {
                    targetDomain = domain.id;
                    targetCap = cap.id;
                  }
                }
              });
            });
          });
          if (targetDomain) { switchTab('wiki'); showCapability(targetDomain, targetCap); }
        });
      });
    }

    renderCards('');
    document.getElementById('akteurSearch').addEventListener('input', e => renderCards(e.target.value));
  }

  // ── View Manager ───────────────────────────────────────
  function setView(view) {
    hero.classList.add('hidden');
    domainView.classList.add('hidden');
    detailView.classList.add('hidden');
    matrixView.classList.add('hidden');
    akteureView.classList.add('hidden');
    ['timelineView','exportView','methodik-view'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.classList.add('hidden');
    });
    const old = document.getElementById('searchResults');
    if (old) old.remove();
    currentView = view;
    if (view === 'hero')   hero.classList.remove('hidden');
    if (view === 'domain') domainView.classList.remove('hidden');
    if (view === 'detail') detailView.classList.remove('hidden');
  }

  function showHero() {
    currentDomainId = null; currentCapId = null;
    updateNavActive(null, null);
    setView('hero');
  }

  // ── Nav Active ─────────────────────────────────────────
  function updateNavActive(domainId, capId) {
    document.querySelectorAll('.nav-domain-btn').forEach(btn => {
      const active = btn.dataset.id === domainId;
      btn.classList.toggle('active', active);
      const cl = document.getElementById(`nav-caps-${btn.dataset.id}`);
      if (cl) cl.classList.toggle('open', active);
    });
    document.querySelectorAll('.nav-cap-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.capId === capId);
    });
  }

  // ── Search ─────────────────────────────────────────────
  function showSearch(query) {
    const q = query.toLowerCase().trim();
    if (!q) { showHero(); return; }

    const results = [];
    GM_DATA.forEach(domain => {
      domain.capabilities.forEach(cap => {
        cap.items.forEach(item => {
          const hay = [
            item.title, item.definition,
            item.wertschoepfung||'', item.herausforderungen||'', item.ausblick||'', item.angreifbarkeit||'',
            item.erloesmodell||'', item.regulierung||'',
            item.kundensegment||'', item.differenzierung||'',
            cap.title, domain.title, (item.akteure||[]).join(' ')
          ].join(' ').toLowerCase();
          if (hay.includes(q)) results.push({ domain, cap, item, q });
        });
      });
    });

    updateNavActive(null, null);
    setView('hero'); // temporarily
    hero.classList.add('hidden');

    const container = document.createElement('div');
    container.className = 'search-results';
    container.id = 'searchResults';

    const snippet = (text, q) => {
      if (!text) return '';
      const idx = text.toLowerCase().indexOf(q);
      if (idx === -1) return text.substring(0, 100) + '…';
      const s = Math.max(0, idx - 40), e = Math.min(text.length, idx + q.length + 60);
      return (s > 0 ? '…' : '') + escHtml(text.substring(s, idx)) +
        `<mark>${escHtml(text.substring(idx, idx + q.length))}</mark>` +
        escHtml(text.substring(idx + q.length, e)) + (e < text.length ? '…' : '');
    };

    container.innerHTML = `
      <h3>Suchergebnisse</h3>
      <p class="result-count">${results.length} Treffer für „${escHtml(query)}"</p>
      ${results.length > 0 ? results.map(r => `
        <div class="search-result-item" data-domain="${r.domain.id}" data-cap="${r.cap.id}">
          <div class="sri-title">${r.item.title}</div>
          <div class="sri-path">${r.domain.icon} ${r.domain.title} › ${r.cap.title}</div>
          <div class="sri-snippet">${snippet(r.item.definition, r.q)}</div>
        </div>
      `).join('') : '<p style="color:var(--ink-light);font-size:14px">Keine Treffer gefunden.</p>'}
    `;
    main.appendChild(container);
    container.querySelectorAll('.search-result-item').forEach(el => {
      el.addEventListener('click', () => {
        showCapability(el.dataset.domain, el.dataset.cap);
        searchInput.value = '';
        container.remove();
      });
    });
  }

  // ── Events ─────────────────────────────────────────────
  function bindEvents() {
    backBtn.addEventListener('click', () => {
      if (currentCapId && currentDomainId) showDomain(currentDomainId);
      else showHero();
    });

    searchInput.addEventListener('input', e => {
      clearTimeout(searchTimeout);
      const q = e.target.value.trim();
      searchTimeout = setTimeout(() => {
        if (q.length >= 2) showSearch(q);
        else {
          const old = document.getElementById('searchResults');
          if (old) old.remove();
          if (currentTab !== 'wiki') return;
          if (currentCapId) setView('detail');
          else if (currentDomainId) setView('domain');
          else setView('hero');
        }
      }, 200);
    });

    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => switchTab(btn.dataset.tab));
    });

    mobileToggle.addEventListener('click', () => sidebar.classList.toggle('open'));
    main.addEventListener('click', () => { if (sidebar.classList.contains('open')) sidebar.classList.remove('open'); });

    // Akteur-Chips in detail view (delegated)
    document.addEventListener('click', e => {
      const chip = e.target.closest('.akteur-chip');
      if (!chip) return;
      switchTab('akteure');
      setTimeout(() => {
        const search = document.getElementById('akteurSearch');
        if (search) { search.value = chip.dataset.akteur; search.dispatchEvent(new Event('input')); }
      }, 50);
    });
  }

  function closeMobileNav() { sidebar.classList.remove('open'); }

  function escHtml(str) {
    return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }

  // ── Regulierungs-Timeline ──────────────────────────────
  function renderTimeline() {
    const container = document.getElementById('timelineContainer');
    if (!container || !window.GM_TIMELINE) return;

    // Filter state
    let activeTag = 'Alle';
    let activeDomain = 'Alle';

    // Collect all tags and domains
    const allTags = ['Alle', ...new Set(GM_TIMELINE.flatMap(y => y.events.flatMap(e => e.tags)))].sort((a,b) => a==='Alle'?-1:b==='Alle'?1:a.localeCompare(b));
    const allDomainIds = ['Alle', ...new Set(GM_TIMELINE.flatMap(y => y.events.flatMap(e => e.domains)))];
    const domainLabels = { 'Alle': 'Alle', ...Object.fromEntries(GM_DATA.map(d => [d.id, d.icon + ' ' + d.title])) };

    const filterBar = document.createElement('div');
    filterBar.className = 'tl-filter-bar';
    filterBar.innerHTML = `
      <div class="tl-filter-row">
        <span class="tl-filter-label">Thema:</span>
        ${allTags.map(t => `<button class="tl-filter-btn${t==='Alle'?' active':''}" data-tag="${t}">${t}</button>`).join('')}
      </div>
      <div class="tl-filter-row" style="margin-top:8px">
        <span class="tl-filter-label">Domäne:</span>
        ${allDomainIds.map(id => `<button class="tl-filter-btn${id==='Alle'?' active':''}" data-domain="${id}">${domainLabels[id]||id}</button>`).join('')}
      </div>
    `;

    const track = document.createElement('div');
    track.className = 'tl-track';
    track.id = 'tlTrack';

    container.appendChild(filterBar);
    container.appendChild(track);

    function buildTimeline() {
      track.innerHTML = '';
      let anyVisible = false;
      GM_TIMELINE.forEach(yearObj => {
        const filtered = yearObj.events.filter(ev => {
          const tagOk = activeTag === 'Alle' || ev.tags.includes(activeTag);
          const domOk = activeDomain === 'Alle' || ev.domains.includes(activeDomain);
          return tagOk && domOk;
        });
        if (!filtered.length) return;
        anyVisible = true;

        const yearBlock = document.createElement('div');
        yearBlock.className = 'tl-year-block';

        const now = new Date().getFullYear();
        const isPast = yearObj.year < now;
        const isCurrent = yearObj.year === now;

        yearBlock.innerHTML = `
          <div class="tl-year-marker">
            <div class="tl-year-dot ${isCurrent?'current':isPast?'past':'future'}"></div>
            <div class="tl-year-label ${isCurrent?'current':isPast?'past':'future'}">${yearObj.year}</div>
          </div>
          <div class="tl-events">
            ${filtered.map(ev => {
              const domainObjs = ev.domains.map(id => GM_DATA.find(d => d.id === id)).filter(Boolean);
              const domColors = domainObjs.map(d => d.color);
              const gradStyle = domColors.length > 1
                ? `background:linear-gradient(135deg,${domColors[0]}22,${domColors[1]}22)`
                : `background:${domColors[0]||'#F5F2EC'}22`;
              const borderColor = domColors[0] || '#E5E0D5';
              return `
                <div class="tl-event-card" style="border-left-color:${borderColor};${gradStyle}"
                     data-domains='${JSON.stringify(ev.domains)}'>
                  <div class="tl-event-header">
                    <div class="tl-event-domains">
                      ${domainObjs.map(d=>`<span class="tl-domain-tag" style="background:${d.color}20;color:${d.color}">${d.icon} ${d.title}</span>`).join('')}
                    </div>
                    <div class="tl-event-tags">
                      ${ev.tags.map(t=>`<span class="tl-tag">${t}</span>`).join('')}
                    </div>
                  </div>
                  <div class="tl-event-title">${ev.title}</div>
                  <div class="tl-event-desc">${ev.desc}</div>
                  ${domainObjs.length ? `<button class="tl-goto-btn" data-domains='${JSON.stringify(ev.domains)}'>Zur Domäne →</button>` : ''}
                </div>
              `;
            }).join('')}
          </div>
        `;
        track.appendChild(yearBlock);
      });

      if (!anyVisible) {
        track.innerHTML = '<p style="padding:32px 72px;color:var(--ink-light);font-size:14px">Keine Ereignisse für diesen Filter.</p>';
      }

      // Goto domain buttons
      track.querySelectorAll('.tl-goto-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const domains = JSON.parse(btn.dataset.domains);
          if (domains[0]) { switchTab('wiki'); showDomain(domains[0]); }
        });
      });
    }

    buildTimeline();

    filterBar.addEventListener('click', e => {
      const btn = e.target.closest('.tl-filter-btn');
      if (!btn) return;
      if (btn.dataset.tag !== undefined) {
        activeTag = btn.dataset.tag;
        filterBar.querySelectorAll('[data-tag]').forEach(b => b.classList.toggle('active', b===btn));
      }
      if (btn.dataset.domain !== undefined) {
        activeDomain = btn.dataset.domain;
        filterBar.querySelectorAll('[data-domain]').forEach(b => b.classList.toggle('active', b===btn));
      }
      buildTimeline();
    });
  }

  // ── Export ─────────────────────────────────────────────
  function buildExportPanel() {
    const panel = document.getElementById('exportPanel');
    if (!panel) return;

    panel.innerHTML = `
      <div class="export-grid">
        <div class="export-card" id="exportMarkdown">
          <div class="export-icon">⬇</div>
          <div class="export-card-title">Markdown-Export</div>
          <div class="export-card-desc">Alle Geschäftsmodelle als strukturiertes Markdown — ideal für Notion, Confluence oder Word-Import.</div>
          <button class="export-btn" id="btnExportMd">Markdown herunterladen</button>
        </div>
        <div class="export-card" id="exportCSV">
          <div class="export-icon">⊞</div>
          <div class="export-card-title">CSV-Export (Matrix)</div>
          <div class="export-card-desc">Die Vergleichsmatrix als CSV — direkt in Excel oder PowerBI importierbar.</div>
          <button class="export-btn" id="btnExportCsv">CSV herunterladen</button>
        </div>
        <div class="export-card">
          <div class="export-icon">◻</div>
          <div class="export-card-title">Steckbrief kopieren</div>
          <div class="export-card-desc">Im Detail-View: Klicke auf einen Steckbrief und nutze den Kopieren-Button für direkten Einsatz in Präsentationen.</div>
          <span class="export-hint">Verfügbar im Wiki-Tab</span>
        </div>
      </div>
    `;

    document.getElementById('btnExportMd').addEventListener('click', exportMarkdown);
    document.getElementById('btnExportCsv').addEventListener('click', exportCSV);
  }

  function exportMarkdown() {
    let md = `# Energiewirtschaft Geschäftsmodell-Wiki\n_${GM_WIKI_VERSION}_\n\n`;
    GM_DATA.forEach(domain => {
      md += `\n---\n\n## ${domain.icon} ${domain.title}\n\n${domain.description}\n\n`;
      domain.capabilities.forEach(cap => {
        md += `### ${cap.title}\n\n${cap.description}\n\n`;
        md += `**Akteure:** ${cap.actors.join(', ')}\n\n`;
        cap.items.forEach(item => {
          md += `#### ${item.title}\n\n`;
          md += `${item.definition}\n\n`;
          md += `| Feld | Inhalt |\n|------|--------|\n`;
          md += `| **Erlösmodell** | ${item.erloesmodell||'—'} |\n`;
          md += `| **Erlöstyp** | ${item.erloesTyp||'—'} |\n`;
          md += `| **Regulierung** | ${item.regulierung||'—'} |\n`;
          md += `| **Kundensegment** | ${item.kundensegment||'—'} |\n`;
          md += `| **Differenzierung** | ${item.differenzierung||'—'} |\n`;
          md += `| **Status** | ${item.status||'—'} |\n\n`;
        });
      });
    });
    downloadFile('gm-wiki-export.md', md, 'text/markdown');
  }

  function exportCSV() {
    const dims = ['regulierung','skalierbarkeit','marktrisiko','digitalisierung','wettbewerb','nachhaltigkeit'];
    const header = ['Domäne','Capability','Geschäftsmodell','Erlöstyp','Status','Erlösmodell','Regulierung','Kundensegment','Differenzierung',...dims.map(d=>d.charAt(0).toUpperCase()+d.slice(1)),'Akteure'];
    const rows = [header.join(';')];
    GM_DATA.forEach(domain => {
      domain.capabilities.forEach(cap => {
        cap.items.forEach(item => {
          const radarVals = dims.map(d => item.radar ? (item.radar[d]||0) : '');
          rows.push([
            domain.title, cap.title, item.title,
            item.erloesTyp||'', item.status||'',
            item.erloesmodell||'', item.regulierung||'',
            item.kundensegment||'', item.differenzierung||'',
            ...radarVals,
            (item.akteure||[]).join(', ')
          ].map(v => `"${String(v).replace(/"/g,'""')}"`).join(';'));
        });
      });
    });
    downloadFile('gm-wiki-matrix.csv', rows.join('\n'), 'text/csv;charset=utf-8');
  }

  function exportItemMarkdown(item, domain, cap) {
    let md = `## ${item.title}\n\n`;
    md += `_${domain.icon} ${domain.title} › ${cap.title}_\n\n`;
    md += `${item.definition}\n\n`;
    if (item.wertschoepfung) md += `**💡 Wertschöpfungslogik:** ${item.wertschoepfung}\n\n`;
    if (item.herausforderungen) md += `**⚠ Strategische Herausforderungen:** ${item.herausforderungen}\n\n`;
    if (item.ausblick) md += `**→ Markttrends & Ausblick:** ${item.ausblick}\n\n`;
    if (item.angreifbarkeit) md += `**🎯 Angreifbarkeit / Disruptionsrisiko:** ${item.angreifbarkeit}\n\n`;
    md += `| Feld | Inhalt |\n|------|--------|\n`;
    md += `| **Erlösmodell** | ${item.erloesmodell||'—'} |\n`;
    md += `| **Erlöstyp** | ${item.erloesTyp||'—'} |\n`;
    md += `| **Regulierung** | ${item.regulierung||'—'} |\n`;
    md += `| **Kundensegment** | ${item.kundensegment||'—'} |\n`;
    md += `| **Differenzierung** | ${item.differenzierung||'—'} |\n`;
    md += `| **Status** | ${item.status||'—'} |\n`;
    return md;
  }

  function downloadFile(filename, content, type) {
    const blob = new Blob(['﻿'+content], { type });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = filename; a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  // ── Methodik-Seite ─────────────────────────────────────
  function renderMethodik() {
    const container = document.getElementById('methodik-content');
    if (!container) return;

    // Compute live stats for the page
    let totalDomains = GM_DATA.length, totalCaps = 0, totalItems = 0;
    GM_DATA.forEach(d => { totalCaps += d.capabilities.length; d.capabilities.forEach(c => { totalItems += c.items.length; }); });

    const radarDefs = [
      { key: 'regulierung',    label: 'Regulierungsschutz',   icon: '🏛️',
        desc: 'Wie stark schützt Regulierung das Geschäftsmodell vor Wettbewerb?',
        scale: ['1 = Vollständiger Wettbewerb (z.B. Prop Trading)', '3 = Teilreguliert (z.B. MSB-Entgelte)', '5 = Reguliertes Monopol (z.B. ÜNB-Netzentgelt nach ARegV)'] },
      { key: 'skalierbarkeit', label: 'Skalierbarkeit',       icon: '📈',
        desc: 'Wie gut lässt sich das Modell ohne proportionale Kosten skalieren?',
        scale: ['1 = Linearer Kostenzuwachs (z.B. EPC-Contractor)', '3 = Moderate Skaleneffekte', '5 = Plattform-Skalierung (z.B. Börse, SaaS-Plattform)'] },
      { key: 'marktrisiko',    label: 'Marktpreisrisiko',     icon: '📉',
        desc: 'Wie stark ist das Modell Marktpreis-Schwankungen ausgesetzt?',
        scale: ['1 = Kein Marktrisiko (z.B. reguliertes Netzentgelt)', '3 = Mittleres Risiko (z.B. Direktvermarktungs-Fee)', '5 = Volles Exposure (z.B. Merchant-Erzeugung, Prop Trading)'] },
      { key: 'digitalisierung',label: 'Digitalisierungsgrad', icon: '💻',
        desc: 'Wie digital-intensiv und technologiegetrieben ist das Modell?',
        scale: ['1 = Weitgehend analog (z.B. Konzessionsrecht)', '3 = IT-gestützt', '5 = KI/Plattform-nativ (z.B. VPP-Algorithmus, eMSP)'] },
      { key: 'wettbewerb',     label: 'Wettbewerbsintensität',icon: '⚔️',
        desc: 'Wie intensiv ist der Wettbewerb im Marktsegment?',
        scale: ['1 = Monopol / kein Wettbewerb (z.B. ÜNB)', '3 = Oligopol (z.B. Direktvermarktung)', '5 = Hypercompetitiv (z.B. B2C-Tarifvertrieb)'] },
      { key: 'nachhaltigkeit', label: 'Nachhaltigkeitsprofil',icon: '🌱',
        desc: 'Wie stark trägt das Modell zur Energiewende / Dekarbonisierung bei?',
        scale: ['1 = Keine Relevanz oder kontraproduktiv (z.B. Kohle-Merchant)', '3 = Neutral / indirekt', '5 = Kernbeitrag zur Energiewende (z.B. EE-Projektentwicklung, H2)'] }
    ];

    const erloesDefs = [
      { type: 'Reguliert',   color: '#2563EB', bg: '#EFF6FF', desc: 'Staatlich genehmigte Erlösobergrenze (ARegV, GasNEV). Kein Marktrisiko, aber Regulierungsrisiko. Typisch für Netzbetreiber.' },
      { type: 'Merchant',    color: '#B45309', bg: '#FEF3C7', desc: 'Erlös aus dem freien Marktpreis (Spot, Futures). Volles Marktpreisrisiko. Typisch für Erzeuger, Händler, Lieferanten.' },
      { type: 'Fee-based',   color: '#15803D', bg: '#F0FDF4', desc: 'Gebühren- oder provisionsbasiert, unabhängig vom Energiepreis. Typisch für Beratung, Direktvermarktung, Infrastrukturfonds.' },
      { type: 'Subscription',color: '#7C3AED', bg: '#FAF5FF', desc: 'Wiederkehrendes Abo-Modell (monatlich / jährlich). Typisch für SaaS-Plattformen, O&M-Verträge, Mietmodelle (Enpal, Tibber).' }
    ];

    container.innerHTML = `
      <div class="methodik-page">

        <!-- Header -->
        <div class="meth-hero">
          <div class="meth-eyebrow">Onboarding & Methodik</div>
          <h1 class="meth-title">So funktioniert<br/><em>dieses Wiki</em></h1>
          <p class="meth-intro">Das Energiewirtschaft-Geschäftsmodell-Wiki ist ein strukturiertes Referenzwerk für die deutsche und europäische Energiewirtschaft. Es richtet sich an Berater, Strategen und alle, die einen schnellen, tiefgründigen Überblick über die Geschäftsmodelle der Branche benötigen.</p>
          <div class="meth-stats-row">
            <div class="meth-stat"><span class="meth-stat-n">${totalDomains}</span><span class="meth-stat-l">Wertschöpfungs&shy;stufen</span></div>
            <div class="meth-stat"><span class="meth-stat-n">${totalCaps}</span><span class="meth-stat-l">Capability-Gruppen</span></div>
            <div class="meth-stat"><span class="meth-stat-n">${totalItems}</span><span class="meth-stat-l">Geschäftsmodelle</span></div>
            <div class="meth-stat"><span class="meth-stat-n">${Object.keys(GM_ACTORS_INDEX).length}</span><span class="meth-stat-l">Vernetzte Akteure</span></div>
          </div>
        </div>

        <!-- Struktur -->
        <div class="meth-section">
          <h2 class="meth-h2">📐 Struktur des Wikis</h2>
          <p class="meth-text">Das Wiki ist in drei Hierarchieebenen gegliedert:</p>
          <div class="meth-hierarchy">
            <div class="meth-level">
              <div class="meth-level-badge l1">L1</div>
              <div class="meth-level-body">
                <div class="meth-level-title">Wertschöpfungsstufe (Domäne)</div>
                <div class="meth-level-desc">z.B. „Vertrieb & Energielieferung" oder „Aggregation & Flexibilität" — die übergeordnete Kategorie im Sidebar.</div>
              </div>
            </div>
            <div class="meth-level">
              <div class="meth-level-badge l2">L2</div>
              <div class="meth-level-body">
                <div class="meth-level-title">Capability-Gruppe</div>
                <div class="meth-level-desc">z.B. „Digitale Neolieferanten" — bündelt thematisch verwandte Geschäftsmodelle. Erscheint als Karte auf der Domänen-Seite.</div>
              </div>
            </div>
            <div class="meth-level">
              <div class="meth-level-badge l3">L3</div>
              <div class="meth-level-body">
                <div class="meth-level-title">Geschäftsmodell (Steckbrief)</div>
                <div class="meth-level-desc">z.B. „Tibber – Dynamic Pricing & Energie-Ökosystem" — die detaillierteste Ebene mit vollständigem Steckbrief.</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Steckbrief-Felder -->
        <div class="meth-section">
          <h2 class="meth-h2">📋 Felder im Steckbrief</h2>
          <p class="meth-text">Jedes Geschäftsmodell besteht aus folgenden Feldern:</p>
          <div class="meth-fields-grid">
            ${[
              ['Definition', 'Beschreibt das Geschäftsmodell: Was wird angeboten, wer ist der Anbieter, welche Marktstruktur herrscht? Enthält konkrete Zahlen (Preise, Volumina, Marktanteile) wo verfügbar.'],
              ['💡 Wertschöpfungslogik', 'Erklärt den ökonomischen Kern: Wo entsteht die Marge, welche Hebel sind entscheidend, wo liegen strukturelle Wettbewerbsvorteile?'],
              ['⚠ Strategische Herausforderungen', 'Identifiziert die wichtigsten Risiken und Schwachstellen: regulatorisch, technologisch, wettbewerblich.'],
              ['→ Markttrends & Ausblick', 'Zeigt die Entwicklungsrichtung: Wohin entwickelt sich das Geschäftsmodell in 3–5 Jahren?'],
              ['Erlösmodell', 'Konkrete Beschreibung wie Umsatz erzielt wird (z.B. „Tagessatz 5.000–12.000 €/Tag" oder „0,2 ct/kWh Managementfee").'],
              ['Erlöstyp', 'Klassifikation in vier Kategorien: Reguliert / Merchant / Fee-based / Subscription (Details unten).'],
              ['Regulierung', 'Relevante Gesetze, Verordnungen und Regulierungsrahmen (EnWG, EEG, ARegV, EU-Direktiven etc.).'],
              ['Kundensegment', 'Primäre Zielgruppe des Geschäftsmodells (B2C, B2B, B2G, Prosumer etc.).'],
              ['Differenzierung', 'Entscheidende Wettbewerbsfaktoren im Marktsegment.'],
              ['Akteure (klickbar)', 'Wichtige Unternehmen im Segment. Klick öffnet die Akteurs-Vernetzungsansicht.'],
              ['🎯 Angreifbarkeit / Disruptionsrisiko (Pilot)', 'Bislang nur an 5 exponierten Steckbriefen befüllt: Wo ist das Geschäftsmodell strukturell verwundbar, wer greift bereits an, mit welchem Hebel?'],
            ].map(([f,d]) => `
              <div class="meth-field">
                <div class="meth-field-name">${f}</div>
                <div class="meth-field-desc">${d}</div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Business Model Canvas (Pilot) -->
        <div class="meth-section">
          <h2 class="meth-h2">🧩 Business Model Canvas (Pilot)</h2>
          <p class="meth-text">Jeder Steckbrief lässt sich über den Button <strong>„📋 Canvas"</strong> im Detail-View zusätzlich als klassischer 9-Felder Business Model Canvas (Osterwalder/Pigneur) anzeigen. Die Felder werden automatisch aus den bestehenden Steckbrief-Daten abgeleitet — es wird nichts separat gepflegt. Das hat zwei Konsequenzen, die offen ausgewiesen werden: Drei Bausteine (Kanäle, Kundenbeziehungen, Kostenstruktur) sind im aktuellen Schema nicht explizit erfasst und werden nur gefüllt, wenn sich im Fließtext passende Stichworte finden — sonst erscheint eine rot markierte Datenlücke. Und der Baustein „Schlüsselpartner" ist eine Näherung aus dem Feld <code>akteure</code>, das eigentlich vergleichbare Marktakteure listet, nicht notwendigerweise echte Partner — bei Einzel-Leitakteur-Steckbriefen (z.B. Tibber) wird er deshalb bewusst leer gelassen, weil ein Unternehmen nicht sein eigener Partner ist. Seit v1.9 zudem: Steckbriefe, die keine Unternehmen, sondern Institutionen oder Marktinfrastruktur beschreiben (z.B. Bundesnetzagentur, ENTSO-E), zeigen statt des Canvas-Buttons den Hinweis „📋 Canvas n/a" — der BMC unterstellt ein Unternehmen, das diese Steckbriefe nicht haben.</p>
        </div>

        <!-- Erlöstypen -->
        <div class="meth-section">
          <h2 class="meth-h2">💰 Erlöstypen erklärt</h2>
          <p class="meth-text">Jedes Geschäftsmodell wird in einen von vier Erlöstypen eingeordnet — die wichtigste strategische Klassifikation:</p>
          <div class="meth-erloestypen">
            ${erloesDefs.map(e => `
              <div class="meth-erloestyp-card" style="border-left-color:${e.color}">
                <span class="erloestyp-badge et-${e.type.toLowerCase().replace('-','')}">${e.type}</span>
                <p class="meth-et-desc">${e.desc}</p>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Radar-Dimensionen -->
        <div class="meth-section">
          <h2 class="meth-h2">🕸 Radar-Dimensionen erklärt</h2>
          <p class="meth-text">Jedes Geschäftsmodell erhält Scores von 1–5 auf sechs Dimensionen. Die Scores sind qualitative Einschätzungen — keine Punktebewertung, sondern Positionierung im strategischen Raum.</p>
          <div class="meth-radar-grid">
            ${radarDefs.map(r => `
              <div class="meth-radar-card">
                <div class="meth-radar-header">
                  <span class="meth-radar-icon">${r.icon}</span>
                  <span class="meth-radar-label">${r.label}</span>
                </div>
                <p class="meth-radar-desc">${r.desc}</p>
                <div class="meth-radar-scale">
                  ${r.scale.map(s => `<div class="meth-scale-item">${s}</div>`).join('')}
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Ansichten -->
        <div class="meth-section">
          <h2 class="meth-h2">🗺 Ansichten im Überblick</h2>
          <div class="meth-views-grid">
            ${[
              ['Wiki', 'Hauptansicht. Navigation über L1-Domänen → L2-Capability-Karten → L3-Steckbriefe. Einstieg für strukturierte Lektüre.'],
              ['Matrix', 'Tabellarische Übersicht aller Geschäftsmodelle. Filterbar nach Erlöstyp und Status. Nützlich für Vergleiche und Screening.'],
              ['Akteure', 'Zeigt alle Unternehmen und in welchen Geschäftsmodellen sie aktiv sind. Ideal für Wettbewerbsanalysen und Akteurslandkarten.'],
              ['Timeline', 'Regulatorische Meilensteine 2021–2032. Filterbar nach Thema und Domäne. Nützlich für Pitch-Vorbereitung und Regulierungsübersichten.'],
              ['Export', 'Download aller Inhalte als Markdown (für Notion/Confluence) oder CSV (für Excel/PowerBI). Einzelne Steckbriefe können per Kopier-Button direkt exportiert werden.'],
            ].map(([v,d]) => `
              <div class="meth-view-card">
                <div class="meth-view-name">${v}</div>
                <div class="meth-view-desc">${d}</div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Quellen & Methodik -->
        <div class="meth-section">
          <h2 class="meth-h2">📚 Quellen & Einschränkungen</h2>
          <div class="meth-sources">
            <p class="meth-text">Die Inhalte basieren auf folgenden Quellen:</p>
            <ul class="meth-source-list">
              <li><strong>Regulatorische Primärquellen:</strong> BNetzA Monitoringberichte, EnWG/EEG/ARegV/MsbG-Gesetzestexte, EU-Direktiven (EMD, RED III, CSRD), ENTSO-E Network Codes</li>
              <li><strong>Marktdaten:</strong> BDEW-Statistiken, BNetzA-Tätigkeitsberichte, Unternehmens-Geschäftsberichte, EEX/EPEX-Marktdaten</li>
              <li><strong>Fachliteratur:</strong> Agora Energiewende Studien, dena-Gutachten, Fraunhofer ISI / IWES Publikationen</li>
              <li><strong>Stand:</strong> Juni 2026 — Angaben zu Preisen, Vergütungssätzen und regulatorischen Schwellenwerten können sich ändern</li>
            </ul>
            <div class="meth-disclaimer">
              <strong>Hinweis:</strong> Dieses Wiki ist ein internes Arbeitsinstrument für Beratungszwecke. Zahlenangaben (Tagessätze, Vergütungssätze, Marktpreise) sind qualitative Orientierungswerte — für verbindliche Aussagen sind aktuelle Primärquellen zu konsultieren.
            </div>
          </div>
        </div>

        <!-- Kontakt / Pflege -->
        <div class="meth-section meth-section-last">
          <h2 class="meth-h2">✏️ Pflege & Weiterentwicklung</h2>
          <p class="meth-text">Das Wiki ist ein lebendes Dokument — Energiemärkte und Regulierung ändern sich schnell. Für Ergänzungen, Korrekturen oder neue Geschäftsmodellvorschläge: bitte direkt an den Ersteller wenden. Die aktuelle Version ist <strong>${GM_WIKI_VERSION}</strong>.</p>
        </div>

      </div>
    `;
  }

  // ── Boot ───────────────────────────────────────────────
  init();
})();
