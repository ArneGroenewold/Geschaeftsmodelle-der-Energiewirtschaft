// ============================================================
// ENERGIEWIRTSCHAFT GESCHÄFTSMODELL-WIKI
// data.js — v2.0 Juni 2026  |  Erweiterte inhaltliche Tiefe
// Neue Felder: wertschoepfung, herausforderungen, ausblick
// ============================================================

const GM_WIKI_VERSION = "v2.7 \u00B7 Juli 2026";
const GM_FAKTEN_STAND = "Juli 2026";  // letzter vollst\u00E4ndiger Fakten-Review (angezeigt in Header + Methodik)

const GM_DATA = [

  // ══════════════════════════════════════════════════════════
  // L1: ERZEUGUNG & SPEICHERUNG
  // ══════════════════════════════════════════════════════════
  {
    id: "L1-ERZ", title: "Erzeugung & Speicherung", icon: "⚡", color: "#F59E0B",
    description: "Physische Energieerzeugung, -wandlung und -speicherung – von konventionellen Großkraftwerken bis zu dezentralen Speichersystemen und Offshore-Windparks.",
    capabilities: [
      {
        id: "L2-ERZ-KONV", title: "Konventionelle Großerzeugung",
        description: "Thermische Kraftwerke im Merit-Order-Wettbewerb – unter zunehmendem Dekarbonisierungsdruck.",
        actors: ["RWE Generation","Uniper","LEAG","EnBW","EP Energy"],
        items: [
          {
            id: "L3-ERZ-KONV-01", title: "Merchant-Erzeugung (Spotmarkt)",
            angreifbarkeit: "Die Merchant-Marge thermischer Anlagen wird strukturell von Batteriespeichern und Flex-Aggregatoren abgegriffen, die Preisspitzen schneller und mit geringeren Grenzkosten bedienen — genau die Knappheitsstunden, aus denen sich das Modell refinanziert, werden geglättet. Wer heute angreift, braucht kein Kraftwerk, sondern Prognose- und Handelskompetenz plus Speicher-Capex; die verbleibende Verteidigungslinie der Etablierten ist der kommende Kapazitätsmarkt (StromVKG), der Bereitstellung statt Erzeugung vergütet.",
            definition: "Kraftwerksbetreiber verkaufen Strom ungeplant an der Strombörse (EPEX SPOT Day-Ahead und Intraday). Erlös = Spread zwischen variablen Grenzkosten (Brennstoff + CO₂-Zertifikat + variable O&M) und Marktpreis. Bei CCGT-Gaskraftwerken: Clean Spark Spread typisch 5–20 €/MWh je nach Gaspreis und CO₂-Preis. Der Merit-Order-Wettbewerb bedeutet: Das teuerste noch benötigte Kraftwerk setzt den Preis; günstigere Erzeuger kassieren die Inframarginalrente.",
            wertschoepfung: "Marge entsteht aus dem Spread zwischen variablen Grenzkosten und dem Merit-Order-Räumungspreis. Flexibilisierung (schnelles Ramping, Mindestlastabsenkung) ist entscheidend, um Spitzenstunden zu nutzen. Bei steigendem EE-Anteil verschiebt sich der Wert zu kurzen Spitzenlastphasen mit hohen Preisen – Gaskraftwerke werden zu 'Preis-Spitzenmachern'.",
            herausforderungen: "Steigende EE-Kapazitäten drücken Residuallast und senken Volllaststunden thermischer Anlagen drastisch. CO₂-Kosten (EU ETS Phase 4: >80 €/t) erhöhen Grenzkosten. Fehlendes Kapazitätsmarktdesign in Deutschland verhindert Refinanzierung von Neubauten. Politisches Risiko: Kohleausstieg 2038, Gasausstiegsdiskussion ab 2030.",
            ausblick: "Gaskraftwerke bleiben unverzichtbar als Residuallastdecker und Ramp-up-Kapazität. Neue H2-ready CCGT-Anlagen werden nur bei gesicherter Kapazitätsvergütung gebaut. Kraftwerksstrategie/StromVKG (2026): erste Ausschreibungen über ~12 GW H2-ready-Kapazität noch 2026, umfassender Kapazitätsmarkt ab 2032 geplant.[[Q:stromvkg]] Langfristig: H2-Peaker ersetzen Gaskraftwerke.",
            erloesmodell: "Merchant / Spot (Day-Ahead + Intraday)",
            regulierung: "EnWG §12, EU ETS (CO₂, TEHG), REMIT, BImSchG",
            kundensegment: "Großhandel / Börse (EPEX SPOT)",
            differenzierung: "Grenzkosten, Ramping-Fähigkeit, Verfügbarkeit, H2-Readiness",
            bmc_kanaele: "Kein Endkundenvertrieb — Direktzugang zur Börse (EPEX SPOT) über eigenen Handelsdesk oder externen Vermarkter/Bilanzkreisverantwortlichen.",
            bmc_kundenbeziehung: "Keine klassische Kundenbeziehung, da Markt statt Vertragspartner; relevante Beziehungen sind Brennstofflieferanten und ÜNB (Bilanzkreis).",
            bmc_kostenstruktur: "Brennstoffkosten (Gas/Kohle) und CO₂-Zertifikate als dominante variable Kosten; Fixkosten für Anlagenbetrieb, Wartung und Handelsdesk-Personal.",
            fallbeispiel: "Konkret entscheidet sich die Wirtschaftlichkeit eines RWE-Gaskraftwerks stündlich neu am Clean Spark Spread: Bei einem Gaspreis von 30 €/MWh, einem Wirkungsgrad von 58% und einem CO₂-Preis von 80 €/t ergeben sich Grenzkosten von rund 65–70 €/MWh. Liegt der EPEX-Spotpreis in dieser Stunde bei 90 €/MWh, fährt das Kraftwerk mit voller Leistung und verdient die Differenz von 20–25 €/MWh; liegt der Preis darunter, bleibt die Anlage besser abgeschaltet. Diese Entscheidung trifft kein Mensch mehr von Hand, sondern ein automatisiertes Handelssystem, das die Fahrweise an die Merit-Order-Position des Kraftwerks koppelt. Genau hier zeigt sich das strukturelle Problem: Je mehr Wind- und Solarstrom ins Netz drängt, desto seltener wird die Stunde, in der der Spotpreis über den Grenzkosten liegt — aus einem früher fast durchgehend laufenden Grundlastkraftwerk wird ein Gerät, das nur noch in wenigen hundert Stunden im Jahr Geld verdient, dafür aber in diesen Stunden umso mehr.",
            status: "aktiv",
            radar: { regulierung:1, skalierbarkeit:2, marktrisiko:5, digitalisierung:2, wettbewerb:4, nachhaltigkeit:1 },
            erloesTyp: "Merchant", akteure: ["RWE Generation","Uniper","LEAG"]
          },
          {
            id: "L3-ERZ-KONV-02", title: "Regelenergie & Systemdienstleistungen",
            angreifbarkeit: "Der FCR-Markt zeigt, wie schnell diese Marge kippt: BESS-Markteintritte haben den Leistungspreis von >30 auf zeitweise <10 €/MW/h gedrückt, weil Batterien die Produktanforderung (Reaktionszeit) schlicht besser erfüllen als Thermalkraftwerke. Angreifer brauchen nur Präqualifikation und Optimierungssoftware; die europäische Marktintegration (PICASSO/MARI) vergrößert zusätzlich das Angebot. Verteidigungsfähig bleiben vor allem aFRR/mFRR-Segmente mit Energiebereitstellung über längere Zeiträume.",
            definition: "Präqualifizierte Kraftwerke nehmen an Regelenergiemärkten teil: FCR (±MW, Reaktion <30 s), aFRR (<5 min), mFRR (<15 min). Wöchentliche Ausschreibung (FCR) bzw. tagesaktuelle Auktionen (aFRR/mFRR) über regelleistung.net. Erlösstruktur: Leistungspreis (€/MW/h, für Vorhaltung) + Arbeitspreis (€/MWh, bei Abruf). FCR-Leistungspreis ist die attraktivste Komponente – war bis 2021 >25 €/MW/h, sank durch BESS-Markteintritt.",
            wertschoepfung: "Leistungspreis ist Haupttreiber: Kapazitätsvorhaltung ohne tatsächlichen Abruf = garantierter Erlös. Stacking mit Spotmarkt möglich. Präqualifikationsbarriere schützt etablierte Anbieter. Portfolioeffekte: Größere Pools erlauben feinere Bandbreiten-Aufteilung.",
            herausforderungen: "FCR-Preisverfall durch massive BESS-Eintritte (von 30 €/MW/h auf <10 €/MW/h in Schwächephasen 2024). Europäische Integration der Regelenergiemärkte (PICASSO, MARI, TERRE) erhöht Angebot und drückt Preise langfristig. Thermalkraftwerke verlieren FCR-Markt an Batterien.",
            ausblick: "Großkraftwerke fokussieren auf aFRR/mFRR (größere Bänder, weniger BESS-Konkurrenz). Neue Systemdienstleistungen wachsen: Trägheitsemulation (Inertia), Kurzschlussleistung, Blindleistung – für diese braucht man Synchronmaschinen, also Thermalkraftwerke.",
            erloesmodell: "Leistungspreis (€/MW/h) + Arbeitspreis (€/MWh bei Abruf)",
            regulierung: "SO GL Art. 154ff., SOGL Annex, regelleistung.net, PICASSO/MARI",
            kundensegment: "ÜNB (TSO)",
            differenzierung: "Reaktionsgeschwindigkeit, Präqualifikationsgüte, Portfoliogröße",
            bmc_kanaele: "Direktzugang über regelleistung.net (gemeinsame Ausschreibungsplattform der vier ÜNBs); kein Endkundenkontakt.",
            bmc_kundenbeziehung: "Vertragliche Präqualifikationsbeziehung zu den ÜNBs; keine laufende Kundenpflege im klassischen Sinn, sondern wiederkehrende Auktionsteilnahme.",
            bmc_kostenstruktur: "Präqualifikationskosten (technische Nachweise, Messtechnik), Opportunitätskosten der Kapazitätsvorhaltung, Personal für Gebotsstrategie.",
            fallbeispiel: "Konkret bietet ein RWE-Steinkohle- oder Gaskraftwerk einen Teil seiner Kapazität wöchentlich für FCR an: Es verpflichtet sich, innerhalb von 30 Sekunden auf Frequenzabweichungen zu reagieren, und erhält dafür einen Leistungspreis — unabhängig davon, ob die Reserve in der jeweiligen Woche überhaupt abgerufen wird. Das Kraftwerk verdient also am Bereitstehen, nicht am Liefern. Seit 2021 ist genau dieses Geschäft für Großkraftwerke schwieriger geworden: Batteriespeicher können dieselbe Schnelligkeit liefern und haben den FCR-Leistungspreis von über 25 €/MW/h auf teils unter 10 €/MW/h gedrückt. RWE und andere Betreiber reagieren, indem sie ihre Anlagen verstärkt für aFRR und mFRR anbieten — Produkte mit längerer Reaktionszeit (5–15 Minuten), wo Batterien wegen begrenzter Energiekapazität bei langen Abrufen strukturell im Nachteil sind und thermische Kraftwerke ihren Vorteil der dauerhaften Verfügbarkeit ausspielen können.",
            status: "aktiv",
            radar: { regulierung:3, skalierbarkeit:2, marktrisiko:2, digitalisierung:3, wettbewerb:3, nachhaltigkeit:1 },
            erloesTyp: "Fee-based", akteure: ["RWE Generation","Uniper","Statkraft"]
          },
          {
            id: "L3-ERZ-KONV-03", title: "Power Purchase Agreement – konventionell",
            angreifbarkeit: "Das konventionelle PPA verliert seinen Käufermarkt an EE-PPAs: Industrieabnehmer mit Dekarbonisierungszielen zahlen für grüne Herkunft statt für fossile Bandlieferung, und steigende CO₂-Kosten fressen den Preisvorteil laufend auf. Angreifer sind EE-Projektierer mit Corporate-PPA-Teams und Strukturierer, die Shape-Risiken übernehmen — dem konventionellen PPA bleibt die Nische als 24/7-Backup-Komponente hybrider Lieferkonstrukte.",
            definition: "Langfristiger bilateraler Liefervertrag (5–15 Jahre) fixiert Preis und Menge. Strukturierungsformen: Baseload-PPA (24/7), Peak-PPA (Werktags 8–20 Uhr), indexierter PPA (±Formel auf Gaspreis/CO₂). Konventionelle PPAs geben dem Erzeuger Cashflow-Planungssicherheit und ermöglichen günstige Restnutzungszeit-Finanzierung. Abnehmer sichern sich gegen Preisspitzen ab.",
            wertschoepfung: "Erzeuger monetarisiert Planungssicherheit – bankfähige Cashflows senken Finanzierungskosten. Für konventionelle Anlagen: Restlebenszeit-Optimierung ohne EEG. Abnehmer zahlt Risikopremium für Preissicherheit. Strukturierungsmarge beim Lieferanten.",
            herausforderungen: "Sinkende Spotpreise durch EE-Zubau können PPAs rückwirkend teuer machen. CO₂-Kosten senken Wettbewerbsfähigkeit gegenüber EE-PPAs. Kreditrisiko des Abnehmers über 10+ Jahre schwer einzuschätzen.",
            ausblick: "Konventionelle PPAs werden durch EE-PPAs verdrängt. Nische: Industriekunden mit 24/7-Baseload-Bedarf ohne Profilkomplexität. H2-ready Gaskraftwerke als Grundlage für 'grüne Flexibilitäts-PPAs'.",
            erloesmodell: "Festpreis / Floor-Cap-Struktur über Vertragslaufzeit",
            regulierung: "BGB, EnWG §42a, REMIT (ab 1 MWh)",
            kundensegment: "B2B Industrie, Energielieferanten",
            differenzierung: "Preissicherheit, Lieferzuverlässigkeit, Laufzeit, Kreditmanagement",
            bmc_kanaele: "Bilaterale Direktverhandlung mit Industriekunden oder Energielieferanten, oft über Energiehandelsabteilung oder Broker.",
            bmc_kundenbeziehung: "Langfristige Vertragsbindung (5–15 Jahre) mit individueller Strukturierung; intensive Bonitäts- und Risikoprüfung statt Self-Service.",
            bmc_kostenstruktur: "Strukturierungs- und Rechtskosten für Vertragsgestaltung, Kreditrisikomanagement (Besicherung, Versicherung), Opportunitätskosten gegenüber Spotmarkt.",
            fallbeispiel: "Konkret vereinbart z.B. EnBW mit einem Industriekunden einen Baseload-PPA über 10 Jahre zu einem Festpreis von etwa 55 €/MWh: Egal ob der Spotmarktpreis in einem bestimmten Monat auf 120 €/MWh steigt oder auf 30 €/MWh fällt, zahlt der Kunde immer 55 €/MWh, und EnBW liefert immer dieselbe konstante Menge. Für EnBW bedeutet das: Wenn der tatsächliche Spotpreis im Schnitt über 10 Jahre unter 55 €/MWh bleibt, hat sich das Geschäft gelohnt; liegt er strukturell darüber, wäre der Verkauf am Spotmarkt lukrativer gewesen. Der eigentliche Wert für EnBW liegt aber nicht in dieser Wette, sondern in der Bankfähigkeit des Cashflows: Mit einem zehnjährigen Vertrag in der Tasche kann das Unternehmen die Restlaufzeit eines älteren Kraftwerks zu günstigeren Konditionen refinanzieren, weil die Bank ein kalkulierbares Risiko statt eines offenen Marktpreisrisikos sieht.",
            status: "aktiv",
            radar: { regulierung:1, skalierbarkeit:2, marktrisiko:2, digitalisierung:1, wettbewerb:3, nachhaltigkeit:2 },
            erloesTyp: "Merchant", akteure: ["RWE","Uniper","EnBW"]
          }
        ]
      },
      {
        id: "L2-ERZ-EE", title: "Erneuerbare Energien",
        description: "Wind-, Solar- und Wasserkraftanlagen – zunehmend merchant-basiert mit Corporate PPAs als dominierendem Wachstumssegment.",
        actors: ["RWE Renewables","EnBW","Ørsted","Encavis","ABO Wind","Baywa r.e.","Vattenfall"],
        items: [
          {
            id: "L3-ERZ-EE-01", title: "EEG-Marktprämienmodell",
            angreifbarkeit: "Die Marge liegt nicht in der Förderung, sondern in der Prognose-Outperformance gegen den Referenzmarktwert — und die wird doppelt angegriffen: ÜNB verbessern die Referenzwerte laufend, während KI-gestützte Prognoseanbieter den Informationsvorsprung kommoditisieren. Das Solarspitzengesetz (§51 EEG) verlagert zudem Preisrisiko auf die Anlagenbetreiber und macht Speicher-/Flexkompetenz zum neuen Differenzierer — wer nur Standard-Direktvermarktung kann, verliert das Mandat an integrierte Optimierer.",
            definition: "Kerninstrument der deutschen Energiewende: Anlagen >100 kW müssen Strom direkt vermarkten und erhalten gleitende Marktprämie = anzulegender Wert (AW, aus BNetzA-Ausschreibung) minus monatlicher Referenzmarktwert (RMW). AW ist für 20 Jahre gesichert. Direktvermarkter (Next Kraftwerke, Statkraft, Axpo) bündeln 5.000–14.000 Anlagen und optimieren via hochauflösende Wetter-ML-Modelle und Intraday-Handel. Verwaltungskosten: 0,1–0,5 ct/kWh.",
            wertschoepfung: "Kombination aus staatlich gesichertem AW (Planungssicherheit) + Upside bei hohen Spotpreisen. Für Direktvermarkter: Managementfee ~0,2 ct/kWh + Outperformance-Share. Outperformance entsteht durch bessere stündliche Prognosen als der pauschale Monats-RMW. Skaleneffekte: 10 GW-Portfolio reduziert Prognosefehler durch Diversifikation (Wind Nord/Solar Süd) auf ~2–3%.",
            herausforderungen: "AW aus Ausschreibungen sinken durch Wettbewerb – neue Anlagen erzielen niedrigere Förderung. §51 EEG: Kein anzulegender Wert bei länger anhaltenden negativen Preisen (Schwelle seit 2021 schrittweise von 6 auf 4 und weniger Stunden gesenkt; mit dem Solarspitzengesetz 2025 für Neuanlagen auf praktisch jede negative Stunde verschärft)[[Q:eeg-51]] – bei steigendem EE-Anteil immer relevanter. Redispatch-Ausfallarbeit belastet Erzeuger. Direktvermarktungsmarkt wird oligopolistisch (Next Kraftwerke/Shell und RWE dominieren mit >35% Marktanteil).",
            ausblick: "Bis 2028 laufen erste EEG-Altanlagen (IBN 2000–2005) aus. Repowering-Welle oder Merchant-Betrieb. Solar-LCOE <25 €/MWh (2026) macht merchant economics attraktiv. Direktvermarktungsmarkt konsolidiert weiter auf 3–5 Anbieter.",
            erloesmodell: "EEG-Marktprämie (staatlich) + Spotmarkterlös + Intraday-Optimierung",
            regulierung: "EEG 2023 §20–§53, BNetzA-Ausschreibungen, MaBiS",
            kundensegment: "Direktvermarkter, ÜNB (EinsMan/Redispatch)",
            differenzierung: "Prognosegüte (ML-Wettermodell), Portfoliogröße, Intraday-Handelsautomatisierung",
            bmc_kanaele: "B2B-Direktansprache von Anlagenbetreibern/Projektentwicklern durch Direktvermarkter; kein Endkunden-Self-Service.",
            bmc_kundenbeziehung: "Mehrjährige Direktvermarktungsverträge mit SCADA-Anbindung der Anlage; hohe Wechselhürde nach technischer Integration.",
            bmc_kostenstruktur: "Wettermodell- und IT-Infrastrukturkosten, SCADA-Anbindung je Anlage, Intraday-Handelsteam; Verwaltungskosten typ. 0,1–0,5 ct/kWh.",
            fallbeispiel: "Konkret funktioniert das Marktprämienmodell so: Ein Windpark hat einen anzulegenden Wert (AW) von z.B. 6 ct/kWh aus der BNetzA-Ausschreibung. Liegt der monatliche Referenzmarktwert (RMW, der durchschnittliche Börsenpreis für Windstrom in diesem Monat) bei 4 ct/kWh, erhält der Betreiber zusätzlich zum Erlös aus dem Stromverkauf eine Marktprämie von 2 ct/kWh — die Differenz zwischen AW und RMW. Der Direktvermarkter, der die Anlage betreut, verdient nicht an dieser Differenz, sondern daran, ob er den Strom besser verkauft als der pauschale Monats-RMW unterstellt: Verkauft er die Erzeugung einer windstarken Stunde gezielt am Intraday-Markt statt zum Monatsdurchschnitt, entsteht eine Outperformance, von der er typischerweise 20–40% als Erfolgsanteil einbehält. Genau dieser Mechanismus erklärt, warum sich ein größeres Anlagenportfolio lohnt: Bei 10.000 Anlagen gleichen sich Prognosefehler statistisch aus, wodurch die Differenz zwischen geplanter und tatsächlicher Einspeisung sinkt — und mit ihr die teuren Ausgleichsenergiekosten, die sonst die Marge aufzehren würden.",
            status: "aktiv",
            radar: { regulierung:4, skalierbarkeit:3, marktrisiko:2, digitalisierung:3, wettbewerb:2, nachhaltigkeit:5 },
            erloesTyp: "Reguliert", akteure: ["RWE Renewables","EnBW","Ørsted","Encavis"]
          },
          {
            id: "L3-ERZ-EE-02", title: "Corporate PPA (Erneuerbare)",
            angreifbarkeit: "Die Strukturierungsmarge ist durch Standardisierung angreifbar: PPA-Matching-Plattformen und Auktionsprozesse drücken die Intermediärsgebühr, während große Abnehmer eigene PPA-Desks aufbauen und direkt kontrahieren. Wer Shape- und Kreditrisiko nicht selbst tragen kann, wird auf die Brokerrolle reduziert — verteidigungsfähig sind Player mit Bilanz (Utilities, Händler), die Firming als Produkt bündeln.",
            definition: "Direktvertrag zwischen EE-Anlagenbetreiber und Industriekunden ohne staatliche Förderung. Zwei Formen: (1) Physical PPA – physische Lieferung, Anlage ist Lieferant. (2) Financial PPA (CfD) – Anlage verkauft an Markt, Differenz zwischen Strike Price und EPEX wird bilateral ausgeglichen. Financial PPAs dominieren in Deutschland. Laufzeit: 10–15 Jahre, Strike Price 2024: 40–70 €/MWh Onshore Wind. Getrieben durch RE100-Commitments (BASF, BMW, Deutsche Bahn, Microsoft, Google).",
            wertschoepfung: "Anlagenbetreiber: Bankfähige Cashflows für Projektfinanzierung ohne EEG, niedrigere Kapitalkosten als merchant (~1–2% Zinsvorteil = signifikant bei 20-j. Laufzeit). Industriekunde: Preishedge gegen steigende Energiekosten + RE100-Erfüllung + CSRD-Scope-2-Optimierung. Additionality (neue Anlage, kein Bestandsprojekt) als Differenzierungsmerkmal.",
            herausforderungen: "Shape-Risiko: EE-Profil passt selten zu Industrielast (Produktion nachts, Solar tagsüber). Residualbeschaffung notwendig. Bonitätsprüfung über 10+ Jahre aufwendig – Kreditversicherung verteuert Produkt. Sinkende Spot-Preise könnten Strike Price rückwirkend teuer erscheinen lassen.",
            ausblick: "PPA-Markt wächst stark (EU-Ziel >2 GW/Jahr neue PPA-Kapazität). EFET-Standardverträge senken Transaktionskosten. Aggregierte PPAs (mehrere kleinere Abnehmer = ein PPA) als neues Strukturierungsmodell für KMU. Sektorale PPAs (Stahl-H2-PPA, Rechenzentrum-PPA) entstehen.",
            erloesmodell: "Strike Price (CfD-Differenzausgleich) oder physischer Festpreis",
            regulierung: "BGB, EU RED III, REMIT (Meldepflicht), EnWG §42a",
            kundensegment: "B2B Industrie (DAX, Tech, RE100-Mitglieder)",
            differenzierung: "Additionality-Nachweis, Profilqualität, Laufzeit, Kreditstruktur",
            bmc_kanaele: "Direktansprache von Industriekunden (DAX, Tech, RE100-Mitglieder), häufig über spezialisierte PPA-Berater/Makler und EFET-Standardverträge.",
            bmc_kundenbeziehung: "Langfristige Vertragsbeziehung (10–15 Jahre) mit aufwendiger Bonitätsprüfung; keine Selbstbedienung, hohe Beratungsintensität bei Vertragsstrukturierung.",
            bmc_kostenstruktur: "Strukturierungs- und Rechtsberatungskosten, Kreditversicherung/Besicherung, Shape-Risiko-Hedging bei Profilabweichung zwischen Erzeugung und Abnahme.",
            fallbeispiel: "Konkret zeigt sich ein Financial PPA an einem Beispiel wie BASF/RWE Renewables: Ein neuer Windpark verkauft seinen gesamten Strom weiterhin ganz normal an die Börse, BASF kauft seinen Strom weiterhin ganz normal vom eigenen Lieferanten — physisch ändert sich nichts. Vertraglich vereinbaren beide Seiten aber einen Strike Price von z.B. 55 €/MWh: Liegt der tatsächliche Börsenpreis in einer Stunde bei 70 €/MWh, zahlt RWE die Differenz von 15 €/MWh an BASF aus; liegt er bei 40 €/MWh, zahlt BASF die Differenz von 15 €/MWh an RWE. Im Ergebnis hat BASF für die vertraglich vereinbarte Menge einen Festpreis erreicht, ohne dass eine Kilowattstunde physisch zwischen den beiden Unternehmen fließt. Für RWE ist der eigentliche Gewinn nicht der Strike Price selbst, sondern dass der Vertrag über 15 Jahre einen bankfähigen, planbaren Cashflow erzeugt — und damit die Finanzierungskosten für den Windpark senkt, weil die Bank kein offenes Marktpreisrisiko mehr trägt.",
            status: "aktiv",
            radar: { regulierung:1, skalierbarkeit:3, marktrisiko:2, digitalisierung:2, wettbewerb:3, nachhaltigkeit:5 },
            erloesTyp: "Merchant", akteure: ["Ørsted","RWE Renewables","Baywa r.e.","Encavis"]
          },
          {
            id: "L3-ERZ-EE-03", title: "Offshore-Wind-Projektentwicklung",
            angreifbarkeit: "Die hohen Eintrittsbarrieren (Capex, BSH-Genehmigung, Netzanschluss) schützen vor Newcomern, nicht vor Kapitalmarkt-Angreifern: Öl- und Gaskonzerne (BP, TotalEnergies) mit günstigerem Kapital haben die Gebotslogik in Auktionen verschoben und etablierte Entwickler aus Flächen gedrängt. Die Marge wandert zugleich von der Entwicklung in die Lieferkette (Turbinen, Kabel, Errichterschiffe), deren Engpässe die Preissetzungsmacht halten.",
            definition: "Kapitalintensivste EE-Projektkategorie: 2.500–4.000 €/kW installierter Leistung, Projektlaufzeiten 20–30 Jahre. In Deutschland BNetzA-Ausschreibungen mit Gebotspreisverfahren. Wertschöpfungskette: Standortgutachten → BSH-Genehmigung → Ausschreibungsgewinn → Projektfinanzierung → EPC → 20 Jahre Betrieb → O&M. Volllaststunden Nordsee: 4.000–4.500 h/a. Deutsche Offshore-Ziele: 30 GW bis 2030, 70 GW bis 2045 (derzeit ~8 GW)[[Q:windseeg-offshore]].",
            wertschoepfung: "Gesicherte 20-j. Cashflows aus EEG-Ausschreibungsgebotspreis. Skaleneffekte durch Serienentwicklung. Netzanschluss-Genehmigungen (Netzverknüpfungspunkte) als proprietärer Engpass. O&M-Marge (20–25% der Projekterlöse) ist profitabelste Phase. Floating-Wind-Entwicklungskompetenz als Zukunftsinvestition.",
            herausforderungen: "Lieferkettenengpässe: Siemens Gamesa-Qualitätsprobleme, Turbinenpreise +30–50% seit 2021. Gestiegene Zinsen machen Nullgebots-Projekte (Ørsted 2021) unrentabel. BSH-Genehmigungsverfahren dauern 3–5 Jahre trotz Beschleunigung. Naturschutz (Vogelzug, Riffschutz) als Genehmigungsrisiko.",
            ausblick: "Offshore-Boom unvermeidbar: 30 GW Ziel bis 2030. Floating Offshore Wind (FLOW) ab 2030+ kommerziell. 15–20 MW+ Turbinen senken LCOE auf <40 €/MWh. Nordsee als europäische Energiedrehscheibe (H2-Offshore-Produktion, direkte Gleichstromkabel nach Süddeutschland).",
            erloesmodell: "EEG-Ausschreibungsgebotspreis (€/MWh, 20 Jahre gesichert)",
            regulierung: "WindSeeG, EEG 2023, BSH (Bundesamt Seeschifffahrt), BNetzA-Ausschreibungen",
            kundensegment: "ÜNB (Offshore-Netzanschluss), Börse (Stromverkauf)",
            differenzierung: "Genehmigungskompetenz, Serieneffekte, Netzanschluss-Zugänge, O&M-Netz",
            bmc_kanaele: "Marktzugang über BNetzA-Ausschreibungen (kein klassischer Vertrieb); Investoren-/Partnerakquise über Infrastrukturfonds-Netzwerke.",
            bmc_kundenbeziehung: "Kein Endkundenkontakt; zentrale Beziehung zu BSH (Genehmigung), ÜNB (Netzanschluss) und Projektfinanzierern über 20–30 Jahre Projektlaufzeit.",
            bmc_kostenstruktur: "Capex dominiert (2.500–4.000 €/kW), zusätzlich Genehmigungs- und Gutachterkosten, EPC-Vertragskosten, langfristige O&M-Verträge.",
            fallbeispiel: "Konkret zeigt sich die Kapitalintensität an einem 1-GW-Offshore-Park von Ørsted oder RWE Offshore: Bei rund 3.000 €/kW Investitionskosten sind das etwa 3 Mrd. € Capex, finanziert über Jahre bevor die erste Kilowattstunde verkauft wird. Den Gegenwert sichert der gewonnene EEG-Ausschreibungs-Gebotspreis für 20 Jahre — das ist der Mechanismus, der die Bank überhaupt erst bereit macht, ein Projekt dieser Größenordnung zu finanzieren, weil der Erlös pro MWh über zwei Jahrzehnte feststeht. Sobald der Park nach 3–5 Jahren Bau ans Netz geht, verschiebt sich die Wertschöpfung: Die eigentlich profitabelste Phase ist nicht der Bau, sondern der 20-jährige O&M-Betrieb, der laut Branchenangaben 20–25% der gesamten Projekterlöse ausmacht — eine Wartungsflotte, die fortlaufend Turbinen, Umspannplattform und Seekabel instand hält, ohne die das Projekt seine Volllaststunden von 4.000–4.500 h/a gar nicht erreichen würde.",
            status: "aktiv",
            radar: { regulierung:4, skalierbarkeit:2, marktrisiko:2, digitalisierung:3, wettbewerb:2, nachhaltigkeit:5 },
            erloesTyp: "Reguliert", akteure: ["Ørsted","RWE Offshore","EnBW Offshore","Vattenfall"]
          },
          {
            id: "L3-ERZ-EE-04", title: "Bürgerenergiegenossenschaft",
            angreifbarkeit: "Venture-finanzierte Neolieferanten (Tibber, Ostrom) und Mietmodelle (Enpal) sprechen dieselben klimabewussten Kunden mit besserer UX und ohne Genossenschaftsanteil an. Angreifbar ist vor allem die Vertriebsbeziehung: Wenn 'grün' zum Standard-Feature jedes Anbieters wird, bleiben als Differenzierung nur Lokalität und Mitbestimmung — Werte, die sich schwer skalieren und digital kaum abbilden lassen.",
            definition: "Genossenschaftlich organisierter EE-Betrieb nach GenG. Mitglieder ab 100–500 € Einlage sind Kapitalgeber, Kunden und Mitbestimmungsberechtigte. EWS Schönau (1994 gegründet, ~224.000 Kunden bundesweit), BürgerEnergie Berlin, Green Planet Energy als Beispiele. Besonderheit: Zweckrationalität statt Gewinnmaximierung. Überschüsse werden reinvestiert oder als moderate Dividende ausgeschüttet. Politisches Profil (Anti-Atomkraft, Energiewende-Pioniere) ist integraler Markenkern.",
            wertschoepfung: "Identifikations-Premium: Mitglieder zahlen mehr und wechseln kaum. Strukturell niedriger Churn (<5%/Jahr vs. 15–25% bei Discountern). Günstiger Kapitalzugang über Genossenschaftseinlagen. EU Energy Communities (§3 Nr. 38a EnWG) schaffen neue Geschäftsmodelloptionen: P2P-Handel, lokale Netzentgelteinsparungen.",
            herausforderungen: "Skalierungshürde durch demokratische Entscheidungsstrukturen. Professionalisierungsdruck durch digitale Neolieferanten (Tibber, Ostrom). Nachfolgeproblematik bei gründergetriebenen Genossenschaften (EWS Schönau: Bürgerinitiative von 1994 muss Generationenwechsel managen).",
            ausblick: "EU EMD Energy Communities als Wachstumstreiber: lokale Energiegemeinschaften können direkte Solarstromabrechnung innerhalb der Community organisieren. Politisches Momentum wächst. Kombination mit kommunaler Wärmeplanung (WPG) eröffnet Genossenschafts-Fernwärme als neues Feld.",
            erloesmodell: "EEG-Marktprämie + Retail Margin + Genossenschaftsdividende (reinvestiert)",
            regulierung: "EEG, GenG, EnWG §3 Nr. 15, EU EMD (Energy Communities)",
            kundensegment: "B2C Bürger / Mitglieder (werteorientiert)",
            differenzierung: "Gemeinwohl, Lokalität, demokratische Mitbestimmung, Authentizität",
            bmc_kanaele: "Mitgliederwerbung über lokale Präsenz, Mund-zu-Mund-Empfehlung, politisches Engagement/Markenprofil — kaum klassisches Performance-Marketing.",
            bmc_kundenbeziehung: "Mitglieder sind zugleich Kapitalgeber und Mitbestimmungsberechtigte (Genossenschaftsversammlung); strukturell niedriger Churn (<5%/Jahr) durch Identifikation.",
            bmc_kostenstruktur: "Genossenschaftsverwaltung, Mitgliederkommunikation, EEG-Direktvermarktungskosten; im Verhältnis zur Größe oft höhere Verwaltungskostenquote als bei Konzernen.",
            fallbeispiel: "Der 'Sonnencent' macht den Förder-Mechanismus der EWS Schönau direkt im Tarif sichtbar: Ein fester Betrag pro verkaufter Kilowattstunde — über alle rund 224.000 Kunden gerechnet kamen 2022 rund 2,3 Mio. € zusammen — fließt automatisch in ein Förderprogramm für neue bürgereigene Erzeugungsanlagen und Energiewende-Projekte, statt als Gewinn an Anteilseigner auszuschütten. Konkret heißt das: Kauft ein Haushalt mit 3.500 kWh/Jahr EWS-Ökostrom, finanziert er darüber automatisch einen kleinen, aber festen Anteil neuer Wind- oder Solarprojekte mit, ohne selbst etwas tun zu müssen — der Mechanismus liegt im Tarif, nicht im Spendenverhalten des Kunden. Die Genossenschaftsstruktur (heute über 8.000 Mitglieder) verstärkt diesen Effekt auf einer zweiten Ebene: Mitglieder sind gleichzeitig Kunden und Kapitalgeber, jede Genossenschaftseinlage finanziert direkt neue Erzeugungsprojekte wie EWS-eigene Windparks. Das unterscheidet das Modell strukturell von einem klassischen Ökostromtarif eines Konzerns, bei dem der grüne Charakter über zugekaufte Herkunftsnachweise (HKN) hergestellt wird, ohne dass die Kundenzahlung direkt in neue Anlagen fließt.",
            status: "aktiv",
            radar: { regulierung:2, skalierbarkeit:1, marktrisiko:2, digitalisierung:1, wettbewerb:1, nachhaltigkeit:5 },
            erloesTyp: "Fee-based", akteure: ["EWS Schönau","BürgerEnergie Berlin","Green Planet Energy"]
          }
        ]
      },
      {
        id: "L2-ERZ-SPEICHER", title: "Speicher & Flexibilität",
        description: "Batterietechnologien als eigenständige Geschäftsmodelle – Erlösstacking als Kernstrategie.",
        actors: ["Fluence","NEOEN","Kyon Energy","Tesvolt","Sonnen (Shell)","EnBW","SENEC","E3/DC"],
        items: [
          {
            id: "L3-ERZ-SPEICHER-01", title: "Grid-Scale Battery (BESS)",
            angreifbarkeit: "Der Angriff kommt aus dem eigenen Erfolg: Jedes zusätzliche BESS kannibalisiert Arbitrage- und FCR-Erlöse aller Bestandsanlagen — First Movers ernten die hohen Spreads, Nachzügler kaufen in fallende Erlöskurven. Asset-leichte Optimierer (Handels- und Routing-Plattformen) greifen zudem die Marge zwischen Asset-Eigentümer und Markt ab: Wer nur die Batterie besitzt, aber nicht den besten Algorithmus, gibt einen wachsenden Erlösanteil an Dritte ab.",
            definition: "Großbatteriespeicher (10–500 MW, 1–4h Kapazität) erzielen Erlöse durch simultanes Stacking: (1) FCR-Leistungspreis: 8–25 €/MW/h (2024), attraktivste Einzelkomponente. (2) Intraday-Arbitrage: Kauf bei niedrigen EE-Einspeisephasen, Verkauf in Abendpeaks – Spread 15–50 €/MWh. (3) aFRR/mFRR als Ergänzung. Optimierungssoftware entscheidet stündlich, welcher Markt höhere Grenzerlöse bietet. Capex 2024: 400–600 €/kWh (Li-Ion LFP), Lernrate ~15%/Verdopplung.",
            wertschoepfung: "Optimierungsalgorithmus ist der eigentliche Wettbewerbsvorteil, nicht die Hardware. Schlechte Software lässt 30–50% theoretischer Erlöse liegen. Arbitrage-Spread wächst mit EE-Anteil (mehr Phasen mit negativen Preisen, höhere Abendflanken). Degradationsmanagement (optimaler SOC, Temperaturbetrieb) verlängert Lebensdauer und verbessert IRR.",
            herausforderungen: "FCR-Preisverfall durch BESS-Überangebot ist strukturell: FCR-Preis von >30 €/MW/h (2021) auf <10 €/MW/h (Tiefs 2024). Batteriedegradation nach 3.000–5.000 Zyklen. Brandschutzanforderungen (VdS 3527) erhöhen Betriebskosten. Netzanschlussengpässe begrenzen Standortwahl.",
            ausblick: "BESS-Markt wächst explosiv (Europa: 100+ GW bis 2030). Arbitrage-Erlöse steigen mit Preisspread. Duration-Erweiterung auf 6–8h (Long Duration Storage) als nächste Stufe. Iron-Air- und Flow-Batterien für saisonale Speicherung. Co-location mit Solar/Wind reduziert Netzanschlusskosten erheblich.",
            erloesmodell: "FCR/aFRR Leistungspreis (€/MW/h) + Intraday-Arbitrage (€/MWh)",
            regulierung: "EnWG §118, SOGL Art. 154, MsbG (Metering), BNetzA Speicherregulierung",
            kundensegment: "Großhandel, ÜNBs (Regelenergiemärkte)",
            differenzierung: "Optimierungsalgorithmus, Response Time, Zyklenanzahl, Multi-Market-Stacking",
            bmc_kanaele: "B2B-Projektakquise über Infrastrukturinvestoren und Standortentwickler; Marktzugang für Erlöse über regelleistung.net und EPEX SPOT.",
            bmc_kundenbeziehung: "Kein Endkunde im klassischen Sinn; Beziehung zu Investoren/Asset-Eigentümern über Betriebsführungsverträge, zu ÜNBs über Präqualifikation.",
            bmc_kostenstruktur: "Capex dominiert (400–600 €/kWh 2024), Netzanschlusskosten, Brandschutzanforderungen (VdS 3527), Lizenzkosten für Optimierungssoftware.",
            fallbeispiel: "Konkret zeigt sich das Erlös-Stacking am Betrieb des WEMAG-Batteriespeichers in Schwerin (10 MW/15 MWh nach der Erweiterung): Ein Teil der Kapazität steht permanent für FCR bereit — dafür gibt es einen Leistungspreis (8–25 €/MW/h, 2024), der allein für die Bereitschaft gezahlt wird, unabhängig davon, ob tatsächlich Energie abgerufen wird. Die übrige, nicht reservierte Kapazität nutzt die Steuerungssoftware parallel für Intraday-Arbitrage: Strom wird in Stunden mit hoher Wind-/Solareinspeisung günstig eingekauft und in nachfragestarken Abendstunden wieder verkauft, mit einem typischen Spread von 15–50 €/MWh. Auf die volle Speicherkapazität von 15 MWh gerechnet kann ein einzelner Lade-Entlade-Zyklus damit mehrere hundert Euro Zusatzerlös bringen — zusätzlich zum FCR-Leistungspreis, der parallel weiterläuft. Die eigentliche Wertschöpfung liegt damit nicht in der Speicherzelle, sondern im Algorithmus, der stündlich entscheidet, welcher der beiden Märkte gerade mehr abwirft: Zwei baugleiche Batterien können je nach Optimierungsgüte 30–50% unterschiedliche Jahreserlöse erzielen.",
            status: "aktiv",
            radar: { regulierung:1, skalierbarkeit:3, marktrisiko:4, digitalisierung:5, wettbewerb:3, nachhaltigkeit:4 },
            erloesTyp: "Merchant", akteure: ["Fluence","NEOEN","Kyon Energy","EnBW","RWE","Habitat Energy"]
          },
          {
            id: "L3-ERZ-SPEICHER-02", title: "Heimspeicher als VPP-Baustein",
            angreifbarkeit: "Das Lock-in über proprietäre Hardware ist angreifbar durch offene Aggregatoren und HEMS-Plattformen, die herstellerübergreifend bündeln — der Kunde muss dann nicht mehr beim Hardware-Verkäufer ins VPP. OEMs (Tesla, BYD) und Neolieferanten mit dynamischen Tarifen greifen von zwei Seiten an: Die einen besitzen die Batterie-API, die anderen die Kundenschnittstelle samt Abrechnung.",
            definition: "Hersteller wie Sonnen (Shell-Tochter) und SENEC (EnBW) vermarkten Heimspeicher (5–20 kWh) als Eintritt in ein virtuelles Kraftwerk. Kunden kaufen Hardware (3.000–8.000 €) und treten einen Teil der freien Kapazität (z.B. 20% SOC) an den Aggregator ab. Aggregator bündelt Tausende Einheiten zu präqualifiziertem Regelenergie-Asset. Erlösteilung: Aggregator 60–70%, Endkunde 30–40%. Incentive: Sonnen-Flatrate-Tarif – Kunde zahlt fixen Monatsbetrag statt kWh-Preis.",
            wertschoepfung: "Hardware-Marge als Einmalerlös (20–30%). Langfristiger Wert: jede Einheit ist dauerhafter VPP-Baustein. Flatrate-Tarif bindet Kunden multi-jährig (Churn <5%). Portfolioeffekte: 10.000 Heimspeicher = ~100 MWh Flex-Kapazität für FCR-Präqualifikation. Ökosystemschranke: Hardware + Tarif + VPP = hohe Wechselhürde.",
            herausforderungen: "Skalenaufbau kostenintensiv (Installation, Netzanmeldung, SMGW-Anbindung je Einheit). §14a EnWG schafft VNB-seitige Steuerung – potenzielle Konflikte mit VPP-Aggregator. FCR-Preisverfall senkt VPP-Mehrwert für Kunden. Qualitätssicherung des VPP bei heterogener Hardware-Basis.",
            ausblick: "V2G als massive Erweiterung: EV-Batterie (~60 kWh) = 3–5× größer als Heimspeicher. Aggregatoren mit frühzeitigen OEM-Partnerschaften (VW/Elli, Hyundai) gewinnen strukturellen Vorteil. EU EMD Energy Communities ermöglichen P2P-Abrechnung zwischen Heimspeicher-Besitzern.",
            erloesmodell: "Geräteverkauf + Revenue-Share (Regelenergie) + Flatrate-Tarifbindung",
            regulierung: "EEG §9, MsbG, EnWG §14a, SOGL Präqualifikation",
            kundensegment: "B2C Prosumer (PV-Eigenheim)",
            differenzierung: "Community-Größe, Flatrate-Attraktivität, VPP-Optimierungsgüte, Hardware-Qualität",
            bmc_kanaele: "Direktvertrieb über Installateurnetzwerk und eigene App; Flatrate-Tarif als zentraler Akquisekanal.",
            bmc_kundenbeziehung: "Langfristige Kundenbindung über Flatrate-Tarif und App-Self-Service; Community-Charakter durch gemeinsame VPP-Teilnahme.",
            bmc_kostenstruktur: "Hardware-Capex (3.000–8.000 € je Einheit), Installation und SMGW-Anbindung, VPP-Plattformbetrieb, Kundenservice für Flatrate-Modell.",
            fallbeispiel: "Konkret tritt ein Sonnen-Kunde mit 10-kWh-Heimspeicher dem virtuellen Kraftwerk bei, indem er sich verpflichtet, immer mindestens 20% Ladestand für den Aggregator verfügbar zu halten — also rund 2 kWh, die er selbst nicht für den Eigenverbrauch nutzt. Sonnen bündelt diese Reserve über Tausende Haushalte hinweg zu einem präqualifizierten Regelenergie-Paket, das groß genug ist, um an FCR-Auktionen teilzunehmen — eine einzelne Batterie wäre dafür viel zu klein. Die Erlöse aus dieser Vermarktung teilt Sonnen mit dem Kunden im Verhältnis von etwa 60:40 zugunsten des Aggregators; im Gegenzug erhält der Kunde die 'Sonnen-Flatrate' — einen festen Monatsbetrag statt einer kWh-Abrechnung. Der eigentliche Trick des Geschäftsmodells: Sonnen verdient nicht nur einmalig an der Hardware (20–30% Marge), sondern dauerhaft an jeder eingebundenen Batterie als Flex-Kapazität — je mehr Haushalte mitmachen, desto präziser lässt sich das Gesamtportfolio steuern und desto werthaltiger wird die Flotte für die Regelenergiemärkte.",
            status: "aktiv",
            radar: { regulierung:2, skalierbarkeit:4, marktrisiko:2, digitalisierung:5, wettbewerb:3, nachhaltigkeit:4 },
            erloesTyp: "Subscription", akteure: ["Sonnen (Shell)","SENEC (EnBW)","E3/DC","Sungrow"]
          }
        ]
      }
    ]
  },

  // ══════════════════════════════════════════════════════════
  // L1: ÜBERTRAGUNGSNETZ (ÜNB / TSO)
  // ══════════════════════════════════════════════════════════
  {
    id: "L1-UNB", title: "Übertragungsnetz (ÜNB / TSO)", icon: "🔌", color: "#3B82F6",
    description: "Die vier deutschen ÜNBs stehen vor der größten Investitionsperiode ihrer Geschichte – 50+ Mrd. € Netzausbau bis 2035.",
    capabilities: [
      {
        id: "L2-UNB-NETZ", title: "Netzbetrieb & Systemführung",
        description: "50-Hz-Frequenzhaltung, Engpassmanagement und Systemstabilität – zunehmend komplex durch volatile EE-Einspeisung.",
        actors: ["50Hertz Transmission","Amprion","TenneT TSO","TransnetBW"],
        items: [
          {
            id: "L3-UNB-NETZ-01", title: "Reguliertes Netznutzungsentgelt (ARegV)",
            angreifbarkeit: "Das natürliche Monopol ist kaum direkt angreifbar — der Angriff läuft über die Regulierung selbst: NEST-Festlegungen und AgNes-Reform verschieben ab 2029 Effizienzvorgaben und Kostenverteilung, und jede Regulierungsperiode wird zur Neuverhandlung der Marge. Indirekt entziehen dezentrale Flexibilität, Netzbooster und Engpassmanagement per Software dem klassischen Trassen-Ausbau Investitionsvolumen — wer Engpässe ohne Kupfer löst, verkleinert die RAB-Wachstumsbasis.",
            definition: "ÜNBs finanzieren sich über BNetzA-genehmigte Erlösobergrenze (EOG). Berechnung: anerkannte Kapitalkosten (kalkulatorische EK-Rendite 4. Regulierungsperiode: 5,07% vor Steuer Neuanlagen, 3,51% Altanlagen)[[Q:bnetza-ekzins]] + anerkannte Betriebskosten. Effizienzvergleich (Benchmarking) zwischen Netzbetreibern bestimmt individuellen Effizienzwert. Netzentgelt = EOG / transportierte Energiemenge. HGÜ-Investitionen (SuedLink ~10 Mrd. €, SuedOstLink ~4–5 Mrd. €, A-Nord ~3 Mrd. €)[[Q:suedlink-tennet]] erhöhen RAB und damit zulässige Erlöse.",
            wertschoepfung: "Regulierte EK-Rendite als gesicherter Return – kein Marktrisiko, aber Regulierungsrisiko. TOTEX-Regulierung (seit RP3) incentiviert Opex-Effizienz: Wer Betriebskosten senkt, behält Einsparungen 5 Jahre. Investitionsprogramme erhöhen RAB und damit Erlösbasis: Jeder € investiert in Netzinfrastruktur generiert regulierten Renditezufluss über 35-40 Jahre.",
            herausforderungen: "Netzausbau hinkt EE-Zubau 5–10 Jahre hinterher: Netzengpassmanagement-Kosten 2022 auf Rekordniveau (~4,2 Mrd. €), 2023 auf ~3,1 Mrd. € gesunken (sinkende Brennstoffpreise trotz steigendem Eingriffsvolumen). Genehmigungsverfahren für neue Trassen: 10–15 Jahre (Planfeststellung). IT-Infrastruktur und Cybersecurity (KRITIS, NIS2) erfordern massive Investitionen. Personalmangel bei Netzplaningenieuren.",
            ausblick: "HGÜ-Backbone verändert Netzstruktur fundamental. OEAG (Offshore Energy Anschluss GmbH als Sondervermögen) für Offshore-Netzanbindung. Digitaler Zwilling des Übertragungsnetzes als Planungs- und Betriebsgrundlage. Europäische Vernetzung (NordLink, Cobra Cable) schafft neue Koordinationsaufgaben. Regulatorischer Rahmen neu gefasst: Die NEST-Festlegungen der BNetzA (Dez. 2025) regeln die Kostenregulierung der 5. Regulierungsperiode (Strom ab 2029, Dauer 5 Jahre; ab der 6. Periode auf 3 Jahre verkürzt)[[Q:nest-festlegung]]; die AgNes-Reform der Netzentgeltsystematik (Eckpunkte Mai 2026) soll ab 2029 u.a. Erzeuger erstmals an den Netzkosten beteiligen und die Kosten vorgelagerter Netze verbrauchsbasiert verteilen.[[Q:agnes-reform]]",
            erloesmodell: "Regulierte Netzentgelte nach ARegV (§21 EnWG)",
            regulierung: "ARegV, StromNEV, EnWG §21ff., BNetzA Beschlusskammern",
            kundensegment: "VNB, Direktanschluss-Industrie, Kraftwerke",
            differenzierung: "Effizienzgrad im BNetzA-Benchmarking, Investitionsdisziplin, Netzqualität (SAIDI)",
            bmc_kanaele: "Kein Vertrieb im klassischen Sinn — Anschlusszwang/Monopolstellung; Kommunikation läuft über BNetzA-Verfahren und regulierte Netzzugangsbedingungen.",
            bmc_kundenbeziehung: "Regulierte Pflichtbeziehung zu VNB und Direktanschlusskunden ohne Wahlfreiheit; zentrale Beziehung ist die zur BNetzA als Regulierer.",
            bmc_kostenstruktur: "Kapitalkosten für HGÜ-/Trassen-Investitionen (RAB-Basis) dominieren, dazu Betriebskosten für Systemführung und IT/Cybersecurity (KRITIS, NIS2).",
            fallbeispiel: "Konkret lässt sich die Erlösobergrenze an einem Bauprojekt wie SuedLink (~10 Mrd. €, TenneT/TransnetBW) durchrechnen: Jeder investierte Euro erhöht die regulatorische Kapitalbasis (RAB) des Netzbetreibers, auf die die BNetzA eine kalkulatorische Eigenkapitalrendite von 5,07% (Neuanlagen) zugesteht. Die jährliche Erlösobergrenze ergibt sich aus dieser Renditezahlung plus anerkannten Betriebskosten, geteilt durch die transportierte Energiemenge — daraus folgt das Netzentgelt, das letztlich auf der Stromrechnung jedes Haushalts auftaucht. Der eigentliche Hebel für den Netzbetreiber liegt nicht im Bauen selbst, sondern in der Differenz zwischen dem regulatorisch zugestandenen Effizienzwert und den tatsächlichen Betriebskosten: Wer im BNetzA-Benchmarking effizienter ist als der Referenzwert, darf die Einsparung für mehrere Jahre als zusätzlichen Gewinn behalten, bevor die nächste Regulierungsperiode den Wert neu festsetzt — ein eingebauter Anreiz, Kosten zu senken, ohne dass die Erlösobergrenze sofort sinkt.",
            status: "aktiv",
            radar: { regulierung:5, skalierbarkeit:1, marktrisiko:1, digitalisierung:2, wettbewerb:1, nachhaltigkeit:3 },
            erloesTyp: "Reguliert", akteure: ["50Hertz","Amprion","TenneT TSO","TransnetBW"]
          },
          {
            id: "L3-UNB-NETZ-02", title: "Redispatch 2.0 & Engpassmanagement",
            angreifbarkeit: "Die Kostenwälzung ohne Minimierungsanreiz ist die offene Flanke: Politik und Regulierer drängen auf marktliche Alternativen (lokale Flexmärkte, 'Nutzen statt Abregeln'), die Redispatch-Volumen durch günstigere dezentrale Gebote ersetzen sollen. Tech-Anbieter mit besserer Engpassprognose positionieren sich als Layer zwischen ÜNB und Anlagen — je besser die Automatisierung, desto kleiner der Eingriffsbedarf, aus dem diese Aufgabe ihre Bedeutung zieht.",
            definition: "Seit Oktober 2021: ÜNBs und VNBs koordinieren Einspeisemanagement und Redispatch über standardisierte Datenkommunikation. Alle Anlagen >100 kW sind meldepflichtig. ÜNB weist Erzeuger an: Einsatz-Up (Einspeisung erhöhen) oder Einsatz-Down (Einspeisung reduzieren) zur Netzentlastung. Ausfallarbeit wird erstattet (EEG-Vergütung auch bei Abregeln). Kosten Netzengpassmanagement: 2022 Rekord ~4,2 Mrd. €, 2023 auf ~3,1 Mrd. € gesunken.[[Q:netzengpass]] Datenaustausch über GABI-Software, CLS-Kommunikation, BDEW-Leitfaden.",
            wertschoepfung: "Für ÜNBs kein Erlösmodell, sondern Kostenblock – wird über Netzentgelte socialisiert. ÜNBs mit besserer Prognose-/Optimierungssoftware minimieren Redispatch-Kosten. Systemeffizienz ist Regulierungsnachweis und politisches Signal. Datenqualität aus Redispatch ist Basis für Netzplanung (Schwachstellen identifizieren).",
            herausforderungen: "Kosten steigen exponentiell mit EE-Ausbau solange Netzausbau hinterherhinkt. Koordination mit 900+ VNBs datentechnisch extrem komplex. Anreizproblem: ÜNBs leiten Redispatch-Kosten durch – kein starker finanzieller Anreiz zur Minimierung. Haftungsfragen bei Fehlkoordination.",
            ausblick: "Automatisierung der Koordination via digitale Plattformen. Market-Based Congestion Management (EU-Diskussion) könnte Redispatch teilweise durch Marktmechanismen ersetzen. Mit SuedLink/SuedOstLink (2028) sollten Nord-Süd-Engpässe strukturell gelöst werden. §14a DSO-Steuerung entlastet ÜNBs auf unteren Netzebenen.",
            erloesmodell: "Kostenerstattung (regulierter Kostenblock, socialisiert via Netzentgelt)",
            regulierung: "EnWG §13, §14, RedispatchVO (Strom), BDEW-Leitfaden RD 2.0",
            kundensegment: "VNB, Direktanlagenbetreiber, EE-Direktvermarkter",
            differenzierung: "Prozessautomatisierung, Prognosequalität, Systemintegration",
            bmc_kanaele: "Standardisierte Datenkommunikation (GABI-Software, CLS) zu VNBs und Anlagenbetreibern — kein Vertriebskanal, sondern technische Schnittstelle.",
            bmc_kundenbeziehung: "Verpflichtende Koordinationsbeziehung zu 900+ VNBs und meldepflichtigen Anlagenbetreibern (>100 kW); kein Wahlfreiheit, rein regulatorisch.",
            bmc_kostenstruktur: "Erstattungs- und Einsatzkosten (Netzengpassmanagement 2023 ~3,1 Mrd. €, 2022 ~4,2 Mrd. €) als größter Kostenblock, dazu IT-Koordinationskosten zwischen ÜNB und VNB.",
            fallbeispiel: "Der Redispatch-Mechanismus lässt sich an einem konkreten Beispiel aus dem 50Hertz-Netzgebiet zeigen: Ein Windpark in Brandenburg meldet für den Folgetag 100 MW Einspeisung an, doch die Lastflussberechnung zeigt, dass eine Leitung Richtung Süden dadurch überlastet würde. 50Hertz weist den Windpark an, die Einspeisung auf z.B. 60 MW zu reduzieren ('Einsatz-Down'), und gleichzeitig ein Gaskraftwerk südlich des Engpasses an, zusätzliche 40 MW einzuspeisen ('Einsatz-Up') — die Gesamteinspeisung im Netz bleibt damit konstant, nur der Ort der Erzeugung verschiebt sich. Der Windpark erhält trotzdem die entgangene EEG-Vergütung erstattet (Ausfallarbeit), das Gaskraftwerk bekommt seine zusätzlichen Brennstoffkosten ersetzt — beide Zahlungen tauchen am Ende in den Netzentgelten aller Stromkunden wieder auf. Bundesweit hat sich das Volumen solcher Eingriffe von 4.249 GWh (2014) auf rund 22.000 GWh (2022) mehr als verfünffacht, weil der Netzausbau dem EE-Zubau strukturell hinterherhinkt. Für 50Hertz, deren Netzgebiet zu rund 50% der installierten Kapazität aus Windkraft besteht, ist dieser Mechanismus deshalb kein Ausnahmefall, sondern Tagesgeschäft.",
            status: "aktiv",
            radar: { regulierung:5, skalierbarkeit:1, marktrisiko:1, digitalisierung:4, wettbewerb:1, nachhaltigkeit:3 },
            erloesTyp: "Reguliert", akteure: ["50Hertz","Amprion","TenneT TSO","TransnetBW"]
          },
          {
            id: "L3-UNB-NETZ-03", title: "Bilanzkreismanagement & Ausgleichsenergie",
            angreifbarkeit: "Angreifbar ist nicht das Mandat, sondern die Schnittstelle: MaBiS 2.0 und API-Kommunikation senken die Eintrittsbarriere für Bilanzkreis-Dienstleister und 'BKV-as-a-Service'-Anbieter, die kleinen Lieferanten und Aggregatoren das Ausgleichsenergie-Risikomanagement abnehmen. Die wertschöpfende Analytik (Prognose, Portfoliooptimierung) entsteht zunehmend bei Dritten — dem ÜNB bleibt die Infrastrukturrolle.",
            definition: "Bilanzkreissystem als finanzielle Architektur des Strommarkts: Jeder Lieferant/Händler führt Bilanzkreis beim ÜNB. Stündlicher Ausgleich von Einspeisung und Entnahme Pflicht. Abweichungen = Ausgleichsenergie (AE): Unterdeckung zahlt AE-Preis; Überdeckung erhält AE-Vergütung. MaBiS-Reform (BK6-24-174): EDIFACT-basierter Datenaustausch wird durch API-basierte Echtzeit-Kommunikation ersetzt. Schrittweise Einführung bis 2027.",
            wertschoepfung: "AE-System ist Nullsummen-Durchleitungsmodell für ÜNBs. Wert: ÜNBs mit modernen API-Systemen (MaBiS 2.0) senken Prozesskosten und erhöhen Datenqualität. Gut funktionierendes BKM ermöglicht günstigere Regelenergiebeschaffung durch präzisere Prognosebasis.",
            herausforderungen: "Datenqualität ist systemkritisch – fehlerhafte Einspeisemeldungen gefährden Netzsicherheit. Legacy-Systeme (SAP IS-U, EDIFACT) in allen ÜNBs erfordern massive IT-Transformation. Wachsende Marktteilnehmer (VPP-Aggregatoren, iMSBs) erhöhen Datenkomplexität exponentiell. Harmonisierung zwischen vier ÜNB-Systemen ist regulatorisch geboten, technisch komplex.",
            ausblick: "15-Minuten-Bilanzierung (statt stündlich) ist EU-Ziel – erfordert vollständig neue Abrechnungsinfrastruktur. Echtzeit-BKM als Basis für Dynamic-Line-Rating und N-1-Optimierung. EU-Harmonisierung der BKM-Prozesse über ENTSO-E als langfristiges Ziel.",
            erloesmodell: "Durchleitungsmodell (AE-Nullsumme); Prozesskosten via Netzentgelt",
            regulierung: "MaBiS (BK6-24-174), StromNZV §4ff., GPKE, EDI@Energy",
            kundensegment: "Bilanzkreisverantwortliche (BKV), Lieferanten, EE-Direktvermarkter",
            differenzierung: "API-Reife (MaBiS 2.0), Echtzeit-Fähigkeit, Datenqualität",
            bmc_kanaele: "EDIFACT-/künftig API-basierter Datenaustausch (EDI@Energy) mit Bilanzkreisverantwortlichen — rein technische Schnittstelle, kein Vertriebskanal.",
            bmc_kundenbeziehung: "Vertraglich geregelte Bilanzkreisverantwortlichen-Beziehung; Datenqualität und Prozesszuverlässigkeit statt klassischer Kundenpflege.",
            bmc_kostenstruktur: "IT-Transformationskosten (Ablösung Legacy-SAP-IS-U/EDIFACT durch MaBiS 2.0), Prozesskosten für Ausgleichsenergie-Abrechnung.",
            fallbeispiel: "Konkret zeigt sich das Bilanzkreissystem an einem Stadtwerk, das als Lieferant für seine Kunden einen Bilanzkreis bei z.B. Amprion führt: Für jede Stunde muss die angemeldete Energiemenge (Prognose, wie viel die Kunden verbrauchen werden) mit der tatsächlichen Entnahme übereinstimmen. Verbrauchen die Kunden in einer Stunde mehr als gemeldet — etwa weil es kälter ist als prognostiziert — entsteht eine Unterdeckung, die das Stadtwerk zum Ausgleichsenergiepreis nachkaufen muss, der in Knappheitsstunden deutlich über dem Spotmarktpreis liegen kann. Verbrauchen die Kunden weniger, erhält das Stadtwerk für die Überdeckung nur eine niedrige Vergütung. Genau dieser Mechanismus erklärt, warum gute Prognosesoftware für jeden Bilanzkreisverantwortlichen bares Geld wert ist: Eine Abweichung von nur 1% bei einem mittelgroßen Portfolio kann über ein Jahr mehrere hunderttausend Euro an Ausgleichsenergiekosten ausmachen — Kosten, die ein Wettbewerber mit präziserer Lastprognose schlicht nicht hat.",
            status: "aktiv",
            radar: { regulierung:5, skalierbarkeit:1, marktrisiko:1, digitalisierung:4, wettbewerb:1, nachhaltigkeit:2 },
            erloesTyp: "Reguliert", akteure: ["50Hertz","Amprion","TenneT TSO","TransnetBW"]
          }
        ]
      }
    ]
  },

  // ══════════════════════════════════════════════════════════
  // L1: VERTEILNETZ (VNB / DSO)
  // ══════════════════════════════════════════════════════════
  {
    id: "L1-VNB", title: "Verteilnetz (VNB / DSO)", icon: "🏘️", color: "#10B981",
    description: "Ca. 900 VNBs in Deutschland – unter massivem Transformationsdruck durch Wärmepumpen, EV und Solarausbau. Investitionsbedarf bis 2045: 375 Mrd. €.",
    capabilities: [
      {
        id: "L2-VNB-KLASSISCH", title: "Klassischer Netzbetrieb",
        description: "Reguliertes Monopol auf MS/NS-Ebene – Kerngeschäft unter wachsendem Capex-Druck.",
        actors: ["Bayernwerk Netz","Westnetz","E.DIS Netz","SWM Infrastruktur","Netze BW","mitnetz"],
        items: [
          {
            id: "L3-VNB-KLASSISCH-01", title: "Reguliertes Netzentgelt (Verteilnetz)",
            angreifbarkeit: "Direkter Wettbewerb ist per Konzession ausgeschlossen — angegriffen wird an der Konzessionsgrenze (§46-Rekommunalisierungswellen, vgl. L3-VNB-BETREIB-05) und ökonomisch durch Netzumgehung: Eigenversorgung, GGV und Energy Communities reduzieren die durchgeleiteten Mengen, während die Fixkosten bleiben (Death-Spiral-Risiko der Netzentgelte). Die AgNes-Reform ab 2029 entscheidet, wer diese Kosten künftig trägt.",
            definition: "ARegV-Regulierung analog ÜNBs, aber mit fundamental anderer Kostenstruktur: 85–90% der Kosten sind Kapital- und Fixkosten (netzlängenabhängig, nicht mengenabhängig). Deutschland: ~1,8 Mio. km Leitungsnetz auf Verteilnetzebene. EK-Rendite: 5,07% nominal (Neuanlagen). 4. Regulierungsperiode (ab 2024) stärkt Investitionsanreize durch verbesserte TOTEX-Regulierung und erhöhte kalkulatorische EK-Basis.",
            wertschoepfung: "Gesicherter Return auf RAB. Wertschöpfung durch: (1) Kapitalallokation – jeder investierte Euro erhöht RAB und erlaubte Erlöse. (2) Effizienz – Betrieb unterhalb Referenzwert erhöht individuelle Marge. (3) Netzqualität – SAIDI-Minuten sind regulatorisch incentiviert (Bonus bei Unterschreitung). Stabilste Erlösbasis aller Energiewirtschafts-Segmente.",
            herausforderungen: "Massiver Investitionsbedarf: Wärmepumpen und EV verdoppeln/verdreifachen NS-Netzlasten lokal. BNetzA schätzt VNB-Investitionsbedarf bis 2045 auf 375 Mrd. €. Fachkräftemangel (Elektriker, Netzplaner). Genehmigungsdauer für Netztrassen. Finanzierungslücke: Regulierung hinkt Investitionsbedarf systematisch hinterher.",
            ausblick: "DSOs entwickeln sich von passiven Netzbetreibern zu aktiven System-Operatoren (Active System Management, ASM). §14a EnWG ist erster regulatorischer Schritt. Digitalisierung bis NS-Ebene (Sensorik, SCADA, DER-Management) wird zur Pflicht. Konsolidierung: Kleine Stadtwerke geben Netze ab – 900 VNBs werden auf 200–300 konsolidieren bis 2040. Ab 2029 gilt der neue Regulierungsrahmen der NEST-Festlegungen (Dez. 2025, 5. Regulierungsperiode)[[Q:nest-festlegung]] samt AgNes-Netzentgeltreform (Eckpunkte Mai 2026, Rahmenfestlegung Ende 2026 geplant).[[Q:agnes-reform]]",
            erloesmodell: "ARegV-Netzentgelte (§21 EnWG, StromNEV, 4. Regulierungsperiode)",
            regulierung: "ARegV, StromNEV, EnWG §21, BNetzA – 4. Regulierungsperiode ab 2024",
            kundensegment: "Letztverbraucher (indirekt via Lieferant), Anlagenbetreiber, Ladepunkte",
            differenzierung: "Effizienz-Benchmark, SAIDI-Qualität, Capex-Timing, Digitalisierungsgrad",
            bmc_kanaele: "Kein Vertrieb — Anschlusszwang im Versorgungsgebiet; Kommunikation läuft über Netzanschlussanträge und reguliertes Beschwerdemanagement.",
            bmc_kundenbeziehung: "Passive Pflichtbeziehung zu allen Letztverbrauchern im Gebiet ohne Wahlfreiheit; Servicequalität zeigt sich vor allem bei Störungen und Netzanschluss.",
            bmc_kostenstruktur: "Kapitalkosten für Leitungsnetz (85–90% der Kosten, netzlängenabhängig) dominieren; Betriebs- und Instandhaltungskosten als zweitgrößter Block.",
            fallbeispiel: "Konkret zeigt sich der Mechanismus an einem Bayernwerk-Netzgebiet, in dem in einer Straße zehn Wärmepumpen und EV-Wallboxen neu ans Netz gehen: Die alte Mittelspannungstrafostation, die für klassische Haushaltslasten dimensioniert war, kommt an ihre Kapazitätsgrenze. Der VNB hat zwei Optionen — den Trafo für 30.000–100.000 € ausbauen (Capex, der über die RAB in die Erlösobergrenze eingeht) oder, seit 2024, die Lastspitzen der neuen Geräte per §14a temporär auf 4,2 kW begrenzen, wenn das Netz eng wird. In beiden Fällen verdient der VNB regulär weiter an der ARegV-Erlösobergrenze, unabhängig von der gewählten Lösung. Der eigentliche Unterschied liegt darin, dass §14a-Lastmanagement es erlaubt, mehr Anschlüsse an derselben Infrastruktur zu betreiben, ohne dass jeder neue Anschluss sofort einen teuren Trafo-Ausbau erzwingt — die Investition verschiebt sich in die Zukunft, während die Netzentgelte für alle Kunden im Gebiet stabiler bleiben.",
            status: "aktiv",
            radar: { regulierung:5, skalierbarkeit:1, marktrisiko:1, digitalisierung:2, wettbewerb:1, nachhaltigkeit:3 },
            erloesTyp: "Reguliert", akteure: ["Bayernwerk Netz","Westnetz","E.DIS Netz","Netze BW"]
          },
          {
            id: "L3-VNB-KLASSISCH-02", title: "Messstellenbetrieb (iMSB / gMSB)",
            angreifbarkeit: "Der gMSB-Default ist per Gesetz angreifbar gemacht: Wettbewerbliche iMSB (inexogy, ista) picken sich die attraktiven Bündelkunden (Wohnungswirtschaft, Filialisten) heraus, während dem gMSB die teuren Rest-Rollouts bleiben. Die eigentliche Marge wandert ohnehin in die Datenservices über dem Zähler — wer nur Messstellenbetrieb kann, wird zum regulierten Low-Margin-Installateur.",
            definition: "MsbG trennt Messstellenbetrieb regulatorisch vom Netzbetrieb. Grundzuständiger MSB (gMSB) = VNB per Default. Wettbewerblicher iMSB kann durch Angebot an Letztverbraucher verdrängen. iMSys = SMGW (Smart Meter Gateway, BSI TR-03109 zertifiziert) + Zähler. SMGW kommuniziert über LMN mit Messtechnik, über WAN mit Marktkommunikationspartnern. Pflicht-Rollout: >6.000 kWh/a ab 2025, >3.000 kWh/a ab 2027, EE/KWK ab 7 kW ab 2025. MSB-Entgelte §31 MsbG: 20–100 €/Jahr je Messstelle.",
            wertschoepfung: "gMSB (VNB): Stabile regulierte Entgelte, niedriges Risiko. Mehrwert durch Datenservices (Lastganganalyse, PV-Monitoring, §14a-Integration) über Mindestentgelt hinaus. iMSB: Differenzierung über Service und Datenintegration. SMGW als IoT-Gateway: zukünftig Basis für Gas, Wärme, Wasser-Integration.",
            herausforderungen: "BSI-Zertifizierung (TR-03109) dauerte jahrelang und verzögerte Markteintritt massiv. Nur wenige SMGW-Hersteller auf Markt (Sagemcom, Theben, Landis+Gyr, EMH). LMN-Kommunikation im Altbaubestand technisch schwierig. DSGVO schränkt Nutzung hochauflösender Daten ein. Rollout bleibt hinter Plan.",
            ausblick: "SMGW als Infrastruktur für dynamische Tarife (§41a), §14a-Steuerung, V2G. Plattformökonomie: iMSBs mit integrierten EMS-Plattformen werden Multi-Utility-Gateways. Markt konsolidiert sich: wenige große iMSBs mit skalierten Plattformen dominieren.",
            erloesmodell: "MSB-Entgelte (§31 MsbG, reguliert) + Mehrwertdienste",
            regulierung: "MsbG, BSI TR-03109, §21b EnWG, DSGVO",
            kundensegment: "Letztverbraucher, EE-Anlagenbetreiber, Lieferanten",
            differenzierung: "BSI-Zertifizierung, Rollout-Tempo, Datenservices, §14a-Readiness",
            bmc_kanaele: "gMSB automatisch über Netzanschluss; wettbewerbliche iMSBs akquirieren über Direktansprache von Großkunden und Stadtwerke-Partnerschaften.",
            bmc_kundenbeziehung: "Langjährige Messstellenverträge mit geringer Wechselaktivität; Mehrwertdienste (Lastganganalyse) als Differenzierung gegenüber reiner Pflichtleistung.",
            bmc_kostenstruktur: "SMGW-Hardware und BSI-Zertifizierungskosten, Rollout-/Installationskosten, IT-Betrieb für Marktkommunikation (LMN/WAN).",
            fallbeispiel: "Konkret zeigt sich der Wettbewerb am Messstellenbetrieb so: Ein Haushalt mit 7.000 kWh Jahresverbrauch fällt unter die Pflicht-Rollout-Grenze und bekommt automatisch ein intelligentes Messsystem vom grundzuständigen VNB (gMSB) eingebaut, der dafür ein reguliertes Entgelt von z.B. 50 €/Jahr nach §31 MsbG verlangt — unabhängig davon, ob der Kunde Zusatzleistungen will. Ein wettbewerblicher iMSB wie inexogy (vormals Discovergy) kann denselben Haushalt aktiv abwerben, wenn er ein attraktiveres Gesamtpaket bietet: etwa eine App mit Lastganganalyse, PV-Monitoring oder direkter §14a-Integration, finanziert aus der gleichen Entgeltlogik plus Zusatzgebühren. Der gMSB verdient also am Pflichtgeschäft mit niedrigem Risiko, während der iMSB nur überleben kann, wenn er genug Kunden mit Mehrwertdiensten überzeugt, um sich gegen den Default-Anbieter durchzusetzen — eine klassische Opt-out-Hürde, die den Markteintritt für Wettbewerber strukturell erschwert.",
            status: "aktiv",
            radar: { regulierung:4, skalierbarkeit:2, marktrisiko:1, digitalisierung:5, wettbewerb:2, nachhaltigkeit:2 },
            erloesTyp: "Reguliert", akteure: ["Bayernwerk Netz","Westnetz","inexogy","ista","Techem"]
          }
        ]
      },
      {
        id: "L2-VNB-NEU", title: "Neue DSO-Geschäftsfelder",
        description: "Aktives Netzmanagement und Infrastrukturservices – DSOs als Plattformbetreiber.",
        actors: ["Bayernwerk Netz","Stromnetz Berlin","mitnetz strom","Netze BW"],
        items: [
          {
            id: "L3-VNB-NEU-01", title: "§14a EnWG – Steuerbare Verbrauchseinrichtungen",
            angreifbarkeit: "§14a ist weniger Geschäftsmodell als Schnittstelle — und genau dort sitzt der Angriff: Aggregatoren, HEMS-Anbieter und Neolieferanten wollen die Steuerung der flexiblen Geräte selbst orchestrieren (marktlich statt netzdienlich) und degradieren den VNB zum Notfall-Dimmer. Wer die Kundenschnittstelle zum Flex-Asset besitzt, entscheidet, wessen Optimierung Vorrang bekommt.",
            definition: "BNetzA-Festlegung BK6-22-300 (in Kraft seit 1.1.2024): VNBs dürfen sVEs – Wärmepumpen, EV-Lader >11 kW, Klimaanlagen, Batteriespeicher – bei lokalen Netzengpässen temporär auf 4,2 kW dimmen ('Modulationsrahmen'). Limite: max. 2h am Stück, max. 50% Jahresstunden ohne Einhaltung der Mindestleistung. Gegenleistung für Kunden: 100–190 €/Jahr Netzentgelnachlass (Modell 1) oder reduzierter Arbeitspreis (Modell 2). Kommunikation via CLS über SMGW oder direkten CLS-Kanal.",
            wertschoepfung: "Direkte Kostenersparnis: Trafo-Upgrade (30.000–100.000 €) durch Lastmanagement vermieden. Smart-Grid-Investition (CLS-Infrastruktur) ist regulatorisch als 'besondere netztechnische Betriebsmittel' anerkannt – erhöht RAB. Indirekter Wert: Mehr sVE-Anschlüsse möglich ohne proportionalen Capex = Volumenwachstum bei flacherer Kostenkurve.",
            herausforderungen: "SMGW-basierte CLS-Kommunikation setzt flächendeckenden Smart-Meter-Rollout voraus. Alternative CLS-Kanäle (Mobilfunk, Direktverbindung) mit eigenen Hürden. Kundenkommunikation: 'Dimmung' erklärungsbedürftig. Koordination mit Aggregatoren (Doppelsteuerung vermeiden) regulatorisch noch nicht gelöst.",
            ausblick: "§14a ist Einstieg in 'Flex-first'-Netzbetrieb. Erweiterung auf industrielle Lasten und Großspeicher folgt. Lokale Flexibilitätsmärkte (VNB kauft Flex von Aggregatoren statt Netz auszubauen) als nächste Evolutionsstufe. EU Clean Energy Package verpflichtet DSOs mittelfristig zu Flex-Beschaffung vor Netzverstärkung.",
            erloesmodell: "Capex-Vermeidung (indirekt) + regulatorisch anerkannte Smart-Grid-RAB",
            regulierung: "EnWG §14a, BNetzA BK6-22-300, MsbG",
            kundensegment: "Prosumer / Haushaltskunden mit sVE (EV, WP, Speicher)",
            differenzierung: "CLS-Rollout, SMGW-Anbindungsquote, Koordination mit Aggregatoren",
            bmc_kanaele: "Kommunikation über CLS-Kanal (SMGW oder Direktverbindung) zum sVE; Kundeninformation über Netzentgeltnachlass läuft über Lieferanten-/VNB-Korrespondenz.",
            bmc_kundenbeziehung: "Regulatorisch verpflichtende Steuerungsbeziehung mit Gegenleistung (Netzentgeltnachlass); kein Vertrag im klassischen Sinn, sondern Festlegung BK6-22-300.",
            bmc_kostenstruktur: "CLS-/Smart-Grid-Infrastruktur (regulatorisch als RAB-relevant anerkannt), Koordinationsaufwand mit Aggregatoren, IT für Lastmanagement.",
            fallbeispiel: "Konkret greift §14a so: Ein Haushalt im Netzgebiet von Netze BW lädt um 18 Uhr sein E-Auto mit voller 11-kW-Wallbox-Leistung, während gleichzeitig viele Nachbarn ihre Wärmepumpen hochfahren — der lokale Trafo droht überlastet zu werden. Statt teuer auszubauen, sendet der VNB über das Smart Meter Gateway ein Steuersignal, das die Wallbox für maximal zwei Stunden auf eine Mindestleistung von 4,2 kW dimmt. Das Auto lädt langsamer, aber es lädt weiter — komplett gestoppt werden darf es nicht. Als Ausgleich für diese Lastbegrenzung erhält der Kunde automatisch einen Netzentgeltnachlass von 100–190 €/Jahr, unabhängig davon, wie oft die Dimmung im Jahr tatsächlich greift. Für den VNB rechnet sich das doppelt: Ein einzelner Trafo-Tausch in dieser Straße hätte 30.000–100.000 € gekostet, während die CLS-Infrastruktur, die die Dimmung ermöglicht, regulatorisch als 'besonderes netztechnisches Betriebsmittel' anerkannt wird und damit selbst wieder in die RAB einfließt.",
            status: "aktiv",
            radar: { regulierung:4, skalierbarkeit:3, marktrisiko:1, digitalisierung:5, wettbewerb:1, nachhaltigkeit:4 },
            erloesTyp: "Reguliert", akteure: ["Bayernwerk Netz","Netze BW","Stromnetz Berlin","E.DIS"]
          }
        ]
      },
      {
        id: "L2-VNB-BETREIB", title: "Betreiber- & Eigentumsmodelle",
        description: "Wer Netzeigentum, operativen Betrieb und Konzession hält, variiert stark zwischen den ca. 900 VNBs – von kommunalem Vollbetrieb über Pacht- und Outsourcing-Modelle bis zur Rekommunalisierung nach Konzessionsende. Diese Strukturfrage ist von der reinen Regulierungslogik (L2-VNB-KLASSISCH) zu unterscheiden.",
        actors: ["SWM Infrastruktur","Westfalen Weser Netz","Thüga","Stromnetz Berlin","Stromnetz Hamburg"],
        items: [
          {
            id: "L3-VNB-BETREIB-01", title: "Eigenbetrieb (kommunaler Vollbetrieb)",
            angreifbarkeit: "Angreifbar über die Effizienzschiene: Der ARegV-Benchmark bestraft Subscale-Strukturen, und große Netzkonzerne wie Dienstleister umwerben mit Pacht- und Kooperationsangeboten genau die Kommunen, deren Eigenbetriebe unter Investitions- und Fachkräftedruck geraten. Jede Konzessionsrunde ist ein natürlicher Angriffszeitpunkt — Verteidigung liegt in Verbundeffekten über kommunale Sparten und interkommunalen Kooperationen (vgl. L3-VNB-BETREIB-04).",
            definition: "Kommune oder Stadtwerk hält Netzeigentum, operativen Betrieb und Konzession (§46 EnWG) vollständig selbst – meist über einen Eigenbetrieb oder eine 100%ige Tochter-GmbH innerhalb des Stadtwerke-Konzerns. Typisch für größere Städte mit eigener Stadtwerke-Struktur (z.B. München, Hannover, Düsseldorf). Vollständige vertikale Integration von Eigentum, Betrieb und Konzession in einer Hand.",
            wertschoepfung: "Vollständiger regulierter Return auf RAB bleibt im Konzern, keine Pacht- oder Betriebsführungs-Marge geht an Dritte ab. Querverbund mit anderen Sparten (Wärme, Wasser, ÖPNV) im Stadtwerke-Konzern möglich. Volle strategische Steuerungshoheit über Investitionstempo bei Wärmewende und Sektorkopplung.",
            herausforderungen: "Hohe Kapitalbindung direkt bei Kommune/Stadtwerk – Investitionsfähigkeit hängt an kommunaler Bonität und Verschuldungsgrenzen. Fachkräfte-Wettbewerb mit großen, besser zahlenden VNB. Skaleneffekte fehlen bei kleineren Eigenbetrieben – die ARegV-Effizienzbenchmark bestraft Subscale-Strukturen systematisch.",
            ausblick: "Unter wachsendem Capex-Druck (375 Mrd. € Investitionsbedarf bis 2045) werden kleinere Eigenbetriebe verstärkt Kooperations- oder Betriebsführungsmodelle suchen, da sie die Transformation nicht allein stemmen können. Größere Eigenbetriebe (SWM, Stadtwerke Hannover) bleiben dagegen eigenständige Ankerpunkte und potenzielle Konsolidierer in ihrer Region.",
            erloesmodell: "ARegV-Netzentgelte (§21 EnWG, StromNEV), vollständig im eigenen Bilanzkreis ohne Pacht- oder Fee-Abzug",
            regulierung: "EnWG §46 (Konzession bei Kommune/Eigenbetrieb selbst), ARegV, StromNEV, gesellschaftsrechtliche Entflechtungspflichten ab bestimmter Kundenzahl",
            kundensegment: "Letztverbraucher im Versorgungsgebiet der Kommune",
            differenzierung: "Investitionsgeschwindigkeit, strategische Steuerungshoheit, Verbund mit anderen kommunalen Sparten",
            bmc_kanaele: "Kein Vertrieb — Versorgungsgebiet per Konzession; politische/kommunale Gremien als zentraler Steuerungs- und Informationskanal statt Markt.",
            bmc_kundenbeziehung: "Pflichtbeziehung zu allen Letztverbrauchern im Gebiet; zusätzliche Bindung über Querverbund mit anderen Stadtwerke-Sparten (Wärme, Wasser, ÖPNV).",
            bmc_kostenstruktur: "Vollständige Kapital- und Betriebskosten verbleiben im Konzern; Investitionsfähigkeit an kommunale Bonität und Verschuldungsgrenzen gekoppelt.",
            fallbeispiel: "Konkret zeigt sich der Vorteil des Eigenbetriebs an SWM Infrastruktur in München: Wenn das Stadtwerk in den Netzausbau für die Wärmewende investiert, fließt die daraus resultierende regulierte Eigenkapitalrendite vollständig in den eigenen Konzern zurück — es gibt keinen Pächter oder externen Betriebsführer, der einen Anteil der Erlösobergrenze als eigene Marge abzweigt. Das erlaubt einen Querverbund: Gewinne aus dem profitablen, stabil regulierten Netzgeschäft können innerhalb des SWM-Konzerns Investitionen in defizitäre Sparten wie den ÖPNV mittragen, was bei einer reinen Netzgesellschaft ohne kommunalen Mehrspartenverbund nicht möglich wäre. Der Preis dafür liegt auf der Investitionsseite: Jeder größere Kapitalbedarf — etwa für die in den nächsten Jahren anstehenden Wärmepumpen- und EV-bedingten Netzverstärkungen — muss letztlich über die kommunale Bonität und Verschuldungsfähigkeit der Stadt selbst finanziert werden, nicht über einen finanzstarken Konzernmutter wie bei pachtbasierten Modellen.",
            status: "aktiv",
            radar: { regulierung:5, skalierbarkeit:1, marktrisiko:1, digitalisierung:2, wettbewerb:1, nachhaltigkeit:3 },
            erloesTyp: "Reguliert", akteure: ["SWM Infrastruktur","Stadtwerke Hannover","Stadtwerke Düsseldorf Netz"]
          },
          {
            id: "L3-VNB-BETREIB-02", title: "Pacht-/Konzessionsmodell (Asset-Trennung Eigentum/Betrieb)",
            angreifbarkeit: "Das Modell lebt von der Differenz zwischen Pachtzins und realer Skaleneffizienz des Pächters — genau diese Intransparenz greifen Berater und Kommunen an, die zum Vertragsende Rekommunalisierung oder Neuausschreibung als Verhandlungshebel nutzen. Zudem drängen Betriebsführungs-Dienstleister (vgl. L3-VNB-BETREIB-03) mit modularen Angeboten in dieselbe Lücke, ohne dass die Kommune Eigentumsrechte abgeben muss.",
            definition: "Kommune bleibt Eigentümerin der Netzinfrastruktur, verpachtet operativen Betrieb und technische Verantwortung gegen Pachtzins an einen größeren Netzbetreiber – meist die regionale Netztochter eines Energiekonzerns. Der Pachtzins ist regulatorisch als Kostenposition in der Erlösobergrenze grundsätzlich anerkennungsfähig, was der Kommune einen laufenden Einnahmestrom ohne eigenes Betriebsrisiko verschafft.",
            wertschoepfung: "Kommune erzielt laufenden Pachtzins ohne Capex-Verantwortung oder operatives Betriebsrisiko. Pächter realisiert Skaleneffekte, indem er mehrere gepachtete Netze im Konzernverbund bündelt (gemeinsame Leitstelle, Einkauf, Fachpersonal); Effizienzgewinne oberhalb des Pachtzinses verbleiben beim Pächter.",
            herausforderungen: "Anreizkonflikt zum Vertragsende hin: Pächter hat geringeren Anreiz, kurz vor Auslaufen noch substanziell zu investieren. Angemessenheit der Pachtzinshöhe ist regulatorisch und politisch umstritten – BNetzA-Festlegungen zur Anerkennung von Pachtzinsen in der Erlösobergrenze werden zunehmend strenger geprüft. Konzessionsende erzwingt Neubewertung des gesamten Modells.",
            ausblick: "Modell gerät unter Druck: schärfere BNetzA-Prüfung der Pachtzins-Anerkennung verschlechtert die Wirtschaftlichkeit für Konzern-Pächter, während zugleich die politische Rekommunalisierungsdebatte (vgl. L3-VNB-BETREIB-05) Kommunen ermutigt, bei Vertragsende selbst zu übernehmen statt zu verlängern.",
            erloesmodell: "Pachtzins (für die Kommune) + ARegV-Netzentgelt abzüglich Pachtzins (für den Betreiber)",
            regulierung: "EnWG §46, BNetzA-Festlegungen zur Anerkennung von Pachtzinsen in der Erlösobergrenze, Konzessionsvertragsrecht",
            kundensegment: "Letztverbraucher; Kommune fungiert wirtschaftlich als Vermieterin der Infrastruktur",
            differenzierung: "Vertragsgestaltung (Laufzeit, Pachtzinshöhe, Investitionsverpflichtungen), Verhandlungsmacht der Kommune",
            bmc_kanaele: "Kein Endkundenvertrieb; zentraler 'Kanal' ist der Pachtvertrag zwischen Kommune und Konzern-Netztochter.",
            bmc_kundenbeziehung: "Zwei getrennte Beziehungsebenen: Kommune-Pächter-Vertragsbeziehung (Pachtzins, Investitionsverpflichtungen) und Pächter-Letztverbraucher-Pflichtbeziehung.",
            bmc_kostenstruktur: "Pachtzins als regulatorisch anerkannte Kostenposition in der Erlösobergrenze; operative Betriebs- und Investitionskosten trägt der Pächter.",
            fallbeispiel: "Konkret funktioniert das Pachtmodell so: Eine Gemeinde bleibt Eigentümerin ihres Verteilnetzes, verpachtet den operativen Betrieb aber an z.B. Westnetz. Westnetz zahlt der Gemeinde einen jährlichen Pachtzins — sagen wir 200.000 € — und dieser Betrag taucht auf der Kostenseite der ARegV-Erlösobergrenze wieder auf, die Westnetz bei der BNetzA geltend macht. Für die Gemeinde ist das ein planbarer Einnahmestrom ohne eigenes Investitions- oder Betriebsrisiko. Für Westnetz lohnt sich das Geschäft, weil das gepachtete Netz in den eigenen Konzernverbund eingebunden wird: dieselbe Leitstelle, dasselbe Servicepersonal und derselbe Materialeinkauf betreuen gleichzeitig Dutzende solcher gepachteten Gemeindenetze, wodurch die tatsächlichen Betriebskosten pro Netz unter den Effizienzwert sinken, den die BNetzA für die Erlösobergrenze ansetzt — die Differenz zwischen Pachtzins-Kosten und realer Skaleneffizienz verbleibt als Marge beim Pächter.",
            status: "aktiv",
            radar: { regulierung:4, skalierbarkeit:2, marktrisiko:2, digitalisierung:2, wettbewerb:2, nachhaltigkeit:2 },
            erloesTyp: "Reguliert", akteure: ["Westnetz","Bayernwerk Netz","E.DIS Netz","Avacon Netz"]
          },
          {
            id: "L3-VNB-BETREIB-03", title: "Netzbetriebsführung durch Dritte (Outsourcing mit/ohne Beteiligung)",
            angreifbarkeit: "Klassisches Dienstleistergeschäft mit Insourcing-Risiko: Wächst das Stadtwerk, holt es die Betriebsführung zurück; schrumpft es, konsolidiert das Netz gleich ganz zum großen Nachbarn. Software-Anbieter unbundeln zudem einzelne Module (Leitstelle as a Service, Asset-Management-SaaS) und höhlen das Full-Service-Paket von innen aus.",
            definition: "Kommune oder kleines Stadtwerk bleibt Eigentümerin UND Konzessionsinhaberin, beauftragt aber einen externen Dienstleister mit der gesamten operativen Netzbetriebsführung (technischer Betrieb, Entstördienst, Mess-/Abrechnungsprozesse). Zwei Ausprägungen: reine Dienstleistungs-Betriebsführung gegen Fee, oder das Thüga-Modell mit kombinierter Minderheitsbeteiligung plus Betriebsführung – Kommune bleibt mehrheitlich Eigentümerin (Beispiel Singen: 50,1% Stadt / 49,1% Thüga).",
            wertschoepfung: "Dienstleister monetarisiert Skaleneffekte über viele parallele Mandate (Thüga-Gruppe betreut auf diese Weise rund 100 kommunale Energieversorger). Kommune erhält professionellen Netzbetrieb, ohne selbst die volle technische und digitale Fachkompetenz aufbauen zu müssen.",
            herausforderungen: "Abhängigkeit vom Dienstleister – eigenes Know-how beim Auftraggeber erodiert über Zeit. Schnittstellenkomplexität bei Störungen und Haftungsfragen zwischen Eigentümer und Betriebsführer. Bei Beteiligungsmodellen (Thüga) zusätzlich Governance-Fragen zwischen Mehrheits- und Minderheitsgesellschafter.",
            ausblick: "Wachsendes Modell angesichts Fachkräftemangel und steigender technischer Komplexität (Digitalisierung, §14a, Smart-Meter-Rollout): immer mehr kleine VNB können dies nicht mehr allein stemmen. Wichtiger Konsolidierungstreiber auf dem Weg von ca. 900 auf 200–300 VNB bis 2040 – auch ohne formale Fusion.",
            erloesmodell: "Dienstleistungsentgelt (Fee-based) vom Netzeigentümer an Betriebsführer; bei Beteiligungsmodell zusätzlich Gewinnausschüttung entsprechend Anteilsquote",
            regulierung: "EnWG §46 (Konzession bleibt bei Kommune/Stadtwerk), informationelle Entflechtungsvorschriften bei Drittbetriebsführung, ARegV",
            kundensegment: "Kleine und mittlere Stadtwerke/Kommunen als Auftraggeber",
            differenzierung: "Servicequalität, Reaktionszeiten bei Störungen, Digitalisierungs-Know-how, Vertragsflexibilität",
            bmc_kanaele: "B2B-Akquise kleiner Stadtwerke/Kommunen über Branchenverbände (z.B. Thüga-Gruppe) und Direktansprache; kein Endkundenvertrieb.",
            bmc_kundenbeziehung: "Mehrjähriger Betriebsführungsvertrag mit dem Netzeigentümer; bei Beteiligungsmodellen zusätzlich Gesellschafter-Governance-Beziehung.",
            bmc_kostenstruktur: "Personal- und Know-how-Bündelung über viele Mandate (Skaleneffekt), IT-/Leitstellen-Infrastruktur, Entstördienst-Bereitschaft.",
            fallbeispiel: "Konkret zeigt sich das Thüga-Modell am Beispiel Singen: Die Stadt bleibt mit 50,1% Mehrheitseigentümerin ihres Netzes, Thüga hält 49,1% und übernimmt zugleich die operative Betriebsführung — Entstördienst, Messwesen, technische Planung. Für die Stadt bedeutet das: Sie muss kein eigenes 24/7-Entstörteam und keine eigene Leitstelle aufbauen, sondern greift auf die Infrastruktur zurück, die Thüga parallel für rund 100 andere kommunale Energieversorger betreibt. Genau diese Bündelung ist der wirtschaftliche Kern: Eine einzelne Entstörbereitschaft für ein kleines Stadtnetz wäre für die Stadt allein unwirtschaftlich teuer, weil Personal und Fahrzeuge auch in störungsfreien Nächten bereitstehen müssen — verteilt über 100 Mandate sinken diese Fixkosten pro Netz drastisch. Im Gegenzug zahlt die Stadt ein Betriebsführungsentgelt an Thüga und gibt einen Teil der operativen Steuerungshoheit ab.",
            status: "aktiv",
            radar: { regulierung:3, skalierbarkeit:3, marktrisiko:2, digitalisierung:3, wettbewerb:3, nachhaltigkeit:2 },
            erloesTyp: "Fee-based", akteure: ["Thüga","Westnetz","Avacon Netz","SWU Netze"]
          },
          {
            id: "L3-VNB-BETREIB-04", title: "Interkommunale Netzgesellschaft (Kooperationsmodell)",
            angreifbarkeit: "Angreifbar weniger ökonomisch als politisch: Konzern-VNB umwerben einzelne Mitgliedskommunen bei Konzessionsabläufen und testen den Zusammenhalt des Verbunds. Governance-Blockaden sind der Hebel — wer als externer Anbieter schnellere Investitionsentscheidungen und professionellere Prozesse verspricht, adressiert genau die strukturelle Schwäche des Mehr-Gesellschafter-Modells.",
            definition: "Mehrere benachbarte Kommunen bündeln ihre Netze in einer gemeinsamen, rein kommunalen Netzgesellschaft, um Skaleneffekte zu erzielen, ohne das Netz an einen externen Konzern abzugeben. Konkretes Beispiel: Westfalen Weser Netz GmbH, getragen von der Westfalen Weser Energie GmbH & Co. KG im Eigentum von 57 Kommunen (weitere 24 Kommunen sind nur Konzessionsgeber, nicht Gesellschafter) – aktiv in Ostwestfalen-Lippe, Weserbergland und nördlichem Sauerland.",
            wertschoepfung: "Bündelung von Investitionskraft und Fachpersonal über viele kleine Einzelnetze hinweg verbessert den ARegV-Effizienzbenchmark gegenüber isolierten Kleinstnetzen. Politische Kontrolle bleibt vollständig bei den beteiligten Kommunen – kein Souveränitätsverlust wie bei Verkauf an einen Konzern.",
            herausforderungen: "Governance-Komplexität bei vielen kommunalen Gesellschaftern mit unterschiedlichen Interessen und Investitionsprioritäten. Hoher rechtlicher und gesellschaftsrechtlicher Gründungsaufwand. Risiko politischer Blockaden bei strategischen Entscheidungen, die viele Gesellschafter-Kommunen einbeziehen müssen.",
            ausblick: "Der BNetzA-Konsolidierungsdruck (900 → 200–300 VNB bis 2040) macht dieses Modell zur naheliegenden Alternative sowohl zum Verkauf an einen Konzern als auch zur eigenständigen Überforderung kleiner Eigenbetriebe – Kooperation statt Verkauf oder Vereinzelung.",
            erloesmodell: "ARegV-Netzentgelte, anteilig nach Beteiligungsquote an die Gesellschafter-Kommunen ausgeschüttet",
            regulierung: "EnWG §46 (Konzessionen bleiben bei den jeweiligen Kommunen, Betrieb wird gepoolt), Gesellschaftsrecht, ARegV",
            kundensegment: "Letztverbraucher in allen beteiligten Kommunen",
            differenzierung: "Größe und Reichweite des Verbunds, Governance-Struktur, gemeinsame Investitionsfähigkeit",
            bmc_kanaele: "Kein Vertrieb — Gründung und Steuerung über kommunalpolitische Gremien der beteiligten Kommunen.",
            bmc_kundenbeziehung: "Pflichtbeziehung zu Letztverbrauchern in allen beteiligten Kommunen; interne Beziehung zwischen den Gesellschafter-Kommunen über Gesellschaftsvertrag geregelt.",
            bmc_kostenstruktur: "Gebündeltes Fachpersonal und Investitionskapital über viele Einzelnetze; Gründungs- und Governance-Kosten für die gesellschaftsrechtliche Struktur.",
            fallbeispiel: "Konkret funktioniert die Westfalen Weser Netz GmbH so: 57 Kommunen in Ostwestfalen-Lippe und dem Sauerland sind gemeinsam Gesellschafter der Trägergesellschaft, statt jede für sich ein eigenes Kleinstnetz mit eigenem Personal zu betreiben. Eine einzelne Kommune mit wenigen tausend Netzanschlüssen könnte sich kaum einen eigenen Netzplanungsingenieur oder eine moderne Leitstelle leisten — im Verbund der 57 Kommunen wird genau diese Fachkompetenz gemeinsam finanziert und allen Beteiligten zur Verfügung gestellt. Beim BNetzA-Effizienzvergleich zahlt sich das aus: Die gebündelte Struktur erreicht einen besseren Effizienzwert als es die Summe vieler isolierter Kleinstnetze täte, was unmittelbar die zulässige Erlösobergrenze positiv beeinflusst. Der Preis für diesen Effizienzgewinn ist Governance-Komplexität: Größere Investitionsentscheidungen müssen Zustimmung über viele kommunale Gesellschafter hinweg finden, was Tempo kostet, aber die politische Kontrolle vollständig bei den Kommunen selbst belässt.",
            status: "emerging",
            radar: { regulierung:4, skalierbarkeit:3, marktrisiko:1, digitalisierung:3, wettbewerb:1, nachhaltigkeit:3 },
            erloesTyp: "Reguliert", akteure: ["Westfalen Weser Netz","Westfalen Weser Energie"]
          },
          {
            id: "L3-VNB-BETREIB-05", title: "Rekommunalisierung (Rückkauf nach Konzessionsende)",
            angreifbarkeit: "Das Modell ist selbst der Angreifer (auf den Konzern-Betreiber), bleibt aber verwundbar: Hohe Kaufpreise und der Aufbau eigener Strukturen belasten die Anfangsjahre — bleibt die Effizienz aus, wird die nächste Konzessionsrunde zur Gegenattacke der professionellen Netzbetreiber. Dienstleister positionieren sich zudem mit 'Rekommunalisierung light' (Betriebsführung, Pacht), die Kontrolle ohne Übernahmerisiko verspricht.",
            definition: "Kommune kauft das Verteilnetz von einem bisherigen Konzern-Betreiber zurück und überführt es in kommunales Eigentum, statt die auslaufende Konzession (§46 EnWG, üblich 20 Jahre) erneut auszuschreiben. Hamburg: 2013 Volksentscheid (50,9%) für vollständige Rekommunalisierung; 2014 Rückkauf der Vattenfall-Mehrheit am Stromnetz (74,9% für 546,7 Mio. €, Stadt hielt bereits 25,1%) → Stromnetz Hamburg GmbH seither 100% kommunal; Gasnetz 2018 (355,4 Mio. €) und Fernwärme 2019 (950 Mio. €) folgten. Berlin: Die 2019 an die landeseigene Bietergesellschaft 'Berlin Energie' vergebene Netzkonzession wurde nach Vattenfalls Klage 2020 vom Kammergericht für unwirksam erklärt; die tatsächliche Rekommunalisierung erfolgte 2021 auf anderem Weg – die Holding 'Berlin Energie und Netzholding GmbH' (BEN) kaufte Vattenfalls verbleibende 100%-Beteiligung an der Stromnetz Berlin GmbH direkt für rund 2,06 Mrd. € (zzgl. Nebenkosten ca. 2,14 Mrd. €).",
            wertschoepfung: "Vollständige Rückführung der regulierten Netzrendite an die Kommune statt an einen externen Konzern. Strategische Steuerungshoheit über Ausbau-Tempo für Wärmewende und Sektorkopplung. Politisches Argument 'Energiewende in kommunaler Hand' stärkt zudem die Investitionslegitimation gegenüber Bürgern.",
            herausforderungen: "Sehr hoher Kaufpreis – Bewertungsstreit Sachzeitwert vs. Ertragswert führt oft zu jahrelangen Schieds- und Gerichtsverfahren (Berlin: Konzessionsstreit zog sich über ein Jahrzehnt). Übergangsrisiken bei Personal- und IT-Übernahme. Aufbau eigener Fach- und Steuerungskompetenz nach Jahrzehnten externer Betriebsführung.",
            ausblick: "Nach den Großstadt-Wellen (Hamburg, Berlin) sind weitere Rekommunalisierungen bei auslaufenden Konzessionen in mittelgroßen Städten zu erwarten, gebremst durch hohe Kapitalkosten im aktuellen Zinsumfeld. Trend läuft damit parallel zur gegenläufigen Konsolidierungswelle bei kleinen Netzen (vgl. L3-VNB-BETREIB-03/04).",
            erloesmodell: "ARegV-Netzentgelte nach Übernahme, vollständig kommunal",
            regulierung: "EnWG §46 (Konzessionsvergabe/-ende), kartellrechtliche Vorgaben zur Bewertung (Sachzeitwert), gerichtliche Konzessionsstreitverfahren",
            kundensegment: "Letztverbraucher im übernommenen Netzgebiet",
            differenzierung: "Übernahmegeschwindigkeit, Integrationsqualität, politische Rückendeckung und Finanzierungsfähigkeit",
            bmc_kanaele: "Kein Vertrieb — Rückkauf erfolgt über Volksentscheid/politischen Beschluss und Verhandlung bzw. Klageweg mit dem bisherigen Konzern-Eigentümer.",
            bmc_kundenbeziehung: "Übernahme der bestehenden Letztverbraucher-Pflichtbeziehung vom Vorbetreiber; Integration von Personal und IT als kritische Übergangsphase.",
            bmc_kostenstruktur: "Sehr hoher einmaliger Kaufpreis (Hamburg 546,7 Mio. € Strom; Berlin ca. 2,14 Mrd. €) als dominanter Kostenblock, danach reguläre ARegV-Betriebskosten.",
            fallbeispiel: "Konkret zeigt sich der Mechanismus einer Rekommunalisierung nicht im Kaufpreis selbst, sondern in der Erlösverteilung danach: Das Netzentgelt, das jeder Hamburger Stromkunde zahlt, finanziert über die ARegV-Erlösobergrenze eine kalkulatorische Eigenkapitalrendite. Solange Vattenfall Mehrheitseigner war, floss dieser Renditeanteil als Gewinn an den schwedischen Konzern ab. Seit der vollständigen Übernahme 2014 verbleibt genau dieser Teil in der Stadt — die Regulierungsformel selbst hat sich nicht verändert, nur der Empfänger der ohnehin gedeckelten Rendite. Wichtig für das Verständnis der Mechanik: Die 546,7 Mio. €, die die Stadt für die Anteile zahlte, fließen nicht automatisch über höhere Netzentgelte an die Kunden zurück — die ARegV erkennt für die Erlösobergrenze grundsätzlich die regulatorisch bewerteten Anschaffungs- und Herstellungskosten der Netzanlagen an, nicht den zwischen den Verkaufsparteien verhandelten Kaufpreis. Genau das macht den ökonomischen Kern einer Rekommunalisierung aus: Sie verschiebt, wer die regulatorisch ohnehin gedeckelte Rendite einsammelt, ohne automatisch die Netzentgelte für die Kunden zu erhöhen.",
            status: "aktiv",
            radar: { regulierung:5, skalierbarkeit:1, marktrisiko:2, digitalisierung:2, wettbewerb:1, nachhaltigkeit:4 },
            erloesTyp: "Reguliert", akteure: ["Stromnetz Hamburg","Stromnetz Berlin","BEN – Berlin Energie und Netzholding"]
          }
        ]
      }
    ]
  },

  // ══════════════════════════════════════════════════════════
  // L1: GAS & WASSERSTOFFNETZ
  // ══════════════════════════════════════════════════════════
  {
    id: "L1-GAS", title: "Gas & Wasserstoffnetz", icon: "🔵", color: "#6366F1",
    description: "FNB Gas im strategischen Transformationsprozess: Erdgas-Infrastruktur wird zur Wasserstoff-Backbone-Infrastruktur Europas.",
    capabilities: [
      {
        id: "L2-GAS-FNB", title: "Fernleitungsnetzbetreiber Gas (FNB)",
        description: "Reguliertes Hochdruckgasnetz mit H2-Transformationsperspektive.",
        actors: ["Open Grid Europe (OGE)","Gascade","Bayernets","Terranets BW","Ontras","Thyssengas"],
        items: [
          {
            id: "L3-GAS-FNB-01", title: "Reguliertes Gastransportnetz",
            angreifbarkeit: "Der Angreifer ist kein Wettbewerber, sondern die Mengenerosion selbst: Elektrifizierung (Wärmepumpen, Prozesswärme) entzieht dem Netz die Durchleitung, auf der die Entgeltbasis ruht — sinkende Mengen bei fixen Kosten treiben die Entgelte und beschleunigen die Abwanderung (Death Spiral). Verteidigungspfad ist das Repurposing Richtung H2-Kernnetz; wer Rohre ohne H2-Perspektive hält, verwaltet Stranded Assets.",
            definition: "FNB Gas betreiben ~40.000 km Hochdruckfernleitungsnetz (16–100 bar) unter ARegV-Regulierung (GasNEV). Struktur analog Strom-ÜNBs: BNetzA-genehmigte EOG auf Basis RAB + Effizienzvergleich. Kapazitätsbuchungen über PRISMA-Plattform (EU). Technische Basis: Kompressorstationen alle 150–200 km, SCADA/EMS, Pipelineintegrität. Entry/Exit-Netzentgelte getrennt.",
            wertschoepfung: "Regulierter Return auf RAB – gesichert, aber mit Transformationsrisiko. FNBs, die früh in H2-Readiness investieren (Stahlgütenachweis, Verdichterumbau) positionieren sich für regulatorisch anerkannte H2-Kernnetz-Investitionen. Grenzüberschreitende Kapazitäten (ICs) erzielen höhere Buchungspreise durch internationalen Gashandel.",
            herausforderungen: "Fundamentale Geschäftsmodellunsicherheit bei vollständiger Dekarbonisierung: Erdgas-Durchleitung sinkt auf null. Stranded-Asset-Risiko für nicht H2-geeignete Rohre. Investitionsdilemma: Erdgas-Infrastruktur modernisieren oder auf H2 wechseln? Regulatorischer Übergangszeitraum noch nicht vollständig definiert.",
            ausblick: "H2-Kernnetz (rund 9.040 km von der BNetzA im Oktober 2024 genehmigt; ~9.666 km beantragt)[[Q:bnetza-h2-kernnetz]] transformiert die FNB-Branche. ~60% Repurposing bestehender Gasleitungen – FNBs mit geeignetem Rohrnetz haben strukturellen Vorteil. Amortisationsmodell: staatliche Anschubfinanzierung bis H2-Markt reif. European Hydrogen Backbone (EHB: 53.000 km bis 2040) als europäische Einbettung.",
            erloesmodell: "Regulierte Entry/Exit-Entgelte (GasNEV, ARegV)",
            regulierung: "EnWG §21, GasNEV, ARegV, BNetzA, EU-Gasmarkt-VO, EnWG H2-Novelle",
            kundensegment: "Gaslieferanten, Industrie, VNB Gas, H2-Erzeuger (zukünftig)",
            differenzierung: "H2-Readiness (Rohrmaterial), Repurposing-Kompetenz, Netzlage (Nordsee-Ruhrgebiet)",
            bmc_kanaele: "Kapazitätsbuchung über die europäische PRISMA-Plattform; kein klassischer Vertrieb, sondern regulierter Netzzugang.",
            bmc_kundenbeziehung: "Vertraglich standardisierte Entry/Exit-Buchungsbeziehung zu Gaslieferanten und Industriekunden ohne individuelle Verhandlung.",
            bmc_kostenstruktur: "Kapitalkosten für Pipelines und Kompressorstationen (RAB-Basis) dominieren; zunehmend auch H2-Readiness-Investitionen (Stahlgüte, Verdichterumbau).",
            fallbeispiel: "Konkret zeigt sich das Transformationsdilemma an einer Entscheidung, die OGE oder Gascade heute für eine 40 Jahre alte Pipeline treffen müssen: Investiert man in die Modernisierung für weiteren Erdgastransport, obwohl die Durchleitungsmenge mit fortschreitender Dekarbonisierung sinken wird? Oder prüft man, ob das Rohr zu den rund 60% des Netzes gehört, das sich für H2-Repurposing eignet — also mit vertretbarem Aufwand auf Wasserstofftransport umgerüstet werden kann? Wer frühzeitig in Stahlgütenachweise und Verdichterumbauten investiert, positioniert sich für die regulatorisch abgesicherten H2-Kernnetz-Investitionen der 2030er, während ungeeignete Leitungsabschnitte zum Stranded Asset werden können. Der regulierte Return über die RAB bleibt in beiden Fällen das Geschäftsmodell — der eigentliche Wettbewerbsvorteil liegt darin, frühzeitig zu wissen, welche eigenen Leitungen sich für die Transformation eignen und welche nicht.",
            status: "aktiv",
            radar: { regulierung:5, skalierbarkeit:1, marktrisiko:1, digitalisierung:2, wettbewerb:1, nachhaltigkeit:2 },
            erloesTyp: "Reguliert", akteure: ["OGE","Gascade","Bayernets","Terranets BW","Ontras"]
          },
          {
            id: "L3-GAS-FNB-02", title: "Wasserstoff-Kernnetz (H2-Backbone)",
            angreifbarkeit: "Konkurrenz droht weniger von anderen Netzen als von alternativen Logistiken: Ammoniak-/LOHC-Importe über Häfen mit Punkt-zu-Punkt-Anbindung und On-site-Elektrolyse können Ankerkunden abfangen, bevor das Kernnetz sie erreicht. Bleibt der H2-Hochlauf hinter dem Amortisationspfad zurück, wird das Modell politisch angreifbar — die Refinanzierung hängt am Vertrauen, dass künftige Nutzer die heutigen Vorleistungen tragen.",
            definition: "BNetzA-genehmigtes H2-Kernnetz (Oktober 2024): rund 9.040 km[[Q:bnetza-h2-kernnetz]] verbinden Erzeuger (Nordsee-Elektrolyse, LNG/H2-Import-Terminals) mit Abnehmern (Ruhrgebiet, Bayern, Baden-Württemberg). Finanzierung: Amortisationskontomodell – FNBs investieren vorab, Rückfluss über H2-Netzentgelte nach Markt-Ramp-up; staatliche Absicherung für Restrisiken. ~60% Repurposing (bestehende Gasleitungen), ~40% Neubau. Betrieb voraussichtlich durch bestehende FNB Gas.",
            wertschoepfung: "Infrastrukturmonopol auf einzigem nationalen H2-Transportnetz – wer das H2-Kernnetz betreibt, kontrolliert den zentralen Engpass für den deutschen H2-Markt der 2030er. Langfristige Kapitalrendite analog Erdgas-Netz, aber mit staatlicher Rückendeckung in der Ramp-up-Phase. First-Mover-Advantage für FNBs, die früh Repurposing-Kompetenz aufbauen.",
            herausforderungen: "Vollständig abhängig von H2-Marktentwicklung – wenn H2-Nachfrage hinter Erwartungen bleibt, entstehen massive Stranded Assets. Technische Unsicherheiten: H2-Embrittlement bei höherfestem Stahl. Verdichtertechnologie für H2 noch nicht vollständig industrialisiert. Marktentwicklung europaweit heterogen.",
            ausblick: "H2-Kernnetz vollständig operativ bis 2032. Internationale Vernetzung über EHB. Import-H2 aus Nordafrika, Naher Osten, Australien über Rotterdam/Hamburg. Bis 2030 erste Korridore (Nordsee–Ruhrgebiet) operativ. Schrittweiser H2-Preisverfall durch Skaleneffekte in Elektrolyse.",
            erloesmodell: "Regulierte H2-Netzentgelte (geplant) + staatliche Anschubfinanzierung",
            regulierung: "EnWG H2-Novelle, EU-Wasserstoffverordnung (2024), BNetzA H2-Regulierung",
            kundensegment: "H2-Erzeuger (Elektrolyseure), H2-Abnehmer (Stahl, Chemie, Mobilität)",
            differenzierung: "Netzlage (Nordsee-Achse), Repurposing-Kompetenz, Verdichtertechnologie H2",
            bmc_kanaele: "Kapazitätsvermarktung an Industrie und Speicherbetreiber über PRISMA-ähnliche Buchungsplattformen; kein Endkundenkontakt.",
            bmc_kundenbeziehung: "Langfristige Anschluss- und Kapazitätsverträge mit Industriekunden (Stahl, Chemie) und künftigen H2-Speicherbetreibern; Amortisationskonto-Modell mit dem Bund als Absicherung.",
            bmc_kostenstruktur: "Hohe Vorfinanzierung durch Umstellung/Neubau von Leitungen (Capex), abgesichert über das Amortisationskonto; Betriebskosten für Verdichterstationen.",
            fallbeispiel: "Konkret funktioniert das Amortisationskontomodell so: Ein FNB wie OGE baut eine Leitung im H2-Kernnetz, bevor genügend zahlende Industriekunden angeschlossen sind — ein klassisches Henne-Ei-Problem, weil niemand H2 bezieht, solange keine Leitung da ist, aber niemand die Leitung baut, solange niemand H2 bezieht. Das Amortisationskonto löst das, indem der Staat die Differenz zwischen den tatsächlichen Kosten der Leitung und den (zunächst niedrigen) H2-Netzentgelten der wenigen Anfangskunden vorübergehend trägt. Steigt die Auslastung in den 2030er-Jahren mit wachsender H2-Nachfrage aus Stahl- und Chemieindustrie, sinkt das nötige Netzentgelt pro Kunde, und der FNB zahlt die Vorfinanzierung über höhere Auslastung an den Staat zurück. Für den Betreiber bedeutet das ein deutlich geringeres Investitionsrisiko als bei einer rein marktgetriebenen Leitung — das eigentliche Risiko trägt in der Übergangsphase der Staat, nicht der Netzbetreiber.",
            status: "emerging",
            radar: { regulierung:5, skalierbarkeit:2, marktrisiko:2, digitalisierung:3, wettbewerb:1, nachhaltigkeit:5 },
            erloesTyp: "Reguliert", akteure: ["OGE","Gascade","Bayernets","Ontras","Thyssengas"]
          }
        ]
      }
    ]
  },

  // ══════════════════════════════════════════════════════════
  // L1: ENERGIEHANDEL & PORTFOLIOMANAGEMENT
  // ══════════════════════════════════════════════════════════
  {
    id: "L1-HANDEL", title: "Energiehandel & Portfoliomanagement", icon: "📊", color: "#8B5CF6",
    description: "Börsen, proprietäre Trader und Portfolio-Manager – hochdigitalisiertes Segment, das durch EE-Volatilität strukturell wächst.",
    capabilities: [
      {
        id: "L2-HANDEL-BOERSE", title: "Börsenhandel & Clearing",
        description: "Marktplätze für standardisierte Energieprodukte.",
        actors: ["EPEX SPOT","EEX","Nasdaq Commodities","ECC (European Commodity Clearing)"],
        items: [
          {
            id: "L3-HANDEL-BOERSE-01", title: "Energiebörse (Exchange-Modell)",
            angreifbarkeit: "Liquidität schützt — aber nicht absolut: Broker-Plattformen und OTC-Clearing greifen Randsegmente ab, und langfristig testen dezentrale Matching-Ansätze (P2P, 24/7-PPA-Marktplätze) die Frage, ob jede Transaktion eine zentrale Börse braucht. Realistischster Angriff ist der Gebührendruck durch Konsolidierung auf Händlerseite: Wer Volumen bündelt, verhandelt die Transaction Fee — die Börsenmarge hängt an Produkten, die niemand sonst clearen kann.",
            definition: "EPEX SPOT (Day-Ahead, Intraday kontinuierlich, Intraday-Auktionen) und EEX (Futures, Optionen, CO₂) betreiben regulierte Marktplätze. Erlös = Transaktionsgebühren (0,03–0,15 €/MWh je Produkt) + Clearinggebühren (via ECC) + Mitgliedsbeiträge. Netzwerkeffekte sind fundamental: Liquidität zieht Liquidität. Kein Marktpreisrisiko – reine Infrastrukturrolle. EPEX SPOT wickelt europaweit über 700 TWh Spothandel/Jahr ab; das deutsche Marktgebiet ist mit Abstand das größte.",
            wertschoepfung: "Plattform-Netzwerkeffekt: Jeder neue Teilnehmer erhöht Liquidität und damit den Wert für alle. Skaleneffekte in IT-Infrastruktur: marginale Kosten pro Transaktion sinken mit Volumen. Produktausweitung (Intraday-15-Minuten-Produkte seit 2018) schafft neue Erlösquellen bei wachsender EE-Volatilität.",
            herausforderungen: "Regulatorisches Umfeld: MiFID II, REMIT, EMIR erhöhen Compliance-Kosten. Technologische Disruption durch dezentralen Peer-to-Peer-Handel (Blockchain-basiert, noch marginal). Konsolidierungsdruck auf europäischer Ebene.",
            ausblick: "Volumen wächst mit EE-Anteil (mehr Intraday-Handel für Prognoseausgleich). 15-Minuten-Produkte werden Standard. H2-Futures und Flexibilitätsprodukte als neue Märkte. Echtzeit-Clearing als nächste Evolutionsstufe.",
            erloesmodell: "Transaktionsgebühren (€/MWh) + Clearing + Mitgliedsbeiträge",
            regulierung: "MiFID II, REMIT (ACER), EnWG §26, EMIR",
            kundensegment: "Erzeuger, Lieferanten, Trader, ÜNBs, Industrie",
            differenzierung: "Liquidität, Produktpalette, Clearing-Sicherheit, Technologie-Latenz",
            bmc_kanaele: "Direkter Marktzugang für Marktteilnehmer über Handelsplattform und Börsenmitgliedschaft (EEX/EPEX) — kein klassischer Vertrieb.",
            bmc_kundenbeziehung: "Mitgliedschaftsbasierte Dauerbeziehung mit Clearing-Mitgliedern und Handelsteilnehmern; standardisierter Marktzugang statt Einzelkundenbetreuung.",
            bmc_kostenstruktur: "IT-/Handelsplattform-Infrastruktur (latenzkritisch) und Clearing-System als dominante Fixkosten; geringe variable Kosten pro Transaktion.",
            fallbeispiel: "Konkret verdient EPEX SPOT nicht an der Höhe des Strompreises, sondern an jeder einzelnen Transaktion: Bei der täglichen Day-Ahead-Auktion geben tausende Marktteilnehmer (Kraftwerksbetreiber, Lieferanten, Industriekunden) ihre Kauf- und Verkaufsgebote für jede Stunde des Folgetags ab; die Börse ermittelt algorithmisch den Preis, bei dem Angebot und Nachfrage übereinstimmen, und kassiert dafür eine Gebühr von wenigen Cent pro MWh — bei mehreren hundert TWh Jahresvolumen im deutschen Marktgebiet ergibt das ein verlässliches Geschäft, das komplett unabhängig davon ist, ob der Strompreis in der jeweiligen Stunde bei 20 oder 200 €/MWh liegt. Der eigentliche Werttreiber ist der Netzwerkeffekt: Je mehr Teilnehmer ihre Gebote auf EPEX SPOT abgeben, desto enger ist der Spread zwischen Kauf- und Verkaufspreisen und desto attraktiver wird die Plattform für den nächsten Teilnehmer — ein klassischer Skaleneffekt, der es neuen Konkurrenzbörsen extrem schwer macht, der etablierten Liquidität etwas entgegenzusetzen.",
            status: "aktiv",
            radar: { regulierung:3, skalierbarkeit:5, marktrisiko:1, digitalisierung:5, wettbewerb:2, nachhaltigkeit:2 },
            erloesTyp: "Fee-based", akteure: ["EPEX SPOT","EEX","ECC"]
          }
        ]
      },
      {
        id: "L2-HANDEL-PORTFOLIO", title: "Proprietärer Handel & Portfolio-Optimierung",
        description: "Handel auf eigene Rechnung und Kundenportfolio-Management.",
        actors: ["Axpo","Alpiq","BKW Trading","Vitol","Statkraft Markets","RWE Supply & Trading"],
        items: [
          {
            id: "L3-HANDEL-PORTFOLIO-01", title: "Proprietärer Energiehandel (Prop Trading)",
            angreifbarkeit: "Informationsvorsprünge sind die einzige Verteidigung — und werden systematisch wegkommoditisiert: ML-Prognosen, Satellitendaten und Latenz sind käuflich, Quant-Shops und Hedgefonds drängen mit besserem Tooling in die Commodity-Märkte. REMIT II erhöht zudem die Compliance-Fixkosten kleiner Desks — die Konsolidierung frisst die Nische zwischen Utility-Desk und Finanz-Player.",
            definition: "Handel auf eigene Rechnung mit dem Ziel, Marktpreisrisiken in Gewinne umzuwandeln. Strategien: (1) Spot-Arbitrage zwischen Märkten und Zeitpunkten. (2) Spread Trading: Clean Spark Spread (Strom vs. Gas + CO₂), Clean Dark Spread (Strom vs. Kohle + CO₂). (3) Strukturelles Trading: Baseload-Futures günstig, Peak-Futures teuer verkaufen. (4) Meteorologisches Trading: Positionsnahme auf Basis proprietärer EE-Prognosemodelle. Alle Positionen unterliegen REMIT-Meldepflicht an ACER und MiFID II-Compliance.",
            wertschoepfung: "Informationsvorsprung als einzige nachhaltige Alpha-Quelle: bessere EE-Prognosemodelle, schnellere Datenpipelines, erfahrenere Trader. Skaleneffekte: Größere Bücher bewirtschaften Bid-Ask-Spreads effizienter. Risikomanagement-Disziplin ermöglicht höhere Positionsnahme bei gleichem VAR-Budget.",
            herausforderungen: "REMIT II (ab 2024): erweiterte Meldepflichten, schärfere Insider-Trading-Definitionen. ML-Algorithmen nivellieren Informationsvorsprünge zwischen Marktteilnehmern. EMIR-Clearing-Anforderungen erhöhen Eigenkapitalbindung. Talentknappheit: Quantitative Trader und Data Scientists sind teuer und mobil.",
            ausblick: "Volatilität steigt strukturell mit EE-Anteil – mehr Handelsmöglichkeiten und Risiken. KI-gestützte Prognosemodelle werden Standard. Neue Produkte: H2-Derivate, Long-Duration-Storage-Kontrakte, Flex-Produkte für Aggregatoren. EU-Marktintegration (PICASSO, MARI, TERRE) schafft größere Arbitrage-Räume.",
            erloesmodell: "Handelsmarge (P&L aus Proprietary-Positionen, VAR-kontrolliert)",
            regulierung: "REMIT II, MiFID II, EMIR, EnWG §5, ACER-Überwachung",
            kundensegment: "Eigenbuch (kein externer Kunde)",
            differenzierung: "ML-Prognosegüte, Datenvorteil, Reaktionsgeschwindigkeit, Risikodisziplin",
            bmc_kanaele: "Kein Kundenvertrieb — Handel ausschließlich auf Eigenbuch über Börsenmitgliedschaft (EEX/EPEX) und OTC-Plattformen.",
            bmc_kundenbeziehung: "Keine klassische Kundenbeziehung, da reiner Eigenhandel; relevante Beziehungen sind zu Clearing-Häusern und Datenanbietern.",
            bmc_kostenstruktur: "Personal (quantitative Trader, Data Scientists) und Dateninfrastruktur als Hauptkostenblock; Eigenkapitalbindung durch EMIR-Clearing.",
            fallbeispiel: "Konkret zeigt sich Prop Trading am Clean Spark Spread: Ein Trader bei Axpo oder RWE Supply & Trading sieht anhand des eigenen Wettermodells, dass für übermorgen mehr Wind erwartet wird als der Markt aktuell einpreist — der Day-Ahead-Preis für die Mittagsstunden wird daher voraussichtlich fallen. Er verkauft heute Strom für übermorgen auf Termin und plant, die Position morgen, wenn sich die Markterwartung an seine Prognose anpasst, günstiger zurückzukaufen. Trifft die Prognose zu, kassiert er die Differenz; trifft sie nicht zu, trägt er den Verlust innerhalb eines vorher festgelegten Risikobudgets (VAR-Limit). Der einzige nachhaltige Vorteil in diesem Geschäft ist ein systematisch besseres Wettermodell oder schnellerer Zugriff auf Markdaten als die Konkurrenz — sobald ein Informationsvorsprung allgemein bekannt wird, verschwindet die Handelsmarge, die daraus entstand, und das Tradingteam muss den nächsten Vorsprung finden.",
            status: "aktiv",
            radar: { regulierung:2, skalierbarkeit:4, marktrisiko:5, digitalisierung:5, wettbewerb:4, nachhaltigkeit:1 },
            erloesTyp: "Merchant", akteure: ["Axpo","Alpiq","Vitol","RWE S&T","Trafigura"]
          },
          {
            id: "L3-HANDEL-PORTFOLIO-02", title: "Direktvermarktung & EE-Portfoliomanagement",
            angreifbarkeit: "Skalenspiel mit schrumpfender Prämie: Die Managementfee sinkt im Preiswettbewerb kontinuierlich, während ÜNB die Referenzmarktwerte verbessern und damit das Outperformance-Potenzial wegregulieren. Große Anlagenbetreiber insourcen die Vermarktung, sobald ihr Portfolio es trägt — Trading-as-a-Service-Software senkt genau diese Insourcing-Hürde weiter. Verteidigung nur über Zusatzleistungen: Firming, PPA-Strukturierung, Redispatch-Abwicklung.",
            definition: "Direktvermarktungsdienstleister bündeln EE-Anlagen und optimieren deren gemeinsame Vermarktung. Kerngeschäft: Prognosedienstleistung – bessere Einspeiseprognosen als Referenzmarktwert = Outperformance. Next Kraftwerke (seit 2021 Shell): >14 GW in 17 Ländern, europäischer Marktführer. Technologiebasis: ML-Wettermodelle (0,5–1 km Auflösung), SCADA-Anbindung aller Anlagen, automatisierter Intraday-Handel. Erlös: Managementfee (0,15–0,50 ct/kWh) + Outperformance-Split (20–40% des Mehrerlöses).",
            wertschoepfung: "Portfolioeffekte bei >10 GW: Prognosefehler sinkt durch Diversifikation auf ~2–3%. Outperformance von 2 €/MWh bei 10 GW × 2.000 h = 40 Mio. MWh × 2 €/MWh = 80 Mio. € Outperformance-Pool p.a. First-Mover-Vorteile: Wechselhürde nach SCADA-Integration ist hoch. Technologiekostenreduktion schafft steigende Margen.",
            herausforderungen: "ÜNBs verbessern Referenzmarktwerte kontinuierlich – Outperformance-Potenzial sinkt strukturell. Markt konsolidiert: Top 5 Direktvermarkter haben >70% Marktanteil. Interessenkonflikte nach Shell-Übernahme von Next Kraftwerke (vermarktet auch Wettbewerberanlagen). EinsMan-Abrechnungskomplexität (Ausfallarbeit) belastet Prozesse.",
            ausblick: "Direktvermarktung entwickelt sich zu 'Energy-as-a-Service': EE + Speicher + H2-Elektrolyse-Steuerung + Demand Response. Internationalisierung: Europäischer EE-Boom schafft Wachstumsmärkte außerhalb Deutschland.",
            erloesmodell: "Managementfee (ct/kWh) + Outperformance-Share (% über RMW)",
            regulierung: "EEG §21b, MaBiS, REMIT, regelleistung.net",
            kundensegment: "EE-Anlagenbetreiber (B2B), Projektentwickler",
            differenzierung: "Prognosegüte, Portfoliogröße (Skaleneffekte), SCADA-Anbindungstiefe",
            bmc_kanaele: "B2B-Direktvertrieb an EE-Anlagenbetreiber und Projektentwickler über eigenes Vertriebsteam; SCADA-Integration als technischer Anbindungskanal.",
            bmc_kundenbeziehung: "Langfristige Vermarktungsverträge mit hoher Wechselhürde nach SCADA-Integration; persönliche Betreuung großer Anlagenportfolios.",
            bmc_kostenstruktur: "ML-Wettermodelle/Prognose-IT und SCADA-Anbindung als zentrale Fixkosten; Personal für Portfoliomanagement und Intraday-Handel.",
            fallbeispiel: "Konkret zeigt sich der Mehrwert eines Direktvermarkters wie Statkraft an einem einzelnen Windpark: Der ÜNB setzt für diese Anlage einen pauschalen monatlichen Referenzmarktwert (RMW) als Bemessungsgrundlage für die EEG-Marktprämie an — unabhängig davon, ob der Wind in einer bestimmten windstarken Stunde besonders günstig oder besonders teuer vermarktet werden konnte. Statkraft nutzt ein hochauflösendes Wettermodell, um genau diese Stunden zu identifizieren und die Einspeisung gezielt am Intraday-Markt statt pauschal zum Monatsdurchschnitt zu verkaufen. Erzielt der Windpark dadurch über das Jahr 2 €/MWh mehr als der RMW unterstellt, behält Statkraft davon 20–40% als Outperformance-Anteil, der Rest geht an den Anlagenbetreiber. Der Windpark allein, ohne Portfoliobündelung, hätte einen Prognosefehler von 15–25% — erst die Bündelung mit Tausenden anderen Anlagen drückt diesen Fehler auf 2–3% und macht die Outperformance überhaupt erst zuverlässig erzielbar.",
            status: "aktiv",
            radar: { regulierung:2, skalierbarkeit:5, marktrisiko:2, digitalisierung:5, wettbewerb:3, nachhaltigkeit:4 },
            erloesTyp: "Fee-based", akteure: ["Next Kraftwerke (Shell)","Statkraft","Axpo","BKW","Enspired"]
          },
          {
            id: "L3-HANDEL-ZERTIF-01", title: "Herkunftsnachweise (HKN) & EU ETS",
            angreifbarkeit: "Das Massen-HKN-Geschäft ist strukturell margenarm und leicht angreifbar (Registerzugang genügt); die Premium-Marge (Zusätzlichkeit, 24/7-Matching) zieht Tech-Angreifer an, die stündliche Herkunftsnachweise per Software matchen (Granular Certificates) und den klassischen Zertifikatehändler zum Datenanbieter degradieren. Regulatorische Verschärfungen der Zusätzlichkeitskriterien können Bestandsportfolios kurzfristig entwerten.",
            definition: "HKN/GO (Guarantees of Origin): Handelbare Zertifikate, die 1 MWh EE-Strom aus spezifischer Quelle bescheinigen. Separater Markt vom physischen Strom (RECS-System). Preise: 0,10–5 €/MWh je nach Qualität (Zusätzlichkeit, Jahrgang, Technologie, Regionalität). EU ETS: Pflichtmarkt für Stromerzeugung und Industrie >20 MW. EUAs (EU Allowances) bei >80 €/t CO₂ (2023) wesentlicher Kostentreiber. Händler arbitrieren Spot-Futures-Spread, Auktionstermine, saisonale Nachfragemuster.",
            wertschoepfung: "HKN: Marge aus Ankauf (EE-Erzeuger) und Verkauf (Lieferanten für Stromkennzeichnung/CSRD). Premium-Segmente (24/7 Matching, regionale HKN, Neuanlagen-Zertifikate) wachsen durch CSRD-Druck. EU ETS: Händler mit besseren CO₂-Preisprognosen erzielen strukturelle Überrenditen.",
            herausforderungen: "HKN-Markt: Überangebot aus wasserkraftreichen Ländern drückt Preise. Regulatorisches Risiko: Strengere Zusätzlichkeits-Anforderungen könnten Markt fragmentieren. EU ETS: CBAM (finanzielle Zahlungspflicht ab 2026, schrittweiser Auslauf der kostenlosen Zuteilung bis 2034) verändert Nachfragedynamik für europäische Industrie.",
            ausblick: "24/7 CFE (Carbon-Free Energy): stündliches HKN-Matching statt Jahresbilanz. Google, Microsoft, BASF treiben Standard. Neues EU-Marktdesign für hochauflösende HKN entsteht. Gebäude und Verkehr werden über das separate ETS2 ab 2027 bepreist; EU ETS (Phase 4) läuft bis 2030.",
            erloesmodell: "HKN: Handelsmarge (ct/MWh). EU ETS: Tradinggewinne + Compliance-Beratung",
            regulierung: "EnWG §42, EU RED II/III, RECS, EU ETS-RL (2003/87/EG), TEHG",
            kundensegment: "Lieferanten, Industrie (ESG/CSRD), Finanzinvestoren",
            differenzierung: "Zusätzlichkeit (Additionality), Jahrgangspremium, ETS-Preisprognose",
            bmc_kanaele: "B2B-Handel über bilaterale Verträge und Börsenplattformen (EEX) an Lieferanten und Industriekunden.",
            bmc_kundenbeziehung: "Transaktionale Handelsbeziehungen ohne Bindung; bei CSRD-getriebenen Industriekunden zunehmend Beratungskomponente.",
            bmc_kostenstruktur: "Handelsplattform- und Compliance-Kosten (REMIT/EU-ETS-Meldewesen) als Hauptblock; geringe variable Kosten pro Zertifikat.",
            fallbeispiel: "Konkret zeigt sich das HKN-Geschäft an einem Lieferanten, der seinen Stromtarif als 'Ökostrom' kennzeichnen will: Er kauft pro verkaufter MWh ein Herkunftsnachweis-Zertifikat, das die Erzeugung aus z.B. einem norwegischen Wasserkraftwerk bescheinigt — für 0,10–0,50 €/MWh, weil das Angebot an HKN aus alten, längst abgeschriebenen Wasserkraftwerken riesig ist. Der physische Strom, den der Kunde tatsächlich bezieht, kommt unverändert aus dem deutschen Strommix; das Zertifikat ist ein getrennter, rein buchhalterischer Nachweis. Ein Lieferant, der stattdessen ein Premium-HKN von einer neu gebauten deutschen Solaranlage kauft (Zusätzlichkeitskriterium), zahlt dafür ein Vielfaches — bis zu 5 €/MWh — weil dieses Zertifikat tatsächlich neue EE-Kapazität mitfinanziert hat. Genau dieser Preisunterschied zwischen Massen-HKN und Premium-HKN ist der Markt, an dem Händler wie Axpo verdienen: Sie kaufen günstig dort ein, wo Zusätzlichkeit nicht gefragt ist, und verkaufen teuer dort, wo CSRD-Berichtspflichten echte Zusätzlichkeit verlangen.",
            status: "aktiv",
            radar: { regulierung:3, skalierbarkeit:5, marktrisiko:3, digitalisierung:3, wettbewerb:3, nachhaltigkeit:4 },
            erloesTyp: "Merchant", akteure: ["EEX","RECS International","Axpo","DZ-4","Naturstrom"]
          }
        ]
      }
    ]
  },

  // ══════════════════════════════════════════════════════════
  // L1: VERTRIEB & ENERGIELIEFERUNG
  // ══════════════════════════════════════════════════════════
  {
    id: "L1-VERTRIEB", title: "Vertrieb & Energielieferung", icon: "🏠", color: "#EF4444",
    description: "Höchste Geschäftsmodell-Diversität aller Segmente – vom Massenmarkt-Grundversorger bis zum App-first Neolieferanten.",
    capabilities: [
      {
        id: "L2-VERTRIEB-VOLL", title: "Integrierter Vollversorger",
        description: "Großkonzerne unter Margendruck – im Transformationsprozess zum Energiedienstleister.",
        actors: ["E.ON Energie Deutschland","EnBW","EWE","Vattenfall"],
        items: [
          {
            id: "L3-VERTRIEB-VOLL-01", title: "Massenmarkt B2C – Grundversorgung & Sondertarife",
            definition: "Grundversorger (§36 EnWG: günstigster Anbieter nach Kundenzahl) beliefern Haushalte ohne expliziten Vertrag zum Grundversorgungstarif (GVT). GVT nicht staatlich reguliert, aber transparent kalkulierbar (StromGVV). Wettbewerbliche Sondertarife mit 12–24 Monaten Preisbindung konkurrieren über Vergleichsportale (Verivox, Check24). Erlösstruktur: Retail Margin = Endkundenpreis minus Beschaffungskosten minus Netzentgelte minus Umlagen minus Steuern. Typische Marge: 0,5–2 ct/kWh.",
            wertschoepfung: "Skaleneffekte: bessere Beschaffungskonditionen, effizienterer Kundenservice, IT-Infrastruktur amortisiert über Millionen Kunden. Cross-Selling: Ein Stromkunde generiert im Schnitt 4+ Produkte (Gas, Wärme, Solar, Wallbox). Grundversorgungsstatus sichert Kundenbasis ohne Akquisitionsaufwand. Daten: Jahresverbrauchsdaten als Basis für personalisierte Produktangebote.",
            herausforderungen: "Margenkompression durch Vergleichsportale und Neolieferanten. Energiepreiskrise 2021–2023 hat Discounter-Lieferanten in Insolvenz getrieben – GV als Auffangbecken ohne Marge. IT-Altlasten (SAP IS-U): teure Migration zu SAP S/4HANA. §41a-Pflicht (dynamische Tarife ab 2025) erfordert vollständige IT-Neuarchitektur.",
            ausblick: "Grundversorger müssen sich zu Energiedienstleistern transformieren: Smart-Home-Pakete, EV-Ökosystem, Wärmecontracting, PV-Komplettlösung als Margentreiber. Dynamische Tarife zwingen zur stündlichen Abrechnungsinfrastruktur. Konsolidierung: kleinere Stadtwerke-Vertriebe werden an Konzerne verkauft.",
            angreifbarkeit: "Die am stärksten kommoditisierte Marge der gesamten Wertschöpfungskette (0,5–2 ct/kWh) — am leichtesten anzugreifen, da Lieferantenwechsel ein reines GPKE-Verfahren ohne Asset-Hürde ist. Bereits abgegriffen durch: Neolieferanten, die SaaS- statt Commodity-Marge verdienen (vgl. L3-VERTRIEB-NEO-01/03), und Vergleichsportale, die CPA direkt aus der Akquisitionsmarge der Vollversorger extrahieren (vgl. L3-VERGL-B2C-01). Verteidigungsfähiger Rest: träge Grundversorgungs-Kundenbasis ohne Wechselmotivation + Cross-Selling in regulierungsnahe Nebenprodukte.",
            erloesmodell: "Einzelhandelsspanne (ct/kWh) auf Strom und Gas",
            regulierung: "EnWG §36/§38, StromGVV, GasGVV, Preistransparenz-VO",
            kundensegment: "B2C Haushalte, B2B Gewerbe",
            differenzierung: "Marke, Bundling, Treueprogramme, Servicenetz, IT-Reife für dyn. Tarife",
            bmc_kanaele: "Vergleichsportale (Verivox, Check24), eigener Vertrieb/Callcenter, Filialnetz, zunehmend App/Online-Self-Service.",
            bmc_kundenbeziehung: "Grundversorgungsstatus erzeugt träge Kundenbasis ohne aktive Wechselmotivation; Cross-Selling über Kundenservice und Bundling.",
            bmc_kostenstruktur: "Beschaffungskosten (Großhandel) als größter Block, dazu Vertriebs-/Akquisitionskosten (Vergleichsportal-Provisionen) und IT-Legacy (SAP IS-U).",
            fallbeispiel: "Konkret zeigt sich die Margenlogik an einem E.ON-Haushaltskunden mit 3.500 kWh Jahresverbrauch: Vom Endkundenpreis von z.B. 32 ct/kWh gehen Netzentgelte (~8 ct/kWh), Steuern und Umlagen (~6 ct/kWh) und die Beschaffungskosten am Großhandelsmarkt (~16 ct/kWh) ab — übrig bleibt eine Marge von 1–2 ct/kWh, also gerade einmal 35–70 € im Jahr pro Kunde. Genau deshalb lohnt sich für E.ON jeder Zusatzverkauf an denselben Kunden überproportional: Eine Wallbox, ein Wärmepumpen-Stromtarif oder ein PV-Pachtvertrag bringen ein Vielfaches der Strommarge, ohne dass dafür neue Kunden akquiriert werden müssen. Der Grundversorgungsstatus spielt dabei eine stille, aber wichtige Rolle: Kunden, die nie aktiv einen Vertrag abschließen, landen automatisch im GVT — und bleiben dort oft jahrelang, weil ein Wechsel für sie keinen erkennbaren Mehrwert verspricht, selbst wenn der GVT teurer ist als ein Sondertarif desselben Anbieters.",
            status: "aktiv",
            radar: { regulierung:3, skalierbarkeit:4, marktrisiko:2, digitalisierung:2, wettbewerb:5, nachhaltigkeit:2 },
            erloesTyp: "Merchant", akteure: ["E.ON Energie","EnBW","EWE","Vattenfall"]
          }
        ]
      },
      {
        id: "L2-VERTRIEB-NEO", title: "Digitale Neolieferanten",
        description: "Fundamentale Geschäftsmodell-Innovationen – Strom als Plattform statt Commodity.",
        actors: ["Tibber","Octopus Energy","Ostrom","Fünf Grad","aWATTar"],
        items: [
          {
            id: "L3-VERTRIEB-NEO-01", title: "Tibber – Dynamic Pricing & Energie-Ökosystem",
            angreifbarkeit: "Das Abo-Modell ist kopierbar geworden: §41a macht dynamische Tarife zur Pflicht für alle Lieferanten — der regulatorische Vorsprung schmilzt, Stadtwerke und Vollversorger bündeln Dynamik-Tarife mit bestehenden Kundenbeziehungen. Angreifbar ist auch die Hardware-Schicht: HEMS-Plattformen und OEM-Apps (Wallbox-, PV-, Speicherhersteller) besetzen dieselbe Automatisierungsschnittstelle und könnten den Lieferanten zum austauschbaren Backend machen.",
            definition: "Tibber (gegründet 2016, Norwegen; Deutschland ab 2019) hat das Versorger-Modell fundamental umgedreht: Statt kWh-Marge verdient Tibber an einer monatlichen Grundgebühr (5,99 €/Monat, Stand 2025).[[Q:tibber]] Strom kostet den stündlichen EPEX-Spot + Netzentgelte + Steuern ohne Aufschlag. Wert liegt in der App: automatische Steuerung von EV-Ladung, Wärmepumpe, Heimspeicher in günstige Stunden. Tibber Pulse-Dongle (~30 €) liest Zähler aus. Community-Feature: Nutzer vergleichen Einsparungen, Gamification. Ökosystem-Partnerschaften mit Wallbox-Herstellern (Easee), WP-OEMs.",
            wertschoepfung: "SaaS-Marge: ~6 €/Monat × 500.000 Kunden ≈ 36 Mio. €/Jahr – stabil, unabhängig vom Energiepreis. Netzwerkeffekte: Mehr Tibber-Nutzer mit steuerbaren Assets → attraktiver für §14a-VNB-Kooperation und VPP-Aggregation → neue B2B-Einnahmen. Ökosystem-Plattform: Wallbox-/WP-OEMs zahlen Integrations-Fees für Tibber-Zertifizierung.",
            herausforderungen: "Setzt Smart Meter voraus (für dynamische Tarife nach §41a). In Deutschland Rollout erst ab 2025 verpflichtend – begrenzte Nutzerbasis für volle Automatisierung bisher. CAC ~100 €/Kunde ≈ 1,5-Jahre-Payback bei 5,99 €/Monat – funktioniert nur bei sehr niedrigem Churn. Markt-Educating teuer: stündliche Preislogik ist noch nicht Mainstream.",
            ausblick: "§41a EnWG (dynamische Tarife: zunächst Pflicht für Versorger >100.000 Kunden, ab 2025 für alle Lieferanten)[[Q:enwg-41a]] validiert Tibbers Modell für den Massenmarkt. EV-Boom ist Hauptwachstumstreiber: jeder EV-Halter mit Wallbox hat 2–3 €/Tag Einsparpotenzial durch intelligentes Laden. Tibber könnte zur Plattform-Infrastruktur des 'Prosumer-Internet der Energie' werden.",
            erloesmodell: "Subscription (5,99 €/Monat) + Ökosystem-Partnergebühren",
            regulierung: "EnWG §41a (dynamische Tarife), MsbG (Smart Meter als Voraussetzung)",
            kundensegment: "B2C Tech-affine Prosumer: EV-Halter, WP-Besitzer, PV-Anlagenbetreiber",
            differenzierung: "App-UX, Automatisierungstiefe, Community, Smart-Home-Ökosystem-Breite",
            bmc_kanaele: "Eigene App als zentraler Kanal, Pulse-Dongle für Zählerauslesung, Ökosystem-Partnerschaften (Wallbox-/WP-Hersteller) als Co-Vertriebskanal.",
            bmc_kundenbeziehung: "Self-Service-App mit Community-/Gamification-Elementen; geringe persönliche Betreuung, hohe Bindung über Automatisierungsnutzen.",
            bmc_kostenstruktur: "CAC (~100 €/Kunde) und App-/Plattformentwicklung als Hauptkosten; Hardware-Subvention (Pulse-Dongle).",
            fallbeispiel: "Konkret funktioniert Tibbers Modell so: Ein Kunde lädt sein E-Auto über Nacht. Die App prüft die für den Folgetag bereits mittags veröffentlichten Stundenpreise und verschiebt den Ladevorgang automatisch in die günstigsten verfügbaren Stunden — meist tief in der Nacht, wenn Nachfrage niedrig und Windstromanteil hoch ist. Tibber selbst verdient an dieser Verschiebung nichts zusätzlich: Der Strom wird ohne eigenen Aufschlag zum stündlichen Einkaufspreis weitergegeben, jede eingesparte Kilowattstunde bleibt vollständig beim Kunden. Der einzige Erlös — rund 6 €/Monat je Kunde — ist von der eingesetzten Energiemenge komplett entkoppelt. Genau das ist der Kern des Modells: Tibber verdient nicht am Strom, sondern an der Software, die ihn klug einsetzt. Deshalb lohnt es sich für Tibber, möglichst viele steuerbare Geräte (Wallbox, Wärmepumpe, Heimspeicher) an das System anzubinden — jedes zusätzliche Gerät erhöht den Nutzen des Abos für den Kunden, ohne dass Tibber an der Energiemenge mitverdient. Die Kehrseite zeigt sich in den Kosten: Bei einem CAC von rund 100 €/Kunde dauert es bei rund 6 €/Monat etwa anderthalb Jahre, bis sich ein Neukunde amortisiert hat — das Modell trägt sich nur, wenn die Kündigungsquote niedrig bleibt.",
            status: "aktiv",
            radar: { regulierung:1, skalierbarkeit:5, marktrisiko:1, digitalisierung:5, wettbewerb:3, nachhaltigkeit:4 },
            erloesTyp: "Subscription", akteure: ["Tibber"]
          },
          {
            id: "L3-VERTRIEB-NEO-02", title: "Fünf Grad – Klimainvestitionsmodell",
            angreifbarkeit: "Nischenmodell mit niedriger Nachahmungshürde: Jeder Anbieter kann Klimaprojekt-Bundles auflegen, und Vollversorger können mit größeren Budgets glaubwürdige Impact-Produkte lancieren. Der Omnibus-Rückbau der CSRD-Pflicht (2026) schwächt zudem den erhofften B2B-Treiber — die Verteidigung liegt in echter, auditierter Zusätzlichkeit, die Greenwashing-Anbieter nicht liefern können.",
            definition: "Fünf Grad (2020, Berlin) hat einen dritten Weg entwickelt: weder günstigster Anbieter noch Standard-Ökostromvertrieb, sondern direkte messbare Klimawirkung als Produktkern. Pro verbrauchter kWh fließt ein fixer Betrag (~0,5 ct/kWh) in zertifizierte Naturschutzprojekte in Deutschland (Torfmoor-Renaturierung, Agroforstwirtschaft, Gewässerrenaturierung). Kritischer Unterschied: Investition in neue, zusätzliche Projekte auf deutschem Boden – nicht internationaler HKN-Zertifikatehandel. Wirkungsreporting: Kunden erhalten Jahresbericht mit konkreter Flächengröße und gemessener CO₂-Bindung.",
            wertschoepfung: "Premium-Aufschlag (2–3 ct/kWh über Marktpreis) von klimabewussten Kunden mit Zahlungsbereitschaft. Kernthese: Anti-Greenwashing-Positioning schafft Glaubwürdigkeitspremium. Strukturell: Klimaprojekte kosten ~0,3–0,5 ct/kWh – Rest ist Retail Margin. Geringe CAC durch Word-of-Mouth in Purpose-Zielgruppe.",
            herausforderungen: "Zielgruppe ist eng: klimabewusst + zahlungsbereit + nicht preissensitiv. Glaubwürdigkeitsrisiko: Klimaprojekte müssen regelmäßig auditiert werden (VCS, Gold Standard). Anzahl geeigneter Naturschutzprojekte in Deutschland ist limitiert – Skalierungshürde. CSRD-Anforderungen an Scope-2-Emissionen könnten Produktdefinition schärfen.",
            ausblick: "CSRD-Berichtspflichten schaffen B2B-Markt für 'High-Integrity Energy' mit nachgewiesener Zusätzlichkeit. Fünf Grad entwickelt B2B-Segment für KMU, die freiwillig (VSME-Standard) oder auf Anforderung ihrer Großkunden über Nachhaltigkeit berichten. 24/7 CFE-Standard als nächster Qualitätsschritt: stündliche Zusätzlichkeit statt Jahresbilanz.",
            erloesmodell: "Retail Margin + Klimaaufschlag (fixer ct/kWh, zweckgebunden)",
            regulierung: "EnWG, UBA-Anerkennungsstandards, EU-Taxonomieverordnung",
            kundensegment: "B2C klimabewusste Haushalte; B2B KMU (CSRD-getrieben)",
            differenzierung: "Messbare Zusätzlichkeit, Antigreenwashing-Positioning, Impact Reporting",
            bmc_kanaele: "Direktvertrieb über eigene Website/Online-Marketing und Word-of-Mouth in der Purpose-Zielgruppe; kein Vergleichsportal-Vertrieb.",
            bmc_kundenbeziehung: "Vertrauensbasierte Beziehung über Wirkungsreporting (Jahresbericht mit Flächengröße/CO₂-Bindung); geringer Churn durch Zweck-Identifikation.",
            bmc_kostenstruktur: "Klimaprojekt-Finanzierung (~0,3–0,5 ct/kWh) als zweckgebundener Kostenblock, dazu Auditierungskosten (VCS, Gold Standard).",
            fallbeispiel: "Konkret rechnet sich das Modell von Fünf Grad so: Ein Haushalt mit 3.500 kWh Jahresverbrauch zahlt einen Aufpreis von 2–3 ct/kWh gegenüber dem Marktdurchschnitt, also rund 70–105 € im Jahr. Davon fließen etwa 0,5 ct/kWh — rund 17,50 € — direkt und zweckgebunden in ein konkretes, auditiertes Projekt wie die Renaturierung eines Torfmoors in Brandenburg. Der Kunde bekommt am Jahresende einen Bericht, der ausweist, wie viel Fläche mit seinem Anteil renaturiert wurde und wie viel CO₂ dadurch gebunden wird — ein Nachweis, den ein Konzern-Ökostromtarif mit zugekauften HKN-Zertifikaten aus 30 Jahre altem norwegischem Wasserkraftstrom nicht liefern kann, weil dort keine neue Klimawirkung entsteht. Der verbleibende Aufpreis von 1,5–2,5 ct/kWh ist reguläre Retail Margin — Fünf Grad verdient also sowohl am Klimaprojekt-Aufschlag als Differenzierungsmerkmal als auch an der normalen Vertriebsmarge, die jeder Lieferant erzielt.",
            status: "aktiv",
            radar: { regulierung:1, skalierbarkeit:4, marktrisiko:2, digitalisierung:3, wettbewerb:3, nachhaltigkeit:5 },
            erloesTyp: "Merchant", akteure: ["Fünf Grad"]
          },
          {
            id: "L3-VERTRIEB-NEO-03", title: "Ostrom – Radikale Kostentransparenz",
            angreifbarkeit: "Transparenz ist kein verteidigungsfähiger Moat: Der offen ausgewiesene Kostenaufschlag lässt sich von jedem Wettbewerber unterbieten oder kopieren, und ohne Ökosystem (Hardware, Bundles) fehlt das Lock-in. Angreifer sind sowohl Tibber (mehr Produkt) als auch Discounter-Marken der Konzerne (mehr Preis) — die Nische 'ehrlich und einfach' muss über Marke statt Mechanik verteidigt werden.",
            definition: "Ostrom (2020, Berlin) verfolgt extremste Preistransparenz: Tarif = exakt ausgewiesener Börsenstrompreis (Monatsdurchschnitt EPEX) + Netzentgelte + staatliche Abgaben + fixe Marge (~1 ct/kWh). Keine Lockangebote, keine Preisgarantien, keine Boni. Kommunikation: 'Wir sind nicht der günstigste – aber immer fair.' Kunden sollen verstehen, wie sich ihr Strompreis zusammensetzt. Positionierung explizit gegen Vergleichsportale, die Lockangebote bevorzugen.",
            wertschoepfung: "Niedrige CAC durch Word-of-Mouth in transparenz-orientierten Zielgruppen (keine Check24-Gebühren). Sehr niedriger Churn durch Kundenzufriedenheit (~5%/Jahr vs. 20–30% bei Discount-Anbietern). Fixe absolute Marge: bei steigendem Preisniveau bleibt Marge stabil. Strukturell geringe Komplexität senkt Betriebskosten.",
            herausforderungen: "Marktsegment limitiert: preisbewusste Kunden ohne Transparenz-Bedürfnis wechseln trotzdem zu billigstem Angebot. Kein Bundling-Potenzial (keine Solar, EV, Wärme-Angebote geplant). Wachstumslimitierung durch Nischenpositioning.",
            ausblick: "EU EMD-Preistransparenz-Anforderungen werden Markt in Richtung Ostroms Modell schieben. Tibber und Ostrom repräsentieren komplementären 'Anti-Commodity'-Trend: Kunden zahlen für Automatisierung (Tibber) oder Vertrauen (Ostrom).",
            erloesmodell: "Fixer Aufschlag (~1 ct/kWh) auf transparenten Großhandelspreis",
            regulierung: "EnWG §41 (Preistransparenzpflicht)",
            kundensegment: "B2C preisbewusste, vertrauensorientierte Digital-Natives",
            differenzierung: "Radikale Transparenz, Einfachheit, keine Lockangebote, Anti-Greenwashing",
            bmc_kanaele: "Direktvertrieb über eigene Website, explizit nicht über Vergleichsportale (Positionierung gegen Lockangebote).",
            bmc_kundenbeziehung: "Self-Service mit Fokus auf Vertrauen statt Beratung; sehr niedriger Churn (~5%/Jahr) durch hohe Kundenzufriedenheit.",
            bmc_kostenstruktur: "Geringe Komplexitätskosten durch einfaches Produktdesign; kaum Marketingausgaben, da keine Vergleichsportal-CPA.",
            status: "aktiv",
            fallbeispiel: "Konkret sieht ein Ostrom-Kunde auf seiner Rechnung exakt vier Posten: den EPEX-Monatsdurchschnittspreis für den jeweiligen Monat, die Netzentgelte seines Netzgebiets, die staatlichen Steuern und Abgaben, und ganz am Ende eine fixe Ostrom-Marge von etwa 1 ct/kWh. Es gibt keinen Lockpreis im ersten Jahr, der im zweiten Jahr automatisch steigt, keinen Sofortbonus und keine versteckte Preisgarantie mit Fußnoten — die Rechnung sieht in Monat 1 und in Monat 25 nach demselben Schema aus. Das mag im direkten Vergleich auf Check24 gegen ein Lockangebot eines Discounters teurer wirken, erzeugt aber laut Ostrom eine sehr loyale Kundenbasis: Die Kündigungsquote liegt bei rund 5% pro Jahr statt der 20–30%, die viele Lockangebot-Anbieter sehen, weil sich Kunden, die einmal verstanden haben, wie sich ihr Preis zusammensetzt, kaum noch von einem neuen Lockangebot eines anderen Anbieters überzeugen lassen.",
            radar: { regulierung:1, skalierbarkeit:4, marktrisiko:2, digitalisierung:3, wettbewerb:4, nachhaltigkeit:3 },
            erloesTyp: "Merchant", akteure: ["Ostrom"]
          },
          {
            id: "L3-VERTRIEB-NEO-04", title: "aWATTar – Stundentarif für DIY-Automatisierer",
            angreifbarkeit: "First Mover ohne Skalenschutz: Das reine Pass-Through-Modell hat keine strukturelle Marge, aus der Wachstum finanziert werden könnte, und die DIY-Zielgruppe wird von komfortableren Automatisierungs-Ökosystemen (Tibber, HEMS-Plattformen) aufgesogen. §41a macht den Stundentarif zum Commodity-Feature — die offene API bleibt als Differenzierung, ist aber für jeden Wettbewerber replizierbar.",
            definition: "aWATTar (2012, Österreich; Deutschland ab 2017) war DACH-Pionier des dynamischen Stundentarifs. Kunden zahlen exakt den stündlichen EPEX-Spot + fixe Aufschläge (Netzentgelte, Abgaben + ~0,3 ct/kWh). Alleinstellungsmerkmal: öffentliche API – Preise 24h im Voraus kostenlos verfügbar. Entwickler-Community baut Home-Assistant-, ioBroker-, openHAB-Integrationen. Explizit keine eigene App – maximale Offenheit, keine Vendor-Lock-in.",
            wertschoepfung: "Sehr niedrige Betriebskosten durch Community-Support statt Call Center. Open-API-Ansatz generiert organisches Wachstum ohne Marketing-Budget. Unterschied zu Tibber: kein Abo-Erlös, kein proprietäres Ökosystem – reine Software-als-Infrastruktur-Philosophie.",
            herausforderungen: "Kein Abo-Erlös: Skalierung nur durch höheres Volumen. DIY-Techniker-Zielgruppe ist per Definition begrenzt. Tibber hat aWATTar durch stärkeres Marketing und Ökosystem überholt. Frage der strategischen Weiterentwicklung: Nischenprodukt bleiben oder expandieren?",
            ausblick: "Mit vollständigem Smart-Meter-Rollout entsteht echter Massenmarkt für Stundentarife. §41a EnWG zwingt alle großen Versorger, dynamische Tarife anzubieten – aWATTar-Modell wird Standard. Frage: Wird aWATTar zum Infrastrukturanbieter für andere Lieferanten?",
            erloesmodell: "Fixer Aufschlag (ct/kWh) auf stündliche EPEX-Spotpreise",
            regulierung: "EnWG §41a, MsbG (Smart Meter als Enabler)",
            kundensegment: "B2C Entwickler, DIY-Automatisierer, Smart-Home-Enthusiasten",
            differenzierung: "Open API, keine Vendor-Lock-in, maximale Transparenz, Entwickler-Community",
            bmc_kanaele: "Öffentliche API als Hauptkanal statt eigener App; Entwickler-Community (Home-Assistant, ioBroker, openHAB) als organischer Distributionskanal.",
            bmc_kundenbeziehung: "Community-Support statt Call Center; keine Abo-Bindung, Beziehung basiert auf technischer Offenheit ohne Vendor-Lock-in.",
            bmc_kostenstruktur: "Sehr niedrige Betriebskosten durch Community-getriebenen Support; keine App-Entwicklungskosten, da kein eigenes Frontend.",
            fallbeispiel: "Konkret nutzt ein technikaffiner aWATTar-Kunde die öffentliche API so: Er hat seine Waschmaschine über eine selbstgebaute Home-Assistant-Automatisierung mit dem stündlichen Strompreis verknüpft, der 24 Stunden im Voraus kostenlos über die API abrufbar ist. Die Automatisierung startet die Maschine automatisch in der günstigsten verfügbaren Stunde des Tages, ganz ohne App von aWATTar — die Logik läuft komplett auf der eigenen Smart-Home-Installation des Kunden. Für aWATTar bedeutet das: Es gibt keine eigene App zu entwickeln und zu pflegen, keinen Kundenservice für Automatisierungsfragen, weil die Entwickler-Community in Foren wie Home-Assistant oder ioBroker diese Unterstützung untereinander leistet. Der Erlös bleibt simpel — ein fixer Aufschlag von wenigen Cent pro kWh auf den stündlichen Spotpreis — aber genau diese Schlankheit erlaubt es aWATTar, mit einem Bruchteil der Betriebskosten von Tibber zu operieren, solange das Zielsegment auf technisch versierte Nutzer begrenzt bleibt.",
            status: "aktiv",
            radar: { regulierung:1, skalierbarkeit:4, marktrisiko:2, digitalisierung:5, wettbewerb:3, nachhaltigkeit:3 },
            erloesTyp: "Merchant", akteure: ["aWATTar"]
          },
          {
            id: "L3-VERTRIEB-NEO-05", title: "Octopus Energy – Tech-Versorger mit Kraken-Plattform",
            angreifbarkeit: "Das Wachstumsmodell hängt an einem strukturellen Kostenvorteil, der zur Ware wird: Octopus lizenziert seine eigene Waffe — die Kraken-Plattform — an Wettbewerber wie E.ON und EDF, die damit denselben Cost-to-Serve-Vorteil aufbauen können. In Deutschland kommt die Wechselkultur der Vergleichsportale hinzu: aggressiv akquirierte Kunden sind ebenso schnell wieder weg, wenn ein Anbieter unterbietet. Und §41a macht dynamische Tarife zur Pflichtausstattung aller Lieferanten — der Produktvorsprung schmilzt, verteidigungsfähig bleiben Betriebskostenvorteil und Marke.",
            definition: "Octopus Energy (2016, UK; Deutschland seit 2020, Sitz München) ist der am schnellsten wachsende Energieversorger Europas — in Deutschland wurde im September 2025 die Marke von 1 Mio. Kunden überschritten (Verdopplung binnen zwölf Monaten). Der Kern des Modells ist nicht der Tarif, sondern die selbst entwickelte Plattform Kraken: ein cloudbasiertes Versorger-Kernsystem (Abrechnung, CRM, Marktkommunikation, Gerätesteuerung), das den Cost-to-Serve drastisch senkt. Produktseite: dynamicOctopus (EPEX-Spotpreise im 15-Minuten-Raster, Finanztip-Empfehlung April 2026), Octopus Heat (Wärmepumpen-Tarif mit täglich 8 günstigen Stunden inkl. Smart-Meter-Installation) und Intelligent Octopus Go (EV-Laden). Kraken wird parallel an Wettbewerber lizenziert (u.a. EDF, E.ON Next, Origin, Tokyo Gas) und wird Mitte 2026 als eigenständiges Unternehmen abgespalten (Bewertung ~8,65 Mrd. $).[[Q:kraken-spinoff]]",
            wertschoepfung: "Der Hebel ist der Betriebskostenvorteil: Kraken automatisiert Prozesse, für die klassische Versorger auf Alt-IT (SAP IS-U u.ä.) ein Vielfaches an Personal brauchen — ein Service-Agent betreut deutlich mehr Kunden, Abrechnungsfehler sinken. Diese Kostenbasis erlaubt aggressive Tarife bei dennoch positiver Marge, was Wachstum treibt, das wiederum die Skaleneffekte verstärkt (Flywheel). Zweite Erlösschicht: Bundles um Wärmepumpe und EV binden margenstärkere Kunden mit steuerbaren Assets, deren Flexibilität Octopus zusätzlich vermarkten kann.",
            herausforderungen: "Hyperwachstum belastet Servicequalität und Marge — die Retail-Marge je Kunde ist bewusst dünn kalkuliert. Der deutsche Smart-Meter-Rollout limitiert das Kernprodukt: dynamische Tarife setzen ein iMSys voraus, das viele Haushalte noch nicht haben. Der Kraken-Spin-off trennt zudem Technologie und Vertrieb — Octopus Retail wird zum (Anker-)Kunden seiner früheren Tochter, mit 13,7% Restbeteiligung.",
            ausblick: "In Deutschland strebt Octopus weiteres Verdopplungswachstum an und integriert Wärme (Octopus Heat inkl. übernommener Installation) und Mobilität tiefer ins Produkt. Der Kraken-Spin-off (geplant Mitte 2026, ~1 Mrd. $ Raise) macht sichtbar, dass der Unternehmenswert stärker in der Software als im Energievertrieb liegt — ein Signal, das den gesamten Retail-Markt in Richtung Plattform-Ökonomie schiebt.",
            erloesmodell: "Retail Margin + Bundles (Wärme, EV) + Flexibilitätsvermarktung; Kraken-Lizenzerlöse (bis Spin-off)",
            regulierung: "EnWG §41a (dynamische Tarife), MsbG (Smart Meter), GEG (Wärmepumpen-Bundle)",
            kundensegment: "B2C Massenmarkt mit Fokus auf wechselbereite, digitalaffine Haushalte; Prosumer mit WP/EV",
            differenzierung: "Cost-to-Serve-Vorteil durch Kraken, Preisaggressivität, Marken-/Service-Reputation, Bundles",
            bmc_kanaele: "Direktvertrieb über Website/App und Vergleichsportale; Wärmepumpen-Vertrieb inkl. Installationsabwicklung als eigener Kanal.",
            bmc_kundenbeziehung: "App-basierter Self-Service mit bewusst persönlichem Support-Ton ('Octopus-Kultur'); Bindung über Bundles und steuerbare Geräte statt Vertragslaufzeiten.",
            bmc_kostenstruktur: "Energiebeschaffung als größter variabler Block; strukturell niedrige Servicekosten durch Kraken-Automatisierung; CAC für aggressives Wachstum (Portale, Marketing).",
            fallbeispiel: "Konkret zeigt sich der Plattformvorteil an der Abrechnung: Bei einem klassischen Versorger mit Alt-IT löst ein Umzug mit Zählerwechsel und Abschlagsanpassung oft mehrere manuelle Bearbeitungsschritte in getrennten Systemen aus — bei Octopus läuft derselbe Vorgang in Kraken als ein durchgängiger, weitgehend automatisierter Prozess, den ein Service-Agent nur im Ausnahmefall anfasst. Dadurch kann ein Agent ein Mehrfaches der Kunden betreuen, die bei einem Incumbent auf einen Sachbearbeiter kommen. Diese eingesparten Betriebskosten investiert Octopus in den Preis: Der Tarif kann unter dem des Incumbents liegen und trotzdem dieselbe Marge tragen. In Deutschland hat genau diese Mechanik das Wachstum von rund 500.000 auf über 1 Mio. Kunden binnen zwölf Monaten (bis Sept. 2025) finanziert. Die zweite Pointe: Dieselbe Plattform wird an Wettbewerber lizenziert — E.ON Next in UK betreibt Millionen Kunden auf Kraken. Octopus verdient damit doppelt: einmal als Versorger am eigenen Kostenvorteil, einmal als Softwareanbieter an der Modernisierungsnot der anderen.[[Q:kraken-spinoff]]",
            status: "aktiv",
            radar: { regulierung:1, skalierbarkeit:5, marktrisiko:2, digitalisierung:5, wettbewerb:4, nachhaltigkeit:4 },
            erloesTyp: "Merchant", akteure: ["Octopus Energy"]
          }
        ]
      },
      {
        id: "L2-VERTRIEB-OEKO", title: "Ökostrom-Spezialisten & Genossenschaften",
        description: "Glaubwürdigkeit, Herkunft und Gemeinschaft als primäre Differenzierungsmerkmale.",
        actors: ["Naturstrom AG","EWS Schönau","Green Planet Energy","LichtBlick (Eneco)","BürgerEnergie Berlin"],
        items: [
          {
            id: "L3-VERTRIEB-OEKO-01", title: "Premium-Ökostrom mit Zusatzkriterien",
            angreifbarkeit: "Das Premium-Segment wird von zwei Seiten zusammengedrückt: Massen-HKN-Ökostrom der Konzerne verwässert die Kategorie preislich, während Neolieferanten mit CO₂-Apps und dynamischen Tarifen das 'moderne grüne' Kundensegment abziehen. Verteidigungsfähig bleibt der strenge Neuanlagen-Standard — aber nur, solange Kunden den Unterschied verstehen; genau diese Erklärlast ist die Achillesferse.",
            definition: "Naturstrom AG und Green Planet Energy (ex Greenpeace Energy) verfolgen strikten Ökostrom-Standard: (1) Direktlieferverträge ausschließlich mit Neuanlagen (max. 10 Jahre alt) – keine HKN von 30-Jahre-alten Wasserkraftwerken. (2) Konzernunabhängigkeit: kein Atom/Kohle-Strom im Mutterkonzern. (3) Ausbauförderung: Teil des Erlöses fließt in neue EE-Anlagen. Diese Kriterien schließen alle großen Versorger strukturell aus. Naturstrom: ~200.000 Kunden bundesweit. Größter Player des Segments ist LichtBlick (Hamburg, 1998 als Ökostrom-Pionier gestartet, seit 2018 Tochter des niederländischen Versorgers Eneco): mit ~1,7 Mio. Verträgen unter den fünf größten Stromlieferanten Deutschlands — zeigt, dass Ökostrom-Spezialisierung auch im Massenmarkt skaliert, allerdings mit weicheren Beschaffungskriterien als Naturstrom/EWS.",
            wertschoepfung: "Glaubwürdigkeitsprämie: Kunden zahlen 1–3 ct/kWh mehr als für Standard-Ökostrom. Strukturell niedriger Churn (<5%/Jahr). Direktlieferverträge mit EE-Anlagen sind proprietäres Asset – nicht kopierbar. 24/7-CFE-Standard als nächste Differenzierungsstufe: stündliches Matching von Verbrauch und Erzeugung.",
            herausforderungen: "HKN-System ermöglicht Greenwashing durch Großkonzerne – Vertrauensverlust im Gesamtmarkt schadet auch seriösen Anbietern. Kommunikationskomplexität: Warum ist Naturstrom besser als E.ON Ökopower? Schwer zu erklären in 30 Sekunden. Nischenmarkt begrenzt Skalierung.",
            ausblick: "CSRD-Anforderungen an Scope-2-Emissionen schaffen B2B-Markt für High-Integrity Ökostrom. 24/7 CFE wird sich als Standard durchsetzen (Google/Microsoft als Treiber). Naturstrom und Green Planet Energy gut positioniert für diesen Standard.",
            erloesmodell: "Retail Margin + Nachhaltigkeits-Premium (1–3 ct/kWh über Standard-Ökostrom)",
            regulierung: "EnWG §42 (Stromkennzeichnung), RECS/HKN, EU RED III",
            kundensegment: "B2C werteorientierte Privatkunden; B2B KMU mit ESG-Anforderungen",
            differenzierung: "Direktlieferverträge (Neuanlagen), Konzernunabhängigkeit, Impact-Transparenz",
            bmc_kanaele: "Direktvertrieb über eigene Website und Mitgliedernetzwerk; kaum Vergleichsportal-Präsenz wegen Premium-Positionierung.",
            bmc_kundenbeziehung: "Hohe Glaubwürdigkeit und werteorientierte Bindung; sehr niedriger Churn (<5%/Jahr) durch Identifikation mit der Ökostrom-Mission.",
            bmc_kostenstruktur: "Direktlieferverträge mit Neuanlagen als teurerer Beschaffungskostenblock (vs. Standard-HKN), dazu Ausbauförderung-Rückstellungen.",
            fallbeispiel: "Konkret unterscheidet sich Naturstrom von einem Konzern-Ökotarif so: Naturstrom schließt einen Direktliefervertrag mit einer maximal 10 Jahre alten Solaranlage ab und bezieht den physischen Strom (über die Bilanzkreislogik) tatsächlich aus dieser Quelle, statt nur ein günstiges HKN-Zertifikat von einem alten, ohnehin längst abgeschriebenen Wasserkraftwerk zuzukaufen. Das kostet Naturstrom in der Beschaffung mehr, weil Neuanlagen-Strom teurer ist als der Massenmarkt für Altanlagen-HKN — diesen Mehrpreis von 1–3 ct/kWh gibt Naturstrom an den Kunden weiter, der dafür einen nachvollziehbaren Unterschied bekommt: Sein Vertrag finanziert nachweislich eine Anlage, die ohne diesen Liefervertrag in dieser Form nicht gebaut worden wäre. Der Kommunikationsaufwand, diesen Unterschied gegenüber einem 'auch irgendwie grünen' E.ON-Tarif zu erklären, ist genau deshalb hoch — der Unterschied liegt nicht im physisch gelieferten Strom (der ist bei allen Anbietern Mix aus dem Netz), sondern im vertraglichen Beschaffungsmechanismus dahinter.",
            status: "aktiv",
            radar: { regulierung:1, skalierbarkeit:3, marktrisiko:2, digitalisierung:2, wettbewerb:3, nachhaltigkeit:5 },
            erloesTyp: "Merchant", akteure: ["Naturstrom AG","Green Planet Energy","EWS Schönau","LichtBlick (Eneco)"]
          }
        ]
      },
      {
        id: "L2-VERTRIEB-STADTWERK", title: "Stadtwerke & regionale Versorger",
        description: "Das Rückgrat der deutschen Energieversorgung – strukturell stark, unter digitalem Transformationsdruck.",
        actors: ["SWM","ENTEGA","badenova","enercity","Stadtwerke Köln"],
        items: [
          {
            id: "L3-VERTRIEB-STADTWERK-01", title: "Kommunales Mehrsparten-Modell",
            angreifbarkeit: "Die träge, loyale Kundenbasis ist das Angriffsziel schlechthin: Vergleichsportale und Neolieferanten picken die wechselwilligen, margenstärksten Kunden heraus (Rosinenpicken), während ÖPNV-Defizite und IT-Altlasten die Reaktionsfähigkeit binden. Der Querverbund trägt nur, solange die Energiemarge die Verluste finanziert — White-Label-Plattformen bieten Stadtwerken zwar Rettung, verschieben die Wertschöpfung aber zum Plattformanbieter.",
            definition: "Stadtwerke sind die institutionelle Besonderheit der deutschen Energieversorgung: kommunale Unternehmen, die Strom, Gas, Wärme, Wasser und oft ÖPNV aus einer Hand liefern. Finanzierungslogik: profitable Energie-/Netzsparten quersubventionieren defizitären ÖPNV (steuerlich optimiert via Querverbund §4 Abs. 6 KStG). SWM: >7 Mrd. € Umsatz, 10.000 Mitarbeiter, betreiben U-Bahn + Hallenbäder + Kraftwerke. Lokale Kundenbindung durch 30–50 Jahre Kundenbeziehungen und kommunale Identität.",
            wertschoepfung: "Struktureller Vorteil: Querverbund + kommunale Bürgschaft senken Kapitalkosten. Wechselquote deutlich niedriger als bei nicht-kommunalen Versorgern. Wärmenetz als wachsendes Alleinstellungsmerkmal (WPG schützt Fernwärme-Investitionen). Daten: vollständige lokale Energie-/Mobilitäts-/Wasserdaten als Basis für Smart-City-Angebote.",
            herausforderungen: "Entscheidungsprozesse durch Aufsichtsrat, Gemeinderat, Gesellschafterversammlung strukturell langsam. ÖPNV-Defizite wachsen (Corona-Nachwirkungen, Investitionsstau). IT-Altlasten: SAP IS-U, selbstentwickelte Systeme. §41a-Pflicht (dynamische Tarife) erfordert vollständige IT-Erneuerung.",
            ausblick: "Stadtwerke werden zu 'lokalen Energiehubs': WPG-Wärmeplanung, Ladeinfrastruktur, PV-Pachtmodelle, HEMS-Integration. Konsolidierung unvermeidlich: 900+ Stadtwerke werden auf 200–300 bis 2040 konsolidieren. Digitale Transformation als Überlebensfrage der mittelgroßen Stadtwerke.",
            erloesmodell: "Multi-Sparten-Bundling; Quersubvention ÖPNV ↔ Energie (§4 Abs. 6 KStG)",
            regulierung: "EnWG, GemO der Bundesländer, §102 GemO, KStG §4 Abs. 6",
            kundensegment: "B2C lokal + B2B Gewerbe + kommunale Einrichtungen",
            differenzierung: "Lokale Identität, Full-Service (Strom/Gas/Wärme/Wasser), Wärmenetz, ÖPNV",
            bmc_kanaele: "Lokales Vertriebsnetz, Kundenbüros, regionale Marke; zunehmend Online-/App-Kanäle für Smart-City-Angebote.",
            bmc_kundenbeziehung: "Sehr langfristige (30–50 Jahre), durch kommunale Identität geprägte Kundenbindung; strukturell niedrige Wechselquote.",
            bmc_kostenstruktur: "Multi-Sparten-Betriebskosten (Strom/Gas/Wärme/Wasser/ÖPNV) mit Querverbund-Quersubvention; hohe IT-Legacy-Kosten (SAP IS-U).",
            fallbeispiel: "Konkret funktioniert der Querverbund bei SWM so: Die profitablen Sparten Strom-, Gas- und Fernwärmenetz erzielen stabile Überschüsse, die steuerlich über §4 Abs. 6 KStG mit den laufenden Verlusten der Münchner U-Bahn und Tram verrechnet werden dürfen — ein eigenständiges privates ÖPNV-Unternehmen könnte diese Verluste steuerlich nicht in gleicher Weise mit Gewinnen aus einem komplett anderen Geschäftsfeld verrechnen. Für den Energiekunden bedeutet das im Alltag wenig Sichtbares, aber strukturell viel: Die Investitionsentscheidung, ob SWM Geld in ein neues Fernwärmenetz oder in zusätzliche Tram-Linien steckt, wird nicht von zwei getrennten, konkurrierenden Unternehmen getroffen, sondern intern im selben Konzern abgewogen — mit dem politischen Stadtrat als letzter Entscheidungsinstanz. Genau diese Verschränkung erklärt, warum sich SWM eine 100%ige Geothermie-Fernwärme-Strategie bis 2040 leisten kann, die ein rein gewinnorientierter privater Wärmenetzbetreiber so kaum querfinanzieren würde.",
            status: "aktiv",
            radar: { regulierung:3, skalierbarkeit:2, marktrisiko:2, digitalisierung:2, wettbewerb:2, nachhaltigkeit:3 },
            erloesTyp: "Merchant", akteure: ["SWM","enercity","Stadtwerke Köln","badenova","ENTEGA"]
          }
        ]
      }
    ]
  },

  // ══════════════════════════════════════════════════════════
  // L1: AGGREGATION & FLEXIBILITÄT
  // ══════════════════════════════════════════════════════════
  {
    id: "L1-AGG", title: "Aggregation & Flexibilität", icon: "🔋", color: "#06B6D4",
    description: "Softwaregetriebene Bündelung dezentraler Ressourcen – eines der am schnellsten wachsenden Segmente.",
    capabilities: [
      {
        id: "L2-AGG-VPP", title: "Virtual Power Plants (VPP)",
        description: "Aggregation von EE-Anlagen, Speichern und flexiblen Lasten zu virtuellen Kraftwerken.",
        actors: ["Next Kraftwerke (Shell)","Sonnen (Shell)","Enspired","Sympower","Statkraft","Entrix","terralayr"],
        items: [
          {
            id: "L3-AGG-VPP-01", title: "EE-Direktvermarktungs-VPP",
            definition: "Next Kraftwerke (2009, seit 2021 Shell)[[Q:next-shell]]: >14 GW in 17 Ländern – europäischer Marktführer. Technologiebasis: Proprietäres EMS (Netlantis), 0,5 km-Wettermodell-Ensemble, ML-Prognosesystem, SCADA-Anbindung jeder Anlage. Entscheidungslogik: Stündlich wird für jede Anlage berechnet, ob Day-Ahead oder Intraday-Vermarktung optimal ist. Erlös: Managementfee (0,15–0,45 ct/kWh) + Outperformance-Split (20–40% Mehrerlös über RMW).",
            wertschoepfung: "Skalenökonomie ist fundamental: 10 GW Portfolio reduziert Prognosefehler durch Diversifikation auf ~2–3% (vs. 15–25% Einzelanlage). Outperformance von 2 €/MWh × 10 GW × 2.000 h = 40 Mio. MWh = 80 Mio. € Pool. Wechselbarriere nach SCADA-Integration hoch (Umprogrammierung, Datenmigration). Technologiekosten sinken, Margen steigen strukturell.",
            herausforderungen: "Shell-Übernahme schafft potenzielle Interessenkonflikte (Next vermarktet auch Wettbewerberanlagen). ÜNBs verbessern Referenzmarktwerte – Outperformance-Potenzial sinkt langfristig. Regulatorisches Risiko bei Direktvermarktungsmarkt-Veränderungen.",
            ausblick: "VPP 2.0: EE + Speicher + H2-Elektrolyse-Steuerung + Demand Response + V2G als integriertes Portfolio. Europäische Optimierung über Ländergrenzen (unterschiedliche Markpreise) schafft neue Arbitrage. KI-Echtzeit-Optimierung als nächster Entwicklungsschritt.",
            angreifbarkeit: "Konzentriertes Geschäft (Next Kraftwerke/RWE als Marktführer) ist von zwei Seiten exponiert: ÜNB verbessern laufend die Referenzmarktwerte, wodurch das Outperformance-Potenzial vom Regulierer selbst schrittweise wegreguliert wird; gleichzeitig können große Anlagenbetreiber bei wachsendem Portfolio eigene Direktvermarktung aufbauen (Insourcing-Risiko) statt Managementfee zu zahlen. Die Shell-Konzernzugehörigkeit von Next Kraftwerke schafft zudem eine Interessenkonflikt-Angriffsfläche, die unabhängige Wettbewerber (Statkraft, Enspired) im Pitch um konzernfremde Anlagen gezielt nutzen.",
            erloesmodell: "Direktvermarktungsfee (ct/kWh) + Outperformance-Share",
            regulierung: "EEG §21b, MaBiS, REMIT, regelleistung.net",
            kundensegment: "EE-Anlagenbetreiber (B2B), Projektentwickler",
            differenzierung: "Portfoliogröße (Skaleneffekte), ML-Prognosegüte, SCADA-Tiefe, Reaktionsgeschwindigkeit",
            bmc_kanaele: "B2B-Direktvertrieb an EE-Anlagenbetreiber und Projektentwickler; SCADA-Anbindung als technischer Integrationskanal.",
            bmc_kundenbeziehung: "Langfristige Vermarktungsverträge mit hoher Wechselhürde nach SCADA-Integration (Umprogrammierung, Datenmigration nötig).",
            bmc_kostenstruktur: "Proprietäres EMS (Netlantis) und ML-Wettermodelle als zentrale Technologiekosten; SCADA-Anbindung pro Anlage als variable Kosten.",
            fallbeispiel: "Konkret funktioniert die Vermarktung über Next Kraftwerke so: Für jede angeschlossene Anlage entscheidet das System stündlich neu, ob die Einspeisung über den Day-Ahead-Markt (Preise werden einen Tag vorher fixiert) oder den Intraday-Markt (Preise schwanken bis kurz vor Lieferung) verkauft wird — je nachdem, wo der höhere Erlös erwartet wird. Bei einem 10-GW-Portfolio kann diese laufende Umverteilung gegenüber starrer Day-Ahead-Vermarktung einen Mehrerlös von rund 2 €/MWh erzielen — hochgerechnet auf rund 80 Mio. € pro Jahr, die zwischen Next Kraftwerke (Outperformance-Share von 20–40%) und den Anlagenbetreibern aufgeteilt werden. Zusätzlich zahlt jede Anlage unabhängig vom Ergebnis eine feste Managementfee von 0,15–0,45 ct/kWh. Der Hebel liegt in der Portfoliogröße: Eine einzelne Windturbine oder Biogasanlage hat einen Prognosefehler von 15–25%, im Bündel mit Tausenden anderen Anlagen sinkt er auf 2–3% — und genau dieser Diversifikationseffekt, nicht die einzelne Anlage, ist das eigentlich verkaufte Produkt. Deshalb lohnt sich der Beitritt zum Portfolio für den einzelnen Anlagenbetreiber selbst dann, wenn er die Fee als Kosten empfindet: Allein würde er strukturell schlechter prognostizieren und vermarkten.",
            status: "aktiv",
            radar: { regulierung:2, skalierbarkeit:5, marktrisiko:2, digitalisierung:5, wettbewerb:3, nachhaltigkeit:4 },
            erloesTyp: "Fee-based", akteure: ["Next Kraftwerke (Shell)","Statkraft","Axpo","BKW","Vattenfall"]
          },
          {
            id: "L3-AGG-VPP-02", title: "Demand-Response-Aggregation (Industrie)",
            angreifbarkeit: "Der Aggregator ist verzichtbar, sobald der Industriekunde selbst marktfähig ist: Energieintensive Unternehmen bauen eigene Flex-Desks auf oder lassen die Vermarktung von ihrem Lieferanten/Contractor mitbündeln. Gleichzeitig drücken VPP-Software-Angebote die Vermittlungsmarge — verteidigungsfähig ist die Präqualifikations- und Prozesskompetenz, nicht der bloße Marktzugang.",
            definition: "Industrielle Lasten (Elektrolyseure, Aluminiumschmelzen, Chloralkali-Elektrolyse, Kühlhäuser, Rechenzentren) werden flexibilisiert und als virtuelles Regelenergie-Asset am Markt angeboten. Unabhängiger Aggregator (EU Clean Energy Package SOGL Art. 182) kann Regelenergie verkaufen ohne Energielieferant zu sein. Schema: Industriekunde signalisiert 'Ich kann in 5 Minuten 10 MW reduzieren' → Aggregator präqualifiziert für aFRR-Down → bei ÜNB-Aktivierung wird Last reduziert → Revenue-Share.",
            wertschoepfung: "Industriekunde erhält Zusatzerlös für Flexibilität, die er ohnehin hat. Aggregator verdient Revenue-Share (20–40%) ohne eigene Asset-Investition. Einzige Investition: Steuerungssoftware + SCADA-Anbindung. Skalierung durch mehr Industriekunden ist margenkonstant.",
            herausforderungen: "Industriekunden zögern wegen Produktionsunterbrechung – Reliability-Nachweis >99% der Präqualifikationsstunden nötig. Technische Anbindung (SPS, ERP) bei jedem Kunden individuell. Deutschland noch restriktiver als andere EU-Länder bei unabhängigen Aggregatoren. aFRR-Marktzugang erfordert aufwendige Präqualifikation.",
            ausblick: "Markt wächst durch steigendes aFRR/mFRR-Volumen (mehr Regelenergiebedarf durch EE) und Industrieflexibilisierung. H2-Elektrolyse als perfekter Demand-Response-Asset: kann in Sekunden hoch- oder runterregeln, ideal für FCR/aFRR. §64-EEG-Reform fördert Lastflexibilität energieintensiver Industrien.",
            erloesmodell: "Revenue-Share (40–80% der Regelenergiemärkte) mit Industriekunden",
            regulierung: "SOGL Art. 182 (unabhängige Aggregatoren), EnWG §12g, regelleistung.net",
            kundensegment: "B2B Industrie (Chemie, Metall, Papier, Rechenzentren)",
            differenzierung: "Reaktionszeit, Industriekunden-Portfolio, SCADA-Anbindungstiefe, Präqualifikationszuverlässigkeit",
            bmc_kanaele: "B2B-Direktvertrieb an Industriekunden (Chemie, Metall, Rechenzentren); Präqualifikation bei ÜNB als regulatorischer Marktzugangskanal.",
            bmc_kundenbeziehung: "Individuelle technische Anbindung (SPS/ERP) pro Kunde; Vertrauensbeziehung über Reliability-Nachweis (>99% Präqualifikationsstunden).",
            bmc_kostenstruktur: "Steuerungssoftware und SCADA-Anbindung pro Kunde als Hauptkosten; keine eigene Asset-Investition dank Revenue-Share-Modell.",
            fallbeispiel: "Konkret läuft ein Abruf bei einem Sympower-Industriekunden so ab: Eine Aluminiumschmelze hat sich präqualifizieren lassen, innerhalb von 5 Minuten 10 MW Last reduzieren zu können, indem ein Teil der Elektrolysezellen kurzzeitig gedrosselt wird, ohne den Produktionsprozess zu beschädigen. Meldet der ÜNB einen aFRR-Down-Bedarf, sendet Sympower automatisch ein Steuersignal an die Anlage, die Last sinkt für die angeforderte Dauer, und der ÜNB zahlt den vereinbarten Abrufpreis. Sympower selbst hat in diese 10 MW keinen Cent investiert — die Flexibilität existierte in der Fabrik bereits, nur ungenutzt — und behält als Gegenleistung für Steuerungssoftware und Vermarktung einen Revenue-Share von 20–40% der Erlöse, der Rest geht an den Industriekunden. Der eigentliche Engpass ist nicht die Technik, sondern das Vertrauen: Ein Industriekunde lässt einen Dritten nur dann auf seine Produktionslast zugreifen, wenn die Zuverlässigkeit über viele Abrufe hinweg nachweislich über 99% liegt — ein einziger Fehlabruf mit Produktionsschaden würde die Kundenbeziehung beenden.",
            status: "aktiv",
            radar: { regulierung:2, skalierbarkeit:4, marktrisiko:2, digitalisierung:5, wettbewerb:2, nachhaltigkeit:3 },
            erloesTyp: "Fee-based", akteure: ["Sympower","Enspired","E.ON Demand Response","VOLTARIS"]
          },
          {
            id: "L3-AGG-VPP-03", title: "Batteriespeicher-Optimierung & Route-to-Market",
            angreifbarkeit: "Der Optimierer lebt von einem Vorsprung, der laufend schrumpft: Je mehr BESS ans Netz gehen, desto flacher werden die Spreads, aus denen die Outperformance stammt — der Markt kannibalisiert die eigene Erlösbasis. Gleichzeitig drängen etablierte Direktvermarkter (Next Kraftwerke, Statkraft) und Asset-Eigentümer mit eigenem Trading-Desk ins Segment, und Plattformmodelle wie terralayrs 'Enhanced Trading of Flexibility' machen Optimierer parallel austauschbar — wer nur durchschnittliche Algorithmik liefert, wird im laufenden Benchmarking aussortiert.",
            definition: "Asset-leichte Spezialisten übernehmen die Vermarktung fremder Großbatteriespeicher: KI-gestützte Multimarkt-Optimierung über Day-Ahead, Intraday, FCR und aFRR, abgerechnet als Fee plus Erlösbeteiligung — oder als Tolling/Floor-Struktur, bei der der Optimierer dem Asset-Eigentümer einen Festpreis bzw. Mindesterlös garantiert und das Marktrisiko selbst trägt. Akteure: Entrix (München), Enspired (Wien), Habitat Energy, terralayr (aggregiert eigene und fremde Speicher über die LAYR-Plattform). Projektentwickler wie Kyon Energy (>7 GW Pipeline) schließen Rahmenverträge mit mehreren Optimierern parallel, statt selbst Handelskompetenz aufzubauen.",
            wertschoepfung: "Die Marge liegt im Algorithmus, nicht im Asset: Zwei baugleiche Speicher können je nach Optimierungsgüte 30–50% auseinanderliegende Jahreserlöse erzielen — genau diese Differenz teilt sich der Optimierer mit dem Eigentümer, ohne einen Euro Capex. Floor-/Tolling-Produkte schaffen eine zweite Wertschicht: Sie machen BESS-Projekte bankable (Fremdkapitalgeber verlangen gesicherte Mindesterlöse) und verlagern das Merchant-Risiko zu dem Akteur, der es am besten bepreisen kann. Skalierung ist nahezu grenzkostenfrei: mehr MW unter Management, gleiche Plattform.",
            herausforderungen: "Erlöskannibalisierung durch BESS-Zubau ist strukturell — die FCR- und Arbitrage-Spreads von 2023/24 sind kein verlässlicher Business Case für 2030. Performance ist schwer verifizierbar: Asset-Eigentümer können Optimierer kaum objektiv vergleichen (unterschiedliche Anlagen, Zeiträume, Marktphasen). Tolling-Strukturen binden die eigene Bilanz an Marktrisiken, die das asset-leichte Modell eigentlich vermeiden wollte.",
            ausblick: "Das Segment konsolidiert sich entlang zweier Linien: Optimierer mit nachweisbarer Outperformance wachsen in Tolling-/Portfoliomodelle mit eigener Risikoübernahme hinein, der Rest wird zum austauschbaren Backend von Plattformen (terralayr-ETF: mehrere Optimierer parallel auf demselben Speicher, dynamische Kapazitätszuteilung). Der kommende Kapazitätsmarkt (ab 2032) fügt einen planbaren Erlösstrom hinzu und macht Speicher-Portfolios noch stärker zum Finanzprodukt — die Grenze zwischen Optimierer, Aggregator und Asset-Manager verschwimmt.",
            erloesmodell: "Managementfee + Outperformance-Share; alternativ Tolling/Floor (Festpreis für Kapazität, Marktrisiko beim Optimierer)",
            regulierung: "EnWG §118 (Speicherprivilegien), SOGL Präqualifikation, REMIT, regelleistung.net",
            kundensegment: "B2B Asset-Eigentümer: BESS-Projektentwickler, Infrastrukturfonds, Stadtwerke mit Speicherprojekten",
            differenzierung: "Algorithmische Outperformance (Multi-Market-Stacking), Risikotragfähigkeit für Tolling/Floors, Track Record als Bankability-Nachweis",
            bmc_kanaele: "B2B-Direktvertrieb an Projektentwickler und Investoren; Rahmenverträge über Projektpipelines; Präqualifikation und Börsenzugang als technische Marktzugangskanäle.",
            bmc_kundenbeziehung: "Mehrjährige Vermarktungsverträge mit laufendem Erlös-Reporting; bei Tolling-Strukturen quasi-finanzielle Gegenparteibeziehung mit Bonitätsanforderungen.",
            bmc_kostenstruktur: "Trading-/Optimierungsplattform und Quant-Personal als Hauptkosten; bei Tolling zusätzlich Risikokapital-/Absicherungskosten; keine Asset-Capex.",
            fallbeispiel: "Konkret zeigt sich die Arbeitsteilung am Vorgehen von Kyon Energy: Kyon plant und baut Großspeicher (2026 u.a. drei Projekte mit zusammen 273 MW / 552 MWh), verkauft aber nicht selbst an der Börse, sondern hat Rahmenverträge mit den Optimierern Entrix und Enspired geschlossen. Für einen einzelnen 100-MW-Speicher entscheidet dann der Algorithmus des Optimierers viertelstündlich, ob die Kapazität gerade als FCR vorgehalten, im Intraday-Handel zykliert oder für aFRR geboten wird — dieselbe Stacking-Logik wie beim Eigenbetrieb, nur als Dienstleistung. Der Optimierer erhält dafür eine Fee plus einen Anteil am Mehrerlös gegenüber einer Referenzvermarktung. Die Alternative dazu ist das Tolling-Modell, wie es terralayr anbietet: Der Asset-Eigentümer bekommt einen festen Preis pro MW und Monat garantiert — planbar genug, um die Bankfinanzierung des nächsten Projekts zu sichern — und terralayr behält, was die Vermarktung darüber hinaus einspielt. Damit wandert das Merchant-Risiko vom Bauherrn zum Händler, und genau diese Risikoübernahme, nicht die Optimierung allein, wird zunehmend zum eigentlichen Produkt.",
            status: "aktiv",
            radar: { regulierung:1, skalierbarkeit:5, marktrisiko:4, digitalisierung:5, wettbewerb:4, nachhaltigkeit:4 },
            erloesTyp: "Fee-based", akteure: ["Entrix","Enspired","terralayr","Habitat Energy"]
          }
        ]
      }
    ]
  },

  // ══════════════════════════════════════════════════════════
  // L1: PROJEKTENTWICKLUNG & EPC
  // ══════════════════════════════════════════════════════════
  {
    id: "L1-PROJ", title: "Projektentwicklung & EPC", icon: "🏗️", color: "#0EA5E9",
    description: "Entwicklung, Bau und Betrieb von Energieprojekten – kapitalleichte Projektierer bis zum kapitalintensiven EPC-Contractor.",
    capabilities: [
      {
        id: "L2-PROJ-WIND", title: "Wind- & Solar-Projektentwicklung",
        description: "Develop-to-Sell und Develop-to-Own als strategische Alternativen.",
        actors: ["ABO Wind","Baywa r.e.","wpd","juwi","Encavis","Notus Energy","PNE"],
        items: [
          {
            id: "L3-PROJ-WIND-01", title: "Develop-to-Sell (Projektrechte-Handel)",
            angreifbarkeit: "Die Marge liegt in Fläche und Genehmigung — beides wird umkämpfter: Utilities und Fonds kaufen Projektpipelines im Ganzen (Forward Deals) und drücken die Einzelverkaufsmarge, während aggressive Flächensicherer (auch branchenfremde) die Pachtpreise hochbieten. WindBG-Flächenausweisungen und kommunale Beteiligungsvorgaben senken zudem die Knappheitsprämie der Alt-Pipelines.",
            definition: "Projektierer sichern Flächen (Pacht/Kauf), holen alle Genehmigungen ein (BImSchG-Genehmigung, Netzverknüpfungspunkt-Anmeldung, Artenschutzgutachten, Schall-/Schattenwurf-Gutachten) und verkaufen fertig genehmigtes Projekt an Investor. Kernasset ist die Genehmigung. Entwicklungskosten: 100.000–500.000 €/Anlage. Projektverkaufspreis bei fertiger BImSchG: 150.000–400.000 €/MW. Serienentwicklung: Know-how aus 100+ Projekten senkt Kosten je Projekt.",
            wertschoepfung: "Kapitalleichte Strategie: wenig Eigenkapital gebunden (nur Entwicklungskosten). Hebelwirkung: Flächennetzwerk × Genehmigungskompetenz = überproportionaler Erlös. Proprietäres Flächennetzwerk (10.000–50.000 ha exklusiv gepachtet) als struktureller Schutzwall gegenüber Wettbewerbern. Repowering (Austausch alter Anlagen) als wachsendes Feld.",
            herausforderungen: "BImSchG-Verfahren: 4–8 Jahre, Klagen durch Anwohner/NABU verzögern oder verhindern Projekte. Flächenwettbewerb: Bodenwert und Pachtzins steigen. Netzverknüpfungspunkte als realer Engpass. WindBG-2%-Ziel[[Q:windbg-flaeche]] verbessert Rahmenbedingungen, aber Umsetzung durch Länder stockt.",
            ausblick: "WindBG und beschleunigte BImSchG-Verfahren (EU-Notverordnung 2022/2577) senken Hürden schrittweise. Repowering dominiert mittelfristig (erste Anlagen aus 2000–2005 laufen ab 2025 aus EEG). Agri-PV und Floating-PV eröffnen neue Flächenkategorien.",
            erloesmodell: "Einmaliger Projektverkaufserlös (Development Margin: 50.000–150.000 €/MW)",
            regulierung: "BImSchG, BauGB, WindBG, EEG 2023",
            kundensegment: "Infrastrukturfonds, Energieversorger, Stadtwerke",
            differenzierung: "Flächennetzwerk, Genehmigungskompetenz, Artenschutz-Know-how, Tempo",
            bmc_kanaele: "Direktverkauf an Investoren/Infrastrukturfonds über persönliche Verhandlung — kein Massenvertrieb, sondern Einzeltransaktionen je Projekt.",
            bmc_kundenbeziehung: "Einmalige Transaktionsbeziehung pro Projekt; langfristige Reputationsbeziehung zu wiederkehrenden Käufern (Fonds, Stadtwerke) entscheidet über Folgegeschäft.",
            bmc_kostenstruktur: "Entwicklungskosten (Gutachten, Genehmigungsverfahren, Flächenpacht: 100.000–500.000 €/Anlage) als Hauptblock; Personal für Genehmigungsmanagement.",
            fallbeispiel: "Konkret sichert sich ABO Wind zunächst eine Fläche per Pachtvertrag mit dem Grundeigentümer, lässt dann ein Artenschutzgutachten, ein Schall-/Schattenwurf-Gutachten und die BImSchG-Genehmigung erstellen — ein Prozess, der über mehrere Jahre 100.000–500.000 € pro Anlage kostet, ohne dass ein einziger Windflügel sich gedreht hat. Erst mit der fertigen, rechtssicheren Genehmigung in der Hand verkauft ABO Wind das Projekt an einen Infrastrukturfonds oder Energieversorger — für 150.000–400.000 € pro MW, je nach Standortqualität und Reife. Der eigentliche Vermögenswert, der hier den Besitzer wechselt, ist nicht die Anlage (die existiert noch gar nicht), sondern das Bündel an Genehmigungen und Gutachten, das den Bau überhaupt erst erlaubt. Genau deshalb lohnt sich für ABO Wind ein großes, exklusiv gepachtetes Flächennetzwerk: Jede zusätzliche Fläche ist eine Option auf ein zukünftiges Genehmigungsverfahren, die Konkurrenten nicht mehr offensteht.",
            status: "aktiv",
            radar: { regulierung:2, skalierbarkeit:2, marktrisiko:3, digitalisierung:2, wettbewerb:4, nachhaltigkeit:5 },
            erloesTyp: "Fee-based", akteure: ["ABO Wind","wpd","juwi","PNE","Notus Energy"]
          },
          {
            id: "L3-PROJ-EPC-01", title: "EPC-Contractor & O&M-Dienstleistungen",
            angreifbarkeit: "EPC: Herstellergebundene Full-Service-Verträge und modulare Vergabe (Multi-Contracting mit Owner's Engineer) greifen das Totalunternehmer-Modell von beiden Seiten an. O&M: Datengetriebene Drittanbieter mit Predictive Maintenance unterbieten die Hersteller-Wartung, während große Betreiber O&M insourcen — die Marge verteidigt, wer Verfügbarkeitsgarantien mit eigener Ersatzteillogistik unterlegen kann.",
            definition: "EPC (Lump Sum Turnkey): Totalunternehmer übernimmt gesamte Projektrealisierung zu Festpreis. Risiken: Baukosten-Überschreitung, Lieferkette, Termintreue. Marge typisch 8–15% auf Baukosten. O&M (Operation & Maintenance): Hersteller (Siemens Gamesa Full-Service, Vestas AOM) oder unabhängige Dienstleister (Deutsche Windtechnik) übernehmen Betrieb. Full-Service-O&M garantiert Verfügbarkeit >97%, deckt alle Wartungs-/Reparaturkosten. Jährliche Pauschale: 40.000–80.000 €/Anlage (3–5 MW).",
            wertschoepfung: "EPC: Festpreis-Optimierung (günstiger einkaufen als kalkuliert), Skaleneffekte in Beschaffung, Montage-Standardisierung. O&M: 80–90% Wiederkehrumsatz, hohe Wechselhürden durch proprietäre SCADA-Systeme, wachsende installierte Basis als strukturelles Wachstum. Predictive Maintenance (KI-basierte Ausfallprognose) als Differenzierungsmerkmal.",
            herausforderungen: "EPC: Festpreisverträge in inflationärem Umfeld riskant (Siemens Gamesa-Verluste 2022–2023). Lieferkettenengpässe bei Turbinen, Transformatoren, Kabeln. O&M: Unabhängige Drittanbieter konkurrieren mit Herstellern durch niedrigere Stundensätze. Fachkräftemangel bei Servicetechnikern.",
            ausblick: "O&M-Markt wächst mit installierter Basis: 100 GW Wind Deutschland bis 2030 = ~3 Mrd. €/Jahr O&M-Marktvolumen. Datengetriebene Predictive Maintenance verbessert Verfügbarkeit. Offshore-O&M als eigenständige Sparte mit maritimen Anforderungen (CTVs, SOVs, Jack-up-Vessels).",
            erloesmodell: "EPC: Festpreis-Vertragssumme. O&M: Jahrespauschale (€/Anlage) + Performancebonus",
            regulierung: "VOB/B, FIDIC, BImSchG, CE-Kennzeichnung, IEC-Standards (IEC 61400)",
            kundensegment: "Projektentwickler, Infrastrukturfonds, Betreiber",
            differenzierung: "EPC: Lieferkettensicherheit, Termintreue. O&M: Verfügbarkeitsgarantie, Predictive Maintenance, Ersatzteillogistik",
            bmc_kanaele: "B2B-Direktvertrieb/Ausschreibungen an Projektentwickler und Investoren; O&M-Verträge oft an EPC-Auftrag gekoppelt (Cross-Selling).",
            bmc_kundenbeziehung: "EPC als einmaliger Großauftrag mit Festpreisvertrag; O&M als langfristige Wiederkehrbeziehung (80–90% Wiederkehrumsatz) mit hohen Wechselhürden durch proprietäre SCADA.",
            bmc_kostenstruktur: "EPC: Materialbeschaffung (Turbinen, Kabel, Transformatoren) als größter Block mit Lieferkettenrisiko. O&M: Servicetechniker-Personal und Ersatzteillogistik.",
            fallbeispiel: "Konkret zeigt sich der Unterschied zwischen EPC- und O&M-Geschäft an einem Windpark, den Siemens Gamesa baut und anschließend wartet: Beim EPC-Festpreisvertrag kalkuliert Siemens Gamesa die Baukosten vorab und trägt das Risiko, falls Stahl- oder Transportkosten während der Bauphase steigen — genau das ist 2022/2023 vielen Herstellern teuer zu stehen gekommen, weil Festpreise vereinbart waren, bevor die Inflation zuschlug. Nach Fertigstellung wechselt das Geschäftsmodell: Ein Full-Service-O&M-Vertrag garantiert dem Betreiber eine Verfügbarkeit von über 97% gegen eine feste Jahrespauschale von 40.000–80.000 € pro Anlage. Verbringt ein Servicetechniker weniger Zeit am Mast, weil eine Predictive-Maintenance-Software einen Lagerschaden schon Wochen vorher anhand von Vibrationsdaten erkennt, sinken die tatsächlichen Wartungskosten unter die Pauschale — die Differenz bleibt als Marge bei Siemens Gamesa, nicht beim Betreiber. Genau deshalb ist O&M mit 80–90% Wiederkehrumsatz das eigentlich attraktivere Geschäft, nicht der einmalige Bauauftrag.",
            status: "aktiv",
            radar: { regulierung:1, skalierbarkeit:4, marktrisiko:2, digitalisierung:4, wettbewerb:3, nachhaltigkeit:4 },
            erloesTyp: "Fee-based", akteure: ["Siemens Gamesa","Vestas","Enercon","Deutsche Windtechnik","Fichtner"]
          }
        ]
      }
    ]
  },

  // ══════════════════════════════════════════════════════════
  // L1: ENERGIEFINANZIERUNG & INVESTOREN
  // ══════════════════════════════════════════════════════════
  {
    id: "L1-FINANZ", title: "Energiefinanzierung & Investoren", icon: "💰", color: "#10B981",
    description: "Kapitalstrukturen, die die Energiewende finanzieren – Bedarf bis 2030: >1.000 Mrd. € in Europa.",
    capabilities: [
      {
        id: "L2-FINANZ-PROJEKT", title: "Projektfinanzierung & Eigenkapital",
        description: "Non-Recourse-Finanzierung, Green Bonds und Infrastrukturfonds.",
        actors: ["KfW","EIB","DZ Bank","Commerzbank","ING","Aquila Capital","Copenhagen Infrastructure Partners"],
        items: [
          {
            id: "L3-FINANZ-PROJEKT-01", title: "Non-Recourse Projektfinanzierung",
            angreifbarkeit: "Banken verlieren Anteile an Debt Funds und institutionelle Direct Lender, die schneller und mit höherem Leverage anbieten; auf der Sponsorenseite drücken standardisierte Term Sheets und Auktionsprozesse die Margen. Verteidigungsfähig ist Strukturierungskompetenz bei neuen Asset-Klassen (BESS, H2, Ladeinfrastruktur), deren Cashflow-Profile noch nicht bankstandardisiert sind.",
            definition: "Standardfinanzierungsform für EE-Projekte >20 MW: Darlehen ausschließlich durch Projekt-Cashflows besichert, kein Rückgriff auf Sponsoren. Struktur: SPV als Darlehensnehmer; Sicherheiten = Genehmigungen, EEG/PPA-Ertragsverträge, Versicherungen, Anlagen. Leverage: 70–80% FK, 20–30% EK. DSCR typisch >1,25x. Zinssatz 2024: EURIBOR + 100–200 bps. KfW-Programme (Erneuerbare Energien Standard) mit Sonderkonditionen.",
            wertschoepfung: "Bank: Zinsmarge bei geringem Ausfallrisiko (EEG-Cashflows = stabiles Rating). Sponsor: EK-Hebelwirkung bei 25% EK und 10% Projektrendite → ~40% EK-IRR. EIB: Mission-driven – Förderung durch subventionierte Zinsen. Versicherungsmarkt verdient an Betriebsunterbrechungs- und Garantieversicherungen.",
            herausforderungen: "Steigende Zinsen (2022–2024) haben Project Finance teurer gemacht. Viele Projekte mit 2021er Kalkulation nicht mehr finanzierbar. Refinanzierungsrisiko bei kurzen Zinsbindungen. Basel IV-Kapitalanforderungen erhöhen Bankkosten für Infrastrukturfinanzierungen.",
            ausblick: "EU-Taxonomie-konforme Projekte erhalten günstigen Kapitalzugang ('Greenium'). Institutional Infrastructure Debt (Pensionsfonds als direkte Kreditgeber) wächst als Banken-Alternative. Blended Finance (EIB + private Banken) für risikoreiche Märkte.",
            erloesmodell: "Zinsmarge (EURIBOR + Spread) + Arrangierungsgebühren + Commitment Fees",
            regulierung: "KWG, CRR/Basel IV, EU-Taxonomie, EEG (Cashflow-Absicherung)",
            kundensegment: "EE-Projektgesellschaften (SPV), Projektentwickler, Infrastrukturfonds",
            differenzierung: "Zinssatz, Covenant-Flexibilität, Sektorexpertise, Abschlussgeschwindigkeit",
            bmc_kanaele: "Direktansprache von Projektentwicklern/SPVs über Relationship-Banking und Syndizierung; KfW-Programme als Förderkanal.",
            bmc_kundenbeziehung: "Langfristige Kreditbeziehung über die Laufzeit (10–20 Jahre) mit Covenant-Monitoring und enger technisch-finanzieller Begleitung des SPV.",
            bmc_kostenstruktur: "Refinanzierungskosten (Einlagen/Kapitalmarkt) als Basis, dazu Risikokapitalunterlegung (Basel IV) und Due-Diligence-/Strukturierungskosten.",
            fallbeispiel: "Konkret zeigt sich der Hebel der Projektfinanzierung an einem 50-MW-Solarpark, der 60 Mio. € kostet: Die Bank (z.B. DZ Bank oder KfW) finanziert 75% davon, also 45 Mio. €, abgesichert ausschließlich durch die künftigen EEG- und Spotmarkterlöse des Parks — nicht durch das Vermögen des Projektentwicklers, der nur die restlichen 15 Mio. € Eigenkapital einbringt. Erwirtschaftet der Park über die Laufzeit eine Projektrendite von 10% und kostet das Fremdkapital nur 4–5% (EURIBOR + Spread), bleibt die Differenz zwischen Projekt- und Fremdkapitalrendite überproportional beim Eigenkapitalgeber: Aus 10% Projektrendite wird durch diesen Hebel eine Eigenkapitalrendite von rund 25–40%. Für die Bank ist das Geschäft trotzdem risikoarm, weil EEG-Cashflows über 20 Jahre gesetzlich gesichert sind — ein Ausfallrisiko, das sich von einem normalen Unternehmenskredit fundamental unterscheidet und genau deshalb zu deutlich günstigeren Zinsen führt.",
            status: "aktiv",
            radar: { regulierung:3, skalierbarkeit:4, marktrisiko:1, digitalisierung:2, wettbewerb:3, nachhaltigkeit:3 },
            erloesTyp: "Fee-based", akteure: ["KfW","EIB","DZ Bank","ING","Commerzbank","LBBW"]
          },
          {
            id: "L3-FINANZ-PROJEKT-02", title: "Green Bonds & Sustainability-Linked Bonds",
            angreifbarkeit: "Die Strukturierungs- und Zertifizierungsmarge ist durch Standardisierung angreifbar: EuGB und Taxonomie machen aus Beratung eine Checkliste, und routinierte Emittenten brauchen weniger externe Unterstützung. Sinkt das Greenium weiter, stellt sich die Grundsatzfrage, warum Emittenten den Mehraufwand zahlen — SLBs und konventionelle Anleihen mit ESG-Rating sind die bequemere Substitution.",
            definition: "Green Bonds: Anleihen, deren Erlöse ausschließlich für grüne Projekte verwendet werden (ICMA Green Bond Principles, EU Green Bond Standard EuGB seit 2024). Sustainability-Linked Bonds (SLBs): Kupon an ESG-KPIs geknüpft (z.B. installierte EE-Kapazität, CO₂-Intensität). 'Greenium': Green Bonds erzielen 2–10 bps niedrigeren Zinssatz als konventionelle Bonds – durch ESG-Investorenbasis (Pensionsfonds, Versicherungen mit Grün-Mandaten).",
            wertschoepfung: "Emittent: Zinsersparnis durch Greenium + Zugang zu ESG-Investorenbasis + Reputationsgewinn. Investitionsbank: Arrangierungsgebühr (0,1–0,3% des Emissionsvolumens) + Second-Party-Opinion-Koordination. SPO-Anbieter (Sustainalytics, ISS ESG): Verifizierungsgebühr.",
            herausforderungen: "Greenwashing-Risiko: ohne echte Zusätzlichkeit sind Green Bonds PR-Instrument. EU EuGB-Standard ist strenger als ICMA – schafft zwei-Klassen-Markt. Reporting-Aufwand (jährliche Impact Reports, Allokationsberichte) ist erheblich.",
            ausblick: "EU EuGB wird Marktstandard für institutionelle Investoren. SLBs unter Druck: Emittenten wählen leicht erreichbare KPIs ('SLB Washing'). Biodiversity Bonds, Transition Bonds, Nature Bonds als neue Kategorien. Green Bond-Markt: >500 Mrd. €/Jahr Neuemissionen weltweit (2024).",
            erloesmodell: "Greenium (Zinsersparnis für Emittenten) + Arrangierungsgebühren",
            regulierung: "EU Green Bond Standard (EuGB 2024), ICMA GBP, EU-Taxonomieverordnung, SFDR",
            kundensegment: "Institutionelle ESG-Investoren (Pensionsfonds, Versicherungen, SWFs)",
            differenzierung: "EU EuGB-Konformität, Second-Party-Opinion-Qualität, Impact-Transparenz",
            bmc_kanaele: "Kapitalmarktemission über Investmentbanken-Konsortien an institutionelle ESG-Investoren; Roadshows als klassischer Platzierungskanal.",
            bmc_kundenbeziehung: "Transaktionale Investorenbeziehung über die Bond-Laufzeit mit jährlicher Reporting-Pflicht (Impact Reports); Vertrauen über Second-Party-Opinion.",
            bmc_kostenstruktur: "Arrangierungsgebühren und SPO-Verifizierungskosten (Sustainalytics, ISS ESG) als Hauptblock; laufende Reporting-/Compliance-Kosten.",
            fallbeispiel: "Konkret nutzt z.B. RWE einen Green Bond so: Statt eine konventionelle Anleihe zu begeben, emittiert RWE eine 500-Mio.-€-Anleihe, deren Erlöse nachweislich ausschließlich in neue Windparks und Solarprojekte fließen — verifiziert durch eine Second-Party-Opinion von Sustainalytics oder ISS ESG. Weil ESG-orientierte Pensionsfonds und Versicherungen ihre Mandate oft so gestalten, dass sie bevorzugt oder ausschließlich in solche grünen Anleihen investieren dürfen, ist die Nachfrage nach diesem Papier strukturell höher als nach einer vergleichbaren konventionellen Anleihe — und genau diese höhere Nachfrage drückt den Zinssatz, den RWE zahlen muss, um 2 bis 10 Basispunkte ('Greenium'). Bei 500 Mio. € Volumen und 10 Jahren Laufzeit kann allein dieser kleine Zinsvorteil mehrere Millionen Euro Zinskosten einsparen — der eigentliche finanzielle Anreiz für den Emittenten, sich den höheren Reporting- und Verifizierungsaufwand eines Green Bonds überhaupt anzutun.",
            status: "aktiv",
            radar: { regulierung:3, skalierbarkeit:5, marktrisiko:1, digitalisierung:2, wettbewerb:3, nachhaltigkeit:5 },
            erloesTyp: "Fee-based", akteure: ["E.ON","RWE","EnBW","KfW","EIB","LBBW"]
          },
          {
            id: "L3-FINANZ-FONDS-01", title: "Infrastrukturfonds (Geschlossener EE-Fonds)",
            angreifbarkeit: "Zu viel Kapital jagt zu wenige Assets: Multiple-Inflation frisst die IRR, und große Direktinvestoren (Pensionskassen, Versicherer) umgehen die Fondsgebühren durch eigene Teams — Disintermediation der Management-Fee. Verteidigung über proprietären Dealflow (Entwickler-Partnerschaften, Greenfield-Kompetenz), nicht über den bloßen Kapitalzugang.",
            definition: "Geschlossene Fonds kaufen fertige EE-Projekte (Brownfield) oder co-investieren in Entwicklung (Greenfield). Anleger: institutionelle Investoren. Fondstruktur: 10–15 Jahre Laufzeit, 200–500 Mio. € Volumen, 20–30 Projekte. Renditeerwartung: 5–9% IRR netto. Attraktivität: stabile inflationsindexierte Cashflows (EEG), geringe Aktienmarkt-Korrelation, ESG-konform. Manager verdienen: Management Fee (0,8–1,5% committed capital p.a.) + Carried Interest (20% über 6–8% Hurdle Rate).",
            wertschoepfung: "Fondsmanager schafft Wert durch Dealflow-Qualität, Asset Management (O&M-Optimierung, Refinanzierung zu niedrigeren Zinsen) und Exit-Timing (Verkauf an größere Fonds zu Aufpreis). Carried Interest ist extremer Incentiv: Bei 300 Mio. € Fonds und 15% IRR vs. 7% Hurdle Rate = 60 Mio. € Carry für Manager.",
            herausforderungen: "EE-Asset-Markt: Kaufpreismultiplen gestiegen (EV/EBITDA von 10x auf 15–20x). Gute Deals werden knapper. Zinsanstieg 2022–2024 senkte IRR-Erwartungen; einige Fonds revidieren Renditeversprechen. ESG-Washing-Risiko: nicht alle 'grünen' Fonds erfüllen EU-Taxonomie.",
            ausblick: "Kapitalbedarf: >1.000 Mrd. € bis 2030 in Europa. Infrastrukturfonds unverzichtbar. Neue Asset-Klassen: Offshore-Wind, BESS, H2-Infrastruktur, EV-Ladeinfrastruktur. Impact Investing und Blended Finance für schwierigere Märkte (Emerging Markets, Frontier H2).",
            erloesmodell: "Management Fee (% AuM p.a.) + Carried Interest (% über Hurdle Rate)",
            regulierung: "AIFMD, KAGB, EU-Taxonomieverordnung, SFDR (Art. 8 / Art. 9)",
            kundensegment: "Institutionelle Investoren (Pensionsfonds, Versicherungen, SWFs, Family Offices)",
            differenzierung: "Track Record, Dealflow-Qualität, Asset-Management-Kompetenz, ESG-Rating",
            bmc_kanaele: "Direktplatzierung bei institutionellen Investoren über Placement Agents und bestehende LP-Beziehungen; kein Retail-Vertrieb.",
            bmc_kundenbeziehung: "Langfristige Investor-Manager-Beziehung über die Fondslaufzeit (10–15 Jahre) mit regelmäßigem Reporting; Vertrauen über Track Record.",
            bmc_kostenstruktur: "Management-Personal (Dealflow, Asset Management) und Due-Diligence-Kosten je Akquisition; Transaktionskosten beim Asset-Kauf.",
            fallbeispiel: "Konkret verdient ein Fondsmanager wie Aquila Capital an einem 300-Mio.-€-Fonds doppelt: Erstens kassiert er unabhängig vom Erfolg eine Management Fee von 0,8–1,5% des eingesammelten Kapitals pro Jahr — bei 300 Mio. € also 2,4–4,5 Mio. € jährlich, allein für die Verwaltung. Zweitens, und das ist der eigentliche Leistungsanreiz, erhält er einen Carried Interest von 20% auf jede Rendite oberhalb einer Hurdle Rate von 6–8%. Erzielt der Fonds über seine Laufzeit eine Netto-IRR von 15% statt der vereinbarten 7%-Schwelle, fließen 20% dieser Überrendite — bei 300 Mio. € Volumen schnell 60 Mio. € — als Carry an das Managementteam, nicht an die institutionellen Investoren. Genau dieser Mechanismus erklärt, warum gute Fondsmanager aggressiv um die besten verfügbaren Solar- und Windparkdeals konkurrieren: Der Unterschied zwischen einem mittelmäßigen und einem exzellenten Dealflow schlägt sich für sie selbst überproportional im Carry nieder, nicht nur in der laufenden Fee.",
            status: "aktiv",
            radar: { regulierung:3, skalierbarkeit:4, marktrisiko:1, digitalisierung:2, wettbewerb:3, nachhaltigkeit:5 },
            erloesTyp: "Fee-based", akteure: ["Aquila Capital","Copenhagen Infrastructure Partners","DWS","Blackrock","KGAL"]
          }
        ]
      }
    ]
  },

  // ══════════════════════════════════════════════════════════
  // L1: EMOBILITY & LADEINFRASTRUKTUR
  // ══════════════════════════════════════════════════════════
  {
    id: "L1-EMOB", title: "eMobility & Ladeinfrastruktur", icon: "🚗", color: "#8B5CF6",
    description: "Wachstumsmarkt mit enormem Potenzial – CPOs, eMSPs und V2G als neue Wertschöpfungsstufen der Energiewirtschaft.",
    capabilities: [
      {
        id: "L2-EMOB-CPO", title: "Charge Point Operator & eMSP",
        description: "Betrieb öffentlicher Ladeinfrastruktur und Mobilitätsdienstleistungen für EV-Fahrer.",
        actors: ["EnBW mobility+","Ionity","Fastned","Allego","EWE Go","E.ON Drive","Volkswagen/Elli"],
        items: [
          {
            id: "L3-EMOB-CPO-01", title: "Öffentliches Ladenetz (HPC & AC)",
            definition: "CPOs bauen und betreiben öffentliche Ladepunkte. EnBW mobility+ führt mit >6.000 Ladepunkten in Deutschland (2024). Erlösquellen: (1) Direktladung: 45–80 ct/kWh. (2) Roaming: eMSP-Zahler laden via OCPI, CPO erhält Nettobetrag. (3) B2B-Verträge: Flotten, Hotels, Parkhäuser. Capex HPC 150 kW: 30.000–60.000 € + Netzanschluss. Auslastung 2024 Durchschnitt: 6–12% – weit von Breakeven. EU AFID: alle 60 km HPC auf TEN-T-Kernnetz ab 2025 Pflicht.",
            wertschoepfung: "Breakeven ab ~20% Auslastung. Strategischer Wert: Netzaufbau für zukünftige EV-Adoption (first-mover wins Standorte). Daten: Lademuster als wertvolle Mobilitätsdaten. Roaming-Einnahmen als passiver Stream ohne Betriebsaufwand. OEM-Kooperationen (Ionity = BMW/Mercedes/VW/Hyundai/Ford) sichern Kapital und Fahrzeugflotte.",
            herausforderungen: "Auslastung ist das Kernproblem – EV-Markt wächst, aber Ladenetz wächst schneller (Hühner-Ei). Netzanschlusskosten können >50% des Gesamtinvestments ausmachen. Eichrecht-Konformität (MessEG) komplex und teuer. Vandalismuskosten und Verfügbarkeit (Uptime-Ziel >97%) herausfordernd.",
            ausblick: "Breakeven erreichbar 2027–2030 bei linearem EV-Wachstum. Konsolidierung: 200+ CPOs heute → 20–30 relevant 2030. V2G als transformativer Zusatzerlös: bei ausreichend V2G-fähigen EV kann jeder Standort als Regelenergie-Asset dienen.",
            angreifbarkeit: "Asset-schwere Position (Capex, Netzanschluss, Standort) ist strukturell schwach gegen asset-leichte Angreifer verteidigt: eMSP-/Roaming-Aggregatoren übernehmen Endkundenbeziehung und App-Layer — die margenstärkste Komponente — ohne eigenes Infrastruktur-Capex. OEMs (Tesla-Supercharger-Öffnung, VW/Elli) bauen parallel eigene Netze und können CPOs zu reinen Hardware-Betreibern degradieren. Bei struktureller Unterauslastung (6–12%) ist Preiswettbewerb über Roaming-Apps der schnellste Weg, Margen wegzukonkurrieren, bevor der Breakeven erreicht ist.",
            erloesmodell: "Ladegebühr (ct/kWh) + Roaming-Einnahmen + B2B-Pauschalen",
            regulierung: "AFID (EU-VO 2023/1804), LSV, EnWG, MessEG (Eichrecht)",
            kundensegment: "B2C EV-Fahrer, B2B Flotten",
            differenzierung: "Netzabdeckung, Ladeleistung (HPC 150–350 kW), Uptime-Zuverlässigkeit, App-UX",
            bmc_kanaele: "Eigene App/RFID-Karte für Direktladung, Roaming-Netzwerke (OCPI) für eMSP-Kunden, B2B-Vertrieb an Flotten/Hotels/Parkhäuser.",
            bmc_kundenbeziehung: "Überwiegend anonyme, transaktionale Ad-hoc-Ladevorgänge; B2B-Kunden über Rahmenverträge gebunden; Roaming-Kunden ohne direkte CPO-Beziehung.",
            bmc_kostenstruktur: "Capex für Ladepunkte und Netzanschluss (oft >50% des Investments) als dominanter Block; Betriebskosten für Eichrecht-Konformität, Wartung, Vandalismus.",
            fallbeispiel: "Konkret zeigt sich das Auslastungsproblem an einer einzelnen Ionity-Schnellladesäule: Eine 350-kW-Säule kostet inklusive Netzanschluss 30.000–60.000 € Capex. Bei einer Vollladung (z.B. 60 kWh in rund 20 Minuten) verlangt Ionity bis zu 60 € — deutlich über dem Haushaltsstrompreis, begründet mit Autobahnlage und Geschäftskundenfokus. Der Knackpunkt zeigt sich erst in der Auslastung: Bei durchschnittlich 6–12% (Branchenwert 2024) steht die Säule die meiste Zeit ungenutzt, während Capex und Netzanschlusskosten unabhängig vom Ladevolumen weiterlaufen — erst ab rund 20% Auslastung kippt die Rechnung in den Break-even. Das erklärt, warum Ionity zwei Erlösströme parallel fährt: Direktladung zum vollen Tarif für Gelegenheitsnutzer, und Roaming-Verträge mit eMSPs über das OCPI-Protokoll, bei denen Ionity einen Nettobetrag pro kWh erhält, ohne selbst eine Kundenbeziehung zu pflegen. Dieser passive Roaming-Strom füllt genau die Auslastungslücke, die mit reinen Eigenkunden nicht zu schließen wäre — und ist der eigentliche Grund, warum CPOs ihre Ladepunkte in fremde Apps integrieren, statt nur auf die eigene Marke zu setzen.",
            status: "aktiv",
            radar: { regulierung:3, skalierbarkeit:3, marktrisiko:2, digitalisierung:4, wettbewerb:4, nachhaltigkeit:4 },
            erloesTyp: "Merchant", akteure: ["EnBW mobility+","Ionity","Fastned","Tesla Supercharger","EWE Go","Allego","Vattenfall InCharge"]
          },
          {
            id: "L3-EMOB-V2G-01", title: "Vehicle-to-Grid (V2G) Aggregation",
            angreifbarkeit: "Der unabhängige Aggregator sitzt in der schwächsten Position der Kette: OEMs kontrollieren die Fahrzeug-API und können die Aggregation jederzeit selbst übernehmen, Energieversorger bündeln V2G in ihre Tarife. Wer weder Fahrzeugzugang noch Kundenvertrag exklusiv hält, wird zum austauschbaren Optimierungs-Backend — die Marge wandert zu dem, der die Schnittstelle besitzt.",
            definition: "V2G nutzt EV-Batterien bidirektional: Fahrzeuge geben bei Netzüberlastung Strom zurück ins Netz. V2G-fähige Fahrzeuge (Nissan Leaf, Hyundai Ioniq 5/6, VW ID-Serie mit V2G-Update) werden von Aggregatoren (Volkswagen/Elli, Jedlix) zu virtuellem Regelenergie-Asset gebündelt. Revenue-Share: 50–70% ÜNB-Erlöse an Fahrzeughalter, 30–50% an Aggregator. AFIR (Alternative Fuels Infrastructure Regulation): ab 1.1.2027 müssen neue (private wie öffentliche) Ladepunkte bidirektionale Kommunikation unterstützen – eine technische Voraussetzung für V2G, aber keine V2G-Nutzungspflicht.[[Q:afir-emd]] Kapazitätspotenzial: 10 Mio. EV × 30 kWh V2G = 300 GWh.",
            wertschoepfung: "Aggregator verdient Revenue-Share ohne eigene Asset-Investition – reine Software-/Daten-Wertschöpfung. EV-Batterie (~60 kWh) hat 5× höhere Kapazität als Heimspeicher – enormes Flexibilitätspotenzial. EV-Halter erhält passives Einkommen für Batteriekapazität, die ohnehin vorhanden ist.",
            herausforderungen: "Batteriedegradation durch bidirektionales Laden noch nicht vollständig gelöst. OEM-Gatekeeper: VW, BMW kontrollieren Fahrzeug-API – Aggregatoren abhängig von OEM-Kooperation. Regulierung hinkt Technologie hinterher. Wenige V2G-fähige Fahrzeugmodelle verfügbar (2024).",
            ausblick: "V2G könnte 2030–2035 zu größter Flexibilitätsquelle werden: 10 Mio. EV × 30 kWh = 300 GWh – das 6-fache aller deutschen BESS (2024). Die AFIR-Anforderung bidirektionaler Ladepunkte ab 2027 ist ein wichtiger Enabler. OEMs werden V2G als Revenue-Sharing-Feature vermarkten.",
            erloesmodell: "Revenue-Share Regelenergie/Arbitrage mit EV-Haltern",
            regulierung: "EnWG §14a, AFIR (bidirektionale Ladepunkte ab 2027), EU EMD, SOGL Präqualifikation",
            kundensegment: "B2C EV-Halter; B2B Flottenbetreiber",
            differenzierung: "OEM-Partnerschaften (VW, Hyundai), Aggregationsvolumen, Regelenergie-Präqualifikation",
            bmc_kanaele: "Vermarktung über OEM-Partnerschaften (z.B. VW/Elli-App) und eigene Aggregator-Plattform direkt an EV-Halter; kein klassischer Vertrieb.",
            bmc_kundenbeziehung: "App-basierte Self-Service-Teilnahme der EV-Halter mit automatisiertem Revenue-Share; Abhängigkeit von OEM-Gatekeeper für Fahrzeug-API-Zugang.",
            bmc_kostenstruktur: "Plattform-/Aggregations-IT als Hauptkosten; keine eigene Asset-Investition (Batterien gehören EV-Haltern), Revenue-Share als variable Auszahlung.",
            fallbeispiel: "Konkret funktioniert V2G über eine VW/Elli-Anbindung so: Ein ID.-Fahrer steht abends mit 80% Akkuladung (rund 60 kWh) an seiner bidirektionalen Wallbox. Statt die Batterie einfach passiv stehen zu lassen, meldet die Elli-App das Fahrzeug als verfügbare Flexibilität an den Regelenergiemarkt. Braucht der ÜNB kurzfristig zusätzliche Einspeisung, gibt das Auto einen Teil seiner Ladung ins Netz zurück und wird später wieder aufgeladen, bevor der Fahrer es am Morgen braucht — der Nutzer merkt im Alltag nichts davon, außer einer Gutschrift auf seiner Stromrechnung. Von den Erlösen, die der Aggregator am Regelenergiemarkt erzielt, fließen 50–70% an den Fahrzeughalter zurück, der Rest bleibt beim Aggregator als Vergütung für Plattform und Vermarktung. Der entscheidende Unterschied zum Heimspeicher: Eine einzelne EV-Batterie mit 60 kWh ist rund fünfmal größer als ein typischer Hausspeicher — schon wenige tausend angeschlossene Fahrzeuge ergeben ein Flexibilitätsvolumen, für das man sonst einen kompletten Batteriespeicherpark bauen müsste.",
            status: "emerging",
            radar: { regulierung:2, skalierbarkeit:5, marktrisiko:2, digitalisierung:5, wettbewerb:2, nachhaltigkeit:5 },
            erloesTyp: "Fee-based", akteure: ["Volkswagen/Elli","Jedlix","E.ON Drive","Nissan x Nuvve","Hyundai"]
          }
        ]
      },
      {
        id: "L2-EMOB-THG", title: "THG-Quote & Emissionsvermarktung",
        description: "Monetarisierung der Treibhausgasminderungsquote — ein rein regulatorisch geschaffener Markt zwischen E-Mobilität und Mineralölwirtschaft.",
        actors: ["carbonify","M3E","emobility.energy","EnBW","Elektrovorteil"],
        items: [
          {
            id: "L3-EMOB-THG-01", title: "THG-Quotenhandel & -Pooling",
            angreifbarkeit: "Ein Geschäftsmodell auf 100% regulatorischem Fundament ist maximal politikabhängig: Quotenhöhe, Anrechnungsregeln und Pauschalwerte stehen in Verordnungen, die jede Legislatur ändern kann — der Preisverfall 2023/24 durch (mutmaßlich falsch deklarierte) Biokraftstoff-Importe hat gezeigt, wie schnell die Prämie um zwei Drittel einbrechen kann. Die Vermittlerposition selbst ist kaum verteidigungsfähig: Der UBA-Prozess ist für alle gleich, Markteintritt billig, und Versorger wie EnBW bündeln die Prämie als Feature in ihre eMobility-Produkte — der Standalone-Pooler konkurriert am Ende nur über Auszahlungshöhe und Marketing.",
            definition: "Die THG-Quote (§37a BImSchG) verpflichtet Inverkehrbringer fossiler Kraftstoffe, die Treibhausgasintensität ihrer Kraftstoffe jährlich steigend zu mindern. Erfüllen können sie das u.a. durch Zukauf zertifizierter Einsparungen aus der E-Mobilität: Halter von E-Fahrzeugen lassen ihre (pauschal angesetzte) Stromverbrauchsmenge beim Umweltbundesamt als THG-Minderung zertifizieren — praktisch immer über Pooling-Dienstleister, die tausende Fahrzeugscheine bündeln, den UBA-Prozess abwickeln und die Zertifikate an quotenverpflichtete Mineralölunternehmen verkaufen. Prämienniveau 2026: je nach Anbieter und Modell (Garantie- vs. variable Auszahlung) rund 300–450 € pro E-Pkw und Jahr, nach einem Tief von unter 100 € in 2023/24.[[Q:thg-quote]] Auch öffentliche Ladepunktbetreiber können geladene kWh anrechnen lassen — für CPOs ein relevanter Zusatzerlös.",
            wertschoepfung: "Der Pooler verdient die Spanne zwischen dem Zertifikatserlös am Quotenmarkt und der an den Fahrzeughalter ausgezahlten Prämie (typisch 10–25% Marge) — plus einen Timing-/Risikoaufschlag bei Garantiemodellen, bei denen der Pooler das Preisrisiko bis zum Verkauf trägt. Skalierung ist fast grenzkostenfrei: Der UBA-Prozess ist digitalisierbar, jeder zusätzliche Fahrzeugschein kostet wenig. Für CPOs ist die kWh-Anrechnung strukturell attraktiver als das Pkw-Pauschalgeschäft: Sie wächst mit der Auslastung statt pro Fahrzeug fix zu sein.",
            herausforderungen: "Der Quotenpreis ist volatil und politisch getrieben: Falsch deklarierte Biodiesel-Importe drückten 2023/24 den Markt, erst verschärfte Kontrollen und die steigende Quote (RED-III-Umsetzung) haben die Preise erholt. Garantiemodelle können bei fallenden Preisen zur Margenfalle werden. Kundenbindung ist minimal — der Fahrzeughalter wechselt jährlich zum Höchstbietenden; Vergleichsportale (Verivox, Finanztip-Listen) machen den Markt vollständig transparent.",
            ausblick: "Die Quote steigt bis 2030 schrittweise auf 25% — die strukturelle Nachfrage nach Zertifikaten wächst also, während die E-Flotte als Angebotsbasis ebenfalls wächst; das Preisniveau bleibt ein Rennen zwischen beiden Kurven. Konsolidierung ist absehbar: Standalone-Pooler mit reinem Prämien-Marketing verlieren gegen integrierte Anbieter (Versorger, Flottenmanager, Leasinggesellschaften), die die THG-Prämie als Baustein in größere eMobility-Produkte einbetten. Perspektivisch könnte die Anrechnungslogik stärker auf tatsächlich geladene kWh (statt Pkw-Pauschalen) umgestellt werden — das würde das Geschäft zu CPOs und Abrechnungsdienstleistern verschieben.",
            erloesmodell: "Handelsmarge zwischen Zertifikatserlös und ausgezahlter Prämie (10–25%) + Timing-/Risikoaufschlag bei Garantiemodellen",
            regulierung: "§37a ff. BImSchG (THG-Quote), 38. BImSchV (Anrechnung Ladestrom), RED III, UBA-Zertifizierungsprozess",
            kundensegment: "B2C E-Fahrzeughalter, B2B Flotten & Ladepunktbetreiber; Abnehmerseite: quotenverpflichtete Mineralölunternehmen",
            differenzierung: "Auszahlungshöhe & -geschwindigkeit, Garantie- vs. Spotmodell, Prozess-UX (Fahrzeugschein-Upload), Flotten-/CPO-Integrationen",
            bmc_kanaele: "Digitale Self-Service-Portale (Fahrzeugschein-Upload), Vergleichsportale und Affiliate-Marketing; B2B-Vertrieb an Flotten, Leasinggesellschaften und CPOs.",
            bmc_kundenbeziehung: "Rein transaktional mit jährlichem Wiederholungscharakter; Bindung nur über Auszahlungshöhe, Zuverlässigkeit und Bequemlichkeit der Wiederanmeldung.",
            bmc_kostenstruktur: "Marketing/CAC als größter Block (umkämpfter Vermittlermarkt); Prozess-/Plattformkosten für UBA-Abwicklung; bei Garantiemodellen Risikokosten aus Preisvolatilität.",
            fallbeispiel: "Konkret läuft der Prozess bei einem Pooler wie carbonify so: Ein E-Auto-Halter lädt ein Foto seines Fahrzeugscheins hoch — mehr muss er nicht tun. Der Pooler meldet das Fahrzeug beim Umweltbundesamt an, das eine pauschale Jahresstrommenge (für Pkw rund 2.000 kWh) mit dem THG-Faktor des Strommixes als CO₂-Einsparung zertifiziert. Diese Zertifikate bündelt der Pooler über zehntausende Fahrzeuge und verkauft sie an ein quotenverpflichtetes Mineralölunternehmen, das andernfalls eine Pönale von 600 €/t CO₂ zahlen müsste — die Zahlungsbereitschaft der Abnehmerseite ist also regulatorisch nach oben verankert. Erlöst der Pooler z.B. 400 € pro Fahrzeug am Quotenmarkt und zahlt dem Halter eine Garantieprämie von 320 €, bleiben 80 € Rohmarge für Abwicklung, Marketing und Preisrisiko. Das Risiko ist real: Wer 2023 Garantieprämien auf Basis der 2022er-Höchstpreise versprochen hatte, verkaufte die Zertifikate später in einen um zwei Drittel eingebrochenen Markt — einige Pooler mussten aufgeben. Das Geschäft ist damit weniger Vermittlung als Rohstoffhandel mit Jahreszyklus: Eingekauft wird beim Fahrzeughalter zum Fixpreis, verkauft wird in einen politisch gemachten, volatilen Markt.",
            status: "aktiv",
            radar: { regulierung:5, skalierbarkeit:4, marktrisiko:4, digitalisierung:4, wettbewerb:4, nachhaltigkeit:3 },
            erloesTyp: "Fee-based", akteure: ["carbonify","M3E","emobility.energy","EnBW","Elektrovorteil"]
          }
        ]
      }
    ]
  },

  // ══════════════════════════════════════════════════════════
  // L1: MESSUNG, DATEN & DIGITALE SERVICES
  // ══════════════════════════════════════════════════════════
  {
    id: "L1-DIGITAL", title: "Messung, Daten & Digitale Services", icon: "📡", color: "#F97316",
    description: "Software- und datengetriebene Geschäftsmodelle – vom Smart Meter Gateway bis zur CSRD-Reporting-Plattform.",
    capabilities: [
      {
        id: "L2-DIGITAL-PLATTFORM", title: "Energie-Plattformservices & Contracting",
        description: "Software-Plattformen und investmentbasierte Modelle für Prosumer und Industrie.",
        actors: ["gridX","Thermondo","Tado","Viessmann One","Siemens Smart Infrastructure","Kraken (Octopus)","powercloud"],
        items: [
          {
            id: "L3-DIGITAL-PLATTFORM-01", title: "HEMS / EMS-Plattform (B2B2C)",
            angreifbarkeit: "Plattform-Klassiker: Große Ökosysteme (OEM-Apps, Wechselrichter-Hersteller, Neolieferanten) integrieren HEMS-Funktionen nativ und entwerten den unabhängigen Layer, während Open-Source-Stacks (Home Assistant, EVCC) von unten drücken. Verteidigungsfähig ist die B2B2C-Position nur über Integrationsbreite und §14a-/VPP-Konnektivität, die einzelne Gerätehersteller nicht nachbauen wollen.",
            definition: "gridX (München, 2017) verkauft ein Energy Management System: (1) Hardware-Gateway (gridBox: kommuniziert via Modbus, SunSpec, OCPP, EEBUS mit PV-Wechselrichter, Batterie, Wärmepumpe, EV-Lader). (2) Cloud-Plattform für Optimierungsalgorithmen. B2B2C: Stadtwerke, Installateure, OEMs zahlen SaaS-Lizenz; Endverbraucher nutzen das System. Erlösstruktur: Hardware-Marge (~40%) + monatliche SaaS-Lizenz (15–50 €/Gerät/Monat).",
            wertschoepfung: "Plattform-Netzwerkeffekte: Jeder neue Hersteller-Protokoll-Support erhöht den Wert für alle Nutzer. API-Ökosystem: >200 Integrationen (HEMS, MSB, VNB §14a, eMSP). VPP-Aggregation als Zusatzerlös für Betreiber. Switching-Kosten nach Installation hoch.",
            herausforderungen: "Protokoll-Fragmentierung: 50+ Standards in der Gebäudeautomation. §14a-Implementierung ist Chance und Herausforderung. DSGVO schränkt Nutzung hochauflösender Daten ein. Hardware-Marge sinkt durch Commodity-Wettbewerb.",
            ausblick: "HEMS wird Pflicht-Infrastruktur für §14a-Compliance und dynamische Tarife. gridX positioniert sich als 'Betriebssystem der Energiewende'. Konvergenz mit Smart-Home-Plattformen (Apple HomeKit, Matter) als Herausforderung.",
            erloesmodell: "Hardware-Marge + SaaS-Abo (€/Gerät/Monat) + API-Zugang",
            regulierung: "EnWG §14a, MsbG, BSI TR-03109, DSGVO",
            kundensegment: "B2B2C: Stadtwerke, Installateure → Prosumer-Endkunden",
            differenzierung: "Integrationsbreite (200+ Hersteller), API-Offenheit, VPP-Anbindung, §14a-Readiness",
            bmc_kanaele: "B2B2C — Vertrieb über Stadtwerke, Installateure und OEMs als Lizenzpartner; kein Direktvertrieb an Endkunden.",
            bmc_kundenbeziehung: "Langfristige SaaS-Lizenzbeziehung mit B2B-Partnern (Stadtwerke/Installateure); hohe Switching-Kosten für Endkunden nach Installation.",
            bmc_kostenstruktur: "Hardware-Produktion (gridBox) und Cloud-/Plattformentwicklung als Hauptkosten; API-Integrationsaufwand für 200+ Hersteller-Protokolle.",
            fallbeispiel: "Konkret zeigt sich der Plattformwert von gridX an einem Haushalt mit PV-Anlage, Batteriespeicher, Wärmepumpe und EV-Wallbox von vier verschiedenen Herstellern: Ohne ein gemeinsames Steuerungssystem würden diese Geräte unkoordiniert nebeneinander arbeiten — die Wärmepumpe heizt vielleicht genau dann, wenn die Wallbox auch lädt, und beide ziehen Netzstrom, während die PV-Anlage gleichzeitig ungenutzten Solarstrom einspeist. Die gridBox kommuniziert über Modbus, SunSpec und EEBUS mit allen vier Geräten gleichzeitig und entscheidet zentral: Solarüberschuss geht zuerst in die Wärmepumpe, dann in die Wallbox, erst der Rest ins Netz. Für gridX besteht der Erlös aus zwei Bausteinen: einer Hardware-Marge beim Verkauf der gridBox (rund 40%) und einer laufenden SaaS-Lizenz von 15–50 € pro Gerät und Monat, die ein Stadtwerk oder Installateur zahlt, der die Plattform seinen Endkunden anbietet. Der eigentliche Schutzwall ist die Integrationstiefe: Sobald über 200 Hersteller-Protokolle eingebunden sind, wird es für einen Wettbewerber sehr aufwendig, dieselbe Abdeckung nachzubauen.",
            status: "aktiv",
            radar: { regulierung:1, skalierbarkeit:5, marktrisiko:1, digitalisierung:5, wettbewerb:4, nachhaltigkeit:4 },
            erloesTyp: "Subscription", akteure: ["gridX","Loxone","SMA","Solarwatt","Viessmann"]
          },
          {
            id: "L3-DIGITAL-PLATTFORM-02", title: "Wärmepumpen-Contracting (as-a-Service)",
            angreifbarkeit: "Das Mietmodell konkurriert mit fallenden Gerätepreisen: Je billiger die Wärmepumpe, desto attraktiver Kauf oder Kredit statt 15-Jahres-Abo — der Finanzierungsvorteil des Contractors schrumpft mit jeder Preisrunde. Handwerksplattformen und Energieversorger (Bundles mit Stromtarif) greifen die Kundenschnittstelle an; wer nur finanziert, ohne eigene Installationskapazität, verliert den Flaschenhals als Moat.",
            definition: "Thermondo (2012, Berlin) bietet Wärmepumpen auf Mietbasis an: keine Anschaffungskosten (WP: 15.000–35.000 €), stattdessen monatliche Rate (150–350 €/Monat inkl. Wartung). Thermondo trägt Investitions-, Technologie- und Wartungsrisiko. Refinanzierung über 15–20 Jahre Raten. BEG-Förderung (35–50%) wird im Kundenauftrag beantragt. Installationsnetzwerk: >1.500 zertifizierte Partnerinstallateure bundesweit.",
            wertschoepfung: "Finanzierung ist Kernwert: Kunden ohne Eigenkapital können Wärmewende vollziehen. Thermondo verdient Marge zwischen Barwert aller Raten und (Anschaffungs- + Wartungskosten). GEG Heizungsgesetz: Pflicht zur Umrüstung bei Heizungstausch ab 2026 (65% EE-Anteil)[[Q:geg-heizung]] treibt Nachfrage. BEG-Förderoptimierung als Kompetenz.",
            herausforderungen: "Fachkräftemangel bei Heizungsinstallateuren ist Wachstumshürde #1. Technologierisiko: WP-Marktpreis fällt – Mietrate muss wettbewerbsfähig bleiben. Finanzierung über 15+ Jahre erfordert solide Bilanz oder Verbriefung der Forderungsportfolien.",
            ausblick: "GEG + WPG treiben Millionen Heizungstausche bis 2030. Markt für Wärme-Contracting könnte >10 Mrd. €/Jahr in Deutschland erreichen. Kombination mit Energie-Liefervertrag (Strom für WP) als Full-Service-Paket. Digitale Optimierung: automatische BEG-Antragstellung, Smart-Grid-Integration.",
            erloesmodell: "Monatliche Mietrate + Wartungsvertrag + optional Energielieferung",
            regulierung: "BGB (Mietrecht), GEG (Heizgesetz, 65% EE ab 2026), BEG-Förderung, WPG",
            kundensegment: "B2C Eigenheimbesitzer (Heizungstausch-Pflicht GEG)",
            differenzierung: "Kein Eigenkapital nötig, BEG-Optimierung, Full-Service, Installationsnetzwerk",
            bmc_kanaele: "Direktvertrieb über Online-Marketing und Partnerinstallateure-Netzwerk (>1.500 zertifizierte Partner).",
            bmc_kundenbeziehung: "Langfristige Mietvertragsbeziehung (15–20 Jahre) inkl. Wartung; Full-Service-Charakter reduziert Wechselanreiz.",
            bmc_kostenstruktur: "Anschaffungs- und Finanzierungskosten der Wärmepumpen (15.000–35.000 €/Anlage) als Hauptblock; Wartungs- und Installateur-Netzwerkkosten.",
            fallbeispiel: "Konkret rechnet sich Thermondos Modell für einen Hauseigentümer so: Eine neue Wärmepumpe kostet 15.000–35.000 € in der Anschaffung — Geld, das viele Haushalte nicht sofort aufbringen können oder wollen. Thermondo zahlt diesen Betrag vor, beantragt im Kundenauftrag die BEG-Förderung (35–50% Zuschuss) und vermietet die fertig installierte Anlage anschließend für 150–350 € im Monat über 15–20 Jahre, Wartung inklusive. Für Thermondo besteht der Gewinn aus der Differenz zwischen der Summe aller Monatsraten über die Vertragslaufzeit und den tatsächlichen Anschaffungs- plus Wartungskosten — eine Kalkulation, die nur aufgeht, wenn die Fördersumme korrekt mitgerechnet und der Wartungsaufwand über die Jahre verlässlich niedrig bleibt. Der Kunde trägt dafür kein eigenes Investitionsrisiko und keine Technologiewette: Fällt der Wirkungsgrad der Anlage nach Jahren ab oder wird ein teures Bauteil getauscht, ist das Thermondos Problem, nicht das des Mieters der Anlage.",
            status: "aktiv",
            radar: { regulierung:1, skalierbarkeit:3, marktrisiko:2, digitalisierung:3, wettbewerb:3, nachhaltigkeit:5 },
            erloesTyp: "Subscription", akteure: ["Thermondo","Viessmann","Vaillant","Stiebel Eltron","Aira"]
          },
          {
            id: "L3-DIGITAL-PLATTFORM-03", title: "Utility-OS-Lizenzierung (Kraken-Modell)",
            angreifbarkeit: "Der Moat ist gewaltig, aber nicht unangreifbar: ERP-Incumbents (SAP S/4HANA Utilities) verteidigen den Bestand über Integrationsbreite und Konzern-IT-Politik, während spezialisierte deutsche Anbieter (powercloud, Lynqtech) mit Marktkommunikations-Kompetenz (GPKE, MaBiS) punkten, die ein UK-System erst nachbauen muss. Die größte Angriffsfläche von Kraken war der Interessenkonflikt — Versorger zögerten, ihr Kernsystem vom Wettbewerber Octopus zu mieten; genau diese Flanke schließt der Spin-off 2026. Umgekehrt gilt: Wer als Lizenznehmer einmal migriert ist, hat kaum noch Verhandlungsmacht über Preiserhöhungen.",
            definition: "Statt Strom zu verkaufen, wird das Betriebssystem des Versorgers verkauft: cloudbasierte Komplettplattformen für Abrechnung, CRM, Marktkommunikation, Zählerdaten und Gerätesteuerung, lizenziert pro Kundenkonto und Jahr. Marktführer ist Kraken (Octopus Energy): über 70 Mio. kontrahierte Accounts weltweit, ~500 Mio. $ vertraglich gesicherter Jahresumsatz, Lizenznehmer u.a. EDF (5 Mio. Kunden), E.ON Next, National Grid US, Origin Energy, Plenitude und Tokyo Gas; Spin-off als eigenständiges Unternehmen Mitte 2026 bei ~8,65 Mrd. $ Bewertung.[[Q:kraken-spinoff]] Deutsche Alternativen: powercloud (Achern, u.a. E.ON-Gruppe als Kunde) und Lynqtech (enercity-Umfeld); dagegen steht der Legacy-Bestand aus SAP IS-U, dessen Wartungsende viele Stadtwerke zur Migration zwingt.",
            wertschoepfung: "SaaS-Ökonomie in Reinform: Die Plattform ist einmal gebaut, jeder zusätzliche lizenzierte Account kostet fast nichts und zahlt jährlich wiederkehrend (€/Account/Jahr). Der eigentliche Verkaufshebel ist der nachweisbare Effizienzgewinn des Lizenznehmers — weniger Service-Personal pro Kunde, weniger Abrechnungsfehler, schnellere Produkteinführung. Switching-Kosten nach Migration sind enorm (das Kernsystem eines Versorgers wechselt man nicht zweimal pro Jahrzehnt), was langfristige Preissetzungsmacht schafft. Kraken hat zudem den Referenz-Beweis eingebaut: Octopus selbst läuft darauf.",
            herausforderungen: "Migrationen sind Großprojekte mit mehrjähriger Laufzeit und hohem Scheiterrisiko — jeder öffentlich gescheiterte Rollout beschädigt das Kerngeschäftsargument. Deutsche Marktkommunikation (GPKE, GeLi Gas, MaBiS-Formate) ist ein erheblicher Lokalisierungsaufwand für internationale Plattformen. Und die Kundenbasis ist konservativ: Stadtwerke entscheiden in Gremien und scheuen den Abschied von SAP trotz Wartungsende.",
            ausblick: "Das Zeitfenster ist regulatorisch aufgespannt: Das auslaufende SAP-IS-U-Ökosystem zwingt hunderte deutsche Versorger in den nächsten Jahren zur Neuentscheidung ihres Kernsystems — der größte Systemwechsel-Markt seit der Liberalisierung. Kraken expandiert nach dem Spin-off aggressiv in Europa (u.a. Zukauf des Berliner Softwareunternehmens Kwest) und tritt dort direkt gegen powercloud, Lynqtech und SAP an. Langfristig wandert die Wertschöpfung des Energievertriebs sichtbar vom Commodity zur Software-Schicht.",
            erloesmodell: "SaaS-Lizenz pro Account/Jahr + Implementierungs-/Migrationsdienstleistung",
            regulierung: "GPKE/GeLi Gas, MaBiS (Marktkommunikation), MsbG, DSGVO",
            kundensegment: "B2B Energieversorger: Incumbents mit Alt-IT, Stadtwerke (SAP-IS-U-Ablösung), internationale Utilities",
            differenzierung: "Nachweisbarer Cost-to-Serve-Effekt, Referenzbetrieb (Octopus auf Kraken), Lokalisierungstiefe der Marktkommunikation, Migrationskompetenz",
            bmc_kanaele: "B2B-Enterprise-Sales direkt an Versorger-Vorstände; Referenzkunden und Analystenberichte als wichtigster Akquisekanal; Systemintegratoren als Implementierungspartner.",
            bmc_kundenbeziehung: "Sehr langfristige Plattformpartnerschaft (10+ Jahre faktische Bindung nach Migration); gemeinsame Roadmap-Entwicklung mit Großkunden.",
            bmc_kostenstruktur: "Plattform-Entwicklung und Cloud-Betrieb als Fixkostenblock; Lokalisierung je Markt (Marktkommunikations-Formate); Migrations-/Onboarding-Teams pro Neukunde.",
            fallbeispiel: "Konkret rechnet sich das Modell am EDF-Deal: EDF Energy migriert seine 5 Mio. britischen Kunden auf Kraken, statt das eigene Altsystem weiterzuentwickeln. Für EDF ist die Kalkulation defensiv — der Cost-to-Serve-Rückstand gegenüber Octopus wurde mit jedem Jahr teurer als die Lizenzgebühr. Für Kraken bedeutet derselbe Vertrag: 5 Mio. Accounts × eine jährliche Lizenzgebühr pro Account, über viele Jahre vertraglich gesichert, bei minimalen Grenzkosten, weil die Plattform bereits existiert. Aggregiert über alle Lizenznehmer ergibt das ~500 Mio. $ vertraglich gesicherten Jahresumsatz auf über 70 Mio. Accounts — und weil Software-Umsätze dieser Qualität mit einem Vielfachen von Energievertriebs-Umsätzen bewertet werden, ist die ausgegliederte Plattform (~8,65 Mrd. $) mehr wert als mancher Versorger mit Millionen eigener Kunden. Die strategische Ironie: Jeder Incumbent, der lizenziert, finanziert die Weiterentwicklung genau der Plattform, die Octopus im Endkundenmarkt zum gefährlichsten Angreifer macht.[[Q:kraken-spinoff]]",
            status: "aktiv",
            radar: { regulierung:1, skalierbarkeit:5, marktrisiko:2, digitalisierung:5, wettbewerb:3, nachhaltigkeit:3 },
            erloesTyp: "Subscription", akteure: ["Kraken (Octopus)","Kaluza (OVO)","powercloud","Lynqtech","SAP S/4HANA Utilities"]
          },
          {
            id: "L3-DIGITAL-BERATUNG-01", title: "ESG-Datenplattform & CSRD-Reporting",
            angreifbarkeit: "Der Omnibus-Rückbau (2026) hat den adressierbaren Pflichtmarkt um ~90% verkleinert — Konsolidierung läuft, und ERP-Incumbents (SAP) absorbieren das Reporting als Feature statt als eigenständiges Produkt. Angreifbar sind Standalone-Plattformen ohne Datenhoheit: Wer nur Formulare füllt, verliert gegen den Anbieter, bei dem die Energiedaten ohnehin liegen (ERP, Messstellenbetreiber, Lieferant).",
            definition: "CSRD (Corporate Sustainability Reporting Directive): Berichtspflicht nach ESRS-Standards. Welle 1 (kapitalmarktorientierte Unternehmen >500 MA) berichtet ab Geschäftsjahr 2024. Mit der finalen Omnibus-Richtlinie (EU) 2026/470 (Amtsblatt Feb. 2026, in Kraft seit März 2026) wurde der Anwendungsbereich drastisch verengt: berichtspflichtig sind nur noch Unternehmen mit >1.000 Mitarbeitenden UND >450 Mio. € Umsatz — rund 90% weniger Unternehmen als ursprünglich vorgesehen; die ESRS-Datenpunkte wurden um ~61% reduziert. Welle-1-Unternehmen können optional erst für GJ 2027 berichten; Umsetzung in nationales Recht bis März 2027.[[Q:csrd-omnibus]] ESRS E1 (Klimawandel): Scope 1, Scope 2 (marktbasiert + standortbasiert), Scope 3 (Lieferkette). Softwareplattformen (Engie Impact, Schneider EcoStruxure, Sphera, measurabl) aggregieren Energiedaten aus SAP/Oracle, IoT-Sensoren, Zählern und berechnen CO₂-Fußabdrücke nach GHG Protocol. Output: extern auditierbare CSRD-konforme Berichte. SaaS: 30.000–300.000 €/Jahr je Unternehmensgröße.",
            wertschoepfung: "Regulatory Push = erzwungene Nachfrage ohne freiwillige Kaufentscheidung → sehr hohe Zahlungsbereitschaft. Switching-Kosten: historische Daten in Plattform migriert, Wechsel teuer. Erweiterungspotenzial: von Reporting zu aktivem Energiemanagement und Beschaffungsoptimierung.",
            herausforderungen: "Markt hochkompetitiv: >100 Anbieter, von Excel-Add-ins bis zu SAP-Suiten. ESRS-Standards wurden spät finalisiert – Anbieter nachrüsten laufend. Abgrenzung zu SAP Sustainability Footprint Management als etabliertem Player schwierig. Omnibus-Schock 2026: ~90% der ursprünglich erwarteten Pflichtkunden fallen weg – Anbieterkonsolidierung absehbar.",
            ausblick: "Die finale Omnibus-Richtlinie (2026) verkleinert den Pflichtmarkt um ~90% – Wachstum verlagert sich auf freiwilliges Reporting (VSME-Standard), Anforderungen von Banken/Investoren und die verbleibenden Großunternehmen >1.000 MA, für die CSRD Wachstumstreiber bleibt. AI-gestützte Rechnungsanalyse automatisiert Datenerfassung. EU-Datenraum Energie (Gaia-X) schafft standardisierten Datenaustausch. 24/7 CFE-Matching als neuer Scope-2-Standard treibt Plattform-Nachfrage.",
            erloesmodell: "SaaS-Jahresabo (30.000–300.000 €) + Implementierungsdienstleistung",
            regulierung: "CSRD, ESRS E1 (Klimawandel), EU-Taxonomieverordnung, GHG Protocol",
            kundensegment: "B2B Unternehmen mit CSRD-Berichtspflicht (nach Omnibus-RL 2026: >1.000 MA und >450 Mio. € Umsatz) + freiwillige VSME-Berichterstatter",
            differenzierung: "CSRD-Konformität, Scope-3-Datentiefe, ERP-Konnektoren, Auditierbarkeit",
            bmc_kanaele: "B2B-Direktvertrieb/Enterprise-Sales an Unternehmen mit CSRD-Pflicht; Implementierungspartner als Co-Vertriebskanal.",
            bmc_kundenbeziehung: "Langfristige SaaS-Bindung mit hohen Switching-Kosten (historische Daten migriert); Beratungskomponente bei Implementierung.",
            bmc_kostenstruktur: "Softwareentwicklung/ERP-Konnektoren als Hauptkosten; Implementierungs- und Consulting-Personal für Onboarding.",
            fallbeispiel: "Konkret zeigt sich der Wert einer ESG-Datenplattform an einem Industrieunternehmen mit 2.000 Mitarbeitenden und 600 Mio. € Umsatz, das auch nach der Omnibus-Verengung von 2026 (Pflicht nur noch >1.000 MA und >450 Mio. € Umsatz) CSRD-berichtspflichtig bleibt: Es muss seinen Scope-2-Energieverbrauch über alle Standorte hinweg lückenlos dokumentieren — Daten, die bisher in dutzenden Excel-Tabellen einzelner Werksleiter verteilt waren. Eine Plattform wie Sphera oder measurabl zieht diese Daten automatisiert aus dem ERP-System und den Zählern, berechnet den CO₂-Fußabdruck nach GHG-Protocol-Methodik und erzeugt einen extern auditierbaren Bericht. Das Unternehmen zahlt dafür 30.000–300.000 € im Jahr — nicht, weil es freiwillig in Software investieren wollte, sondern weil die CSRD-Pflicht keine Alternative lässt. Genau dieser regulatorische Zwang ist der Kern des Geschäftsmodells: Sobald die historischen Energiedaten erst einmal in eine Plattform migriert sind, ist ein Wechsel zu einem günstigeren Anbieter im nächsten Jahr aufwendig genug, dass die meisten Kunden bleiben, auch wenn der Preis steigt.",
            status: "aktiv",
            radar: { regulierung:4, skalierbarkeit:5, marktrisiko:1, digitalisierung:5, wettbewerb:4, nachhaltigkeit:5 },
            erloesTyp: "Subscription", akteure: ["Engie Impact","Schneider EcoStruxure","Sphera","measurabl","SAP Sustainability"]
          }
        ]
      }
    ]
  },

  // ══════════════════════════════════════════════════════════
  // L1: WÄRME & SEKTORKOPPLUNG
  // ══════════════════════════════════════════════════════════
  {
    id: "L1-WAERME", title: "Wärme & Sektorkopplung", icon: "🔥", color: "#DC2626",
    description: "Der am stärksten transformierende Sektor – Fernwärme, KWK, Power-to-Heat und grüner Wasserstoff unter WPG- und GEG-Druck.",
    capabilities: [
      {
        id: "L2-WAERME-FERN", title: "Fernwärme & KWK",
        description: "Netzgebundene Wärmeversorgung unter Dekarbonisierungspflicht.",
        actors: ["Vattenfall Wärme Berlin","E.ON Wärme","enercity","MVV Energie","Hamburg Wärme"],
        items: [
          {
            id: "L3-WAERME-FERN-01", title: "Fernwärme-Monopol & Dekarbonisierungspflicht",
            angreifbarkeit: "Das Netzmonopol schützt vor Wettbewerbern, nicht vor Substitution: Die individuelle Wärmepumpe ist der Angreifer — je höher die Fernwärmepreise (die Preistransparenz-Pflicht macht sie sichtbar), desto attraktiver der Ausstieg zahlungskräftiger Anschlussnehmer, während die Netzfixkosten auf die Verbleibenden umgelegt werden. Die kommunale Wärmeplanung entscheidet die Gebietsaufteilung — wer dort nicht als Vorranggebiet gesetzt wird, verliert den Ausbau-Case.",
            definition: "Fernwärme: natürliches Netzmonopol, ~25.000 km Netze in Deutschland, 14% Wärmebedarf gedeckt. Preisgestaltung bisher weitgehend frei (GWB §19-Missbrauchskontrolle). WPG (Wärmeplanungsgesetz 2024): Kommunen >100.000 EW müssen bis 2026, alle bis 2028 Wärmepläne erstellen.[[Q:wpg-waermeplanung]] GWB §35b (ab 2024): Fernwärmeversorger müssen Dekarbonisierungsfahrplan vorlegen und bis 2030 mindestens 50% EE-Anteil nachweisen.",
            wertschoepfung: "Monopolmarge auf Wärmepreis als historische Hauptquelle. Wert liegt in Netzinfrastruktur (Replacement Value: 1.000–3.000 €/kW) und Wärmedichtegebieten. WPG schafft Planungssicherheit für Investitionen: Wo Fernwärme im Wärmeplan vorgesehen ist, sind Kapitalinvestitionen gesichert.",
            herausforderungen: "Dekarbonisierungspflicht GWB §35b erfordert massive Investitionen in neue Wärmequellen (Großwärmepumpen, Geothermie, Abwärme). Preistransparenz-Pflicht (Fernwärme-Verordnung 2024) erhöht Kundendruck. GEG macht individuelle Wärmepumpen attraktiver – Fernwärme muss preislich mithalten.",
            ausblick: "WPG-Wärmepläne definieren Investitionskorridore bis 2028. Transformationsquellen: Abwärme (Rechenzentren, Industrie), Großwärmepumpen (Flusswasser, Abwasser, Geothermie), grüner Wasserstoff. Vattenfall Berlin als Pionier: 'Kohlefreie Wärme Berlin bis 2030'. Geothermie (München: 100% Geothermie-Fernwärme bis 2040) als Vorbild.",
            erloesmodell: "Wärmepreis (Grundpreis + Arbeitspreis) + CO₂-Aufschlag",
            regulierung: "AVBFernwärmeV, GWB §19/§35b, WPG (2024), KWKG, GEG",
            kundensegment: "B2C/B2B im Fernwärmegebiet (Monopol, keine Wahlfreiheit)",
            differenzierung: "Dekarbonisierungspfad (50% EE bis 2030), Preisstabilität, Netzausdehnung",
            bmc_kanaele: "Kein Vertrieb im klassischen Sinn — Monopolgebiet, Kundenkontakt über Anschlussverträge und kommunale Wärmeplanung (WPG).",
            bmc_kundenbeziehung: "Gebundene Monopolbeziehung ohne Wahlfreiheit (teils Anschluss- und Benutzungszwang); regulatorisch über Preistransparenzpflicht abgesichert.",
            bmc_kostenstruktur: "Netzinfrastruktur (Capex, Replacement Value 1.000–3.000 €/kW) als dominanter Block; Investitionen in Dekarbonisierung (Großwärmepumpen, Geothermie).",
            fallbeispiel: "Konkret zeigt sich die Monopolstellung und ihre neue Pflicht an Vattenfall Wärme Berlin: Ein Haushalt im Fernwärmegebiet kann den Anbieter nicht wechseln wie beim Strom — er ist an das Netz unter seiner Straße gebunden und zahlt den von Vattenfall festgelegten Wärmepreis, kontrolliert nur durch die kartellrechtliche Missbrauchskontrolle nach GWB §19. Seit 2024 hat dieses Monopol aber eine neue Bedingung: GWB §35b verpflichtet Vattenfall, einen Dekarbonisierungsfahrplan vorzulegen und bis 2030 mindestens 50% des Wärmenetzes mit erneuerbaren Quellen zu speisen — Vattenfalls eigenes Ziel lautet 'kohlefreie Wärme Berlin bis 2030'. Das bedeutet konkret: Statt wie bisher ein Kohleheizkraftwerk zu betreiben, muss in Großwärmepumpen, Abwärmenutzung aus Rechenzentren oder Geothermie investiert werden — Kosten, die über den Wärmepreis auf die gebundenen Kunden umgelegt werden, die aber im Gegenzug erstmals eine Wärmeplanungssicherheit erhalten, weil das Wärmeplanungsgesetz festlegt, wo Fernwärme langfristig die vorgesehene Lösung bleibt.",
            status: "aktiv",
            radar: { regulierung:4, skalierbarkeit:1, marktrisiko:2, digitalisierung:2, wettbewerb:1, nachhaltigkeit:3 },
            erloesTyp: "Merchant", akteure: ["Vattenfall Wärme","E.ON Wärme","enercity","MVV","Hamburg Wärme"]
          }
        ]
      },
      {
        id: "L2-WAERME-PTX", title: "Power-to-X & grüner Wasserstoff",
        description: "Sektorkopplung durch Elektrolyse – strategisch unverzichtbar, heute noch subventionsabhängig.",
        actors: ["Linde","thyssenkrupp nucera","RWE Hydrogen","Enapter","H2 Mobility","Hy2gen"],
        items: [
          {
            id: "L3-WAERME-PTX-01", title: "Grüner Wasserstoff (Elektrolyse PtH2)",
            angreifbarkeit: "Solange grüner H2 nicht wettbewerbsfähig ist, konkurriert das Modell vor allem um dieselbe Subventionsbasis: Importe (Ammoniak-Cracking) von besseren EE-Standorten können deutsche Elektrolyse strukturell unterbieten, und die Direktelektrifizierung nimmt dem H2-Case ganze Anwendungsfelder weg (Niedertemperatur-Wärme, Pkw). Verteidigungsfähig sind Standorte mit EE-Überschuss, Netzknoten und Abnehmern in Pipeline-Nähe.",
            definition: "Elektrolyseure (PEM: 60–70% Effizienz; Alkalisch: 70–80%) wandeln EE-Strom in Wasserstoff. Bei 70% Wirkungsgrad und 40 €/MWh Strom: H2-Gestehungskosten ~2,7 €/kg. Marktpreis grüner H2 (2024): 6–10 €/kg. Subventionslücke: 3–7 €/kg, gedeckt durch IPCEI Hydrogen, H2Global, Bundeshaushalt. Abnehmer: Stahl (DRI: thyssenkrupp, ArcelorMittal), Ammoniaksynthese (BASF), Raffinerien, H2-LKW (Daimler Truck, Nikola). Volllaststunden: 4.000–8.000 h/a je nach EE-Strategie.",
            wertschoepfung: "Heute: Subventions-Arbitrage – wer günstigste Fördermittel sichert, gewinnt. Langfristig (2030+): Skaleneffekte in Elektrolyse-Produktion (Lernrate ~15%/Verdopplung). Strategischer Systemwert: Elektrolyseur als flexibler Großverbraucher für Demand Response bei negativen Preisen – doppelt nutzbar.",
            herausforderungen: "Keine Wettbewerbsfähigkeit ohne Subventionen heute. Lieferkette noch nicht industrialisiert (Iridium-Knappheit für PEM). Zertifizierungsinfrastruktur (CertifHy, EU Delegated Acts zu RED III Artikel 27) noch im Aufbau. H2-Transportnetz (H2-Kernnetz) erst ab 2028–2032 verfügbar.",
            ausblick: "Kostenparität mit grauem H2 (~1,5–2 €/kg) ca. 2030–2035 bei günstigen EE-Preisen. Import-H2 aus Nordafrika/ME könnte günstiger als Inlandselektrolyse sein – Deutschland als H2-Importeur? H2 für Stahl (DRI), Chemie (Ammoniak), Schwerverkehr als Priorität-Absatzmärkte.",
            erloesmodell: "Wasserstoffverkaufspreis (€/kg) minus Stromkosten minus Capex-Annuität",
            regulierung: "EU RED III (Erneuerbarkeits-Kriterien, Art. 27), IPCEI, H2Global-Ausschreibungen",
            kundensegment: "B2B Stahlindustrie, Chemie, H2-Mobilität (LKW, Bahn, Schiff)",
            differenzierung: "Standort (nahe günstiger EE), Elektrolyseur-Effizienz, CertifHy-Zertifizierung, Netzanschluss",
            bmc_kanaele: "B2B-Direktvertrieb/Lieferverträge an Industrieabnehmer (Stahl, Chemie, Mobilität); Subventionsanträge (IPCEI, H2Global) als finanzieller Zugangskanal.",
            bmc_kundenbeziehung: "Langfristige Liefer-/Abnahmeverträge (Offtake Agreements) mit Industriekunden zur Investitionssicherheit; keine Endkundenbeziehung.",
            bmc_kostenstruktur: "Stromkosten und Capex-Annuität (Elektrolyseur) als dominante Blöcke; Subventionslücke (3–7 €/kg) erfordert Förderzugang als Kostenfaktor.",
            fallbeispiel: "Konkret zeigt sich die Subventionslücke an einem RWE-Elektrolyseur, der mit Strom zu 40 €/MWh und 70% Wirkungsgrad H2 für rund 2,70 €/kg herstellen kann. Am Markt verkauft sich grüner Wasserstoff aber für 6–10 €/kg — auf den ersten Blick ein gutes Geschäft, tatsächlich aber genau umgekehrt: Die 2,70 €/kg sind die Gestehungskosten, der höhere Marktpreis ist nicht das, was ein Stahl- oder Chemiekunde tatsächlich zahlen will, solange grauer (fossiler) Wasserstoff für 1,5–2 €/kg verfügbar ist. Die Differenz von 3–7 €/kg zwischen Gestehungskosten und dem, was ein Industriekunde realistisch zu zahlen bereit ist, wird heute über H2Global-Ausschreibungen oder IPCEI-Förderprogramme aus Bundesmitteln geschlossen. Der eigentliche Wettlauf für RWE und Wettbewerber wie Linde besteht deshalb nicht darin, schon heute profitabel zu sein, sondern darin, frühzeitig die günstigsten Fördermittel zu sichern und Skaleneffekte in der Elektrolyseproduktion aufzubauen, bevor die Subventionen 2030+ schrittweise auslaufen.",
            status: "emerging",
            radar: { regulierung:3, skalierbarkeit:3, marktrisiko:4, digitalisierung:3, wettbewerb:2, nachhaltigkeit:5 },
            erloesTyp: "Merchant", akteure: ["RWE Hydrogen","Linde","thyssenkrupp nucera","Hy2gen","Air Liquide"]
          }
        ]
      }
    ]
  }

];  // Ende GM_DATA (Basis-Domänen)

// ══════════════════════════════════════════════════════════
// AKTEURS-INDEX
// ══════════════════════════════════════════════════════════
const GM_ACTORS_INDEX = (function() {
  const index = {};
  GM_DATA.forEach(domain => {
    domain.capabilities.forEach(cap => {
      cap.items.forEach(item => {
        if (item.akteure) {
          item.akteure.forEach(a => {
            if (!index[a]) index[a] = [];
            index[a].push({ domainId: domain.id, domainTitle: domain.title, domainIcon: domain.icon, domainColor: domain.color, capId: cap.id, capTitle: cap.title, itemId: item.id, itemTitle: item.title });
          });
        }
      });
    });
  });
  return index;
})();

const GM_ERLOESTYPEN = ["Reguliert","Merchant","Fee-based","Subscription"];

// ══════════════════════════════════════════════════════════
// GLOSSAR (seit v2.0) — Abkürzungen & Fachbegriffe, die in den
// Steckbriefen verwendet werden. Wird (a) als eigene Glossar-Seite
// gerendert und (b) zur automatischen Inline-Hervorhebung mit
// Klick-Popover in app.js genutzt (highlightGlossary()).
// ══════════════════════════════════════════════════════════
const GM_GLOSSARY = [
  // ─── Recht & Regulierung (Deutschland) ───
  { term: "EnWG", full: "Energiewirtschaftsgesetz", category: "Recht & Regulierung (DE)", definition: "Das zentrale deutsche Gesetz, das den rechtlichen Rahmen für Strom- und Gasversorgung regelt — Netzzugang, Entflechtung, Regulierung, Verbraucherschutz." },
  { term: "EEG", full: "Erneuerbare-Energien-Gesetz", category: "Recht & Regulierung (DE)", definition: "Regelt Förderung, Einspeisevergütung und Direktvermarktung von Strom aus erneuerbaren Energien in Deutschland." },
  { term: "ARegV", full: "Anreizregulierungsverordnung", category: "Recht & Regulierung (DE)", definition: "Legt die Methodik fest, mit der die BNetzA die Erlösobergrenzen (zulässige Einnahmen) von Strom- und Gasnetzbetreibern berechnet." },
  { term: "NEST", full: "Netze – Effizient – Sicher – Transformiert", category: "Recht & Regulierung (DE)", definition: "BNetzA-Prozess zur Neugestaltung der Anreizregulierung; zentrale Festlegungen Dez. 2025, gelten für die 5. Regulierungsperiode (Strom ab 2029)." },
  { term: "AgNes", full: "Allgemeine Netzentgeltsystematik Strom", category: "Recht & Regulierung (DE)", definition: "BNetzA-Reformprozess der Netzentgeltsystematik (Eckpunkte Mai 2026): u.a. Beteiligung von Erzeugern an Netzkosten und verbrauchsbasierte Verteilung vorgelagerter Netzkosten, geplant ab 2029." },
  { term: "StromVKG", full: "Strom-Versorgungssicherheits- und Kapazitätengesetz", category: "Recht & Regulierung (DE)", definition: "Gesetz (Verfahren 2026) zur Umsetzung der Kraftwerksstrategie: Ausschreibung von ~12 GW H2-ready-Kapazität ab 2026, umfassender Kapazitätsmarkt ab 2032." },
  { term: "StromNEV", full: "Stromnetzentgeltverordnung", category: "Recht & Regulierung (DE)", definition: "Konkretisiert, wie Netzentgelte aus den anerkannten Kosten der Stromnetzbetreiber kalkuliert werden." },
  { term: "GasNEV", full: "Gasnetzentgeltverordnung", category: "Recht & Regulierung (DE)", definition: "Pendant zur StromNEV für Gasnetzbetreiber — regelt die Kalkulation von Gasnetzentgelten." },
  { term: "MsbG", full: "Messstellenbetriebsgesetz", category: "Recht & Regulierung (DE)", definition: "Regelt den Smart-Meter-Rollout und trennt den Messstellenbetrieb rechtlich vom Netzbetrieb." },
  { term: "BImSchG", full: "Bundes-Immissionsschutzgesetz", category: "Recht & Regulierung (DE)", definition: "Genehmigungsgrundlage für emissionsrelevante Anlagen, u.a. Windparks und Kraftwerke." },
  { term: "WindBG", full: "Windenergieflächenbedarfsgesetz", category: "Recht & Regulierung (DE)", definition: "Verpflichtet die Bundesländer, einen Mindestanteil der Landesfläche für Windenergie auszuweisen (2 % bis 2032)." },
  { term: "KWKG", full: "Kraft-Wärme-Kopplungsgesetz", category: "Recht & Regulierung (DE)", definition: "Fördert die gekoppelte Strom- und Wärmeerzeugung (KWK)." },
  { term: "GEG", full: "Gebäudeenergiegesetz („Heizungsgesetz“)", category: "Recht & Regulierung (DE)", definition: "Schreibt u.a. einen Mindestanteil erneuerbarer Energien bei neuen Heizungen vor (65 % ab 2026 beim Heizungstausch)." },
  { term: "WPG", full: "Wärmeplanungsgesetz", category: "Recht & Regulierung (DE)", definition: "Verpflichtet Kommunen zur kommunalen Wärmeplanung — Grundlage für Fernwärme-Ausbaukorridore." },
  { term: "BEG", full: "Bundesförderung für effiziente Gebäude", category: "Recht & Regulierung (DE)", definition: "Zentrales Förderprogramm für energetische Gebäudesanierung und Heizungstausch." },
  { term: "KStG", full: "Körperschaftsteuergesetz", category: "Recht & Regulierung (DE)", definition: "U.a. relevant für den steuerlichen „Querverbund“ bei Stadtwerken (§4 Abs. 6) — Verrechnung von Gewinnen und Verlusten verschiedener Sparten." },
  { term: "GWB", full: "Gesetz gegen Wettbewerbsbeschränkungen", category: "Recht & Regulierung (DE)", definition: "Deutsches Kartellrecht, u.a. relevant für Konzessionsvergabe und Marktmachtkontrolle." },
  { term: "BGB", full: "Bürgerliches Gesetzbuch", category: "Recht & Regulierung (DE)", definition: "Allgemeines deutsches Zivilrecht — Grundlage für Vertrags- und Mietrecht." },
  { term: "UWG", full: "Gesetz gegen den unlauteren Wettbewerb", category: "Recht & Regulierung (DE)", definition: "Regelt faire Wettbewerbspraktiken, u.a. relevant für Vergleichsportale und Werbeaussagen." },
  { term: "DSGVO", full: "Datenschutz-Grundverordnung", category: "Recht & Regulierung (DE)", definition: "EU-weites Datenschutzrecht, relevant bei Verbrauchs- und Smart-Meter-Daten." },
  { term: "BRAO", full: "Bundesrechtsanwaltsordnung", category: "Recht & Regulierung (DE)", definition: "Regelt das Berufsrecht der Anwaltschaft, u.a. Grenzen für Erfolgshonorare (§49b)." },
  { term: "RVG", full: "Rechtsanwaltsvergütungsgesetz", category: "Recht & Regulierung (DE)", definition: "Regelt die gesetzliche Vergütung von Rechtsanwälten." },
  { term: "EDL-G", full: "Energiedienstleistungsgesetz", category: "Recht & Regulierung (DE)", definition: "Rechtsrahmen für Energieeffizienz-Contracting (Energy Performance Contracting)." },
  { term: "AVBFernwärmeV", full: "Verordnung über Allgemeine Bedingungen für die Versorgung mit Fernwärme", category: "Recht & Regulierung (DE)", definition: "Regelt das Vertragsverhältnis zwischen Fernwärmeversorger und Kunden." },
  { term: "GenG", full: "Genossenschaftsgesetz", category: "Recht & Regulierung (DE)", definition: "Rechtsgrundlage für Energiegenossenschaften (z. B. EWS Schönau)." },
  { term: "VAG", full: "Versicherungsaufsichtsgesetz", category: "Recht & Regulierung (DE)", definition: "Regelt die staatliche Aufsicht über Versicherungsunternehmen." },
  { term: "VVG", full: "Versicherungsvertragsgesetz", category: "Recht & Regulierung (DE)", definition: "Regelt das Vertragsrecht zwischen Versicherer und Versicherungsnehmer." },
  { term: "EnSaG", full: "Energiesicherungsgesetz", category: "Recht & Regulierung (DE)", definition: "Ermöglicht dem Staat in Energiekrisen schnelle Eingriffe zur Versorgungssicherung." },
  { term: "TEHG", full: "Treibhausgas-Emissionshandelsgesetz", category: "Recht & Regulierung (DE)", definition: "Setzt das EU-Emissionshandelssystem (EU ETS) in deutsches Recht um." },
  { term: "MessEG", full: "Mess- und Eichgesetz", category: "Recht & Regulierung (DE)", definition: "Eichrechtliche Grundlage, u.a. für die korrekte Abrechnung an Ladesäulen." },
  { term: "LSV", full: "Ladesäulenverordnung", category: "Recht & Regulierung (DE)", definition: "Regelt technische Mindestanforderungen an öffentliche Ladepunkte für E-Mobilität." },
  { term: "§14a EnWG", full: "Steuerbare Verbrauchseinrichtungen", category: "Recht & Regulierung (DE)", definition: "Erlaubt Verteilnetzbetreibern, Wärmepumpen, EV-Lader und Speicher bei Netzengpässen temporär zu drosseln — gegen einen Netzentgeltnachlass für die Kunden." },
  { term: "§46 EnWG", full: "Konzessionsvergabe", category: "Recht & Regulierung (DE)", definition: "Regelt, dass Kommunen die Nutzungsrechte für Strom- und Gasnetze alle 20 Jahre neu ausschreiben (Konzessionsvergabe)." },
  { term: "§64 EEG", full: "Stromkostenkompensation/-befreiung", category: "Recht & Regulierung (DE)", definition: "Ermöglicht energieintensiver Industrie eine teilweise Befreiung von EEG-Umlage bzw. Netzentgelten." },
  { term: "THG-Quote", full: "Treibhausgasminderungsquote (§37a BImSchG)", category: "Recht & Regulierung (DE)", definition: "Verpflichtet Inverkehrbringer fossiler Kraftstoffe, die Treibhausgasintensität ihrer Kraftstoffe jährlich steigend zu mindern — erfüllbar u.a. durch Zukauf zertifizierter Einsparungen aus E-Fahrzeugen und Ladestrom (Pooling-Dienstleister als Vermittler)." },

  // ─── EU-Recht ───
  { term: "RED III", full: "Renewable Energy Directive III", category: "EU-Recht", definition: "EU-Richtlinie mit Ausbauzielen für erneuerbare Energien und Kriterien dafür, wann Wasserstoff als „grün“ gilt." },
  { term: "CSRD", full: "Corporate Sustainability Reporting Directive", category: "EU-Recht", definition: "EU-Richtlinie zur Nachhaltigkeitsberichtspflicht für Unternehmen." },
  { term: "ESRS", full: "European Sustainability Reporting Standards", category: "EU-Recht", definition: "Konkrete Berichtsstandards zur Umsetzung der CSRD (z. B. ESRS E1 für Klimawandel)." },
  { term: "SFDR", full: "Sustainable Finance Disclosure Regulation", category: "EU-Recht", definition: "EU-Offenlegungspflichten für nachhaltige Finanzprodukte (Art. 8 / Art. 9 Fonds)." },
  { term: "EU ETS", full: "EU Emissions Trading System (EU-Emissionshandel)", category: "EU-Recht", definition: "Europäischer CO₂-Zertifikatehandel für Industrie und Stromerzeugung." },
  { term: "ETS2", full: "EU Emissions Trading System 2 (Gebäude & Verkehr)", category: "EU-Recht", definition: "Separater EU-Emissionshandel für Brennstoffe in Gebäuden und Straßenverkehr, Start 2027; löst perspektivisch den deutschen nationalen CO₂-Preis (BEHG) ab." },
  { term: "VSME", full: "Voluntary Standard for SMEs", category: "EU-Recht", definition: "Freiwilliger, vereinfachter EU-Nachhaltigkeitsberichtsstandard für Unternehmen, die nach der Omnibus-Richtlinie (2026) nicht mehr CSRD-pflichtig sind." },
  { term: "CBAM", full: "Carbon Border Adjustment Mechanism", category: "EU-Recht", definition: "EU-Grenzausgleichsmechanismus, der CO₂-Kosten auf bestimmte importierte Güter überträgt." },
  { term: "EU EMD", full: "Electricity Market Design (EU-Strommarktdesign-Reform)", category: "EU-Recht", definition: "EU-Reformpaket u.a. zu Terminkontrakten für Erzeuger, Nachfrageflexibilität und Energy Communities." },
  { term: "AIFMD", full: "Alternative Investment Fund Managers Directive", category: "EU-Recht", definition: "EU-Regulierung für Manager alternativer Investmentfonds, z. B. Infrastrukturfonds." },
  { term: "AFID", full: "Alternative Fuels Infrastructure Directive (EU-VO 2023/1804)", category: "EU-Recht", definition: "Schreibt Mindestladekapazitäten für E-Mobilität entlang des TEN-T-Netzes vor." },
  { term: "TEN-T", full: "Trans-European Transport Network", category: "EU-Recht", definition: "Europäisches Kernverkehrsnetz — Referenzrahmen für Ladeinfrastruktur-Pflichten (AFID)." },
  { term: "NIS2", full: "Network and Information Security Directive 2", category: "EU-Recht", definition: "EU-Richtlinie zur Cybersicherheit kritischer Infrastruktur, verschärft Melde- und Sicherheitspflichten." },
  { term: "IPCEI", full: "Important Project of Common European Interest", category: "EU-Recht", definition: "EU-Förderkategorie für strategisch wichtige grenzüberschreitende Projekte (z. B. Wasserstoff)." },
  { term: "P2B-VO", full: "EU-Plattform-zu-Unternehmen-Verordnung", category: "EU-Recht", definition: "Schreibt Transparenzpflichten für Online-Plattformen gegenüber gewerblichen Nutzern vor — relevant für Vergleichsportale." },

  // ─── Institutionen & Märkte ───
  { term: "BNetzA", full: "Bundesnetzagentur", category: "Institutionen & Märkte", definition: "Deutschlands zentrale Regulierungsbehörde für Strom-, Gas-, Telekommunikations- und weitere Netze." },
  { term: "ACER", full: "Agency for the Cooperation of Energy Regulators", category: "Institutionen & Märkte", definition: "EU-Agentur zur Koordination der nationalen Energieregulierungsbehörden, u.a. REMIT-Marktüberwachung." },
  { term: "ENTSO-E", full: "European Network of Transmission System Operators for Electricity", category: "Institutionen & Märkte", definition: "Verband der europäischen Übertragungsnetzbetreiber — entwickelt verbindliche Network Codes und den TYNDP." },
  { term: "TYNDP", full: "Ten-Year Network Development Plan", category: "Institutionen & Märkte", definition: "Zehnjahresnetzentwicklungsplan von ENTSO-E — Grundlage für nationale Netzausbauplanungen." },
  { term: "ÜNB", full: "Übertragungsnetzbetreiber (englisch: TSO)", category: "Institutionen & Märkte", definition: "Betreiber der Höchstspannungs-Stromnetze — in Deutschland: 50Hertz, Amprion, TenneT, TransnetBW." },
  { term: "TSO", full: "Transmission System Operator", category: "Institutionen & Märkte", definition: "Englische Bezeichnung für Übertragungsnetzbetreiber (ÜNB)." },
  { term: "VNB", full: "Verteilnetzbetreiber (englisch: DSO)", category: "Institutionen & Märkte", definition: "Betreiber der Mittel- und Niederspannungsnetze, die Endkunden direkt versorgen — ca. 900 in Deutschland." },
  { term: "DSO", full: "Distribution System Operator", category: "Institutionen & Märkte", definition: "Englische Bezeichnung für Verteilnetzbetreiber (VNB)." },
  { term: "FNB", full: "Fernleitungsnetzbetreiber (Gas)", category: "Institutionen & Märkte", definition: "Betreiber der überregionalen Gas-Hochdrucknetze — Pendant zum ÜNB im Gasbereich." },
  { term: "EPEX SPOT", full: "European Power Exchange Spot", category: "Institutionen & Märkte", definition: "Europäische Strombörse für Day-Ahead- und Intraday-Handel." },
  { term: "EEX", full: "European Energy Exchange", category: "Institutionen & Märkte", definition: "Europäische Terminbörse für Strom, Gas, CO₂-Zertifikate und weitere Energieprodukte." },
  { term: "ECC", full: "European Commodity Clearing", category: "Institutionen & Märkte", definition: "Clearingstelle, die Handelsgeschäfte an EEX/EPEX SPOT finanziell absichert." },
  { term: "PRISMA", full: "PRISMA (europäische Gas-Buchungsplattform)", category: "Institutionen & Märkte", definition: "Europäische Plattform zur Buchung von Gasnetz-Kapazitäten an Ein- und Ausspeisepunkten." },

  // ─── Markt- & Regelenergiebegriffe ───
  { term: "FCR", full: "Frequency Containment Reserve (Primärregelleistung)", category: "Markt- & Regelenergie", definition: "Schnellste Regelenergie-Kategorie — Reaktion innerhalb von Sekunden zur Frequenzstabilisierung." },
  { term: "aFRR", full: "automatic Frequency Restoration Reserve (Sekundärregelleistung)", category: "Markt- & Regelenergie", definition: "Automatisch aktivierte Regelenergie mit Reaktionszeit unter 5 Minuten." },
  { term: "mFRR", full: "manual Frequency Restoration Reserve (Minutenreserve)", category: "Markt- & Regelenergie", definition: "Manuell abgerufene Regelenergie mit Reaktionszeit unter 15 Minuten." },
  { term: "SOGL", full: "System Operation Guideline", category: "Markt- & Regelenergie", definition: "EU-Netzkodex zu Systembetrieb und Präqualifikation von Regelenergie-Anbietern, u.a. unabhängigen Aggregatoren." },
  { term: "MaBiS", full: "Marktregeln für die Durchführung der Bilanzkreisabrechnung Strom", category: "Markt- & Regelenergie", definition: "Regelt den Datenaustausch und die Prozesse im Bilanzkreismanagement zwischen Marktteilnehmern und ÜNBs." },
  { term: "GPKE", full: "Geschäftsprozesse zur Kundenbelieferung mit Elektrizität", category: "Markt- & Regelenergie", definition: "Standardisierter Prozess für Lieferantenwechsel und Vertragsabwicklung im Strommarkt." },
  { term: "EDI@Energy", full: "Branchenstandard für elektronischen Datenaustausch (EDIFACT)", category: "Markt- & Regelenergie", definition: "Standardisiertes Nachrichtenformat für die Marktkommunikation zwischen Energieunternehmen, schrittweise durch APIs ersetzt." },
  { term: "REMIT", full: "Regulation on Energy Market Integrity and Transparency", category: "Markt- & Regelenergie", definition: "EU-Verordnung gegen Marktmissbrauch im Energiegroßhandel, überwacht durch ACER." },
  { term: "MiFID II", full: "Markets in Financial Instruments Directive II", category: "Markt- & Regelenergie", definition: "EU-Finanzmarktrichtlinie, die auch den Handel mit Energiederivaten erfasst." },
  { term: "EMIR", full: "European Market Infrastructure Regulation", category: "Markt- & Regelenergie", definition: "EU-Verordnung zur Regulierung von Derivate-Clearing, erhöht Eigenkapitalanforderungen im Handel." },
  { term: "EinsMan", full: "Einspeisemanagement", category: "Markt- & Regelenergie", definition: "Abregelung von EE-Anlagen durch den Netzbetreiber zur Vermeidung von Netzüberlastung, gegen Ausfallarbeit-Entschädigung." },
  { term: "Redispatch", full: "Redispatch 2.0", category: "Markt- & Regelenergie", definition: "Koordinierter Einsatz von Kraftwerken/Anlagen durch ÜNB und VNB zur Behebung von Netzengpässen, seit 2021 vollständig digital koordiniert." },
  { term: "Route-to-Market", full: "Route-to-Market (Vermarktungszugang)", category: "Markt- & Regelenergie", definition: "Dienstleistung, die einem Asset-Eigentümer (z.B. Batteriespeicher) den optimierten Zugang zu Strom- und Regelenergiemärkten verschafft — typischerweise gegen Managementfee plus Erlösbeteiligung." },
  { term: "Tolling", full: "Tolling-Vertrag (Kapazitätsüberlassung zum Festpreis)", category: "Markt- & Regelenergie", definition: "Vertragsstruktur, bei der ein Vermarkter die Kapazität eines Speichers oder Kraftwerks für einen Festpreis übernimmt und das Marktrisiko selbst trägt — macht Projekte für Fremdkapitalgeber finanzierbar (bankable)." },

  // ─── Netz & Technik ───
  { term: "SCADA", full: "Supervisory Control and Data Acquisition", category: "Netz & Technik", definition: "Leitsystem zur Fernüberwachung und -steuerung technischer Anlagen (Kraftwerke, EE-Anlagen, Netze)." },
  { term: "HGÜ", full: "Hochspannungs-Gleichstrom-Übertragung", category: "Netz & Technik", definition: "Übertragungstechnologie für verlustarme Stromtrassen über weite Strecken (z. B. SuedLink, SuedOstLink)." },
  { term: "SMGW", full: "Smart Meter Gateway", category: "Netz & Technik", definition: "Zertifiziertes Kommunikationsmodul, das den intelligenten Stromzähler mit Marktteilnehmern verbindet." },
  { term: "iMSys", full: "intelligentes Messsystem", category: "Netz & Technik", definition: "Smart-Meter-Komplettsystem aus Zähler und Smart Meter Gateway (SMGW)." },
  { term: "iMSB", full: "wettbewerblicher Messstellenbetreiber", category: "Netz & Technik", definition: "Messstellenbetreiber, der im Wettbewerb zum grundzuständigen VNB (gMSB) um Kunden konkurriert." },
  { term: "gMSB", full: "grundzuständiger Messstellenbetreiber", category: "Netz & Technik", definition: "Der per Default für eine Messstelle zuständige Betreiber — in der Regel der örtliche VNB." },
  { term: "BSI", full: "Bundesamt für Sicherheit in der Informationstechnik", category: "Netz & Technik", definition: "Deutsche Behörde für IT-Sicherheit, zertifiziert u.a. Smart Meter Gateways (TR-03109)." },
  { term: "KRITIS", full: "Kritische Infrastrukturen", category: "Netz & Technik", definition: "Einrichtungen mit hoher Bedeutung für das Gemeinwesen (u.a. Energieversorgung), die besonderen Sicherheitsauflagen unterliegen." },
  { term: "SAP IS-U", full: "SAP Industry Solution Utilities", category: "Netz & Technik", definition: "Verbreitete, oft veraltete SAP-Branchenlösung für Abrechnung und Kundenmanagement bei Energieversorgern." },

  // ─── Sektorkopplung & Mobilität ───
  { term: "V2G", full: "Vehicle-to-Grid", category: "Sektorkopplung & Mobilität", definition: "Bidirektionales Laden, bei dem Elektrofahrzeuge Strom auch ins Netz zurückspeisen können." },
  { term: "CPO", full: "Charge Point Operator", category: "Sektorkopplung & Mobilität", definition: "Betreiber von Ladepunkten für Elektrofahrzeuge." },
  { term: "eMSP", full: "e-Mobility Service Provider", category: "Sektorkopplung & Mobilität", definition: "Anbieter von Lade- und Abrechnungsdiensten für E-Mobilist:innen, oft über Roaming an fremden Ladepunkten." },
  { term: "OCPI", full: "Open Charge Point Interface", category: "Sektorkopplung & Mobilität", definition: "Standardprotokoll für das Roaming zwischen verschiedenen Ladenetz-Betreibern." },
  { term: "BESS", full: "Battery Energy Storage System", category: "Sektorkopplung & Mobilität", definition: "Stationärer Großbatteriespeicher zur Netzstabilisierung und Arbitrage." },
  { term: "H2Global", full: "H2Global", category: "Sektorkopplung & Mobilität", definition: "Förderinstrument des Bundes für den Import grünen Wasserstoffs über wettbewerbliche Ausschreibungen." },
  { term: "EHB", full: "European Hydrogen Backbone", category: "Sektorkopplung & Mobilität", definition: "Geplantes europäisches Wasserstoff-Fernleitungsnetz auf Basis von Repurposing und Neubau." },
  { term: "CertifHy", full: "CertifHy", category: "Sektorkopplung & Mobilität", definition: "Europäisches Zertifizierungssystem zum Nachweis der Herkunft (grün/blau/grau) von Wasserstoff." },

  // ─── Finanzierung & Verträge ───
  { term: "PPA", full: "Power Purchase Agreement", category: "Finanzierung & Verträge", definition: "Langfristiger Stromliefervertrag zwischen Erzeuger und Abnehmer, häufig ohne staatliche Förderung." },
  { term: "CfD", full: "Contract for Difference (Differenzvertrag)", category: "Finanzierung & Verträge", definition: "Vertragsform, bei der die Differenz zwischen einem vereinbarten Strike Price und dem Marktpreis finanziell ausgeglichen wird." },
  { term: "SPV", full: "Special Purpose Vehicle (Projektgesellschaft)", category: "Finanzierung & Verträge", definition: "Eigenständige Gesellschaft, die ein einzelnes Projekt hält und finanziert — Standard bei Projektfinanzierungen." },
  { term: "DSCR", full: "Debt Service Coverage Ratio", category: "Finanzierung & Verträge", definition: "Kennzahl, die das Verhältnis von Cashflow zu Schuldendienst misst — zentral für Projektfinanzierungen." },
  { term: "EURIBOR", full: "Euro Interbank Offered Rate", category: "Finanzierung & Verträge", definition: "Referenzzinssatz, auf den viele variable Kreditzinsen (z. B. Projektfinanzierungen) aufgesetzt werden." },
  { term: "Greenium", full: "Greenium", category: "Finanzierung & Verträge", definition: "Kunstwort aus „Green“ + „Premium“: der Zinsvorteil, den grüne Anleihen gegenüber konventionellen Anleihen erzielen." },
  { term: "EuGB", full: "EU Green Bond Standard", category: "Finanzierung & Verträge", definition: "Strengerer EU-Standard zur Klassifikation und Berichtspflicht von grünen Anleihen, seit 2024 in Kraft." },
  { term: "SLB", full: "Sustainability-Linked Bond", category: "Finanzierung & Verträge", definition: "Anleihe, deren Zinskupon an das Erreichen von ESG-Kennzahlen gekoppelt ist." },
  { term: "KAGB", full: "Kapitalanlagegesetzbuch", category: "Finanzierung & Verträge", definition: "Deutsches Investmentrecht — u.a. Rechtsgrundlage für geschlossene Infrastrukturfonds." },
  { term: "Basel IV", full: "Basel IV", category: "Finanzierung & Verträge", definition: "Internationale Bankenregulierung zu Eigenkapitalanforderungen — erhöht die Kosten für Projektfinanzierungen." },
  { term: "VOB/B", full: "Vergabe- und Vertragsordnung für Bauleistungen, Teil B", category: "Finanzierung & Verträge", definition: "Standardvertragsbedingungen für Bauleistungen, häufig Basis von EPC-Verträgen." },
  { term: "FIDIC", full: "Fédération Internationale Des Ingénieurs-Conseils", category: "Finanzierung & Verträge", definition: "International verbreitete Standardvertragsmuster für große Bau- und EPC-Projekte." },

  // ─── Sonstige Markt- & Geschäftsbegriffe ───
  { term: "HKN", full: "Herkunftsnachweis (englisch: GO)", category: "Sonstige Begriffe", definition: "Handelbares Zertifikat, das den Ursprung von 1 MWh erneuerbarem Strom bescheinigt — getrennt vom physischen Stromhandel." },
  { term: "GO", full: "Guarantee of Origin", category: "Sonstige Begriffe", definition: "Englische Bezeichnung für Herkunftsnachweis (HKN)." },
  { term: "RECS", full: "Renewable Energy Certificate System", category: "Sonstige Begriffe", definition: "Internationales Register- und Handelssystem für Herkunftsnachweise." },
  { term: "24/7 CFE", full: "24/7 Carbon-Free Energy", category: "Sonstige Begriffe", definition: "Standard für stündliches (statt nur jährliches) Matching von Verbrauch und CO₂-freier Erzeugung — getrieben u.a. von Google/Microsoft." },
  { term: "CPA", full: "Cost per Acquisition", category: "Sonstige Begriffe", definition: "Vergütungsmodell, bei dem pro erfolgreich vermitteltem Neukunden eine feste Provision gezahlt wird (typisch bei Vergleichsportalen)." },
  { term: "IPMVP", full: "International Performance Measurement and Verification Protocol", category: "Sonstige Begriffe", definition: "Standard zur Messung und Verifizierung von Energieeinsparungen, zentral im Energieeffizienz-Contracting (EPC)." },
  { term: "GGV", full: "Gemeinschaftliche Gebäudeversorgung", category: "Sonstige Begriffe", definition: "Vereinfachte Alternative zum Mieterstrom (§42b EnWG) — Solarstrom wird im Gebäude verteilt, ohne dass der Vermieter Energielieferant wird." },
  { term: "GVT", full: "Grundversorgungstarif", category: "Sonstige Begriffe", definition: "Tarif, den der Grundversorger Haushalten ohne expliziten Liefervertrag in Rechnung stellt." },
  { term: "Utility-OS", full: "Utility Operating System (Versorger-Kernsystem)", category: "Sonstige Begriffe", definition: "Cloudbasierte Komplettplattform für Abrechnung, CRM, Marktkommunikation und Gerätesteuerung eines Energieversorgers, als Lizenzprodukt pro Kundenkonto vermarktet (z.B. Kraken, powercloud, Lynqtech)." }
];

// ══════════════════════════════════════════════════════════
// QUELLENREGISTER (Pilot seit v2.4) — belegte Primär-/Behörden-
// quellen zu Schlüsselzahlen. Referenziert im Fließtext über
// Q-Marker der Form "[[" + "Q:id]]" (gerendert als klickbares Quellen-Popover, app.js)
// und als eigene Quellen-Seite (renderQuellen). Bewusst als Pilot
// zunächst an den fachlich kritischsten/korrigierten Kennzahlen.
// ══════════════════════════════════════════════════════════
const GM_QUELLEN = [
  { id: "bnetza-ekzins", kurz: "BNetzA — Eigenkapitalzinssatz 4. Regulierungsperiode (5,07 % Neu / 3,51 % Alt)", herausgeber: "Bundesnetzagentur", typ: "Behörde", url: "https://www.bundesnetzagentur.de/SharedDocs/Pressemitteilungen/DE/2021/20211020_EKZins.html", stand: "2021 (BGH-bestätigt 2023)" },
  { id: "suedlink-tennet", kurz: "SuedLink — Vorhabenträger TenneT & TransnetBW, Investition rund 10 Mrd. €", herausgeber: "TenneT / TransnetBW", typ: "Unternehmen", url: "https://www.tennet.eu/de/projekte/suedlink", stand: "2024" },
  { id: "next-shell", kurz: "Shell schließt Übernahme von Next Kraftwerke ab", herausgeber: "Shell / Next Kraftwerke", typ: "Unternehmen", url: "https://www.next-kraftwerke.com/news/shell-completes-acquisition-of-next-kraftwerke", stand: "2021" },
  { id: "csrd-omnibus", kurz: "Omnibus-Richtlinie (EU) 2026/470 — CSRD-Pflicht nur noch >1.000 MA & >450 Mio. € Umsatz", herausgeber: "EU-Amtsblatt", typ: "EU-Recht", url: "https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32026L0470", stand: "Feb. 2026 (in Kraft 18.3.2026)" },
  { id: "afir-emd", kurz: "EU-Strommarktreform & AFIR — bidirektionale Ladepunkte ab 2027", herausgeber: "Rat der EU", typ: "EU-Recht", url: "https://www.consilium.europa.eu/en/policies/electricity-market-reform/", stand: "2024" },
  { id: "enwg-41a", kurz: "§ 41a EnWG — dynamische Stromtarife (Pflicht >100.000 Kunden, ab 2025 alle)", herausgeber: "Gesetze im Internet (BMJ)", typ: "Gesetz", url: "https://www.gesetze-im-internet.de/enwg_2005/__41a.html", stand: "2025" },
  { id: "enwg-42b", kurz: "§ 42b EnWG — Gemeinschaftliche Gebäudeversorgung (Solarpaket I, Mai 2024)", herausgeber: "Gesetze im Internet (BMJ)", typ: "Gesetz", url: "https://www.gesetze-im-internet.de/enwg_2005/__42b.html", stand: "2024" },
  { id: "eeg-foerder", kurz: "EEG-Fördersätze & Mieterstromzuschlag (ca. 1,6–2,6 ct/kWh)", herausgeber: "Bundesnetzagentur", typ: "Behörde", url: "https://www.bundesnetzagentur.de/DE/Fachthemen/ElektrizitaetundGas/ErneuerbareEnergien/EEG_Foerderung/start.html", stand: "2025" },
  { id: "netzengpass", kurz: "Netzengpassmanagement-Kosten (2023 ~3,1 Mrd. €, 2022 ~4,2 Mrd. €)", herausgeber: "Bundesnetzagentur", typ: "Behörde", url: "https://www.bundesnetzagentur.de/DE/Fachthemen/ElektrizitaetundGas/Versorgungssicherheit/Netzengpassmanagement/start.html", stand: "2024 (für 2023)" },
  { id: "tibber", kurz: "Tibber — monatliche Grundgebühr 5,99 €", herausgeber: "Tibber", typ: "Unternehmen", url: "https://support.tibber.com/de/articles/12310314-grund-und-arbeitspreis-bei-tibber", stand: "2025" },
  { id: "enpal", kurz: "Enpal überschreitet 100.000 Kunden / >300.000 Einheiten", herausgeber: "Enpal", typ: "Unternehmen", url: "https://www.corporate.enpal.com/pressemitteilungen/marktfuhrer-enpal-uberschreitet-marke-von-100-000-kunden-und-10-000-warmepumpen", stand: "2025" },
  { id: "eeg-51", kurz: "§ 51 EEG — kein anzulegender Wert bei negativen Preisen", herausgeber: "Gesetze im Internet (BMJ)", typ: "Gesetz", url: "https://www.gesetze-im-internet.de/eeg_2014/__51.html", stand: "2025" },
  { id: "bnetza-h2-kernnetz", kurz: "BNetzA genehmigt Wasserstoff-Kernnetz (9.040 km, 18,9 Mrd. €)", herausgeber: "Bundesnetzagentur", typ: "Behörde", url: "https://www.bundesnetzagentur.de/SharedDocs/Pressemitteilungen/DE/2024/20241022_H2Kernnetz.html", stand: "Okt. 2024" },
  { id: "windseeg-offshore", kurz: "§ 1 WindSeeG — Offshore-Ausbauziele (30 GW 2030 / 40 GW 2035 / 70 GW 2045)", herausgeber: "Gesetze im Internet (BMJ)", typ: "Gesetz", url: "https://www.gesetze-im-internet.de/windseeg/", stand: "2024" },
  { id: "eeg-ziele", kurz: "§ 4 EEG — Ausbaupfad 2030 (80 % EE; 215 GW PV, 115 GW Wind an Land)", herausgeber: "Gesetze im Internet (BMJ)", typ: "Gesetz", url: "https://www.gesetze-im-internet.de/eeg_2014/__4.html", stand: "2023" },
  { id: "windbg-flaeche", kurz: "WindBG — 2 %-Flächenziel für Windenergie an Land (bis 2032)", herausgeber: "Gesetze im Internet (BMJ)", typ: "Gesetz", url: "https://www.gesetze-im-internet.de/windbg/", stand: "2022/2025" },
  { id: "geg-heizung", kurz: "GEG — 65 %-EE-Pflicht bei neuen Heizungen (Heizungstausch)", herausgeber: "Gesetze im Internet (BMJ)", typ: "Gesetz", url: "https://www.gesetze-im-internet.de/geg/", stand: "2024" },
  { id: "wpg-waermeplanung", kurz: "WPG — kommunale Wärmeplanung (Fristen 2026/2028)", herausgeber: "Gesetze im Internet (BMJ)", typ: "Gesetz", url: "https://www.gesetze-im-internet.de/wpg/", stand: "in Kraft 2024" },
  { id: "nest-festlegung", kurz: "BNetzA — NEST-Festlegungen: Kostenregulierung Strom-/Gasnetze, 5. Regulierungsperiode Strom ab 2029", herausgeber: "Bundesnetzagentur", typ: "Behörde", url: "https://www.bundesnetzagentur.de/SharedDocs/Pressemitteilungen/DE/2025/20251209_NEST.html", stand: "Dez. 2025" },
  { id: "agnes-reform", kurz: "BNetzA — AgNes: Reform der Netzentgeltsystematik Strom (Eckpunkte, u.a. Netzentgelt-Beteiligung von Erzeugern)", herausgeber: "Bundesnetzagentur", typ: "Behörde", url: "https://www.bundesnetzagentur.de/SharedDocs/Pressemitteilungen/DE/2026/20260527_Agnes.html", stand: "Mai 2026 (Rahmenfestlegung geplant Ende 2026)" },
  { id: "stromvkg", kurz: "BMWE — Grundsatzeinigung mit EU-Kommission zur Kraftwerksstrategie (12 GW Ausschreibungen 2026, Kapazitätsmarkt ab 2032)", herausgeber: "Bundesministerium für Wirtschaft und Energie", typ: "Behörde", url: "https://www.bundeswirtschaftsministerium.de/Redaktion/DE/Pressemitteilungen/2026/01/20260115-grundsatzeinigung-mit-europaeischen-kommission-ueber-eckpunkte-der-kraftwerksstrategie.html", stand: "Jan. 2026" },
  { id: "kraken-spinoff", kurz: "Octopus Energy Group kündigt Kraken-Spin-off an (>70 Mio. kontrahierte Accounts, ~500 Mio. $ gesicherter Jahresumsatz, Bewertung ~8,65 Mrd. $)", herausgeber: "Octopus Energy Group", typ: "Unternehmen", url: "https://octopus.energy/press/octopus-energy-group-to-spin-off-kraken/", stand: "Sept. 2025 (Vollzug geplant Mitte 2026)" },
  { id: "thg-quote", kurz: "THG-Quote — Funktionsweise & Prämienniveau für E-Fahrzeuge (2026: je nach Anbieter ~300–450 €)", herausgeber: "ADAC", typ: "Verband", url: "https://www.adac.de/rund-ums-fahrzeug/elektromobilitaet/elektroauto/thg-quote/", stand: "Juli 2026" }
];

// ══════════════════════════════════════════════════════════
// REGULIERUNGS-TIMELINE
// ══════════════════════════════════════════════════════════
const GM_TIMELINE = [
  { year: 2021, events: [
    { id:"TL-2021-01", title:"Redispatch 2.0 in Kraft", desc:"ÜNB-VNB-Koordination für Einspeisemanagement und Redispatch verpflichtend. Alle Anlagen >100 kW müssen fernsteuerbar sein.", domains:["L1-UNB","L1-VNB"], tags:["Netzbetrieb","Regulierung"] },
    { id:"TL-2021-02", title:"EEG 2021: 65% EE bis 2030", desc:"Direktvermarktungspflicht ab 100 kW. Neue Ausschreibungsregeln für Wind und Solar.", domains:["L1-ERZ","L1-AGG"], tags:["EEG","Markt"] }
  ]},
  { year: 2022, events: [
    { id:"TL-2022-01", title:"EU ETS Phase 4 verschärft", desc:"Linear Reduction Factor 2,2% p.a. Kostenlose Zuteilung für Stromerzeuger entfällt vollständig. CO₂-Preise >80 €/t.", domains:["L1-HANDEL"], tags:["CO₂","Emissionshandel"] },
    { id:"TL-2022-02", title:"LNG-Terminals: Notfallbeschleunigung", desc:"Nach Russland-Gaslieferstopp: FSRU-Terminals in Brunsbüttel, Wilhelmshaven, Lubmin im Schnellverfahren (LNG-BeschlG) genehmigt.", domains:["L1-GAS"], tags:["Gasversorgung","Versorgungssicherheit"] },
    { id:"TL-2022-03", title:"WindBG: 2%-Flächenziel", desc:"Windenergieflächenbedarfsgesetz verpflichtet Bundesländer, 2% Landesfläche für Windenergie auszuweisen bis 2032.", domains:["L1-ERZ","L1-PROJ"], tags:["Wind","Genehmigung"] }
  ]},
  { year: 2023, events: [
    { id:"TL-2023-01", title:"EEG 2023: 80% EE bis 2030", desc:"Solar-Ausbauziel 215 GW, Wind onshore 115 GW, Offshore 30 GW. Agri-PV und Floating-PV als neue Kategorien.", domains:["L1-ERZ"], tags:["EEG","Solar","Wind"] },
    { id:"TL-2023-02", title:"MsbG-Reform: Rollout-Beschleunigung", desc:"Rollout-Pflicht für iMSys: >6.000 kWh/a ab 2025. BSI-Zertifizierungsprozess vereinfacht. MSB-Entgelte neu geregelt.", domains:["L1-VNB","L1-DIGITAL"], tags:["Smart Meter","MSB"] },
    { id:"TL-2023-03", title:"EU AFID: Ladeinfrastruktur-Pflichten", desc:"Mindest-Ladekapazität alle 60 km auf TEN-T-Kernnetz ab 2025. HPC-Pflicht (150 kW) ab 2025.", domains:["L1-EMOB"], tags:["eMobility","Ladeinfrastruktur"] },
    { id:"TL-2023-04", title:"CSRD tritt in Kraft", desc:"Corporate Sustainability Reporting Directive: Berichtspflicht zunächst für kapitalmarktorientierte Unternehmen >500 MA ab Geschäftsjahr 2024; weitere Wellen durch EU-Omnibus (2025) verschoben. Treibt ESG-Datenplattform-Markt.", domains:["L1-DIGITAL"], tags:["ESG","Reporting"] },
    { id:"TL-2023-05", title:"Wärmeplanungsgesetz (WPG) beschlossen", desc:"Kommunen >100.000 EW müssen bis 2026, alle bis 2028 kommunale Wärmepläne erstellen.", domains:["L1-WAERME"], tags:["Wärme","Kommunal"] }
  ]},
  { year: 2024, events: [
    { id:"TL-2024-01", title:"§14a EnWG: Steuerbare Verbrauchseinrichtungen", desc:"DSOs dürfen WP, EV-Lader, Speicher bei Netzengpässen auf 4,2 kW dimmen. Gegenleistung: pauschaler Netzentgeltnachlass (Modul 1, ~110–190 €/Jahr) oder reduzierter Arbeitspreis (Modul 2).", domains:["L1-VNB","L1-DIGITAL"], tags:["DSO","Flexibilität"] },
    { id:"TL-2024-02", title:"H2-Kernnetz genehmigt (BNetzA)", desc:"Rund 9.040 km Wasserstoff-Kernnetz genehmigt (Investition ~19 Mrd. €). Amortisationskontomodell als Finanzierungsrahmen.", domains:["L1-GAS"], tags:["Wasserstoff","Infrastruktur"] },
    { id:"TL-2024-03", title:"EU Green Bond Standard (EuGB) in Kraft", desc:"Einheitlicher Standard mit Taxonomie-Konformitätsprüfung und obligatorischem Impact Reporting.", domains:["L1-FINANZ"], tags:["Green Finance","Taxonomie"] },
    { id:"TL-2024-04", title:"MaBiS-Reform BK6-24-174", desc:"Neue Marktkommunikationsregeln für Bilanzkreismanagement. API-basierter Datenaustausch ersetzt EDIFACT schrittweise bis 2027.", domains:["L1-UNB","L1-VERTRIEB"], tags:["MaBiS","Marktkommunikation"] }
  ]},
  { year: 2025, events: [
    { id:"TL-2025-01", title:"Smart Meter Rollout-Pflicht (>6.000 kWh/a)", desc:"Alle Verbrauchsstellen >6.000 kWh/a müssen mit iMSys ausgestattet sein. Grundlage für dynamische Tarife.", domains:["L1-VNB","L1-DIGITAL"], tags:["Smart Meter","Rollout"] },
    { id:"TL-2025-02", title:"EnWG §41a: Dynamische Tarife Pflicht", desc:"Ab 2025 müssen alle Stromlieferanten (zuvor nur Versorger >100.000 Kunden) dynamische, EPEX-basierte Tarife für Kunden mit intelligentem Messsystem anbieten. Tibber/aWATTar-Modell wird Massenmarkt.", domains:["L1-VERTRIEB"], tags:["Dynamische Tarife","Lieferant"] },
    { id:"TL-2025-03", title:"AFID HPC-Pflicht TEN-T Kernnetz", desc:"Mindestens 150 kW Ladekapazität alle 60 km auf TEN-T-Kernnetz vollständig umgesetzt.", domains:["L1-EMOB"], tags:["eMobility","HPC"] },
    { id:"TL-2025-04", title:"CSRD-Welle 2 durch EU-Omnibus verschoben", desc:"Stop-the-clock-Richtlinie verschiebt Welle 2 um zwei Jahre; im Dez. 2025 einigen sich Rat und Parlament auf die finale Omnibus-Vereinfachung (verabschiedet Feb. 2026, siehe dort). Dämpft den kurzfristigen Boost für ESG-Datenplattformen.", domains:["L1-DIGITAL"], tags:["CSRD","ESG"] },
    { id:"TL-2025-05", title:"Solarspitzengesetz in Kraft", desc:"Reaktion auf negative Strompreise durch PV-Spitzen: keine EEG-Vergütung mehr bei negativen Preisen für Neuanlagen (§51 EEG verschärft), dafür Nachvergütung am Förderende; Anreiz für Speicher und steuerbare Einspeisung.[[Q:eeg-51]]", domains:["L1-ERZ","L1-PROSUMER"], tags:["EEG","Solar"] },
    { id:"TL-2025-06", title:"NEST-Festlegungen der BNetzA", desc:"Kostenregulierung für Strom- und Gasnetzbetreiber neu festgelegt: 5. Regulierungsperiode Strom ab 2029 (5 Jahre, ab 6. Periode nur noch 3 Jahre), fortgeführte Anreizregulierung mit vereinfachter TOTEX-Logik.[[Q:nest-festlegung]]", domains:["L1-UNB","L1-VNB"], tags:["ARegV","Regulierung"] }
  ]},
  { year: 2026, events: [
    { id:"TL-2026-01", title:"WPG: Kommunale Wärmepläne >100.000 EW (Frist)", desc:"Alle Kommunen >100.000 EW müssen Wärmepläne vorgelegt haben. Entscheidet über Fernwärme-Ausbaukorridore.", domains:["L1-WAERME"], tags:["Wärme","Kommunal"] },
    { id:"TL-2026-02", title:"EU EMD: Neues Elektrizitätsmarkt-Design", desc:"Terminkontrakte für EE-Erzeuger, stärkere Nachfrageflexibilität; bidirektionale Ladepunkte ab 2027 über die AFIR verankert.", domains:["L1-AGG","L1-EMOB","L1-VERTRIEB"], tags:["Marktdesign","Flexibilität"] },
    { id:"TL-2026-03", title:"GEG: 65% EE-Pflicht bei Heizungstausch", desc:"Beim Heizungsaustausch muss die neue Anlage zu mindestens 65% mit EE betrieben werden. Wärmepumpen-Boom.", domains:["L1-WAERME","L1-DIGITAL"], tags:["GEG","Wärmepumpe"] },
    { id:"TL-2026-04", title:"CSRD-Omnibus final: RL (EU) 2026/470", desc:"Amtsblatt Feb. 2026, in Kraft März 2026: CSRD-Pflicht nur noch für Unternehmen >1.000 MA und >450 Mio. € Umsatz (~90% weniger Pflichtunternehmen), ESRS-Datenpunkte um ~61% reduziert; Umsetzung in nationales Recht bis März 2027.[[Q:csrd-omnibus]]", domains:["L1-DIGITAL","L1-FINANZ"], tags:["CSRD","ESG"] },
    { id:"TL-2026-05", title:"CBAM: Zahlungspflicht beginnt", desc:"Carbon Border Adjustment Mechanism verlässt die reine Berichtsphase: Importeure emissionsintensiver Güter (Stahl, Zement, Dünger, Aluminium, Strom, H2) müssen CBAM-Zertifikate erwerben; kostenlose EU-ETS-Zuteilung läuft parallel bis 2034 aus.", domains:["L1-HANDEL"], tags:["CBAM","CO₂"] },
    { id:"TL-2026-06", title:"Kraftwerksstrategie: 12-GW-Ausschreibungen (StromVKG)", desc:"Nach Grundsatzeinigung mit der EU-Kommission (Jan. 2026) werden noch 2026 rund 12 GW steuerbare, H2-ready Kraftwerkskapazität technologieoffen ausgeschrieben; weitere Auktionen 2027/2029, Gesamtbedarf ~41 GW bis 2031.[[Q:stromvkg]]", domains:["L1-ERZ","L1-MARKT"], tags:["Kraftwerksstrategie","Versorgungssicherheit"] },
    { id:"TL-2026-07", title:"AgNes: Eckpunkte zur Netzentgeltreform", desc:"BNetzA stellt Reform der Netzentgeltsystematik Strom vor (Mai 2026): u.a. Beteiligung von Erzeugern an Netzkosten, verbrauchsbasierte Verteilung vorgelagerter Netzkosten; Rahmenfestlegung Ende 2026, Wirkung ab 2029 geplant.[[Q:agnes-reform]]", domains:["L1-UNB","L1-VNB","L1-ERZ"], tags:["Netzentgelte","Regulierung"] },
    { id:"TL-2026-08", title:"Kraken-Spin-off von Octopus Energy", desc:"Octopus Energy gliedert seine Utility-Plattform Kraken als eigenständiges Unternehmen aus (Bewertung ~8,65 Mrd. $, >70 Mio. kontrahierte Accounts; Lizenznehmer u.a. EDF, E.ON Next, Origin, Tokyo Gas). Software-Lizenzierung etabliert sich damit sichtbar als eigenes Geschäftsmodell der Energiewirtschaft.[[Q:kraken-spinoff]]", domains:["L1-DIGITAL","L1-VERTRIEB"], tags:["Software","Plattform"] }
  ]},
  { year: 2027, events: [
    { id:"TL-2027-01", title:"Bidirektionale Ladepunkte Pflicht (AFIR)", desc:"AFIR: Alle ab 2027 neu installierten Ladepunkte müssen bidirektionale Kommunikation unterstützen – technische Voraussetzung für V2G (keine Nutzungspflicht).", domains:["L1-EMOB","L1-AGG"], tags:["V2G","eMobility"] },
    { id:"TL-2027-02", title:"MaBiS 2.0: API-Vollbetrieb", desc:"Vollständige Umstellung des Bilanzkreismanagements auf API-basierte Echtzeitkommunikation. EDIFACT abgelöst.", domains:["L1-UNB","L1-VERTRIEB"], tags:["MaBiS","IT"] },
    { id:"TL-2027-03", title:"ETS2: Emissionshandel Gebäude & Verkehr startet", desc:"Separates EU-Emissionshandelssystem für Brennstoffe in Gebäuden und Straßenverkehr; löst perspektivisch den deutschen nationalen CO₂-Preis (BEHG) ab. Preiswirkung auf Heizöl/Erdgas/Fernwärme und Kraftstoffe.", domains:["L1-HANDEL","L1-WAERME"], tags:["ETS2","CO₂"] },
    { id:"TL-2027-04", title:"Konzept für umfassenden Kapazitätsmarkt", desc:"Laut Kraftwerksstrategie/StromVKG legt die Bundesregierung bis 2027 das Konzept für den technologieoffenen Kapazitätsmarkt vor, der ab 2032 die Versorgungssicherheit gewährleisten soll; zweite Ausschreibungsrunde für steuerbare Kapazität.[[Q:stromvkg]]", domains:["L1-ERZ","L1-MARKT"], tags:["Kapazitätsmarkt","Marktdesign"] }
  ]},
  { year: 2028, events: [
    { id:"TL-2028-01", title:"WPG: Alle Kommunen Wärmepläne (Frist)", desc:"Alle deutschen Kommunen müssen Wärmepläne vorliegen haben. Umsetzungsphase beginnt.", domains:["L1-WAERME"], tags:["Wärme","WPG"] },
    { id:"TL-2028-02", title:"SuedLink & SuedOstLink: Inbetriebnahme", desc:"Beide HGÜ-Corridore (SuedLink ~10 Mrd. €, TenneT/TransnetBW; SuedOstLink ~4–5 Mrd. €, 50Hertz/TenneT) sollen Ende der 2020er operativ sein. Löst Nord-Süd-Engpass.", domains:["L1-UNB"], tags:["Netzausbau","HGÜ"] },
    { id:"TL-2028-03", title:"EEG-Auslauf erste Altanlagen (Repowering-Welle)", desc:"Erste Windanlagen aus 2000–2005 laufen aus 20-j. EEG-Förderung aus. Repowering oder Merchant-Betrieb.", domains:["L1-ERZ","L1-PROJ"], tags:["EEG-Auslauf","Repowering"] }
  ]},
  { year: 2029, events: [
    { id:"TL-2029-01", title:"5. Regulierungsperiode Strom (NEST-Rahmen)", desc:"Neuer Regulierungsrahmen aus den NEST-Festlegungen greift: 5. Regulierungsperiode für Stromnetzbetreiber (5 Jahre); zugleich soll die reformierte AgNes-Netzentgeltsystematik wirken (u.a. Netzentgelt-Beteiligung von Erzeugern).[[Q:nest-festlegung]]", domains:["L1-UNB","L1-VNB","L1-ERZ"], tags:["ARegV","Netzentgelte"] },
    { id:"TL-2029-02", title:"Dritte Kapazitäts-Ausschreibung (StromVKG)", desc:"Letzte der drei geplanten technologieoffenen Auktionen für steuerbare Kapazität vor dem Übergang in den umfassenden Kapazitätsmarkt (Gesamtbedarf ~41 GW bis 2031).[[Q:stromvkg]]", domains:["L1-ERZ","L1-MARKT"], tags:["Kraftwerksstrategie","Versorgungssicherheit"] }
  ]},
  { year: 2030, events: [
    { id:"TL-2030-01", title:"80% Erneuerbare im Strommix (Ziel)", desc:"Nationales Ziel: 215 GW Solar, 115 GW Wind onshore, 30 GW Wind offshore.[[Q:eeg-ziele]]", domains:["L1-ERZ","L1-PROJ"], tags:["Energiewende","Ziel"] },
    { id:"TL-2030-02", title:"CBAM: Fortschreitende Implementierung", desc:"Carbon Border Adjustment Mechanism in fortgeschrittener Phase: Zahlungspflicht seit 2026, paralleler Auslauf der kostenlosen EU-ETS-Zuteilung bis 2034. Emissionsintensive Importe zahlen CO₂-Preis.", domains:["L1-HANDEL"], tags:["CBAM","CO₂"] },
    { id:"TL-2030-03", title:"H2-Kernnetz: Erste Korridore operativ", desc:"Nordsee-Ruhrgebiet H2-Korridor operativ. H2-Netzentgelte greifen. Europäische EHB-Verknüpfung in Aufbau.", domains:["L1-GAS","L1-WAERME"], tags:["Wasserstoff","H2-Netz"] }
  ]},
  { year: 2032, events: [
    { id:"TL-2032-01", title:"H2-Kernnetz vollständig operativ", desc:"Rund 9.040 km H2-Kernnetz vollständig in Betrieb. Verknüpfung mit European Hydrogen Backbone.", domains:["L1-GAS","L1-WAERME","L1-PROJ"], tags:["Wasserstoff","H2-Backbone"] },
    { id:"TL-2032-02", title:"WindBG: 2%-Flächenziel aller Länder (Frist)", desc:"Alle Bundesländer müssen 2% Landesfläche für Windenergie ausgewiesen haben.", domains:["L1-ERZ","L1-PROJ"], tags:["Wind","Fläche"] },
    { id:"TL-2032-03", title:"Umfassender Kapazitätsmarkt (Ziel StromVKG)", desc:"Der technologieoffene Kapazitätsmarkt soll ab 2032 sicherstellen, dass ausreichend steuerbare Kapazität im System vorhanden ist; Kapazitätsvergütung wird zum regulären Erlösstrom für Kraftwerks-, Speicher- und Flex-Betreiber.[[Q:stromvkg]]", domains:["L1-ERZ","L1-MARKT","L1-AGG"], tags:["Kapazitätsmarkt","Marktdesign"] }
  ]}
];

// ══════════════════════════════════════════════════════════
// v1.4 NEUE DOMÄNEN — Vergleichsplattformen, Beratung,
//   Energierecht, Versicherung, Contracting, Beschaffung
// ══════════════════════════════════════════════════════════
GM_DATA.push(

  // ────────────────────────────────────────────────────────
  // L1: VERGLEICHSPLATTFORMEN & DIGITALER VERTRIEB
  // ────────────────────────────────────────────────────────
  {
    id: "L1-VERGLEICH", title: "Vergleichsplattformen & digitaler Vertrieb",
    icon: "🔍", color: "#EC4899",
    description: "Digitale Intermediäre zwischen Energieanbieter und Endkunden — von klassischen Tarifvergleichsportalen über Lead-Generierung bis zu B2B-Ausschreibungsplattformen.",
    capabilities: [
      {
        id: "L2-VERGL-B2C", title: "B2C-Tarifvergleich (Verivox, Check24)",
        description: "Massenmarkt-Vermittlungsportale für Strom- und Gastarife.",
        actors: ["Verivox","Check24 Energie","Stromauskunft.de","Toptarif (Netzclub)","Wechselpilot"],
        items: [
          {
            id: "L3-VERGL-B2C-01", title: "Tarifvergleichsportal (CPA-Modell)",
            definition: "Verivox (gegründet 1998, heute ProSiebenSat.1-Tochter) und Check24 Energie sind die dominanten B2C-Tarifvergleichsportale für Strom, Gas und Wärme. Geschäftsmodell: Cost-per-Acquisition (CPA) — der Energielieferant zahlt pro erfolgreich vermitteltem Neukunden eine Provision (typisch 20–60 € für Strom-Haushaltstarif, 80–150 € für Gas). Das Portal zeigt alle gelisteten Anbieter in der Preisreihenfolge; Lieferanten kaufen Sichtbarkeit über erhöhte CPA-Rates oder bezahlte Platzierungen. Nutzerseite: kostenlos, einfach, schnell. Umsatz Verivox 2022: ca. 160 Mio. €. Check24 Energie ist Teil des Check24-Konzerns (Gesamtumsatz >1 Mrd. €).",
            wertschoepfung: "Netzwerkeffekt: Je mehr Nutzer, desto mehr Lieferanten listen; je mehr Lieferanten, desto besser die Preise für Nutzer. Datenasset: Verivox kennt Verbrauchsprofile, Postleitzahlen, Wechselbereitschaft — wertvolles Targeting-Wissen. Wechseladministration: Verivox übernimmt Anbieterwechsel komplett (GPKE-Prozess) — Einstiegshürde für Nutzer sinkt auf null. Skaleneffekte: Marginalkosten pro vermitteltem Kunden sinken mit Plattformgröße.",
            herausforderungen: "Abhängigkeit von wenigen Großlieferanten (Top 10 Lieferanten generieren >60% der CPA-Einnahmen). Regulatorisches Risiko: BNetzA-Diskussion über Transparenzpflichten und Ranking-Algorithmen. Energiepreiskrise 2021–2023 hat Wechselbereitschaft gesenkt — bei hohen und volatilen Preisen vergleichen Kunden weniger. Qualitäts-Dilemma: Günstigste Tarife kommen von Discount-Anbietern mit Insolvenzrisiko.",
            ausblick: "Dynamische Tarife (§41a EnWG) schaffen neues Vergleichsbedürfnis: Kunden wollen nicht mehr Jahrespreise, sondern Smart-Tarife mit Automatisierung vergleichen. Verivox und Check24 müssen Produktkatalog von 'Preis/kWh' auf 'Ökosystem-Funktionen' erweitern. B2B-Segment (KMU-Tarifvergleich) als Wachstumsfeld. Integration von Wärme, Solar, Wallbox als Bündelvergleich.",
            angreifbarkeit: "Verivox/Check24 greifen selbst die Vollversorger-Marge an, sind dabei aber auf eigener Ebene angreifbar: (1) Neolieferanten, die bewusst nicht auf Vergleichsportalen listen und stattdessen über Direct-to-Consumer-Marketing wachsen (Tibber-Modell), umgehen die CPA-Abhängigkeit vollständig; (2) automatisierte Wechseldienste (vgl. L3-VERGL-B2C-02) übernehmen die Kundenbeziehung dauerhaft und brauchen Portale nur noch zur Erstvermittlung, danach optimieren sie selbst weiter; (3) regulatorischer Druck (BNetzA-Diskussion zu Ranking-Transparenz, P2B-VO) zielt direkt auf das Geschäftsmodell 'bezahlte Sichtbarkeit statt neutraler Vergleich'.",
            erloesmodell: "CPA (Cost per Acquisition): 20–150 €/vermitteltem Neukunden je Produkt",
            regulierung: "UWG (unlauterer Wettbewerb), P2B-VO (EU-Plattformverordnung), EnWG §41 (Preistransparenz)",
            kundensegment: "B2C Haushaltskunden (primär); B2B KMU (wachsend)",
            differenzierung: "Marktabdeckung, Wechseladministration, UX/Conversion-Rate, Datenqualität",
            bmc_kanaele: "Eigene Vergleichsplattform/Website mit SEO/SEA-Traffic; Marketing-Partnerschaften zur Lead-Generierung.",
            bmc_kundenbeziehung: "Transaktionale Vermittlungsbeziehung ohne Bindung an den Nutzer; Lieferantenseite über Listungs-/CPA-Verträge gebunden.",
            bmc_kostenstruktur: "Marketing/SEA-Ausgaben zur Trafficgenerierung als Hauptkosten; Plattform-IT und Wechseladministration (GPKE-Abwicklung).",
            fallbeispiel: "Der CPA-Mechanismus lässt sich an einem konkreten Wechselvorgang zeigen: Ein Kunde mit z.B. 3.500 kWh Jahresverbrauch gibt seine Postleitzahl ein und bekommt eine Rangliste von Tarifen angezeigt — primär die, mit denen das Portal eine Provisionsvereinbarung hat. Schließt der Kunde einen Vertrag ab, zahlt der Lieferant dafür eine Provision von typischerweise 20–60 € (Strom) bzw. 80–150 € (Gas) an Check24 — unabhängig davon, ob der vermittelte Tarif tatsächlich der günstigste am Gesamtmarkt war. Damit wird die Provisionshöhe selbst zum Stellhebel: Ein Lieferant, der seine CPA-Rate erhöht, kann dafür eine bessere Platzierung erhalten, ohne dass sich am zugrunde liegenden Tarif etwas ändert. Genau diese Intransparenz war 2016/2017 Gegenstand eines Gerichtsverfahrens — seither muss das Portal seine Maklerrolle und Provisionsbeziehung gegenüber Nutzern offenlegen. Für die Mechanik des Geschäftsmodells bleibt der Kern aber unverändert: Sichtbarkeit ist käuflich, der Vergleich ist nicht zwangsläufig vollständig — die Plattform optimiert auf vermittelte Verträge, nicht zwingend auf den günstigsten Preis für den Nutzer.",
            status: "aktiv",
            radar: { regulierung:2, skalierbarkeit:5, marktrisiko:1, digitalisierung:5, wettbewerb:4, nachhaltigkeit:1 },
            erloesTyp: "Fee-based",
            akteure: ["Verivox","Check24 Energie","Toptarif","Wechselpilot"]
          },
          {
            id: "L3-VERGL-B2C-02", title: "Automatischer Tarifwechsel (Wechselpilot-Modell)",
            angreifbarkeit: "Das Modell frisst die Portal-Marge — ist aber selbst dünn geschützt: Portale können Auto-Switching als Feature nachrüsten (Check24 hat die Reichweite), und Banking-/Finanz-Apps bündeln Vertragsoptimierung gleich mit. Die Kundenvollmacht ist das einzige Asset; ein einziger schlecht gewählter Wechsel zerstört das Vertrauen — und §41a-Dynamiktarife machen den jährlichen Wechselhebel perspektivisch kleiner.",
            definition: "Eine Weiterentwicklung des klassischen Portals: Wechselpilot und ähnliche Dienste übernehmen den Tarifwechsel nicht nur einmalig, sondern automatisch jedes Jahr — der Kunde gibt eine Vollmacht, der Dienst optimiert kontinuierlich. Erlösmodell: Abo (4–6 €/Monat) oder Erfolgsprovision (Anteil der erzielten Ersparnis). Kunden sparen im Durchschnitt 80–150 €/Jahr durch jährlich optimierten Tarif. Technologiebasis: automatisierter GPKE-Wechselprozess, Preismonitoring-Algorithmus, Vollmachtsmanagement.",
            wertschoepfung: "Recurring Revenue durch Abo-Modell statt einmaliger CPA. Kundenbindung strukturell höher als bei klassischen Portalen (Kunden geben Vollmacht ab). Wechsel-Commoditisierung: Prozess wird so einfach, dass Kunden nie mehr selbst vergleichen müssen. Datenasset: vollständige Verbrauchshistorie + Tarifwechselhistorie als Basis für Upselling.",
            herausforderungen: "Regulatorisches Risiko: Vollmachts-Modell ist regulatorisch komplex (Wer ist Vertragspartner?). Energiepreisvolatilität: Bei stark schwankenden Preisen kann automatischer Wechsel für Kunden nachteilig sein. Vertrauen: Kunden müssen bereit sein, Kontrolle vollständig abzugeben.",
            ausblick: "Automatischer Wechsel entwickelt sich zu 'Energy-as-a-Service light': nicht nur Tarif, sondern auch dynamische Steuerung, Herkunftsoptimierung (Grünstrom), Solar-Anbindung. Konvergenz mit Tibber-Modell: automatischer Tarif + automatische Last-Steuerung.",
            erloesmodell: "Abo-Gebühr (€/Monat) oder Erfolgsprovision (% der Ersparnis)",
            regulierung: "BGB (Vollmacht, §167ff.), UWG, DSGVO",
            kundensegment: "B2C preissensible Haushalte mit geringer Wechselbereitschaft",
            differenzierung: "Vollautomatisierung, Vollmachtsmanagement, Kundenkommunikation, Vertrauen",
            bmc_kanaele: "Eigene Website/App mit Vollmachtserteilung als Kern-Onboarding; Empfehlungsmarketing.",
            bmc_kundenbeziehung: "Dauerhafte Vollmachtsbeziehung mit jährlich automatisiertem Wechsel; höhere Bindung als beim einmaligen Vergleichsportal.",
            bmc_kostenstruktur: "Vollmachts-/Wechselverwaltung (GPKE-Automatisierung) und Preismonitoring-IT als Hauptkosten; CAC für Vollmachtserteilung.",
            fallbeispiel: "Konkret läuft das Wechselpilot-Modell so: Ein Kunde erteilt einmalig eine Vollmacht und zahlt danach 4–6 € im Monat (oder eine Erfolgsprovision auf die erzielte Ersparnis). Wechselpilot überwacht ab diesem Zeitpunkt automatisch den Tarifmarkt und kündigt jedes Jahr kurz vor Vertragsende selbstständig den auslaufenden Vertrag, um den Kunden in den dann günstigsten verfügbaren Tarif umzumelden — ohne dass der Kunde selbst jemals wieder vergleichen oder kündigen muss. Im Schnitt sparen Kunden dadurch 80–150 € im Jahr gegenüber dem, was passiert wäre, wenn der alte Vertrag stillschweigend in die teurere Anschlussregelung übergegangen wäre. Für Wechselpilot ist der entscheidende Unterschied zum klassischen Vergleichsportal die Wiederkehr: Statt einer einmaligen CPA-Provision von 20–60 € pro Vermittlung entsteht ein laufender Abo-Umsatz über Jahre — eine Wette darauf, dass die Kundenbindung durch die abgegebene Vollmacht stabiler ist als ein einmaliger Lieferantenwechsel.",
            status: "aktiv",
            radar: { regulierung:2, skalierbarkeit:5, marktrisiko:1, digitalisierung:5, wettbewerb:3, nachhaltigkeit:1 },
            erloesTyp: "Subscription",
            akteure: ["Wechselpilot","Switchd","Volltreffer"]
          }
        ]
      },
      {
        id: "L2-VERGL-B2B", title: "B2B-Energieeinkauf & Ausschreibungsplattformen",
        description: "Digitale Beschaffungsunterstützung für Industrie, Gewerbe und öffentliche Hand.",
        actors: ["energie.de","Energie2Day","Rabot Charge","trawa","Energiekonzepte Deutschland","next energy (B2B)"],
        items: [
          {
            id: "L3-VERGL-B2B-01", title: "B2B-Energieausschreibungsplattform",
            angreifbarkeit: "Beidseitig angreifbar: Lieferanten mit Direktvertriebs-Portalen umgehen die Plattformprovision, und Energieberater bündeln Beschaffung mit Effizienz- und PPA-Beratung zu einem Full-Service, gegen den die reine Ausschreibungsplattform dünn wirkt. Bei komplexen Strukturprodukten endet die Digitalisierbarkeit — genau dort, wo die Margen liegen.",
            definition: "Für gewerbliche und industrielle Kunden ab ~50 MWh/Jahr ist der Energieeinkauf ein professioneller Beschaffungsprozess. Plattformen wie energie.de, Energie2Day oder spezialisierte Broker koordinieren Ausschreibungen: Kunde stellt Lastprofil und Anforderungen ein, Lieferanten geben Angebote ab, Plattform wertet aus. Erlösmodell: Brokergebühr (0,01–0,05 ct/kWh auf vermitteltes Volumen) oder Pauschale pro Ausschreibung (500–5.000 €). Daneben gibt es energieberatungsbasierte Modelle: Berater begleitet den gesamten Beschaffungsprozess gegen Beratungshonorar.",
            wertschoepfung: "Preistransparenz im intransparenten B2B-Markt: KMU ohne eigene Energieabteilung erzielen durch Ausschreibung 5–15% Kosteneinsparung gegenüber Direktverhandlung. Plattform verdient an beiden Seiten: Lieferanten zahlen für Zugang zu qualifiziertem Volumen, Kunden für Zeitersparnis und Preisoptimierung. Skalierung durch Volumen-Bündelung: mehrere KMU als Pool erhöhen Verhandlungsmacht.",
            herausforderungen: "Vertrauensproblem: Kunden unsicher, ob Plattform wirklich im Kundeninteresse agiert oder primär Provisionsoptimierung betreibt. Komplexität: Industrietarife mit Lastspitzen, Bandlieferungen, Strukturprodukten lassen sich nicht einfach digital abbilden. Wettbewerb durch direkte Lieferantenansprache und Energieberater.",
            ausblick: "Digitalisierung des B2B-Energieeinkaufs schreitet voran: API-Integration in ERP-Systeme (SAP Ariba, Coupa) für automatisierte Energiebeschaffung. PPA-Plattformen (für Corporate PPAs) als nächste Kategorie. Grünstrom-Ausschreibungen (HKN-Qualität, 24/7 CFE) als neues Differenzierungsfeld.",
            erloesmodell: "Brokergebühr (ct/kWh auf vermitteltes Volumen) oder Ausschreibungspauschale",
            regulierung: "UWG, EnWG §42a (Lieferverträge Industrie), REMIT (ab 1 MWh)",
            kundensegment: "B2B KMU, Mittelstand, öffentliche Hand (>50 MWh/Jahr)",
            differenzierung: "Lieferantenbreite, Prozessdigitalisierung, Transparenz, Beratungskompetenz",
            bmc_kanaele: "B2B-Direktvertrieb/Plattform für Ausschreibungsmanagement; teils begleitend durch Energieberater.",
            bmc_kundenbeziehung: "Projektbezogene Begleitung des Ausschreibungsprozesses; Vertrauensfrage zentral (Interessenkonflikt-Risiko Plattform vs. Kunde).",
            bmc_kostenstruktur: "Plattform-/Ausschreibungssoftware und Beraterpersonal als Hauptkosten; geringe variable Kosten pro Ausschreibung.",
            fallbeispiel: "Konkret läuft eine B2B-Ausschreibung über energie.de so ab: Ein mittelständischer Maschinenbauer mit 5 GWh Jahresverbrauch gibt sein Lastprofil und seine Anforderungen (Laufzeit, Ökostromanteil, Preisstruktur) auf der Plattform ein. Mehrere Energielieferanten erhalten Zugang zu diesem anonymisierten Profil und geben verbindliche Angebote ab — die Plattform wertet aus und zeigt dem Kunden die Bandbreite. Allein durch diese Vergleichsmöglichkeit erzielen KMU laut Branchenangaben 5–15% Einsparung gegenüber einer Direktverhandlung mit dem bisherigen Lieferanten, der ohne Wettbewerbsdruck selten sein bestes Angebot zuerst macht. energie.de verdient daran auf beiden Seiten: Der Kunde zahlt nichts oder nur eine Pauschale für die Ausschreibungsabwicklung, der gewinnende Lieferant zahlt eine Brokergebühr von 0,01–0,05 ct/kWh auf das vermittelte Volumen — bei 5 GWh sind das immerhin 500–2.500 € für eine einzige erfolgreiche Vermittlung.",
            status: "aktiv",
            radar: { regulierung:2, skalierbarkeit:4, marktrisiko:1, digitalisierung:4, wettbewerb:3, nachhaltigkeit:2 },
            erloesTyp: "Fee-based",
            akteure: ["energie.de","Energie2Day","trawa","Energiekonzepte Deutschland","next energy"]
          }
        ]
      }
    ]
  },

  // ────────────────────────────────────────────────────────
  // L1: BERATUNG, STRATEGIE & MANAGEMENT CONSULTING
  // ────────────────────────────────────────────────────────
  {
    id: "L1-BERATUNG", title: "Beratung, Strategie & Management Consulting",
    icon: "🧭", color: "#F59E0B",
    description: "Strategie-, IT- und Managementberatung für Energieunternehmen — von globalen Top-Tier-Häusern bis zu spezialisierten Boutiquen.",
    capabilities: [
      {
        id: "L2-BERAT-STRAT", title: "Strategie- & Managementberatung",
        description: "Top-Tier und Mid-Tier Consulting für Energieunternehmen — Strategie, Transformation, Regulierung.",
        actors: ["McKinsey Energy","BCG Energy","Capgemini Invent","Roland Berger","Oliver Wyman","Strategy&"],
        items: [
          {
            id: "L3-BERAT-STRAT-01", title: "Strategieberatung Energieunternehmen (Top-Tier)",
            angreifbarkeit: "Die klassische Studienmarge wird von drei Seiten angegriffen: Boutiquen mit tieferem Sektor-Know-how, In-House-Consulting-Teams der Konzerne und KI-Tools, die Analyse- und Slide-Arbeit kommoditisieren. Verteidigungsfähig bleiben C-Level-Zugang und Transaktionsnähe — die Leverage-Pyramide aus Junioren ist dagegen das erste Opfer der Automatisierung.",
            definition: "McKinsey, BCG, Bain und Strategy& beraten Energiekonzerne, ÜNBs, Stadtwerke und Infrastrukturfonds bei strategischen Grundsatzfragen: Portfoliotransformation (Kohleausstieg → EE-Portfolio), M&A-Strategie, Regulierungspositionierung, Markteintrittsstrategie neue Geschäftsfelder. Typische Projektgrößen: 500.000 – 5 Mio. € pro Mandat. Erlösmodell: Tagessatz-basiert (Partner: 5.000–12.000 €/Tag, Senior-Level: 2.500–5.000 €/Tag) oder Pauschalmandat. Zugang: C-Suite-Relationships, langjährige Rahmenverträge mit großen Versorgern.",
            wertschoepfung: "Wert entsteht durch drei Hebel: (1) Externe Perspektive und Benchmarks — Energieunternehmen zahlen für Vergleichsdaten aus 50+ Projekten weltweit. (2) Politische Legitimation — externe Empfehlung einer Top-Tier-Beratung erleichtert interne Entscheidungsdurchsetzung. (3) Talentpool — Berater als temporäre Verstärkung bei Strategieprojekten ohne Personalbindung. Hohe Wiederkaufsrate bei etablierten Kunden (>70% Umsatz mit Bestandskunden).",
            herausforderungen: "Reputationsrisiko bei falschen Empfehlungen (z.B. Beratung zu aggressiven Gasinvestitionen kurz vor Preiskrise). Abhängigkeit von wenigen Schlüsselkunden: Energiesektor ist oligopolistisch, Kundenverlust trifft hart. Nachwuchsproblem: junge Berater bevorzugen Tech-Beratung über klassische Energieprojekte. Preissensitivität bei öffentlichen Auftraggebern (ÜNBs, kommunale Stadtwerke).",
            ausblick: "Energiewende-Komplexität treibt Beratungsnachfrage: Regulierungsreformen (EU EMD, WPG, CSRD, H2-Regulierung), Transformationsprojekte (Kohle → EE, Gas → H2), M&A-Welle (Stadtwerk-Konsolidierung). KI-gestützte Beratung (Szenariomodellierung, Regulierungsanalyse) verändert Projektmethodik. Spezialisierung auf Energiewende als Wachstumssegment.",
            erloesmodell: "Tagessatz-basiert (Partner 5.000–12.000 €/Tag) oder Pauschalmandat",
            regulierung: "Keine spezifische Energieregulierung; allgemein BGB (Dienstvertrag), GWB (Vergaberecht bei öffentlichen Auftraggebern)",
            kundensegment: "C-Suite Energiekonzerne, ÜNBs, Infrastrukturfonds, kommunale Versorger",
            differenzierung: "Sektorspezialisierung, Benchmarkdatenbank, C-Suite-Zugang, Internationales Netzwerk",
            bmc_kanaele: "C-Suite-Relationship-Vertrieb über Partner-Netzwerk und Rahmenverträge; keine Massenakquise.",
            bmc_kundenbeziehung: "Langjährige Vertrauensbeziehung zu wiederkehrenden Großkunden (>70% Umsatz mit Bestandskunden); Partner als persönliche Ansprechpartner.",
            bmc_kostenstruktur: "Personal (Berater-Gehälter/Boni) als dominanter Kostenblock; Wissensmanagement und Benchmarkdatenbank-Pflege.",
            fallbeispiel: "Konkret zeigt sich der Wert eines McKinsey-Mandats an einem Energiekonzern, der entscheiden muss, wie schnell er aus der Kohleverstromung aussteigt und wie viel Kapital er stattdessen in Offshore-Wind umlenkt. McKinsey bringt dafür keine völlig neue Idee, sondern Benchmarks aus 50+ vergleichbaren Transformationsprojekten weltweit — wie schnell andere Versorger ihr Portfolio umgebaut haben, mit welchen Finanzierungsstrukturen, mit welchen Fehlern. Für diese Aufarbeitung zahlt der Konzern 5.000–12.000 € pro Tag und Partner, oft über mehrere Monate. Der eigentliche Wert liegt dabei oft weniger im neuen Wissen als in der politischen Legitimation nach innen: Eine Empfehlung, die intern vom eigenen Strategieteam kommt, wird im Vorstand anders diskutiert als dieselbe Empfehlung mit dem Briefkopf einer Top-Tier-Beratung — Letztere erleichtert es, eine unbequeme Entscheidung (etwa die vorzeitige Stilllegung profitabler Kohleblöcke) gegen interne Widerstände durchzusetzen.",
            status: "aktiv",
            radar: { regulierung:1, skalierbarkeit:3, marktrisiko:1, digitalisierung:3, wettbewerb:4, nachhaltigkeit:3 },
            erloesTyp: "Fee-based",
            akteure: ["McKinsey Energy","BCG Energy","Bain","Strategy&","Oliver Wyman"]
          },
          {
            id: "L3-BERAT-STRAT-02", title: "IT- & Digitaltransformation (Capgemini Invent, Accenture)",
            angreifbarkeit: "Angreifbar über Offshore-Preisdruck (globale System-Integratoren), Produktisierung (SaaS statt Individualprojekt) und den Fachkräftehebel: Freelancer-Plattformen und Bodyleasing unterbieten die Tagessätze im Commodity-Segment. Die Marge verteidigt, wer regulatorisches Energie-Know-how (MaKo, MaBiS, §14a) mit Delivery kombiniert — reine SAP-Kapazität ist austauschbar.",
            definition: "IT- und Digitalberatung für Energieunternehmen umfasst: SAP S/4HANA-Migrationen (Ablösung von SAP IS-U in Stadtwerken), Cloud-Transformationen (AWS/Azure für SCADA, EMS, Kundensysteme), Data Architecture & Analytics (Energiedaten-Plattformen, Real-Time-Datenverarbeitung), Cybersecurity (KRITIS, NIS2, OT-Sicherheit für Netzleittechnik) sowie Prozessdigitalisierung (Marktkommunikation, MaBiS 2.0, SMGW-Integration). Capgemini Invent, Accenture Energy und IBM Energy positionieren sich als integrierte IT/Strategie-Anbieter — Kombination aus Strategie-Know-how und technischer Umsetzungskompetenz.",
            wertschoepfung: "Differenzierungsvorteil durch End-to-End-Kompetenz: Strategieberatung + IT-Architektur + Implementierung aus einer Hand. Langfristige Kundenbeziehungen durch mehrjährige Transformationsprogramme (SAP-Migration: 3–7 Jahre). Proprietary Acceleratoren (vorgefertigte SAP-Templates, Regulierungsmodule) senken Implementierungszeit und erhöhen Marge. Nearshore/Offshore-Delivery reduziert Kostenstruktur gegenüber reinen Top-Tier-Beratern.",
            herausforderungen: "Projektrisiken bei komplexen IT-Transformationen (Budgetüberschreitungen, Terminverzüge bei SAP-Migrationen sind Branchenstandard). Wettbewerb durch große System Integratoren (Accenture, IBM, Infosys) und spezialisierte Boutiquen. Fachkräftemangel: SAP IS-U-Experten sind rar und teuer. Künstliche Intelligenz disruptiert klassische Beratungsleistungen.",
            ausblick: "KI-Integration in Energiesysteme (ML-basierte Netzplanung, automatisierte Bilanzkreisführung, predictive maintenance) als Wachstumsfeld. Cloud-native Energiedaten-Plattformen ersetzen On-Premise-Systeme. SMGW-Datenintegration und §14a-Implementierung als neue Projektfelder für IT-Berater.",
            erloesmodell: "Tagessatz + Lizenzen (Accelerator-Tools) + Managed Services (laufende Betreuung)",
            regulierung: "KRITIS-Regulierung (BSI-Gesetz §8a), NIS2-Richtlinie, DSGVO",
            kundensegment: "ÜNBs, VNBs, Stadtwerke, Energielieferanten (IT-Abteilungen und C-Suite)",
            differenzierung: "SAP IS-U/S4HANA-Expertise, Energieregulatierungs-Know-how, Nearshore-Effizienz, Accelerator-Tools",
            bmc_kanaele: "B2B-Direktvertrieb über bestehende Kundenbeziehungen und Ausschreibungen; Partnerschaften mit SAP/Cloud-Anbietern als Co-Vertriebskanal.",
            bmc_kundenbeziehung: "Mehrjährige Transformationsprogramme (3–7 Jahre) als enge Projektbeziehung; Managed-Services-Verträge verlängern die Bindung.",
            bmc_kostenstruktur: "Personal (Berater, Entwickler) als Hauptkosten, teilweise Nearshore/Offshore zur Kostensenkung; Lizenzkosten für Accelerator-Tools.",
            fallbeispiel: "Konkret zeigt sich das Capgemini-Invent-Modell an einem Stadtwerk, das sein 20 Jahre altes SAP IS-U auf SAP S/4HANA migrieren muss, weil der Hersteller den Support für IS-U ausläuft. Ein solches Projekt dauert typischerweise 3–7 Jahre und betrifft fast jeden internen Prozess — Abrechnung, Marktkommunikation, Kundenservice. Statt das Stadtwerk bei null anfangen zu lassen, bringt Capgemini vorgefertigte Branchen-Templates ('Accelerators') mit, die typische Energieversorger-Prozesse schon vorab abbilden — das verkürzt die Implementierungszeit erheblich und ist genau der Teil, an dem Capgemini überproportional verdient, weil derselbe Accelerator bei vielen Kunden wiederverwendet werden kann. Einen Teil der eigentlichen Entwicklungsarbeit erledigen Nearshore-Teams in Polen oder Indien zu niedrigeren Tagessätzen als ein Senior-Berater in München — die Differenz zwischen dem, was der Kunde für 'Capgemini-Qualität' zahlt, und dem, was die Umsetzung tatsächlich kostet, ist die Projektmarge.",
            status: "aktiv",
            radar: { regulierung:2, skalierbarkeit:4, marktrisiko:1, digitalisierung:5, wettbewerb:4, nachhaltigkeit:2 },
            erloesTyp: "Fee-based",
            akteure: ["Capgemini Invent","Accenture Energy","IBM Energy","msg systems","adesso"]
          },
          {
            id: "L3-BERAT-STRAT-03", title: "Regulierungsberatung & Behördeninteraktion",
            angreifbarkeit: "Kleiner, personengebundener Markt: Der Angriff läuft über Abwerbung der Schlüsselköpfe (In-House-Regulierungsteams der Netzbetreiber) und über Kanzleien, die ökonomische Regulierungsberatung als Annex zur Rechtsberatung anbieten. NEST und AgNes erzeugen kurzfristig Sonderkonjunktur — strukturell bleibt das Modell von wenigen BNetzA-Verfahren abhängig.",
            definition: "Spezialisierte Boutiquen und Abteilungen großer Häuser (Roland Berger Regulatory, Frontier Economics, Nera Economic Consulting, Oxera) begleiten Energieunternehmen in Regulierungsverfahren: ARegV-Antragsverfahren (Erlösobergrenze, Effizienzvergleich), BNetzA-Festlegungsverfahren (Kommentare, Anhörungen), EU-Gesetzgebungsprozesse (Stellungnahmen zu EMD, RED III, CSRD). Außerdem: Regulatorisches Benchmarking (wie schlagen sich ÜNBs/VNBs im BNetzA-Benchmarking?), Szenarioanalysen für neue Regulierungsrahmen (H2-Regulierung, §14a-Weiterentwicklung).",
            wertschoepfung: "Ein gut vorbereiteter ARegV-Antrag kann für einen mittelgroßen VNB den Unterschied von 5–15 Mio. €/Jahr in der Erlösobergrenze ausmachen — ROI für Regulierungsberatung ist extrem hoch. Zugang zu regulatorischem Netzwerk (ehemaliger BNetzA-Mitarbeiter als Berater) als Differenzierungsmerkmal. Frühzeitige Positionierung in EU-Gesetzgebungsprozessen schafft strategischen Vorteil.",
            herausforderungen: "Kleiner Markt: Nur ~50 Netzbetreiber, die wirklich in Regulierungsberatung investieren. Stark personenabhängig: Reputation einzelner Experten entscheidend. Regulatorisches Umfeld ändert sich schnell — Berater müssen kontinuierlich Wissen aufbauen.",
            ausblick: "H2-Regulierung (neues Regulierungsregime für H2-Netzentgelte), Flexibilitätsmärkte (§14a-Weiterentwicklung), EU EMD-Umsetzung in nationales Recht als Wachstumsfelder. Intersektionale Regulierungsberatung (Strom + Gas + Wärme + H2 als integriertes System) gewinnt an Bedeutung.",
            erloesmodell: "Tagessatz (Experten-Level: 2.000–6.000 €/Tag) + Erfolgshonorar bei ARegV-Verfahren",
            regulierung: "ARegV, StromNEV, GasNEV, EnWG, EU-Regulierungsrahmen (ACER)",
            kundensegment: "ÜNBs, VNBs, FNB Gas, Energiekonzerne (Regulatory Affairs)",
            differenzierung: "BNetzA-Netzwerk, ARegV-Expertise, ökonomische Modellierungskompetenz",
            bmc_kanaele: "Direktansprache über Fachnetzwerk und Reputation einzelner Experten; kaum klassisches Marketing.",
            bmc_kundenbeziehung: "Projektbezogene, oft langjährige Beziehung zu Regulatory-Affairs-Abteilungen; persönliches Vertrauen in einzelne Experten entscheidend.",
            bmc_kostenstruktur: "Experten-Personalkosten als dominanter Block (Tagessätze 2.000–6.000 €); geringe sonstige Fixkosten.",
            fallbeispiel: "Konkret zeigt sich der ROI von Regulierungsberatung an einem mittelgroßen Verteilnetzbetreiber, der seinen ARegV-Antrag für die nächste Regulierungsperiode vorbereitet: Ein gut vorbereiteter Antrag, der die eigenen Kapitalkosten und Effizienzwerte im BNetzA-Benchmarking überzeugend dokumentiert, kann die genehmigte Erlösobergrenze um 5–15 Mio. € pro Jahr höher ausfallen lassen als ein schlecht vorbereiteter Antrag desselben Netzbetreibers. Eine Beratung von Frontier Economics oder Nera, die für diesen Antrag mehrere Hunderttausend Euro an Beratungshonorar kostet, amortisiert sich damit oft schon im ersten Jahr der neuen Regulierungsperiode um ein Vielfaches. Der eigentliche Wettbewerbsvorteil solcher Beratungen liegt im Netzwerk: Berater, die selbst früher bei der BNetzA gearbeitet haben, kennen die Bewertungslogik der Behörde aus erster Hand und wissen, welche Argumentationsmuster in Festlegungsverfahren typischerweise überzeugen — ein Wissen, das sich nicht einfach aus Gesetzestexten ablesen lässt.",
            status: "aktiv",
            radar: { regulierung:4, skalierbarkeit:2, marktrisiko:1, digitalisierung:2, wettbewerb:3, nachhaltigkeit:2 },
            erloesTyp: "Fee-based",
            akteure: ["Roland Berger","Frontier Economics","Nera Economic Consulting","Oxera","BET (Büro für Energiewirtschaft)"]
          }
        ]
      }
    ]
  },

  // ────────────────────────────────────────────────────────
  // L1: ENERGIERECHT & RECHTSBERATUNG
  // ────────────────────────────────────────────────────────
  {
    id: "L1-RECHT", title: "Energierecht & Rechtsberatung",
    icon: "⚖️", color: "#6366F1",
    description: "Spezialisierte Energierechtskanzleien und Rechtsabteilungen — eines der komplexesten Rechtsgebiete Deutschlands mit hohem Wachstum durch Energiewende-Regulierung.",
    capabilities: [
      {
        id: "L2-RECHT-KANZLEI", title: "Energierechtskanzleien & In-House-Legal",
        description: "Externe Kanzleien und interne Rechtsabteilungen in der Energiewirtschaft.",
        actors: ["Becker Büttner Held (BBH)","Freshfields Energy","Norton Rose Fulbright","Linklaters","Hogan Lovells","Noerr"],
        items: [
          {
            id: "L3-RECHT-KANZLEI-01", title: "Energierechtskanzlei (Regulierung & Netzrecht)",
            angreifbarkeit: "Angreifbar an den Rändern: Legal-Tech automatisiert Standardverfahren (Netzanschluss, Lieferverträge), internationale Großkanzleien ziehen die Transaktionsmandate, In-House-Teams übernehmen das Tagesgeschäft. Die Verteidigung ist Verfahrens- und Behördenerfahrung in Spezialgebieten (ARegV, §46) — genau deshalb ist Nachwuchsbindung die kritische Flanke.",
            definition: "Becker Büttner Held (BBH, München/Berlin) ist Deutschlands führende Energierechtskanzlei mit ~200 Anwälten und Schwerpunkten auf Netzregulierung (ARegV, StromNEV, GasNEV), Konzessionsrecht (§46 EnWG — Neukonzessionierung von Stromnetzen alle 20 Jahre), Vergaberecht für kommunale Energieprojekte, Beihilferecht (EEG-Beihilfeprüfung durch EU-Kommission) und Energievertragsrecht (PPA, EPC, O&M). Daneben: internationale Großkanzleien (Freshfields, Norton Rose Fulbright, Linklaters) für Cross-Border-Transaktionen, M&A, Projektfinanzierungen. Stundensätze: 300–700 € (Senior Associates), 600–1.500 € (Partner).",
            wertschoepfung: "Energierecht ist eines der komplexesten deutschen Rechtsgebiete — Schnittstelle von EU-Recht, nationalem Energierecht, Kartellrecht, Umweltrecht, Verwaltungsrecht. Spezialisierung schützt Margen. Konzessionsverfahren (§46 EnWG) sind Einzel-Mandate von 200.000–2 Mio. €. PPA-Vertragsgestaltung (10–15 Jahre Laufzeit, hohe Haftungsrisiken) ist lukratives Feld. Regulatorische Unsicherheit der Energiewende generiert kontinuierliche Beratungsnachfrage.",
            herausforderungen: "Top-Talente gehen zu In-House-Teams der Energiekonzerne (bessere Work-Life-Balance, attraktive Gehälter). Internationalisierung: Deutsche Energierechtler verlieren Mandate an internationale Großkanzleien bei grenzüberschreitenden Deals. Disruption durch Legal Tech (Contract-Review-KI senkt Stunden für Vertragsanalyse).",
            ausblick: "Wachstumsfelder: H2-Recht (neues Regulierungsregime, H2-Kernnetz-Verträge), EU EMD-Umsetzung, V2G-Vertragsrecht, Energy Community-Recht (EU EMD Art. 16ff.), PPA-Standardisierung. Zunehmend interdisziplinär: Energierecht + Datenschutzrecht (Smart Meter, SMGW) + KI-Regulierung (autonome Energiesysteme).",
            erloesmodell: "Stundensatz (300–1.500 €/h je Erfahrungsgrad) + Erfolgshonorare (§49b BRAO begrenzt)",
            regulierung: "EnWG, EU-Energierecht, BRAO (Anwaltsrecht), RVG (Vergütung)",
            kundensegment: "ÜNBs, VNBs, Stadtwerke, Energiekonzerne, Projektentwickler, Infrastrukturfonds",
            differenzierung: "§46-Konzessionsexpertise, ARegV-Verfahrenskenntnisse, EU-Beihilferecht, Netzwerk bei BNetzA/Bundeskartellamt",
            bmc_kanaele: "Mandatsakquise über Reputation, Netzwerk (BNetzA/Bundeskartellamt) und Empfehlungen; kein klassischer Vertrieb.",
            bmc_kundenbeziehung: "Langfristige Mandatsbeziehungen mit Energiekonzernen/Netzbetreibern; Vertrauen über Spezialisierung und Verfahrenskenntnis.",
            bmc_kostenstruktur: "Personal (Anwälte, stundensatzbasiert) als dominanter Kostenblock; Wissensmanagement zu sich schnell ändernder Regulierung.",
            fallbeispiel: "Konkret zeigt sich BBHs Geschäft an der Vertragsgestaltung eines Corporate PPA zwischen einem Windparkbetreiber und einem Industriekunden: Über 10–15 Jahre Laufzeit müssen Klauseln zu Preisanpassung, Lieferausfall, Insolvenzrisiko des Vertragspartners und EU-Beihilferecht so verhandelt werden, dass beide Seiten ein bankfähiges, klagesicheres Dokument erhalten — Fehler in solchen Verträgen zeigen sich oft erst Jahre später, wenn ein Streitfall eintritt. BBH-Anwälte verrechnen dafür Stundensätze von 300–700 € (Senior Associates) bis 600–1.500 € (Partner), wobei der eigentliche Mehrwert nicht im Verfassen von Standardklauseln liegt, sondern im spezifischen Branchenwissen: Wer die Feinheiten der EU-Beihilfeprüfung für EEG-Förderungen oder die Auslegungspraxis der BNetzA zu Eigenversorgungsmodellen aus zahlreichen Vorgängermandaten kennt, vermeidet Vertragsklauseln, die später vor Gericht angreifbar wären — ein Wissen, das sich für den Mandanten erst auszahlt, wenn ein Streitfall eben nicht eintritt.",
            status: "aktiv",
            radar: { regulierung:4, skalierbarkeit:2, marktrisiko:1, digitalisierung:2, wettbewerb:3, nachhaltigkeit:2 },
            erloesTyp: "Fee-based",
            akteure: ["Becker Büttner Held (BBH)","Freshfields","Norton Rose Fulbright","Linklaters","Noerr","Hogan Lovells"]
          },
          {
            id: "L3-RECHT-KANZLEI-02", title: "Konzessionsrecht & kommunale Netzübernahme (§46 EnWG)",
            angreifbarkeit: "Zyklisches Nischenmonopol weniger Spezialisten — angreifbar, wenn die Welle abebbt: Zwischen den Konzessionsrunden trägt das Mandatsvolumen die Spezialisierung kaum, und große Kanzleien kaufen sich per Lateral Hire in die Nische ein. Kommunale Spitzenverbände und Berater standardisieren zudem Musterverfahren, die die Einzelfall-Marge drücken.",
            definition: "§46 EnWG ist eines der lukrativsten Spezialgebiete des Energierechts: Strom- und Gasverteilnetze werden alle 20 Jahre neu konzessioniert — Kommunen schreiben die Nutzungsrechte für ihre Netzinfrastruktur aus. Bieter (meist bestehender VNB oder kommunales Stadtwerk) müssen umfangreiche Unterlagen einreichen (Netzentwicklungsplan, Betriebskonzept, Investitionsplan). Streitwerte: Netzwert eines mittelgroßen VNB = 100–500 Mio. €. Konzessionsstreitigkeiten werden vor OLG und BGH ausgetragen — jahrelange Prozesse. Kanzleien wie BBH, Rödl & Partner, Bietlein begleiten Bieterseite und Kommunen.",
            wertschoepfung: "Hochspezialisiertes Feld mit wenigen Experten — Eintrittsbarrieren schützen Margen. Ein gewonnenes Konzessionsmandat kann 5–15 Jahre Dauermandat für den neuen Betreiber bedeuten. Gerichtlich streitige Konzessionsverfahren bedeuten Mehrjahresmandate. Kommunen benötigen ebenfalls Beratung (welche Anforderungen dürfen/müssen sie stellen?).",
            herausforderungen: "Sehr zyklischer Markt: Konzessionsausläufe häufen sich in Wellen (Ursprungskonzessionen aus den 2000ern laufen ab). BGH-Rechtsprechung (u.a. zur Diskriminierungsfreiheit) entwickelt sich schnell — Berater müssen ständig aktuell bleiben. Transparenzpflichten und Dokumentationsanforderungen wachsen.",
            ausblick: "§46-Welle hält an bis ~2030 (viele Konzessionen aus 2000–2010 laufen aus). Neue Dimension: Wärmenetz-Konzessionen (§3 WPG) als ähnliches Konzessionsmodell für Fernwärme entstehen. Kommunale Rekommunalisierung als Trend (Stadtwerke übernehmen Netze von E.ON/RWE zurück).",
            erloesmodell: "Stundensatz + Pauschalmandat für komplettes Konzessionsverfahren (100.000–500.000 €)",
            regulierung: "EnWG §46, §47, KartGO-Entscheidungen BGH/OLG, GWB",
            kundensegment: "VNBs (Bieterseite), Kommunen (Konzessionsgeber), kommunale Stadtwerke",
            differenzierung: "§46-BGH-Rechtsprechungskenntnis, Prozesserfahrung, kommunales Netzwerk",
            bmc_kanaele: "Mandatsakquise über Spezialisierung/Reputation in §46-Verfahren; Direktansprache durch Kommunen und VNBs.",
            bmc_kundenbeziehung: "Mehrjährige Mandatsbeziehung über das gesamte Konzessionsverfahren (oft Gerichtsverfahren); Vertrauensbeziehung zu Kommunen als wiederkehrendem Auftraggeber.",
            bmc_kostenstruktur: "Spezialisten-Personalkosten (Stundensatz) als Hauptblock; Prozesskosten bei gerichtlichen Streitigkeiten.",
            fallbeispiel: "Konkret zeigt sich der Streitwert eines §46-Verfahrens am Berliner Konzessionsstreit: Als Berlin 2019 die Netzkonzession an die eigene Bietergesellschaft 'Berlin Energie' vergeben wollte, klagte der bisherige Betreiber Vattenfall — das Kammergericht erklärte die Vergabe 2020 für unwirksam, und der Streit um die Konzession zog sich über mehr als ein Jahrzehnt hin, bevor 2021 eine Lösung über den direkten Anteilskauf gefunden wurde. Für die beteiligten Kanzleien bedeutete das: ein einzelnes Konzessionsverfahren konnte über Jahre hinweg kontinuierliche Mandatsumsätze erzeugen, weit über das hinaus, was eine einmalige Vertragsberatung sonst einbringt. Der eigentliche ökonomische Hebel für eine Kanzlei wie BBH liegt darin, dass die BGH-Rechtsprechung zur Diskriminierungsfreiheit von Konzessionsvergabeverfahren ständig in Bewegung ist — wer die aktuelle Auslegung im Detail kennt, kann sowohl bietende Netzbetreiber als auch vergebende Kommunen so beraten, dass das Verfahren später nicht wegen Verfahrensfehlern angefochten werden kann.",
            status: "aktiv",
            radar: { regulierung:5, skalierbarkeit:1, marktrisiko:1, digitalisierung:1, wettbewerb:2, nachhaltigkeit:2 },
            erloesTyp: "Fee-based",
            akteure: ["Becker Büttner Held","Rödl & Partner","Bietlein","Lenz & Staehelin","Noerr"]
          }
        ]
      }
    ]
  },

  // ────────────────────────────────────────────────────────
  // L1: VERSICHERUNG & RISIKOMANAGEMENT
  // ────────────────────────────────────────────────────────
  {
    id: "L1-VERSICH", title: "Versicherung & Risikomanagement",
    icon: "🛡️", color: "#64748B",
    description: "Spezialisierte Versicherungsprodukte für Energieanlagen, Betriebsunterbrechungen, Cyber-Risiken und Projektfinanzierungen — ein oft übersehenes Segment.",
    capabilities: [
      {
        id: "L2-VERSICH-ENERGIE", title: "Energieanlagen-Versicherung",
        description: "Sachversicherung, Betriebsunterbrechung und Haftpflicht für Energieanlagen aller Art.",
        actors: ["Allianz Global Corporate & Specialty (AGCS)","Munich Re","Swiss Re","HDI Global","Aon Energy","Marsh Energy"],
        items: [
          {
            id: "L3-VERSICH-ENERGIE-01", title: "Windpark- & Solarpark-Versicherung",
            angreifbarkeit: "Kapazität ist das Spiel: Rückversicherer und alternative Kapazitätsgeber (ILS, Captives großer Betreiber) können die Underwriting-Marge umgehen, während Parametrik-Anbieter (Wetterindex-Deckungen) Teilrisiken günstiger abbilden. Wer Klimarisiken nicht datenbasiert bepreisen kann, verliert das profitable Geschäft an InsurTechs mit Sensor- und Ertragsdaten direkt aus den Anlagen.",
            definition: "EE-Anlagen benötigen spezifische Versicherungsprodukte: (1) Sachversicherung (All-Risk): Abdeckung von Sturmschäden, Blitzschlag, Maschinenschäden (Getriebeschäden, Generatorschäden), Überspannung, Feuer. (2) Betriebsunterbrechungsversicherung (BU): Ersatz entgangener Erträge (EEG-Vergütung + Spotmarkterlöse) bei ungeplantem Stillstand. (3) Montageversicherung: Deckung während Bau- und Errichtungsphase. Versicherungssumme orientiert sich am Anlagenwert (Windanlage 3 MW: ca. 3–4 Mio. €). Prämien: 0,2–0,5% der Versicherungssumme p.a. Makler (Aon Energy, Marsh Energy) bündeln Portfolio-Platzierungen bei Versicherern.",
            wertschoepfung: "Versicherer (Allianz AGCS, Munich Re als Rückversicherer): Prämieneinkommen bei schwer kalkulierbarem technischen Risiko. Differenzierung durch technisches Underwriting (eigene Ingenieure beurteilen Anlagenqualität). Makler (Aon, Marsh): Provision (8–15% der Prämie) für Platzierung und Schadensmanagement. Portfolioeffekte: Makler mit 10 GW versichertem Portfolio hat bessere Konditionen als Einzelplatzierer.",
            herausforderungen: "Klimarisiken steigen: Extremwetter (Sturm, Hagel, Überschwemmung) werden häufiger — Prämien steigen, Deckungskapazität sinkt. Offshore-Wind: extrem hohe Versicherungswerte (Offshore-WP 1 GW: 3–5 Mrd. € Versicherungssumme) überfordern einzelne Versicherer — Pooling notwendig. Batteriebrand-Risiko bei BESS schlecht historisch kalibriert — Prämienentwicklung unsicher.",
            ausblick: "Wachstumsmarkt durch EE-Ausbau: Jedes neue GW Windkapazität = neue Versicherungssummen. Parametrische Versicherungen (automatische Auszahlung bei Windgeschwindigkeit unter Schwellenwert) als Innovation. Cyber-Versicherung für OT-Systeme (SCADA, Netzleittechnik) als neues Segment. H2-Elektrolyse und BESS als neue, schwer kalibrierbare Risikokategorien.",
            erloesmodell: "Prämieneinnahmen (0,2–0,5% Versicherungssumme p.a.) minus Schäden minus Betriebskosten",
            regulierung: "VAG (Versicherungsaufsichtsgesetz), Solvency II (EU), VVG (Vertragsrecht)",
            kundensegment: "EE-Projektentwickler, Infrastrukturfonds, Betreiber, Projektfinanzierer (Banken verlangen Versicherungsnachweis)",
            differenzierung: "Technisches Underwriting, Kapazität (Offshore), Schadensregulierungsgeschwindigkeit, Portfolio-Konditionen",
            bmc_kanaele: "B2B-Vertrieb über spezialisierte Makler (Aon Energy, Marsh Energy), die Portfolio-Platzierungen bei Versicherern bündeln; kein Direktvertrieb an Anlagenbetreiber.",
            bmc_kundenbeziehung: "Langfristige Jahrespolicen mit Schadensmanagement durch den Makler; Vertrauen über technisches Underwriting und Schadensregulierungsgeschwindigkeit.",
            bmc_kostenstruktur: "Rückversicherungskosten (Munich Re) und technisches Underwriting-Personal als Hauptblock; Schadensregulierung bei Großschäden (Offshore) variabel.",
            fallbeispiel: "Konkret läuft die Versicherung eines 3-MW-Windparks so ab: Bei einem Anlagenwert von 3–4 Mio. € zahlt der Betreiber eine Jahresprämie von 0,2–0,5% dieser Summe, also 6.000–20.000 € — für die Absicherung gegen Sturmschäden, Getriebeausfälle und Betriebsunterbrechung. Bricht tatsächlich ein Getriebe und die Anlage steht drei Monate still, zahlt die Betriebsunterbrechungsversicherung nicht nur die Reparatur, sondern auch die entgangenen EEG- und Spotmarkterlöse, die der Betreiber in dieser Zeit verpasst hätte. Allianz AGCS übernimmt dieses Risiko nicht allein: Ein Teil wird an Munich Re als Rückversicherer weitergegeben, damit ein einzelner Großschaden — etwa ein Sturm, der gleich mehrere Anlagen in einem Windpark gleichzeitig trifft — die Bilanz des Erstversicherers nicht gefährdet. Der Makler (Aon oder Marsh) verdient an diesem Geschäft eine Provision von 8–15% der Prämie dafür, dass er für seinen Kunden die besten Konditionen am Markt verhandelt und im Schadensfall die Abwicklung koordiniert.",
            status: "aktiv",
            radar: { regulierung:3, skalierbarkeit:3, marktrisiko:3, digitalisierung:2, wettbewerb:3, nachhaltigkeit:3 },
            erloesTyp: "Fee-based",
            akteure: ["Allianz AGCS","Munich Re","HDI Global","Aon Energy","Marsh Energy"]
          },
          {
            id: "L3-VERSICH-ENERGIE-02", title: "Cyber-Versicherung für Energieinfrastruktur (KRITIS)",
            angreifbarkeit: "Das Aggregationsrisiko begrenzt die eigene Kapazität — Angreifer sind hier weniger Wettbewerber als Substitute: Staatliche Backstop-/Pool-Lösungen und Captives der großen Netzbetreiber können den kommerziellen Markt auf die Beratungsleistung reduzieren. Wer OT-Security-Expertise nicht selbst aufbaut, wird vom Risk Carrier zum bloßen Vermittler.",
            definition: "KRITIS-Betreiber (ÜNBs, VNBs, Kraftwerksbetreiber) sind attraktive Ziele für staatlich gesponserte Cyberangriffe (APT-Gruppen wie Sandworm/Russland, Volt Typhoon/China). NIS2-Richtlinie (ab Oktober 2024) verschärft Meldepflichten und Sicherheitsanforderungen. Cyber-Versicherungen decken: Kosten für Incident Response (forensische IT-Unternehmen, Krisenmanagement), Betriebsunterbrechungskosten bei IT-Systemausfall, Erpressungszahlungen (Ransomware), Reputationsschäden, Regulierungsstrafen (NIS2-Bußgelder bis 2% Jahresumsatz). Prämien: 0,5–2% der versicherten Summe p.a., stark gestiegen seit 2020.",
            wertschoepfung: "Versicherer: Wachstumsmarkt, aber schwer kalkulierbar (Cyber-Risiken korrelieren stark — ein nationaler Blackout-Angriff trifft viele Versicherte gleichzeitig). Makler: Beratungsintensive Platzierung mit hohen Provisionen. Incident-Response-Dienstleister (Crowdstrike, Mandiant): werden oft als Pflicht-Panel-Partner in Police genannt.",
            herausforderungen: "Systemisches Risiko: Cyber-Angriffe auf kritische Infrastruktur könnten simultane Schäden bei hunderten Versicherungsnehmern auslösen — Aggregationsrisiko für Versicherer existenziell. Underwriting-Daten fehlen: historische Schadendaten für OT-Cyberangriffe sind rar. Steigende Prämien führen zu Unterversicherung.",
            ausblick: "NIS2-Pflichten (ab Oktober 2024) zwingen Energieunternehmen zur Cyber-Mindestabsicherung — schafft Versicherungsnachfrage. Kopplung von Cyber-Versicherung mit Security-as-a-Service (SIEM, SOC-Monitoring) als Bundle. Staatliche Rückversicherung für systemische Cyber-Risiken diskutiert (analog Pool Re in UK für Terrorrisiken).",
            erloesmodell: "Prämieneinnahmen (0,5–2% p.a.) + Security-Service-Fees",
            regulierung: "NIS2-Richtlinie, KRITIS-DachG, BSI-Gesetz §8a, VAG",
            kundensegment: "ÜNBs, VNBs, Kraftwerksbetreiber, Stadtwerke (KRITIS-Schwellenwerte)",
            differenzierung: "OT-Cyber-Underwriting-Expertise, Incident-Response-Panel, NIS2-Compliance-Beratung",
            bmc_kanaele: "B2B-Vertrieb über spezialisierte Makler an KRITIS-Betreiber; Incident-Response-Partner (Crowdstrike, Mandiant) als Co-Vertriebskanal im Panel.",
            bmc_kundenbeziehung: "Jahrespolice mit Pflicht-Panel-Partnern für Incident Response; enge Beratungsbeziehung wegen NIS2-Compliance-Anforderungen.",
            bmc_kostenstruktur: "Rückversicherung/Risikokapitalunterlegung für Aggregationsrisiko als Hauptblock; Underwriting-Expertise für OT-Cyber-Risiken als knappe Ressource.",
            fallbeispiel: "Konkret zeigt sich das systemische Risiko der Cyber-Versicherung an einem Szenario, das Versicherer besonders fürchten: Ein staatlich gesponserter Angriff (etwa durch eine Gruppe wie Sandworm) trifft nicht nur einen einzelnen Netzbetreiber, sondern gleichzeitig die SCADA-Systeme mehrerer KRITIS-Betreiber, die alle bei Allianz AGCS oder HDI Global versichert sind — ein einziges Angriffsereignis löst dann viele Schadensfälle zur gleichen Zeit aus, statt wie bei einer Brandversicherung zeitlich und örtlich verteilt zu sein. Genau dieses Aggregationsrisiko erklärt, warum die Prämien seit 2020 stark gestiegen sind: Ein VNB zahlt heute 0,5–2% der versicherten Summe pro Jahr, deutlich mehr als für eine klassische Sachversicherung. Im Schadensfall greift die Police auf ein vertraglich vorab festgelegtes Panel von Incident-Response-Dienstleistern wie Crowdstrike zurück, die forensische Aufklärung und Systemwiederherstellung übernehmen — ein Pflichtbestandteil moderner Cyber-Policen, der gleichzeitig die NIS2-Meldepflichten des Versicherten erfüllen hilft.",
            status: "aktiv",
            radar: { regulierung:4, skalierbarkeit:3, marktrisiko:3, digitalisierung:4, wettbewerb:3, nachhaltigkeit:2 },
            erloesTyp: "Fee-based",
            akteure: ["Allianz AGCS","Munich Re","HDI Global","Hiscox","Beazley"]
          }
        ]
      }
    ]
  },

  // ────────────────────────────────────────────────────────
  // L1: ENERGIEBESCHAFFUNG & CONTRACTING (INDUSTRIE)
  // ────────────────────────────────────────────────────────
  {
    id: "L1-CONTRACT", title: "Energiebeschaffung & Contracting (Industrie)",
    icon: "🏭", color: "#0369A1",
    description: "Professionelles Energiemanagement für Industrie und Gewerbe — von der Beschaffungsoptimierung über Energieeffizienz-Contracting bis zum Full-Service-Energiemanagement.",
    capabilities: [
      {
        id: "L2-CONTRACT-MGMT", title: "Industrielles Energiemanagement",
        description: "Professionelle Beschaffung, Optimierung und Effizienzsteigerung für energieintensive Industrie.",
        actors: ["Siemens Smart Infrastructure","Johnson Controls","Engie Solutions","Cofely","GETEC","enviaM"],
        items: [
          {
            id: "L3-CONTRACT-MGMT-01", title: "Energieeinkaufs-Optimierung (Procurement Consulting)",
            angreifbarkeit: "Insourcing ist der Hauptangriff: Große Verbraucher bauen eigene Beschaffungsteams mit Direktzugang zur Börse auf, und digitale Beschaffungsplattformen (vgl. L3-VERGL-B2B-01) automatisieren das Standardgeschäft. Die Beratungsmarge verteidigt sich nur in der Komplexität — Netzentgeltoptimierung, Umlagenbefreiungen, PPA-Strukturierung; die reine Tranchenbeschaffung ist Commodity.",
            definition: "Spezialisierte Energieeinkaufsberater (Energie Consulting, GETEC, enviaM) unterstützen energieintensive Unternehmen bei der Beschaffungsstrategie: (1) Hedging-Strategie — wann und wie viel Strom/Gas auf Termin kaufen? (2) Portfoliooptimierung — Mischung aus Spotmarkt, Terminkontrakt, PPA. (3) Nebenkosten-Optimierung — Prüfung von Netzentgelten, EEG-Umlage-Befreiungen (§64 EEG für stromintensive Industrie), §19 StromNEV-Vergünstigungen. (4) Lastmanagement — Lastspitzenoptimierung zur Senkung der leistungsabhängigen Netzentgelte. Zielgruppe: Unternehmen mit >1 GWh/Jahr Stromverbrauch. Ersparnis durch professionelle Beschaffung: typisch 5–15% der Energiekosten.",
            wertschoepfung: "§64-EEG-Befreiung (Superoptional für energieintensive Industrie) allein kann Millioneneinsparungen bedeuten — ROI für Beratung extrem hoch. Lastspitzen-Optimierung: 1 MW Lastspitzenreduktion = 50.000–150.000 €/Jahr Netzentgeltersparnis. Hedging-Beratung: richtige Hedge-Ratio und Timing kann bei volatilen Märkten 10–20% Kostenvorteil bedeuten.",
            herausforderungen: "§64-EEG-Befreiung steht unter EU-Beihilfe-Druck — Beratungsfeld könnte wegfallen. Energiepreisvolatilität macht Hedging-Empfehlungen riskant — Fehlprognosen können Kundenverhältnis belasten. Zunehmend internes Know-how in Großunternehmen: DAX-Konzerne bauen eigene Energieabteilungen auf.",
            ausblick: "CSRD-Berichtspflichten für Scope-2-Emissionen schaffen neuen Beratungsbedarf: nicht nur günstigste, sondern 'grünste' Beschaffung (24/7 CFE, REGOs). H2-Beschaffungsberatung als neues Feld (Corporate H2 PPAs). Demand-Response-Optimierung: Berater helfen Industrie, Flexibilitätspotenziale zu monetarisieren (§64-Reform, Aggregatoren-Verträge).",
            erloesmodell: "Erfolgshonorar (% der erzielten Kosteneinsparung) oder Beratungspauschale",
            regulierung: "EEG §64 (Stromkostenkompensation), §19 StromNEV, EnWG §42a, EnSaG",
            kundensegment: "Energieintensive Industrie (Chemie, Stahl, Aluminium, Papier, Lebensmittel)",
            differenzierung: "§64-Expertise, Hedging-Kompetenz, Netzentgelt-Optimierung, Marktzugang (Direktzugang EEX)",
            bmc_kanaele: "B2B-Direktvertrieb an energieintensive Industrie über Fachnetzwerk und Referenzen; kein Massenmarketing.",
            bmc_kundenbeziehung: "Laufende Beratungsbeziehung über Beschaffungszyklen (Hedging-Entscheidungen); Vertrauen über nachweisbare Einsparungen (Erfolgshonorar-Logik).",
            bmc_kostenstruktur: "Beraterpersonal (Markt-/Regulierungsexpertise) als dominanter Kostenblock; Marktdatenzugang (EEX-Direktzugang) als Fixkosten.",
            fallbeispiel: "Konkret zeigt sich der Beratungs-ROI an einem mittelständischen Chemieunternehmen mit 20 GWh Jahresverbrauch, das auf die §64-EEG-Befreiung für stromintensive Industrie prüfen lässt: Ein Berater von GETEC oder econ group analysiert, ob die Produktionsprozesse die Stromkostenintensitäts-Schwelle erreichen, und begleitet den Antrag — gelingt die Befreiung, sinkt die EEG-Umlagebelastung um einen Betrag, der bei diesem Verbrauch schnell in die Hunderttausende geht. Parallel optimiert der Berater die Lastspitzen: Verschiebt das Unternehmen einen energieintensiven Produktionsschritt von der Mittagsspitze in die Nacht, sinkt die maximale Bezugsleistung um z.B. 1 MW — und damit der leistungsabhängige Teil der Netzentgelte um 50.000–150.000 € im Jahr, ohne dass eine einzige Kilowattstunde weniger verbraucht wird. Der Berater verdient an dieser Optimierung über ein Erfolgshonorar, das sich als Prozentsatz der nachgewiesenen Einsparung bemisst — sein eigenes Interesse ist damit direkt an das Ergebnis für den Kunden gekoppelt.",
            status: "aktiv",
            radar: { regulierung:3, skalierbarkeit:3, marktrisiko:2, digitalisierung:3, wettbewerb:3, nachhaltigkeit:3 },
            erloesTyp: "Fee-based",
            akteure: ["GETEC","Energie Consulting","BET","econ group","enviaM"]
          },
          {
            id: "L3-CONTRACT-MGMT-02", title: "Energieeffizienz-Contracting (EPC)",
            angreifbarkeit: "ESCO-Modelle werden von Herstellern mit eigener Finanzierung und von Banken-Leasing angegriffen, die Effizienztechnik ohne Performance-Vertrag bündeln; gleichzeitig senken fallende Technologiepreise (LED, Sensorik) die Einsparhöhe, die den Contracting-Overhead rechtfertigt. M&V-Streitigkeiten sind die offene Flanke — wer Einsparungen nicht wasserdicht nachweist, verliert Marge und Reputation.",
            definition: "Energy Performance Contracting (EPC): Dienstleister (Siemens SI, Johnson Controls, Engie Solutions, Cofely) finanzieren Effizienzmaßnahmen (LED-Beleuchtung, Gebäudeautomation, Druckluftoptimierung, Prozesswärme-Rückgewinnung, Wärmepumpen) und refinanzieren sich ausschließlich aus garantierten Energieeinsparungen. Zwei Modelle: (1) Shared Savings: Einsparungen über Vertragslaufzeit geteilt (Contractor 50–70%, Kunde 30–50%). (2) Guaranteed Savings: Contractor garantiert Mindesteinsparung; Kunde refinanziert Investment, Contractor trägt Performance-Risiko. Typische Vertragslaufzeiten: 8–15 Jahre. Zielgruppen: Kommunen, Krankenhäuser, Schulen, Industriebetriebe.",
            wertschoepfung: "Für Kunden ohne Eigenkapital oder Investitionsbudget: Energiewende ohne Kapitalaufwand. Contractor verdient Marge auf Differenz zwischen tatsächlicher Einsparung und garantierter Einsparung. Maßnahmenmix aus schnell-amortisierenden (LED, <2 Jahre) und langsam-amortisierenden (BHKW, >8 Jahre) Investitionen in einem Vertrag gebündelt. Öffentliche Förderung (BEG, KfW) kann EPC-Business Case erheblich verbessern.",
            herausforderungen: "Messen und Verifizieren (M&V): Einsparungsnachweis nach IPMVP-Standard ist aufwendig und streitanfällig. Lange Vertragslaufzeiten erhöhen Risiken (Nutzerverhalten, Gebäudenutzungsänderung). Finanzierungslücke: Contractor muss Capex vorstrecken — kapitalintensiv. Komplexe Vertragsgestaltung erhöht Transaktionskosten.",
            ausblick: "GEG (Heizungsgesetz) und EU-Energieeffizienzrichtlinie (EED) treiben EPC-Nachfrage. Öffentliche Hand (Kommunen, Bundesgebäude) als Wachstumsmarkt — explizites Ziel: 3% Renovierungsrate öffentlicher Gebäude/Jahr. Digitales EPC: IoT-Monitoring ermöglicht kontinuierliche M&V statt jährlicher Messung.",
            erloesmodell: "Shared Savings (% der Einsparung) oder Guaranteed Savings (Finanzierungs- + Servicerate)",
            regulierung: "EDL-G (Energiedienstleistungsgesetz), EnWG §3 Nr. 24a, BEG-Förderrichtlinie, EU EED Art. 5",
            kundensegment: "Kommunen, Krankenhäuser, Schulen, Industrie (ohne eigenes Investitionsbudget)",
            differenzierung: "M&V-Kompetenz (IPMVP), Finanzierungskraft, Maßnahmen-Portfolio, Referenzen im öffentlichen Sektor",
            bmc_kanaele: "B2B-Direktvertrieb/Ausschreibungen an Kommunen, Krankenhäuser, Industrie; Referenzprojekte im öffentlichen Sektor als Vertrauensanker.",
            bmc_kundenbeziehung: "Sehr langfristige Vertragsbeziehung (8–15 Jahre) mit Performance-Garantie; Messung & Verifizierung (M&V) als laufender Vertrauensmechanismus.",
            bmc_kostenstruktur: "Vorfinanzierung der Effizienzmaßnahmen (Capex) als Hauptkostenblock; M&V-Prozesskosten nach IPMVP-Standard.",
            fallbeispiel: "Konkret funktioniert ein Guaranteed-Savings-EPC-Vertrag so: Ein Krankenhaus hat ein veraltetes Heizsystem und keinen Investitionsspielraum. Siemens Smart Infrastructure finanziert vor, baut LED-Beleuchtung, Gebäudeautomation und ein effizienteres Heizsystem ein und garantiert vertraglich eine Mindesteinsparung von z.B. 25% der bisherigen Energiekosten. Das Krankenhaus finanziert die Investition aus genau dieser garantierten Einsparung zurück — verändert sich an seinem laufenden Budget zunächst also nichts, nur die Kostenzusammensetzung verschiebt sich von Energiekosten zu Finanzierungsraten. Wird die garantierte Einsparung nach dem IPMVP-Messstandard nicht erreicht, muss Siemens die Differenz aus eigener Tasche ausgleichen — das Performance-Risiko liegt vollständig beim Contractor, nicht beim Krankenhaus. Übertrifft die tatsächliche Einsparung die Garantie, behält Siemens bei diesem Modell die Mehrleistung als zusätzliche Marge, was den Anreiz schafft, die Maßnahmen tatsächlich so effizient wie möglich umzusetzen statt nur die vertragliche Mindestgarantie zu erfüllen.",
            status: "aktiv",
            radar: { regulierung:2, skalierbarkeit:3, marktrisiko:2, digitalisierung:3, wettbewerb:3, nachhaltigkeit:5 },
            erloesTyp: "Fee-based",
            akteure: ["Siemens Smart Infrastructure","Johnson Controls","Engie Solutions","Cofely","Wisag"]
          },
          {
            id: "L3-CONTRACT-MGMT-03", title: "Industrielle Eigenversorgung & Direktleitung",
            angreifbarkeit: "Das Modell ist selbst der Angreifer (es entzieht Lieferanten und Netz die Mengen) — verwundbar ist es regulatorisch: Jede Reform der Netzentgelt- und Umlagensystematik (AgNes: Netzkosten-Beteiligung von Erzeugern, Debatte um faire Kostenverteilung) kann die Wirtschaftlichkeit der Umgehung kippen. Zudem konkurrieren PPA-Angebote und GGV-Modelle mit weniger Capex um denselben Business Case.",
            definition: "Großindustrielle Abnehmer (Stahlwerke, Chemiewerke, Rechenzentren) investieren zunehmend in eigene Erzeugungs- und Versorgungsinfrastruktur: (1) Eigenversorgungsanlage (§3 EEG Nr. 19): eigene Erzeugungsanlage versorgt unmittelbar angrenzende Verbrauchsstätte — Netzentgelt- und EEG-Umlagebefreiung bei direktem räumlichem Zusammenhang. (2) Direktleitung (§3 Nr. 12 EnWG): private Leitung verbindet Erzeuger und Abnehmer ohne öffentliches Netz — vollständige Netzentgeltbefreiung. Typisch bei BHKW, Windanlage auf Werksgelände, Solaranlage auf Hallendach. (3) Industrieller Stromkauf über eigene Bilanzkreise: große Industrie nimmt direkten Börsenzugang (EEX-Mitgliedschaft) für günstige Beschaffung.",
            wertschoepfung: "Netzentgelt-Vermeidung ist der größte Hebel: Bei 100 GWh/Jahr Eigenverbrauch und 8 ct/kWh Netzentgelt = 8 Mio. €/Jahr Einsparung. EEG-Umlage-Befreiung (historisch): war bis 2022 wichtig, nach EEG-Abschaffung der EEG-Umlage weggefallen. Eigenversorgung als Resilienz: Versorgungssicherheit bei Netzstörungen durch eigene Anlage.",
            herausforderungen: "Regulatorische Anforderungen sind komplex und werden häufig geändert (BNetzA-Auslegungsentscheidungen zu Eigenversorgung). Investitionskosten für Eigenversorgungsanlage hoch. Direktleitung: genehmigungsrechtlich aufwendig, nur bei räumlicher Nähe praktikabel. H2-Eigenversorgung (Elektrolyse + Eigennutzung) als nächste Dimension noch regulatorisch ungelöst.",
            ausblick: "Dezentralisierung der Energieversorgung begünstigt Eigenversorgungsmodelle. Agri-PV auf Fabrikdächern + BESS + Eigenverbrauch als Standard für neue Industriegebäude. EU Net Metering-Regelungen und Energy Communities ermöglichen neue Eigenversorgungsformen. H2-Eigenversorgung für Stahl/Chemie als strategisches Ziel.",
            erloesmodell: "Kostenvermeidung (Netzentgelt, EEG-Umlage) + ggf. Überschusseinspeisung (EEG-Vergütung)",
            regulierung: "EEG §3 Nr. 19 (Eigenversorger), EnWG §3 Nr. 12 (Direktleitung), §19 StromNEV, BNetzA-Auslegung",
            kundensegment: "Energieintensive Industrie (Stahl, Chemie, Aluminium), Rechenzentren, Logistikzentren",
            differenzierung: "Anlagen-Engineering, Genehmigungskompetenz Direktleitung, Steuer-/Regulierungsoptimierung",
            bmc_kanaele: "B2B-Direktvertrieb/Engineering-Beratung an Großindustrie; oft als Teil größerer Anlagenbau-/Energieprojekte vertrieben.",
            bmc_kundenbeziehung: "Projektbezogene, technisch enge Beziehung über Planungs- und Genehmigungsphase; danach geringe laufende Kundenbindung (Anlage gehört dem Industriekunden).",
            bmc_kostenstruktur: "Engineering- und Genehmigungspersonal als Hauptkosten; regulatorische Beratung zum Eigenversorgungsstatus als Zusatzaufwand.",
            fallbeispiel: "Konkret rechnet sich Eigenversorgung an einem Stahlwerk, das 100 GWh im Jahr verbraucht und auf seinem Werksgelände ein eigenes BHKW oder eine Solaranlage betreibt: Für jede selbst erzeugte und direkt verbrauchte Kilowattstunde entfällt das Netzentgelt, das sonst beim Bezug aus dem öffentlichen Netz anfällt — bei rund 8 ct/kWh Netzentgelt und 100 GWh Eigenverbrauch ergibt das eine Einsparung von etwa 8 Mio. € im Jahr, allein durch die Vermeidung der Netzdurchleitung. GETEC oder Siemens Energy als Engineering-Partner verdienen nicht an dieser laufenden Einsparung, sondern am einmaligen Projekt: Planung, Genehmigung und Bau der Eigenversorgungsanlage, plus regulatorische Beratung dazu, ob die räumliche Nähe von Erzeugung und Verbrauch tatsächlich die strengen Anforderungen des §3 Nr. 19 EEG erfüllt — verfehlt das Projekt diese Kriterien nur knapp, entfällt die gesamte Netzentgeltbefreiung, weshalb diese rechtliche Vorprüfung für die Wirtschaftlichkeit des gesamten Projekts entscheidend ist.",
            status: "aktiv",
            radar: { regulierung:3, skalierbarkeit:2, marktrisiko:2, digitalisierung:3, wettbewerb:2, nachhaltigkeit:4 },
            erloesTyp: "Merchant",
            akteure: ["GETEC","RWE Industrielösungen","Siemens Energy","Engie","E.ON"]
          }
        ]
      }
    ]
  }

);  // Ende GM_DATA.push() v1.4

// Akteurs-Index nach Ergänzung neu aufbauen
(function() {
  GM_DATA.forEach(domain => {
    domain.capabilities.forEach(cap => {
      cap.items.forEach(item => {
        if (item.akteure) {
          item.akteure.forEach(a => {
            if (!GM_ACTORS_INDEX[a]) GM_ACTORS_INDEX[a] = [];
            const alreadyIn = GM_ACTORS_INDEX[a].some(e => e.itemId === item.id);
            if (!alreadyIn) {
              GM_ACTORS_INDEX[a].push({
                domainId: domain.id, domainTitle: domain.title,
                domainIcon: domain.icon, domainColor: domain.color,
                capId: cap.id, capTitle: cap.title,
                itemId: item.id, itemTitle: item.title
              });
            }
          });
        }
      });
    });
  });
})();

// v1.4 version set at top of file

// ══════════════════════════════════════════════════════════
// v1.5 NEUE DOMÄNEN — Energiemärkte & Market Design,
//   Prosumer & Mieterstrom, Marktinstitutionen
// ══════════════════════════════════════════════════════════
GM_DATA.push(

  // ────────────────────────────────────────────────────────
  // L1: PROSUMER & DEZENTRALE ENERGIEVERSORGUNG
  // ────────────────────────────────────────────────────────
  {
    id: "L1-PROSUMER", title: "Prosumer & dezentrale Energieversorgung",
    icon: "☀️", color: "#84CC16",
    description: "Haushalte, Wohngebäude und Quartiere als aktive Energieproduzenten und -konsumenten — von Balkonsolar bis Mieterstrom, gemeinschaftlicher Gebäudeversorgung und Energy Communities.",
    capabilities: [
      {
        id: "L2-PROSUM-HAUS", title: "Haushalts-Prosumer (PV + Speicher + EV)",
        description: "Eigenheimbesitzer mit PV-Anlage, Heimspeicher und EV als vollständig integriertes Energiesystem.",
        actors: ["SMA Solar","Fronius","Solarwatt","BYD Battery-Box","Tesla Powerwall","Enphase"],
        items: [
          {
            id: "L3-PROSUM-HAUS-01", title: "PV-Eigenverbrauch & Einspeisevergütung",
            angreifbarkeit: "Kein Geschäftsmodell mit Burggraben, sondern ein regulatorisch begünstigter Arbitrage-Case: Sinkende Einspeisevergütung und die §51-Nullvergütung bei negativen Preisen verschieben den Wert zur Flexibilität — wer Speicher, dynamischen Tarif und Steuerung nicht nachrüstet, sieht die Rendite erodieren. Die eigentliche Marge wandert zu den Ökosystem-Anbietern (Enpal, 1KOMMA5°, Tibber), die Hardware, Tarif und Optimierung bündeln.",
            definition: "Eigenheimbesitzer mit PV-Anlage (typisch 10–20 kWp, Kosten ~800–1.200 €/kWp inkl. Installation, 2024) erzeugen Strom für den Eigenverbrauch und speisen Überschuss ins Netz ein. Einspeisevergütung nach EEG 2023: 8,2 ct/kWh (Anlagen ≤10 kWp), 7,1 ct/kWh (bis 40 kWp), 5,8 ct/kWh (bis 100 kWp) — deutlich unter Eigenverbrauchswert (~30 ct/kWh Bezugspreis). Daher: maximaler Eigenverbrauch ist wirtschaftlich optimal. Eigenverbrauchsquote ohne Speicher: 25–35%; mit Speicher: 60–80%. Amortisationszeit PV+Speicher: 8–12 Jahre (2024).",
            wertschoepfung: "Eigenverbrauch ist die Kernwertschöpfung: jede selbst verbrauchte kWh spart den Bezugspreis (~30 ct/kWh) minus variable Erzeugungskosten (~3–5 ct/kWh) = ~25 ct/kWh Nettovorteil. Heimspeicher erhöht Eigenverbrauchsquote von ~30% auf ~70% — verdoppelt den Wert der PV-Anlage bei Mehrkosten von ~8.000–12.000 €. Smart-Home-Integration (Waschmaschine, Spülmaschine, WP auf Solar-Überschuss steuern) als kostenloser Eigenverbrauchsbooster.",
            herausforderungen: "Sinkende Einspeisevergütung reduziert Erlöse für überschüssigen Strom. Dachfläche und Ausrichtung limitieren Ertrag. Netzanschlusspflicht und Anmeldepflicht beim VNB bürokratisch aufwendig. Degradation der Module (0,3–0,5%/Jahr) und Wechselrichter-Lebensdauer (~15 Jahre) als Wartungskosten. Finanzierung: Kreditlaufzeit und Zinsen beeinflussen Amortisation stark.",
            ausblick: "Solar-LCOE sinkt weiter (<25 €/MWh 2026) — Amortisationszeiten kürzen sich. Kombinationseffekte mit EV (Laden mit Solarstrom) und WP (Warmwasser aus Überschuss) verbessern Eigenverbrauchsquote auf >80%. Balkonkraftwerke (800 W, vereinfachte Anmeldung seit 2024) demokratisieren PV für Mieter. §41a dynamische Tarife ermöglichen gezielten Netzbezug in Billigstunden.",
            erloesmodell: "Eigenverbrauchseinsparung (ct/kWh) + EEG-Einspeisevergütung (8,2 ct/kWh)",
            regulierung: "EEG 2023 §21 (Einspeisevergütung), §9 (Einspeisemanagement), MsbG, EnWG §8 (Netzanschluss)",
            kundensegment: "B2C Eigenheimbesitzer",
            differenzierung: "Systemintegration (PV+Speicher+WP+EV), Eigenverbrauchsoptimierung, Amortisationszeit",
            bmc_kanaele: "Direktvertrieb über lokale Installateure/Handwerksbetriebe; Vergleichsportale für Solaranlagen als Lead-Quelle.",
            bmc_kundenbeziehung: "Einmalige Kaufentscheidung mit anschließender Wartungsbeziehung zum Installateur; keine laufende Anbieterbeziehung wie bei Lieferanten.",
            bmc_kostenstruktur: "Anschaffungskosten (Module, Wechselrichter, Speicher, Installation: ~800–1.200 €/kWp) als dominanter Block; geringe laufende Wartungskosten.",
            fallbeispiel: "Konkret rechnet sich eine 15-kWp-PV-Anlage mit Speicher für einen Eigenheimbesitzer so: Ohne Speicher verbraucht der Haushalt nur 25–35% des erzeugten Solarstroms selbst (vor allem mittags), der Rest wird für 8,2 ct/kWh ins Netz eingespeist — deutlich unter dem Bezugspreis von rund 30 ct/kWh, den der Haushalt für jede nicht selbst erzeugte Kilowattstunde zahlt. Mit einem 10-kWh-Speicher steigt die Eigenverbrauchsquote auf 60–80%, weil der mittags erzeugte Überschuss gespeichert und abends genutzt werden kann, statt ihn für ein Drittel des eigenen Bezugspreises zu verkaufen. Jede dadurch zusätzlich selbst genutzte Kilowattstunde bringt einen Nettovorteil von rund 25 ct/kWh (Bezugspreis minus geringe Erzeugungskosten) statt nur 8,2 ct/kWh Einspeisevergütung — der Speicher verdoppelt damit faktisch den wirtschaftlichen Wert derselben PV-Anlage, auch wenn er selbst keine einzige Kilowattstunde neu erzeugt.",
            status: "aktiv",
            radar: { regulierung:2, skalierbarkeit:4, marktrisiko:1, digitalisierung:3, wettbewerb:4, nachhaltigkeit:5 },
            erloesTyp: "Merchant",
            akteure: ["SMA Solar","Fronius","Solarwatt","BYD","Tesla Powerwall","Enphase"]
          },
          {
            id: "L3-PROSUM-HAUS-02", title: "Balkonkraftwerk (Stecker-Solar)",
            angreifbarkeit: "Reines Hardware-Commodity mit Preisverfall: Differenzierung über Apps und Speicher ist dünn, Baumärkte und Discounter übernehmen den Vertrieb, asiatische Hersteller die Marge. Angreifbar ist vor allem die Grenze nach oben: Sobald Mini-PV mit Speicher und Messkonzept wächst, konkurriert sie mit 'richtiger' Dach-PV samt professionellem Ökosystem.",
            definition: "Balkonkraftwerke (steckerfertige PV-Anlage, max. 800 W Wechselrichterleistung seit Gesetzesänderung 2024) ermöglichen Mietern und Wohnungseigentümern ohne Dach erstmals die Eigenerzeugung. Anmeldung stark vereinfacht: seit dem Solarpaket I (2024) entfällt die Anmeldung beim Netzbetreiber – es genügt die vereinfachte Registrierung im Marktstammdatenregister (MaStR). Preis: 300–600 €, Amortisationszeit ~3–5 Jahre. Monatliche Ersparnis: ~5–15 €/Monat je nach Standort und Verbrauchsprofil. Marktvolumen Deutschland 2024: >500.000 installierte Anlagen, stark wachsend.",
            wertschoepfung: "Niedrige Einstiegshürde: 300 € Invest, plug-and-play, keine Handwerker nötig. Für Hersteller/Händler (Anker, EcoFlow, Priwatt, Aldi): Hardware-Marge auf Massenprodukt. Für Plattformen (Amazon, Otto): Marktplatz-Provision. Ökosystem: Balkonkraftwerk als Einstieg in Smart-Home-Energiemanagement.",
            herausforderungen: "Einspeisevergütung für Überschuss praktisch nicht möglich ohne Zweirichtungszähler (Smart Meter). Netzrückwirkungen bei hoher Penetration im Niederspannungsnetz. WEG-Rechtsfragen (braucht man Zustimmung aller Eigentümer?). Qualitätsunterschiede bei Billigprodukten aus Fernost.",
            ausblick: "Markt wächst explosiv: EU-Solarstrategie fördert Prosumer-Modelle. 800 W-Grenze könnte auf 2.000 W angehoben werden (politische Diskussion). Integration in Smart-Home-Plattformen (Tibber, Home Assistant) als nächster Schritt. Balkonkraftwerk + Mini-Speicher als Weiterentwicklung.",
            erloesmodell: "Eigenverbrauchseinsparung (Substitution Netzbezug)",
            regulierung: "EEG §8 (vereinfachte Anmeldung), DIN VDE 0100-551-1, BEG (Förderung in einigen Bundesländern)",
            kundensegment: "B2C Mieter und Wohnungseigentümer ohne Dachfläche",
            differenzierung: "Preis, Wirkungsgrad, App-Integration, Einstiegshürde (plug-and-play)",
            bmc_kanaele: "Online-Direktvertrieb (Hersteller-Websites, Amazon, Otto) und Baumärkte/Discounter (Aldi); plug-and-play ohne Installateur.",
            bmc_kundenbeziehung: "Einmaliger Kauf ohne laufende Anbieterbeziehung; App-Integration als optionale Self-Service-Komponente.",
            bmc_kostenstruktur: "Hardware-Produktion/-Einkauf (Module, Mikro-Wechselrichter) als Hauptkosten; sehr geringe Vertriebs-/Servicekosten durch Plattform-Verkauf.",
            fallbeispiel: "Konkret kauft eine Mieterin ohne eigenes Dach für rund 400 € ein Balkonkraftwerk-Set von Anker SOLIX direkt bei Amazon, hängt zwei Module an ihr Balkongeländer und steckt den Mikro-Wechselrichter in eine normale Steckdose — keine Elektrofachkraft nötig, nur eine vereinfachte Registrierung im Marktstammdatenregister statt einer Anmeldung beim Netzbetreiber. Die Anlage erzeugt bis zu 800 W, die direkt von Geräten im Haushalt verbraucht werden, während sie laufen; ein Überschuss, der ins Netz zurückfließt, wird ohne Zweirichtungszähler praktisch nicht vergütet. Bei einer Ersparnis von 5–15 € im Monat amortisiert sich die Anlage in 3–5 Jahren. Anker selbst verdient an der Hardware-Marge des Massenprodukts, Amazon an der Marktplatz-Provision für die Vermittlung — ein fundamental anderes Geschäftsmodell als die kapitalintensive Dachanlage, weil hier keine Installateure und keine langen Genehmigungsverfahren zwischen Kaufentscheidung und erster eigener Kilowattstunde stehen.",
            status: "aktiv",
            radar: { regulierung:1, skalierbarkeit:5, marktrisiko:1, digitalisierung:3, wettbewerb:5, nachhaltigkeit:5 },
            erloesTyp: "Merchant",
            akteure: ["Anker SOLIX","EcoFlow","Priwatt","Beem Energy","Zendure"]
          }
        ]
      },
      {
        id: "L2-PROSUM-MIETER", title: "Mieterstrom & gemeinschaftliche Gebäudeversorgung",
        description: "Vermietung von Solarstrom innerhalb eines Gebäudes oder Quartiers — rechtlich komplexes, aber wachsendes Segment.",
        actors: ["Buzzn","Polarstern","Lumenaza","ENTEGA","Naturstrom","Enpal"],
        items: [
          {
            id: "L3-PROSUM-MIETER-01", title: "Mieterstrommodell (§42a EnWG)",
            definition: "Mieterstrom: Vermieter (oder Dienstleister im Auftrag) installiert PV-Anlage auf dem Dach und liefert Strom direkt an Mieter des Gebäudes — ohne Nutzung des öffentlichen Netzes. Rechtliche Grundlage: §42a EnWG (Mieterstromprivileg). Vorteile für Mieter: günstigerer Tarif als Grundversorgung (verpflichtend: mind. 10% unter lokalem Grundversorgungstarif). Vorteile für Vermieter: Zusatzeinnahmen aus PV-Anlage, attraktiveres Mietobjekt, ESG-Reporting. Förderpflicht: Mieterstromzuschlag nach §21 EEG (zusätzlich zur regulären Vergütung, je nach Anlagengröße ca. 1,6–2,6 ct/kWh).[[Q:eeg-foerder]] Abwicklung: Vermieter wird zum Energielieferanten — oder beauftragt Mieterstrom-Dienstleister (Buzzn, Lumenaza, ENTEGA).",
            wertschoepfung: "Dienstleister: Marge zwischen Einkaufspreis (EEG-Vergütung + Restzukauf) und Verkaufspreis an Mieter. Vollservice-Modell (Anlage, Abrechnung, Kundenservice) als Differenzierungsmerkmal. Vermieter: PV-Rendite + Mietprämium durch nachhaltiges Gebäude. Skaliervorteil: Dienstleister mit 10.000+ Mieteinheiten amortisiert IT/Compliance-Aufwand.",
            herausforderungen: "Regulatorische Komplexität: Vermieter wird Energielieferant mit allen EnWG-Pflichten (Marktkommunikation, Bilanzkreis, GPKE). Mieter haben Wechselrecht — Restversorgung muss sichergestellt sein. Abrechnung mit Zählern für jeden Mieter aufwendig. Wirtschaftlichkeit hängt stark von Mieter-Lastprofil und Solarpotenzial ab.",
            ausblick: "GGV (Gemeinschaftliche Gebäudeversorgung, §42b EnWG, in Kraft seit Mai 2024 mit dem Solarpaket I) vereinfacht das Modell: Nur Energiemengenweitergabe ohne Lieferantenpflichten. EU EMD Energy Communities ermöglichen Quartiers-Erweiterung über ein Gebäude hinaus. Kombination mit §14a-Steuerung (WP, EV im Gebäude) als nächster Schritt.",
            angreifbarkeit: "Die regulatorisch einfachere GGV (§42b EnWG, vgl. L3-PROSUM-MIETER-02) unterhöhlt das klassische Mieterstrommodell von innen: Vermieter, die nicht Energielieferant werden wollen, weichen direkt auf die GGV aus und lassen das Mieterstromprivileg links liegen. IT-Plattformanbieter (Lumenaza, gridX) bieten GGV-Abwicklung als günstige SaaS-Lösung an und entziehen klassischen Mieterstrom-Vollservicern (Buzzn, ENTEGA) damit das zentrale Differenzierungsargument 'Komplexität abnehmen'.",
            erloesmodell: "Retail Margin (Einkauf EEG-Vergütung, Verkauf an Mieter mit Rabatt auf GV-Tarif)",
            regulierung: "§42a EnWG (Mieterstrom), §42b EnWG (GGV), EEG §21 (Mieterstromzuschlag), GPKE",
            kundensegment: "B2C Mieter in Mehrfamilienhäusern; B2B Vermieter / Wohnungsbaugesellschaften",
            differenzierung: "Vollservice-Modell (Anlage + Abrechnung), Skalierung, regulatorische Compliance, Mieter-UX",
            bmc_kanaele: "B2B2C — Vertrieb über Vermieter/Wohnungsbaugesellschaften, die Mieterstrom-Dienstleister (Buzzn, Lumenaza) beauftragen.",
            bmc_kundenbeziehung: "Vermieter wird Energielieferant gegenüber Mietern mit vollen EnWG-Pflichten; Mieter haben Wechselrecht, daher geringe Exklusivbindung.",
            bmc_kostenstruktur: "PV-Anlagen-Capex (beim Vermieter) und Abrechnungs-/Compliance-IT (beim Dienstleister) als Hauptblöcke.",
            fallbeispiel: "Konkret läuft Mieterstrom über einen Dienstleister wie Buzzn so: Ein Vermieter installiert eine PV-Anlage auf seinem Mehrfamilienhaus, will aber nicht selbst zum Energielieferanten mit allen EnWG-Pflichten (Marktkommunikation, Bilanzkreisführung) werden. Buzzn übernimmt diese Rolle gegen eine Marge: Der Dachstrom wird zu einem Tarif an die Mieter verkauft, der gesetzlich mindestens 10% unter dem lokalen Grundversorgungstarif liegen muss, während Buzzn zusätzlich den nach §21 EEG vorgesehenen Mieterstromzuschlag von je nach Anlagengröße rund 1,6–2,6 ct/kWh einstreicht. Reicht der Dachstrom an einem bewölkten Tag nicht aus, kauft Buzzn den fehlenden Reststrom zu und rechnet ihn transparent mit ab — der Mieter merkt davon nichts, außer der günstigeren Rechnung. Der eigentliche Engpass dieses Modells liegt nicht im Tarif, sondern im administrativen Aufwand: Buzzn muss für jede einzelne Mieteinheit einen vollständigen Lieferantenwechselprozess (GPKE) abwickeln können, was sich erst ab einer gewissen Anzahl von betreuten Mieteinheiten wirtschaftlich trägt.",
            status: "aktiv",
            radar: { regulierung:3, skalierbarkeit:3, marktrisiko:1, digitalisierung:4, wettbewerb:3, nachhaltigkeit:5 },
            erloesTyp: "Merchant",
            akteure: ["Buzzn","Lumenaza","Polarstern","ENTEGA","Naturstrom","Enpal"]
          },
          {
            id: "L3-PROSUM-MIETER-02", title: "Gemeinschaftliche Gebäudeversorgung (§42b EnWG)",
            angreifbarkeit: "Die GGV greift selbst das Mieterstrommodell an — bleibt aber ein Plattform-Spiel: Abrechnungs- und IT-Anbieter (Metering-, PropTech-Plattformen) kommoditisieren die Abwicklung, und Messstellenbetreiber sitzen an der entscheidenden Schnittstelle (viertelstündliche Aufteilung). Wer nur 'GGV-Verwaltung' anbietet, konkurriert bald mit Features der Hausverwaltungs-Software.",
            definition: "Die GGV (eingeführt mit dem Solarpaket I, in Kraft seit Mai 2024)[[Q:enwg-42b]] ist die vereinfachte Alternative zum Mieterstrom: Der Anlagenbetreiber (Vermieter, WEG, Wohnungsbaugesellschaft) leitet Solarstrom innerhalb des Gebäudes an Mieter weiter — ohne selbst Energielieferant zu werden. Technisch: Überschussmengen werden über einen virtuellen Mengenzähler den Mietern gutgeschrieben; Abrechnung erfolgt anteilig nach festgelegtem Aufteilungsschlüssel. Restzukauf läuft weiterhin über den jeweiligen Lieferanten des Mieters. Kein GPKE-Prozess, keine Bilanzkreispflicht für den Vermieter. Eine Erweiterung auf Quartiers-Ebene (gemeinschaftliche Energieversorgung mehrerer Gebäude) ist in Diskussion.",
            wertschoepfung: "Deutlich niedrigere Hürde als Mieterstrom: Vermieter muss kein Energielieferant werden. IT-Dienstleister (Lumenaza, gridX) bieten GGV-Plattformen als SaaS. Wirtschaftlich attraktiv für WEGs mit hohem Solarertrag und homogenen Lastprofilen. Netzentgeltvorteil: Strom, der das Gebäude nicht verlässt, zahlt keine Netzentgelte.",
            herausforderungen: "Aufteilungsschlüssel muss WEG-intern vereinbart werden — soziale Komplexität. Mieter mit ungünstigem Lastprofil (tagsüber nicht zu Hause) profitieren wenig. Abrechnungssystem muss mit jedem Mieter-Lieferanten kompatibel sein. Regulatorisch noch jung — BNetzA-Auslegungen nicht vollständig konsolidiert.",
            ausblick: "EU EMD Energy Communities (Art. 16) als übergeordneter Rahmen: Communities dürfen Strom teilen, speichern und gemeinsam vermarkten. Quartierslösungen (mehrere Gebäude + gemeinsamer Speicher + Ladeinfrastruktur) als nächste Skalierungsstufe. Stadtwerke als GGV-Plattformbetreiber für ihr Versorgungsgebiet.",
            erloesmodell: "SaaS-Plattformgebühr für Abrechnungsdienstleister + anteilige Netzentgelteinsparung für Teilnehmer",
            regulierung: "§42b EnWG (GGV), EU EMD Art. 16 (Energy Communities), MsbG (Zählertechnik)",
            kundensegment: "WEGs, Wohnungsbaugesellschaften, Quartiersentwickler",
            differenzierung: "Plattform-Simplizität, Abrechnungsautomatisierung, WEG-Rechtskonformität",
            bmc_kanaele: "B2B-Vertrieb der Plattformanbieter (Lumenaza, gridX) an Vermieter/WEGs als SaaS-Lösung; kein direkter Endkundenvertrieb.",
            bmc_kundenbeziehung: "Vermieter/WEG als SaaS-Kunde der Abrechnungsplattform; Mieter nehmen passiv über Gutschrift teil, ohne eigene Vertragsbeziehung zum Anbieter.",
            bmc_kostenstruktur: "Plattform-/Abrechnungssoftware als Hauptkosten; geringe Betriebskosten dank Wegfall von GPKE-/Bilanzkreispflichten.",
            fallbeispiel: "Konkret zeigt sich der Unterschied zur klassischen Mieterstromlösung an einer WEG, die eine GGV-Plattform von Lumenaza einsetzt: Statt dass der Vermieter zum Energielieferanten wird (mit Bilanzkreis- und Marktkommunikationspflichten), läuft die Solarstromverteilung über einen virtuellen Mengenzähler, der die PV-Erzeugung nach einem vorher festgelegten Schlüssel den einzelnen Mieteinheiten gutschreibt — wer tagsüber zu Hause ist und mehr Solarstrom direkt nutzt, profitiert mehr als ein Mieter, der den ganzen Tag arbeitet. Den jeweils nicht gedeckten Reststrom bezieht jeder Mieter weiterhin ganz normal von seinem eigenen, frei gewählten Lieferanten — es entsteht kein neues Lieferverhältnis zur WEG. Lumenaza verdient an dieser Lösung über eine SaaS-Gebühr an die WEG, nicht über eine Marge auf den Stromverkauf selbst, was das Geschäftsmodell von Buzzns Mieterstrom-Vollservice unterscheidet: Hier wird Software verkauft, kein Strom.",
            status: "aktiv",
            radar: { regulierung:3, skalierbarkeit:4, marktrisiko:1, digitalisierung:4, wettbewerb:2, nachhaltigkeit:5 },
            erloesTyp: "Fee-based",
            akteure: ["Lumenaza","gridX","Buzzn","Stadtwerke München","enercity"]
          },
          {
            id: "L3-PROSUM-MIETER-03", title: "Solaranlage zur Miete / PV-Leasing (Enpal, 1KOMMA5°)",
            angreifbarkeit: "Kapitalmarkt-abhängiges Modell: Steigen Zinsen oder stockt die Verbriefung, bricht der Wachstumsmotor — während fallende Hardwarepreise den Kauf-Case gegen die Miete stärken (der Kern-Angriff: warum 20 Jahre mieten, was deutlich billiger geworden ist?). Regionale Installateure mit Bankfinanzierung und Utilities mit Bundles greifen von unten bzw. oben an; die Verteidigung liegt im Ökosystem (WP, Wallbox, dynamischer Tarif, VPP) und der eigenen Installationskapazität.",
            definition: "Enpal (gegründet 2017, Unicorn-Status) und 1KOMMA5° revolutionieren den Eigenheim-Solarmarkt durch ein Mietmodell: Kunden zahlen keine Anschaffungskosten, sondern monatliche Miete (ab ~79 €/Monat für PV + Speicher + Wallbox + Wärmepumpe als Bundle). Enpal behält Eigentumsrecht an der Anlage, übernimmt Installation, Wartung, Versicherung und Ertragsprognose. Finanzierung: Enpal refinanziert sich über Green Bonds und institutionelle Investoren (KfW, BlackRock). Enpal überschritt 2025 die Marke von 100.000 Kunden und hat über 300.000 installierte Einheiten (PV, Speicher, Wallboxen, Wärmepumpen) am Netz[[Q:enpal]]; es ist eines der am schnellsten wachsenden deutschen Startups. 1KOMMA5°: ähnliches Modell, aber mit eigenem Energiemanagement-System ('Heartbeat') und Direktvermarktung als integriertem Zusatzdienst.",
            wertschoepfung: "Für Kunden: Keine Kapitalbindung, sofortige Einsparung ab Monat 1 (Miete < Stromkosten-Einsparung). Für Enpal: Langfristiger Mietvertrag (20 Jahre) = stabiler Cashflow; Skalierungseffekte in Installation (eigene Installateurflotte = 3.000+ Mitarbeiter); Green-Bond-Finanzierung zu günstigen Zinsen durch EEG-gesicherte Cashflows. Bundle-Strategie: Miete deckt PV + Speicher + WP + Wallbox = maximaler Share-of-Wallet.",
            herausforderungen: "Kapitalintensiv: Enpal muss Millionen von Anlagen vorfinanzieren — abhängig von günstiger Kapitalmarktlage. Installationskapazität als Flaschenhals (Fachkräftemangel). Kundenbindung über 20 Jahre: Risiko bei Eigentümerwechsel, Umzug. Qualitätssicherung bei schnellem Wachstum. Konkurrenz durch fallende PV-Preise: eigene Anlage kaufen wird attraktiver.",
            ausblick: "Mietmodell als Mainstream-Weg in die Energiewende — besonders für Haushalte ohne Eigenkapital. 1KOMMA5° als integrierter Energiedienstleister (PV + Speicher + WP + Wallbox + Direktvermarktung + dynamischer Tarif) als Vorbild für 'All-in-One Heimenergie'. Konsolidierung: Enpal und 1KOMMA5° werden kleinere Installateure und Betreiber aufkaufen.",
            erloesmodell: "Monatliche Mietrate (€/Monat, 20-Jahres-Vertrag) + ggf. Direktvermarktungsgebühr",
            regulierung: "EEG §21 (Einspeisevergütung als Cashflow), BGB (Mietrecht), GEG, BEG-Förderung",
            kundensegment: "B2C Eigenheimbesitzer ohne Eigenkapital oder mit Präferenz für Vollservice",
            differenzierung: "Kein Eigenkapital nötig, Bundle (PV+WP+Wallbox+Speicher), Installationsnetz, Green-Bond-Finanzierung",
            bmc_kanaele: "Direktvertrieb über eigene Vertriebs-/Installateurflotte (Außendienst, Online-Lead-Generierung); kein Vergleichsportal-Vertrieb.",
            bmc_kundenbeziehung: "Sehr langfristige Mietvertragsbeziehung (20 Jahre) inkl. Wartung und Versicherung; hohe Bindung durch Bundle (PV+Speicher+WP+Wallbox).",
            bmc_kostenstruktur: "Vorfinanzierung der Anlagen (refinanziert über Green Bonds) als dominanter Block; eigene Installationskapazität als Personalkosten.",
            fallbeispiel: "Konkret rechnet sich Enpals Mietmodell für einen Hauseigentümer so: Statt 25.000 € für PV-Anlage, Speicher, Wallbox und Wärmepumpe auf einmal aufzubringen, zahlt der Kunde ab dem ersten Monat eine feste Rate von z.B. 99 €/Monat über 20 Jahre — und spart gleichzeitig mehr an Stromkosten ein, als die Rate kostet, weil ein Teil des Bedarfs jetzt aus eigener Solarerzeugung statt aus dem teuren Netzbezug gedeckt wird. Enpal selbst finanziert die Anschaffungskosten vor, refinanziert sich aber günstig über Green Bonds, weil institutionelle Investoren wie KfW oder BlackRock einem über 20 Jahre laufenden, durch EEG-Einspeisevergütung und Mietraten abgesicherten Cashflow ein niedriges Risiko zuschreiben. Der eigentliche Engpass für Enpals Wachstum ist nicht das Kapital, sondern die eigene Installationsflotte von über 3.000 Mitarbeitenden — jeder zusätzliche Kunde braucht physische Installateure vor Ort, und dieser Flaschenhals wächst langsamer als die Nachfrage nach dem kapitalfreien Einstieg in die Energiewende.",
            status: "aktiv",
            radar: { regulierung:2, skalierbarkeit:4, marktrisiko:2, digitalisierung:4, wettbewerb:3, nachhaltigkeit:5 },
            erloesTyp: "Subscription",
            akteure: ["Enpal","1KOMMA5°","Thermondo","Zolar","Otovo"]
          }
        ]
      },
      {
        id: "L2-PROSUM-COMMUNITY", title: "Energy Communities & lokale Energiemärkte",
        description: "Gemeinschaftliche Energieversorgung auf Quartiers- und Gemeindeebene — getrieben durch EU EMD und nationales Energierecht.",
        actors: ["EWS Schönau","BürgerEnergie Berlin","Lumenaza","Energy Web","Electron"],
        items: [
          {
            id: "L3-PROSUM-COMMUNITY-01", title: "Lokale Energie-Community (EU EMD Art. 16)",
            angreifbarkeit: "Noch im Aufbau — und angreifbar, bevor es skaliert: Kommerzielle Anbieter (GGV-Plattformen, Neolieferanten mit Community-Features) besetzen die Nutzenversprechen 'lokal & gemeinsam' ohne genossenschaftlichen Overhead. Bleibt die Netzentgelt-Privilegierung lokalen Verbrauchs aus (AgNes-Diskussion), fehlt dem Modell der ökonomische Kern gegenüber dem normalen Liefervertrag.",
            definition: "EU Electricity Market Design (EMD, 2023) und nationale Umsetzung (§42b, §3 Nr. 38a EnWG) schaffen den rechtlichen Rahmen für Energy Communities: Gruppen von Bürgern, KMU oder lokalen Behörden können gemeinsam Energie erzeugen, speichern, verbrauchen und teilen — innerhalb eines definierten Netzgebiets (typisch: ein Umspannwerk). Kernprinzip: Netzentgeltreduktion für lokal erzeugten und verbrauchten Strom (da das übergeordnete Netz nicht genutzt wird). Plattformbetreiber (Lumenaza, Electron, gridX) ermöglichen P2P-Abrechnung: Mitglied A verkauft Überschusssolar direkt an Mitglied B — zum Preis zwischen Einspeisevergütung und Grundversorgungstarif.",
            wertschoepfung: "Netzentgelt-Sharing: Strom, der die Community nicht verlässt, zahlt keine oder reduzierte Netzentgelte — Einsparung 8–15 ct/kWh. Preisvorteile für alle: Erzeuger erhält mehr als Einspeisevergütung, Verbraucher zahlt weniger als Grundversorgungstarif. Gemeinschaftliche Investitionen (Quartiersspeicher, PV-Anlage auf öffentlichem Gebäude) amortisieren sich schneller durch breitere Kostenteilung. Plattformbetreiber verdient Transaktionsgebühr.",
            herausforderungen: "Regulatorische Umsetzung in Deutschland noch im Aufbau: EU EMD-Transposition verzögert sich. Netzentgeltreduktion für lokalen Verbrauch ist nicht überall eindeutig geregelt. Verwaltungsaufwand für Community-Gründung und -Betrieb hoch. Technische Anforderungen (Smart Meter für alle Mitglieder) als Voraussetzung.",
            ausblick: "Energy Communities werden mit vollständigem Smart-Meter-Rollout (2025+) praktisch umsetzbar. Stadtwerke als Community-Betreiber für ihr Versorgungsgebiet. Kombination mit kommunaler Wärmeplanung (WPG): Wärme-Communities. Erweiterung auf Industrie: lokale H2-Communities für Gewerbegebiete.",
            erloesmodell: "Transaktionsgebühren (ct/kWh P2P-Handel) + Plattformabo + Netzentgelteinsparung für Mitglieder",
            regulierung: "EU EMD Art. 16, §42b EnWG, §3 Nr. 38a EnWG, MsbG (Smart Meter als Voraussetzung)",
            kundensegment: "Bürger, KMU, lokale Behörden im gleichen Netzgebiet",
            differenzierung: "Plattform-Simplizität, lokales Netzwerk, Netzentgeltoptimierung, Community-Building",
            bmc_kanaele: "Plattformbetreiber (Lumenaza, Electron, gridX) vertreiben P2P-Abrechnungslösung an Communities/Stadtwerke; Mitgliedergewinnung oft über lokale Initiativen.",
            bmc_kundenbeziehung: "Mitgliedschaftsbeziehung innerhalb der Community mit Self-Service-P2P-Handel; Plattform als neutraler Vermittler ohne Lieferantenrolle.",
            bmc_kostenstruktur: "Plattform-/Abrechnungs-IT als Hauptkosten; Transaktionsverarbeitung pro P2P-Handel als variable Kosten.",
            fallbeispiel: "Konkret könnte eine lokale Energie-Community so funktionieren: Innerhalb eines Quartiers, das an dasselbe Umspannwerk angeschlossen ist, erzeugt Mitglied A mittags mehr Solarstrom als es selbst braucht, während Mitglied B zur gleichen Zeit Strom benötigt. Eine Plattform wie Lumenaza oder Electron vermittelt diesen Überschuss direkt zwischen den beiden Mitgliedern, zu einem Preis irgendwo zwischen der niedrigen Einspeisevergütung (die A sonst bekommen hätte) und dem höheren Grundversorgungstarif (den B sonst gezahlt hätte) — beide Seiten stehen sich besser, weil der Strom das übergeordnete Netz gar nicht verlässt und deshalb auch keine vollen Netzentgelte anfällt, die sonst 8–15 ct/kWh ausmachen würden. Die Plattform verdient an einer kleinen Transaktionsgebühr pro gehandelter Kilowattstunde. Der entscheidende regulatorische Haken: Damit dieser Mechanismus funktioniert, braucht jedes Mitglied ein Smart Meter, das die viertelstündliche Erzeugung und den Verbrauch granular genug erfasst, um die Aufteilung überhaupt korrekt abzurechnen — ohne flächendeckenden Smart-Meter-Rollout bleibt das Modell auf dem Papier.",
            status: "emerging",
            radar: { regulierung:3, skalierbarkeit:3, marktrisiko:1, digitalisierung:5, wettbewerb:2, nachhaltigkeit:5 },
            erloesTyp: "Fee-based",
            akteure: ["Lumenaza","gridX","EWS Schönau","BürgerEnergie Berlin","Electron"]
          }
        ]
      }
    ]
  },

  // ────────────────────────────────────────────────────────
  // L1: ENERGIEMÄRKTE & MARKET DESIGN
  // ────────────────────────────────────────────────────────
  {
    id: "L1-MARKT", title: "Energiemärkte & Market Design",
    icon: "🏛️", color: "#0891B2",
    description: "Institutionen und Regelwerke, die den Rahmen für alle anderen Geschäftsmodelle setzen — Regulierungsbehörden, Marktdesign-Institutionen, ENTSO-E, ACER und nationale Behörden als Akteure mit eigener Wertschöpfungslogik.",
    capabilities: [
      {
        id: "L2-MARKT-REGULIER", title: "Regulierungsbehörden & Marktaufsicht",
        description: "BNetzA, ACER, BKartA als Institutionen mit strukturierter Wertschöpfungslogik für das Energiesystem.",
        actors: ["BNetzA (Bundesnetzagentur)","ACER (EU-Energieregulierungsbehörde)","Bundeskartellamt","Länder-Regulierungsbehörden"],
        items: [
          {
            id: "L3-MARKT-BNETZA-01", title: "Bundesnetzagentur (BNetzA) — Regulierungsmodell",
            definition: "Die BNetzA ist Deutschlands zentrale Netzregulierungsbehörde (Bonn, ~4.000 Mitarbeiter). Kernaufgaben: (1) Anreizregulierung — Erlösobergrenzen für ~1.700 Strom- und Gasnetzbetreiber nach ARegV. (2) Marktüberwachung — REMIT-Umsetzung, Missbrauchskontrolle. (3) Festlegungsverfahren — verbindliche Regeln für Marktkommunikation (MaBiS, GPKE), Netzanschluss, Messwesen. (4) Ausschreibungen — EEG-Ausschreibungen für Solar, Wind, Biomasse. (5) Frequenzmanagement und Telekommunikationsregulierung. Finanzierung: Gebühren der regulierten Unternehmen + Bundeshaushalt. Die BNetzA hat keine eigene Erlöslogik — ihr 'Geschäftsmodell' ist die Herstellung funktionierender Wettbewerbs- und Regulierungsrahmen, die alle anderen GMs erst ermöglichen.",
            wertschoepfung: "Die BNetzA schafft Wert durch Systemstabilität: Fehler in der Regulierung (zu hohe EOG, falsche Effizienzparameter, schlechtes Marktdesign) kosten Verbraucher Milliarden. Gut gestaltete ARegV-Parameter incentivieren Effizienz und Investitionen gleichzeitig. REMIT-Marktüberwachung schützt Marktintegrität. Festlegungsverfahren (MaBiS, §14a, dynamische Tarife) gestalten aktiv neue Geschäftsmodelle.",
            herausforderungen: "Ressourcenknappheit: BNetzA ist für regulierte Unternehmen mit >500 Mrd. € Vermögensbasis zuständig — Regulierungskapazität wächst langsamer als Regulierungsaufgaben. Geschwindigkeit: Festlegungsverfahren dauern 2–5 Jahre — zu langsam für die Energiewende. Expertise-Asymmetrie: regulierte Unternehmen haben mehr Sektorspezialisten als die Behörde. Politische Einflussnahme auf technische Entscheidungen.",
            ausblick: "BNetzA-Aufgaben wachsen massiv: H2-Regulierung (neues Regulierungsregime), §14a-Weiterentwicklung, V2G-Marktregeln, EU EMD-Umsetzung, CSRD-Datenschnittstellen. Digitale Regulierung als neues Feld: KI-gestützte Marktüberwachung, Echtzeit-Netzmonitoring. Europäische Konvergenz: BNetzA arbeitet eng mit ACER an harmonisierten Standards.",
            erloesmodell: "Gebührenfinanziert (regulierte Unternehmen tragen BNetzA-Kosten) + Bundeshaushalt",
            regulierung: "EnWG §4 (BNetzA-Befugnisse), ARegV, REMIT, EU-Elektrizitätsbinnenmarkt-VO",
            kundensegment: "Regulierte Unternehmen, Marktakteure, Verbraucher (indirekt)",
            differenzierung: "Regulierungsqualität, Verfahrensgeschwindigkeit, Expertisentiefe, EU-Koordination",
            status: "aktiv",
            istUnternehmen: false, // Institution, kein Unternehmen — BMC-Canvas (Pilot v1.8) konzeptionell nicht anwendbar (seit v1.9 ausgeblendet)
            radar: { regulierung:5, skalierbarkeit:1, marktrisiko:1, digitalisierung:3, wettbewerb:1, nachhaltigkeit:3 },
            erloesTyp: "Reguliert",
            akteure: ["BNetzA","ACER","Bundeskartellamt"]
          },
          {
            id: "L3-MARKT-BNETZA-02", title: "ENTSO-E & regelleistung.net — Marktinfrastruktur",
            definition: "ENTSO-E (European Network of Transmission System Operators for Electricity) koordiniert die 39 europäischen ÜNBs und entwickelt verbindliche Network Codes (SO GL, NC ER, NC DCC). regelleistung.net ist die gemeinsame Ausschreibungsplattform der vier deutschen ÜNBs für Regelenergie (FCR, aFRR, mFRR). Finanzierung: Mitgliedsbeiträge der ÜNBs. Wertschöpfung: Harmonisierung des europäischen Strommarkts durch einheitliche technische Standards. ENTSO-E-Zehnjahresnetzentwicklungsplan (TYNDP) ist Basis für alle nationalen Netzausbauplanungen. Regelleistung.net: Zentralisierung der Ausschreibungen senkt Transaktionskosten und erhöht Liquidität.",
            wertschoepfung: "ENTSO-E schafft Systemwert durch Standardisierung: Ohne einheitliche Network Codes (SO GL, NC ER) wäre europäischer Stromhandel und -austausch nicht möglich. Jedes %GW grenzüberschreitender Kapazität reduziert Extrempreisereignisse und spart Verbrauchern Milliarden. regelleistung.net: Gebündelter Markt hat höhere Liquidität und damit niedrigere Leistungspreise als vier getrennte nationale Märkte.",
            herausforderungen: "ENTSO-E-Entscheidungsprozesse: 39 ÜNBs mit unterschiedlichen nationalen Interessen = langsame Konsensfindung. Network Codes dauern 5–10 Jahre von Entwurf bis Inkrafttreten. Wachsende Koordinationsaufgaben durch EE-Integration (Offshore, H2) bei konstanter Ressourcenbasis. Politische Spannungen zwischen Ländern (Nordsee-Wind vs. Süd-Last).",
            ausblick: "ENTSO-E-Rolle wächst: Offshore-Netzplanung (North Sea Offshore Grid), H2-Netzplanung (ENTSOG/ENTSO-E-Zusammenarbeit), Flexibilitätsmärkte (PICASSO, MARI vollständig ausgerollt). regelleistung.net: Erweiterung auf europäischen FCR-Markt (bereits gestartet). 15-Minuten-Regelenergieprodukte als nächste Entwicklungsstufe.",
            erloesmodell: "Mitgliedsbeiträge der ÜNBs (indirekt via regulierte Netzentgelte sozialisiert)",
            regulierung: "EU-Elektrizitätsbinnenmarkt-VO, SO GL, NC ER, NC DCC, REMIT",
            kundensegment: "ÜNBs, Marktakteure, nationale Regulierungsbehörden",
            differenzierung: "Koordinationsqualität, Standardisierungsgeschwindigkeit, Dateninfrastruktur",
            status: "aktiv",
            istUnternehmen: false, // Institution, kein Unternehmen — BMC-Canvas (Pilot v1.8) konzeptionell nicht anwendbar (seit v1.9 ausgeblendet)
            radar: { regulierung:5, skalierbarkeit:2, marktrisiko:1, digitalisierung:3, wettbewerb:1, nachhaltigkeit:3 },
            erloesTyp: "Fee-based",
            akteure: ["ENTSO-E","regelleistung.net","ENTSOG","ACER"]
          }
        ]
      },
      {
        id: "L2-MARKT-DESIGN", title: "Marktdesign & neue Marktmechanismen",
        description: "Entstehende Marktstrukturen für Flexibilität, Kapazität und Wasserstoff.",
        actors: ["SMARD (Fraunhofer ISI)","Agora Energiewende","dena","BNetzA Abteilung 6","Next Kraftwerke"],
        items: [
          {
            id: "L3-MARKT-DESIGN-01", title: "Kapazitätsmechanismus (geplant Deutschland)",
            angreifbarkeit: "Verteilungskampf statt Wettbewerb: Batterien, Demand Response und ausländische Kapazitäten drängen in die Auktionen und drücken die Clearing-Preise, mit denen H2-ready-Gaskraftwerke kalkulieren — je technologieoffener das Design, desto stärker kannibalisieren günstigere Flex-Optionen die Peaker-Vergütung. Politisches Risiko bleibt: Kapazitätsumlagen sind der natürliche Angriffspunkt der Industrie-Lobby.",
            definition: "Deutschland hat als eines der letzten großen europäischen Länder noch keinen formalen Kapazitätsmechanismus. Das bestehende Energy-Only-Market-Design (EOM) setzt auf Knappheitspreise zur Refinanzierung von Spitzenlastkraftwerken. Problem: Bei steigendem EE-Anteil reichen Preisspitzen nicht mehr zur Refinanzierung von Backup-Kapazität (fehlende Money-Fehlende-Kapazitätsvergütung). EU-Beihilferecht (Art. 107 AEUV) erlaubt Kapazitätsmechanismen, wenn sie diskriminierungsfrei und technologieneutral sind. Mit der Kraftwerksstrategie und dem Strom-Versorgungssicherheits- und Kapazitätengesetz (StromVKG, Gesetzgebungsverfahren 2026) ist der Einstieg beschlossen: Nach der Grundsatzeinigung mit der EU-Kommission (Jan. 2026) werden noch 2026 rund 12 GW steuerbare, H2-ready Kapazität technologieoffen ausgeschrieben; weitere Auktionen folgen 2027 und 2029 (Gesamtbedarf ~41 GW bis 2031). Ein umfassender, technologieoffener Kapazitätsmarkt soll ab 2032 die Versorgungssicherheit gewährleisten.[[Q:stromvkg]]",
            wertschoepfung: "Kapazitätsmechanismus schafft Wert durch Versorgungssicherheit: Ohne gesicherte Kapazitätsvergütung werden keine neuen flexiblen H2-ready Gaskraftwerke gebaut. Der volkswirtschaftliche Wert von Blackout-Vermeidung ist immens (>10 Mrd. €/h gesamtwirtschaftlicher Schaden). Für Marktteilnehmer: Kapazitätsmärkte schaffen berechenbare Erlösströme für Kraftwerksinvestoren.",
            herausforderungen: "Politisch umstritten: Energieintensive Industrie befürchtet höhere Strompreise durch Kapazitätsumlage. Design-Fragen ungeklärt: Welche Kapazitäten sind förderfähig? Nur H2-ready? Auch Batterien? Demand Response? Ausländische Kapazitäten? EU-Beihilfeprüfung zeitaufwendig. Risiko: falsch designter Kapazitätsmechanismus kann ineffiziente Kraftwerke subventionieren.",
            ausblick: "Kapazitätsmechanismus in Deutschland gilt politisch als unausweichlich — Frage ist wann und wie. EU Clean Energy Package ermutigt: Art. 22 ElektrizitätsbinnenmarktVO ermöglicht nationale Kapazitätsmechanismen unter EU-Überwachung. Zeitplan konkretisiert: EU-Grundsatzeinigung Jan. 2026, erste 12-GW-Ausschreibungen 2026, Konzept für den umfassenden Kapazitätsmarkt bis 2027, Vollbetrieb ab 2032; alle Neuanlagen müssen H2-ready sein und spätestens 2045 emissionsfrei laufen. Wert für H2-ready Peaker: 50.000–80.000 €/MW/Jahr Kapazitätsvergütung erwartet.",
            erloesmodell: "Leistungspreis (€/MW/Jahr) für Kapazitätsvorhaltung (geplant)",
            regulierung: "EU ElektrizitätsbinnenmarktVO Art. 22, EnWG §13e (Strategische Reserve), EU Beihilferecht",
            kundensegment: "Kraftwerksbetreiber, H2-ready Peaker-Investoren, Batteriespeicher-Betreiber",
            differenzierung: "Förderfähigkeit nach Technologie, Laufzeit der Kapazitätsverträge, Preisdesign",
            bmc_kanaele: "Kein Vertrieb — Teilnahme über Ausschreibungs-/Vergabeverfahren des Marktbetreibers (ÜNB/BNetzA) für präqualifizierte Kapazitäten.",
            bmc_kundenbeziehung: "Vertragliche Kapazitätsvorhaltungsbeziehung zwischen Kraftwerksbetreiber und Marktbetreiber über die Vertragslaufzeit; keine Endkundenbeziehung.",
            bmc_kostenstruktur: "Capex für Kraftwerk-/Speicher-Bereitstellung als Hauptblock; laufende Vorhaltungskosten unabhängig vom tatsächlichen Abruf.",
            fallbeispiel: "Konkret würde ein geplanter Kapazitätsmechanismus so funktionieren: Ein H2-ready-Gaskraftwerk, das nur an wenigen hundert Stunden im Jahr läuft (weil es fast nur als Backup für windschwache, sonnenarme Tage gebraucht wird), kann sich aus den seltenen hohen Spotmarktpreisen allein heute kaum refinanzieren — Investoren bauen ein solches Kraftwerk deshalb nicht, obwohl das Stromsystem es für die Versorgungssicherheit braucht. Ein Kapazitätsmarkt löst dieses Problem, indem der Betreiber zusätzlich zum (seltenen) Stromverkauf einen Leistungspreis erhält, nur dafür, dass die Kapazität zuverlässig bereitsteht — laut ersten Schätzungen 50.000–80.000 €/MW im Jahr für H2-ready-Peaker. Das Kraftwerk verdient also am Bereitstehen, nicht primär am Liefern — ein Prinzip, das in Deutschland für Regelenergie längst etabliert ist (vgl. FCR/aFRR), für die reine Stromerzeugung als Backup-Kapazität aber bislang fehlt und politisch erst beihilferechtlich genehmigt werden muss.",
            status: "emerging",
            radar: { regulierung:5, skalierbarkeit:2, marktrisiko:2, digitalisierung:2, wettbewerb:2, nachhaltigkeit:3 },
            erloesTyp: "Reguliert",
            akteure: ["RWE","Uniper","BNetzA","Bundesnetzagentur","BMWK"]
          },
          {
            id: "L3-MARKT-DESIGN-02", title: "Lokale Flexibilitätsmärkte (DSO-Flex)",
            angreifbarkeit: "Konkurrenz um dieselbe Flexibilität: §14a-Steuerung (reguliert, ohne Markt) und Redispatch-Mechanismen können lokale Flexmärkte überflüssig machen, bevor sie Liquidität aufbauen — der Regulierer selbst ist der größte Wettbewerber. Plattformanbieter kämpfen zudem um einen Standard bei 900 DSOs: Ohne kritische Masse bleibt jede Plattform ein Pilotprojekt.",
            definition: "Lokale Flexibilitätsmärkte (LFM) ermöglichen Verteilnetzbetreibern, Netzengpässe durch Marktmechanismen statt durch teure Netzausbau-Investitionen zu lösen. Konzept: DSO schreibt lokal verfügbare Flexibilität aus (z.B. 'ich brauche 5 MW Lastreduktion im Netzgebiet Südstadt zwischen 17–19 Uhr'), Aggregatoren und Prosumer bieten Flexibilität an, DSO kauft günstigstes Angebot. Pilotprojekte laufen in verschiedenen EU-Ländern (Piclo Flex in UK, Nodes in Skandinavien, NODES/GOPACS in Deutschland). In Deutschland regulatorisch noch nicht vollständig geklärt — §14a EnWG ist erster Schritt, aber kein echter Marktmechanismus.",
            wertschoepfung: "Volkswirtschaftlicher Vorteil: Flexibilität kostet oft 20–50 €/MWh, Netzausbau dagegen 100.000–500.000 €/km. 'Flex first' vor Netzausbau ist regulierungspolitisches Ziel der EU (Clean Energy Package). Für Aggregatoren: neuer Erlöskanal für VPP-Ressourcen neben Regelenergiemärkten. Für DSOs: Capex-Vermeidung + Innovation des eigenen Geschäftsmodells.",
            herausforderungen: "Marktdesign komplex: lokale Preissignale müssen mit nationalen Regelenergiemärkten koordiniert werden. Doppelnutzung von Flexibilität (Aggregator verkauft gleiche Ressource an DSO und ÜNB) muss verhindert werden. Standardisierung: 900 DSOs mit unterschiedlichen Systemen und Prozessen. Regulatorische Unsicherheit: Wer zahlt für Flex, wie werden Kosten sozialisiert?",
            ausblick: "EU Clean Energy Package verpflichtet DSOs mittelfristig, Flex-Beschaffung vor Netzverstärkung zu prüfen. BNetzA-Pilotprogramme 2024–2026 als Grundlage für regulatorischen Rahmen. Vollständiger LFM-Rollout in Deutschland erwartet ab 2028–2030 mit Smart-Meter-Basis. Verbindung mit §14a-Steuerung als Grundlage.",
            erloesmodell: "Marktpreis für lokale Flexibilität (€/MWh oder €/MW, beschafft vom DSO)",
            regulierung: "EU Clean Energy Package Art. 32 (DSO Flex), EnWG §14a, §14d, BNetzA-Pilotrahmen",
            kundensegment: "DSOs (Käufer), Aggregatoren und Prosumer (Anbieter)",
            differenzierung: "Plattform-Standardisierung, Koordination mit ÜNB-Märkten, Doppelnutzungsmanagement",
            bmc_kanaele: "Ausschreibungsplattform des DSO als Marktzugang für Aggregatoren und Prosumer; kein klassischer Vertrieb.",
            bmc_kundenbeziehung: "Transaktionale Angebotsbeziehung zwischen DSO und Flexibilitätsanbietern je Ausschreibung; keine langfristige Bindung.",
            bmc_kostenstruktur: "Plattform-/Koordinations-IT beim DSO als Hauptkosten; vermiedener Netzausbau als ökonomischer Gegenwert statt klassischer Kostenblock.",
            fallbeispiel: "Konkret könnte ein lokaler Flexibilitätsmarkt so funktionieren: Ein VNB stellt fest, dass das Netz in einem Vorort zwischen 17 und 19 Uhr regelmäßig an seine Kapazitätsgrenze kommt, weil dort viele E-Autos gleichzeitig laden. Statt für mehrere hunderttausend Euro einen neuen Trafo zu bauen, schreibt der VNB über eine Plattform wie NODES aus: 'Wer kann in diesem Zeitfenster 5 MW Last reduzieren oder Erzeugung erhöhen?' Aggregatoren wie Next Kraftwerke bündeln dafür flexible Lasten und Speicher aus ihrem Portfolio und bieten ihre Flexibilität für 20–50 €/MWh an — deutlich günstiger als der vermiedene Netzausbau. Der VNB kauft das günstigste Angebot und spart die Investition, der Aggregator erschließt einen neuen Erlöskanal neben den etablierten Regelenergiemärkten. Die noch ungelöste Schwierigkeit: Dieselbe Batterie darf nicht gleichzeitig dem ÜNB für Regelenergie und dem VNB für lokale Flexibilität zugesagt werden — eine Doppelvermarktung, die heute technisch noch nicht zuverlässig ausgeschlossen werden kann.",
            status: "emerging",
            radar: { regulierung:4, skalierbarkeit:4, marktrisiko:2, digitalisierung:5, wettbewerb:2, nachhaltigkeit:4 },
            erloesTyp: "Merchant",
            akteure: ["Piclo","NODES","gridX","BNetzA","Next Kraftwerke (Shell)"]
          },
          {
            id: "L3-MARKT-DESIGN-03", title: "Wasserstoff-Marktdesign (H2-Hub & Spotmarkt)",
            angreifbarkeit: "Der Spotmarkt kommt erst, wenn Liquidität da ist — bis dahin gehört die Wertschöpfung den bilateralen Strukturen: Langfristverträge, Importallianzen und H2Global-Auktionen binden die Mengen, bevor eine Börse sie handeln kann. Etablierte Börsen (EEX) haben den natürlichen Vorteil; für neue Plattformen bleibt nur die Zertifikats- und Datennische.",
            definition: "Ein liquider H2-Spotmarkt existiert in Deutschland noch nicht — H2 wird heute bilateral gehandelt oder über langfristige Lieferverträge abgewickelt. EEX und ICE arbeiten an H2-Futures-Produkten. EPEX SPOT prüft H2-Spot-Produkte. Zertifizierungssystem: EU-Delegierte Verordnungen zu RED III definieren, wann H2 als 'grün' gilt (Erneuerbarkeits-Kriterien: zeitliche, geografische und systemische Korrelation von Elektrolyse und EE-Erzeugung). Europäische H2-Handelsknoten entstehen: Rotterdam (HyTransPort), Hamburg (H2Global), Marseille (HyDeal Ambition).",
            wertschoepfung: "Liquider H2-Markt schafft Preistransparenz und reduziert Transaktionskosten bilateral ausgehandelter Verträge. Zertifizierungssystem (CertifHy, EU-Delegierte VO) schafft Vertrauen und ermöglicht Preisdifferenzierung zwischen grünem, blauem und grauem H2. Handelshubs bündeln Angebot und Nachfrage — klassische Börsen-Netzwerkeffekte.",
            herausforderungen: "H2-Marktvolumen noch zu gering für echte Börsenprodukte (Mindestliquidität fehlt). Zertifizierungssystem komplex und kostenintensiv. Infrastruktur (H2-Kernnetz) erst ab 2028+ verfügbar — physischer Handel begrenzt. Preisfindung schwierig: H2-Produktionskosten variieren stark je nach Strompreis, Elektrolyseur-Effizienz, Standort.",
            ausblick: "H2-Spotmarkt wird mit steigendem Produktionsvolumen (ab 2028–2030) entstehen. EEX wird H2-Futures lancieren. Rotterdam als europäischer H2-Handelshub (analog TTF für Gas). Preisindex HyXchange (Initiative von IEA und Börsen) als Referenzpreis für H2-Kontrakte. H2Global-Ausschreibungen als Marktpreisfindungsmechanismus für Import-H2.",
            erloesmodell: "Transaktionsgebühren (Börsenmodell) + Zertifizierungsgebühren (CertifHy)",
            regulierung: "EU RED III Art. 27 (H2-Kriterien), EU-Delegierte Verordnungen H2, H2Global-Ausschreibungsrahmen",
            kundensegment: "H2-Erzeuger, Abnehmer (Stahl, Chemie), Trader, Infrastrukturinvestoren",
            differenzierung: "Liquidität, Zertifizierungsintegration, physische Anbindung (H2-Kernnetz), Pricing-Transparenz",
            bmc_kanaele: "Künftig Börsenhandel (EEX/EPEX); heute überwiegend bilaterale Vertragsverhandlung zwischen Erzeugern und Abnehmern.",
            bmc_kundenbeziehung: "Bilaterale, langfristige Lieferverträge dominieren noch vor einem liquiden Spotmarkt; Zertifizierungsbeziehung (CertifHy) als Vertrauensanker.",
            bmc_kostenstruktur: "Börsenplattform-/Clearing-Infrastruktur (im Aufbau) als künftiger Kostenblock; Zertifizierungskosten als laufender Aufwand.",
            fallbeispiel: "Konkret zeigt sich das Henne-Ei-Problem eines noch fehlenden H2-Spotmarkts an einem Stahlhersteller, der heute grünen Wasserstoff braucht: Statt an einer Börse zu kaufen wie bei Strom oder Gas, muss er einen langfristigen bilateralen Liefervertrag direkt mit einem Elektrolyse-Betreiber aushandeln — Preis, Menge und Lieferzeitraum werden Stunden- oder tageweise individuell verhandelt, was für jede einzelne Transaktion hohen Aufwand bedeutet. H2Global versucht, genau diese Lücke zu schließen: Der Bund schreibt H2-Importmengen aus, kauft sie zu einem garantierten Preis von ausländischen Erzeugern und verkauft sie anschließend in einer eigenen Auktion an deutsche Industriekunden weiter — eine Art künstlicher Marktplatz, bis ein echter liquider Spotmarkt mit ausreichend Teilnehmern entsteht. Erst wenn genügend Erzeuger und Abnehmer regelmäßig handeln, lohnt es sich für EEX, ein eigenes H2-Future-Produkt zu lancieren, wie es heute schon für Strom und CO₂-Zertifikate existiert.",
            status: "emerging",
            radar: { regulierung:4, skalierbarkeit:4, marktrisiko:3, digitalisierung:4, wettbewerb:2, nachhaltigkeit:5 },
            erloesTyp: "Fee-based",
            akteure: ["EEX","EPEX SPOT","H2Global","CertifHy","Rotterdam H2Hub"]
          }
        ]
      }
    ]
  }

);  // Ende GM_DATA.push() v1.5

// Akteurs-Index für neue Domänen aktualisieren (v2.3: alle 69 unternehmensförmigen Steckbriefe mit fallbeispiel)
(function() {
  var newDomainIds = ["L1-PROSUMER","L1-MARKT"];  // (v2.6: unverändert)
  GM_DATA.filter(function(d){ return newDomainIds.indexOf(d.id) >= 0; }).forEach(function(domain) {
    domain.capabilities.forEach(function(cap) {
      cap.items.forEach(function(item) {
        if (item.akteure) {
          item.akteure.forEach(function(a) {
            if (!GM_ACTORS_INDEX[a]) GM_ACTORS_INDEX[a] = [];
            var alreadyIn = GM_ACTORS_INDEX[a].some(function(e){ return e.itemId === item.id; });
            if (!alreadyIn) {
              GM_ACTORS_INDEX[a].push({
                domainId: domain.id, domainTitle: domain.title,
                domainIcon: domain.icon, domainColor: domain.color,
                capId: cap.id, capTitle: cap.title,
                itemId: item.id, itemTitle: item.title
              });
            }
          });
        }
      });
    });
  });
})();
