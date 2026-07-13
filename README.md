# ⚡ Energiewirtschaft Geschäftsmodell-Wiki — Projektordner

> **Dies ist der vollständige Projektordner.** Er enthält die lauffähige Anwendung, die gesamte Projektdokumentation und ein Archiv älterer Versionen. Gedacht zur Ablage in Claude Cowork oder einem vergleichbaren Projekt-Workspace, damit jede neue Session sofort vollen Kontext hat.

---

## 🗂 Ordnerstruktur

```
Energiewirtschaft-GM-Wiki/
├── README.md                          ← diese Datei (Einstiegspunkt)
│
├── app/                                ← die lauffähige Anwendung (v2.7)
│   ├── index.html
│   ├── style.css
│   ├── app.js
│   └── data.js
│
├── dokumentation/                      ← Projektkontext & Konzepte
│   ├── 00_PROJEKTKONTEXT.md            ← Start hier für vollen Kontext
│   ├── 01_PERSONAS.md
│   ├── 02_ENTWICKLUNGSHISTORIE.md
│   ├── 03_DATENMODELL_TECHNIK.md
│   ├── 04_BUSINESS_MODEL_CANVAS.md
│   ├── 05_QUELLEN_KONZEPT.md
│   ├── 06_BENCHMARKING_KONZEPT.md
│   └── 07_LERNAPP_KONZEPT.md
│
└── archiv-aeltere-versionen/           ← frühere ZIP-Stände (v1.1–v2.5; v1.6, v2.0 und v2.2 fehlen)
```

---

## 🚀 Schnellstart

**Anwendung öffnen:** `app/index.html` im Browser öffnen — läuft komplett lokal, kein Server nötig.

**Mit Claude weiterarbeiten:** Neue Session/Projekt eröffnen mit:
> „Lies `dokumentation/00_PROJEKTKONTEXT.md`, dann arbeiten wir weiter an [Thema]."

Claude hat damit sofort: aktuellen inhaltlichen Stand, technische Architektur, Designkonventionen, Personas und offene Roadmap-Punkte.

---

## 📊 Aktueller Stand (v2.7, Juli 2026 — Fakten geprüft: Juli 2026)

| Kennzahl | Wert |
|---|---|
| Wertschöpfungsstufen (Domänen) | 19 |
| Capability-Gruppen | 33 |
| Geschäftsmodelle (Steckbriefe) | 75 |
| Vernetzte Akteure | 240 |
| Glossarbegriffe | ~115 |
| Praxisbeispiele (Deep Dive) | 73 (alle unternehmensförmigen Steckbriefe) |
| Angreifbarkeit/Disruptionsrisiko | 73 (Vollrollout seit v2.6) |
| Belegte Quellen | 23 (Quellenregister + 40 Inline-Marker + Quellen-Seite) |
| Timeline-Events | 43 (2021–2032) |

