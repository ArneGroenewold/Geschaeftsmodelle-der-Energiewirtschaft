# 🗒 Backlog — Wiki & Lern-App

> **Zweck:** Eine einzige Liste aller offenen Ideen, Ausbaustufen und inhaltlichen Lücken für **beide** Anwendungen (`app/` = Wiki, `lern-app/` = Lern-App). Ersetzt das Zusammensuchen aus README, Projektkontext und den Konzeptdokumenten.
>
> **Stand:** Juli 2026, nach Session 28 (Längen-Bias-Fix + Szenario-Missionen).
>
> **Pflege:** Erledigte Punkte hier ~~durchstreichen~~ und in `02_ENTWICKLUNGSHISTORIE.md` als Session dokumentieren. Neue Ideen hier eintragen, statt sie in anderen Dateien zu verstreuen.

---

## 0. Wie du mit diesem Backlog arbeitest

Neue Claude-Session so starten:

> „Lies `dokumentation/00_PROJEKTKONTEXT.md` und `dokumentation/09_BACKLOG.md`, dann arbeiten wir an [Punkt X]."

**Priorisierung:**
- **P1** = hoher Hebel / kleiner Aufwand oder inhaltlich überfällig
- **P2** = sinnvoll, aber Umfang vorher abstimmen
- **P3** = Nice-to-have / bewusst zurückgestellt

**Wichtigste Konventionen, die für jeden Punkt gelten** (Details in `03_DATENMODELL_TECHNIK.md` und `08_LERNAPP_UMSETZUNG.md`):
- Dateien **nur** über Datei-Tools ändern, nie per Bash schreiben (Mount-Staleness).
- `app/data.js` ist **Single Source of Truth** — die Lern-App lädt sie unverändert. Keine Fakten in der Lern-App duplizieren, immer über `steckbriefIds` referenzieren.
- Lern-App-Release = `lern-app/sw.js` → `CACHE_NAME` hochzählen (aktuell **v15**), sonst bekommen installierte PWAs die Änderung nicht.
- Wiki-Release = `GM_WIKI_VERSION` in `data.js` hochzählen (aktuell **v2.7**), ZIP-Konvention nur fürs Wiki.
- Fakten immer websearch-verifizieren; `GM_FAKTEN_STAND` pflegen (aktuell Juli 2026).

---

## 1. Inhaltliche Lücken (gemessen, nicht geschätzt)

### 1.1 🔴 P1 — 11 von 75 Steckbriefen sind in der Lern-App gar nicht abgedeckt

Gemessen in Session 29: Von 75 Steckbriefen werden **64 abgedeckt** (62 direkt über `steckbriefIds` in Quiz-Items, 2 weitere nur über Unit-Vertiefungen). **11 Steckbriefe kommen in der Lern-App überhaupt nicht vor:**

| Steckbrief-ID | Titel | Passendes Modul |
|---|---|---|
| `L3-VNB-BETREIB-02` | Pacht-/Konzessionsmodell (Asset-Trennung Eigentum/Betrieb) | M3 Netze |
| `L3-VNB-BETREIB-03` | Netzbetriebsführung durch Dritte (Outsourcing) | M3 Netze |
| `L3-VNB-BETREIB-04` | Interkommunale Netzgesellschaft (Kooperationsmodell) | M3 Netze |
| `L3-HANDEL-PORTFOLIO-02` | Direktvermarktung & EE-Portfoliomanagement | M1 Spielfeld / M2 Erzeugen |
| `L3-FINANZ-FONDS-01` | Infrastrukturfonds (Geschlossener EE-Fonds) | M8 Ökosystem |
| `L3-DIGITAL-PLATTFORM-01` | HEMS / EMS-Plattform (B2B2C) | M5 Flex / M6 Prosumer |
| `L3-DIGITAL-PLATTFORM-02` | Wärmepumpen-Contracting (as-a-Service) | M7 Wärme |
| `L3-BERAT-STRAT-02` | IT- & Digitaltransformation (Capgemini Invent, Accenture) | M8 Ökosystem |
| `L3-BERAT-STRAT-03` | Regulierungsberatung & Behördeninteraktion | M8 Ökosystem |
| `L3-RECHT-KANZLEI-01` | Energierechtskanzlei (Regulierung & Netzrecht) | M8 Ökosystem |
| `L3-VERSICH-ENERGIE-02` | Cyber-Versicherung für Energieinfrastruktur (KRITIS) | M8 Ökosystem |

**Warum das zählt:** Das Curriculum wirbt mit „alle 8 Module über das ganze Wiki". Diese elf Modelle — darunter mit `L3-BERAT-STRAT-02` ausgerechnet das eigene Beratungssegment — sind lernseitig unsichtbar.

**Nächster Schritt:** Je 3–5 Items pro Steckbrief nach dem Feld→Format-Mapping (`08_LERNAPP_UMSETZUNG.md` §6) ergänzen, in die bestehenden Einheiten einsortieren (keine neuen Module nötig). Aufwand: ~40–50 Items.

