# Projektkontext — Energiewirtschaft Geschäftsmodell-Wiki

> **Zweck dieser Datei:** Vollständiger Projektkontext, damit Claude (oder andere Mitwirkende) in einer neuen Session sofort den Stand, die Ziele und die Arbeitsweise verstehen. Diese Datei gehört in den Projektordner und sollte bei jeder größeren Änderung aktualisiert werden.

---

## 1. Was ist das Projekt?

Das **Energiewirtschaft Geschäftsmodell-Wiki** ist eine lokal lauffähige Single-Page-Webanwendung (HTML/CSS/JS, keine Server-Abhängigkeit), die einen strukturierten, tiefgehenden Überblick über die Geschäftsmodelle der deutschen und europäischen Energiewirtschaft bietet.

Es ist ein **internes Arbeits- und Referenzinstrument für Beratungszwecke** — gedacht für die Energy-Transition-&-Utilities-Praxis, mit Anwendungsfällen von der Pitch-Vorbereitung über Marktüberblicke bis zur Regulierungsrecherche. Anspruch seit v2.1: Das Wiki soll **wie ein Lehrbuch wirken, das auch Spaß macht**.

**Aktuelle Version:** v2.6 (Juli 2026) · Letzter vollständiger Fakten-Review: **Juli 2026** (`GM_FAKTEN_STAND`)

---

## 2. Aktueller inhaltlicher Stand (v2.7)

| Kennzahl | Wert |
|----------|------|
| Wertschöpfungsstufen (L1-Domänen) | 19 |
| Capability-Gruppen (L2) | 33 |
| Geschäftsmodelle (L3-Steckbriefe) | 75 (davon 73 unternehmensförmig, 2 institutionell) |
| Vernetzte Akteure | 240 |
| Glossarbegriffe | ~115 (8 Kategorien) |
| Belegte Quellen | 23 (40 Inline-Marker) |
| Timeline-Events | 43 (2021–2032) |
| Praxisbeispiele (Deep Dive) | 73/73 unternehmensförmige Steckbriefe |
| Angreifbarkeit/Disruptionsrisiko | 73/73 unternehmensförmige Steckbriefe (seit v2.6) |
| Business Model Canvas | 73/73 mit redaktionell gepflegten Feldern |

### Die 19 Domänen

1. ⚡ **Erzeugung & Speicherung** — Konventionell, Erneuerbare, Speicher/BESS, Offshore-Wind
2. 🔌 **Übertragungsnetz (ÜNB/TSO)** — Netzbetrieb, Redispatch 2.0, Bilanzkreismanagement
3. 🏘️ **Verteilnetz (VNB/DSO)** — Klassischer Netzbetrieb, §14a, Messstellenbetrieb, Betreiber-/Eigentumsmodelle
4. 🔵 **Gas & Wasserstoffnetz** — FNB Gas, H2-Kernnetz
5. 📊 **Energiehandel & Portfoliomanagement** — Börse, Prop Trading, Direktvermarktung, Zertifikate/EU ETS
6. 🏠 **Vertrieb & Energielieferung** — Vollversorger, Neolieferanten (Tibber/Octopus/Ostrom/Fünf Grad/aWATTar), Ökostrom (inkl. LichtBlick), Stadtwerke
7. 🔋 **Aggregation & Flexibilität** — VPP, Demand Response, BESS-Optimierung/Route-to-Market
8. 🏗️ **Projektentwicklung & EPC** — Develop-to-Sell/Own, EPC, O&M
9. 💰 **Energiefinanzierung & Investoren** — Projektfinanzierung, Green Bonds, Infrastrukturfonds
10. 🚗 **eMobility & Ladeinfrastruktur** — CPO, eMSP, V2G, THG-Quotenhandel
11. 📡 **Messung, Daten & Digitale Services** — HEMS/EMS, Wärmepumpen-Contracting, Utility-OS-Lizenzierung (Kraken), ESG/CSRD-Plattformen
12. 🔥 **Wärme & Sektorkopplung** — Fernwärme/KWK, Power-to-X/H2
13. 🔍 **Vergleichsplattformen & digitaler Vertrieb** — Verivox/Check24, Auto-Switch, B2B-Ausschreibung
14. 🧭 **Beratung, Strategie & Management Consulting** — Strategie, IT/Digital, Regulierungsberatung
15. ⚖️ **Energierecht & Rechtsberatung** — Energierechtskanzleien (BBH), §46-Konzessionsrecht
16. 🛡️ **Versicherung & Risikomanagement** — Anlagenversicherung, Cyber/KRITIS
17. 🏭 **Energiebeschaffung & Contracting (Industrie)** — Procurement, EPC-Contracting, Eigenversorgung
18. ☀️ **Prosumer & dezentrale Energieversorgung** — PV-Eigenverbrauch, Balkonkraftwerk, Mieterstrom §42a, GGV §42b, Enpal/1KOMMA5°, Energy Communities
19. 🏛️ **Energiemärkte & Market Design** — BNetzA, ENTSO-E, Kapazitätsmechanismus, lokale Flexmärkte, H2-Marktdesign

