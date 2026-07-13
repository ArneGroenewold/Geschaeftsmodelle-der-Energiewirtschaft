# Geschäftsmodell-Benchmarking als Kundenwerkzeug — Konzept

> **Stand:** Juli 2026 (Session 19, v2.7) · **Status:** Konzept, noch nicht umgesetzt
> **Auftrag:** Aus dem Geschäftsmodell-Wissens-Wiki soll langfristig ein Werkzeug werden, das beim Kunden eingesetzt werden kann. Dieses Dokument beschreibt Zielbild, Methodik und Ausbaustufen.

---

## 1. Zielbild

Das Wiki beantwortet heute die Frage **„Welche Geschäftsmodelle gibt es und wie funktionieren sie?"** Das Benchmarking beantwortet die nächste Frage: **„Wo steht *unser* Geschäftsmodell im Vergleich — und wo ist es verwundbar?"**

Kern der Idee: Die 75 Steckbriefe sind nicht nur Nachschlagewerk, sondern **Referenzmodelle**. Jeder Steckbrief beschreibt die Best-Practice-Mechanik eines Geschäftsmodells (Erlöslogik, Werttreiber, BMC, Angreifbarkeit, Radar-Profil). Ein Kunde — Stadtwerk, Regionalversorger, Projektierer, Start-up — kann sein tatsächliches Geschäftsmodell-Portfolio dagegen spiegeln:

1. **Verortung:** Welche der 75 Referenzmodelle betreibt der Kunde (bewusst oder unbewusst)?
2. **Reifegrad-Gap:** Wie weit ist die kundeneigene Ausprägung vom Referenzmodell entfernt — je Werttreiber?
3. **Exponierung:** Welche seiner Modelle sind laut Angreifbarkeits-Analyse strukturell bedroht, und ist der Kunde Angreifer oder Verteidiger?
4. **Optionenraum:** Welche benachbarten Modelle (gleiche Capabilities, gleiche Kundenschnittstelle) könnte der Kunde erschließen?

Das Ergebnis ist kein generischer Reifegradcheck, sondern ein **inhaltlich unterfüttertes Benchmarking**: Jeder Befund verlinkt auf einen Steckbrief mit Mechanik, Fallbeispiel und Quellen — der Kunde kann jede Bewertung nachlesen und nachvollziehen.

---

## 2. Was wird gebenchmarkt? (Bezugsrahmen)

Zwei Ebenen, die getrennt bewertet und gemeinsam berichtet werden:

**Ebene A — Portfolio (Draufsicht):** Das Geschäftsmodell-Portfolio des Kunden wird auf die 19 Domänen / 33 Capability-Gruppen gemappt. Ergebnis ist eine **Portfolio-Heatmap**: Wo ist der Kunde aktiv, wo nicht, wo ist er aktiv, ohne es strategisch entschieden zu haben („Zufallsportfolio")? Bereits diese Verortung erzeugt beim Kunden regelmäßig Aha-Momente, weil das Wiki Modelle sichtbar macht, die im Selbstbild fehlen (z.B. „wir machen ja längst Direktvermarktung — aber ohne die Skaleneffekte, von denen das Referenzmodell lebt").

**Ebene B — Einzelmodell (Tiefenschnitt):** Für 3–7 priorisierte Geschäftsmodelle wird die kundeneigene Ausprägung gegen den Referenz-Steckbrief gestellt. Bewertet wird nicht „gut/schlecht", sondern **Abstand zum Referenzmodell je Dimension** (siehe 3.) plus Abgleich der BMC-Bausteine (welche Kanäle/Erlösströme des Referenzmodells nutzt der Kunde nicht?).

**Vergleichsanker:** Drei Vergleichsrichtungen, aufsteigend im Aufwand:
1. **Kunde vs. Referenzmodell** (immer möglich — die Referenz steckt im Wiki),
2. **Kunde vs. genannte Akteure** (die 240 vernetzten Akteure liefern konkrete Wettbewerber je Modell; qualitativ aus Steckbrief + öffentlichen Daten),
3. **Kunde vs. andere Kunden** (anonymisierte Peer-Daten — erst ab Ausbaustufe 3, siehe 6.).

---

## 3. Bewertungsdimensionen & Scoring

### 3.1 Vorhandene Radar-Dimensionen als Marktprofil