**Prüfskript** (im Browser auf der geladenen Lern-App ausführen, findet die Lücke jederzeit neu):
```js
const alle = new Set(); (function walk(n){ if(Array.isArray(n)) return n.forEach(walk);
  if(n&&typeof n==='object'){ if(typeof n.id==='string'&&n.id.startsWith('L3-')) alle.add(n.id);
  Object.values(n).forEach(walk);} })(GM_DATA);
const ref = new Set(); Object.values(LERN_QUIZ_ITEMS).forEach(i=>(i.steckbriefIds||[]).forEach(s=>ref.add(s)));
LERN_UNITS.forEach(u=>{(u.vertiefungSteckbriefIds||[]).forEach(s=>ref.add(s)); if(u.primarySteckbriefId) ref.add(u.primarySteckbriefId);});
console.log('Nicht abgedeckt:', [...alle].filter(id=>!ref.has(id)));
```

### 1.2 🟠 P2 — BMC-Puzzle nutzt nur 11 von 73 möglichen Steckbriefen

Alle 73 unternehmensförmigen Steckbriefe haben inzwischen explizite `bmc_*`-Felder (seit v2.0), aber nur **11 BMC-Puzzle-Items** existieren. Das Format ist praktisch **authoring-frei** (Karten werden live aus `buildBMC` erzeugt; einzig `distraktorSteckbriefId` ist zu wählen) — hier liegt viel Lernwert für sehr wenig Aufwand.

### 1.3 🟠 P2 — Quellenabdeckung im Wiki ausbaufähig

23 belegte Quellen / 40 Inline-Marker bei 75 Steckbriefen. Konzept und Mechanik stehen (`05_QUELLEN_KONZEPT.md`); der Ausbau war bewusst „opportunistisch". Kandidaten: Schlüsselzahlen in den seit v2.6/v2.7 neu geschriebenen Steckbriefen (Kraken/Utility-OS, THG-Quote, BESS-Optimierung).

### 1.4 🟡 P3 — Formatverteilung der Lern-App ist MC-lastig

337 Items: **MC 219** / Lückentext 47 / Radar 35 / Rechnung 25 / BMC 11. Die Bloom-Quote ist mit 54 % K3/K4 gut, aber die Formatvielfalt könnte besser sein (siehe 1.2 sowie die neuen Formate in 3.2).

---

## 2. Wiki (`app/`) — Weiterentwicklung

| # | Prio | Punkt | Notiz |
|---|---|---|---|
| W1 | **P1** | **Verteilung an Kollegen klären** | Größter verbleibender Hebel, seit Langem offen. GitHub Pages ist öffentlich — für interne Verteilung ggf. SharePoint oder internes Static-Hosting. Entscheidung steht aus. |
| W2 | **P1** | **Fakten-Refresh ~Anfang 2027** | Halbjährlicher Rhythmus. `GM_FAKTEN_STAND` pflegen, Checkliste in `08_LERNAPP_UMSETZUNG.md` §3 für die Rückwirkung auf die Lern-App abarbeiten. |
| W3 | P2 | **Benchmarking als Kundenwerkzeug** | Vollständiges Konzept liegt in `06_BENCHMARKING_KONZEPT.md`, **nie umgesetzt**. Nächster Schritt laut Konzept: Pilot mit einem realen Kundenfall. |
| W4 | P2 | Quellen ausbauen | siehe 1.3 |
| W5 | P2 | Regelmäßiges Lücken-Review Akteure/Modelle | Das Review in v2.7 fand Gravierendes (LichtBlick fehlte komplett, ~1,7 Mio. Verträge). Solche Reviews sollten wiederkehren, nicht einmalig sein. |
| W6 | P3 | Changelog-Mechanismus in der App | Wird erst mit Verteilung (W1) relevant. |
| W7 | P3 | Archiv-Lücken | `archiv-aeltere-versionen/`: v1.6, v2.0 und v2.2 fehlen. Kosmetisch. |

---

## 3. Lern-App (`lern-app/`) — Weiterentwicklung

### 3.1 Umgesetzt (nicht neu diskutieren)
~~Module 1–8, 47 Einheiten, 337 Items~~ · ~~5 Quizformate~~ · ~~Leitner-Review~~ · ~~Vertiefungs-Lesemodus~~ · ~~Akkordeon + Prozentfortschritt~~ · ~~Bossquiz je Modul~~ · ~~Zertifizierungsquiz + druckbares Zertifikat~~ · ~~PWA/Offline~~ · ~~Längen-Bias-Fix (97 % → 32 %)~~ · ~~Szenario-Missionen (8 Missionen, eine pro Modul)~~

### 3.2 Offen