---

## 3. Technische Architektur

Vier-Datei-Architektur, lokal lauffähig (kein Server, keine Build-Pipeline). Liegt im Projektordner unter `app/`:

```
app/
├── index.html    — Struktur, 8 Tabs, View-Container
├── style.css     — Editorial/Refined-Ästhetik, Print-CSS
├── app.js        — Navigation, Rendering, Suche, Matrix, Akteure, Timeline,
│                   Glossar (Inline-Popover), Quellen, Methodik, Export
└── data.js       — Alle Inhalte: GM_DATA[], GM_ACTORS_INDEX, GM_TIMELINE,
                    GM_GLOSSARY, GM_QUELLEN, GM_ERLOESTYPEN, GM_FAKTEN_STAND
```

Details zum Datenmodell (Steckbrief-Schema inkl. `angreifbarkeit`, `fallbeispiel`, BMC-Felder, `istUnternehmen`) in `03_DATENMODELL_TECHNIK.md`.

**Wichtig:** `app.js` spiegelt die `const`-Register aus `data.js` zu Beginn explizit auf `window` (Bugfix v2.5 — ohne diesen Spiegel bleiben Glossar/Timeline/Quellen in echten Browsern leer).

### Funktionen / Ansichten (8 Tabs)

- **Wiki** — L1→L2→L3-Navigation, Steckbriefe mit Radar-Charts, BMC-Toggle, Deep-Dive- und Angreifbarkeit-Abschnitten
- **Matrix** — Filterbare Vergleichstabelle (nach Erlöstyp + Status)
- **Akteure** — Akteurs-Vernetzung (wer ist wo aktiv)
- **Timeline** — Regulierungs-Timeline 2021–2032 (43 Events)
- **Glossar** — ~115 Begriffe, filterbar; zusätzlich Inline-Hervorhebung mit Klick-Popover im gesamten Fließtext
- **Quellen** — Quellenregister (23 Quellen), Inline-Marker an belegten Zahlen
- **Methodik** — Onboarding-/Erklärseite inkl. Feldübersicht und Fakten-Review-Stand
- **Export** — Markdown + CSV-Download, Steckbrief-Kopierfunktion

Zusätzlich: Volltext-Suche über alle Felder (inkl. angreifbarkeit/fallbeispiel), Print-CSS.

---

## 4. Designprinzipien & Konventionen

**Architektur**
- Lokale Single-Page-App, vier Dateien, keine Server-/Build-Abhängigkeit
- Kein localStorage/sessionStorage (Inhalte in data.js)
- Versionsnummern in Dateinamen (z.B. `gm-wiki-v2.6.zip`), Version intern als `GM_WIKI_VERSION`, Fakten-Review-Datum als `GM_FAKTEN_STAND`

**Inhaltliche Konventionen**
- Alle Inhalte auf **Deutsch**, fachlich-präzise, keine Übervereinfachung
- Jeder Steckbrief: Definition + fünf Tiefenfelder (Wertschöpfung, Herausforderungen, Ausblick, Angreifbarkeit, Praxisbeispiel) + BMC-Felder + Meta-Felder
- Zahlen als qualitative Orientierungswerte; Schlüsselzahlen mit Quellen-Markern `[[Q:id]]` belegt
- Regulatorische Bezüge konkret (EnWG-Paragraphen, EEG, ARegV/NEST/AgNes, EU-Direktiven)
- **Faktendisziplin:** Konkrete, nachprüfbare Fakten werden recherchegestützt verifiziert (Lehre aus dem ista-Vorfall, Session 12); große Schreibaufwände erst als Pilot, dann Vollrollout
- **Fakten-Refresh als Prozess:** Vollständiger Review zuletzt Juli 2026 (v2.6); Empfehlung: halbjährlich wiederholen und `GM_FAKTEN_STAND` sowie `stand`-Felder der Quellen pflegen

**Design-Ästhetik**
- Editorial/Refined-Look: DM Serif Display (Headlines) + DM Sans (Body)
- Helle, professionelle Farbgebung (kein Dark Mode — explizit verworfen)
- Pro Domäne eine Akzentfarbe (im `color`-Feld)

**Auslieferung**
- Immer als ZIP (alle vier Dateien), ältere Stände im `archiv-aeltere-versionen/`

---

## 5. Entwicklungshistorie (Kurzfassung)

