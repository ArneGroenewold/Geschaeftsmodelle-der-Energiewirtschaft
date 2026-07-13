# Lern-App „Energiewirtschaft meistern" — Konzept

> **Stand:** Juli 2026 (Session 20) · **Status:** Konzept zur Umsetzung mit Claude Code
> **Ziel:** Die Wiki-Inhalte (v2.7: 75 Steckbriefe, ~115 Glossarbegriffe, 43 Timeline-Events, 23 Quellen) aktiv lernbar machen — Babbel-artig: kapitelweise, mit anspruchsvollen Quiz und einem Zertifizierungs-Abschluss.
> **Zielgruppe:** Zunächst Arne selbst; von Anfang an so gebaut, dass Kollegen sie später als Onboarding-Werkzeug nutzen können.
> **Technik:** Bewusst offen gelassen — Claude Code entscheidet. Leitplanken in Abschnitt 10.

---

## 1. Zielbild & Abgrenzung

Das Wiki beantwortet „Wo schlage ich nach?" — die Lern-App beantwortet **„Wie bekomme ich das dauerhaft in den Kopf?"**. Beides sind getrennte Anwendungen mit derselben Wissensbasis: Die App liest `data.js` des Wikis als Single Source of Truth und legt eine redaktionelle Lernschicht (Kapitel-Dramaturgie, Quiz-Items, Szenarien) darüber (Hybrid-Ansatz, Abschnitt 9).

**Erfolgskriterium** ist nicht „Kapitel durchgeklickt", sondern: Der Lerner kann ein Geschäftsmodell **ohne Vorlage erklären, durchrechnen und kritisieren** — also genau das, was im Kundengespräch gebraucht wird.

---

## 2. Lernziele nach Kompetenzstufen (Bloom)

Jede Lerneinheit und jede Quizfrage ist einer Stufe zugeordnet — das diszipliniert die Fragenerstellung und macht das Zertifikat aussagekräftig:

| Stufe | Leitfrage | Beispiel-Aufgabentyp |
|---|---|---|
| **K1 Kennen** | Was heißt FCR? Wer gehört zu Shell? | Glossar-Karten, Akteur-Matching |
| **K2 Verstehen** | Warum verdient Tibber nichts am Strom? | Erklärungs-MC, Falschaussage finden |
| **K3 Anwenden** | Lohnt sich das Kraftwerk bei diesem Spread? | Fallbeispiel-Rechnung, Szenario-Entscheidung |
| **K4 Beurteilen** | Welcher Angriffsvektor trifft dieses Stadtwerk zuerst? | Disruptor-Missionen, Priorisierungsaufgaben |

Ambition: Die meisten Lern-Apps hören bei K2 auf. Der Anspruch „anspruchsvolles Quiz" heißt konkret: **mindestens 40% der Items auf K3/K4.** Die Steckbrief-Felder `fallbeispiel` und `angreifbarkeit` liefern dafür das Rohmaterial — das ist der unfaire Vorteil dieser App gegenüber generischen Lernplattformen.

---

## 3. Curriculum: 8 Module statt 19 Domänen

Die 19 Wiki-Domänen sind eine Nachschlage-Struktur, keine Lern-Dramaturgie. Die App ordnet sie zu 8 Modulen mit erzählerischem Bogen — **entlang der Frage „Wie fließt das Geld durch das Energiesystem?"**:

1. **Das Spielfeld** — Strommarkt-Grundlagen: Merit Order, Börse, Bilanzkreise, wer reguliert was (L1-HANDEL, L1-MARKT-Basics). *Fundament, ohne das nichts anderes verständlich ist.*
2. **Erzeugen & Speichern** — vom Gaskraftwerk über EEG/PPA bis BESS und Erlös-Stacking (L1-ERZ).
3. **Die Netze** — reguliertes Geld: ARegV/NEST, ÜNB/VNB, Redispatch, §14a, Betreibermodelle (L1-UNB, L1-VNB, L1-GAS).
4. **Verkaufen** — Vollversorger vs. Neolieferanten (Tibber, Octopus, Ostrom…), Ökostrom, Stadtwerke, Vergleichsportale (L1-VERTRIEB, L1-VERGLEICH).
5. **Flexibilität ist das neue Öl** — VPP, Demand Response, BESS-Optimierung, V2G, lokale Flexmärkte (L1-AGG, Teile L1-EMOB/L1-MARKT).
6. **Prosumer & neue Spieler** — PV-Modelle, Mieterstrom, Communities, eMobility, THG-Quote (L1-PROSUMER, L1-EMOB).
7. **Wärme, H2 & Industrie** — Sektorkopplung, Contracting, Beschaffung (L1-WAERME, L1-CONTRACT).
8. **Das Ökosystem drumherum** — Projektentwicklung, Finanzierung, Beratung, Recht, Versicherung, Software/Utility-OS (L1-PROJ, L1-FINANZ, L1-BERATUNG, L1-RECHT, L1-VERSICH, L1-DIGITAL).