Features: Steckbriefe mit Tiefenanalyse (Wertschöpfung/Herausforderungen/Ausblick), vollständiger Business Model Canvas pro Steckbrief (alle 9 Bausteine für 73/75 unternehmensförmige Steckbriefe explizit befüllt, Toggle „Fließtext | Canvas", mit Typ-Markierung für Nicht-Unternehmen), Feld „Angreifbarkeit/Disruptionsrisiko" und Feld „Praxisbeispiel/Deep Dive" mit einem konkreten Mechanik-Beispiel anhand eines realen Akteurs für alle 73 unternehmensförmigen Steckbriefe, Glossar mit ~115 Fachbegriffen/Abkürzungen (eigene Seite + klickbare Inline-Hervorhebung mit Definitions-Popover im Fließtext), Radar-Charts, Vergleichsmatrix, Akteursnetz, Regulierungs-Timeline, Methodik-/Onboarding-Seite, Volltext-Suche, Markdown-/CSV-Export, Print-Layout.

**Neu in v2.7 (Lücken-Review: Octopus/Kraken, LichtBlick & Co. + 4 neue Steckbriefe):** Vollständigkeitsprüfung auf fehlende relevante Akteure und Geschäftsmodelle, alle Fakten websearch-verifiziert (Stand Juli 2026). **(1) Vier neue Steckbriefe:** **Octopus Energy – Tech-Versorger mit Kraken-Plattform** (>1 Mio. Kunden DE seit Sept. 2025, Neolieferanten-Gruppe), **Utility-OS-Lizenzierung (Kraken-Modell)** (Kraken-Spin-off Mitte 2026, ~8,65 Mrd. $ Bewertung, >70 Mio. Accounts; powercloud/Lynqtech/SAP als Wettbewerber), **Batteriespeicher-Optimierung & Route-to-Market** (Entrix, Enspired, terralayr; Tolling/Floor-Strukturen) und **THG-Quotenhandel & -Pooling** (neue Capability-Gruppe „THG-Quote & Emissionsvermarktung" unter eMobility; Prämien 2026 ~300–450 €). **(2) Fehlende Akteure ergänzt:** LichtBlick (Eneco, ~1,7 Mio. Verträge — war komplett abwesend!) im Premium-Ökostrom-Steckbrief inkl. Definitionstext, Fastned + Tesla Supercharger (CPO), Kyon Energy + Tesvolt (BESS), Aira (WP-Contracting), trawa (B2B-Beschaffung). **(3) Glossar +4** (THG-Quote, Utility-OS, Route-to-Market, Tolling) → ~115. **(4) Quellen +2** (Kraken-Spin-off, THG-Quote/ADAC) → 23, **Timeline +1** (Kraken-Spin-off 2026) → 43 Events.

**Neu in v2.6 (Fakten-Refresh Juli 2026 + Angreifbarkeit-Vollrollout + Doku-Sync):** Vollständiger Review mit anschließender Umsetzung aller Punkte außer Verteilung/Hosting. **(1) Fachliche Updates** (websearch-verifiziert): CSRD-**Omnibus final** (RL (EU) 2026/470 — Pflicht nur noch >1.000 MA & >450 Mio. € Umsatz, ~90% weniger Pflichtunternehmen; ESG-Steckbrief inkl. Fallbeispiel korrigiert), **NEST-Festlegungen** (Dez. 2025, 5. Regulierungsperiode Strom ab 2029) und **AgNes-Netzentgeltreform** (Eckpunkte Mai 2026, Erzeuger-Beteiligung) in ÜNB/VNB-Steckbriefen, **Kraftwerksstrategie/StromVKG** (12-GW-Ausschreibungen 2026, Kapazitätsmarkt ab 2032) im Kapazitätsmechanismus-Steckbrief. **(2) Timeline +11 Events** (u.a. Solarspitzengesetz, CBAM-Zahlpflicht, ETS2, neues Jahr 2029) → 42 Events. **(3) Angreifbarkeit-Vollrollout** 5 → 69 Steckbriefe (Disruptor-Perspektive B6, Methodik wie fallbeispiel-Rollout: nur Bestandsfakten). **(4) Quellen** 18 → 21 (34 Marker), **Glossar** +5 (NEST, AgNes, StromVKG, ETS2, VSME) → ~111. **(5) Neu `GM_FAKTEN_STAND`** — sichtbarer Fakten-Review-Stand im Header/Methodik. **(6) Doku-Sync:** `00_PROJEKTKONTEXT.md` (stand seit v1.6 ungepflegt!) komplett neu geschrieben, Personas/Datenmodell/Quellen-Konzept aktualisiert.

**Neu in v2.5 (Quellen-Ausweitung + QA-Bugfix):** Quellen-Pilot von 12 auf **18 belegte Quellen / 19 Inline-Marker** erweitert — neu u.a. WindSeeG-Offshore-Ziele (30/40/70 GW), EEG-Ausbaupfad 2030 (§4), WindBG-2 %-Flächenziel, GEG-65 %-Heizungspflicht, WPG-Wärmeplanung und die BNetzA-H2-Kernnetz-Genehmigung (9.040 km / 18,9 Mrd. €), alle mit Gesetzes-/Behörden-Primärquelle. **Außerdem ein beim Browser-QA gefundener latenter Bug behoben:** Glossar-Inline-Hervorhebung, Glossar-Seite und Timeline-Seite rendern über `window.GM_*`, was bei `const`-Deklarationen laut ECMAScript nicht greift — sie blieben in echten Browsern leer. Ein expliziter `window`-Spiegel zu Beginn von `app.js` repariert das (Glossar/Timeline funktionieren jetzt) und macht das Quellen-Feature lauffähig. Vollständiger headless-QA-Pass (alle 8 Tabs, Suche, Popover, 0 Laufzeitfehler) bestanden.

**Neu in v2.4 (Quellen-Pilot):** Neues Feld der Belegbarkeit — ein zentrales **Quellenregister** (`GM_QUELLEN` in `data.js`, analog zum Glossar) plus klickbare **Inline-Marker** `[[Q:id]]` an Schlüsselzahlen im Fließtext (hochgestelltes „Q", Klick öffnet Popover mit Herausgeber, **Stand-Datum** und Link) und eine eigene **Quellen-Seite** (Tab, such-/filterbar nach Typ). Pilot mit 12 belegten Primär-/Behördenquellen, bewusst an den in v2.3 korrigierten Kennzahlen (BNetzA-EK-Zins, SuedLink, Shell/Next Kraftwerke, CSRD-Omnibus, AFIR, §41a, §42b, Mieterstromzuschlag, Redispatch, Tibber, Enpal, §51 EEG). Schließt Roadmap-Punkt 4. Reused die bestehende Glossar-Mechanik; Konzept/Pflege in `dokumentation/05_QUELLEN_KONZEPT.md`.

**Neu in v2.3 (Faktenkorrektur-Release):** Vollständige fachlich-inhaltliche Prüfung aller 71 Steckbriefe, des Glossars und der Timeline. Korrigiert wurden u.a.: **Next Kraftwerke** gehört **Shell** (nicht RWE — durchgängig falsch); **SuedLink**-Vorhabenträger sind **TenneT/TransnetBW** (nicht Amprion), Kosten ~10 Mrd. €; ARegV-**Eigenkapitalzinssatz** 4. Periode korrekt **5,07 % Neu / 3,51 % Alt**; **EWS Schönau** ~224.000 Kunden (interner Widerspruch behoben); **RWE/innogy** als B2C-Vollversorger ersetzt (innogy-Privatkunden → E.ON); **CSRD** um EU-Omnibus-Verschiebung (Welle 2 → frühestens GJ 2027) aktualisiert; **GGV §42b EnWG** seit Mai 2024 (Solarpaket I, nicht 2023); **§41a** statt §41b für dynamische Tarife, Schwelle >100.000 Kunden (ab 2025 alle Lieferanten); **V2G**-Pflicht ab 2027 korrekt der **AFIR** zugeordnet (keine Nutzungspflicht); **H2-Kernnetz** ~9.040 km genehmigt; **Redispatch**-Kosten 2023 ~3,1 Mrd. € (2022 ~4,2 Mrd.); **Tibber** 5,99 €/Monat; **Enpal** ~100.000 Kunden/300.000 Einheiten; **Mieterstromzuschlag** ~1,6–2,6 ct/kWh; **discovergy → inexogy**. Details siehe `02_ENTWICKLUNGSHISTORIE.md` (Session 15). Keine strukturellen oder funktionalen Änderungen an der App.

**Neu in v2.2:** Feld „Praxisbeispiel" (Deep Dive) von 8 Pilot-Steckbriefen auf alle 69 unternehmensförmigen Steckbriefe ausgerollt. Jeder Eintrag zeigt anhand eines realen, im Steckbrief bereits genannten Akteurs konkret durchgerechnet, wie das Geschäftsmodell mechanisch funktioniert (z.B. welche Zahlen wo herkommen, welcher Stellhebel den Erlös treibt) — bewusst keine Unternehmenschronologie oder Wikipedia-Zusammenfassung, sondern eine Beschreibung der Funktionsweise anhand von Beispielen (Korrektur aus v2.1, siehe `02_ENTWICKLUNGSHISTORIE.md`, Session 13/14).

**Neu in v2.1:** Neues Feld „Praxisbeispiel" (Deep Dive) — an 8 bewusst diversen Steckbriefen (Tibber, Next Kraftwerke, WEMAG-Batteriespeicher, Stromnetz Hamburg, Check24, Ionity, EWS Schönau, 50Hertz) ergänzt um ein recherchiertes, faktengeprüftes Fallbeispiel mit echten Zahlen und einer praktischen Lehre. Eigenes, optisch abgehobenes Lehrbuch-Sidebar-Design ("Deep Dive"-Badge).

**Neu in v2.0:** Die drei BMC-Lückenfelder (Kanäle, Kundenbeziehungen, Kostenstruktur) sind jetzt für alle 69 unternehmensförmigen Steckbriefe redaktionell befüllt statt heuristisch geraten. Zusätzlich: Glossar-Feature (eigene Seite, durchsuchbar/filterbar nach 8 Themenkategorien, plus klickbare Inline-Begriffe im gesamten Fließtext mit Definitions-Popover). Außerdem zwei sachliche Korrekturen nach kritischem Nutzerfeedback: ista war fälschlich als Akteur bei Wärmepumpen-Contracting und Energieeinkaufs-Optimierung gelistet (korrigiert) und fehlte beim tatsächlich richtigen Modell (Messstellenbetrieb iMSB/gMSB), wo es jetzt ergänzt ist.

**Neu in v1.9:** Typ-Markierung `istUnternehmen` ergänzt — Steckbriefe, die Institutionen statt Unternehmen beschreiben (BNetzA, ENTSO-E), zeigen statt des Canvas-Buttons den Hinweis „📋 Canvas n/a", statt den BMC irreführend zu befüllen.

**Neu in v1.8:** Business Model Canvas als zuschaltbare Ansicht je Steckbrief — automatisch aus bestehenden Feldern abgeleitet, keine separate Pflege. Bewusst als Pilot gekennzeichnet: Kanäle/Kundenbeziehungen/Kostenstruktur sind nicht für jeden Steckbrief belegbar (offene Datenlücken werden angezeigt), und der Baustein „Schlüsselpartner" ist eine Näherung. Details und Einschätzung in `dokumentation/04_BUSINESS_MODEL_CANVAS.md`, Abschnitt 6.

**Neu in v1.7:** Betreiber- & Eigentumsmodelle für Verteilnetzbetreiber (Rekommunalisierung, gemischtwirtschaftliche Modelle, Konzessionsmodelle ohne Eigentum) als eigene Capability-Gruppe; neue Analyse-Persona „B6 — Disruptor/Markteindringling"; Pilotfeld „Angreifbarkeit" für 5 exponierte Geschäftsmodelle (Vollversorger, CPO, Mieterstrom, VPP, Vergleichsplattformen).

---

## 🧭 Wegweiser — wer sollte was lesen?

| Frage | Antwort in |
|---|---|
| Was ist das Projekt überhaupt? | `dokumentation/00_PROJEKTKONTEXT.md` |
| Für wen ist das Wiki gemacht? | `dokumentation/01_PERSONAS.md` |
| Was wurde bereits entschieden/verworfen? | `dokumentation/02_ENTWICKLUNGSHISTORIE.md` |
| Wie ändere ich Inhalte technisch? | `dokumentation/03_DATENMODELL_TECHNIK.md` |
| Was ist der Business-Model-Canvas-Plan? | `dokumentation/04_BUSINESS_MODEL_CANVAS.md` |
| Wie funktioniert das Quellen-Feature? | `dokumentation/05_QUELLEN_KONZEPT.md` |
| Wie soll das Kunden-Benchmarking funktionieren? | `dokumentation/06_BENCHMARKING_KONZEPT.md` |
| Wie soll die Lern-App funktionieren? | `dokumentation/07_LERNAPP_KONZEPT.md` |

---

## 🏗 Wichtigste Konventionen (Kurzfassung)

- **Sprache:** Deutsch, fachlich-präzise
- **Architektur:** 4 statische Dateien, kein Server, kein Build, kein localStorage
- **Design:** hell/editorial (DM Serif Display + DM Sans), **kein Dark Mode**
- **Versionierung:** `GM_WIKI_VERSION` in `data.js` hochzählen, ZIPs mit Bindestrich-Versionsnummer
- **Status:** Inhaltlich vollständig, Fakten geprüft Juli 2026 — Fokus liegt auf Verteilung und laufender Aktualität (halbjährlicher Fakten-Refresh empfohlen)
- **Dateiänderungen:** ausschließlich über Datei-Tools (Read/Edit/Write), nie per Bash schreiben (wiederkehrende Mount-Staleness)

---

## 🔜 Offene nächste Schritte (siehe auch Projektkontext, Abschnitt 6)

1. **Verteilung an Kollegen** — Hosting-Weg klären (SharePoint als Verteilstelle vs. internes Static-Hosting); bewusst zurückgestellt, größter verbleibender Hebel
2. ~~Business Model Canvas-Ansicht pro Steckbrief~~ — Pilot v1.8, BMC-Felder vollständig seit v2.0
3. ~~Glossar für Abkürzungen/Fachbegriffe~~ — in v2.0 umgesetzt (Seite + Inline-Popover), ~115 Begriffe seit v2.7
4. ~~Quellenangaben an Schlüsselzahlen~~ — v2.4 (Pilot) → v2.5/v2.6/v2.7 ausgeweitet (23 Quellen / 40 Marker); weiterer Ausbau opportunistisch
5. ~~Fallbeispiele/Case Studies~~ — Pilot v2.1, Vollrollout v2.2
6. ~~Angreifbarkeit/Disruptionsrisiko ausrollen~~ — Vollrollout in v2.6 (73/73 seit v2.7)
7. Ggf. Changelog-Mechanismus in der App selbst (wird mit Verteilung relevanter)
8. Nächster **Fakten-Refresh** ca. Anfang 2027 (halbjährlicher Rhythmus, `GM_FAKTEN_STAND` pflegen)
9. **Geschäftsmodell-Benchmarking als Kundenwerkzeug** — Konzept in `dokumentation/06_BENCHMARKING_KONZEPT.md` (neu, Juli 2026); nächster Schritt: Pilot mit einem realen Kundenfall
10. **Lern-App** (Babbel-artig, mit Zertifizierungs-Quiz) — Konzept in `dokumentation/07_LERNAPP_KONZEPT.md` (neu, Juli 2026); Umsetzung via Claude Code geplant, MVP = Modul „Verkaufen" + Quiz-Engine + Spaced-Repetition-Review