Jeder Steckbrief trägt bereits ein 6-Achsen-Radar (Skala 1–5): **Regulierungsabhängigkeit, Skalierbarkeit, Marktrisiko, Digitalisierungsgrad, Wettbewerbsintensität, Nachhaltigkeitsbeitrag.** Diese Werte beschreiben das *Modell an sich* (Marktprofil) — sie sind für alle Betreiber desselben Modells gleich und bilden die erste Overlay-Schicht: „In welchem Gelände bewegt sich dieses Geschäftsmodell?"

### 3.2 Neue Dimension: Umsetzungsreife des Kunden (Ist-Profil)

Für das Benchmarking kommt eine zweite Schicht dazu, die *den Kunden* bewertet — je Modell auf denselben Achsen plus vier umsetzungsspezifischen Dimensionen:

| Dimension | Leitfrage | Quelle im Wiki |
|---|---|---|
| **Erlösmechanik beherrscht?** | Realisiert der Kunde die Erlösströme, die das Referenzmodell beschreibt (alle oder nur einen Teil)? | Feld `erloesmodell`, `wertschoepfung` |
| **Werttreiber besetzt?** | Besitzt der Kunde die im Steckbrief benannten Differenzierungsfaktoren (Algorithmus, Portfolio-Größe, Integrationsbreite…)? | Feld `differenzierung` |
| **Kundenschnittstelle** | Hält der Kunde die Endkundenbeziehung selbst oder ist er austauschbares Backend? | BMC `bmc_kanaele`, `bmc_kundenbeziehung` |
| **Angreifbarkeits-Exposition** | Treffen die im Steckbrief beschriebenen Angriffsvektoren den Kunden (Verteidiger) — oder kann er sie selbst nutzen (Angreifer)? | Feld `angreifbarkeit` |