Je Modul: 4–7 **Lerneinheiten à 5–10 Minuten** (Babbel-Prinzip: eine Einheit passt in eine Kaffeepause), ein **Modul-Bossquiz** (schwerer, mischt alle Einheiten), danach schaltet das nächste Modul frei. Module 2–8 nach Modul 1 in beliebiger Reihenfolge spielbar (Interessens-Autonomie erhöht Durchhaltequote), das Zertifizierungs-Quiz erst nach allen Bossquiz.

---

## 4. Anatomie einer Lerneinheit (der didaktische Kern)

Jede Einheit folgt demselben evidenzbasierten Zyklus — kein passives Lesen:

1. **Hook (30 Sek.):** Eine provokante Frage oder echte Zahl vorab („Eine Ladesäule kostet 60.000 € und steht 90% der Zeit leer. Warum baut sie trotzdem jemand?"). *Aktiviert Vorwissen, erzeugt Neugier-Lücke.*
2. **Kernidee (1–2 Screens):** Das Geschäftsmodell in maximal 3 Sätzen + ein Schaubild (Geldfluss-Diagramm: wer zahlt wem wofür). *Cognitive Load klein halten; das Wiki hat die Langfassung.*
3. **Worked Example:** Das `fallbeispiel` aus dem Steckbrief, in 2–3 Schritte zerlegt, mit einer Zwischenfrage pro Schritt („Was passiert mit der Marge, wenn der Spotpreis unter 65 € fällt?"). *Beispiele vor abstrakten Regeln — stärkster Effekt für Novizen.*
4. **Retrieval (3–5 Fragen):** Sofortiges aktives Abrufen des gerade Gelernten, Formate aus Abschnitt 5. *Testing Effect: Abrufen festigt stärker als Wiederlesen.*
5. **Transfer (1 Frage):** Anwendung auf einen NEUEN Kontext („Tibber verdient am Abo statt an der kWh — welches Modell aus Modul 3 folgt derselben Logik?"). *Verknüpfung statt Inselwissen.*
6. **Ausblick-Karte:** „Merke dir einen Satz" — der Lerner formuliert (Freitext, 1 Zeile) die Kernidee selbst; die App zeigt danach die Musterformulierung zum Vergleich. *Self-Explanation/Generation Effect; keine Bewertung, nur Gegenüberstellung.*

**Feedback-Regel für alle Fragen:** Nie nur richtig/falsch. Jede Antwort-Option hat eine Erklärung, warum sie (nicht) stimmt, mit Link auf den Steckbrief und ggf. den Quellen-Marker. Falsche Antworten sind Lernmomente, keine Bestrafung.

---

## 5. Aufgabenformate (das Differenzierungsmerkmal)

Neben soliden Klassikern (MC mit **plausiblen Distraktoren aus echten Verwechslungen** — z.B. FCR vs. aFRR, Mieterstrom §42a vs. GGV §42b; Lückentext; Zuordnen) nutzt die App Formate, die nur mit dieser Datenbasis möglich sind:

- **BMC-Puzzle:** Die 9 Canvas-Bausteine eines Modells liegen durcheinander (aus `bmc_*`-Feldern), teils mit Bausteinen eines ähnlichen Modells gemischt — richtig zusammensetzen. Trainiert Modell-Denken statt Faktenwissen.
- **Radar schätzen:** Der Lerner stellt die 6 Radar-Achsen eines Modells per Schieberegler ein, dann Overlay mit dem echten Radar. Abweichung wird diskutiert („Du hast Marktrisiko unterschätzt — hier ist warum es 5 ist…"). *Kalibrierungstraining für Berater-Urteilskraft.*
- **Fallbeispiel-Rechnung:** Echte Mini-Kalkulationen mit Zahleneingabe („Clean Spark Spread bei Gas 30 €/MWh, η 58%, CO₂ 80 €/t — ab welchem Spotpreis läuft das Kraftwerk?"). K3-Kern der App.
- **Disruptor-Modus 🎯:** Rollen-Umkehr auf Basis der `angreifbarkeit`-Felder: „Du bist ein Startup mit 5 Mio. € und Software-Kompetenz. Welches der drei gezeigten Modelle greifst du an — und über welchen Vektor?" Mehrere vertretbare Antworten, die App zeigt die Begründungslogik je Wahl. *K4, macht am meisten Spaß, direkt kundengesprächsrelevant.*
- **Falschaussage finden:** Ein Steckbrief-Absatz mit einem eingebauten sachlichen Fehler („Next Kraftwerke gehört RWE") — finden und korrigieren. *Trainiert genau das kritische Lesen, das die Faktenkorrektur-Session 15 nötig machte.*
- **Wer bin ich?:** Ein Geschäftsmodell wird über 3 immer konkretere Hinweise beschrieben (Erlösmodell → Kundensegment → Akteur) — je früher erraten, desto mehr Punkte.
- **Timeline-Ordnen:** Regulierungs-Events in die richtige Reihenfolge bringen; Varianten mit „Was ermöglichte was?" (§41a → Tibber-Massenmarkt).
- **Szenario-Missionen (1 pro Modul, ~10 Min.):** Zusammenhängende Fallstudie mit 5–8 Entscheidungen und Konsequenz-Feedback: „Du bist Strategiechefin eines Stadtwerks mit 80.000 Kunden. Octopus tritt in deiner Region an. Erste Maßnahme?" *Die Brücke zur Beratungspraxis und zum Benchmarking-Konzept (06).*
- **Confidence-Rating:** Vor Auflösung wählt der Lerner „sicher / unsicher / geraten". Sicher + falsch = höchste Wiederholungspriorität und ein eigener Review-Stapel („Deine gefährlichsten Irrtümer"). *Metakognition; verhindert Schein-Sicherheit.*

---

## 6. Gedächtnisarchitektur: Behalten statt Bingen

- **Spaced Repetition (Leitner, 5 Boxen):** Jedes Glossar-Item und jeder Kernfakt wird zum Wiederholungs-Item. Falsch → Box 1, richtig → eine Box weiter; Intervalle z.B. 1/3/7/16/35 Tage.
- **Tägliches Review (max. 5 Min.):** Eigener „Heute fällig"-Stapel, getrennt vom Kapitel-Fortschritt. Die App macht sanften Druck über Fälligkeits-Zähler, nicht über Schuldgefühl-Push.
- **Interleaving:** Bossquiz und Reviews mischen bewusst Module („Welches der vier Modelle ist reguliert?" mit Optionen aus Netz, Vertrieb, Flex) — Unterscheiden-Können ist der eigentliche Lerngewinn.
- **Vergessen einpreisen:** Modul-Fortschritt „verblasst" visuell leicht, wenn Reviews überfällig sind (Farbe entsättigt) — ehrliches Signal statt für immer grüner Haken.

---

## 7. Motivation & Progression (erwachsenengerecht)

Kein Kinder-Gamification-Kitsch; stattdessen Fortschritts-Ästhetik im Wiki-Design (DM Serif, editorial, hell):

- **Die Lernkarte:** Die Energie-Wertschöpfungskette als stilisierte Karte (Kraftwerk → Netz → Kunde …), Module als Stationen, die sich beim Abschluss „einfärben". Der Fortschritt IST die Landkarte des Energiesystems — Navigation und Wissensstruktur fallen zusammen.
- **Kompetenz-Radar des Lerners:** Dasselbe 6-Achsen-Radar wie im Wiki, aber auf den Lerner angewandt (Ø-Leistung je Modul/Bloom-Stufe). „Du bist stark in Vertrieb, schwach in Regulierung" — direkt anschlussfähig an gezieltes Üben.
- **Streak & XP dezent:** Streak zählt Review-Tage (nicht Bildschirmzeit); XP gewichtet nach Bloom-Stufe (K4-Frage = 4× K1).
- **„Beweis-Momente":** Nach jedem Modul eine 60-Sekunden-Challenge: „Erkläre Modell X in 3 Sätzen" (Freitext, Selbstvergleich mit Musterantwort, optional als Karteikarte exportieren). Fühlt sich an wie Können, nicht wie Klicken.

---

## 8. Zertifizierungs-Quiz (der Abschluss)

- **Zulassung:** Alle 8 Bossquiz bestanden (≥70%).
- **Aufbau:** 40 Fragen, zufällig aus einem Pool von ≥200 gezogen, stratifiziert: je Modul mindestens 3, Formatmix, Bloom-Verteilung 25% K1/K2, 45% K3, 30% K4. Zeitlimit 45 Min. Eine Szenario-Mission als Pflichtteil.
- **Bestehen:** ≥75% gesamt UND kein Modul unter 50% (verhindert Kompensation von Totalausfällen).
- **Zertifikat:** Druckbares Dokument (Print-CSS wie im Wiki) mit Name, Datum, Gesamtscore, Kompetenz-Radar und `GM_FAKTEN_STAND` des zugrunde liegenden Wissensstands („zertifiziert auf Faktenstand Juli 2026") — ehrlich und für den späteren Kollegen-Einsatz glaubwürdig.
- **Nicht bestanden:** Detaillierte Schwächenanalyse + empfohlene Wiederholungseinheiten; Zweitversuch nach frühestens 3 Tagen mit frisch gezogenen Fragen.
- **Rezertifizierung:** Nach jedem Fakten-Refresh des Wikis (halbjährlich) ein kurzes „Update-Quiz" nur über geänderte Inhalte — koppelt die App elegant an den bestehenden Pflegeprozess.

---

## 9. Content-Pipeline (Hybrid-Prinzip)

**Ein Fakt, eine Quelle:** Die App lädt `data.js` des Wikis unverändert (GM_DATA, GM_GLOSSARY, GM_QUELLEN, GM_TIMELINE). Daraus entstehen automatisch: Glossar-Karteikarten, Akteur-Matching, Timeline-Ordnen, Radar-Schätzen, BMC-Puzzle-Rohlinge.

**Redaktionelle Schicht** (neues Register, z.B. `lern.js`): Kapitel-Dramaturgie, Hooks, MC-Fragen mit Distraktor-Erklärungen, Rechenaufgaben, Szenario-Missionen. Jedes redaktionelle Item referenziert Steckbrief-ID(s) und ggf. Quellen-ID — beim Fakten-Refresh lassen sich betroffene Items automatisch finden („welche Fragen hängen an `L3-DIGITAL-BERATUNG-01`?").

**Erstellungs-Workflow mit Claude:** Die Quiz-Items werden pro Modul mit Claude aus den Steckbriefen generiert und dann redaktionell geprüft — die Felder `fallbeispiel` (→ Rechenaufgaben), `angreifbarkeit` (→ Disruptor-Items) und `definition` (→ Distraktoren aus benachbarten Modellen) sind die ergiebigsten Quellen. Faustregel: ~10–15 Items je Lerneinheit, ~400–600 Items gesamt.

---

## 10. Technische Leitplanken (Empfehlungen, Claude Code entscheidet)

- **Eigener Ordner** `lern-app/` im Projektordner, Wiki bleibt unberührt; `data.js` per Kopie oder relativer Referenz einbinden (Entscheidung dokumentieren).
- **Fortschritts-Persistenz ist die zentrale Architekturfrage** (Spaced Repetition braucht Zustand über Tage): Optionen sind (a) Export/Import als JSON-Datei wie bisherige Projektkonvention, (b) localStorage (bequemer, bricht die Wiki-Konvention — die galt aber für das Wiki, nicht zwingend für die App), (c) PWA/IndexedDB. Empfehlung: für den MVP die einfachste Variante wählen, die tägliche Reviews ohne Reibung erlaubt — Reibung beim Fortschritt-Speichern killt Lern-Apps.
- **Design:** Wiki-Designsprache (hell, editorial, DM Serif/DM Sans), aber mobiltauglich — Lernen passiert auf dem Sofa/in der Bahn, das Wiki am Schreibtisch.
- **Wiedererkennbare Bausteine:** Radar-Rendering, Glossar-Popover und Print-CSS existieren im Wiki und können übernommen werden.

---

## 11. MVP-Schnitt & Ausbaustufen

**MVP (Stufe 1):** Modul 4 „Verkaufen" komplett (dort sind die Steckbriefe am reichsten: Tibber, Octopus, Ostrom, LichtBlick…) + Quiz-Engine mit 5 Formaten (MC, Lückentext, BMC-Puzzle, Radar-Schätzen, Fallbeispiel-Rechnung) + Leitner-Review + Fortschrittsanzeige. *Damit ist die Lernerfahrung komplett erlebbar und das Konzept validierbar.*

**Stufe 2:** Alle 8 Module, Bossquiz, Disruptor-Modus, Szenario-Missionen, Lernkarte, Kompetenz-Radar.

**Stufe 3:** Zertifizierungs-Quiz + Zertifikat, Confidence-Rating, Update-Quiz nach Fakten-Refresh.

**Stufe 4 (Kollegen-Ausbau):** Einstufungstest (überspringt Bekanntes), ggf. Rollen-Lernpfade entlang der Personas aus `01_PERSONAS.md` (Vertriebler lernt andere Schwerpunkte als Regulierungsberater), Teilen von Ergebnissen.

---

## 12. Offene Fragen

1. **Freitext-Bewertung:** Selbsteinschätzung gegen Musterlösung (einfach, offline) vs. LLM-Bewertung (besser, braucht API-Anbindung) — für MVP: Selbsteinschätzung.
2. **Umfang Zertifikats-Anspruch:** Internes Lernartefakt oder später etwas, das gegenüber Kunden/Arbeitgeber Aussagekraft haben soll? Beeinflusst Strenge und Fragenpool-Größe.
3. **Audio:** Steckbrief-Kernideen als kurze Audio-Zusammenfassungen (Pendeln)? Nice-to-have, nicht MVP.
4. **Kopplung an 06_BENCHMARKING:** Szenario-Missionen und Benchmarking-Workshops könnten denselben Fallstudien-Pool teilen — bei Erstellung mitdenken.