| # | Prio | Punkt | Notiz |
|---|---|---|---|
| L1 | **P1** | **Lücken-Items für die 11 fehlenden Steckbriefe** | siehe 1.1 — der inhaltlich wichtigste Punkt. |
| L2 | **P1** | **Confidence-Rating** (Konzept §5) | Vor der Auflösung „sicher / unsicher / geraten" abfragen; **sicher + falsch = höchste Wiederholungspriorität**. Kleiner Eingriff in `quiz-formats.js` + `leitner.js`, großer didaktischer Effekt. |
| L3 | P2 | **Kompetenz-Radar des Lerners** (Konzept §7) | Ø-Leistung je Modul/Bloom-Stufe im 6-Achsen-Radar. **Die Daten liegen schon vor** (`bossQuizzes`, `certification.moduleScores`), und der Radar-Renderer existiert in `shared/render-kit.js`. |
| L4 | P2 | **BMC-Puzzle ausweiten** | siehe 1.2 — viel Ertrag für wenig Aufwand. |
| L5 | P2 | **Disruptor-Modus** (Konzept §5) | Letztes noch offenes K4-Format. Passt zur Persona „B6 — Disruptor" und zum Feld `angreifbarkeit` (auf 73/73 Steckbriefen vorhanden → authoring-arm). |
| L6 | P2 | Weitere Szenario-Missionen | Engine ist datengetrieben; neue Missionen = reine Redaktion in `lern-szenarien.js`, kein Code. Schema im Dateikopf dokumentiert. |
| L7 | P3 | Kleinformate aus Konzept §5 | „Falschaussage finden", „Wer bin ich?", „Timeline-Ordnen". |
| L8 | P3 | Einstufungstest + Rollen-Lernpfade | Stufe 4 des Konzepts, entlang der Personas (`01_PERSONAS.md`). |
| L9 | P3 | Update-Quiz nach Fakten-Refresh | Zeigt gezielt die Items, deren Steckbriefe sich geändert haben — koppelt an W2. |
| L10 | P3 | Cross-Modul-Interleaving im Review | Bewusst zurückgestellt (Konzept §11). |
| L11 | P3 | Dark Mode | Bewusst **nicht** gebaut. `lern.css` nutzt aber schon CSS-Custom-Properties, ein `prefers-color-scheme`-Block wäre nachrüstbar, ohne umzubauen. |
| L12 | P3 | IndexedDB statt localStorage | Erst nötig, wenn das Datenvolumen wächst. Export/Import existiert bereits als Sicherheitsnetz. |

---

## 4. Übergreifend / Betrieb

| # | Prio | Punkt | Notiz |
|---|---|---|---|
| Ü1 | **P1** | **QA-Skripte vor jedem Lern-App-Release laufen lassen** | (a) Struktur-/Konsistenz-Check aus Session 26, (b) Längen-Bias-Check aus Session 27, (c) Abdeckungs-Check aus 1.1. Alle drei laufen im Browser auf der geladenen App. Ohne diese Checks schleichen sich genau die Fehler wieder ein, die in S26–S28 behoben wurden. |
| Ü2 | P2 | Längen-Bias bei **neuen** Items im Blick behalten | Regel für die Autorenschaft: Die richtige Option darf nicht systematisch die längste sein. Distraktoren sollen plausible Fehlvorstellungen sein, keine Einzeiler-Strohmänner. |
| Ü3 | P2 | Lokaler Testserver | Weder Python noch Node sind auf dem Rechner installiert (`python` ist nur der Microsoft-Store-Stub). Für Service-Worker-Tests braucht es HTTP — Workaround: PowerShell-`HttpListener`-Skript (Muster in der Historie zu Session 29). **Beim Testen wichtig:** Der SW cached die JS-Dateien; nach Datenänderungen erst Caches leeren, sonst testet man die alte Version. |
| Ü4 | P3 | Kein Build/Framework — bewusst | Gilt für beide Apps. Nicht „modernisieren" ohne guten Grund; die Wartbarkeit per Claude-Datei-Edit ist der Kern der Architektur. |

---

## 5. Bewusst verworfen / nicht wieder aufmachen

Damit spätere Sessions keine bereits getroffenen Entscheidungen neu verhandeln:

- **Dark Mode** — bewusst nicht, hell/editorial ist die Designentscheidung (Wiki wie Lern-App).
- **Build-Step/Framework/npm** — bewusst nicht, siehe Ü4.
- **Fakten in der Lern-App duplizieren** — nie. Immer `steckbriefIds` auf `app/data.js`.
- **BMC für institutionelle Steckbriefe** (BNetzA, ENTSO-E, `istUnternehmen:false`) — bewusst „n/a" statt irreführend befüllt.
- **Vollrollout ohne Abstimmung** — große Schreibaufwände (BMC-Felder, Fallbeispiele, Angreifbarkeit) wurden immer erst als Pilot vorgeschlagen bzw. im Umfang abgestimmt. Dieses Muster beibehalten.
- **„1,5 Grad"** — vermuteter Namensfehler; existiert **nicht** im Code. Korrekt und konsistent sind „Fünf Grad" (`L3-VERTRIEB-NEO-02`) und „1KOMMA5°" (`L3-PROSUM-MIETER-03`). Offen bleibt nur, wo der Eindruck herrührte.
