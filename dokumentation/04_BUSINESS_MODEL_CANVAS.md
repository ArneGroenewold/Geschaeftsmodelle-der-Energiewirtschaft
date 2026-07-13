# Business Model Canvas — Konzept & Integrationsvorschlag

> **Status (v1.8, Juni 2026): Implementiert als Pilot.** Variante A (Toggle „Fließtext | Canvas" im Detail-View) ist umgesetzt, und zwar als „pragmatischer Einstieg" gemäß Abschnitt 5 — reines Mapping aus bestehenden Feldern, ohne die drei vorgeschlagenen Zusatzfelder. Ergebnis und Einschätzung: siehe Abschnitt 6 am Ende dieses Dokuments.

> **Ursprünglicher Zweck dieses Dokuments:** Bewertung, ob und wie der Business Model Canvas (BMC) das Wiki bereichert, und ein konkreter Umsetzungsvorschlag. Die folgenden Abschnitte 1–5 sind die ursprüngliche Roadmap-Analyse (unverändert erhalten); Abschnitt 6 ergänzt die Erfahrung aus der Pilot-Implementierung.

---

## 1. Lohnt sich der Business Model Canvas?

**Kurzantwort: Ja — als alternative Detailansicht pro Steckbrief, nicht als Ersatz.**

### Das Argument dafür

Der Business Model Canvas (Osterwalder/Pigneur) ist das international etablierteste Werkzeug zur Beschreibung von Geschäftsmodellen. Genau das ist der Gegenstand dieses Wikis. Die gemeinsame visuelle Sprache hat drei Vorteile:

1. **Wiedererkennung** — Berater und Kunden kennen den BMC. Ein Steckbrief im BMC-Format ist sofort lesbar und wirkt professionell, besonders für die Partner/Director-Persona (siehe Personas A4).
2. **Verdichtung** — Der BMC zwingt zur Reduktion auf das Wesentliche. Eine Seite = ein Geschäftsmodell. Ideal für Executive-Sichten und als Slide-Vorlage.
3. **Vollständigkeitscheck** — Die 9 Bausteine decken Lücken auf: „Wir haben über Kostenstruktur noch nicht nachgedacht."

### Die wichtige Einschränkung

Der klassische BMC beschreibt **ein einzelnes Unternehmen**. Das Wiki beschreibt **Geschäftsmodell-Typen einer Branche**. Ein BMC für „digitale Neolieferanten" als Kategorie ist abstrakter als einer für „Tibber" konkret. 

**Lösung:** Der BMC wird pro L3-Steckbrief erstellt — also je Geschäftsmodell-Typ, exemplarisch am Leitakteur orientiert (z.B. Tibber für „Dynamic Pricing"). Das ist konsistent mit der bestehenden Granularität.

---

## 2. Mapping: Bestehende Felder → BMC-Bausteine

Das Schöne: Das Wiki erfasst bereits ~60% der BMC-Bausteine implizit. Nur 3–4 Felder müssten ergänzt werden.

| BMC-Baustein | Quelle im Wiki | Status |
|--------------|----------------|--------|
| **Value Propositions** (Wertangebote) | `differenzierung` + `definition` | ✅ vorhanden |
| **Customer Segments** (Kundensegmente) | `kundensegment` | ✅ vorhanden |
| **Revenue Streams** (Einnahmequellen) | `erloesmodell` + `erloesTyp` | ✅ vorhanden |
| **Key Partners** (Schlüsselpartner) | `akteure` (teilweise) | 🟡 teilweise |
| **Key Activities** (Schlüsselaktivitäten) | aus `wertschoepfung` ableitbar | 🟡 ableitbar |
| **Key Resources** (Schlüsselressourcen) | aus `wertschoepfung` + `differenzierung` ableitbar | 🟡 ableitbar |
| **Cost Structure** (Kostenstruktur) | teils in `wertschoepfung`/`herausforderungen` | 🔴 ergänzen |
| **Customer Relationships** (Kundenbeziehungen) | teils in `definition` | 🔴 ergänzen |
| **Channels** (Kanäle) | teils in `definition` | 🔴 ergänzen |

**Fazit:** Mit zwei bis drei neuen optionalen Datenfeldern (`bmc_kostenstruktur`, `bmc_kanaele`, `bmc_kundenbeziehung`) ließe sich ein vollständiger BMC pro Steckbrief generieren — der Rest wird aus bestehenden Feldern gemappt.

---

## 3. Konkreter Umsetzungsvorschlag

### Variante A — BMC als zuschaltbare Ansicht im Steckbrief (empfohlen)

Im Detail-View eines Geschäftsmodells ein Umschalter: **„Fließtext | Canvas"**. Bei „Canvas" wird das klassische 9-Felder-Raster gerendert, gefüllt aus den gemappten Feldern.

- **Aufwand:** Mittel. Neues Render-Modul in app.js, CSS-Grid für das 9-Felder-Layout, optionale neue Datenfelder.
- **Nutzen:** Hoch für Partner/Director (Verdichtung) und für Slide-Export.
- **Druckbarkeit:** Ein BMC passt perfekt auf eine A4-Querseite — synergetisch mit dem bestehenden Print-CSS.

### Variante B — BMC nur im Export

Beim Markdown-/Steckbrief-Export zusätzlich eine BMC-Tabelle ausgeben. Geringerer Aufwand, aber kein visuelles Erlebnis in der App.

### Variante C — Eigener BMC-Tab mit Vergleich

Zwei Geschäftsmodelle nebeneinander als Canvas vergleichen (z.B. „Tibber vs. klassischer Vollversorger"). Höchster Aufwand, aber sehr starkes Workshop-Werkzeug.

**Empfehlung:** Mit **Variante A** starten. Sie hat das beste Aufwand-Nutzen-Verhältnis und ist die natürliche Erweiterung der bestehenden Detailansicht.

---

## 4. Beispiel-Mapping: Tibber als Business Model Canvas

| Baustein | Inhalt (aus Wiki abgeleitet) |
|----------|------------------------------|
| **Value Propositions** | Strom zum Spotpreis ohne Aufschlag; App-Automatisierung von EV/WP/Speicher in günstige Stunden; Transparenz |
| **Customer Segments** | Tech-affine Prosumer mit EV, Wärmepumpe, PV (Early Majority) |
| **Channels** | App, Web, Tibber Pulse (Hardware-Dongle), Ökosystem-Partner *(neu zu ergänzen)* |
| **Customer Relationships** | Self-Service via App, Community-Funktion, Gamification *(neu zu ergänzen)* |
| **Revenue Streams** | SaaS-Abo (9,95 €/Monat); Ökosystem-Partnergebühren |
| **Key Resources** | Software-Plattform, Prognose-/Steuerungsalgorithmen, Kundendaten |
| **Key Activities** | App-Entwicklung, Lastoptimierung, Beschaffung am Spotmarkt |
| **Key Partners** | Wallbox-Hersteller (Easee), WP-OEMs, Smart-Meter-Betreiber (iMSB) |
| **Cost Structure** | Softwareentwicklung, Kundenakquise (CAC), Plattformbetrieb *(neu zu ergänzen)* |

Dieses Beispiel zeigt: Der Großteil ist schon da. Die drei *(neu zu ergänzen)*-Felder wären der einzige inhaltliche Mehraufwand pro Steckbrief.

---

## 5. Aufwandsabschätzung

| Schritt | Aufwand |
|---------|---------|
| 3 optionale Datenfelder im Schema ergänzen | gering |
| Felder für ~66 Steckbriefe befüllen | hoch (inhaltlich, aber gut parallelisierbar) |
| BMC-Render-Modul + CSS-Grid in der App | mittel |
| Umschalter Fließtext/Canvas im Detail-View | gering |
| Print-CSS für BMC (A4 quer) | gering |

**Pragmatischer Einstieg:** BMC-Render-Modul bauen, das nur aus den **bestehenden** Feldern mappt (also ohne die 3 Zusatzfelder). Liefert sofort einen ~70% vollständigen Canvas für alle 66 Modelle ohne inhaltlichen Mehraufwand. Die Zusatzfelder dann schrittweise nachpflegen.

---

## 6. Erfahrung aus der Pilot-Implementierung (v1.8)

Umgesetzt wie unter „Pragmatischer Einstieg" vorgeschlagen: `buildBMC(item)` mappt rein algorithmisch, keine neuen Pflichtfelder, Toggle „📋 Canvas" im Detail-View für **alle** Steckbriefe (nicht nur eine Teilmenge — da rein berechnet, kein Mehraufwand pro Item). Getestet an 5 strukturell unterschiedlichen Steckbriefen (Tibber, klassischer Vollversorger, VPP/Next Kraftwerke, Mieterstrom, BNetzA). Drei konkrete Erkenntnisse, die die ursprüngliche Annahme „~70% vollständig ohne Mehraufwand" präzisieren:

1. **Die 70%-Schätzung war zu optimistisch für Kanäle/Kundenbeziehungen/Kostenstruktur.** Die Stichwort-Heuristik (Sätze aus Definition/Wertschöpfung/Herausforderungen nach Keywords filtern) liefert bei den getesteten Steckbriefen brauchbare Treffer für *einige* Felder (z.B. Tibber: Kanäle = App/Dongle-Sätze, sehr treffend), aber bei strukturschwächeren Steckbriefen (VPP, Mieterstrom) blieben 1–2 von 3 Feldern leer (= offene Datenlücke). Das ist kein Bug, sondern ehrlich — aber es relativiert „ohne inhaltlichen Mehraufwand vollständig".
2. **„Schlüsselpartner" aus dem Feld `akteure` ist eine echte Fehlquelle, nicht nur eine Näherung.** Bei Kategorie-Steckbriefen (Vollversorger: E.ON, EnBW, RWE, Vattenfall) zeigt das Feld **Wettbewerber**, keine Partner — im BMC-Sinn irreführend. Bei Einzel-Leitakteur-Steckbriefen (Tibber) wäre das Unternehmen sein eigener „Partner" gewesen; das wird inzwischen erkannt und stattdessen korrekt als Datenlücke ausgewiesen. Empfehlung: Baustein in der UI bewusst umbenennen oder als eigenständiges Feld nachpflegen, falls der BMC produktiv genutzt werden soll.
3. **Der Canvas passt nicht auf jeden Steckbrief-*Typ*.** Beim institutionellen Stresstest (BNetzA) liefert das Mapping zwar Text für „Wertangebote" und „Kundenbeziehungen", aber inhaltlich sind das keine echten Wertangebote/Kundenbeziehungen einer Behörde — der BMC unterstellt ein Unternehmen, das die Domäne „Energiemärkte & Market Design" so nicht hat. Das Werkzeug rendert trotzdem unauffällig befüllte Felder, ohne vor dieser Kategorie-Mismatch zu warnen.

**Fazit:** Sinnvoll als optionales, klar als Pilot gekennzeichnetes Zusatz-Feature für die Mehrheit der unternehmensförmigen Steckbriefe (Lieferanten, CPOs, Aggregatoren, Contractoren) — dort verdichtet es tatsächlich gut. Vor einer Vollfreigabe ohne Pilot-Kennzeichnung wären zwei Dinge nötig: (a) die 3 Zusatzfelder zumindest für die unternehmensförmigen Steckbriefe nachpflegen, um die Datenlücken zu schließen, und (b) eine einfache Typ-Markierung im Schema (Unternehmen vs. Institution/Marktinfrastruktur), die den Canvas-Button bei Nicht-Unternehmen ausblendet oder mit einer Warnung versieht.

**Update v1.9:** Punkt (b) ist umgesetzt. Neues optionales Feld `istUnternehmen: false` markiert Steckbriefe, die keine Unternehmen sind (aktuell: `L3-MARKT-BNETZA-01` BNetzA, `L3-MARKT-BNETZA-02` ENTSO-E/regelleistung.net). Bei diesen zeigt die App statt des Canvas-Buttons den Hinweis „📋 Canvas n/a" — der BMC wird für sie gar nicht erst gerendert, statt irreführend befüllt zu werden. Bewusst nicht markiert: die Marktdesign-Steckbriefe (Kapazitätsmechanismus, lokale Flexmärkte, H2-Marktdesign) — diese beschreiben Mechanismen, an denen reale Unternehmen teilnehmen, und sind damit ein Grenzfall, kein klarer Institutions-Fall; hier bleibt der Canvas verfügbar, auch wenn die Qualität schwanken kann. Punkt (a) — die 3 Zusatzfelder inhaltlich nachpflegen — ist offen und als separater, deutlich größerer Aufwand zu behandeln (Inhaltserstellung für bis zu ~65 Steckbriefe, nicht nur Code).