Scoring pro Dimension 1–5 mit **verankerten Skalenbeschreibungen** (nicht freihändig): Für jede Dimension werden aus dem Steckbrief 2–3 beobachtbare Kriterien abgeleitet (z.B. VPP-Modell, Dimension „Werttreiber": 1 = <100 MW Portfolio ohne eigene Prognostik, 3 = eigenes Portfolio >1 GW mit zugekaufter Prognose, 5 = proprietäre Prognose-/Handelsplattform mit Outperformance-Nachweis). Das hält die Selbsteinschätzung diszipliniert und macht Ergebnisse zwischen Kunden vergleichbar.

### 3.3 Ergebnisdarstellungen

- **Radar-Overlay** je Modell: Marktprofil (Referenz) + Ist-Profil (Kunde) übereinander → Gap auf einen Blick. Die Radar-Rendering-Logik existiert bereits in `app.js`.
- **Portfolio-Heatmap** (Ebene A): Domänen × Aktivitätsgrad/Reife, farbcodiert.
- **Angreifbarkeits-Matrix:** Modelle des Kunden auf zwei Achsen — „strategische Bedeutung für den Kunden" × „Disruptionsdruck laut Steckbrief". Rechts oben = Handlungszwang. Diese Matrix ist das natürliche Management-Summary-Bild für den Vorstandstermin.
- **Options-Landkarte:** Benachbarte, noch nicht besetzte Modelle mit Capability-Fit-Einschätzung (welche vorhandenen Fähigkeiten zahlen auf das neue Modell ein?).

---

## 4. Ablauf beim Kunden (Beratungsformat, Ausbaustufe 1)

| Phase | Inhalt | Aufwand (Richtwert) |
|---|---|---|
| **0 — Vorbereitung** | Portfolio-Mapping durch Berater: Kundengeschäft auf L1/L2/L3 verorten (Desk Research, Geschäftsbericht, Website); Hypothesen zu Gaps | 1–2 Tage |
| **1 — Erhebung** | Strukturiertes Interview/Workshop mit Bereichsverantwortlichen entlang der verankerten Skalen; je priorisiertem Modell ~45 min | 1 Workshop-Tag |
| **2 — Scoring & Gap** | Auswertung: Radar-Overlays, Heatmap, BMC-Lückenabgleich | 1–2 Tage |
| **3 — Angreifbarkeits-Check** | Für die Top-Modelle: Angriffsvektoren aus dem Steckbrief gegen die konkrete Kundensituation spielen (B6-Disruptor-Perspektive als Rollenübung im Workshop — „Wie würden wir uns selbst angreifen?") | ½ Workshop-Tag |
| **4 — Optionenraum & Roadmap** | Benachbarte Modelle sichten (Wiki live im Termin!), 2–3 Optionen priorisieren, Maßnahmen ableiten | ½ Workshop-Tag + Bericht |

Wichtig fürs Format: **Das Wiki selbst ist Teil des Erlebnisses.** Steckbriefe, Fallbeispiele und Angreifbarkeits-Texte werden im Termin gezeigt — das differenziert das Benchmarking von generischen Reifegradmodellen der Wettbewerber, weil jede Bewertung sofort inhaltlich unterfüttert ist.

---

## 5. Deliverables

1. **Benchmarking-Report** (Management-Fassung: Angreifbarkeits-Matrix + Top-3-Befunde + Optionen; Anhang: Radar-Overlays und BMC-Gaps je Modell)
2. **Portfolio-Heatmap** als Einzelbild (vorstandstauglich)
3. **Steckbrief-Auszüge** der relevanten Referenzmodelle (Markdown-Export existiert bereits)
4. Optional: **Follow-up-Paket** — vertiefte Business Cases für 1–2 priorisierte Optionen

---

## 6. Ausbaustufen zum Werkzeug

**Stufe 1 — Methodenbaukasten (sofort umsetzbar, kein Code):** Scoring-Templates (Excel/Miro) + Workshop-Leitfaden + verankerte Skalen für die ~15 kundenrelevantesten Modelle. Das Wiki bleibt Referenz-Backend. → Validiert die Methodik am ersten realen Fall, bevor Software entsteht.

**Stufe 2 — Assessment-Modul in der App (mittelfristig):** Neuer Tab „Benchmarking" in der bestehenden Vier-Datei-Architektur: Kunde/Berater beantwortet je Modell die verankerten Skalenfragen (neues Register `GM_BENCHMARK` in `data.js`: Kriterien je Steckbrief-ID), die App rendert Radar-Overlay, Heatmap und Angreifbarkeits-Matrix live und exportiert den Report als Markdown/Print. Kein Server nötig — Eingaben bleiben in der Session bzw. werden als JSON-Datei exportiert/importiert (bewusst kein localStorage, Konvention beachten). Aufwand überschaubar, da Radar-Rendering, Export und Datenmodell-Muster existieren.

**Stufe 3 — Peer-Benchmark-Datenbank (langfristig, nur bei echtem Bedarf):** Anonymisierte Ergebnisse mehrerer Kundenprojekte als Vergleichsverteilung („Ihr VPP-Reifegrad liegt im unteren Drittel der von uns bewerteten Regionalversorger"). Erst hier entstehen Hosting-, Datenschutz- und Pflegefragen — bewusst nachgelagert; Stufe 1+2 funktionieren ohne.

---

## 7. Risiken & offene Punkte

- **Subjektivität:** Selbsteinschätzungen schmeicheln. Gegenmittel: verankerte Skalen (3.2) + Berater-Gegenscore + Belegfragen („Zeigen Sie den Outperformance-Nachweis").
- **Schein-Vergleichbarkeit:** Ein Stadtwerk mit 50.000 Kunden gegen das Tibber-Referenzmodell zu scoren ist nur sinnvoll, wenn die strategische Frage stimmt („Wollen wir dieses Modell überhaupt spielen?"). Das Benchmarking muss die Portfolio-Frage (Ebene A) **vor** dem Einzel-Scoring (Ebene B) beantworten.
- **IP-Schutz:** Beim Kundeneinsatz wird der Wiki-Inhalt teilweise offengelegt. Zu klären: Was bekommt der Kunde dauerhaft (Report ja, Wiki-Vollzugriff eher nein — oder als Lizenz-/Abo-Gedanke, vgl. die Ironie des Kraken-Steckbriefs L3-DIGITAL-PLATTFORM-03).
- **Pflegekopplung:** Benchmarking-Kriterien hängen an Steckbrief-Inhalten — der halbjährliche Fakten-Refresh (`GM_FAKTEN_STAND`) muss die `GM_BENCHMARK`-Kriterien mitprüfen, sonst driften Referenz und Scoring auseinander.

---

## 8. Nächste Schritte (Empfehlung)

1. **Pilot-Domäne wählen** (Vorschlag: Vertrieb + Aggregation/Flex — dort sind Angreifbarkeits-Texte und Neolieferanten-Vergleich am stärksten) und für ~10 Steckbriefe verankerte Skalen formulieren.
2. **Einen realen (oder anonymisierten) Kundenfall** als Trockenübung durchspielen; Skalen und Matrix-Darstellung schärfen.
3. Danach entscheiden, ob Stufe 2 (App-Modul) gebaut wird — Entscheidungskriterium: Wird das Format mehr als 2–3× pro Jahr eingesetzt?
