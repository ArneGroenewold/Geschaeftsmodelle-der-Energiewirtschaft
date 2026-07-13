// ============================================================
// ENERGIEWIRTSCHAFT GESCHÄFTSMODELL-WIKI
// data.js — v1.3 Juni 2026  |  Erweiterte inhaltliche Tiefe
// Neue Felder: wertschoepfung, herausforderungen, ausblick
// ============================================================

const GM_WIKI_VERSION = "v1.9 · Juni 2026";

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
            definition: "Kraftwerksbetreiber verkaufen Strom ungeplant an der Strombörse (EPEX SPOT Day-Ahead und Intraday). Erlös = Spread zwischen variablen Grenzkosten (Brennstoff + CO₂-Zertifikat + variable O&M) und Marktpreis. Bei CCGT-Gaskraftwerken: Clean Spark Spread typisch 5–20 €/MWh je nach Gaspreis und CO₂-Preis. Der Merit-Order-Wettbewerb bedeutet: Das teuerste noch benötigte Kraftwerk setzt den Preis; günstigere Erzeuger kassieren die Inframarginalrente.",
            wertschoepfung: "Marge entsteht aus dem Spread zwischen variablen Grenzkosten und dem Merit-Order-Räumungspreis. Flexibilisierung (schnelles Ramping, Mindestlastabsenkung) ist entscheidend, um Spitzenstunden zu nutzen. Bei steigendem EE-Anteil verschiebt sich der Wert zu kurzen Spitzenlastphasen mit hohen Preisen – Gaskraftwerke werden zu 'Preis-Spitzenmachern'.",
            herausforderungen: "Steigende EE-Kapazitäten drücken Residuallast und senken Volllaststunden thermischer Anlagen drastisch. CO₂-Kosten (EU ETS Phase 4: >80 €/t) erhöhen Grenzkosten. Fehlendes Kapazitätsmarktdesign in Deutschland verhindert Refinanzierung von Neubauten. Politisches Risiko: Kohleausstieg 2038, Gasausstiegsdiskussion ab 2030.",
            ausblick: "Gaskraftwerke bleiben unverzichtbar als Residuallastdecker und Ramp-up-Kapazität. Neue H2-ready CCGT-Anlagen werden nur bei gesicherter Kapazitätsvergütung gebaut. Kapazitätsmechanismus in Deutschland gilt als unausweichlich (EU-Beihilferecht erlaubt seit 2024). Langfristig: H2-Peaker ersetzen Gaskraftwerke.",
            erloesmodell: "Merchant / Spot (Day-Ahead + Intraday)",
            regulierung: "EnWG §12, EU ETS (CO₂, TEHG), REMIT, BImSchG",
            kundensegment: "Großhandel / Börse (EPEX SPOT)",
            differenzierung: "Grenzkosten, Ramping-Fähigkeit, Verfügbarkeit, H2-Readiness",
            status: "aktiv",
            radar: { regulierung:1, skalierbarkeit:2, marktrisiko:5, digitalisierung:2, wettbewerb:4, nachhaltigkeit:1 },
            erloesTyp: "Merchant", akteure: ["RWE Generation","Uniper","LEAG"]
          },
          {
            id: "L3-ERZ-KONV-02", title: "Regelenergie & Systemdienstleistungen",
            definition: "Präqualifizierte Kraftwerke nehmen an Regelenergiemärkten teil: FCR (±MW, Reaktion <30 s), aFRR (<5 min), mFRR (<15 min). Wöchentliche Ausschreibung (FCR) bzw. tagesaktuelle Auktionen (aFRR/mFRR) über regelleistung.net. Erlösstruktur: Leistungspreis (€/MW/h, für Vorhaltung) + Arbeitspreis (€/MWh, bei Abruf). FCR-Leistungspreis ist die attraktivste Komponente – war bis 2021 >25 €/MW/h, sank durch BESS-Markteintritt.",
            wertschoepfung: "Leistungspreis ist Haupttreiber: Kapazitätsvorhaltung ohne tatsächlichen Abruf = garantierter Erlös. Stacking mit Spotmarkt möglich. Präqualifikationsbarriere schützt etablierte Anbieter. Portfolioeffekte: Größere Pools erlauben feinere Bandbreiten-Aufteilung.",
            herausforderungen: "FCR-Preisverfall durch massive BESS-Eintritte (von 30 €/MW/h auf <10 €/MW/h in Schwächephasen 2024). Europäische Integration der Regelenergiemärkte (PICASSO, MARI, TERRE) erhöht Angebot und drückt Preise langfristig. Thermalkraftwerke verlieren FCR-Markt an Batterien.",
            ausblick: "Großkraftwerke fokussieren auf aFRR/mFRR (größere Bänder, weniger BESS-Konkurrenz). Neue Systemdienstleistungen wachsen: Trägheitsemulation (Inertia), Kurzschlussleistung, Blindleistung – für diese braucht man Synchronmaschinen, also Thermalkraftwerke.",
            erloesmodell: "Leistungspreis (€/MW/h) + Arbeitspreis (€/MWh bei Abruf)",
            regulierung: "SO GL Art. 154ff., SOGL Annex, regelleistung.net, PICASSO/MARI",
            kundensegment: "ÜNB (TSO)",
            differenzierung: "Reaktionsgeschwindigkeit, Präqualifikationsgüte, Portfoliogröße",
            status: "aktiv",
            radar: { regulierung:3, skalierbarkeit:2, marktrisiko:2, digitalisierung:3, wettbewerb:3, nachhaltigkeit:1 },
            erloesTyp: "Fee-based", akteure: ["RWE Generation","Uniper","Statkraft"]
          },
          {
            id: "L3-ERZ-KONV-03", title: "Power Purchase Agreement – konventionell",
            definition: "Langfristiger bilateraler Liefervertrag (5–15 Jahre) fixiert Preis und Menge. Strukturierungsformen: Baseload-PPA (24/7), Peak-PPA (Werktags 8–20 Uhr), indexierter PPA (±Formel auf Gaspreis/CO₂). Konventionelle PPAs geben dem Erzeuger Cashflow-Planungssicherheit und ermöglichen günstige Restnutzungszeit-Finanzierung. Abnehmer sichern sich gegen Preisspitzen ab.",
            wertschoepfung: "Erzeuger monetarisiert Planungssicherheit – bankfähige Cashflows senken Finanzierungskosten. Für konventionelle Anlagen: Restlebenszeit-Optimierung ohne EEG. Abnehmer zahlt Risikopremium für Preissicherheit. Strukturierungsmarge beim Lieferanten.",
            herausforderungen: "Sinkende Spotpreise durch EE-Zubau können PPAs rückwirkend teuer machen. CO₂-Kosten senken Wettbewerbsfähigkeit gegenüber EE-PPAs. Kreditrisiko des Abnehmers über 10+ Jahre schwer einzuschätzen.",
            ausblick: "Konventionelle PPAs werden durch EE-PPAs verdrängt. Nische: Industriekunden mit 24/7-Baseload-Bedarf ohne Profilkomplexität. H2-ready Gaskraftwerke als Grundlage für 'grüne Flexibilitäts-PPAs'.",
            erloesmodell: "Festpreis / Floor-Cap-Struktur über Vertragslaufzeit",
            regulierung: "BGB, EnWG §42a, REMIT (ab 1 MWh)",
            kundensegment: "B2B Industrie, Energielieferanten",
            differenzierung: "Preissicherheit, Lieferzuverlässigkeit, Laufzeit, Kreditmanagement",
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
            definition: "Kerninstrument der deutschen Energiewende: Anlagen >100 kW müssen Strom direkt vermarkten und erhalten gleitende Marktprämie = anzulegender Wert (AW, aus BNetzA-Ausschreibung) minus monatlicher Referenzmarktwert (RMW). AW ist für 20 Jahre gesichert. Direktvermarkter (Next Kraftwerke, Statkraft, Axpo) bündeln 5.000–14.000 Anlagen und optimieren via hochauflösende Wetter-ML-Modelle und Intraday-Handel. Verwaltungskosten: 0,1–0,5 ct/kWh.",
            wertschoepfung: "Kombination aus staatlich gesichertem AW (Planungssicherheit) + Upside bei hohen Spotpreisen. Für Direktvermarkter: Managementfee ~0,2 ct/kWh + Outperformance-Share. Outperformance entsteht durch bessere stündliche Prognosen als der pauschale Monats-RMW. Skaleneffekte: 10 GW-Portfolio reduziert Prognosefehler durch Diversifikation (Wind Nord/Solar Süd) auf ~2–3%.",
            herausforderungen: "AW aus Ausschreibungen sinken durch Wettbewerb – neue Anlagen erzielen niedrigere Förderung. §51 EEG: Kein AW bei negativen Preisen >6h – bei steigendem EE-Anteil immer häufiger. Redispatch-Ausfallarbeit belastet Erzeuger. Direktvermarktungsmarkt wird oligopolistisch (Next/RWE dominiert mit >35% Marktanteil).",
            ausblick: "Bis 2028 laufen erste EEG-Altanlagen (IBN 2000–2005) aus. Repowering-Welle oder Merchant-Betrieb. Solar-LCOE <25 €/MWh (2026) macht merchant economics attraktiv. Direktvermarktungsmarkt konsolidiert weiter auf 3–5 Anbieter.",
            erloesmodell: "EEG-Marktprämie (staatlich) + Spotmarkterlös + Intraday-Optimierung",
            regulierung: "EEG 2023 §20–§53, BNetzA-Ausschreibungen, MaBiS",
            kundensegment: "Direktvermarkter, ÜNB (EinsMan/Redispatch)",
            differenzierung: "Prognosegüte (ML-Wettermodell), Portfoliogröße, Intraday-Handelsautomatisierung",
            status: "aktiv",
            radar: { regulierung:4, skalierbarkeit:3, marktrisiko:2, digitalisierung:3, wettbewerb:2, nachhaltigkeit:5 },
            erloesTyp: "Reguliert", akteure: ["RWE Renewables","EnBW","Ørsted","Encavis"]
          },
          {
            id: "L3-ERZ-EE-02", title: "Corporate PPA (Erneuerbare)",
            definition: "Direktvertrag zwischen EE-Anlagenbetreiber und Industriekunden ohne staatliche Förderung. Zwei Formen: (1) Physical PPA – physische Lieferung, Anlage ist Lieferant. (2) Financial PPA (CfD) – Anlage verkauft an Markt, Differenz zwischen Strike Price und EPEX wird bilateral ausgeglichen. Financial PPAs dominieren in Deutschland. Laufzeit: 10–15 Jahre, Strike Price 2024: 40–70 €/MWh Onshore Wind. Getrieben durch RE100-Commitments (BASF, BMW, Deutsche Bahn, Microsoft, Google).",
            wertschoepfung: "Anlagenbetreiber: Bankfähige Cashflows für Projektfinanzierung ohne EEG, niedrigere Kapitalkosten als merchant (~1–2% Zinsvorteil = signifikant bei 20-j. Laufzeit). Industriekunde: Preishedge gegen steigende Energiekosten + RE100-Erfüllung + CSRD-Scope-2-Optimierung. Additionality (neue Anlage, kein Bestandsprojekt) als Differenzierungsmerkmal.",
            herausforderungen: "Shape-Risiko: EE-Profil passt selten zu Industrielast (Produktion nachts, Solar tagsüber). Residualbeschaffung notwendig. Bonitätsprüfung über 10+ Jahre aufwendig – Kreditversicherung verteuert Produkt. Sinkende Spot-Preise könnten Strike Price rückwirkend teuer erscheinen lassen.",
            ausblick: "PPA-Markt wächst stark (EU-Ziel >2 GW/Jahr neue PPA-Kapazität). EFET-Standardverträge senken Transaktionskosten. Aggregierte PPAs (mehrere kleinere Abnehmer = ein PPA) als neues Strukturierungsmodell für KMU. Sektorale PPAs (Stahl-H2-PPA, Rechenzentrum-PPA) entstehen.",
            erloesmodell: "Strike Price (CfD-Differenzausgleich) oder physischer Festpreis",
            regulierung: "BGB, EU RED III, REMIT (Meldepflicht), EnWG §42a",
            kundensegment: "B2B Industrie (DAX, Tech, RE100-Mitglieder)",
            differenzierung: "Additionality-Nachweis, Profilqualität, Laufzeit, Kreditstruktur",
            status: "aktiv",
            radar: { regulierung:1, skalierbarkeit:3, marktrisiko:2, digitalisierung:2, wettbewerb:3, nachhaltigkeit:5 },
            erloesTyp: "Merchant", akteure: ["Ørsted","RWE Renewables","Baywa r.e.","Encavis"]
          },
          {
            id: "L3-ERZ-EE-03", title: "Offshore-Wind-Projektentwicklung",
            definition: "Kapitalintensivste EE-Projektkategorie: 2.500–4.000 €/kW installierter Leistung, Projektlaufzeiten 20–30 Jahre. In Deutschland BNetzA-Ausschreibungen mit Gebotspreisverfahren. Wertschöpfungskette: Standortgutachten → BSH-Genehmigung → Ausschreibungsgewinn → Projektfinanzierung → EPC → 20 Jahre Betrieb → O&M. Volllaststunden Nordsee: 4.000–4.500 h/a. Deutsche Offshore-Ziele: 30 GW bis 2030, 70 GW bis 2045 (derzeit ~8 GW).",
            wertschoepfung: "Gesicherte 20-j. Cashflows aus EEG-Ausschreibungsgebotspreis. Skaleneffekte durch Serienentwicklung. Netzanschluss-Genehmigungen (Netzverknüpfungspunkte) als proprietärer Engpass. O&M-Marge (20–25% der Projekterlöse) ist profitabelste Phase. Floating-Wind-Entwicklungskompetenz als Zukunftsinvestition.",
            herausforderungen: "Lieferkettenengpässe: Siemens Gamesa-Qualitätsprobleme, Turbinenpreise +30–50% seit 2021. Gestiegene Zinsen machen Nullgebots-Projekte (Ørsted 2021) unrentabel. BSH-Genehmigungsverfahren dauern 3–5 Jahre trotz Beschleunigung. Naturschutz (Vogelzug, Riffschutz) als Genehmigungsrisiko.",
            ausblick: "Offshore-Boom unvermeidbar: 30 GW Ziel bis 2030. Floating Offshore Wind (FLOW) ab 2030+ kommerziell. 15–20 MW+ Turbinen senken LCOE auf <40 €/MWh. Nordsee als europäische Energiedrehscheibe (H2-Offshore-Produktion, direkte Gleichstromkabel nach Süddeutschland).",
            erloesmodell: "EEG-Ausschreibungsgebotspreis (€/MWh, 20 Jahre gesichert)",
            regulierung: "WindSeeG, EEG 2023, BSH (Bundesamt Seeschifffahrt), BNetzA-Ausschreibungen",
            kundensegment: "ÜNB (Offshore-Netzanschluss), Börse (Stromverkauf)",
            differenzierung: "Genehmigungskompetenz, Serieneffekte, Netzanschluss-Zugänge, O&M-Netz",
            status: "aktiv",
            radar: { regulierung:4, skalierbarkeit:2, marktrisiko:2, digitalisierung:3, wettbewerb:2, nachhaltigkeit:5 },
            erloesTyp: "Reguliert", akteure: ["Ørsted","RWE Offshore","EnBW Offshore","Vattenfall"]
          },
          {
            id: "L3-ERZ-EE-04", title: "Bürgerenergiegenossenschaft",
            definition: "Genossenschaftlich organisierter EE-Betrieb nach GenG. Mitglieder ab 100–500 € Einlage sind Kapitalgeber, Kunden und Mitbestimmungsberechtigte. EWS Schönau (1994 gegründet, ~55.000 Kunden), BürgerEnergie Berlin, Green Planet Energy als Beispiele. Besonderheit: Zweckrationalität statt Gewinnmaximierung. Überschüsse werden reinvestiert oder als moderate Dividende ausgeschüttet. Politisches Profil (Anti-Atomkraft, Energiewende-Pioniere) ist integraler Markenkern.",
            wertschoepfung: "Identifikations-Premium: Mitglieder zahlen mehr und wechseln kaum. Strukturell niedriger Churn (<5%/Jahr vs. 15–25% bei Discountern). Günstiger Kapitalzugang über Genossenschaftseinlagen. EU Energy Communities (§3 Nr. 38a EnWG) schaffen neue Geschäftsmodelloptionen: P2P-Handel, lokale Netzentgelteinsparungen.",
            herausforderungen: "Skalierungshürde durch demokratische Entscheidungsstrukturen. Professionalisierungsdruck durch digitale Neolieferanten (Tibber, Ostrom). Nachfolgeproblematik bei gründergetriebenen Genossenschaften (EWS Schönau: Bürgerinitiative von 1994 muss Generationenwechsel managen).",
            ausblick: "EU EMD Energy Communities als Wachstumstreiber: lokale Energiegemeinschaften können direkte Solarstromabrechnung innerhalb der Community organisieren. Politisches Momentum wächst. Kombination mit kommunaler Wärmeplanung (WPG) eröffnet Genossenschafts-Fernwärme als neues Feld.",
            erloesmodell: "EEG-Marktprämie + Retail Margin + Genossenschaftsdividende (reinvestiert)",
            regulierung: "EEG, GenG, EnWG §3 Nr. 15, EU EMD (Energy Communities)",
            kundensegment: "B2C Bürger / Mitglieder (werteorientiert)",
            differenzierung: "Gemeinwohl, Lokalität, demokratische Mitbestimmung, Authentizität",
            status: "aktiv",
            radar: { regulierung:2, skalierbarkeit:1, marktrisiko:2, digitalisierung:1, wettbewerb:1, nachhaltigkeit:5 },
            erloesTyp: "Fee-based", akteure: ["EWS Schönau","BürgerEnergie Berlin","Green Planet Energy"]
          }
        ]
      },
      {
        id: "L2-ERZ-SPEICHER", title: "Speicher & Flexibilität",
        description: "Batterietechnologien als eigenständige Geschäftsmodelle – Erlösstacking als Kernstrategie.",
        actors: ["Fluence","NEOEN","Sonnen (Shell)","EnBW","SENEC","E3/DC"],
        items: [
          {
            id: "L3-ERZ-SPEICHER-01", title: "Grid-Scale Battery (BESS)",
            definition: "Großbatteriespeicher (10–500 MW, 1–4h Kapazität) erzielen Erlöse durch simultanes Stacking: (1) FCR-Leistungspreis: 8–25 €/MW/h (2024), attraktivste Einzelkomponente. (2) Intraday-Arbitrage: Kauf bei niedrigen EE-Einspeisephasen, Verkauf in Abendpeaks – Spread 15–50 €/MWh. (3) aFRR/mFRR als Ergänzung. Optimierungssoftware entscheidet stündlich, welcher Markt höhere Grenzerlöse bietet. Capex 2024: 400–600 €/kWh (Li-Ion LFP), Lernrate ~15%/Verdopplung.",
            wertschoepfung: "Optimierungsalgorithmus ist der eigentliche Wettbewerbsvorteil, nicht die Hardware. Schlechte Software lässt 30–50% theoretischer Erlöse liegen. Arbitrage-Spread wächst mit EE-Anteil (mehr Phasen mit negativen Preisen, höhere Abendflanken). Degradationsmanagement (optimaler SOC, Temperaturbetrieb) verlängert Lebensdauer und verbessert IRR.",
            herausforderungen: "FCR-Preisverfall durch BESS-Überangebot ist strukturell: FCR-Preis von >30 €/MW/h (2021) auf <10 €/MW/h (Tiefs 2024). Batteriedegradation nach 3.000–5.000 Zyklen. Brandschutzanforderungen (VdS 3527) erhöhen Betriebskosten. Netzanschlussengpässe begrenzen Standortwahl.",
            ausblick: "BESS-Markt wächst explosiv (Europa: 100+ GW bis 2030). Arbitrage-Erlöse steigen mit Preisspread. Duration-Erweiterung auf 6–8h (Long Duration Storage) als nächste Stufe. Iron-Air- und Flow-Batterien für saisonale Speicherung. Co-location mit Solar/Wind reduziert Netzanschlusskosten erheblich.",
            erloesmodell: "FCR/aFRR Leistungspreis (€/MW/h) + Intraday-Arbitrage (€/MWh)",
            regulierung: "EnWG §118, SOGL Art. 154, MsbG (Metering), BNetzA Speicherregulierung",
            kundensegment: "Großhandel, ÜNBs (Regelenergiemärkte)",
            differenzierung: "Optimierungsalgorithmus, Response Time, Zyklenanzahl, Multi-Market-Stacking",
            status: "aktiv",
            radar: { regulierung:1, skalierbarkeit:3, marktrisiko:4, digitalisierung:5, wettbewerb:3, nachhaltigkeit:4 },
            erloesTyp: "Merchant", akteure: ["Fluence","NEOEN","EnBW","RWE","Habitat Energy"]
          },
          {
            id: "L3-ERZ-SPEICHER-02", title: "Heimspeicher als VPP-Baustein",
            definition: "Hersteller wie Sonnen (Shell-Tochter) und SENEC (EnBW) vermarkten Heimspeicher (5–20 kWh) als Eintritt in ein virtuelles Kraftwerk. Kunden kaufen Hardware (3.000–8.000 €) und treten einen Teil der freien Kapazität (z.B. 20% SOC) an den Aggregator ab. Aggregator bündelt Tausende Einheiten zu präqualifiziertem Regelenergie-Asset. Erlösteilung: Aggregator 60–70%, Endkunde 30–40%. Incentive: Sonnen-Flatrate-Tarif – Kunde zahlt fixen Monatsbetrag statt kWh-Preis.",
            wertschoepfung: "Hardware-Marge als Einmalerlös (20–30%). Langfristiger Wert: jede Einheit ist dauerhafter VPP-Baustein. Flatrate-Tarif bindet Kunden multi-jährig (Churn <5%). Portfolioeffekte: 10.000 Heimspeicher = ~100 MWh Flex-Kapazität für FCR-Präqualifikation. Ökosystemschranke: Hardware + Tarif + VPP = hohe Wechselhürde.",
            herausforderungen: "Skalenaufbau kostenintensiv (Installation, Netzanmeldung, SMGW-Anbindung je Einheit). §14a EnWG schafft VNB-seitige Steuerung – potenzielle Konflikte mit VPP-Aggregator. FCR-Preisverfall senkt VPP-Mehrwert für Kunden. Qualitätssicherung des VPP bei heterogener Hardware-Basis.",
            ausblick: "V2G als massive Erweiterung: EV-Batterie (~60 kWh) = 3–5× größer als Heimspeicher. Aggregatoren mit frühzeitigen OEM-Partnerschaften (VW/Elli, Hyundai) gewinnen strukturellen Vorteil. EU EMD Energy Communities ermöglichen P2P-Abrechnung zwischen Heimspeicher-Besitzern.",
            erloesmodell: "Geräteverkauf + Revenue-Share (Regelenergie) + Flatrate-Tarifbindung",
            regulierung: "EEG §9, MsbG, EnWG §14a, SOGL Präqualifikation",
            kundensegment: "B2C Prosumer (PV-Eigenheim)",
            differenzierung: "Community-Größe, Flatrate-Attraktivität, VPP-Optimierungsgüte, Hardware-Qualität",
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
            definition: "ÜNBs finanzieren sich über BNetzA-genehmigte Erlösobergrenze (EOG). Berechnung: anerkannte Kapitalkosten (kalkulatorische EK-Rendite: 6,91% vor Steuer Altanlagen, 5,07% Neuanlagen) + anerkannte Betriebskosten. Effizienzvergleich (Benchmarking) zwischen Netzbetreibern bestimmt individuellen Effizienzwert. Netzentgelt = EOG / transportierte Energiemenge. HGÜ-Investitionen (SuedLink 5 Mrd. €, SuedOstLink 3 Mrd. €, A-Nord 3 Mrd. €) erhöhen RAB und damit zulässige Erlöse.",
            wertschoepfung: "Regulierte EK-Rendite als gesicherter Return – kein Marktrisiko, aber Regulierungsrisiko. TOTEX-Regulierung (seit RP3) incentiviert Opex-Effizienz: Wer Betriebskosten senkt, behält Einsparungen 5 Jahre. Investitionsprogramme erhöhen RAB und damit Erlösbasis: Jeder € investiert in Netzinfrastruktur generiert regulierten Renditezufluss über 35-40 Jahre.",
            herausforderungen: "Netzausbau hinkt EE-Zubau 5–10 Jahre hinterher: Redispatch-Kosten >4 Mrd. €/Jahr (2023) belasten Verbraucher. Genehmigungsverfahren für neue Trassen: 10–15 Jahre (Planfeststellung). IT-Infrastruktur und Cybersecurity (KRITIS, NIS2) erfordern massive Investitionen. Personalmangel bei Netzplaningenieuren.",
            ausblick: "HGÜ-Backbone verändert Netzstruktur fundamental. OEAG (Offshore Energy Anschluss GmbH als Sondervermögen) für Offshore-Netzanbindung. Digitaler Zwilling des Übertragungsnetzes als Planungs- und Betriebsgrundlage. Europäische Vernetzung (NordLink, Cobra Cable) schafft neue Koordinationsaufgaben.",
            erloesmodell: "Regulierte Netzentgelte nach ARegV (§21 EnWG)",
            regulierung: "ARegV, StromNEV, EnWG §21ff., BNetzA Beschlusskammern",
            kundensegment: "VNB, Direktanschluss-Industrie, Kraftwerke",
            differenzierung: "Effizienzgrad im BNetzA-Benchmarking, Investitionsdisziplin, Netzqualität (SAIDI)",
            status: "aktiv",
            radar: { regulierung:5, skalierbarkeit:1, marktrisiko:1, digitalisierung:2, wettbewerb:1, nachhaltigkeit:3 },
            erloesTyp: "Reguliert", akteure: ["50Hertz","Amprion","TenneT TSO","TransnetBW"]
          },
          {
            id: "L3-UNB-NETZ-02", title: "Redispatch 2.0 & Engpassmanagement",
            definition: "Seit Oktober 2021: ÜNBs und VNBs koordinieren Einspeisemanagement und Redispatch über standardisierte Datenkommunikation. Alle Anlagen >100 kW sind meldepflichtig. ÜNB weist Erzeuger an: Einsatz-Up (Einspeisung erhöhen) oder Einsatz-Down (Einspeisung reduzieren) zur Netzentlastung. Ausfallarbeit wird erstattet (EEG-Vergütung auch bei Abregeln). Kosten 2023: ca. 4,1 Mrd. € – Rekord. Datenaustausch über GABI-Software, CLS-Kommunikation, BDEW-Leitfaden.",
            wertschoepfung: "Für ÜNBs kein Erlösmodell, sondern Kostenblock – wird über Netzentgelte socialisiert. ÜNBs mit besserer Prognose-/Optimierungssoftware minimieren Redispatch-Kosten. Systemeffizienz ist Regulierungsnachweis und politisches Signal. Datenqualität aus Redispatch ist Basis für Netzplanung (Schwachstellen identifizieren).",
            herausforderungen: "Kosten steigen exponentiell mit EE-Ausbau solange Netzausbau hinterherhinkt. Koordination mit 900+ VNBs datentechnisch extrem komplex. Anreizproblem: ÜNBs leiten Redispatch-Kosten durch – kein starker finanzieller Anreiz zur Minimierung. Haftungsfragen bei Fehlkoordination.",
            ausblick: "Automatisierung der Koordination via digitale Plattformen. Market-Based Congestion Management (EU-Diskussion) könnte Redispatch teilweise durch Marktmechanismen ersetzen. Mit SuedLink/SuedOstLink (2028) sollten Nord-Süd-Engpässe strukturell gelöst werden. §14a DSO-Steuerung entlastet ÜNBs auf unteren Netzebenen.",
            erloesmodell: "Kostenerstattung (regulierter Kostenblock, socialisiert via Netzentgelt)",
            regulierung: "EnWG §13, §14, RedispatchVO (Strom), BDEW-Leitfaden RD 2.0",
            kundensegment: "VNB, Direktanlagenbetreiber, EE-Direktvermarkter",
            differenzierung: "Prozessautomatisierung, Prognosequalität, Systemintegration",
            status: "aktiv",
            radar: { regulierung:5, skalierbarkeit:1, marktrisiko:1, digitalisierung:4, wettbewerb:1, nachhaltigkeit:3 },
            erloesTyp: "Reguliert", akteure: ["50Hertz","Amprion","TenneT TSO","TransnetBW"]
          },
          {
            id: "L3-UNB-NETZ-03", title: "Bilanzkreismanagement & Ausgleichsenergie",
            definition: "Bilanzkreissystem als finanzielle Architektur des Strommarkts: Jeder Lieferant/Händler führt Bilanzkreis beim ÜNB. Stündlicher Ausgleich von Einspeisung und Entnahme Pflicht. Abweichungen = Ausgleichsenergie (AE): Unterdeckung zahlt AE-Preis; Überdeckung erhält AE-Vergütung. MaBiS-Reform (BK6-24-174): EDIFACT-basierter Datenaustausch wird durch API-basierte Echtzeit-Kommunikation ersetzt. Schrittweise Einführung bis 2027.",
            wertschoepfung: "AE-System ist Nullsummen-Durchleitungsmodell für ÜNBs. Wert: ÜNBs mit modernen API-Systemen (MaBiS 2.0) senken Prozesskosten und erhöhen Datenqualität. Gut funktionierendes BKM ermöglicht günstigere Regelenergiebeschaffung durch präzisere Prognosebasis.",
            herausforderungen: "Datenqualität ist systemkritisch – fehlerhafte Einspeisemeldungen gefährden Netzsicherheit. Legacy-Systeme (SAP IS-U, EDIFACT) in allen ÜNBs erfordern massive IT-Transformation. Wachsende Marktteilnehmer (VPP-Aggregatoren, iMSBs) erhöhen Datenkomplexität exponentiell. Harmonisierung zwischen vier ÜNB-Systemen ist regulatorisch geboten, technisch komplex.",
            ausblick: "15-Minuten-Bilanzierung (statt stündlich) ist EU-Ziel – erfordert vollständig neue Abrechnungsinfrastruktur. Echtzeit-BKM als Basis für Dynamic-Line-Rating und N-1-Optimierung. EU-Harmonisierung der BKM-Prozesse über ENTSO-E als langfristiges Ziel.",
            erloesmodell: "Durchleitungsmodell (AE-Nullsumme); Prozesskosten via Netzentgelt",
            regulierung: "MaBiS (BK6-24-174), StromNZV §4ff., GPKE, EDI@Energy",
            kundensegment: "Bilanzkreisverantwortliche (BKV), Lieferanten, EE-Direktvermarkter",
            differenzierung: "API-Reife (MaBiS 2.0), Echtzeit-Fähigkeit, Datenqualität",
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
            definition: "ARegV-Regulierung analog ÜNBs, aber mit fundamental anderer Kostenstruktur: 85–90% der Kosten sind Kapital- und Fixkosten (netzlängenabhängig, nicht mengenabhängig). Deutschland: ~1,8 Mio. km Leitungsnetz auf Verteilnetzebene. EK-Rendite: 5,07% nominal (Neuanlagen). 4. Regulierungsperiode (ab 2024) stärkt Investitionsanreize durch verbesserte TOTEX-Regulierung und erhöhte kalkulatorische EK-Basis.",
            wertschoepfung: "Gesicherter Return auf RAB. Wertschöpfung durch: (1) Kapitalallokation – jeder investierte Euro erhöht RAB und erlaubte Erlöse. (2) Effizienz – Betrieb unterhalb Referenzwert erhöht individuelle Marge. (3) Netzqualität – SAIDI-Minuten sind regulatorisch incentiviert (Bonus bei Unterschreitung). Stabilste Erlösbasis aller Energiewirtschafts-Segmente.",
            herausforderungen: "Massiver Investitionsbedarf: Wärmepumpen und EV verdoppeln/verdreifachen NS-Netzlasten lokal. BNetzA schätzt VNB-Investitionsbedarf bis 2045 auf 375 Mrd. €. Fachkräftemangel (Elektriker, Netzplaner). Genehmigungsdauer für Netztrassen. Finanzierungslücke: Regulierung hinkt Investitionsbedarf systematisch hinterher.",
            ausblick: "DSOs entwickeln sich von passiven Netzbetreibern zu aktiven System-Operatoren (Active System Management, ASM). §14a EnWG ist erster regulatorischer Schritt. Digitalisierung bis NS-Ebene (Sensorik, SCADA, DER-Management) wird zur Pflicht. Konsolidierung: Kleine Stadtwerke geben Netze ab – 900 VNBs werden auf 200–300 konsolidieren bis 2040.",
            erloesmodell: "ARegV-Netzentgelte (§21 EnWG, StromNEV, 4. Regulierungsperiode)",
            regulierung: "ARegV, StromNEV, EnWG §21, BNetzA – 4. Regulierungsperiode ab 2024",
            kundensegment: "Letztverbraucher (indirekt via Lieferant), Anlagenbetreiber, Ladepunkte",
            differenzierung: "Effizienz-Benchmark, SAIDI-Qualität, Capex-Timing, Digitalisierungsgrad",
            status: "aktiv",
            radar: { regulierung:5, skalierbarkeit:1, marktrisiko:1, digitalisierung:2, wettbewerb:1, nachhaltigkeit:3 },
            erloesTyp: "Reguliert", akteure: ["Bayernwerk Netz","Westnetz","E.DIS Netz","Netze BW"]
          },
          {
            id: "L3-VNB-KLASSISCH-02", title: "Messstellenbetrieb (iMSB / gMSB)",
            definition: "MsbG trennt Messstellenbetrieb regulatorisch vom Netzbetrieb. Grundzuständiger MSB (gMSB) = VNB per Default. Wettbewerblicher iMSB kann durch Angebot an Letztverbraucher verdrängen. iMSys = SMGW (Smart Meter Gateway, BSI TR-03109 zertifiziert) + Zähler. SMGW kommuniziert über LMN mit Messtechnik, über WAN mit Marktkommunikationspartnern. Pflicht-Rollout: >6.000 kWh/a ab 2025, >3.000 kWh/a ab 2027, EE/KWK ab 7 kW ab 2025. MSB-Entgelte §31 MsbG: 20–100 €/Jahr je Messstelle.",
            wertschoepfung: "gMSB (VNB): Stabile regulierte Entgelte, niedriges Risiko. Mehrwert durch Datenservices (Lastganganalyse, PV-Monitoring, §14a-Integration) über Mindestentgelt hinaus. iMSB: Differenzierung über Service und Datenintegration. SMGW als IoT-Gateway: zukünftig Basis für Gas, Wärme, Wasser-Integration.",
            herausforderungen: "BSI-Zertifizierung (TR-03109) dauerte jahrelang und verzögerte Markteintritt massiv. Nur wenige SMGW-Hersteller auf Markt (Sagemcom, Theben, Landis+Gyr, EMH). LMN-Kommunikation im Altbaubestand technisch schwierig. DSGVO schränkt Nutzung hochauflösender Daten ein. Rollout bleibt hinter Plan.",
            ausblick: "SMGW als Infrastruktur für dynamische Tarife (§41b), §14a-Steuerung, V2G. Plattformökonomie: iMSBs mit integrierten EMS-Plattformen werden Multi-Utility-Gateways. Markt konsolidiert sich: wenige große iMSBs mit skalierten Plattformen dominieren.",
            erloesmodell: "MSB-Entgelte (§31 MsbG, reguliert) + Mehrwertdienste",
            regulierung: "MsbG, BSI TR-03109, §21b EnWG, DSGVO",
            kundensegment: "Letztverbraucher, EE-Anlagenbetreiber, Lieferanten",
            differenzierung: "BSI-Zertifizierung, Rollout-Tempo, Datenservices, §14a-Readiness",
            status: "aktiv",
            radar: { regulierung:4, skalierbarkeit:2, marktrisiko:1, digitalisierung:5, wettbewerb:2, nachhaltigkeit:2 },
            erloesTyp: "Reguliert", akteure: ["Bayernwerk Netz","Westnetz","discovergy","emonvia","EMH metering"]
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
            definition: "BNetzA-Festlegung BK6-22-300 (in Kraft seit 1.1.2024): VNBs dürfen sVEs – Wärmepumpen, EV-Lader >11 kW, Klimaanlagen, Batteriespeicher – bei lokalen Netzengpässen temporär auf 4,2 kW dimmen ('Modulationsrahmen'). Limite: max. 2h am Stück, max. 50% Jahresstunden ohne Einhaltung der Mindestleistung. Gegenleistung für Kunden: 100–190 €/Jahr Netzentgelnachlass (Modell 1) oder reduzierter Arbeitspreis (Modell 2). Kommunikation via CLS über SMGW oder direkten CLS-Kanal.",
            wertschoepfung: "Direkte Kostenersparnis: Trafo-Upgrade (30.000–100.000 €) durch Lastmanagement vermieden. Smart-Grid-Investition (CLS-Infrastruktur) ist regulatorisch als 'besondere netztechnische Betriebsmittel' anerkannt – erhöht RAB. Indirekter Wert: Mehr sVE-Anschlüsse möglich ohne proportionalen Capex = Volumenwachstum bei flacherer Kostenkurve.",
            herausforderungen: "SMGW-basierte CLS-Kommunikation setzt flächendeckenden Smart-Meter-Rollout voraus. Alternative CLS-Kanäle (Mobilfunk, Direktverbindung) mit eigenen Hürden. Kundenkommunikation: 'Dimmung' erklärungsbedürftig. Koordination mit Aggregatoren (Doppelsteuerung vermeiden) regulatorisch noch nicht gelöst.",
            ausblick: "§14a ist Einstieg in 'Flex-first'-Netzbetrieb. Erweiterung auf industrielle Lasten und Großspeicher folgt. Lokale Flexibilitätsmärkte (VNB kauft Flex von Aggregatoren statt Netz auszubauen) als nächste Evolutionsstufe. EU Clean Energy Package verpflichtet DSOs mittelfristig zu Flex-Beschaffung vor Netzverstärkung.",
            erloesmodell: "Capex-Vermeidung (indirekt) + regulatorisch anerkannte Smart-Grid-RAB",
            regulierung: "EnWG §14a, BNetzA BK6-22-300, MsbG",
            kundensegment: "Prosumer / Haushaltskunden mit sVE (EV, WP, Speicher)",
            differenzierung: "CLS-Rollout, SMGW-Anbindungsquote, Koordination mit Aggregatoren",
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
            definition: "Kommune oder Stadtwerk hält Netzeigentum, operativen Betrieb und Konzession (§46 EnWG) vollständig selbst – meist über einen Eigenbetrieb oder eine 100%ige Tochter-GmbH innerhalb des Stadtwerke-Konzerns. Typisch für größere Städte mit eigener Stadtwerke-Struktur (z.B. München, Hannover, Düsseldorf). Vollständige vertikale Integration von Eigentum, Betrieb und Konzession in einer Hand.",
            wertschoepfung: "Vollständiger regulierter Return auf RAB bleibt im Konzern, keine Pacht- oder Betriebsführungs-Marge geht an Dritte ab. Querverbund mit anderen Sparten (Wärme, Wasser, ÖPNV) im Stadtwerke-Konzern möglich. Volle strategische Steuerungshoheit über Investitionstempo bei Wärmewende und Sektorkopplung.",
            herausforderungen: "Hohe Kapitalbindung direkt bei Kommune/Stadtwerk – Investitionsfähigkeit hängt an kommunaler Bonität und Verschuldungsgrenzen. Fachkräfte-Wettbewerb mit großen, besser zahlenden VNB. Skaleneffekte fehlen bei kleineren Eigenbetrieben – die ARegV-Effizienzbenchmark bestraft Subscale-Strukturen systematisch.",
            ausblick: "Unter wachsendem Capex-Druck (375 Mrd. € Investitionsbedarf bis 2045) werden kleinere Eigenbetriebe verstärkt Kooperations- oder Betriebsführungsmodelle suchen, da sie die Transformation nicht allein stemmen können. Größere Eigenbetriebe (SWM, Stadtwerke Hannover) bleiben dagegen eigenständige Ankerpunkte und potenzielle Konsolidierer in ihrer Region.",
            erloesmodell: "ARegV-Netzentgelte (§21 EnWG, StromNEV), vollständig im eigenen Bilanzkreis ohne Pacht- oder Fee-Abzug",
            regulierung: "EnWG §46 (Konzession bei Kommune/Eigenbetrieb selbst), ARegV, StromNEV, gesellschaftsrechtliche Entflechtungspflichten ab bestimmter Kundenzahl",
            kundensegment: "Letztverbraucher im Versorgungsgebiet der Kommune",
            differenzierung: "Investitionsgeschwindigkeit, strategische Steuerungshoheit, Verbund mit anderen kommunalen Sparten",
            status: "aktiv",
            radar: { regulierung:5, skalierbarkeit:1, marktrisiko:1, digitalisierung:2, wettbewerb:1, nachhaltigkeit:3 },
            erloesTyp: "Reguliert", akteure: ["SWM Infrastruktur","Stadtwerke Hannover","Stadtwerke Düsseldorf Netz"]
          },
          {
            id: "L3-VNB-BETREIB-02", title: "Pacht-/Konzessionsmodell (Asset-Trennung Eigentum/Betrieb)",
            definition: "Kommune bleibt Eigentümerin der Netzinfrastruktur, verpachtet operativen Betrieb und technische Verantwortung gegen Pachtzins an einen größeren Netzbetreiber – meist die regionale Netztochter eines Energiekonzerns. Der Pachtzins ist regulatorisch als Kostenposition in der Erlösobergrenze grundsätzlich anerkennungsfähig, was der Kommune einen laufenden Einnahmestrom ohne eigenes Betriebsrisiko verschafft.",
            wertschoepfung: "Kommune erzielt laufenden Pachtzins ohne Capex-Verantwortung oder operatives Betriebsrisiko. Pächter realisiert Skaleneffekte, indem er mehrere gepachtete Netze im Konzernverbund bündelt (gemeinsame Leitstelle, Einkauf, Fachpersonal); Effizienzgewinne oberhalb des Pachtzinses verbleiben beim Pächter.",
            herausforderungen: "Anreizkonflikt zum Vertragsende hin: Pächter hat geringeren Anreiz, kurz vor Auslaufen noch substanziell zu investieren. Angemessenheit der Pachtzinshöhe ist regulatorisch und politisch umstritten – BNetzA-Festlegungen zur Anerkennung von Pachtzinsen in der Erlösobergrenze werden zunehmend strenger geprüft. Konzessionsende erzwingt Neubewertung des gesamten Modells.",
            ausblick: "Modell gerät unter Druck: schärfere BNetzA-Prüfung der Pachtzins-Anerkennung verschlechtert die Wirtschaftlichkeit für Konzern-Pächter, während zugleich die politische Rekommunalisierungsdebatte (vgl. L3-VNB-BETREIB-05) Kommunen ermutigt, bei Vertragsende selbst zu übernehmen statt zu verlängern.",
            erloesmodell: "Pachtzins (für die Kommune) + ARegV-Netzentgelt abzüglich Pachtzins (für den Betreiber)",
            regulierung: "EnWG §46, BNetzA-Festlegungen zur Anerkennung von Pachtzinsen in der Erlösobergrenze, Konzessionsvertragsrecht",
            kundensegment: "Letztverbraucher; Kommune fungiert wirtschaftlich als Vermieterin der Infrastruktur",
            differenzierung: "Vertragsgestaltung (Laufzeit, Pachtzinshöhe, Investitionsverpflichtungen), Verhandlungsmacht der Kommune",
            status: "aktiv",
            radar: { regulierung:4, skalierbarkeit:2, marktrisiko:2, digitalisierung:2, wettbewerb:2, nachhaltigkeit:2 },
            erloesTyp: "Reguliert", akteure: ["Westnetz","Bayernwerk Netz","E.DIS Netz","Avacon Netz"]
          },
          {
            id: "L3-VNB-BETREIB-03", title: "Netzbetriebsführung durch Dritte (Outsourcing mit/ohne Beteiligung)",
            definition: "Kommune oder kleines Stadtwerk bleibt Eigentümerin UND Konzessionsinhaberin, beauftragt aber einen externen Dienstleister mit der gesamten operativen Netzbetriebsführung (technischer Betrieb, Entstördienst, Mess-/Abrechnungsprozesse). Zwei Ausprägungen: reine Dienstleistungs-Betriebsführung gegen Fee, oder das Thüga-Modell mit kombinierter Minderheitsbeteiligung plus Betriebsführung – Kommune bleibt mehrheitlich Eigentümerin (Beispiel Singen: 50,1% Stadt / 49,1% Thüga).",
            wertschoepfung: "Dienstleister monetarisiert Skaleneffekte über viele parallele Mandate (Thüga-Gruppe betreut auf diese Weise rund 100 kommunale Energieversorger). Kommune erhält professionellen Netzbetrieb, ohne selbst die volle technische und digitale Fachkompetenz aufbauen zu müssen.",
            herausforderungen: "Abhängigkeit vom Dienstleister – eigenes Know-how beim Auftraggeber erodiert über Zeit. Schnittstellenkomplexität bei Störungen und Haftungsfragen zwischen Eigentümer und Betriebsführer. Bei Beteiligungsmodellen (Thüga) zusätzlich Governance-Fragen zwischen Mehrheits- und Minderheitsgesellschafter.",
            ausblick: "Wachsendes Modell angesichts Fachkräftemangel und steigender technischer Komplexität (Digitalisierung, §14a, Smart-Meter-Rollout): immer mehr kleine VNB können dies nicht mehr allein stemmen. Wichtiger Konsolidierungstreiber auf dem Weg von ca. 900 auf 200–300 VNB bis 2040 – auch ohne formale Fusion.",
            erloesmodell: "Dienstleistungsentgelt (Fee-based) vom Netzeigentümer an Betriebsführer; bei Beteiligungsmodell zusätzlich Gewinnausschüttung entsprechend Anteilsquote",
            regulierung: "EnWG §46 (Konzession bleibt bei Kommune/Stadtwerk), informationelle Entflechtungsvorschriften bei Drittbetriebsführung, ARegV",
            kundensegment: "Kleine und mittlere Stadtwerke/Kommunen als Auftraggeber",
            differenzierung: "Servicequalität, Reaktionszeiten bei Störungen, Digitalisierungs-Know-how, Vertragsflexibilität",
            status: "aktiv",
            radar: { regulierung:3, skalierbarkeit:3, marktrisiko:2, digitalisierung:3, wettbewerb:3, nachhaltigkeit:2 },
            erloesTyp: "Fee-based", akteure: ["Thüga","Westnetz","Avacon Netz","SWU Netze"]
          },
          {
            id: "L3-VNB-BETREIB-04", title: "Interkommunale Netzgesellschaft (Kooperationsmodell)",
            definition: "Mehrere benachbarte Kommunen bündeln ihre Netze in einer gemeinsamen, rein kommunalen Netzgesellschaft, um Skaleneffekte zu erzielen, ohne das Netz an einen externen Konzern abzugeben. Konkretes Beispiel: Westfalen Weser Netz GmbH, getragen von der Westfalen Weser Energie GmbH & Co. KG im Eigentum von 57 Kommunen (weitere 24 Kommunen sind nur Konzessionsgeber, nicht Gesellschafter) – aktiv in Ostwestfalen-Lippe, Weserbergland und nördlichem Sauerland.",
            wertschoepfung: "Bündelung von Investitionskraft und Fachpersonal über viele kleine Einzelnetze hinweg verbessert den ARegV-Effizienzbenchmark gegenüber isolierten Kleinstnetzen. Politische Kontrolle bleibt vollständig bei den beteiligten Kommunen – kein Souveränitätsverlust wie bei Verkauf an einen Konzern.",
            herausforderungen: "Governance-Komplexität bei vielen kommunalen Gesellschaftern mit unterschiedlichen Interessen und Investitionsprioritäten. Hoher rechtlicher und gesellschaftsrechtlicher Gründungsaufwand. Risiko politischer Blockaden bei strategischen Entscheidungen, die viele Gesellschafter-Kommunen einbeziehen müssen.",
            ausblick: "Der BNetzA-Konsolidierungsdruck (900 → 200–300 VNB bis 2040) macht dieses Modell zur naheliegenden Alternative sowohl zum Verkauf an einen Konzern als auch zur eigenständigen Überforderung kleiner Eigenbetriebe – Kooperation statt Verkauf oder Vereinzelung.",
            erloesmodell: "ARegV-Netzentgelte, anteilig nach Beteiligungsquote an die Gesellschafter-Kommunen ausgeschüttet",
            regulierung: "EnWG §46 (Konzessionen bleiben bei den jeweiligen Kommunen, Betrieb wird gepoolt), Gesellschaftsrecht, ARegV",
            kundensegment: "Letztverbraucher in allen beteiligten Kommunen",
            differenzierung: "Größe und Reichweite des Verbunds, Governance-Struktur, gemeinsame Investitionsfähigkeit",
            status: "emerging",
            radar: { regulierung:4, skalierbarkeit:3, marktrisiko:1, digitalisierung:3, wettbewerb:1, nachhaltigkeit:3 },
            erloesTyp: "Reguliert", akteure: ["Westfalen Weser Netz","Westfalen Weser Energie"]
          },
          {
            id: "L3-VNB-BETREIB-05", title: "Rekommunalisierung (Rückkauf nach Konzessionsende)",
            definition: "Kommune kauft das Verteilnetz von einem bisherigen Konzern-Betreiber zurück und überführt es in kommunales Eigentum, statt die auslaufende Konzession (§46 EnWG, üblich 20 Jahre) erneut auszuschreiben. Hamburg: 2013 Volksentscheid (50,9%) für vollständige Rekommunalisierung; 2014 Rückkauf der Vattenfall-Mehrheit am Stromnetz (74,9% für 546,7 Mio. €, Stadt hielt bereits 25,1%) → Stromnetz Hamburg GmbH seither 100% kommunal; Gasnetz 2018 (355,4 Mio. €) und Fernwärme 2019 (950 Mio. €) folgten. Berlin: Die 2019 an die landeseigene Bietergesellschaft 'Berlin Energie' vergebene Netzkonzession wurde nach Vattenfalls Klage 2020 vom Kammergericht für unwirksam erklärt; die tatsächliche Rekommunalisierung erfolgte 2021 auf anderem Weg – die Holding 'Berlin Energie und Netzholding GmbH' (BEN) kaufte Vattenfalls verbleibende 100%-Beteiligung an der Stromnetz Berlin GmbH direkt für rund 2,06 Mrd. € (zzgl. Nebenkosten ca. 2,14 Mrd. €).",
            wertschoepfung: "Vollständige Rückführung der regulierten Netzrendite an die Kommune statt an einen externen Konzern. Strategische Steuerungshoheit über Ausbau-Tempo für Wärmewende und Sektorkopplung. Politisches Argument 'Energiewende in kommunaler Hand' stärkt zudem die Investitionslegitimation gegenüber Bürgern.",
            herausforderungen: "Sehr hoher Kaufpreis – Bewertungsstreit Sachzeitwert vs. Ertragswert führt oft zu jahrelangen Schieds- und Gerichtsverfahren (Berlin: Konzessionsstreit zog sich über ein Jahrzehnt). Übergangsrisiken bei Personal- und IT-Übernahme. Aufbau eigener Fach- und Steuerungskompetenz nach Jahrzehnten externer Betriebsführung.",
            ausblick: "Nach den Großstadt-Wellen (Hamburg, Berlin) sind weitere Rekommunalisierungen bei auslaufenden Konzessionen in mittelgroßen Städten zu erwarten, gebremst durch hohe Kapitalkosten im aktuellen Zinsumfeld. Trend läuft damit parallel zur gegenläufigen Konsolidierungswelle bei kleinen Netzen (vgl. L3-VNB-BETREIB-03/04).",
            erloesmodell: "ARegV-Netzentgelte nach Übernahme, vollständig kommunal",
            regulierung: "EnWG §46 (Konzessionsvergabe/-ende), kartellrechtliche Vorgaben zur Bewertung (Sachzeitwert), gerichtliche Konzessionsstreitverfahren",
            kundensegment: "Letztverbraucher im übernommenen Netzgebiet",
            differenzierung: "Übernahmegeschwindigkeit, Integrationsqualität, politische Rückendeckung und Finanzierungsfähigkeit",
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
            definition: "FNB Gas betreiben ~40.000 km Hochdruckfernleitungsnetz (16–100 bar) unter ARegV-Regulierung (GasNEV). Struktur analog Strom-ÜNBs: BNetzA-genehmigte EOG auf Basis RAB + Effizienzvergleich. Kapazitätsbuchungen über PRISMA-Plattform (EU). Technische Basis: Kompressorstationen alle 150–200 km, SCADA/EMS, Pipelineintegrität. Entry/Exit-Netzentgelte getrennt.",
            wertschoepfung: "Regulierter Return auf RAB – gesichert, aber mit Transformationsrisiko. FNBs, die früh in H2-Readiness investieren (Stahlgütenachweis, Verdichterumbau) positionieren sich für regulatorisch anerkannte H2-Kernnetz-Investitionen. Grenzüberschreitende Kapazitäten (ICs) erzielen höhere Buchungspreise durch internationalen Gashandel.",
            herausforderungen: "Fundamentale Geschäftsmodellunsicherheit bei vollständiger Dekarbonisierung: Erdgas-Durchleitung sinkt auf null. Stranded-Asset-Risiko für nicht H2-geeignete Rohre. Investitionsdilemma: Erdgas-Infrastruktur modernisieren oder auf H2 wechseln? Regulatorischer Übergangszeitraum noch nicht vollständig definiert.",
            ausblick: "H2-Kernnetz (9.700 km, BNetzA 2024 genehmigt) transformiert die FNB-Branche. ~60% Repurposing bestehender Gasleitungen – FNBs mit geeignetem Rohrnetz haben strukturellen Vorteil. Amortisationsmodell: staatliche Anschubfinanzierung bis H2-Markt reif. European Hydrogen Backbone (EHB: 53.000 km bis 2040) als europäische Einbettung.",
            erloesmodell: "Regulierte Entry/Exit-Entgelte (GasNEV, ARegV)",
            regulierung: "EnWG §21, GasNEV, ARegV, BNetzA, EU-Gasmarkt-VO, EnWG H2-Novelle",
            kundensegment: "Gaslieferanten, Industrie, VNB Gas, H2-Erzeuger (zukünftig)",
            differenzierung: "H2-Readiness (Rohrmaterial), Repurposing-Kompetenz, Netzlage (Nordsee-Ruhrgebiet)",
            status: "aktiv",
            radar: { regulierung:5, skalierbarkeit:1, marktrisiko:1, digitalisierung:2, wettbewerb:1, nachhaltigkeit:2 },
            erloesTyp: "Reguliert", akteure: ["OGE","Gascade","Bayernets","Terranets BW","Ontras"]
          },
          {
            id: "L3-GAS-FNB-02", title: "Wasserstoff-Kernnetz (H2-Backbone)",
            definition: "BNetzA-genehmigtes H2-Kernnetz (2024): 9.700 km verbinden Erzeuger (Nordsee-Elektrolyse, LNG/H2-Import-Terminals) mit Abnehmern (Ruhrgebiet, Bayern, Baden-Württemberg). Finanzierung: Amortisationskontomodell – FNBs investieren vorab, Rückfluss über H2-Netzentgelte nach Markt-Ramp-up; staatliche Absicherung für Restrisiken. ~60% Repurposing (bestehende Gasleitungen), ~40% Neubau. Betrieb voraussichtlich durch bestehende FNB Gas.",
            wertschoepfung: "Infrastrukturmonopol auf einzigem nationalen H2-Transportnetz – wer das H2-Kernnetz betreibt, kontrolliert den zentralen Engpass für den deutschen H2-Markt der 2030er. Langfristige Kapitalrendite analog Erdgas-Netz, aber mit staatlicher Rückendeckung in der Ramp-up-Phase. First-Mover-Advantage für FNBs, die früh Repurposing-Kompetenz aufbauen.",
            herausforderungen: "Vollständig abhängig von H2-Marktentwicklung – wenn H2-Nachfrage hinter Erwartungen bleibt, entstehen massive Stranded Assets. Technische Unsicherheiten: H2-Embrittlement bei höherfestem Stahl. Verdichtertechnologie für H2 noch nicht vollständig industrialisiert. Marktentwicklung europaweit heterogen.",
            ausblick: "H2-Kernnetz vollständig operativ bis 2032. Internationale Vernetzung über EHB. Import-H2 aus Nordafrika, Naher Osten, Australien über Rotterdam/Hamburg. Bis 2030 erste Korridore (Nordsee–Ruhrgebiet) operativ. Schrittweiser H2-Preisverfall durch Skaleneffekte in Elektrolyse.",
            erloesmodell: "Regulierte H2-Netzentgelte (geplant) + staatliche Anschubfinanzierung",
            regulierung: "EnWG H2-Novelle, EU-Wasserstoffverordnung (2024), BNetzA H2-Regulierung",
            kundensegment: "H2-Erzeuger (Elektrolyseure), H2-Abnehmer (Stahl, Chemie, Mobilität)",
            differenzierung: "Netzlage (Nordsee-Achse), Repurposing-Kompetenz, Verdichtertechnologie H2",
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
            definition: "EPEX SPOT (Day-Ahead, Intraday kontinuierlich, Intraday-Auktionen) und EEX (Futures, Optionen, CO₂) betreiben regulierte Marktplätze. Erlös = Transaktionsgebühren (0,03–0,15 €/MWh je Produkt) + Clearinggebühren (via ECC) + Mitgliedsbeiträge. Netzwerkeffekte sind fundamental: Liquidität zieht Liquidität. Kein Marktpreisrisiko – reine Infrastrukturrolle. EPEX SPOT: >500 TWh Day-Ahead-Handel/Jahr in Deutschland.",
            wertschoepfung: "Plattform-Netzwerkeffekt: Jeder neue Teilnehmer erhöht Liquidität und damit den Wert für alle. Skaleneffekte in IT-Infrastruktur: marginale Kosten pro Transaktion sinken mit Volumen. Produktausweitung (Intraday-15-Minuten-Produkte seit 2018) schafft neue Erlösquellen bei wachsender EE-Volatilität.",
            herausforderungen: "Regulatorisches Umfeld: MiFID II, REMIT, EMIR erhöhen Compliance-Kosten. Technologische Disruption durch dezentralen Peer-to-Peer-Handel (Blockchain-basiert, noch marginal). Konsolidierungsdruck auf europäischer Ebene.",
            ausblick: "Volumen wächst mit EE-Anteil (mehr Intraday-Handel für Prognoseausgleich). 15-Minuten-Produkte werden Standard. H2-Futures und Flexibilitätsprodukte als neue Märkte. Echtzeit-Clearing als nächste Evolutionsstufe.",
            erloesmodell: "Transaktionsgebühren (€/MWh) + Clearing + Mitgliedsbeiträge",
            regulierung: "MiFID II, REMIT (ACER), EnWG §26, EMIR",
            kundensegment: "Erzeuger, Lieferanten, Trader, ÜNBs, Industrie",
            differenzierung: "Liquidität, Produktpalette, Clearing-Sicherheit, Technologie-Latenz",
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
            definition: "Handel auf eigene Rechnung mit dem Ziel, Marktpreisrisiken in Gewinne umzuwandeln. Strategien: (1) Spot-Arbitrage zwischen Märkten und Zeitpunkten. (2) Spread Trading: Clean Spark Spread (Strom vs. Gas + CO₂), Clean Dark Spread (Strom vs. Kohle + CO₂). (3) Strukturelles Trading: Baseload-Futures günstig, Peak-Futures teuer verkaufen. (4) Meteorologisches Trading: Positionsnahme auf Basis proprietärer EE-Prognosemodelle. Alle Positionen unterliegen REMIT-Meldepflicht an ACER und MiFID II-Compliance.",
            wertschoepfung: "Informationsvorsprung als einzige nachhaltige Alpha-Quelle: bessere EE-Prognosemodelle, schnellere Datenpipelines, erfahrenere Trader. Skaleneffekte: Größere Bücher bewirtschaften Bid-Ask-Spreads effizienter. Risikomanagement-Disziplin ermöglicht höhere Positionsnahme bei gleichem VAR-Budget.",
            herausforderungen: "REMIT II (ab 2024): erweiterte Meldepflichten, schärfere Insider-Trading-Definitionen. ML-Algorithmen nivellieren Informationsvorsprünge zwischen Marktteilnehmern. EMIR-Clearing-Anforderungen erhöhen Eigenkapitalbindung. Talentknappheit: Quantitative Trader und Data Scientists sind teuer und mobil.",
            ausblick: "Volatilität steigt strukturell mit EE-Anteil – mehr Handelsmöglichkeiten und Risiken. KI-gestützte Prognosemodelle werden Standard. Neue Produkte: H2-Derivate, Long-Duration-Storage-Kontrakte, Flex-Produkte für Aggregatoren. EU-Marktintegration (PICASSO, MARI, TERRE) schafft größere Arbitrage-Räume.",
            erloesmodell: "Handelsmarge (P&L aus Proprietary-Positionen, VAR-kontrolliert)",
            regulierung: "REMIT II, MiFID II, EMIR, EnWG §5, ACER-Überwachung",
            kundensegment: "Eigenbuch (kein externer Kunde)",
            differenzierung: "ML-Prognosegüte, Datenvorteil, Reaktionsgeschwindigkeit, Risikodisziplin",
            status: "aktiv",
            radar: { regulierung:2, skalierbarkeit:4, marktrisiko:5, digitalisierung:5, wettbewerb:4, nachhaltigkeit:1 },
            erloesTyp: "Merchant", akteure: ["Axpo","Alpiq","Vitol","RWE S&T","Trafigura"]
          },
          {
            id: "L3-HANDEL-PORTFOLIO-02", title: "Direktvermarktung & EE-Portfoliomanagement",
            definition: "Direktvermarktungsdienstleister bündeln EE-Anlagen und optimieren deren gemeinsame Vermarktung. Kerngeschäft: Prognosedienstleistung – bessere Einspeiseprognosen als Referenzmarktwert = Outperformance. Next Kraftwerke (jetzt RWE): >14 GW in 17 Ländern, europäischer Marktführer. Technologiebasis: ML-Wettermodelle (0,5–1 km Auflösung), SCADA-Anbindung aller Anlagen, automatisierter Intraday-Handel. Erlös: Managementfee (0,15–0,50 ct/kWh) + Outperformance-Split (20–40% des Mehrerlöses).",
            wertschoepfung: "Portfolioeffekte bei >10 GW: Prognosefehler sinkt durch Diversifikation auf ~2–3%. Outperformance von 2 €/MWh bei 10 GW × 2.000 h = 40 Mio. MWh × 2 €/MWh = 80 Mio. € Outperformance-Pool p.a. First-Mover-Vorteile: Wechselhürde nach SCADA-Integration ist hoch. Technologiekostenreduktion schafft steigende Margen.",
            herausforderungen: "ÜNBs verbessern Referenzmarktwerte kontinuierlich – Outperformance-Potenzial sinkt strukturell. Markt konsolidiert: Top 5 Direktvermarkter haben >70% Marktanteil. Interessenkonflikte nach RWE-Übernahme von Next Kraftwerke (vermarktet auch Wettbewerberanlagen). EinsMan-Abrechnungskomplexität (Ausfallarbeit) belastet Prozesse.",
            ausblick: "Direktvermarktung entwickelt sich zu 'Energy-as-a-Service': EE + Speicher + H2-Elektrolyse-Steuerung + Demand Response. Internationalisierung: Europäischer EE-Boom schafft Wachstumsmärkte außerhalb Deutschland.",
            erloesmodell: "Managementfee (ct/kWh) + Outperformance-Share (% über RMW)",
            regulierung: "EEG §21b, MaBiS, REMIT, regelleistung.net",
            kundensegment: "EE-Anlagenbetreiber (B2B), Projektentwickler",
            differenzierung: "Prognosegüte, Portfoliogröße (Skaleneffekte), SCADA-Anbindungstiefe",
            status: "aktiv",
            radar: { regulierung:2, skalierbarkeit:5, marktrisiko:2, digitalisierung:5, wettbewerb:3, nachhaltigkeit:4 },
            erloesTyp: "Fee-based", akteure: ["Next Kraftwerke (RWE)","Statkraft","Axpo","BKW","Enspired"]
          },
          {
            id: "L3-HANDEL-ZERTIF-01", title: "Herkunftsnachweise (HKN) & EU ETS",
            definition: "HKN/GO (Guarantees of Origin): Handelbare Zertifikate, die 1 MWh EE-Strom aus spezifischer Quelle bescheinigen. Separater Markt vom physischen Strom (RECS-System). Preise: 0,10–5 €/MWh je nach Qualität (Zusätzlichkeit, Jahrgang, Technologie, Regionalität). EU ETS: Pflichtmarkt für Stromerzeugung und Industrie >20 MW. EUAs (EU Allowances) bei >80 €/t CO₂ (2023) wesentlicher Kostentreiber. Händler arbitrieren Spot-Futures-Spread, Auktionstermine, saisonale Nachfragemuster.",
            wertschoepfung: "HKN: Marge aus Ankauf (EE-Erzeuger) und Verkauf (Lieferanten für Stromkennzeichnung/CSRD). Premium-Segmente (24/7 Matching, regionale HKN, Neuanlagen-Zertifikate) wachsen durch CSRD-Druck. EU ETS: Händler mit besseren CO₂-Preisprognosen erzielen strukturelle Überrenditen.",
            herausforderungen: "HKN-Markt: Überangebot aus wasserkraftreichen Ländern drückt Preise. Regulatorisches Risiko: Strengere Zusätzlichkeits-Anforderungen könnten Markt fragmentieren. EU ETS: CBAM (vollständige Implementierung ab 2026) verändert Nachfragedynamik für europäische Industrie.",
            ausblick: "24/7 CFE (Carbon-Free Energy): stündliches HKN-Matching statt Jahresbilanz. Google, Microsoft, BASF treiben Standard. Neues EU-Marktdesign für hochauflösende HKN entsteht. EU ETS Phase 5 (ab 2031): Ausweitung auf Gebäude und Transport.",
            erloesmodell: "HKN: Handelsmarge (ct/MWh). EU ETS: Tradinggewinne + Compliance-Beratung",
            regulierung: "EnWG §42, EU RED II/III, RECS, EU ETS-RL (2003/87/EG), TEHG",
            kundensegment: "Lieferanten, Industrie (ESG/CSRD), Finanzinvestoren",
            differenzierung: "Zusätzlichkeit (Additionality), Jahrgangspremium, ETS-Preisprognose",
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
        actors: ["E.ON Energie Deutschland","EnBW","RWE/innogy","Vattenfall"],
        items: [
          {
            id: "L3-VERTRIEB-VOLL-01", title: "Massenmarkt B2C – Grundversorgung & Sondertarife",
            definition: "Grundversorger (§36 EnWG: günstigster Anbieter nach Kundenzahl) beliefern Haushalte ohne expliziten Vertrag zum Grundversorgungstarif (GVT). GVT nicht staatlich reguliert, aber transparent kalkulierbar (StromGVV). Wettbewerbliche Sondertarife mit 12–24 Monaten Preisbindung konkurrieren über Vergleichsportale (Verivox, Check24). Erlösstruktur: Retail Margin = Endkundenpreis minus Beschaffungskosten minus Netzentgelte minus Umlagen minus Steuern. Typische Marge: 0,5–2 ct/kWh.",
            wertschoepfung: "Skaleneffekte: bessere Beschaffungskonditionen, effizienterer Kundenservice, IT-Infrastruktur amortisiert über Millionen Kunden. Cross-Selling: Ein Stromkunde generiert im Schnitt 4+ Produkte (Gas, Wärme, Solar, Wallbox). Grundversorgungsstatus sichert Kundenbasis ohne Akquisitionsaufwand. Daten: Jahresverbrauchsdaten als Basis für personalisierte Produktangebote.",
            herausforderungen: "Margenkompression durch Vergleichsportale und Neolieferanten. Energiepreiskrise 2021–2023 hat Discounter-Lieferanten in Insolvenz getrieben – GV als Auffangbecken ohne Marge. IT-Altlasten (SAP IS-U): teure Migration zu SAP S/4HANA. §41b-Pflicht (dynamische Tarife ab 2025) erfordert vollständige IT-Neuarchitektur.",
            ausblick: "Grundversorger müssen sich zu Energiedienstleistern transformieren: Smart-Home-Pakete, EV-Ökosystem, Wärmecontracting, PV-Komplettlösung als Margentreiber. Dynamische Tarife zwingen zur stündlichen Abrechnungsinfrastruktur. Konsolidierung: kleinere Stadtwerke-Vertriebe werden an Konzerne verkauft.",
            angreifbarkeit: "Die am stärksten kommoditisierte Marge der gesamten Wertschöpfungskette (0,5–2 ct/kWh) — am leichtesten anzugreifen, da Lieferantenwechsel ein reines GPKE-Verfahren ohne Asset-Hürde ist. Bereits abgegriffen durch: Neolieferanten, die SaaS- statt Commodity-Marge verdienen (vgl. L3-VERTRIEB-NEO-01/03), und Vergleichsportale, die CPA direkt aus der Akquisitionsmarge der Vollversorger extrahieren (vgl. L3-VERGL-B2C-01). Verteidigungsfähiger Rest: träge Grundversorgungs-Kundenbasis ohne Wechselmotivation + Cross-Selling in regulierungsnahe Nebenprodukte.",
            erloesmodell: "Einzelhandelsspanne (ct/kWh) auf Strom und Gas",
            regulierung: "EnWG §36/§38, StromGVV, GasGVV, Preistransparenz-VO",
            kundensegment: "B2C Haushalte, B2B Gewerbe",
            differenzierung: "Marke, Bundling, Treueprogramme, Servicenetz, IT-Reife für dyn. Tarife",
            status: "aktiv",
            radar: { regulierung:3, skalierbarkeit:4, marktrisiko:2, digitalisierung:2, wettbewerb:5, nachhaltigkeit:2 },
            erloesTyp: "Merchant", akteure: ["E.ON Energie","EnBW","RWE/innogy","Vattenfall"]
          }
        ]
      },
      {
        id: "L2-VERTRIEB-NEO", title: "Digitale Neolieferanten",
        description: "Fundamentale Geschäftsmodell-Innovationen – Strom als Plattform statt Commodity.",
        actors: ["Tibber","Ostrom","Fünf Grad","aWATTar"],
        items: [
          {
            id: "L3-VERTRIEB-NEO-01", title: "Tibber – Dynamic Pricing & Energie-Ökosystem",
            definition: "Tibber (gegründet 2016, Norwegen; Deutschland ab 2019) hat das Versorger-Modell fundamental umgedreht: Statt kWh-Marge verdient Tibber ein Software-Abo (9,95 €/Monat). Strom kostet den stündlichen EPEX-Spot + Netzentgelte + Steuern ohne Aufschlag. Wert liegt in der App: automatische Steuerung von EV-Ladung, Wärmepumpe, Heimspeicher in günstige Stunden. Tibber Pulse-Dongle (~30 €) liest Zähler aus. Community-Feature: Nutzer vergleichen Einsparungen, Gamification. Ökosystem-Partnerschaften mit Wallbox-Herstellern (Easee), WP-OEMs.",
            wertschoepfung: "SaaS-Marge: 10 €/Monat × 500.000 Kunden = 60 Mio. €/Jahr – stabil, unabhängig vom Energiepreis. Netzwerkeffekte: Mehr Tibber-Nutzer mit steuerbaren Assets → attraktiver für §14a-VNB-Kooperation und VPP-Aggregation → neue B2B-Einnahmen. Ökosystem-Plattform: Wallbox-/WP-OEMs zahlen Integrations-Fees für Tibber-Zertifizierung.",
            herausforderungen: "Setzt Smart Meter voraus (für dynamische Tarife nach §41b). In Deutschland Rollout erst ab 2025 verpflichtend – begrenzte Nutzerbasis für volle Automatisierung bisher. CAC ~100 €/Kunde = 1-Jahr-Payback – funktioniert nur bei sehr niedrigem Churn. Markt-Educating teuer: stündliche Preislogik ist noch nicht Mainstream.",
            ausblick: "§41b EnWG (Pflicht für Versorger >200k Kunden, dynamische Tarife, ab 2025) validiert Tibbers Modell für den Massenmarkt. EV-Boom ist Hauptwachstumstreiber: jeder EV-Halter mit Wallbox hat 2–3 €/Tag Einsparpotenzial durch intelligentes Laden. Tibber könnte zur Plattform-Infrastruktur des 'Prosumer-Internet der Energie' werden.",
            erloesmodell: "Subscription (9,95 €/Monat) + Ökosystem-Partnergebühren",
            regulierung: "EnWG §41b (dynamische Tarife), MsbG (Smart Meter als Voraussetzung)",
            kundensegment: "B2C Tech-affine Prosumer: EV-Halter, WP-Besitzer, PV-Anlagenbetreiber",
            differenzierung: "App-UX, Automatisierungstiefe, Community, Smart-Home-Ökosystem-Breite",
            status: "aktiv",
            radar: { regulierung:1, skalierbarkeit:5, marktrisiko:1, digitalisierung:5, wettbewerb:3, nachhaltigkeit:4 },
            erloesTyp: "Subscription", akteure: ["Tibber"]
          },
          {
            id: "L3-VERTRIEB-NEO-02", title: "Fünf Grad – Klimainvestitionsmodell",
            definition: "Fünf Grad (2020, Berlin) hat einen dritten Weg entwickelt: weder günstigster Anbieter noch Standard-Ökostromvertrieb, sondern direkte messbare Klimawirkung als Produktkern. Pro verbrauchter kWh fließt ein fixer Betrag (~0,5 ct/kWh) in zertifizierte Naturschutzprojekte in Deutschland (Torfmoor-Renaturierung, Agroforstwirtschaft, Gewässerrenaturierung). Kritischer Unterschied: Investition in neue, zusätzliche Projekte auf deutschem Boden – nicht internationaler HKN-Zertifikatehandel. Wirkungsreporting: Kunden erhalten Jahresbericht mit konkreter Flächengröße und gemessener CO₂-Bindung.",
            wertschoepfung: "Premium-Aufschlag (2–3 ct/kWh über Marktpreis) von klimabewussten Kunden mit Zahlungsbereitschaft. Kernthese: Anti-Greenwashing-Positioning schafft Glaubwürdigkeitspremium. Strukturell: Klimaprojekte kosten ~0,3–0,5 ct/kWh – Rest ist Retail Margin. Geringe CAC durch Word-of-Mouth in Purpose-Zielgruppe.",
            herausforderungen: "Zielgruppe ist eng: klimabewusst + zahlungsbereit + nicht preissensitiv. Glaubwürdigkeitsrisiko: Klimaprojekte müssen regelmäßig auditiert werden (VCS, Gold Standard). Anzahl geeigneter Naturschutzprojekte in Deutschland ist limitiert – Skalierungshürde. CSRD-Anforderungen an Scope-2-Emissionen könnten Produktdefinition schärfen.",
            ausblick: "CSRD-Berichtspflichten schaffen B2B-Markt für 'High-Integrity Energy' mit nachgewiesener Zusätzlichkeit. Fünf Grad entwickelt B2B-Segment für KMU mit CSRD-Pflicht. 24/7 CFE-Standard als nächster Qualitätsschritt: stündliche Zusätzlichkeit statt Jahresbilanz.",
            erloesmodell: "Retail Margin + Klimaaufschlag (fixer ct/kWh, zweckgebunden)",
            regulierung: "EnWG, UBA-Anerkennungsstandards, EU-Taxonomieverordnung",
            kundensegment: "B2C klimabewusste Haushalte; B2B KMU (CSRD-getrieben)",
            differenzierung: "Messbare Zusätzlichkeit, Antigreenwashing-Positioning, Impact Reporting",
            status: "aktiv",
            radar: { regulierung:1, skalierbarkeit:4, marktrisiko:2, digitalisierung:3, wettbewerb:3, nachhaltigkeit:5 },
            erloesTyp: "Merchant", akteure: ["Fünf Grad"]
          },
          {
            id: "L3-VERTRIEB-NEO-03", title: "Ostrom – Radikale Kostentransparenz",
            definition: "Ostrom (2020, Berlin) verfolgt extremste Preistransparenz: Tarif = exakt ausgewiesener Börsenstrompreis (Monatsdurchschnitt EPEX) + Netzentgelte + staatliche Abgaben + fixe Marge (~1 ct/kWh). Keine Lockangebote, keine Preisgarantien, keine Boni. Kommunikation: 'Wir sind nicht der günstigste – aber immer fair.' Kunden sollen verstehen, wie sich ihr Strompreis zusammensetzt. Positionierung explizit gegen Vergleichsportale, die Lockangebote bevorzugen.",
            wertschoepfung: "Niedrige CAC durch Word-of-Mouth in transparenz-orientierten Zielgruppen (keine Check24-Gebühren). Sehr niedriger Churn durch Kundenzufriedenheit (~5%/Jahr vs. 20–30% bei Discount-Anbietern). Fixe absolute Marge: bei steigendem Preisniveau bleibt Marge stabil. Strukturell geringe Komplexität senkt Betriebskosten.",
            herausforderungen: "Marktsegment limitiert: preisbewusste Kunden ohne Transparenz-Bedürfnis wechseln trotzdem zu billigstem Angebot. Kein Bundling-Potenzial (keine Solar, EV, Wärme-Angebote geplant). Wachstumslimitierung durch Nischenpositioning.",
            ausblick: "EU EMD-Preistransparenz-Anforderungen werden Markt in Richtung Ostroms Modell schieben. Tibber und Ostrom repräsentieren komplementären 'Anti-Commodity'-Trend: Kunden zahlen für Automatisierung (Tibber) oder Vertrauen (Ostrom).",
            erloesmodell: "Fixer Aufschlag (~1 ct/kWh) auf transparenten Großhandelspreis",
            regulierung: "EnWG §41 (Preistransparenzpflicht)",
            kundensegment: "B2C preisbewusste, vertrauensorientierte Digital-Natives",
            differenzierung: "Radikale Transparenz, Einfachheit, keine Lockangebote, Anti-Greenwashing",
            status: "aktiv",
            radar: { regulierung:1, skalierbarkeit:4, marktrisiko:2, digitalisierung:3, wettbewerb:4, nachhaltigkeit:3 },
            erloesTyp: "Merchant", akteure: ["Ostrom"]
          },
          {
            id: "L3-VERTRIEB-NEO-04", title: "aWATTar – Stundentarif für DIY-Automatisierer",
            definition: "aWATTar (2012, Österreich; Deutschland ab 2017) war DACH-Pionier des dynamischen Stundentarifs. Kunden zahlen exakt den stündlichen EPEX-Spot + fixe Aufschläge (Netzentgelte, Abgaben + ~0,3 ct/kWh). Alleinstellungsmerkmal: öffentliche API – Preise 24h im Voraus kostenlos verfügbar. Entwickler-Community baut Home-Assistant-, ioBroker-, openHAB-Integrationen. Explizit keine eigene App – maximale Offenheit, keine Vendor-Lock-in.",
            wertschoepfung: "Sehr niedrige Betriebskosten durch Community-Support statt Call Center. Open-API-Ansatz generiert organisches Wachstum ohne Marketing-Budget. Unterschied zu Tibber: kein Abo-Erlös, kein proprietäres Ökosystem – reine Software-als-Infrastruktur-Philosophie.",
            herausforderungen: "Kein Abo-Erlös: Skalierung nur durch höheres Volumen. DIY-Techniker-Zielgruppe ist per Definition begrenzt. Tibber hat aWATTar durch stärkeres Marketing und Ökosystem überholt. Frage der strategischen Weiterentwicklung: Nischenprodukt bleiben oder expandieren?",
            ausblick: "Mit vollständigem Smart-Meter-Rollout entsteht echter Massenmarkt für Stundentarife. §41b EnWG zwingt alle großen Versorger, dynamische Tarife anzubieten – aWATTar-Modell wird Standard. Frage: Wird aWATTar zum Infrastrukturanbieter für andere Lieferanten?",
            erloesmodell: "Fixer Aufschlag (ct/kWh) auf stündliche EPEX-Spotpreise",
            regulierung: "EnWG §41b, MsbG (Smart Meter als Enabler)",
            kundensegment: "B2C Entwickler, DIY-Automatisierer, Smart-Home-Enthusiasten",
            differenzierung: "Open API, keine Vendor-Lock-in, maximale Transparenz, Entwickler-Community",
            status: "aktiv",
            radar: { regulierung:1, skalierbarkeit:4, marktrisiko:2, digitalisierung:5, wettbewerb:3, nachhaltigkeit:3 },
            erloesTyp: "Merchant", akteure: ["aWATTar"]
          }
        ]
      },
      {
        id: "L2-VERTRIEB-OEKO", title: "Ökostrom-Spezialisten & Genossenschaften",
        description: "Glaubwürdigkeit, Herkunft und Gemeinschaft als primäre Differenzierungsmerkmale.",
        actors: ["Naturstrom AG","EWS Schönau","Green Planet Energy","BürgerEnergie Berlin"],
        items: [
          {
            id: "L3-VERTRIEB-OEKO-01", title: "Premium-Ökostrom mit Zusatzkriterien",
            definition: "Naturstrom AG und Green Planet Energy (ex Greenpeace Energy) verfolgen strikten Ökostrom-Standard: (1) Direktlieferverträge ausschließlich mit Neuanlagen (max. 10 Jahre alt) – keine HKN von 30-Jahre-alten Wasserkraftwerken. (2) Konzernunabhängigkeit: kein Atom/Kohle-Strom im Mutterkonzern. (3) Ausbauförderung: Teil des Erlöses fließt in neue EE-Anlagen. Diese Kriterien schließen alle großen Versorger strukturell aus. Naturstrom: ~200.000 Kunden bundesweit.",
            wertschoepfung: "Glaubwürdigkeitsprämie: Kunden zahlen 1–3 ct/kWh mehr als für Standard-Ökostrom. Strukturell niedriger Churn (<5%/Jahr). Direktlieferverträge mit EE-Anlagen sind proprietäres Asset – nicht kopierbar. 24/7-CFE-Standard als nächste Differenzierungsstufe: stündliches Matching von Verbrauch und Erzeugung.",
            herausforderungen: "HKN-System ermöglicht Greenwashing durch Großkonzerne – Vertrauensverlust im Gesamtmarkt schadet auch seriösen Anbietern. Kommunikationskomplexität: Warum ist Naturstrom besser als E.ON Ökopower? Schwer zu erklären in 30 Sekunden. Nischenmarkt begrenzt Skalierung.",
            ausblick: "CSRD-Anforderungen an Scope-2-Emissionen schaffen B2B-Markt für High-Integrity Ökostrom. 24/7 CFE wird sich als Standard durchsetzen (Google/Microsoft als Treiber). Naturstrom und Green Planet Energy gut positioniert für diesen Standard.",
            erloesmodell: "Retail Margin + Nachhaltigkeits-Premium (1–3 ct/kWh über Standard-Ökostrom)",
            regulierung: "EnWG §42 (Stromkennzeichnung), RECS/HKN, EU RED III",
            kundensegment: "B2C werteorientierte Privatkunden; B2B KMU mit ESG-Anforderungen",
            differenzierung: "Direktlieferverträge (Neuanlagen), Konzernunabhängigkeit, Impact-Transparenz",
            status: "aktiv",
            radar: { regulierung:1, skalierbarkeit:3, marktrisiko:2, digitalisierung:2, wettbewerb:3, nachhaltigkeit:5 },
            erloesTyp: "Merchant", akteure: ["Naturstrom AG","Green Planet Energy","EWS Schönau"]
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
            definition: "Stadtwerke sind die institutionelle Besonderheit der deutschen Energieversorgung: kommunale Unternehmen, die Strom, Gas, Wärme, Wasser und oft ÖPNV aus einer Hand liefern. Finanzierungslogik: profitable Energie-/Netzsparten quersubventionieren defizitären ÖPNV (steuerlich optimiert via Querverbund §4 Abs. 6 KStG). SWM: >7 Mrd. € Umsatz, 10.000 Mitarbeiter, betreiben U-Bahn + Hallenbäder + Kraftwerke. Lokale Kundenbindung durch 30–50 Jahre Kundenbeziehungen und kommunale Identität.",
            wertschoepfung: "Struktureller Vorteil: Querverbund + kommunale Bürgschaft senken Kapitalkosten. Wechselquote deutlich niedriger als bei nicht-kommunalen Versorgern. Wärmenetz als wachsendes Alleinstellungsmerkmal (WPG schützt Fernwärme-Investitionen). Daten: vollständige lokale Energie-/Mobilitäts-/Wasserdaten als Basis für Smart-City-Angebote.",
            herausforderungen: "Entscheidungsprozesse durch Aufsichtsrat, Gemeinderat, Gesellschafterversammlung strukturell langsam. ÖPNV-Defizite wachsen (Corona-Nachwirkungen, Investitionsstau). IT-Altlasten: SAP IS-U, selbstentwickelte Systeme. §41b-Pflicht (dynamische Tarife) erfordert vollständige IT-Erneuerung.",
            ausblick: "Stadtwerke werden zu 'lokalen Energiehubs': WPG-Wärmeplanung, Ladeinfrastruktur, PV-Pachtmodelle, HEMS-Integration. Konsolidierung unvermeidlich: 900+ Stadtwerke werden auf 200–300 bis 2040 konsolidieren. Digitale Transformation als Überlebensfrage der mittelgroßen Stadtwerke.",
            erloesmodell: "Multi-Sparten-Bundling; Quersubvention ÖPNV ↔ Energie (§4 Abs. 6 KStG)",
            regulierung: "EnWG, GemO der Bundesländer, §102 GemO, KStG §4 Abs. 6",
            kundensegment: "B2C lokal + B2B Gewerbe + kommunale Einrichtungen",
            differenzierung: "Lokale Identität, Full-Service (Strom/Gas/Wärme/Wasser), Wärmenetz, ÖPNV",
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
        actors: ["Next Kraftwerke (RWE)","Sonnen (Shell)","Enspired","Sympower","Statkraft"],
        items: [
          {
            id: "L3-AGG-VPP-01", title: "EE-Direktvermarktungs-VPP",
            definition: "Next Kraftwerke (2009, jetzt RWE): >14 GW in 17 Ländern – europäischer Marktführer. Technologiebasis: Proprietäres EMS (Netlantis), 0,5 km-Wettermodell-Ensemble, ML-Prognosesystem, SCADA-Anbindung jeder Anlage. Entscheidungslogik: Stündlich wird für jede Anlage berechnet, ob Day-Ahead oder Intraday-Vermarktung optimal ist. Erlös: Managementfee (0,15–0,45 ct/kWh) + Outperformance-Split (20–40% Mehrerlös über RMW).",
            wertschoepfung: "Skalenökonomie ist fundamental: 10 GW Portfolio reduziert Prognosefehler durch Diversifikation auf ~2–3% (vs. 15–25% Einzelanlage). Outperformance von 2 €/MWh × 10 GW × 2.000 h = 40 Mio. MWh = 80 Mio. € Pool. Wechselbarriere nach SCADA-Integration hoch (Umprogrammierung, Datenmigration). Technologiekosten sinken, Margen steigen strukturell.",
            herausforderungen: "RWE-Übernahme schafft potenzielle Interessenkonflikte (Next vermarktet auch Wettbewerberanlagen). ÜNBs verbessern Referenzmarktwerte – Outperformance-Potenzial sinkt langfristig. Regulatorisches Risiko bei Direktvermarktungsmarkt-Veränderungen.",
            ausblick: "VPP 2.0: EE + Speicher + H2-Elektrolyse-Steuerung + Demand Response + V2G als integriertes Portfolio. Europäische Optimierung über Ländergrenzen (unterschiedliche Markpreise) schafft neue Arbitrage. KI-Echtzeit-Optimierung als nächster Entwicklungsschritt.",
            angreifbarkeit: "Konzentriertes Geschäft (Next Kraftwerke/RWE als Marktführer) ist von zwei Seiten exponiert: ÜNB verbessern laufend die Referenzmarktwerte, wodurch das Outperformance-Potenzial vom Regulierer selbst schrittweise wegreguliert wird; gleichzeitig können große Anlagenbetreiber bei wachsendem Portfolio eigene Direktvermarktung aufbauen (Insourcing-Risiko) statt Managementfee zu zahlen. Die RWE-Konzernzugehörigkeit von Next Kraftwerke schafft zudem eine Interessenkonflikt-Angriffsfläche, die unabhängige Wettbewerber (Statkraft, Enspired) im Pitch um konzernfremde Anlagen gezielt nutzen.",
            erloesmodell: "Direktvermarktungsfee (ct/kWh) + Outperformance-Share",
            regulierung: "EEG §21b, MaBiS, REMIT, regelleistung.net",
            kundensegment: "EE-Anlagenbetreiber (B2B), Projektentwickler",
            differenzierung: "Portfoliogröße (Skaleneffekte), ML-Prognosegüte, SCADA-Tiefe, Reaktionsgeschwindigkeit",
            status: "aktiv",
            radar: { regulierung:2, skalierbarkeit:5, marktrisiko:2, digitalisierung:5, wettbewerb:3, nachhaltigkeit:4 },
            erloesTyp: "Fee-based", akteure: ["Next Kraftwerke (RWE)","Statkraft","Axpo","BKW","Vattenfall"]
          },
          {
            id: "L3-AGG-VPP-02", title: "Demand-Response-Aggregation (Industrie)",
            definition: "Industrielle Lasten (Elektrolyseure, Aluminiumschmelzen, Chloralkali-Elektrolyse, Kühlhäuser, Rechenzentren) werden flexibilisiert und als virtuelles Regelenergie-Asset am Markt angeboten. Unabhängiger Aggregator (EU Clean Energy Package SOGL Art. 182) kann Regelenergie verkaufen ohne Energielieferant zu sein. Schema: Industriekunde signalisiert 'Ich kann in 5 Minuten 10 MW reduzieren' → Aggregator präqualifiziert für aFRR-Down → bei ÜNB-Aktivierung wird Last reduziert → Revenue-Share.",
            wertschoepfung: "Industriekunde erhält Zusatzerlös für Flexibilität, die er ohnehin hat. Aggregator verdient Revenue-Share (20–40%) ohne eigene Asset-Investition. Einzige Investition: Steuerungssoftware + SCADA-Anbindung. Skalierung durch mehr Industriekunden ist margenkonstant.",
            herausforderungen: "Industriekunden zögern wegen Produktionsunterbrechung – Reliability-Nachweis >99% der Präqualifikationsstunden nötig. Technische Anbindung (SPS, ERP) bei jedem Kunden individuell. Deutschland noch restriktiver als andere EU-Länder bei unabhängigen Aggregatoren. aFRR-Marktzugang erfordert aufwendige Präqualifikation.",
            ausblick: "Markt wächst durch steigendes aFRR/mFRR-Volumen (mehr Regelenergiebedarf durch EE) und Industrieflexibilisierung. H2-Elektrolyse als perfekter Demand-Response-Asset: kann in Sekunden hoch- oder runterregeln, ideal für FCR/aFRR. §64-EEG-Reform fördert Lastflexibilität energieintensiver Industrien.",
            erloesmodell: "Revenue-Share (40–80% der Regelenergiemärkte) mit Industriekunden",
            regulierung: "SOGL Art. 182 (unabhängige Aggregatoren), EnWG §12g, regelleistung.net",
            kundensegment: "B2B Industrie (Chemie, Metall, Papier, Rechenzentren)",
            differenzierung: "Reaktionszeit, Industriekunden-Portfolio, SCADA-Anbindungstiefe, Präqualifikationszuverlässigkeit",
            status: "aktiv",
            radar: { regulierung:2, skalierbarkeit:4, marktrisiko:2, digitalisierung:5, wettbewerb:2, nachhaltigkeit:3 },
            erloesTyp: "Fee-based", akteure: ["Sympower","Enspired","E.ON Demand Response","VOLTARIS"]
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
            definition: "Projektierer sichern Flächen (Pacht/Kauf), holen alle Genehmigungen ein (BImSchG-Genehmigung, Netzverknüpfungspunkt-Anmeldung, Artenschutzgutachten, Schall-/Schattenwurf-Gutachten) und verkaufen fertig genehmigtes Projekt an Investor. Kernasset ist die Genehmigung. Entwicklungskosten: 100.000–500.000 €/Anlage. Projektverkaufspreis bei fertiger BImSchG: 150.000–400.000 €/MW. Serienentwicklung: Know-how aus 100+ Projekten senkt Kosten je Projekt.",
            wertschoepfung: "Kapitalleichte Strategie: wenig Eigenkapital gebunden (nur Entwicklungskosten). Hebelwirkung: Flächennetzwerk × Genehmigungskompetenz = überproportionaler Erlös. Proprietäres Flächennetzwerk (10.000–50.000 ha exklusiv gepachtet) als struktureller Schutzwall gegenüber Wettbewerbern. Repowering (Austausch alter Anlagen) als wachsendes Feld.",
            herausforderungen: "BImSchG-Verfahren: 4–8 Jahre, Klagen durch Anwohner/NABU verzögern oder verhindern Projekte. Flächenwettbewerb: Bodenwert und Pachtzins steigen. Netzverknüpfungspunkte als realer Engpass. WindBG-2%-Ziel verbessert Rahmenbedingungen, aber Umsetzung durch Länder stockt.",
            ausblick: "WindBG und beschleunigte BImSchG-Verfahren (EU-Notverordnung 2022/2577) senken Hürden schrittweise. Repowering dominiert mittelfristig (erste Anlagen aus 2000–2005 laufen ab 2025 aus EEG). Agri-PV und Floating-PV eröffnen neue Flächenkategorien.",
            erloesmodell: "Einmaliger Projektverkaufserlös (Development Margin: 50.000–150.000 €/MW)",
            regulierung: "BImSchG, BauGB, WindBG, EEG 2023",
            kundensegment: "Infrastrukturfonds, Energieversorger, Stadtwerke",
            differenzierung: "Flächennetzwerk, Genehmigungskompetenz, Artenschutz-Know-how, Tempo",
            status: "aktiv",
            radar: { regulierung:2, skalierbarkeit:2, marktrisiko:3, digitalisierung:2, wettbewerb:4, nachhaltigkeit:5 },
            erloesTyp: "Fee-based", akteure: ["ABO Wind","wpd","juwi","PNE","Notus Energy"]
          },
          {
            id: "L3-PROJ-EPC-01", title: "EPC-Contractor & O&M-Dienstleistungen",
            definition: "EPC (Lump Sum Turnkey): Totalunternehmer übernimmt gesamte Projektrealisierung zu Festpreis. Risiken: Baukosten-Überschreitung, Lieferkette, Termintreue. Marge typisch 8–15% auf Baukosten. O&M (Operation & Maintenance): Hersteller (Siemens Gamesa Full-Service, Vestas AOM) oder unabhängige Dienstleister (Deutsche Windtechnik) übernehmen Betrieb. Full-Service-O&M garantiert Verfügbarkeit >97%, deckt alle Wartungs-/Reparaturkosten. Jährliche Pauschale: 40.000–80.000 €/Anlage (3–5 MW).",
            wertschoepfung: "EPC: Festpreis-Optimierung (günstiger einkaufen als kalkuliert), Skaleneffekte in Beschaffung, Montage-Standardisierung. O&M: 80–90% Wiederkehrumsatz, hohe Wechselhürden durch proprietäre SCADA-Systeme, wachsende installierte Basis als strukturelles Wachstum. Predictive Maintenance (KI-basierte Ausfallprognose) als Differenzierungsmerkmal.",
            herausforderungen: "EPC: Festpreisverträge in inflationärem Umfeld riskant (Siemens Gamesa-Verluste 2022–2023). Lieferkettenengpässe bei Turbinen, Transformatoren, Kabeln. O&M: Unabhängige Drittanbieter konkurrieren mit Herstellern durch niedrigere Stundensätze. Fachkräftemangel bei Servicetechnikern.",
            ausblick: "O&M-Markt wächst mit installierter Basis: 100 GW Wind Deutschland bis 2030 = ~3 Mrd. €/Jahr O&M-Marktvolumen. Datengetriebene Predictive Maintenance verbessert Verfügbarkeit. Offshore-O&M als eigenständige Sparte mit maritimen Anforderungen (CTVs, SOVs, Jack-up-Vessels).",
            erloesmodell: "EPC: Festpreis-Vertragssumme. O&M: Jahrespauschale (€/Anlage) + Performancebonus",
            regulierung: "VOB/B, FIDIC, BImSchG, CE-Kennzeichnung, IEC-Standards (IEC 61400)",
            kundensegment: "Projektentwickler, Infrastrukturfonds, Betreiber",
            differenzierung: "EPC: Lieferkettensicherheit, Termintreue. O&M: Verfügbarkeitsgarantie, Predictive Maintenance, Ersatzteillogistik",
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
            definition: "Standardfinanzierungsform für EE-Projekte >20 MW: Darlehen ausschließlich durch Projekt-Cashflows besichert, kein Rückgriff auf Sponsoren. Struktur: SPV als Darlehensnehmer; Sicherheiten = Genehmigungen, EEG/PPA-Ertragsverträge, Versicherungen, Anlagen. Leverage: 70–80% FK, 20–30% EK. DSCR typisch >1,25x. Zinssatz 2024: EURIBOR + 100–200 bps. KfW-Programme (Erneuerbare Energien Standard) mit Sonderkonditionen.",
            wertschoepfung: "Bank: Zinsmarge bei geringem Ausfallrisiko (EEG-Cashflows = stabiles Rating). Sponsor: EK-Hebelwirkung bei 25% EK und 10% Projektrendite → ~40% EK-IRR. EIB: Mission-driven – Förderung durch subventionierte Zinsen. Versicherungsmarkt verdient an Betriebsunterbrechungs- und Garantieversicherungen.",
            herausforderungen: "Steigende Zinsen (2022–2024) haben Project Finance teurer gemacht. Viele Projekte mit 2021er Kalkulation nicht mehr finanzierbar. Refinanzierungsrisiko bei kurzen Zinsbindungen. Basel IV-Kapitalanforderungen erhöhen Bankkosten für Infrastrukturfinanzierungen.",
            ausblick: "EU-Taxonomie-konforme Projekte erhalten günstigen Kapitalzugang ('Greenium'). Institutional Infrastructure Debt (Pensionsfonds als direkte Kreditgeber) wächst als Banken-Alternative. Blended Finance (EIB + private Banken) für risikoreiche Märkte.",
            erloesmodell: "Zinsmarge (EURIBOR + Spread) + Arrangierungsgebühren + Commitment Fees",
            regulierung: "KWG, CRR/Basel IV, EU-Taxonomie, EEG (Cashflow-Absicherung)",
            kundensegment: "EE-Projektgesellschaften (SPV), Projektentwickler, Infrastrukturfonds",
            differenzierung: "Zinssatz, Covenant-Flexibilität, Sektorexpertise, Abschlussgeschwindigkeit",
            status: "aktiv",
            radar: { regulierung:3, skalierbarkeit:4, marktrisiko:1, digitalisierung:2, wettbewerb:3, nachhaltigkeit:3 },
            erloesTyp: "Fee-based", akteure: ["KfW","EIB","DZ Bank","ING","Commerzbank","LBBW"]
          },
          {
            id: "L3-FINANZ-PROJEKT-02", title: "Green Bonds & Sustainability-Linked Bonds",
            definition: "Green Bonds: Anleihen, deren Erlöse ausschließlich für grüne Projekte verwendet werden (ICMA Green Bond Principles, EU Green Bond Standard EuGB seit 2024). Sustainability-Linked Bonds (SLBs): Kupon an ESG-KPIs geknüpft (z.B. installierte EE-Kapazität, CO₂-Intensität). 'Greenium': Green Bonds erzielen 2–10 bps niedrigeren Zinssatz als konventionelle Bonds – durch ESG-Investorenbasis (Pensionsfonds, Versicherungen mit Grün-Mandaten).",
            wertschoepfung: "Emittent: Zinsersparnis durch Greenium + Zugang zu ESG-Investorenbasis + Reputationsgewinn. Investitionsbank: Arrangierungsgebühr (0,1–0,3% des Emissionsvolumens) + Second-Party-Opinion-Koordination. SPO-Anbieter (Sustainalytics, ISS ESG): Verifizierungsgebühr.",
            herausforderungen: "Greenwashing-Risiko: ohne echte Zusätzlichkeit sind Green Bonds PR-Instrument. EU EuGB-Standard ist strenger als ICMA – schafft zwei-Klassen-Markt. Reporting-Aufwand (jährliche Impact Reports, Allokationsberichte) ist erheblich.",
            ausblick: "EU EuGB wird Marktstandard für institutionelle Investoren. SLBs unter Druck: Emittenten wählen leicht erreichbare KPIs ('SLB Washing'). Biodiversity Bonds, Transition Bonds, Nature Bonds als neue Kategorien. Green Bond-Markt: >500 Mrd. €/Jahr Neuemissionen weltweit (2024).",
            erloesmodell: "Greenium (Zinsersparnis für Emittenten) + Arrangierungsgebühren",
            regulierung: "EU Green Bond Standard (EuGB 2024), ICMA GBP, EU-Taxonomieverordnung, SFDR",
            kundensegment: "Institutionelle ESG-Investoren (Pensionsfonds, Versicherungen, SWFs)",
            differenzierung: "EU EuGB-Konformität, Second-Party-Opinion-Qualität, Impact-Transparenz",
            status: "aktiv",
            radar: { regulierung:3, skalierbarkeit:5, marktrisiko:1, digitalisierung:2, wettbewerb:3, nachhaltigkeit:5 },
            erloesTyp: "Fee-based", akteure: ["E.ON","RWE","EnBW","KfW","EIB","LBBW"]
          },
          {
            id: "L3-FINANZ-FONDS-01", title: "Infrastrukturfonds (Geschlossener EE-Fonds)",
            definition: "Geschlossene Fonds kaufen fertige EE-Projekte (Brownfield) oder co-investieren in Entwicklung (Greenfield). Anleger: institutionelle Investoren. Fondstruktur: 10–15 Jahre Laufzeit, 200–500 Mio. € Volumen, 20–30 Projekte. Renditeerwartung: 5–9% IRR netto. Attraktivität: stabile inflationsindexierte Cashflows (EEG), geringe Aktienmarkt-Korrelation, ESG-konform. Manager verdienen: Management Fee (0,8–1,5% committed capital p.a.) + Carried Interest (20% über 6–8% Hurdle Rate).",
            wertschoepfung: "Fondsmanager schafft Wert durch Dealflow-Qualität, Asset Management (O&M-Optimierung, Refinanzierung zu niedrigeren Zinsen) und Exit-Timing (Verkauf an größere Fonds zu Aufpreis). Carried Interest ist extremer Incentiv: Bei 300 Mio. € Fonds und 15% IRR vs. 7% Hurdle Rate = 60 Mio. € Carry für Manager.",
            herausforderungen: "EE-Asset-Markt: Kaufpreismultiplen gestiegen (EV/EBITDA von 10x auf 15–20x). Gute Deals werden knapper. Zinsanstieg 2022–2024 senkte IRR-Erwartungen; einige Fonds revidieren Renditeversprechen. ESG-Washing-Risiko: nicht alle 'grünen' Fonds erfüllen EU-Taxonomie.",
            ausblick: "Kapitalbedarf: >1.000 Mrd. € bis 2030 in Europa. Infrastrukturfonds unverzichtbar. Neue Asset-Klassen: Offshore-Wind, BESS, H2-Infrastruktur, EV-Ladeinfrastruktur. Impact Investing und Blended Finance für schwierigere Märkte (Emerging Markets, Frontier H2).",
            erloesmodell: "Management Fee (% AuM p.a.) + Carried Interest (% über Hurdle Rate)",
            regulierung: "AIFMD, KAGB, EU-Taxonomieverordnung, SFDR (Art. 8 / Art. 9)",
            kundensegment: "Institutionelle Investoren (Pensionsfonds, Versicherungen, SWFs, Family Offices)",
            differenzierung: "Track Record, Dealflow-Qualität, Asset-Management-Kompetenz, ESG-Rating",
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
        actors: ["EnBW mobility+","Ionity","Allego","EWE Go","E.ON Drive","Volkswagen/Elli"],
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
            status: "aktiv",
            radar: { regulierung:3, skalierbarkeit:3, marktrisiko:2, digitalisierung:4, wettbewerb:4, nachhaltigkeit:4 },
            erloesTyp: "Merchant", akteure: ["EnBW mobility+","Ionity","EWE Go","Allego","Vattenfall InCharge"]
          },
          {
            id: "L3-EMOB-V2G-01", title: "Vehicle-to-Grid (V2G) Aggregation",
            definition: "V2G nutzt EV-Batterien bidirektional: Fahrzeuge geben bei Netzüberlastung Strom zurück ins Netz. V2G-fähige Fahrzeuge (Nissan Leaf, Hyundai Ioniq 5/6, VW ID-Serie mit V2G-Update) werden von Aggregatoren (Volkswagen/Elli, Jedlix) zu virtuellem Regelenergie-Asset gebündelt. Revenue-Share: 50–70% ÜNB-Erlöse an Fahrzeughalter, 30–50% an Aggregator. EU EMD Art. 20: V2G-Pflicht für neue Wallboxen ab 2027. Kapazitätspotenzial: 10 Mio. EV × 30 kWh V2G = 300 GWh.",
            wertschoepfung: "Aggregator verdient Revenue-Share ohne eigene Asset-Investition – reine Software-/Daten-Wertschöpfung. EV-Batterie (~60 kWh) hat 5× höhere Kapazität als Heimspeicher – enormes Flexibilitätspotenzial. EV-Halter erhält passives Einkommen für Batteriekapazität, die ohnehin vorhanden ist.",
            herausforderungen: "Batteriedegradation durch bidirektionales Laden noch nicht vollständig gelöst. OEM-Gatekeeper: VW, BMW kontrollieren Fahrzeug-API – Aggregatoren abhängig von OEM-Kooperation. Regulierung hinkt Technologie hinterher. Wenige V2G-fähige Fahrzeugmodelle verfügbar (2024).",
            ausblick: "V2G könnte 2030–2035 zu größter Flexibilitätsquelle werden: 10 Mio. EV × 30 kWh = 300 GWh – das 6-fache aller deutschen BESS (2024). EU EMD V2G-Pflicht ab 2027 für neue Wallboxen ist Game Changer. OEMs werden V2G als Revenue-Sharing-Feature vermarkten.",
            erloesmodell: "Revenue-Share Regelenergie/Arbitrage mit EV-Haltern",
            regulierung: "EnWG §14a, EU EMD Art. 20 (V2G-Pflicht ab 2027), SOGL Präqualifikation",
            kundensegment: "B2C EV-Halter; B2B Flottenbetreiber",
            differenzierung: "OEM-Partnerschaften (VW, Hyundai), Aggregationsvolumen, Regelenergie-Präqualifikation",
            status: "emerging",
            radar: { regulierung:2, skalierbarkeit:5, marktrisiko:2, digitalisierung:5, wettbewerb:2, nachhaltigkeit:5 },
            erloesTyp: "Fee-based", akteure: ["Volkswagen/Elli","Jedlix","E.ON Drive","Nissan x Nuvve","Hyundai"]
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
        actors: ["gridX","Thermondo","Tado","Viessmann One","Siemens Smart Infrastructure"],
        items: [
          {
            id: "L3-DIGITAL-PLATTFORM-01", title: "HEMS / EMS-Plattform (B2B2C)",
            definition: "gridX (München, 2017) verkauft ein Energy Management System: (1) Hardware-Gateway (gridBox: kommuniziert via Modbus, SunSpec, OCPP, EEBUS mit PV-Wechselrichter, Batterie, Wärmepumpe, EV-Lader). (2) Cloud-Plattform für Optimierungsalgorithmen. B2B2C: Stadtwerke, Installateure, OEMs zahlen SaaS-Lizenz; Endverbraucher nutzen das System. Erlösstruktur: Hardware-Marge (~40%) + monatliche SaaS-Lizenz (15–50 €/Gerät/Monat).",
            wertschoepfung: "Plattform-Netzwerkeffekte: Jeder neue Hersteller-Protokoll-Support erhöht den Wert für alle Nutzer. API-Ökosystem: >200 Integrationen (HEMS, MSB, VNB §14a, eMSP). VPP-Aggregation als Zusatzerlös für Betreiber. Switching-Kosten nach Installation hoch.",
            herausforderungen: "Protokoll-Fragmentierung: 50+ Standards in der Gebäudeautomation. §14a-Implementierung ist Chance und Herausforderung. DSGVO schränkt Nutzung hochauflösender Daten ein. Hardware-Marge sinkt durch Commodity-Wettbewerb.",
            ausblick: "HEMS wird Pflicht-Infrastruktur für §14a-Compliance und dynamische Tarife. gridX positioniert sich als 'Betriebssystem der Energiewende'. Konvergenz mit Smart-Home-Plattformen (Apple HomeKit, Matter) als Herausforderung.",
            erloesmodell: "Hardware-Marge + SaaS-Abo (€/Gerät/Monat) + API-Zugang",
            regulierung: "EnWG §14a, MsbG, BSI TR-03109, DSGVO",
            kundensegment: "B2B2C: Stadtwerke, Installateure → Prosumer-Endkunden",
            differenzierung: "Integrationsbreite (200+ Hersteller), API-Offenheit, VPP-Anbindung, §14a-Readiness",
            status: "aktiv",
            radar: { regulierung:1, skalierbarkeit:5, marktrisiko:1, digitalisierung:5, wettbewerb:4, nachhaltigkeit:4 },
            erloesTyp: "Subscription", akteure: ["gridX","Loxone","SMA","Solarwatt","Viessmann"]
          },
          {
            id: "L3-DIGITAL-PLATTFORM-02", title: "Wärmepumpen-Contracting (as-a-Service)",
            definition: "Thermondo (2012, Berlin) bietet Wärmepumpen auf Mietbasis an: keine Anschaffungskosten (WP: 15.000–35.000 €), stattdessen monatliche Rate (150–350 €/Monat inkl. Wartung). Thermondo trägt Investitions-, Technologie- und Wartungsrisiko. Refinanzierung über 15–20 Jahre Raten. BEG-Förderung (35–50%) wird im Kundenauftrag beantragt. Installationsnetzwerk: >1.500 zertifizierte Partnerinstallateure bundesweit.",
            wertschoepfung: "Finanzierung ist Kernwert: Kunden ohne Eigenkapital können Wärmewende vollziehen. Thermondo verdient Marge zwischen Barwert aller Raten und (Anschaffungs- + Wartungskosten). GEG Heizungsgesetz: Pflicht zur Umrüstung bei Heizungstausch ab 2026 (65% EE-Anteil) treibt Nachfrage. BEG-Förderoptimierung als Kompetenz.",
            herausforderungen: "Fachkräftemangel bei Heizungsinstallateuren ist Wachstumshürde #1. Technologierisiko: WP-Marktpreis fällt – Mietrate muss wettbewerbsfähig bleiben. Finanzierung über 15+ Jahre erfordert solide Bilanz oder Verbriefung der Forderungsportfolien.",
            ausblick: "GEG + WPG treiben Millionen Heizungstausche bis 2030. Markt für Wärme-Contracting könnte >10 Mrd. €/Jahr in Deutschland erreichen. Kombination mit Energie-Liefervertrag (Strom für WP) als Full-Service-Paket. Digitale Optimierung: automatische BEG-Antragstellung, Smart-Grid-Integration.",
            erloesmodell: "Monatliche Mietrate + Wartungsvertrag + optional Energielieferung",
            regulierung: "BGB (Mietrecht), GEG (Heizgesetz, 65% EE ab 2026), BEG-Förderung, WPG",
            kundensegment: "B2C Eigenheimbesitzer (Heizungstausch-Pflicht GEG)",
            differenzierung: "Kein Eigenkapital nötig, BEG-Optimierung, Full-Service, Installationsnetzwerk",
            status: "aktiv",
            radar: { regulierung:1, skalierbarkeit:3, marktrisiko:2, digitalisierung:3, wettbewerb:3, nachhaltigkeit:5 },
            erloesTyp: "Subscription", akteure: ["Thermondo","Viessmann","Vaillant","ista"]
          },
          {
            id: "L3-DIGITAL-BERATUNG-01", title: "ESG-Datenplattform & CSRD-Reporting",
            definition: "CSRD (Corporate Sustainability Reporting Directive): Berichtspflicht nach ESRS-Standards für >500 MA ab 2024, >250 MA ab 2025. ESRS E1 (Klimawandel): Scope 1, Scope 2 (marktbasiert + standortbasiert), Scope 3 (Lieferkette). Softwareplattformen (Engie Impact, Schneider EcoStruxure, Sphera, measurabl) aggregieren Energiedaten aus SAP/Oracle, IoT-Sensoren, Zählern und berechnen CO₂-Fußabdrücke nach GHG Protocol. Output: extern auditierbare CSRD-konforme Berichte. SaaS: 30.000–300.000 €/Jahr je Unternehmensgröße.",
            wertschoepfung: "Regulatory Push = erzwungene Nachfrage ohne freiwillige Kaufentscheidung → sehr hohe Zahlungsbereitschaft. Switching-Kosten: historische Daten in Plattform migriert, Wechsel teuer. Erweiterungspotenzial: von Reporting zu aktivem Energiemanagement und Beschaffungsoptimierung.",
            herausforderungen: "Markt hochkompetitiv: >100 Anbieter, von Excel-Add-ins bis zu SAP-Suiten. ESRS-Standards wurden spät finalisiert – Anbieter nachrüsten laufend. Abgrenzung zu SAP Sustainability Footprint Management als etabliertem Player schwierig.",
            ausblick: "CSRD-Ausweitung auf alle Unternehmen >10 MA langfristig möglich. AI-gestützte Rechnungsanalyse automatisiert Datenerfassung. EU-Datenraum Energie (Gaia-X) schafft standardisierten Datenaustausch. 24/7 CFE-Matching als neuer Scope-2-Standard treibt Plattform-Nachfrage.",
            erloesmodell: "SaaS-Jahresabo (30.000–300.000 €) + Implementierungsdienstleistung",
            regulierung: "CSRD, ESRS E1 (Klimawandel), EU-Taxonomieverordnung, GHG Protocol",
            kundensegment: "B2B Unternehmen mit CSRD-Berichtspflicht (>250 MA ab 2025)",
            differenzierung: "CSRD-Konformität, Scope-3-Datentiefe, ERP-Konnektoren, Auditierbarkeit",
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
            definition: "Fernwärme: natürliches Netzmonopol, ~25.000 km Netze in Deutschland, 14% Wärmebedarf gedeckt. Preisgestaltung bisher weitgehend frei (GWB §19-Missbrauchskontrolle). WPG (Wärmeplanungsgesetz 2024): Kommunen >100.000 EW müssen bis 2026, alle bis 2028 Wärmepläne erstellen. GWB §35b (ab 2024): Fernwärmeversorger müssen Dekarbonisierungsfahrplan vorlegen und bis 2030 mindestens 50% EE-Anteil nachweisen.",
            wertschoepfung: "Monopolmarge auf Wärmepreis als historische Hauptquelle. Wert liegt in Netzinfrastruktur (Replacement Value: 1.000–3.000 €/kW) und Wärmedichtegebieten. WPG schafft Planungssicherheit für Investitionen: Wo Fernwärme im Wärmeplan vorgesehen ist, sind Kapitalinvestitionen gesichert.",
            herausforderungen: "Dekarbonisierungspflicht GWB §35b erfordert massive Investitionen in neue Wärmequellen (Großwärmepumpen, Geothermie, Abwärme). Preistransparenz-Pflicht (Fernwärme-Verordnung 2024) erhöht Kundendruck. GEG macht individuelle Wärmepumpen attraktiver – Fernwärme muss preislich mithalten.",
            ausblick: "WPG-Wärmepläne definieren Investitionskorridore bis 2028. Transformationsquellen: Abwärme (Rechenzentren, Industrie), Großwärmepumpen (Flusswasser, Abwasser, Geothermie), grüner Wasserstoff. Vattenfall Berlin als Pionier: 'Kohlefreie Wärme Berlin bis 2030'. Geothermie (München: 100% Geothermie-Fernwärme bis 2040) als Vorbild.",
            erloesmodell: "Wärmepreis (Grundpreis + Arbeitspreis) + CO₂-Aufschlag",
            regulierung: "AVBFernwärmeV, GWB §19/§35b, WPG (2024), KWKG, GEG",
            kundensegment: "B2C/B2B im Fernwärmegebiet (Monopol, keine Wahlfreiheit)",
            differenzierung: "Dekarbonisierungspfad (50% EE bis 2030), Preisstabilität, Netzausdehnung",
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
            definition: "Elektrolyseure (PEM: 60–70% Effizienz; Alkalisch: 70–80%) wandeln EE-Strom in Wasserstoff. Bei 70% Wirkungsgrad und 40 €/MWh Strom: H2-Gestehungskosten ~2,7 €/kg. Marktpreis grüner H2 (2024): 6–10 €/kg. Subventionslücke: 3–7 €/kg, gedeckt durch IPCEI Hydrogen, H2Global, Bundeshaushalt. Abnehmer: Stahl (DRI: thyssenkrupp, ArcelorMittal), Ammoniaksynthese (BASF), Raffinerien, H2-LKW (Daimler Truck, Nikola). Volllaststunden: 4.000–8.000 h/a je nach EE-Strategie.",
            wertschoepfung: "Heute: Subventions-Arbitrage – wer günstigste Fördermittel sichert, gewinnt. Langfristig (2030+): Skaleneffekte in Elektrolyse-Produktion (Lernrate ~15%/Verdopplung). Strategischer Systemwert: Elektrolyseur als flexibler Großverbraucher für Demand Response bei negativen Preisen – doppelt nutzbar.",
            herausforderungen: "Keine Wettbewerbsfähigkeit ohne Subventionen heute. Lieferkette noch nicht industrialisiert (Iridium-Knappheit für PEM). Zertifizierungsinfrastruktur (CertifHy, EU Delegated Acts zu RED III Artikel 27) noch im Aufbau. H2-Transportnetz (H2-Kernnetz) erst ab 2028–2032 verfügbar.",
            ausblick: "Kostenparität mit grauem H2 (~1,5–2 €/kg) ca. 2030–2035 bei günstigen EE-Preisen. Import-H2 aus Nordafrika/ME könnte günstiger als Inlandselektrolyse sein – Deutschland als H2-Importeur? H2 für Stahl (DRI), Chemie (Ammoniak), Schwerverkehr als Priorität-Absatzmärkte.",
            erloesmodell: "Wasserstoffverkaufspreis (€/kg) minus Stromkosten minus Capex-Annuität",
            regulierung: "EU RED III (Erneuerbarkeits-Kriterien, Art. 27), IPCEI, H2Global-Ausschreibungen",
            kundensegment: "B2B Stahlindustrie, Chemie, H2-Mobilität (LKW, Bahn, Schiff)",
            differenzierung: "Standort (nahe günstiger EE), Elektrolyseur-Effizienz, CertifHy-Zertifizierung, Netzanschluss",
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
    { id:"TL-2023-04", title:"CSRD tritt in Kraft", desc:"Corporate Sustainability Reporting Directive: Berichtspflicht für >500 MA ab 2024, >250 MA ab 2025. Treibt ESG-Datenplattform-Markt.", domains:["L1-DIGITAL"], tags:["ESG","Reporting"] },
    { id:"TL-2023-05", title:"Wärmeplanungsgesetz (WPG) beschlossen", desc:"Kommunen >100.000 EW müssen bis 2026, alle bis 2028 kommunale Wärmepläne erstellen.", domains:["L1-WAERME"], tags:["Wärme","Kommunal"] }
  ]},
  { year: 2024, events: [
    { id:"TL-2024-01", title:"§14a EnWG: Steuerbare Verbrauchseinrichtungen", desc:"DSOs dürfen WP, EV-Lader, Speicher bei Netzengpässen auf 4,2 kW dimmen. 20% Netzentgeltnachlass für Kunden.", domains:["L1-VNB","L1-DIGITAL"], tags:["DSO","Flexibilität"] },
    { id:"TL-2024-02", title:"H2-Kernnetz genehmigt (BNetzA)", desc:"9.700 km Wasserstoff-Kernnetz genehmigt. Amortisationskontomodell als Finanzierungsrahmen.", domains:["L1-GAS"], tags:["Wasserstoff","Infrastruktur"] },
    { id:"TL-2024-03", title:"EU Green Bond Standard (EuGB) in Kraft", desc:"Einheitlicher Standard mit Taxonomie-Konformitätsprüfung und obligatorischem Impact Reporting.", domains:["L1-FINANZ"], tags:["Green Finance","Taxonomie"] },
    { id:"TL-2024-04", title:"MaBiS-Reform BK6-24-174", desc:"Neue Marktkommunikationsregeln für Bilanzkreismanagement. API-basierter Datenaustausch ersetzt EDIFACT schrittweise bis 2027.", domains:["L1-UNB","L1-VERTRIEB"], tags:["MaBiS","Marktkommunikation"] }
  ]},
  { year: 2025, events: [
    { id:"TL-2025-01", title:"Smart Meter Rollout-Pflicht (>6.000 kWh/a)", desc:"Alle Verbrauchsstellen >6.000 kWh/a müssen mit iMSys ausgestattet sein. Grundlage für dynamische Tarife.", domains:["L1-VNB","L1-DIGITAL"], tags:["Smart Meter","Rollout"] },
    { id:"TL-2025-02", title:"EnWG §41b: Dynamische Tarife Pflicht", desc:"Alle Versorger >200.000 Kunden müssen stündliche EPEX-basierte Tarife anbieten. Tibber/aWATTar-Modell wird Massenmarkt.", domains:["L1-VERTRIEB"], tags:["Dynamische Tarife","Lieferant"] },
    { id:"TL-2025-03", title:"AFID HPC-Pflicht TEN-T Kernnetz", desc:"Mindestens 150 kW Ladekapazität alle 60 km auf TEN-T-Kernnetz vollständig umgesetzt.", domains:["L1-EMOB"], tags:["eMobility","HPC"] },
    { id:"TL-2025-04", title:"CSRD: Unternehmen >250 Mitarbeiter", desc:"Erweiterung auf >250 MA. ESRS E1 Klimastandard verpflichtend. Starker Boost für ESG-Datenplattformen.", domains:["L1-DIGITAL"], tags:["CSRD","ESG"] }
  ]},
  { year: 2026, events: [
    { id:"TL-2026-01", title:"WPG: Kommunale Wärmepläne >100.000 EW (Frist)", desc:"Alle Kommunen >100.000 EW müssen Wärmepläne vorgelegt haben. Entscheidet über Fernwärme-Ausbaukorridore.", domains:["L1-WAERME"], tags:["Wärme","Kommunal"] },
    { id:"TL-2026-02", title:"EU EMD: Neues Elektrizitätsmarkt-Design", desc:"Terminkontrakte für EE-Erzeuger, stärkere Nachfrageflexibilität, V2G-Pflicht für neue Wallboxen ab 2027 verankert.", domains:["L1-AGG","L1-EMOB","L1-VERTRIEB"], tags:["Marktdesign","Flexibilität"] },
    { id:"TL-2026-03", title:"GEG: 65% EE-Pflicht bei Heizungstausch", desc:"Beim Heizungsaustausch muss die neue Anlage zu mindestens 65% mit EE betrieben werden. Wärmepumpen-Boom.", domains:["L1-WAERME","L1-DIGITAL"], tags:["GEG","Wärmepumpe"] }
  ]},
  { year: 2027, events: [
    { id:"TL-2027-01", title:"V2G-Pflicht: Neue Wallboxen bidirektional", desc:"EU EMD Art. 20: Alle neu installierten privaten und gewerblichen Wallboxen müssen V2G-fähig sein.", domains:["L1-EMOB","L1-AGG"], tags:["V2G","eMobility"] },
    { id:"TL-2027-02", title:"MaBiS 2.0: API-Vollbetrieb", desc:"Vollständige Umstellung des Bilanzkreismanagements auf API-basierte Echtzeitkommunikation. EDIFACT abgelöst.", domains:["L1-UNB","L1-VERTRIEB"], tags:["MaBiS","IT"] }
  ]},
  { year: 2028, events: [
    { id:"TL-2028-01", title:"WPG: Alle Kommunen Wärmepläne (Frist)", desc:"Alle deutschen Kommunen müssen Wärmepläne vorliegen haben. Umsetzungsphase beginnt.", domains:["L1-WAERME"], tags:["Wärme","WPG"] },
    { id:"TL-2028-02", title:"SuedLink & SuedOstLink: Inbetriebnahme", desc:"Beide HGÜ-Corridore (SuedLink 5 Mrd. €, SuedOstLink 3 Mrd. €) sollen bis 2028 operativ sein. Löst Nord-Süd-Engpass.", domains:["L1-UNB"], tags:["Netzausbau","HGÜ"] },
    { id:"TL-2028-03", title:"EEG-Auslauf erste Altanlagen (Repowering-Welle)", desc:"Erste Windanlagen aus 2000–2005 laufen aus 20-j. EEG-Förderung aus. Repowering oder Merchant-Betrieb.", domains:["L1-ERZ","L1-PROJ"], tags:["EEG-Auslauf","Repowering"] }
  ]},
  { year: 2030, events: [
    { id:"TL-2030-01", title:"80% Erneuerbare im Strommix (Ziel)", desc:"Nationales Ziel: 215 GW Solar, 115 GW Wind onshore, 30 GW Wind offshore.", domains:["L1-ERZ","L1-PROJ"], tags:["Energiewende","Ziel"] },
    { id:"TL-2030-02", title:"CBAM: Vollständige Implementierung", desc:"Carbon Border Adjustment Mechanism vollständig in Kraft. Emissionsintensive Importe zahlen CO₂-Preis.", domains:["L1-HANDEL"], tags:["CBAM","CO₂"] },
    { id:"TL-2030-03", title:"H2-Kernnetz: Erste Korridore operativ", desc:"Nordsee-Ruhrgebiet H2-Korridor operativ. H2-Netzentgelte greifen. Europäische EHB-Verknüpfung in Aufbau.", domains:["L1-GAS","L1-WAERME"], tags:["Wasserstoff","H2-Netz"] }
  ]},
  { year: 2032, events: [
    { id:"TL-2032-01", title:"H2-Kernnetz vollständig operativ", desc:"9.700 km H2-Kernnetz vollständig in Betrieb. Verknüpfung mit European Hydrogen Backbone.", domains:["L1-GAS","L1-WAERME","L1-PROJ"], tags:["Wasserstoff","H2-Backbone"] },
    { id:"TL-2032-02", title:"WindBG: 2%-Flächenziel aller Länder (Frist)", desc:"Alle Bundesländer müssen 2% Landesfläche für Windenergie ausgewiesen haben.", domains:["L1-ERZ","L1-PROJ"], tags:["Wind","Fläche"] }
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
            ausblick: "Dynamische Tarife (§41b EnWG) schaffen neues Vergleichsbedürfnis: Kunden wollen nicht mehr Jahrespreise, sondern Smart-Tarife mit Automatisierung vergleichen. Verivox und Check24 müssen Produktkatalog von 'Preis/kWh' auf 'Ökosystem-Funktionen' erweitern. B2B-Segment (KMU-Tarifvergleich) als Wachstumsfeld. Integration von Wärme, Solar, Wallbox als Bündelvergleich.",
            angreifbarkeit: "Verivox/Check24 greifen selbst die Vollversorger-Marge an, sind dabei aber auf eigener Ebene angreifbar: (1) Neolieferanten, die bewusst nicht auf Vergleichsportalen listen und stattdessen über Direct-to-Consumer-Marketing wachsen (Tibber-Modell), umgehen die CPA-Abhängigkeit vollständig; (2) automatisierte Wechseldienste (vgl. L3-VERGL-B2C-02) übernehmen die Kundenbeziehung dauerhaft und brauchen Portale nur noch zur Erstvermittlung, danach optimieren sie selbst weiter; (3) regulatorischer Druck (BNetzA-Diskussion zu Ranking-Transparenz, P2B-VO) zielt direkt auf das Geschäftsmodell 'bezahlte Sichtbarkeit statt neutraler Vergleich'.",
            erloesmodell: "CPA (Cost per Acquisition): 20–150 €/vermitteltem Neukunden je Produkt",
            regulierung: "UWG (unlauterer Wettbewerb), P2B-VO (EU-Plattformverordnung), EnWG §41 (Preistransparenz)",
            kundensegment: "B2C Haushaltskunden (primär); B2B KMU (wachsend)",
            differenzierung: "Marktabdeckung, Wechseladministration, UX/Conversion-Rate, Datenqualität",
            status: "aktiv",
            radar: { regulierung:2, skalierbarkeit:5, marktrisiko:1, digitalisierung:5, wettbewerb:4, nachhaltigkeit:1 },
            erloesTyp: "Fee-based",
            akteure: ["Verivox","Check24 Energie","Toptarif","Wechselpilot"]
          },
          {
            id: "L3-VERGL-B2C-02", title: "Automatischer Tarifwechsel (Wechselpilot-Modell)",
            definition: "Eine Weiterentwicklung des klassischen Portals: Wechselpilot und ähnliche Dienste übernehmen den Tarifwechsel nicht nur einmalig, sondern automatisch jedes Jahr — der Kunde gibt eine Vollmacht, der Dienst optimiert kontinuierlich. Erlösmodell: Abo (4–6 €/Monat) oder Erfolgsprovision (Anteil der erzielten Ersparnis). Kunden sparen im Durchschnitt 80–150 €/Jahr durch jährlich optimierten Tarif. Technologiebasis: automatisierter GPKE-Wechselprozess, Preismonitoring-Algorithmus, Vollmachtsmanagement.",
            wertschoepfung: "Recurring Revenue durch Abo-Modell statt einmaliger CPA. Kundenbindung strukturell höher als bei klassischen Portalen (Kunden geben Vollmacht ab). Wechsel-Commoditisierung: Prozess wird so einfach, dass Kunden nie mehr selbst vergleichen müssen. Datenasset: vollständige Verbrauchshistorie + Tarifwechselhistorie als Basis für Upselling.",
            herausforderungen: "Regulatorisches Risiko: Vollmachts-Modell ist regulatorisch komplex (Wer ist Vertragspartner?). Energiepreisvolatilität: Bei stark schwankenden Preisen kann automatischer Wechsel für Kunden nachteilig sein. Vertrauen: Kunden müssen bereit sein, Kontrolle vollständig abzugeben.",
            ausblick: "Automatischer Wechsel entwickelt sich zu 'Energy-as-a-Service light': nicht nur Tarif, sondern auch dynamische Steuerung, Herkunftsoptimierung (Grünstrom), Solar-Anbindung. Konvergenz mit Tibber-Modell: automatischer Tarif + automatische Last-Steuerung.",
            erloesmodell: "Abo-Gebühr (€/Monat) oder Erfolgsprovision (% der Ersparnis)",
            regulierung: "BGB (Vollmacht, §167ff.), UWG, DSGVO",
            kundensegment: "B2C preissensible Haushalte mit geringer Wechselbereitschaft",
            differenzierung: "Vollautomatisierung, Vollmachtsmanagement, Kundenkommunikation, Vertrauen",
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
        actors: ["energie.de","Energie2Day","Rabot Charge","Energiekonzepte Deutschland","next energy (B2B)"],
        items: [
          {
            id: "L3-VERGL-B2B-01", title: "B2B-Energieausschreibungsplattform",
            definition: "Für gewerbliche und industrielle Kunden ab ~50 MWh/Jahr ist der Energieeinkauf ein professioneller Beschaffungsprozess. Plattformen wie energie.de, Energie2Day oder spezialisierte Broker koordinieren Ausschreibungen: Kunde stellt Lastprofil und Anforderungen ein, Lieferanten geben Angebote ab, Plattform wertet aus. Erlösmodell: Brokergebühr (0,01–0,05 ct/kWh auf vermitteltes Volumen) oder Pauschale pro Ausschreibung (500–5.000 €). Daneben gibt es energieberatungsbasierte Modelle: Berater begleitet den gesamten Beschaffungsprozess gegen Beratungshonorar.",
            wertschoepfung: "Preistransparenz im intransparenten B2B-Markt: KMU ohne eigene Energieabteilung erzielen durch Ausschreibung 5–15% Kosteneinsparung gegenüber Direktverhandlung. Plattform verdient an beiden Seiten: Lieferanten zahlen für Zugang zu qualifiziertem Volumen, Kunden für Zeitersparnis und Preisoptimierung. Skalierung durch Volumen-Bündelung: mehrere KMU als Pool erhöhen Verhandlungsmacht.",
            herausforderungen: "Vertrauensproblem: Kunden unsicher, ob Plattform wirklich im Kundeninteresse agiert oder primär Provisionsoptimierung betreibt. Komplexität: Industrietarife mit Lastspitzen, Bandlieferungen, Strukturprodukten lassen sich nicht einfach digital abbilden. Wettbewerb durch direkte Lieferantenansprache und Energieberater.",
            ausblick: "Digitalisierung des B2B-Energieeinkaufs schreitet voran: API-Integration in ERP-Systeme (SAP Ariba, Coupa) für automatisierte Energiebeschaffung. PPA-Plattformen (für Corporate PPAs) als nächste Kategorie. Grünstrom-Ausschreibungen (HKN-Qualität, 24/7 CFE) als neues Differenzierungsfeld.",
            erloesmodell: "Brokergebühr (ct/kWh auf vermitteltes Volumen) oder Ausschreibungspauschale",
            regulierung: "UWG, EnWG §42a (Lieferverträge Industrie), REMIT (ab 1 MWh)",
            kundensegment: "B2B KMU, Mittelstand, öffentliche Hand (>50 MWh/Jahr)",
            differenzierung: "Lieferantenbreite, Prozessdigitalisierung, Transparenz, Beratungskompetenz",
            status: "aktiv",
            radar: { regulierung:2, skalierbarkeit:4, marktrisiko:1, digitalisierung:4, wettbewerb:3, nachhaltigkeit:2 },
            erloesTyp: "Fee-based",
            akteure: ["energie.de","Energie2Day","Energiekonzepte Deutschland","next energy"]
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
            definition: "McKinsey, BCG, Bain und Strategy& beraten Energiekonzerne, ÜNBs, Stadtwerke und Infrastrukturfonds bei strategischen Grundsatzfragen: Portfoliotransformation (Kohleausstieg → EE-Portfolio), M&A-Strategie, Regulierungspositionierung, Markteintrittsstrategie neue Geschäftsfelder. Typische Projektgrößen: 500.000 – 5 Mio. € pro Mandat. Erlösmodell: Tagessatz-basiert (Partner: 5.000–12.000 €/Tag, Senior-Level: 2.500–5.000 €/Tag) oder Pauschalmandat. Zugang: C-Suite-Relationships, langjährige Rahmenverträge mit großen Versorgern.",
            wertschoepfung: "Wert entsteht durch drei Hebel: (1) Externe Perspektive und Benchmarks — Energieunternehmen zahlen für Vergleichsdaten aus 50+ Projekten weltweit. (2) Politische Legitimation — externe Empfehlung einer Top-Tier-Beratung erleichtert interne Entscheidungsdurchsetzung. (3) Talentpool — Berater als temporäre Verstärkung bei Strategieprojekten ohne Personalbindung. Hohe Wiederkaufsrate bei etablierten Kunden (>70% Umsatz mit Bestandskunden).",
            herausforderungen: "Reputationsrisiko bei falschen Empfehlungen (z.B. Beratung zu aggressiven Gasinvestitionen kurz vor Preiskrise). Abhängigkeit von wenigen Schlüsselkunden: Energiesektor ist oligopolistisch, Kundenverlust trifft hart. Nachwuchsproblem: junge Berater bevorzugen Tech-Beratung über klassische Energieprojekte. Preissensitivität bei öffentlichen Auftraggebern (ÜNBs, kommunale Stadtwerke).",
            ausblick: "Energiewende-Komplexität treibt Beratungsnachfrage: Regulierungsreformen (EU EMD, WPG, CSRD, H2-Regulierung), Transformationsprojekte (Kohle → EE, Gas → H2), M&A-Welle (Stadtwerk-Konsolidierung). KI-gestützte Beratung (Szenariomodellierung, Regulierungsanalyse) verändert Projektmethodik. Spezialisierung auf Energiewende als Wachstumssegment.",
            erloesmodell: "Tagessatz-basiert (Partner 5.000–12.000 €/Tag) oder Pauschalmandat",
            regulierung: "Keine spezifische Energieregulierung; allgemein BGB (Dienstvertrag), GWB (Vergaberecht bei öffentlichen Auftraggebern)",
            kundensegment: "C-Suite Energiekonzerne, ÜNBs, Infrastrukturfonds, kommunale Versorger",
            differenzierung: "Sektorspezialisierung, Benchmarkdatenbank, C-Suite-Zugang, Internationales Netzwerk",
            status: "aktiv",
            radar: { regulierung:1, skalierbarkeit:3, marktrisiko:1, digitalisierung:3, wettbewerb:4, nachhaltigkeit:3 },
            erloesTyp: "Fee-based",
            akteure: ["McKinsey Energy","BCG Energy","Bain","Strategy&","Oliver Wyman"]
          },
          {
            id: "L3-BERAT-STRAT-02", title: "IT- & Digitaltransformation (Capgemini Invent, Accenture)",
            definition: "IT- und Digitalberatung für Energieunternehmen umfasst: SAP S/4HANA-Migrationen (Ablösung von SAP IS-U in Stadtwerken), Cloud-Transformationen (AWS/Azure für SCADA, EMS, Kundensysteme), Data Architecture & Analytics (Energiedaten-Plattformen, Real-Time-Datenverarbeitung), Cybersecurity (KRITIS, NIS2, OT-Sicherheit für Netzleittechnik) sowie Prozessdigitalisierung (Marktkommunikation, MaBiS 2.0, SMGW-Integration). Capgemini Invent, Accenture Energy und IBM Energy positionieren sich als integrierte IT/Strategie-Anbieter — Kombination aus Strategie-Know-how und technischer Umsetzungskompetenz.",
            wertschoepfung: "Differenzierungsvorteil durch End-to-End-Kompetenz: Strategieberatung + IT-Architektur + Implementierung aus einer Hand. Langfristige Kundenbeziehungen durch mehrjährige Transformationsprogramme (SAP-Migration: 3–7 Jahre). Proprietary Acceleratoren (vorgefertigte SAP-Templates, Regulierungsmodule) senken Implementierungszeit und erhöhen Marge. Nearshore/Offshore-Delivery reduziert Kostenstruktur gegenüber reinen Top-Tier-Beratern.",
            herausforderungen: "Projektrisiken bei komplexen IT-Transformationen (Budgetüberschreitungen, Terminverzüge bei SAP-Migrationen sind Branchenstandard). Wettbewerb durch große System Integratoren (Accenture, IBM, Infosys) und spezialisierte Boutiquen. Fachkräftemangel: SAP IS-U-Experten sind rar und teuer. Künstliche Intelligenz disruptiert klassische Beratungsleistungen.",
            ausblick: "KI-Integration in Energiesysteme (ML-basierte Netzplanung, automatisierte Bilanzkreisführung, predictive maintenance) als Wachstumsfeld. Cloud-native Energiedaten-Plattformen ersetzen On-Premise-Systeme. SMGW-Datenintegration und §14a-Implementierung als neue Projektfelder für IT-Berater.",
            erloesmodell: "Tagessatz + Lizenzen (Accelerator-Tools) + Managed Services (laufende Betreuung)",
            regulierung: "KRITIS-Regulierung (BSI-Gesetz §8a), NIS2-Richtlinie, DSGVO",
            kundensegment: "ÜNBs, VNBs, Stadtwerke, Energielieferanten (IT-Abteilungen und C-Suite)",
            differenzierung: "SAP IS-U/S4HANA-Expertise, Energieregulatierungs-Know-how, Nearshore-Effizienz, Accelerator-Tools",
            status: "aktiv",
            radar: { regulierung:2, skalierbarkeit:4, marktrisiko:1, digitalisierung:5, wettbewerb:4, nachhaltigkeit:2 },
            erloesTyp: "Fee-based",
            akteure: ["Capgemini Invent","Accenture Energy","IBM Energy","msg systems","adesso"]
          },
          {
            id: "L3-BERAT-STRAT-03", title: "Regulierungsberatung & Behördeninteraktion",
            definition: "Spezialisierte Boutiquen und Abteilungen großer Häuser (Roland Berger Regulatory, Frontier Economics, Nera Economic Consulting, Oxera) begleiten Energieunternehmen in Regulierungsverfahren: ARegV-Antragsverfahren (Erlösobergrenze, Effizienzvergleich), BNetzA-Festlegungsverfahren (Kommentare, Anhörungen), EU-Gesetzgebungsprozesse (Stellungnahmen zu EMD, RED III, CSRD). Außerdem: Regulatorisches Benchmarking (wie schlagen sich ÜNBs/VNBs im BNetzA-Benchmarking?), Szenarioanalysen für neue Regulierungsrahmen (H2-Regulierung, §14a-Weiterentwicklung).",
            wertschoepfung: "Ein gut vorbereiteter ARegV-Antrag kann für einen mittelgroßen VNB den Unterschied von 5–15 Mio. €/Jahr in der Erlösobergrenze ausmachen — ROI für Regulierungsberatung ist extrem hoch. Zugang zu regulatorischem Netzwerk (ehemaliger BNetzA-Mitarbeiter als Berater) als Differenzierungsmerkmal. Frühzeitige Positionierung in EU-Gesetzgebungsprozessen schafft strategischen Vorteil.",
            herausforderungen: "Kleiner Markt: Nur ~50 Netzbetreiber, die wirklich in Regulierungsberatung investieren. Stark personenabhängig: Reputation einzelner Experten entscheidend. Regulatorisches Umfeld ändert sich schnell — Berater müssen kontinuierlich Wissen aufbauen.",
            ausblick: "H2-Regulierung (neues Regulierungsregime für H2-Netzentgelte), Flexibilitätsmärkte (§14a-Weiterentwicklung), EU EMD-Umsetzung in nationales Recht als Wachstumsfelder. Intersektionale Regulierungsberatung (Strom + Gas + Wärme + H2 als integriertes System) gewinnt an Bedeutung.",
            erloesmodell: "Tagessatz (Experten-Level: 2.000–6.000 €/Tag) + Erfolgshonorar bei ARegV-Verfahren",
            regulierung: "ARegV, StromNEV, GasNEV, EnWG, EU-Regulierungsrahmen (ACER)",
            kundensegment: "ÜNBs, VNBs, FNB Gas, Energiekonzerne (Regulatory Affairs)",
            differenzierung: "BNetzA-Netzwerk, ARegV-Expertise, ökonomische Modellierungskompetenz",
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
            definition: "Becker Büttner Held (BBH, München/Berlin) ist Deutschlands führende Energierechtskanzlei mit ~200 Anwälten und Schwerpunkten auf Netzregulierung (ARegV, StromNEV, GasNEV), Konzessionsrecht (§46 EnWG — Neukonzessionierung von Stromnetzen alle 20 Jahre), Vergaberecht für kommunale Energieprojekte, Beihilferecht (EEG-Beihilfeprüfung durch EU-Kommission) und Energievertragsrecht (PPA, EPC, O&M). Daneben: internationale Großkanzleien (Freshfields, Norton Rose Fulbright, Linklaters) für Cross-Border-Transaktionen, M&A, Projektfinanzierungen. Stundensätze: 300–700 € (Senior Associates), 600–1.500 € (Partner).",
            wertschoepfung: "Energierecht ist eines der komplexesten deutschen Rechtsgebiete — Schnittstelle von EU-Recht, nationalem Energierecht, Kartellrecht, Umweltrecht, Verwaltungsrecht. Spezialisierung schützt Margen. Konzessionsverfahren (§46 EnWG) sind Einzel-Mandate von 200.000–2 Mio. €. PPA-Vertragsgestaltung (10–15 Jahre Laufzeit, hohe Haftungsrisiken) ist lukratives Feld. Regulatorische Unsicherheit der Energiewende generiert kontinuierliche Beratungsnachfrage.",
            herausforderungen: "Top-Talente gehen zu In-House-Teams der Energiekonzerne (bessere Work-Life-Balance, attraktive Gehälter). Internationalisierung: Deutsche Energierechtler verlieren Mandate an internationale Großkanzleien bei grenzüberschreitenden Deals. Disruption durch Legal Tech (Contract-Review-KI senkt Stunden für Vertragsanalyse).",
            ausblick: "Wachstumsfelder: H2-Recht (neues Regulierungsregime, H2-Kernnetz-Verträge), EU EMD-Umsetzung, V2G-Vertragsrecht, Energy Community-Recht (EU EMD Art. 16ff.), PPA-Standardisierung. Zunehmend interdisziplinär: Energierecht + Datenschutzrecht (Smart Meter, SMGW) + KI-Regulierung (autonome Energiesysteme).",
            erloesmodell: "Stundensatz (300–1.500 €/h je Erfahrungsgrad) + Erfolgshonorare (§49b BRAO begrenzt)",
            regulierung: "EnWG, EU-Energierecht, BRAO (Anwaltsrecht), RVG (Vergütung)",
            kundensegment: "ÜNBs, VNBs, Stadtwerke, Energiekonzerne, Projektentwickler, Infrastrukturfonds",
            differenzierung: "§46-Konzessionsexpertise, ARegV-Verfahrenskenntnisse, EU-Beihilferecht, Netzwerk bei BNetzA/Bundeskartellamt",
            status: "aktiv",
            radar: { regulierung:4, skalierbarkeit:2, marktrisiko:1, digitalisierung:2, wettbewerb:3, nachhaltigkeit:2 },
            erloesTyp: "Fee-based",
            akteure: ["Becker Büttner Held (BBH)","Freshfields","Norton Rose Fulbright","Linklaters","Noerr","Hogan Lovells"]
          },
          {
            id: "L3-RECHT-KANZLEI-02", title: "Konzessionsrecht & kommunale Netzübernahme (§46 EnWG)",
            definition: "§46 EnWG ist eines der lukrativsten Spezialgebiete des Energierechts: Strom- und Gasverteilnetze werden alle 20 Jahre neu konzessioniert — Kommunen schreiben die Nutzungsrechte für ihre Netzinfrastruktur aus. Bieter (meist bestehender VNB oder kommunales Stadtwerk) müssen umfangreiche Unterlagen einreichen (Netzentwicklungsplan, Betriebskonzept, Investitionsplan). Streitwerte: Netzwert eines mittelgroßen VNB = 100–500 Mio. €. Konzessionsstreitigkeiten werden vor OLG und BGH ausgetragen — jahrelange Prozesse. Kanzleien wie BBH, Rödl & Partner, Bietlein begleiten Bieterseite und Kommunen.",
            wertschoepfung: "Hochspezialisiertes Feld mit wenigen Experten — Eintrittsbarrieren schützen Margen. Ein gewonnenes Konzessionsmandat kann 5–15 Jahre Dauermandat für den neuen Betreiber bedeuten. Gerichtlich streitige Konzessionsverfahren bedeuten Mehrjahresmandate. Kommunen benötigen ebenfalls Beratung (welche Anforderungen dürfen/müssen sie stellen?).",
            herausforderungen: "Sehr zyklischer Markt: Konzessionsausläufe häufen sich in Wellen (Ursprungskonzessionen aus den 2000ern laufen ab). BGH-Rechtsprechung (u.a. zur Diskriminierungsfreiheit) entwickelt sich schnell — Berater müssen ständig aktuell bleiben. Transparenzpflichten und Dokumentationsanforderungen wachsen.",
            ausblick: "§46-Welle hält an bis ~2030 (viele Konzessionen aus 2000–2010 laufen aus). Neue Dimension: Wärmenetz-Konzessionen (§3 WPG) als ähnliches Konzessionsmodell für Fernwärme entstehen. Kommunale Rekommunalisierung als Trend (Stadtwerke übernehmen Netze von E.ON/RWE zurück).",
            erloesmodell: "Stundensatz + Pauschalmandat für komplettes Konzessionsverfahren (100.000–500.000 €)",
            regulierung: "EnWG §46, §47, KartGO-Entscheidungen BGH/OLG, GWB",
            kundensegment: "VNBs (Bieterseite), Kommunen (Konzessionsgeber), kommunale Stadtwerke",
            differenzierung: "§46-BGH-Rechtsprechungskenntnis, Prozesserfahrung, kommunales Netzwerk",
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
            definition: "EE-Anlagen benötigen spezifische Versicherungsprodukte: (1) Sachversicherung (All-Risk): Abdeckung von Sturmschäden, Blitzschlag, Maschinenschäden (Getriebeschäden, Generatorschäden), Überspannung, Feuer. (2) Betriebsunterbrechungsversicherung (BU): Ersatz entgangener Erträge (EEG-Vergütung + Spotmarkterlöse) bei ungeplantem Stillstand. (3) Montageversicherung: Deckung während Bau- und Errichtungsphase. Versicherungssumme orientiert sich am Anlagenwert (Windanlage 3 MW: ca. 3–4 Mio. €). Prämien: 0,2–0,5% der Versicherungssumme p.a. Makler (Aon Energy, Marsh Energy) bündeln Portfolio-Platzierungen bei Versicherern.",
            wertschoepfung: "Versicherer (Allianz AGCS, Munich Re als Rückversicherer): Prämieneinkommen bei schwer kalkulierbarem technischen Risiko. Differenzierung durch technisches Underwriting (eigene Ingenieure beurteilen Anlagenqualität). Makler (Aon, Marsh): Provision (8–15% der Prämie) für Platzierung und Schadensmanagement. Portfolioeffekte: Makler mit 10 GW versichertem Portfolio hat bessere Konditionen als Einzelplatzierer.",
            herausforderungen: "Klimarisiken steigen: Extremwetter (Sturm, Hagel, Überschwemmung) werden häufiger — Prämien steigen, Deckungskapazität sinkt. Offshore-Wind: extrem hohe Versicherungswerte (Offshore-WP 1 GW: 3–5 Mrd. € Versicherungssumme) überfordern einzelne Versicherer — Pooling notwendig. Batteriebrand-Risiko bei BESS schlecht historisch kalibriert — Prämienentwicklung unsicher.",
            ausblick: "Wachstumsmarkt durch EE-Ausbau: Jedes neue GW Windkapazität = neue Versicherungssummen. Parametrische Versicherungen (automatische Auszahlung bei Windgeschwindigkeit unter Schwellenwert) als Innovation. Cyber-Versicherung für OT-Systeme (SCADA, Netzleittechnik) als neues Segment. H2-Elektrolyse und BESS als neue, schwer kalibrierbare Risikokategorien.",
            erloesmodell: "Prämieneinnahmen (0,2–0,5% Versicherungssumme p.a.) minus Schäden minus Betriebskosten",
            regulierung: "VAG (Versicherungsaufsichtsgesetz), Solvency II (EU), VVG (Vertragsrecht)",
            kundensegment: "EE-Projektentwickler, Infrastrukturfonds, Betreiber, Projektfinanzierer (Banken verlangen Versicherungsnachweis)",
            differenzierung: "Technisches Underwriting, Kapazität (Offshore), Schadensregulierungsgeschwindigkeit, Portfolio-Konditionen",
            status: "aktiv",
            radar: { regulierung:3, skalierbarkeit:3, marktrisiko:3, digitalisierung:2, wettbewerb:3, nachhaltigkeit:3 },
            erloesTyp: "Fee-based",
            akteure: ["Allianz AGCS","Munich Re","HDI Global","Aon Energy","Marsh Energy"]
          },
          {
            id: "L3-VERSICH-ENERGIE-02", title: "Cyber-Versicherung für Energieinfrastruktur (KRITIS)",
            definition: "KRITIS-Betreiber (ÜNBs, VNBs, Kraftwerksbetreiber) sind attraktive Ziele für staatlich gesponserte Cyberangriffe (APT-Gruppen wie Sandworm/Russland, Volt Typhoon/China). NIS2-Richtlinie (ab Oktober 2024) verschärft Meldepflichten und Sicherheitsanforderungen. Cyber-Versicherungen decken: Kosten für Incident Response (forensische IT-Unternehmen, Krisenmanagement), Betriebsunterbrechungskosten bei IT-Systemausfall, Erpressungszahlungen (Ransomware), Reputationsschäden, Regulierungsstrafen (NIS2-Bußgelder bis 2% Jahresumsatz). Prämien: 0,5–2% der versicherten Summe p.a., stark gestiegen seit 2020.",
            wertschoepfung: "Versicherer: Wachstumsmarkt, aber schwer kalkulierbar (Cyber-Risiken korrelieren stark — ein nationaler Blackout-Angriff trifft viele Versicherte gleichzeitig). Makler: Beratungsintensive Platzierung mit hohen Provisionen. Incident-Response-Dienstleister (Crowdstrike, Mandiant): werden oft als Pflicht-Panel-Partner in Police genannt.",
            herausforderungen: "Systemisches Risiko: Cyber-Angriffe auf kritische Infrastruktur könnten simultane Schäden bei hunderten Versicherungsnehmern auslösen — Aggregationsrisiko für Versicherer existenziell. Underwriting-Daten fehlen: historische Schadendaten für OT-Cyberangriffe sind rar. Steigende Prämien führen zu Unterversicherung.",
            ausblick: "NIS2-Pflichten (ab Oktober 2024) zwingen Energieunternehmen zur Cyber-Mindestabsicherung — schafft Versicherungsnachfrage. Kopplung von Cyber-Versicherung mit Security-as-a-Service (SIEM, SOC-Monitoring) als Bundle. Staatliche Rückversicherung für systemische Cyber-Risiken diskutiert (analog Pool Re in UK für Terrorrisiken).",
            erloesmodell: "Prämieneinnahmen (0,5–2% p.a.) + Security-Service-Fees",
            regulierung: "NIS2-Richtlinie, KRITIS-DachG, BSI-Gesetz §8a, VAG",
            kundensegment: "ÜNBs, VNBs, Kraftwerksbetreiber, Stadtwerke (KRITIS-Schwellenwerte)",
            differenzierung: "OT-Cyber-Underwriting-Expertise, Incident-Response-Panel, NIS2-Compliance-Beratung",
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
        actors: ["Siemens Smart Infrastructure","Johnson Controls","Engie Solutions","Cofely","GETEC","ista"],
        items: [
          {
            id: "L3-CONTRACT-MGMT-01", title: "Energieeinkaufs-Optimierung (Procurement Consulting)",
            definition: "Spezialisierte Energieeinkaufsberater (Energie Consulting, GETEC, ista Energy Solutions) unterstützen energieintensive Unternehmen bei der Beschaffungsstrategie: (1) Hedging-Strategie — wann und wie viel Strom/Gas auf Termin kaufen? (2) Portfoliooptimierung — Mischung aus Spotmarkt, Terminkontrakt, PPA. (3) Nebenkosten-Optimierung — Prüfung von Netzentgelten, EEG-Umlage-Befreiungen (§64 EEG für stromintensive Industrie), §19 StromNEV-Vergünstigungen. (4) Lastmanagement — Lastspitzenoptimierung zur Senkung der leistungsabhängigen Netzentgelte. Zielgruppe: Unternehmen mit >1 GWh/Jahr Stromverbrauch. Ersparnis durch professionelle Beschaffung: typisch 5–15% der Energiekosten.",
            wertschoepfung: "§64-EEG-Befreiung (Superoptional für energieintensive Industrie) allein kann Millioneneinsparungen bedeuten — ROI für Beratung extrem hoch. Lastspitzen-Optimierung: 1 MW Lastspitzenreduktion = 50.000–150.000 €/Jahr Netzentgeltersparnis. Hedging-Beratung: richtige Hedge-Ratio und Timing kann bei volatilen Märkten 10–20% Kostenvorteil bedeuten.",
            herausforderungen: "§64-EEG-Befreiung steht unter EU-Beihilfe-Druck — Beratungsfeld könnte wegfallen. Energiepreisvolatilität macht Hedging-Empfehlungen riskant — Fehlprognosen können Kundenverhältnis belasten. Zunehmend internes Know-how in Großunternehmen: DAX-Konzerne bauen eigene Energieabteilungen auf.",
            ausblick: "CSRD-Berichtspflichten für Scope-2-Emissionen schaffen neuen Beratungsbedarf: nicht nur günstigste, sondern 'grünste' Beschaffung (24/7 CFE, REGOs). H2-Beschaffungsberatung als neues Feld (Corporate H2 PPAs). Demand-Response-Optimierung: Berater helfen Industrie, Flexibilitätspotenziale zu monetarisieren (§64-Reform, Aggregatoren-Verträge).",
            erloesmodell: "Erfolgshonorar (% der erzielten Kosteneinsparung) oder Beratungspauschale",
            regulierung: "EEG §64 (Stromkostenkompensation), §19 StromNEV, EnWG §42a, EnSaG",
            kundensegment: "Energieintensive Industrie (Chemie, Stahl, Aluminium, Papier, Lebensmittel)",
            differenzierung: "§64-Expertise, Hedging-Kompetenz, Netzentgelt-Optimierung, Marktzugang (Direktzugang EEX)",
            status: "aktiv",
            radar: { regulierung:3, skalierbarkeit:3, marktrisiko:2, digitalisierung:3, wettbewerb:3, nachhaltigkeit:3 },
            erloesTyp: "Fee-based",
            akteure: ["GETEC","ista Energy Solutions","Energie Consulting","BET","econ group"]
          },
          {
            id: "L3-CONTRACT-MGMT-02", title: "Energieeffizienz-Contracting (EPC)",
            definition: "Energy Performance Contracting (EPC): Dienstleister (Siemens SI, Johnson Controls, Engie Solutions, Cofely) finanzieren Effizienzmaßnahmen (LED-Beleuchtung, Gebäudeautomation, Druckluftoptimierung, Prozesswärme-Rückgewinnung, Wärmepumpen) und refinanzieren sich ausschließlich aus garantierten Energieeinsparungen. Zwei Modelle: (1) Shared Savings: Einsparungen über Vertragslaufzeit geteilt (Contractor 50–70%, Kunde 30–50%). (2) Guaranteed Savings: Contractor garantiert Mindesteinsparung; Kunde refinanziert Investment, Contractor trägt Performance-Risiko. Typische Vertragslaufzeiten: 8–15 Jahre. Zielgruppen: Kommunen, Krankenhäuser, Schulen, Industriebetriebe.",
            wertschoepfung: "Für Kunden ohne Eigenkapital oder Investitionsbudget: Energiewende ohne Kapitalaufwand. Contractor verdient Marge auf Differenz zwischen tatsächlicher Einsparung und garantierter Einsparung. Maßnahmenmix aus schnell-amortisierenden (LED, <2 Jahre) und langsam-amortisierenden (BHKW, >8 Jahre) Investitionen in einem Vertrag gebündelt. Öffentliche Förderung (BEG, KfW) kann EPC-Business Case erheblich verbessern.",
            herausforderungen: "Messen und Verifizieren (M&V): Einsparungsnachweis nach IPMVP-Standard ist aufwendig und streitanfällig. Lange Vertragslaufzeiten erhöhen Risiken (Nutzerverhalten, Gebäudenutzungsänderung). Finanzierungslücke: Contractor muss Capex vorstrecken — kapitalintensiv. Komplexe Vertragsgestaltung erhöht Transaktionskosten.",
            ausblick: "GEG (Heizungsgesetz) und EU-Energieeffizienzrichtlinie (EED) treiben EPC-Nachfrage. Öffentliche Hand (Kommunen, Bundesgebäude) als Wachstumsmarkt — explizites Ziel: 3% Renovierungsrate öffentlicher Gebäude/Jahr. Digitales EPC: IoT-Monitoring ermöglicht kontinuierliche M&V statt jährlicher Messung.",
            erloesmodell: "Shared Savings (% der Einsparung) oder Guaranteed Savings (Finanzierungs- + Servicerate)",
            regulierung: "EDL-G (Energiedienstleistungsgesetz), EnWG §3 Nr. 24a, BEG-Förderrichtlinie, EU EED Art. 5",
            kundensegment: "Kommunen, Krankenhäuser, Schulen, Industrie (ohne eigenes Investitionsbudget)",
            differenzierung: "M&V-Kompetenz (IPMVP), Finanzierungskraft, Maßnahmen-Portfolio, Referenzen im öffentlichen Sektor",
            status: "aktiv",
            radar: { regulierung:2, skalierbarkeit:3, marktrisiko:2, digitalisierung:3, wettbewerb:3, nachhaltigkeit:5 },
            erloesTyp: "Fee-based",
            akteure: ["Siemens Smart Infrastructure","Johnson Controls","Engie Solutions","Cofely","Wisag"]
          },
          {
            id: "L3-CONTRACT-MGMT-03", title: "Industrielle Eigenversorgung & Direktleitung",
            definition: "Großindustrielle Abnehmer (Stahlwerke, Chemiewerke, Rechenzentren) investieren zunehmend in eigene Erzeugungs- und Versorgungsinfrastruktur: (1) Eigenversorgungsanlage (§3 EEG Nr. 19): eigene Erzeugungsanlage versorgt unmittelbar angrenzende Verbrauchsstätte — Netzentgelt- und EEG-Umlagebefreiung bei direktem räumlichem Zusammenhang. (2) Direktleitung (§3 Nr. 12 EnWG): private Leitung verbindet Erzeuger und Abnehmer ohne öffentliches Netz — vollständige Netzentgeltbefreiung. Typisch bei BHKW, Windanlage auf Werksgelände, Solaranlage auf Hallendach. (3) Industrieller Stromkauf über eigene Bilanzkreise: große Industrie nimmt direkten Börsenzugang (EEX-Mitgliedschaft) für günstige Beschaffung.",
            wertschoepfung: "Netzentgelt-Vermeidung ist der größte Hebel: Bei 100 GWh/Jahr Eigenverbrauch und 8 ct/kWh Netzentgelt = 8 Mio. €/Jahr Einsparung. EEG-Umlage-Befreiung (historisch): war bis 2022 wichtig, nach EEG-Abschaffung der EEG-Umlage weggefallen. Eigenversorgung als Resilienz: Versorgungssicherheit bei Netzstörungen durch eigene Anlage.",
            herausforderungen: "Regulatorische Anforderungen sind komplex und werden häufig geändert (BNetzA-Auslegungsentscheidungen zu Eigenversorgung). Investitionskosten für Eigenversorgungsanlage hoch. Direktleitung: genehmigungsrechtlich aufwendig, nur bei räumlicher Nähe praktikabel. H2-Eigenversorgung (Elektrolyse + Eigennutzung) als nächste Dimension noch regulatorisch ungelöst.",
            ausblick: "Dezentralisierung der Energieversorgung begünstigt Eigenversorgungsmodelle. Agri-PV auf Fabrikdächern + BESS + Eigenverbrauch als Standard für neue Industriegebäude. EU Net Metering-Regelungen und Energy Communities ermöglichen neue Eigenversorgungsformen. H2-Eigenversorgung für Stahl/Chemie als strategisches Ziel.",
            erloesmodell: "Kostenvermeidung (Netzentgelt, EEG-Umlage) + ggf. Überschusseinspeisung (EEG-Vergütung)",
            regulierung: "EEG §3 Nr. 19 (Eigenversorger), EnWG §3 Nr. 12 (Direktleitung), §19 StromNEV, BNetzA-Auslegung",
            kundensegment: "Energieintensive Industrie (Stahl, Chemie, Aluminium), Rechenzentren, Logistikzentren",
            differenzierung: "Anlagen-Engineering, Genehmigungskompetenz Direktleitung, Steuer-/Regulierungsoptimierung",
            status: "aktiv",
            radar: { regulierung:3, skalierbarkeit:2, marktrisiko:2, digitalisierung:3, wettbewerb:2, nachhaltigkeit:4 },
            erloesTyp: "Merchant",
            akteure: ["GETEC","RWE Industrielösungen","Siemens Energy","Engie","innogy (RWE)"]
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
            definition: "Eigenheimbesitzer mit PV-Anlage (typisch 10–20 kWp, Kosten ~800–1.200 €/kWp inkl. Installation, 2024) erzeugen Strom für den Eigenverbrauch und speisen Überschuss ins Netz ein. Einspeisevergütung nach EEG 2023: 8,2 ct/kWh (Anlagen ≤10 kWp), 7,1 ct/kWh (bis 40 kWp), 5,8 ct/kWh (bis 100 kWp) — deutlich unter Eigenverbrauchswert (~30 ct/kWh Bezugspreis). Daher: maximaler Eigenverbrauch ist wirtschaftlich optimal. Eigenverbrauchsquote ohne Speicher: 25–35%; mit Speicher: 60–80%. Amortisationszeit PV+Speicher: 8–12 Jahre (2024).",
            wertschoepfung: "Eigenverbrauch ist die Kernwertschöpfung: jede selbst verbrauchte kWh spart den Bezugspreis (~30 ct/kWh) minus variable Erzeugungskosten (~3–5 ct/kWh) = ~25 ct/kWh Nettovorteil. Heimspeicher erhöht Eigenverbrauchsquote von ~30% auf ~70% — verdoppelt den Wert der PV-Anlage bei Mehrkosten von ~8.000–12.000 €. Smart-Home-Integration (Waschmaschine, Spülmaschine, WP auf Solar-Überschuss steuern) als kostenloser Eigenverbrauchsbooster.",
            herausforderungen: "Sinkende Einspeisevergütung reduziert Erlöse für überschüssigen Strom. Dachfläche und Ausrichtung limitieren Ertrag. Netzanschlusspflicht und Anmeldepflicht beim VNB bürokratisch aufwendig. Degradation der Module (0,3–0,5%/Jahr) und Wechselrichter-Lebensdauer (~15 Jahre) als Wartungskosten. Finanzierung: Kreditlaufzeit und Zinsen beeinflussen Amortisation stark.",
            ausblick: "Solar-LCOE sinkt weiter (<25 €/MWh 2026) — Amortisationszeiten kürzen sich. Kombinationseffekte mit EV (Laden mit Solarstrom) und WP (Warmwasser aus Überschuss) verbessern Eigenverbrauchsquote auf >80%. Balkonkraftwerke (800 W, vereinfachte Anmeldung seit 2024) demokratisieren PV für Mieter. §41b dynamische Tarife ermöglichen gezielten Netzbezug in Billigstunden.",
            erloesmodell: "Eigenverbrauchseinsparung (ct/kWh) + EEG-Einspeisevergütung (8,2 ct/kWh)",
            regulierung: "EEG 2023 §21 (Einspeisevergütung), §9 (Einspeisemanagement), MsbG, EnWG §8 (Netzanschluss)",
            kundensegment: "B2C Eigenheimbesitzer",
            differenzierung: "Systemintegration (PV+Speicher+WP+EV), Eigenverbrauchsoptimierung, Amortisationszeit",
            status: "aktiv",
            radar: { regulierung:2, skalierbarkeit:4, marktrisiko:1, digitalisierung:3, wettbewerb:4, nachhaltigkeit:5 },
            erloesTyp: "Merchant",
            akteure: ["SMA Solar","Fronius","Solarwatt","BYD","Tesla Powerwall","Enphase"]
          },
          {
            id: "L3-PROSUM-HAUS-02", title: "Balkonkraftwerk (Stecker-Solar)",
            definition: "Balkonkraftwerke (steckerfertige PV-Anlage, max. 800 W Wechselrichterleistung seit Gesetzesänderung 2024) ermöglichen Mietern und Wohnungseigentümern ohne Dach erstmals die Eigenerzeugung. Anmeldung vereinfacht: nur noch Meldung bei Netzbetreiber (kein aufwendiges Genehmigungsverfahren). Preis: 300–600 €, Amortisationszeit ~3–5 Jahre. Monatliche Ersparnis: ~5–15 €/Monat je nach Standort und Verbrauchsprofil. Marktvolumen Deutschland 2024: >500.000 installierte Anlagen, stark wachsend.",
            wertschoepfung: "Niedrige Einstiegshürde: 300 € Invest, plug-and-play, keine Handwerker nötig. Für Hersteller/Händler (Anker, EcoFlow, Priwatt, Aldi): Hardware-Marge auf Massenprodukt. Für Plattformen (Amazon, Otto): Marktplatz-Provision. Ökosystem: Balkonkraftwerk als Einstieg in Smart-Home-Energiemanagement.",
            herausforderungen: "Einspeisevergütung für Überschuss praktisch nicht möglich ohne Zweirichtungszähler (Smart Meter). Netzrückwirkungen bei hoher Penetration im Niederspannungsnetz. WEG-Rechtsfragen (braucht man Zustimmung aller Eigentümer?). Qualitätsunterschiede bei Billigprodukten aus Fernost.",
            ausblick: "Markt wächst explosiv: EU-Solarstrategie fördert Prosumer-Modelle. 800 W-Grenze könnte auf 2.000 W angehoben werden (politische Diskussion). Integration in Smart-Home-Plattformen (Tibber, Home Assistant) als nächster Schritt. Balkonkraftwerk + Mini-Speicher als Weiterentwicklung.",
            erloesmodell: "Eigenverbrauchseinsparung (Substitution Netzbezug)",
            regulierung: "EEG §8 (vereinfachte Anmeldung), DIN VDE 0100-551-1, BEG (Förderung in einigen Bundesländern)",
            kundensegment: "B2C Mieter und Wohnungseigentümer ohne Dachfläche",
            differenzierung: "Preis, Wirkungsgrad, App-Integration, Einstiegshürde (plug-and-play)",
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
            definition: "Mieterstrom: Vermieter (oder Dienstleister im Auftrag) installiert PV-Anlage auf dem Dach und liefert Strom direkt an Mieter des Gebäudes — ohne Nutzung des öffentlichen Netzes. Rechtliche Grundlage: §42a EnWG (Mieterstromprivileg). Vorteile für Mieter: günstigerer Tarif als Grundversorgung (verpflichtend: mind. 10% unter lokalem Grundversorgungstarif). Vorteile für Vermieter: Zusatzeinnahmen aus PV-Anlage, attraktiveres Mietobjekt, ESG-Reporting. Förderpflicht: Mieterstromzuschlag nach §21 EEG (zusätzlich zu regulärer Vergütung, ca. 0,5–1 ct/kWh). Abwicklung: Vermieter wird zum Energielieferanten — oder beauftragt Mieterstrom-Dienstleister (Buzzn, Lumenaza, ENTEGA).",
            wertschoepfung: "Dienstleister: Marge zwischen Einkaufspreis (EEG-Vergütung + Restzukauf) und Verkaufspreis an Mieter. Vollservice-Modell (Anlage, Abrechnung, Kundenservice) als Differenzierungsmerkmal. Vermieter: PV-Rendite + Mietprämium durch nachhaltiges Gebäude. Skaliervorteil: Dienstleister mit 10.000+ Mieteinheiten amortisiert IT/Compliance-Aufwand.",
            herausforderungen: "Regulatorische Komplexität: Vermieter wird Energielieferant mit allen EnWG-Pflichten (Marktkommunikation, Bilanzkreis, GPKE). Mieter haben Wechselrecht — Restversorgung muss sichergestellt sein. Abrechnung mit Zählern für jeden Mieter aufwendig. Wirtschaftlichkeit hängt stark von Mieter-Lastprofil und Solarpotenzial ab.",
            ausblick: "GGV (Gemeinschaftliche Gebäudeversorgung, §42b EnWG seit 2023) vereinfacht das Modell: Nur Energiemengenweitergabe ohne Lieferantenpflichten. EU EMD Energy Communities ermöglichen Quartiers-Erweiterung über ein Gebäude hinaus. Kombination mit §14a-Steuerung (WP, EV im Gebäude) als nächster Schritt.",
            angreifbarkeit: "Die regulatorisch einfachere GGV (§42b EnWG, vgl. L3-PROSUM-MIETER-02) unterhöhlt das klassische Mieterstrommodell von innen: Vermieter, die nicht Energielieferant werden wollen, weichen direkt auf die GGV aus und lassen das Mieterstromprivileg links liegen. IT-Plattformanbieter (Lumenaza, gridX) bieten GGV-Abwicklung als günstige SaaS-Lösung an und entziehen klassischen Mieterstrom-Vollservicern (Buzzn, ENTEGA) damit das zentrale Differenzierungsargument 'Komplexität abnehmen'.",
            erloesmodell: "Retail Margin (Einkauf EEG-Vergütung, Verkauf an Mieter mit Rabatt auf GV-Tarif)",
            regulierung: "§42a EnWG (Mieterstrom), §42b EnWG (GGV), EEG §21 (Mieterstromzuschlag), GPKE",
            kundensegment: "B2C Mieter in Mehrfamilienhäusern; B2B Vermieter / Wohnungsbaugesellschaften",
            differenzierung: "Vollservice-Modell (Anlage + Abrechnung), Skalierung, regulatorische Compliance, Mieter-UX",
            status: "aktiv",
            radar: { regulierung:3, skalierbarkeit:3, marktrisiko:1, digitalisierung:4, wettbewerb:3, nachhaltigkeit:5 },
            erloesTyp: "Merchant",
            akteure: ["Buzzn","Lumenaza","Polarstern","ENTEGA","Naturstrom","Enpal"]
          },
          {
            id: "L3-PROSUM-MIETER-02", title: "Gemeinschaftliche Gebäudeversorgung (§42b EnWG)",
            definition: "Die GGV (in Kraft seit 2023) ist die vereinfachte Alternative zum Mieterstrom: Der Anlagenbetreiber (Vermieter, WEG, Wohnungsbaugesellschaft) leitet Solarstrom innerhalb des Gebäudes an Mieter weiter — ohne selbst Energielieferant zu werden. Technisch: Überschussmengen werden über einen virtuellen Mengenzähler den Mietern gutgeschrieben; Abrechnung erfolgt anteilig nach festgelegtem Aufteilungsschlüssel. Restzukauf läuft weiterhin über den jeweiligen Lieferanten des Mieters. Kein GPKE-Prozess, keine Bilanzkreispflicht für den Vermieter. Seit 2024 auch auf Quartiers-Ebene möglich (gemeinschaftliche Energieversorgung mehrerer Gebäude).",
            wertschoepfung: "Deutlich niedrigere Hürde als Mieterstrom: Vermieter muss kein Energielieferant werden. IT-Dienstleister (Lumenaza, gridX) bieten GGV-Plattformen als SaaS. Wirtschaftlich attraktiv für WEGs mit hohem Solarertrag und homogenen Lastprofilen. Netzentgeltvorteil: Strom, der das Gebäude nicht verlässt, zahlt keine Netzentgelte.",
            herausforderungen: "Aufteilungsschlüssel muss WEG-intern vereinbart werden — soziale Komplexität. Mieter mit ungünstigem Lastprofil (tagsüber nicht zu Hause) profitieren wenig. Abrechnungssystem muss mit jedem Mieter-Lieferanten kompatibel sein. Regulatorisch noch jung — BNetzA-Auslegungen nicht vollständig konsolidiert.",
            ausblick: "EU EMD Energy Communities (Art. 16) als übergeordneter Rahmen: Communities dürfen Strom teilen, speichern und gemeinsam vermarkten. Quartierslösungen (mehrere Gebäude + gemeinsamer Speicher + Ladeinfrastruktur) als nächste Skalierungsstufe. Stadtwerke als GGV-Plattformbetreiber für ihr Versorgungsgebiet.",
            erloesmodell: "SaaS-Plattformgebühr für Abrechnungsdienstleister + anteilige Netzentgelteinsparung für Teilnehmer",
            regulierung: "§42b EnWG (GGV), EU EMD Art. 16 (Energy Communities), MsbG (Zählertechnik)",
            kundensegment: "WEGs, Wohnungsbaugesellschaften, Quartiersentwickler",
            differenzierung: "Plattform-Simplizität, Abrechnungsautomatisierung, WEG-Rechtskonformität",
            status: "aktiv",
            radar: { regulierung:3, skalierbarkeit:4, marktrisiko:1, digitalisierung:4, wettbewerb:2, nachhaltigkeit:5 },
            erloesTyp: "Fee-based",
            akteure: ["Lumenaza","gridX","Buzzn","Stadtwerke München","enercity"]
          },
          {
            id: "L3-PROSUM-MIETER-03", title: "Solaranlage zur Miete / PV-Leasing (Enpal, 1KOMMA5°)",
            definition: "Enpal (gegründet 2017, Unicorn-Status) und 1KOMMA5° revolutionieren den Eigenheim-Solarmarkt durch ein Mietmodell: Kunden zahlen keine Anschaffungskosten, sondern monatliche Miete (ab ~79 €/Monat für PV + Speicher + Wallbox + Wärmepumpe als Bundle). Enpal behält Eigentumsrecht an der Anlage, übernimmt Installation, Wartung, Versicherung und Ertragsprognose. Finanzierung: Enpal refinanziert sich über Green Bonds und institutionelle Investoren (KfW, BlackRock). Enpal hat >200.000 Kunden (2024) und ist eines der am schnellsten wachsenden deutschen Startups. 1KOMMA5°: ähnliches Modell, aber mit eigenem Energiemanagement-System ('Heartbeat') und Direktvermarktung als integriertem Zusatzdienst.",
            wertschoepfung: "Für Kunden: Keine Kapitalbindung, sofortige Einsparung ab Monat 1 (Miete < Stromkosten-Einsparung). Für Enpal: Langfristiger Mietvertrag (20 Jahre) = stabiler Cashflow; Skalierungseffekte in Installation (eigene Installateurflotte = 3.000+ Mitarbeiter); Green-Bond-Finanzierung zu günstigen Zinsen durch EEG-gesicherte Cashflows. Bundle-Strategie: Miete deckt PV + Speicher + WP + Wallbox = maximaler Share-of-Wallet.",
            herausforderungen: "Kapitalintensiv: Enpal muss Millionen von Anlagen vorfinanzieren — abhängig von günstiger Kapitalmarktlage. Installationskapazität als Flaschenhals (Fachkräftemangel). Kundenbindung über 20 Jahre: Risiko bei Eigentümerwechsel, Umzug. Qualitätssicherung bei schnellem Wachstum. Konkurrenz durch fallende PV-Preise: eigene Anlage kaufen wird attraktiver.",
            ausblick: "Mietmodell als Mainstream-Weg in die Energiewende — besonders für Haushalte ohne Eigenkapital. 1KOMMA5° als integrierter Energiedienstleister (PV + Speicher + WP + Wallbox + Direktvermarktung + dynamischer Tarif) als Vorbild für 'All-in-One Heimenergie'. Konsolidierung: Enpal und 1KOMMA5° werden kleinere Installateure und Betreiber aufkaufen.",
            erloesmodell: "Monatliche Mietrate (€/Monat, 20-Jahres-Vertrag) + ggf. Direktvermarktungsgebühr",
            regulierung: "EEG §21 (Einspeisevergütung als Cashflow), BGB (Mietrecht), GEG, BEG-Förderung",
            kundensegment: "B2C Eigenheimbesitzer ohne Eigenkapital oder mit Präferenz für Vollservice",
            differenzierung: "Kein Eigenkapital nötig, Bundle (PV+WP+Wallbox+Speicher), Installationsnetz, Green-Bond-Finanzierung",
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
            definition: "EU Electricity Market Design (EMD, 2023) und nationale Umsetzung (§42b, §3 Nr. 38a EnWG) schaffen den rechtlichen Rahmen für Energy Communities: Gruppen von Bürgern, KMU oder lokalen Behörden können gemeinsam Energie erzeugen, speichern, verbrauchen und teilen — innerhalb eines definierten Netzgebiets (typisch: ein Umspannwerk). Kernprinzip: Netzentgeltreduktion für lokal erzeugten und verbrauchten Strom (da das übergeordnete Netz nicht genutzt wird). Plattformbetreiber (Lumenaza, Electron, gridX) ermöglichen P2P-Abrechnung: Mitglied A verkauft Überschusssolar direkt an Mitglied B — zum Preis zwischen Einspeisevergütung und Grundversorgungstarif.",
            wertschoepfung: "Netzentgelt-Sharing: Strom, der die Community nicht verlässt, zahlt keine oder reduzierte Netzentgelte — Einsparung 8–15 ct/kWh. Preisvorteile für alle: Erzeuger erhält mehr als Einspeisevergütung, Verbraucher zahlt weniger als Grundversorgungstarif. Gemeinschaftliche Investitionen (Quartiersspeicher, PV-Anlage auf öffentlichem Gebäude) amortisieren sich schneller durch breitere Kostenteilung. Plattformbetreiber verdient Transaktionsgebühr.",
            herausforderungen: "Regulatorische Umsetzung in Deutschland noch im Aufbau: EU EMD-Transposition verzögert sich. Netzentgeltreduktion für lokalen Verbrauch ist nicht überall eindeutig geregelt. Verwaltungsaufwand für Community-Gründung und -Betrieb hoch. Technische Anforderungen (Smart Meter für alle Mitglieder) als Voraussetzung.",
            ausblick: "Energy Communities werden mit vollständigem Smart-Meter-Rollout (2025+) praktisch umsetzbar. Stadtwerke als Community-Betreiber für ihr Versorgungsgebiet. Kombination mit kommunaler Wärmeplanung (WPG): Wärme-Communities. Erweiterung auf Industrie: lokale H2-Communities für Gewerbegebiete.",
            erloesmodell: "Transaktionsgebühren (ct/kWh P2P-Handel) + Plattformabo + Netzentgelteinsparung für Mitglieder",
            regulierung: "EU EMD Art. 16, §42b EnWG, §3 Nr. 38a EnWG, MsbG (Smart Meter als Voraussetzung)",
            kundensegment: "Bürger, KMU, lokale Behörden im gleichen Netzgebiet",
            differenzierung: "Plattform-Simplizität, lokales Netzwerk, Netzentgeltoptimierung, Community-Building",
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
            definition: "Deutschland hat als eines der letzten großen europäischen Länder noch keinen formalen Kapazitätsmechanismus. Das bestehende Energy-Only-Market-Design (EOM) setzt auf Knappheitspreise zur Refinanzierung von Spitzenlastkraftwerken. Problem: Bei steigendem EE-Anteil reichen Preisspitzen nicht mehr zur Refinanzierung von Backup-Kapazität (fehlende Money-Fehlende-Kapazitätsvergütung). EU-Beihilferecht (Art. 107 AEUV) erlaubt Kapazitätsmechanismen, wenn sie diskriminierungsfrei und technologieneutral sind. Aktuell diskutierte Modelle: Kapazitätsmarkt (Leistungspreis für Vorhaltung), strategische Reserve (ÜNB beschafft Backup), Climate Emergency Reserve (H2-ready Peaker).",
            wertschoepfung: "Kapazitätsmechanismus schafft Wert durch Versorgungssicherheit: Ohne gesicherte Kapazitätsvergütung werden keine neuen flexiblen H2-ready Gaskraftwerke gebaut. Der volkswirtschaftliche Wert von Blackout-Vermeidung ist immens (>10 Mrd. €/h gesamtwirtschaftlicher Schaden). Für Marktteilnehmer: Kapazitätsmärkte schaffen berechenbare Erlösströme für Kraftwerksinvestoren.",
            herausforderungen: "Politisch umstritten: Energieintensive Industrie befürchtet höhere Strompreise durch Kapazitätsumlage. Design-Fragen ungeklärt: Welche Kapazitäten sind förderfähig? Nur H2-ready? Auch Batterien? Demand Response? Ausländische Kapazitäten? EU-Beihilfeprüfung zeitaufwendig. Risiko: falsch designter Kapazitätsmechanismus kann ineffiziente Kraftwerke subventionieren.",
            ausblick: "Kapazitätsmechanismus in Deutschland gilt politisch als unausweichlich — Frage ist wann und wie. EU Clean Energy Package ermutigt: Art. 22 ElektrizitätsbinnenmarktVO ermöglicht nationale Kapazitätsmechanismen unter EU-Überwachung. Erwarteter Zeitplan: politische Einigung 2025–2026, Marktstart 2027–2028. Wert für H2-ready Peaker: 50.000–80.000 €/MW/Jahr Kapazitätsvergütung erwartet.",
            erloesmodell: "Leistungspreis (€/MW/Jahr) für Kapazitätsvorhaltung (geplant)",
            regulierung: "EU ElektrizitätsbinnenmarktVO Art. 22, EnWG §13e (Strategische Reserve), EU Beihilferecht",
            kundensegment: "Kraftwerksbetreiber, H2-ready Peaker-Investoren, Batteriespeicher-Betreiber",
            differenzierung: "Förderfähigkeit nach Technologie, Laufzeit der Kapazitätsverträge, Preisdesign",
            status: "emerging",
            radar: { regulierung:5, skalierbarkeit:2, marktrisiko:2, digitalisierung:2, wettbewerb:2, nachhaltigkeit:3 },
            erloesTyp: "Reguliert",
            akteure: ["RWE","Uniper","BNetzA","Bundesnetzagentur","BMWK"]
          },
          {
            id: "L3-MARKT-DESIGN-02", title: "Lokale Flexibilitätsmärkte (DSO-Flex)",
            definition: "Lokale Flexibilitätsmärkte (LFM) ermöglichen Verteilnetzbetreibern, Netzengpässe durch Marktmechanismen statt durch teure Netzausbau-Investitionen zu lösen. Konzept: DSO schreibt lokal verfügbare Flexibilität aus (z.B. 'ich brauche 5 MW Lastreduktion im Netzgebiet Südstadt zwischen 17–19 Uhr'), Aggregatoren und Prosumer bieten Flexibilität an, DSO kauft günstigstes Angebot. Pilotprojekte laufen in verschiedenen EU-Ländern (Piclo Flex in UK, Nodes in Skandinavien, NODES/GOPACS in Deutschland). In Deutschland regulatorisch noch nicht vollständig geklärt — §14a EnWG ist erster Schritt, aber kein echter Marktmechanismus.",
            wertschoepfung: "Volkswirtschaftlicher Vorteil: Flexibilität kostet oft 20–50 €/MWh, Netzausbau dagegen 100.000–500.000 €/km. 'Flex first' vor Netzausbau ist regulierungspolitisches Ziel der EU (Clean Energy Package). Für Aggregatoren: neuer Erlöskanal für VPP-Ressourcen neben Regelenergiemärkten. Für DSOs: Capex-Vermeidung + Innovation des eigenen Geschäftsmodells.",
            herausforderungen: "Marktdesign komplex: lokale Preissignale müssen mit nationalen Regelenergiemärkten koordiniert werden. Doppelnutzung von Flexibilität (Aggregator verkauft gleiche Ressource an DSO und ÜNB) muss verhindert werden. Standardisierung: 900 DSOs mit unterschiedlichen Systemen und Prozessen. Regulatorische Unsicherheit: Wer zahlt für Flex, wie werden Kosten sozialisiert?",
            ausblick: "EU Clean Energy Package verpflichtet DSOs mittelfristig, Flex-Beschaffung vor Netzverstärkung zu prüfen. BNetzA-Pilotprogramme 2024–2026 als Grundlage für regulatorischen Rahmen. Vollständiger LFM-Rollout in Deutschland erwartet ab 2028–2030 mit Smart-Meter-Basis. Verbindung mit §14a-Steuerung als Grundlage.",
            erloesmodell: "Marktpreis für lokale Flexibilität (€/MWh oder €/MW, beschafft vom DSO)",
            regulierung: "EU Clean Energy Package Art. 32 (DSO Flex), EnWG §14a, §14d, BNetzA-Pilotrahmen",
            kundensegment: "DSOs (Käufer), Aggregatoren und Prosumer (Anbieter)",
            differenzierung: "Plattform-Standardisierung, Koordination mit ÜNB-Märkten, Doppelnutzungsmanagement",
            status: "emerging",
            radar: { regulierung:4, skalierbarkeit:4, marktrisiko:2, digitalisierung:5, wettbewerb:2, nachhaltigkeit:4 },
            erloesTyp: "Merchant",
            akteure: ["Piclo","NODES","gridX","BNetzA","Next Kraftwerke (RWE)"]
          },
          {
            id: "L3-MARKT-DESIGN-03", title: "Wasserstoff-Marktdesign (H2-Hub & Spotmarkt)",
            definition: "Ein liquider H2-Spotmarkt existiert in Deutschland noch nicht — H2 wird heute bilateral gehandelt oder über langfristige Lieferverträge abgewickelt. EEX und ICE arbeiten an H2-Futures-Produkten. EPEX SPOT prüft H2-Spot-Produkte. Zertifizierungssystem: EU-Delegierte Verordnungen zu RED III definieren, wann H2 als 'grün' gilt (Erneuerbarkeits-Kriterien: zeitliche, geografische und systemische Korrelation von Elektrolyse und EE-Erzeugung). Europäische H2-Handelsknoten entstehen: Rotterdam (HyTransPort), Hamburg (H2Global), Marseille (HyDeal Ambition).",
            wertschoepfung: "Liquider H2-Markt schafft Preistransparenz und reduziert Transaktionskosten bilateral ausgehandelter Verträge. Zertifizierungssystem (CertifHy, EU-Delegierte VO) schafft Vertrauen und ermöglicht Preisdifferenzierung zwischen grünem, blauem und grauem H2. Handelshubs bündeln Angebot und Nachfrage — klassische Börsen-Netzwerkeffekte.",
            herausforderungen: "H2-Marktvolumen noch zu gering für echte Börsenprodukte (Mindestliquidität fehlt). Zertifizierungssystem komplex und kostenintensiv. Infrastruktur (H2-Kernnetz) erst ab 2028+ verfügbar — physischer Handel begrenzt. Preisfindung schwierig: H2-Produktionskosten variieren stark je nach Strompreis, Elektrolyseur-Effizienz, Standort.",
            ausblick: "H2-Spotmarkt wird mit steigendem Produktionsvolumen (ab 2028–2030) entstehen. EEX wird H2-Futures lancieren. Rotterdam als europäischer H2-Handelshub (analog TTF für Gas). Preisindex HyXchange (Initiative von IEA und Börsen) als Referenzpreis für H2-Kontrakte. H2Global-Ausschreibungen als Marktpreisfindungsmechanismus für Import-H2.",
            erloesmodell: "Transaktionsgebühren (Börsenmodell) + Zertifizierungsgebühren (CertifHy)",
            regulierung: "EU RED III Art. 27 (H2-Kriterien), EU-Delegierte Verordnungen H2, H2Global-Ausschreibungsrahmen",
            kundensegment: "H2-Erzeuger, Abnehmer (Stahl, Chemie), Trader, Infrastrukturinvestoren",
            differenzierung: "Liquidität, Zertifizierungsintegration, physische Anbindung (H2-Kernnetz), Pricing-Transparenz",
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

// Akteurs-Index für neue Domänen aktualisieren
(function() {
  var newDomainIds = ["L1-PROSUMER","L1-MARKT"];
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