| Version | Inhalt |
|---------|--------|
| v1.0–v1.5 | Aufbau: 19 Domänen, 66 Steckbriefe, Radar/Matrix/Akteure/Timeline/Export |
| v1.6 | Kollegentauglichkeit: Methodik-Seite, Volltext-Suche, Print-CSS |
| v1.7 | VNB-Betreibermodelle (5 neue Steckbriefe → 71), Persona B6 (Disruptor), Pilotfeld `angreifbarkeit` (5) |
| v1.8/v1.9 | BMC-Pilot (Toggle je Steckbrief) + Typ-Markierung `istUnternehmen` |
| v2.0 | BMC-Felder redaktionell für alle 69, Glossar (~106 Begriffe), ista-Korrektur |
| v2.1/v2.2 | Praxisbeispiel/Deep Dive: Pilot (8) → Vollrollout (69); Vorgabe „Mechanik statt Chronologie" |
| v2.3 | Faktenkorrektur-Release (Next Kraftwerke/Shell, SuedLink, §41a, CSRD-Verschiebung u.v.m.) |
| v2.4/v2.5 | Quellen-Feature: Register + Inline-Marker + Quellen-Seite (12 → 18 Quellen); window-Bugfix, Browser-QA |
| v2.6 | **Fakten-Refresh Juli 2026** (CSRD-Omnibus final, NEST/AgNes, Kraftwerksstrategie/StromVKG), Timeline +11 Events, **Angreifbarkeit-Vollrollout (69)**, Quellen 21/Marker 34, Glossar ~111, `GM_FAKTEN_STAND`, Doku-Sync |

Vollständige Historie mit Begründungen und verworfenen Wegen: `02_ENTWICKLUNGSHISTORIE.md`.

---

## 6. Offene Punkte / Roadmap

**Offen**
1. **Verteilung an Kollegen** — für die **Lern-App gelöst** via GitHub Pages (siehe unten); für das Wiki selbst weiter offen (SharePoint vs. dieselbe GitHub-Pages-Route — technisch wäre das Wiki unter `/app/` bereits erreichbar, Entscheidung über Sichtbarkeit steht aus).
2. Ownership/Pflege klären, wenn das Wiki an Kollegen geht
3. Ggf. Changelog-Mechanismus in der App selbst (wird mit Verteilung relevanter)
4. Nächster **Fakten-Refresh** ca. Anfang 2027 (halbjährlicher Rhythmus) — **neu:** dabei auch die Lern-App-Checkliste aus `08_LERNAPP_UMSETZUNG.md` §3 abarbeiten (betroffene Quiz-Items über `steckbriefIds` finden)

**Neu seit Juli 2026: Lern-App + Git/GitHub**
- **Lern-App „Energiewirtschaft meistern"** (Ordner `lern-app/`): PWA-Lernanwendung auf Basis von `app/data.js` (unverändert geladen, Single Source of Truth). MVP = Modul 4 „Verkaufen", 54 Quiz-Items, Leitner-Spaced-Repetition, Vertiefungs-Lesemodus. Konzept: `07_LERNAPP_KONZEPT.md` · Istzustand/Pflege/Release: `08_LERNAPP_UMSETZUNG.md`.
- **Der Projektordner ist jetzt ein Git-Repository:** https://github.com/ArneGroenewold/Geschaeftsmodelle-der-Energiewirtschaft — GitHub Pages deployt den Root; Lern-App live unter https://arnegroenewold.github.io/Geschaeftsmodelle-der-Energiewirtschaft/lern-app/. Änderungen werden committet und gepusht; für die Lern-App zusätzlich `lern-app/sw.js` → CACHE_NAME hochzählen (sonst bleibt die installierte PWA auf dem alten Stand).

**Erledigt (nicht erneut vorschlagen)**
- ~~BMC-Ansicht~~ (v1.8/v2.0) · ~~Glossar~~ (v2.0) · ~~Fallbeispiele~~ (v2.1/v2.2) · ~~Quellenangaben~~ (v2.4–v2.6) · ~~Angreifbarkeit-Rollout~~ (v2.6) · ~~Timeline-Lücken 2029+~~ (v2.6)

**Bewusst offen gelassen**
- Kein weiterer Inhaltsausbau in die Breite (neue Steckbriefe nur bei explizitem Bedarf) — Fokus auf Aktualität, Nutzbarkeit und Verteilung.

---

## 7. Wie weiterarbeiten? (Hinweise für Claude in neuer Session)

1. **Bei Inhalts-Änderungen:** immer `data.js` editieren, Datenmodell-Schema einhalten (`03_DATENMODELL_TECHNIK.md`), Quellen-Marker pflegen (`05_QUELLEN_KONZEPT.md`).
2. **Nach Änderungen an data.js:** Syntax via Node prüfen; Marker-IDs gegen `GM_QUELLEN` prüfen (keine Waisen); Akteurs-Index wird automatisch aufgebaut.
3. **Immer als ZIP ausliefern**, Version hochzählen, `GM_WIKI_VERSION` (und bei Fakten-Reviews `GM_FAKTEN_STAND`) aktualisieren.
4. **Stil:** Deutsch, editorial, sachlich-fundiert, Lehrbuch-Anspruch. Zielgruppe ist fachkundig.
5. **Bash-Mount-Staleness (wiederkehrend!):** Dateien ausschließlich über die Datei-Tools (Read/Edit/Write) ändern, niemals per Bash schreiben; bei Diskrepanzen ist der Read-Tool-Stand die Wahrheit. ZIP erst nach verifiziertem Sync bauen.
6. **Diese Datei aktuell halten** — sie stand von v1.6 bis v2.5 ungepflegt und hat dadurch ihren Zweck verfehlt (behoben in v2.6).
