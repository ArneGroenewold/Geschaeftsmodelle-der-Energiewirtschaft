// ══════════════════════════════════════════════════════════
// lern-data.js — redaktionelle Lernschicht (Kurse/Quiz) für Modul 4 "Verkaufen".
// Referenziert GM_DATA (app/data.js) ausschließlich per steckbriefId — keine
// Inhalte werden dupliziert. Siehe dokumentation/07_LERNAPP_KONZEPT.md §9.
// ══════════════════════════════════════════════════════════

const LERN_MODULES = [
  {
    id: "M1-SPIELFELD",
    title: "Das Spielfeld",
    description: "Die Grundlagen: Wo der Strompreis entsteht (Börse), wie Händler an Volatilität verdienen, was CO₂ und Herkunft kosten — und wer das ganze System reguliert.",
    unitIds: ["U1-BOERSE", "U1-PROP", "U1-ZERTIFIKATE", "U1-BNETZA", "U1-KAPAZITAET", "U1-FLEXMARKT"],
    bossQuizId: null // Stage 2
  },
  {
    id: "M2-ERZEUGEN",
    title: "Erzeugen & Speichern",
    description: "Vom Gaskraftwerk über EEG und PPAs bis zum Batteriespeicher — wo entsteht Erzeugungs-Marge, und wer sichert sie ab?",
    unitIds: ["U2-MERIT", "U2-REGELENERGIE", "U2-EEG", "U2-PPA", "U2-SPEICHER", "U2-GROSSKLEIN"],
    bossQuizId: null // Stage 2
  },
  {
    id: "M3-NETZE",
    title: "Die Netze",
    description: "Das regulierte Geld: Wie ÜNB und VNB an Netzentgelten verdienen, was Redispatch kostet, und warum das Gasnetz um seine Zukunft ringt.",
    unitIds: ["U3-AREGV", "U3-REDISPATCH", "U3-BILANZ", "U3-14A", "U3-BETREIB", "U3-GAS"],
    bossQuizId: null // Stage 2
  },
  {
    id: "M4-VERKAUFEN",
    title: "Verkaufen",
    description: "Vollversorger, Neolieferanten, Ökostrom, Stadtwerke und Vergleichsplattformen — wie fließt das Geld beim Endkundenvertrieb?",
    unitIds: ["U-VOLL", "U-TIBBER", "U-TRANSPARENZ", "U-OCTOPUS", "U-IMPACT", "U-STADTWERK", "U-VERGLEICH"],
    bossQuizId: null // Stage 2
  },
  {
    id: "M5-FLEX",
    title: "Flexibilität ist das neue Öl",
    description: "Virtuelle Kraftwerke, Demand Response, Batterie-Optimierung und Vehicle-to-Grid — wie aus Software und verteilten Assets Geld wird.",
    unitIds: ["U5-VPP", "U5-DEMAND", "U5-ROUTE", "U5-V2G", "U5-FLEXKAMPF"],
    bossQuizId: null // Stage 2
  },
  {
    id: "M6-PROSUMER",
    title: "Prosumer & neue Spieler",
    description: "Vom Balkonkraftwerk über Mieterstrom und PV-Miete bis Ladeinfrastruktur und THG-Quote — wie Haushalte zu Energieproduzenten und neue Player zu Gewinnern werden.",
    unitIds: ["U6-PV", "U6-BALKON", "U6-MIETERSTROM", "U6-ENPAL", "U6-CPO", "U6-THG"],
    bossQuizId: null // Stage 2
  },
  {
    id: "M7-WAERME",
    title: "Wärme, H2 & Industrie",
    description: "Fernwärme unter Dekarbonisierungsdruck, das Subventionsrennen um grünen Wasserstoff und wie die Industrie ihre Energiekosten drückt — der am stärksten transformierende Sektor.",
    unitIds: ["U7-FERNWAERME", "U7-WASSERSTOFF", "U7-PROCUREMENT", "U7-EPC", "U7-EIGENVERSORGUNG"],
    bossQuizId: null // Stage 2
  }
];

const LERN_UNITS = [
  {
    id: "U-VOLL",
    moduleId: "M4-VERKAUFEN",
    title: "Vollversorger — Die dünnste Marge der Wertschöpfungskette",
    primarySteckbriefId: "L3-VERTRIEB-VOLL-01",
    vertiefungSteckbriefIds: ["L3-VERTRIEB-VOLL-01"],
    hook: { text: "Ein durchschnittlicher Stromkunde bringt seinem Versorger oft nur 35–70 € Marge – im ganzen Jahr. Warum kämpfen Konzerne trotzdem um Millionen solcher Kunden?" },
    kernidee: {
      text: "Zwei oft verwechselte Begriffe: Ein <strong>Vollversorger</strong> deckt den gesamten Strombedarf seiner Kunden (Vertragsform – trifft auf E.ON genauso zu wie auf Tibber). Die <strong>Grundversorgung</strong> (§36 EnWG) ist dagegen ein gesetzlicher Status: Der Lieferant mit den meisten Haushaltskunden im Netzgebiet beliefert automatisch jeden ohne Vertrag – zum Grundversorgungstarif (GVT). Vom Strompreis bleibt nach Beschaffung, Netzentgelten, Steuern und Umlagen nur eine Marge von 0,5–2 ct/kWh; der eigentliche Gewinnhebel liegt im Cross-Selling: Wallbox, Wärmepumpen-Tarif oder PV-Pacht bringen ein Vielfaches der Strommarge.",
      geldfluss: {
        nodes: [{ id: "kunde", label: "Kunde" }, { id: "boerse", label: "Großhandel" }, { id: "staat", label: "Netz + Staat" }, { id: "versorger", label: "Versorger" }],
        edges: [
          { from: "kunde", to: "boerse", label: "Beschaffung ~16 ct/kWh" },
          { from: "kunde", to: "staat", label: "Netzentgelte+Steuern ~14 ct/kWh" },
          { from: "kunde", to: "versorger", label: "Marge ~1-2 ct/kWh" }
        ]
      }
    },
    workedExample: {
      steckbriefId: "L3-VERTRIEB-VOLL-01",
      steps: [
        { text: "Ein E.ON-Haushaltskunde verbraucht 3.500 kWh im Jahr und zahlt 32 ct/kWh. Davon gehen Netzentgelte (~8 ct/kWh) sowie Steuern und Umlagen (~6 ct/kWh) direkt an Dritte. Die Beschaffungskosten am Großhandelsmarkt liegen bei ~16 ct/kWh.", questionId: "Q-VOLL-WE1" },
        { text: "Die reine Strommarge bringt E.ON pro Kunde also nur 35–70 € im Jahr. Trotzdem investiert der Konzern massiv darin, genau diesen Bestandskunden Wallboxen, Wärmepumpen-Tarife und PV-Pachtverträge anzubieten.", questionId: "Q-VOLL-WE2" }
      ]
    },
    retrievalItemIds: ["Q-VOLL-R1", "Q-VOLL-R6", "Q-VOLL-R2", "Q-VOLL-R3", "Q-VOLL-R4", "Q-VOLL-R5"],
    transferItemId: "Q-VOLL-T1",
    merkeDirEinenSatz: {
      prompt: "Formuliere in einem Satz: Woran verdient ein Vollversorger im Massenmarkt wirklich?",
      musterantwort: "Ein Vollversorger verdient nur eine sehr kleine Marge (0,5–2 ct/kWh) am reinen Strompreis und lohnt sich vor allem durch die träge Grundversorgungs-Kundenbasis und Cross-Selling von margenstärkeren Zusatzprodukten."
    }
  },
  {
    id: "U-TIBBER",
    moduleId: "M4-VERKAUFEN",
    title: "Tibber — Wie verdient man ohne Strommarge?",
    primarySteckbriefId: "L3-VERTRIEB-NEO-01",
    vertiefungSteckbriefIds: ["L3-VERTRIEB-NEO-01"],
    hook: { text: "Ein Kunde lädt sein E-Auto jede Nacht – manchmal für 2 €, manchmal für 8 €, je nach Uhrzeit. Der Versorger verdient in beiden Fällen exakt dasselbe. Wie kann das ein Geschäftsmodell sein?" },
    kernidee: {
      text: "Tibber dreht das klassische Versorgermodell um: Strom wird ohne Aufschlag zum stündlichen Börsenpreis (EPEX Spot) weitergegeben. Der gesamte Erlös – rund 5,99 €/Monat – kommt aus einer Abogebühr für die App, die Verbrauch (EV, Wärmepumpe, Speicher) automatisch in günstige Stunden verschiebt. Tibber verdient an der Software, nicht am Strom.",
      geldfluss: {
        nodes: [{ id: "kunde", label: "Kunde" }, { id: "boerse", label: "Strombörse" }, { id: "tibber", label: "Tibber" }],
        edges: [
          { from: "kunde", to: "boerse", label: "Stundenpreis, 1:1 ohne Aufschlag" },
          { from: "kunde", to: "tibber", label: "5,99 €/Monat Abo" }
        ]
      }
    },
    workedExample: {
      steckbriefId: "L3-VERTRIEB-NEO-01",
      steps: [
        { text: "Ein Tibber-Kunde steckt sein E-Auto abends an. Die App kennt bereits seit mittags die Börsenpreise für jede Stunde des Folgetags und wählt den Ladezeitpunkt selbstständig – der Kunde gibt nur vor, bis wann der Akku voll sein muss.", questionId: "Q-TIBBER-WE1" },
        { text: "Jede durch kluges Laden eingesparte Kilowattstunde bleibt vollständig beim Kunden – Tibber reicht den Börsenpreis ohne eigenen Aufschlag durch. Tibbers gesamter Erlös je Kunde ist die Abogebühr von 5,99 €/Monat, unabhängig vom Verbrauch.", questionId: "Q-TIBBER-WE2" }
      ]
    },
    retrievalItemIds: ["Q-TIBBER-R1", "Q-TIBBER-R2", "Q-TIBBER-R3", "Q-TIBBER-R4", "Q-TIBBER-R5", "Q-TIBBER-R6"],
    transferItemId: "Q-TIBBER-T1",
    merkeDirEinenSatz: {
      prompt: "Formuliere in einem Satz: Woran verdient Tibber wirklich?",
      musterantwort: "Tibber verdient an einer monatlichen Abogebühr für Automatisierung, nicht am Strompreis selbst – der Strom wird ohne Aufschlag durchgereicht."
    }
  },
  {
    id: "U-TRANSPARENZ",
    moduleId: "M4-VERKAUFEN",
    title: "Ostrom & aWATTar — Transparenz ist nicht gleich Offenheit",
    primarySteckbriefId: "L3-VERTRIEB-NEO-03",
    vertiefungSteckbriefIds: ["L3-VERTRIEB-NEO-03", "L3-VERTRIEB-NEO-04"],
    hook: { text: "Zwei Anbieter versprechen radikale Ehrlichkeit beim Strompreis – der eine hat trotzdem eine App, der andere absichtlich keine. Was unterscheidet 'Transparenz' von 'Offenheit'?" },
    kernidee: {
      text: "Ostrom und aWATTar verzichten beide auf Lockangebote und verlangen nur einen fixen, offen ausgewiesenen Aufschlag auf den Börsenpreis. Der Unterschied: Ostrom baut eine eigene, einfache App für maximales Vertrauen, aWATTar verzichtet komplett auf eine App und stellt stattdessen eine offene API für die Entwickler-Community bereit – 'keine Vendor-Lock-in' statt 'volle Kontrolle'.",
      geldfluss: {
        nodes: [{ id: "kunde", label: "Kunde" }, { id: "boerse", label: "Strombörse" }, { id: "anbieter", label: "Ostrom / aWATTar" }],
        edges: [
          { from: "kunde", to: "boerse", label: "transparenter Spotpreis" },
          { from: "kunde", to: "anbieter", label: "fixer Aufschlag (~1 ct bzw. ~0,3 ct/kWh)" }
        ]
      }
    },
    workedExample: {
      steckbriefId: "L3-VERTRIEB-NEO-03",
      steps: [
        { text: "Ein Ostrom-Kunde sieht auf seiner Rechnung genau vier Posten: EPEX-Monatsdurchschnitt, Netzentgelte, Steuern/Abgaben und die fixe Ostrom-Marge von ca. 1 ct/kWh. Kein Lockpreis, keine Preisgarantie mit Fußnoten.", questionId: "Q-TRANSPARENZ-WE1" },
        { text: "Diese Rechnung sieht in Monat 1 genauso aus wie in Monat 25. Im direkten Preisvergleich auf Check24 wirkt Ostrom dadurch oft teurer als Lockangebote – und trotzdem liegt die Kündigungsquote bei nur ~5%/Jahr, während Lockangebot-Anbieter 20–30% sehen.", questionId: "Q-TRANSPARENZ-WE2" }
      ]
    },
    retrievalItemIds: ["Q-TRANSPARENZ-R1", "Q-TRANSPARENZ-R2", "Q-TRANSPARENZ-R3", "Q-TRANSPARENZ-R4"],
    transferItemId: "Q-TRANSPARENZ-T1",
    merkeDirEinenSatz: {
      prompt: "Formuliere in einem Satz: Was ist der Kernunterschied zwischen Ostrom und aWATTar, obwohl beide 'nur' den Börsenpreis plus Aufschlag verlangen?",
      musterantwort: "Ostrom baut Vertrauen über eine eigene, einfache App auf, während aWATTar bewusst auf eine App verzichtet und stattdessen mit einer offenen API die Kontrolle vollständig an die Entwickler-Community abgibt."
    }
  },
  {
    id: "U-OCTOPUS",
    moduleId: "M4-VERKAUFEN",
    title: "Octopus Energy — Der Kostenvorteil einer Plattform",
    primarySteckbriefId: "L3-VERTRIEB-NEO-05",
    vertiefungSteckbriefIds: ["L3-VERTRIEB-NEO-05"],
    hook: { text: "Ein Versorger verdoppelt seine Kundenzahl in Deutschland innerhalb von zwölf Monaten – und verkauft parallel die eigene Software an seine Konkurrenten. Wie passt das zusammen?" },
    kernidee: {
      text: "Octopus Energy wächst nicht primär über den Tarif, sondern über die selbst entwickelte Plattform Kraken: ein Cloud-Kernsystem, das Abrechnung, CRM und Gerätesteuerung radikal automatisiert und den Cost-to-Serve massiv senkt. Der Kostenvorteil erlaubt aggressive Tarife bei positiver Marge – und wird zusätzlich an Wettbewerber wie EDF oder E.ON Next lizenziert.",
      geldfluss: {
        nodes: [{ id: "kunde", label: "Kunde" }, { id: "octopus", label: "Octopus" }, { id: "wettbewerber", label: "Wettbewerber" }],
        edges: [
          { from: "kunde", to: "octopus", label: "Retail-Marge + Bundles" },
          { from: "wettbewerber", to: "octopus", label: "Kraken-Lizenzgebühr" }
        ]
      }
    },
    workedExample: {
      steckbriefId: "L3-VERTRIEB-NEO-05",
      steps: [
        { text: "Ein Umzug mit Zählerwechsel und Abschlagsanpassung ist einer der häufigsten Servicefälle im Massengeschäft. Bei einem Incumbent durchläuft der Vorgang mehrere gewachsene, getrennte IT-Systeme – bei Octopus läuft er komplett in Kraken.", questionId: "Q-OCTOPUS-WE1" },
        { text: "Kraken drückt Octopus' Betriebskosten je Kunde deutlich unter das Niveau der etablierten Versorger. Parallel wuchs die deutsche Kundenzahl von rund 500.000 auf über 1 Mio. binnen zwölf Monaten (bis Sept. 2025).", questionId: "Q-OCTOPUS-WE2" }
      ]
    },
    retrievalItemIds: ["Q-OCTOPUS-R1", "Q-OCTOPUS-R2", "Q-OCTOPUS-R3", "Q-OCTOPUS-R4"],
    transferItemId: "Q-OCTOPUS-T1",
    merkeDirEinenSatz: {
      prompt: "Formuliere in einem Satz: Worin liegt Octopus Energys eigentlicher Wettbewerbsvorteil?",
      musterantwort: "Nicht im Tarif selbst, sondern im Betriebskostenvorteil der selbst entwickelten Kraken-Plattform, die zusätzlich an Wettbewerber lizenziert wird."
    }
  },
  {
    id: "U-IMPACT",
    moduleId: "M4-VERKAUFEN",
    title: "Fünf Grad & Premium-Ökostrom — Zusätzlichkeit statt Zertifikat",
    primarySteckbriefId: "L3-VERTRIEB-NEO-02",
    vertiefungSteckbriefIds: ["L3-VERTRIEB-NEO-02", "L3-VERTRIEB-OEKO-01"],
    hook: { text: "Ein Stromanbieter verlangt bewusst 2-3 ct/kWh mehr als der Marktdurchschnitt – und wächst trotzdem fast nur durch Mundpropaganda. Was verkauft er eigentlich?" },
    kernidee: {
      text: "Fünf Grad und Premium-Ökostromanbieter wie Naturstrom verkaufen keinen anderen Strom (physikalisch fließt überall derselbe Netzmix), sondern eine glaubwürdige, geprüfte Zusatzwirkung: Fünf Grad finanziert zertifizierte Naturschutzprojekte, Naturstrom schließt Direktlieferverträge nur mit neuen, unter 10 Jahre alten EE-Anlagen statt billige HKN-Zertifikate von uralten Wasserkraftwerken zuzukaufen.",
      geldfluss: {
        nodes: [{ id: "kunde", label: "Kunde" }, { id: "anbieter", label: "Anbieter" }, { id: "projekt", label: "Projekt/Anlage" }],
        edges: [
          { from: "kunde", to: "anbieter", label: "Aufpreis 2-3 ct/kWh" },
          { from: "anbieter", to: "projekt", label: "zweckgebundene Finanzierung / Direktvertrag" }
        ]
      }
    },
    workedExample: {
      steckbriefId: "L3-VERTRIEB-NEO-02",
      steps: [
        { text: "Ein Haushalt mit 3.500 kWh Jahresverbrauch zahlt bei Fünf Grad einen Aufpreis von 2-3 ct/kWh, also rund 70-105 € im Jahr. Davon fließen etwa 0,5 ct/kWh (~17,50 €) zweckgebunden in ein konkretes, auditiertes Projekt wie eine Torfmoor-Renaturierung.", questionId: "Q-IMPACT-WE1" },
        { text: "Ein Konzern-Ökotarif deckt seinen Grünstrom-Anspruch dagegen meist über günstig zugekaufte Herkunftsnachweise (HKN) – oft von norwegischen Wasserkraftwerken, die seit über 30 Jahren laufen. Fünf Grad wirbt damit, dass genau das bei ihnen nicht passiert.", questionId: "Q-IMPACT-WE2" }
      ]
    },
    retrievalItemIds: ["Q-IMPACT-R1", "Q-IMPACT-R2", "Q-IMPACT-R3", "Q-IMPACT-R4"],
    transferItemId: "Q-IMPACT-T1",
    merkeDirEinenSatz: {
      prompt: "Formuliere in einem Satz: Was verkaufen Fünf Grad und Naturstrom eigentlich, wenn der Strom im Netz physikalisch identisch ist?",
      musterantwort: "Sie verkaufen eine geprüfte, zusätzliche Klimawirkung bzw. Herkunftsgarantie aus Neuanlagen – nicht anderen Strom, sondern einen glaubwürdigen vertraglichen Beschaffungsmechanismus."
    }
  },
  {
    id: "U-STADTWERK",
    moduleId: "M4-VERKAUFEN",
    title: "Stadtwerke — Der Querverbund als stiller Wettbewerbsvorteil",
    primarySteckbriefId: "L3-VERTRIEB-STADTWERK-01",
    vertiefungSteckbriefIds: ["L3-VERTRIEB-STADTWERK-01"],
    hook: { text: "Ein Energieversorger finanziert mit seinen Gewinnen eine U-Bahn, die dauerhaft Verluste macht – und das ist völlig legal und Absicht. Wie funktioniert das?" },
    kernidee: {
      text: "Stadtwerke sind kommunale Mehrsparten-Unternehmen: profitable Strom-, Gas- und Wärmenetzsparten quersubventionieren steuerlich optimiert (§4 Abs. 6 KStG) den defizitären ÖPNV. Diese Verschränkung sichert niedrige Kapitalkosten und sehr lange, stabile Kundenbeziehungen (30-50 Jahre) – aber auch strukturell langsame Entscheidungsprozesse.",
      geldfluss: {
        nodes: [{ id: "kunde", label: "Kunde" }, { id: "stadtwerk", label: "Stadtwerk" }, { id: "oepnv", label: "ÖPNV" }],
        edges: [
          { from: "kunde", to: "stadtwerk", label: "Energie-/Netzentgelte (profitabel)" },
          { from: "stadtwerk", to: "oepnv", label: "Quersubvention (§4 Abs.6 KStG)" }
        ]
      }
    },
    workedExample: {
      steckbriefId: "L3-VERTRIEB-STADTWERK-01",
      steps: [
        { text: "SWM betreibt profitable Strom-, Gas- und Fernwärmenetze – und gleichzeitig U-Bahn und Tram, die dauerhaft Verluste machen. Rechtliche Grundlage dieser Kombination ist §4 Abs. 6 KStG.", questionId: "Q-STADTWERK-WE1" },
        { text: "Fernwärmenetz-Ausbau und neue Tram-Linien werden bei SWM nicht von zwei getrennten, konkurrierenden Unternehmen geplant, sondern im selben Konzern – mit dem Stadtrat als letzter Entscheidungsinstanz.", questionId: "Q-STADTWERK-WE2" }
      ]
    },
    retrievalItemIds: ["Q-STADTWERK-R1", "Q-STADTWERK-R2", "Q-STADTWERK-R3", "Q-STADTWERK-R4"],
    transferItemId: "Q-STADTWERK-T1",
    merkeDirEinenSatz: {
      prompt: "Formuliere in einem Satz: Warum kann sich ein Stadtwerk eine Investitionsstrategie leisten, die ein rein gewinnorientierter privater Versorger sich nicht leisten würde?",
      musterantwort: "Weil der steuerlich begünstigte Querverbund profitable Energiesparten mit defizitärem ÖPNV verrechnen darf, wodurch Investitionsentscheidungen nicht rein renditegetrieben getroffen werden müssen."
    }
  },
  {
    id: "U-VERGLEICH",
    moduleId: "M4-VERKAUFEN",
    title: "Vergleichsportale — Wer zahlt für die Bestenliste?",
    primarySteckbriefId: "L3-VERGL-B2C-01",
    vertiefungSteckbriefIds: ["L3-VERGL-B2C-01", "L3-VERGL-B2C-02", "L3-VERGL-B2B-01"],
    hook: { text: "Ein Vergleichsportal zeigt dir 'alle' Stromtarife an – aber die Reihenfolge hat oft mehr mit Provisionen zu tun als mit dem günstigsten Preis. Wie verdient so ein Portal überhaupt Geld?" },
    kernidee: {
      text: "Verivox und Check24 verdienen nicht am Strompreis, sondern an einer Cost-per-Acquisition-Provision (20-150 € je vermitteltem Kunden), die der Lieferant zahlt – Sichtbarkeit ist also teilweise käuflich. Wechselpilot geht einen Schritt weiter: Statt einmaliger Vermittlung übernimmt es per Vollmacht den jährlichen Wechsel dauerhaft gegen ein Abo. Im B2B-Bereich funktionieren Ausschreibungsplattformen wie energie.de nach demselben Vermittlungsprinzip, nur mit Brokergebühr statt CPA.",
      geldfluss: {
        nodes: [{ id: "lieferant", label: "Lieferant" }, { id: "portal", label: "Portal" }, { id: "kunde", label: "Kunde" }],
        edges: [
          { from: "lieferant", to: "portal", label: "CPA-Provision (20-150 €)" },
          { from: "kunde", to: "portal", label: "kostenlos" }
        ]
      }
    },
    workedExample: {
      steckbriefId: "L3-VERGL-B2C-01",
      steps: [
        { text: "Ein Kunde mit 3.500 kWh Jahresverbrauch gibt auf Check24 seine Postleitzahl ein und bekommt eine sortierte Tarifliste. Was viele nicht wissen: Das Portal hat nicht mit jedem Lieferanten am Markt eine Geschäftsbeziehung – und die gelisteten Lieferanten zahlen unterschiedlich hohe Provisionen.", questionId: "Q-VERGLEICH-WE1" },
        { text: "Schließt der Kunde einen Vertrag ab, zahlt der Lieferant 20-60 € (Strom) bzw. 80-150 € (Gas) an das Portal – unabhängig davon, ob der vermittelte Tarif tatsächlich der günstigste am Gesamtmarkt war.", questionId: "Q-VERGLEICH-WE2" }
      ]
    },
    retrievalItemIds: ["Q-VERGLEICH-R1", "Q-VERGLEICH-R2", "Q-VERGLEICH-R3", "Q-VERGLEICH-R4", "Q-VERGLEICH-R5"],
    transferItemId: "Q-VERGLEICH-T1",
    merkeDirEinenSatz: {
      prompt: "Formuliere in einem Satz: Woran verdienen Verivox/Check24 wirklich, und was bedeutet das für die 'Bestenliste', die ein Kunde sieht?",
      musterantwort: "Sie verdienen an einer Provision pro vermitteltem Vertrag, weshalb die angezeigte Reihenfolge auch von der Provisionshöhe und nicht nur vom günstigsten Preis beeinflusst wird."
    }
  },

  // ════════════════════════════════════════════════════════
  // MODUL 2 — ERZEUGEN & SPEICHERN
  // ════════════════════════════════════════════════════════
  {
    id: "U2-MERIT",
    moduleId: "M2-ERZEUGEN",
    title: "Merit Order — Wann läuft ein Kraftwerk, wann steht es?",
    primarySteckbriefId: "L3-ERZ-KONV-01",
    vertiefungSteckbriefIds: ["L3-ERZ-KONV-01"],
    hook: { text: "Ein Gaskraftwerk, das früher fast durchlief, verdient heute nur noch in wenigen hundert Stunden im Jahr Geld – und in genau diesen Stunden mehr als je zuvor. Wie passt das zusammen?" },
    kernidee: {
      text: "An der Strombörse setzt das <strong>teuerste noch benötigte</strong> Kraftwerk den Preis für alle (Merit Order) – günstigere Erzeuger kassieren die Differenz als Inframarginalrente. Ein Merchant-Erzeuger verdient den Spread zwischen seinen variablen Grenzkosten (Brennstoff + CO₂ + O&M) und dem Spotpreis: Liegt der Preis darüber, läuft die Anlage; liegt er darunter, bleibt sie stehen. Je mehr Wind- und Solarstrom einspeist, desto seltener werden diese profitablen Stunden – dafür sind sie umso wertvoller.",
      geldfluss: {
        nodes: [{ id: "boerse", label: "Börse (EPEX)" }, { id: "kraftwerk", label: "Gaskraftwerk" }, { id: "lieferant", label: "Gas + CO₂" }],
        edges: [
          { from: "boerse", to: "kraftwerk", label: "Spotpreis je MWh" },
          { from: "kraftwerk", to: "lieferant", label: "Grenzkosten (Brennstoff, Zertifikate)" }
        ]
      }
    },
    workedExample: {
      steckbriefId: "L3-ERZ-KONV-01",
      steps: [
        { text: "Ein RWE-Gaskraftwerk rechnet stündlich: Gaspreis 30 €/MWh, Wirkungsgrad 58%, CO₂-Preis 80 €/t – daraus ergeben sich variable Grenzkosten von rund 67 €/MWh.", questionId: "Q-MERIT-WE1" },
        { text: "Diese Fahr-oder-Steh-Entscheidung trifft kein Mensch mehr von Hand, sondern ein automatisiertes Handelssystem – für jede Stunde des Folgetags neu.", questionId: "Q-MERIT-WE2" }
      ]
    },
    retrievalItemIds: ["Q-MERIT-R1", "Q-MERIT-R2", "Q-MERIT-R3", "Q-MERIT-R4"],
    transferItemId: "Q-MERIT-T1",
    merkeDirEinenSatz: {
      prompt: "Formuliere in einem Satz: Warum verdient ein Gaskraftwerk heute nur noch in wenigen Stunden – aber dann besonders viel?",
      musterantwort: "Weil Wind- und Solarstrom die profitablen Stunden verdrängen: Nur wenn der Spotpreis über den Grenzkosten liegt, läuft die Anlage – und in diesen Knappheitsstunden setzt das Gaskraftwerk als teuerstes benötigtes Kraftwerk selbst den (hohen) Preis."
    }
  },
  {
    id: "U2-REGELENERGIE",
    moduleId: "M2-ERZEUGEN",
    title: "Regelenergie — Verdienen am Bereitstehen",
    primarySteckbriefId: "L3-ERZ-KONV-02",
    vertiefungSteckbriefIds: ["L3-ERZ-KONV-02"],
    hook: { text: "Ein Kraftwerk bekommt Woche für Woche Geld dafür, dass es NICHT läuft, sondern nur bereitsteht. Was ist hier das Produkt?" },
    kernidee: {
      text: "Das Stromnetz braucht permanent Reserven gegen Frequenzabweichungen: <strong>FCR</strong> (Reaktion unter 30 Sekunden), <strong>aFRR</strong> (unter 5 Minuten) und <strong>mFRR</strong> (unter 15 Minuten), ausgeschrieben über regelleistung.net. Bezahlt wird zweistufig: Der <strong>Leistungspreis</strong> (€/MW/h) vergütet das reine Vorhalten – unabhängig vom Abruf –, der <strong>Arbeitspreis</strong> (€/MWh) die tatsächlich gelieferte Energie. Der FCR-Leistungspreis war lange die attraktivste Komponente – bis Batteriespeicher den Markt fluteten.",
      geldfluss: {
        nodes: [{ id: "uenb", label: "ÜNB" }, { id: "anbieter", label: "Kraftwerk/BESS" }],
        edges: [
          { from: "uenb", to: "anbieter", label: "Leistungspreis (Vorhaltung)" },
          { from: "uenb", to: "anbieter", label: "Arbeitspreis (nur bei Abruf)" }
        ]
      }
    },
    workedExample: {
      steckbriefId: "L3-ERZ-KONV-02",
      steps: [
        { text: "Ein RWE-Kraftwerk bietet wöchentlich einen Teil seiner Kapazität für FCR an: Es verpflichtet sich, innerhalb von 30 Sekunden auf Frequenzabweichungen zu reagieren – ob die Reserve je abgerufen wird, weiß es vorher nicht.", questionId: "Q-REGEL-WE1" },
        { text: "Seit 2021 ist der FCR-Leistungspreis von über 25 €/MW/h auf zeitweise unter 10 €/MW/h gefallen.", questionId: "Q-REGEL-WE2" }
      ]
    },
    retrievalItemIds: ["Q-REGEL-R1", "Q-REGEL-R2", "Q-REGEL-R3", "Q-REGEL-R4"],
    transferItemId: "Q-REGEL-T1",
    merkeDirEinenSatz: {
      prompt: "Formuliere in einem Satz: Was ist der Unterschied zwischen Leistungspreis und Arbeitspreis?",
      musterantwort: "Der Leistungspreis vergütet das Vorhalten von Kapazität (€/MW/h, unabhängig vom Abruf), der Arbeitspreis die tatsächlich gelieferte Energie bei einem Abruf (€/MWh)."
    }
  },
  {
    id: "U2-EEG",
    moduleId: "M2-ERZEUGEN",
    title: "EEG-Marktprämie — Die Wette gegen den Referenzwert",
    primarySteckbriefId: "L3-ERZ-EE-01",
    vertiefungSteckbriefIds: ["L3-ERZ-EE-01"],
    hook: { text: "Der Staat garantiert einem Windpark 6 Cent je Kilowattstunde – aber der Scheck kommt nur, wenn der Markt weniger hergibt. Wie funktioniert diese Konstruktion?" },
    kernidee: {
      text: "Anlagen über 100 kW müssen ihren Strom selbst vermarkten und erhalten eine <strong>gleitende Marktprämie</strong>: anzulegender Wert (AW, aus der BNetzA-Ausschreibung, 20 Jahre gesichert) minus monatlicher Referenzmarktwert (RMW). Die Vermarktung übernehmen <strong>Direktvermarkter</strong>, die tausende Anlagen bündeln – ihre Marge liegt nicht in der Prämie, sondern darin, den Strom <strong>besser zu verkaufen</strong>, als der pauschale Monats-RMW unterstellt (Prognose-Outperformance, davon 20–40% Erfolgsanteil).",
      geldfluss: {
        nodes: [{ id: "boerse", label: "Börse" }, { id: "betreiber", label: "Windpark" }, { id: "uenb", label: "ÜNB (EEG)" }],
        edges: [
          { from: "boerse", to: "betreiber", label: "Spoterlös" },
          { from: "uenb", to: "betreiber", label: "Marktprämie = AW − RMW" }
        ]
      }
    },
    workedExample: {
      steckbriefId: "L3-ERZ-EE-01",
      steps: [
        { text: "Ein Windpark hat einen anzulegenden Wert von 6 ct/kWh aus der Ausschreibung gewonnen. Im laufenden Monat liegt der Referenzmarktwert für Windstrom bei 4 ct/kWh.", questionId: "Q-EEG-WE1" },
        { text: "Der Direktvermarkter des Parks verkauft die Erzeugung einer windstarken Stunde gezielt am Intraday-Markt, statt sie zum Monatsdurchschnitt zu bewerten.", questionId: "Q-EEG-WE2" }
      ]
    },
    retrievalItemIds: ["Q-EEG-R1", "Q-EEG-R2", "Q-EEG-R3", "Q-EEG-R4"],
    transferItemId: "Q-EEG-T1",
    merkeDirEinenSatz: {
      prompt: "Formuliere in einem Satz: Woran verdient der Direktvermarkter wirklich?",
      musterantwort: "Nicht an der staatlichen Marktprämie (die geht an den Anlagenbetreiber), sondern an einer Managementfee plus einem Erfolgsanteil an der Outperformance gegenüber dem Referenzmarktwert."
    }
  },
  {
    id: "U2-PPA",
    moduleId: "M2-ERZEUGEN",
    title: "PPAs — Preissicherheit als Produkt",
    primarySteckbriefId: "L3-ERZ-EE-02",
    vertiefungSteckbriefIds: ["L3-ERZ-KONV-03", "L3-ERZ-EE-02"],
    hook: { text: "Zwei Unternehmen schließen einen Stromliefervertrag über 15 Jahre – ohne dass je eine Kilowattstunde zwischen ihnen fließt. Was kaufen sie wirklich voneinander?" },
    kernidee: {
      text: "Ein <strong>PPA</strong> (Power Purchase Agreement) ist ein langfristiger bilateraler Vertrag über 5–15 Jahre. Beim dominierenden <strong>Financial PPA</strong> fließt kein Strom zwischen den Parteien: Der Windpark verkauft normal an die Börse, der Abnehmer kauft normal bei seinem Lieferanten – vertraglich gleichen beide nur die Differenz zwischen Börsenpreis und vereinbartem <strong>Strike Price</strong> aus. Der eigentliche Wert: Der Erzeuger bekommt bankfähige, planbare Cashflows (günstigere Finanzierung), der Abnehmer einen Preishedge plus grüne Zusätzlichkeit für RE100/CSRD.",
      geldfluss: {
        nodes: [{ id: "windpark", label: "Windpark" }, { id: "boerse", label: "Börse" }, { id: "abnehmer", label: "Industrie" }],
        edges: [
          { from: "windpark", to: "boerse", label: "physischer Verkauf" },
          { from: "abnehmer", to: "windpark", label: "Differenzzahlung um Strike Price (beide Richtungen)" }
        ]
      }
    },
    workedExample: {
      steckbriefId: "L3-ERZ-EE-02",
      steps: [
        { text: "RWE Renewables und BASF vereinbaren einen Financial PPA mit Strike Price 55 €/MWh. In einer bestimmten Stunde liegt der Börsenpreis bei 70 €/MWh.", questionId: "Q-PPA-WE1" },
        { text: "Mit dem unterschriebenen 15-Jahres-PPA geht RWE zur Bank, um den neuen Windpark zu finanzieren.", questionId: "Q-PPA-WE2" }
      ]
    },
    retrievalItemIds: ["Q-PPA-R1", "Q-PPA-R2", "Q-PPA-R3", "Q-PPA-R4"],
    transferItemId: "Q-PPA-T1",
    merkeDirEinenSatz: {
      prompt: "Formuliere in einem Satz: Was kauft der Industriekunde bei einem Financial PPA wirklich?",
      musterantwort: "Keinen physischen Strom, sondern Preissicherheit (Hedge über die Differenzzahlung um den Strike Price) plus nachweisbare grüne Zusätzlichkeit einer neuen Anlage."
    }
  },
  {
    id: "U2-SPEICHER",
    moduleId: "M2-ERZEUGEN",
    title: "Batteriespeicher — Erlös-Stacking & der Wert des Algorithmus",
    primarySteckbriefId: "L3-ERZ-SPEICHER-01",
    vertiefungSteckbriefIds: ["L3-ERZ-SPEICHER-01", "L3-ERZ-SPEICHER-02"],
    hook: { text: "Zwei baugleiche Batterien am selben Netzknoten – die eine verdient 50% mehr als die andere. Der Unterschied wiegt nichts und ist unsichtbar." },
    kernidee: {
      text: "Großbatterien (BESS) verdienen durch <strong>simultanes Stacking</strong>: Ein Teil der Kapazität kassiert den FCR-Leistungspreis fürs Bereitstehen, der Rest macht Intraday-<strong>Arbitrage</strong> (günstig laden bei viel EE-Einspeisung, teuer entladen im Abendpeak, Spread 15–50 €/MWh). Die Software entscheidet stündlich, welcher Markt mehr abwirft – schlechte Optimierung lässt 30–50% der Erlöse liegen. Heimspeicher spielen dasselbe Spiel im Kleinen: Hersteller wie Sonnen bündeln tausende Geräte zum virtuellen Kraftwerk und teilen die Regelenergie-Erlöse ~60:40 mit den Kunden.",
      geldfluss: {
        nodes: [{ id: "uenb", label: "ÜNB" }, { id: "bess", label: "BESS" }, { id: "boerse", label: "Börse" }],
        edges: [
          { from: "uenb", to: "bess", label: "FCR-Leistungspreis" },
          { from: "boerse", to: "bess", label: "Arbitrage-Spread (laden↔entladen)" }
        ]
      }
    },
    workedExample: {
      steckbriefId: "L3-ERZ-SPEICHER-01",
      steps: [
        { text: "Der WEMAG-Speicher in Schwerin (10 MW / 15 MWh) reserviert einen Teil für FCR; die restliche Kapazität lädt in Stunden hoher Wind-/Solareinspeisung und entlädt im Abendpeak – bei einem Spread von z.B. 30 €/MWh.", questionId: "Q-SPEICHER-WE1" },
        { text: "In der Praxis erzielen zwei baugleiche Batterien am selben Standort teils 30–50% unterschiedliche Jahreserlöse.", questionId: "Q-SPEICHER-WE2" }
      ]
    },
    retrievalItemIds: ["Q-SPEICHER-R1", "Q-SPEICHER-R2", "Q-SPEICHER-R3", "Q-SPEICHER-R4", "Q-SPEICHER-R5"],
    transferItemId: "Q-SPEICHER-T1",
    merkeDirEinenSatz: {
      prompt: "Formuliere in einem Satz: Warum ist beim Batteriespeicher die Software wichtiger als die Zelle?",
      musterantwort: "Weil die Hardware austauschbar ist, aber der Optimierungsalgorithmus stündlich entscheidet, welcher Markt (FCR, Arbitrage, aFRR) mehr abwirft – schlechte Optimierung lässt 30–50% der möglichen Erlöse liegen."
    }
  },
  {
    id: "U3-AREGV",
    moduleId: "M3-NETZE",
    title: "ARegV — Wie man an einem Monopol reguliert Geld verdient",
    primarySteckbriefId: "L3-UNB-NETZ-01",
    vertiefungSteckbriefIds: ["L3-UNB-NETZ-01", "L3-VNB-KLASSISCH-01"],
    hook: { text: "Ein Netzbetreiber hat keine Konkurrenz und kann seinen Preis trotzdem nicht frei setzen — und verdient gerade dann mehr, wenn er baut. Wer bestimmt hier die Marge?" },
    kernidee: {
      text: "Netzbetreiber sind natürliche Monopole — deshalb legt die BNetzA per <strong>Anreizregulierung (ARegV)</strong> eine Erlösobergrenze fest: anerkannte Kapitalkosten (eine kalkulatorische Eigenkapitalrendite auf die <strong>regulatorische Kapitalbasis / RAB</strong>) plus anerkannte Betriebskosten. Zwei Hebel treiben den Gewinn: <strong>Investieren</strong> (jeder gebaute Euro erhöht die RAB und damit den erlaubten Return über Jahrzehnte) und <strong>Effizienz</strong> (wer unter dem BNetzA-Benchmark liegt, behält die Einsparung mehrere Jahre). Kein Marktrisiko — dafür Regulierungsrisiko.",
      geldfluss: {
        nodes: [{ id: "kunde", label: "Netznutzer" }, { id: "netz", label: "Netzbetreiber" }, { id: "bnetza", label: "BNetzA" }],
        edges: [
          { from: "bnetza", to: "netz", label: "genehmigt Erlösobergrenze" },
          { from: "kunde", to: "netz", label: "Netzentgelt = EOG / Menge" }
        ]
      }
    },
    workedExample: {
      steckbriefId: "L3-UNB-NETZ-01",
      steps: [
        { text: "TenneT/TransnetBW bauen SuedLink für ~10 Mrd. €. Jeder investierte Euro erhöht die regulatorische Kapitalbasis (RAB), auf die die BNetzA eine kalkulatorische Eigenkapitalrendite von 5,07% (Neuanlagen) zugesteht.", questionId: "Q-AREGV-WE1" },
        { text: "Der zweite Hebel ist der Effizienzvergleich: Die BNetzA setzt per Benchmarking einen Referenzwert für die Betriebskosten.", questionId: "Q-AREGV-WE2" }
      ]
    },
    retrievalItemIds: ["Q-AREGV-R1", "Q-AREGV-R2", "Q-AREGV-R3", "Q-AREGV-R4", "Q-AREGV-R5"],
    transferItemId: "Q-AREGV-T1",
    merkeDirEinenSatz: {
      prompt: "Formuliere in einem Satz: Über welche zwei Hebel steigert ein regulierter Netzbetreiber seinen Gewinn?",
      musterantwort: "Erstens durch Investitionen (jeder Euro erhöht die RAB und damit den regulierten Return über Jahrzehnte), zweitens durch Effizienz (Betrieb unter dem BNetzA-Benchmark erlaubt es, die Einsparung mehrere Jahre zu behalten)."
    }
  },
  {
    id: "U3-REDISPATCH",
    moduleId: "M3-NETZE",
    title: "Redispatch — Was es kostet, wenn der Wind am falschen Ort weht",
    primarySteckbriefId: "L3-UNB-NETZ-02",
    vertiefungSteckbriefIds: ["L3-UNB-NETZ-02"],
    hook: { text: "Ein Windpark wird abgeregelt, obwohl der Wind perfekt weht — und bekommt trotzdem sein Geld. Gleichzeitig fährt ein Gaskraftwerk hoch. Wer zahlt für dieses Paradox?" },
    kernidee: {
      text: "Wenn der Netzausbau dem EE-Zubau hinterherhinkt, entstehen <strong>Engpässe</strong>: Der ÜNB kann nicht allen erzeugten Strom durchleiten. Beim <strong>Redispatch</strong> weist er nördlich des Engpasses Erzeugung an, herunterzufahren ('Einsatz-Down', z.B. Windpark), und südlich hoch ('Einsatz-Up', z.B. Gaskraftwerk) — die Gesamteinspeisung bleibt gleich, nur der Ort verschiebt sich. Der abgeregelte Betreiber bekommt seine Ausfallarbeit erstattet, das hochgefahrene Kraftwerk seine Mehrkosten. Beides landet als <strong>sozialisierter Kostenblock</strong> in den Netzentgelten aller.",
      geldfluss: {
        nodes: [{ id: "wind", label: "Windpark (Nord)" }, { id: "uenb", label: "ÜNB" }, { id: "gas", label: "Gaskraftwerk (Süd)" }],
        edges: [
          { from: "uenb", to: "wind", label: "Einsatz-Down + Ausfallerstattung" },
          { from: "uenb", to: "gas", label: "Einsatz-Up + Kostenerstattung" }
        ]
      }
    },
    workedExample: {
      steckbriefId: "L3-UNB-NETZ-02",
      steps: [
        { text: "Ein Windpark im 50Hertz-Gebiet meldet 100 MW an, aber eine Leitung Richtung Süden würde überlastet. 50Hertz weist den Windpark auf 60 MW herunter und ein Gaskraftwerk südlich des Engpasses auf +40 MW.", questionId: "Q-REDISPATCH-WE1" },
        { text: "Bundesweit hat sich das Eingriffsvolumen von 4.249 GWh (2014) auf rund 22.000 GWh (2022) mehr als verfünffacht.", questionId: "Q-REDISPATCH-WE2" }
      ]
    },
    retrievalItemIds: ["Q-REDISPATCH-R1", "Q-REDISPATCH-R2", "Q-REDISPATCH-R3", "Q-REDISPATCH-R4"],
    transferItemId: "Q-REDISPATCH-T1",
    merkeDirEinenSatz: {
      prompt: "Formuliere in einem Satz: Warum hat der ÜNB kaum finanziellen Anreiz, die Redispatch-Kosten zu minimieren?",
      musterantwort: "Weil die Kosten vollständig über die Netzentgelte auf alle Verbraucher umgelegt (sozialisiert) werden — der ÜNB trägt sie nicht selbst, deshalb drängen Politik und Regulierer auf marktliche Alternativen."
    }
  },
  {
    id: "U3-BILANZ",
    moduleId: "M3-NETZE",
    title: "Bilanzkreise — Warum gute Prognose bares Geld ist",
    primarySteckbriefId: "L3-UNB-NETZ-03",
    vertiefungSteckbriefIds: ["L3-UNB-NETZ-03"],
    hook: { text: "Zwei Stadtwerke verkaufen denselben Strom an ähnliche Kunden. Das eine verdient zuverlässig, das andere verliert regelmäßig Geld — der Unterschied liegt in der Wettervorhersage. Wie das?" },
    kernidee: {
      text: "Der Strommarkt ist über <strong>Bilanzkreise</strong> organisiert: Jeder Lieferant meldet dem ÜNB für jede Stunde, wie viel seine Kunden verbrauchen werden. Weicht der tatsächliche Verbrauch ab, entsteht <strong>Ausgleichsenergie</strong> — Unterdeckung muss teuer nachgekauft werden (Preis in Knappheitsstunden weit über Spot), Überdeckung wird nur gering vergütet. Für den ÜNB ist das ein Nullsummen-Durchleitungssystem; für den Lieferanten ist die <strong>Prognosegüte</strong> ein direkter Margenhebel.",
      geldfluss: {
        nodes: [{ id: "lieferant", label: "Lieferant (BKV)" }, { id: "uenb", label: "ÜNB" }],
        edges: [
          { from: "lieferant", to: "uenb", label: "Fahrplan (Prognose)" },
          { from: "uenb", to: "lieferant", label: "Ausgleichsenergie bei Abweichung" }
        ]
      }
    },
    workedExample: {
      steckbriefId: "L3-UNB-NETZ-03",
      steps: [
        { text: "Ein Stadtwerk führt einen Bilanzkreis bei Amprion. Es wird kälter als prognostiziert, die Kunden verbrauchen mehr als gemeldet — eine Unterdeckung entsteht.", questionId: "Q-BILANZ-WE1" },
        { text: "Diese Unterdeckung muss das Stadtwerk zum Ausgleichsenergiepreis decken, der in Knappheitsstunden deutlich über dem Spotpreis liegt.", questionId: "Q-BILANZ-WE2" }
      ]
    },
    retrievalItemIds: ["Q-BILANZ-R1", "Q-BILANZ-R2", "Q-BILANZ-R3", "Q-BILANZ-R4"],
    transferItemId: "Q-BILANZ-T1",
    merkeDirEinenSatz: {
      prompt: "Formuliere in einem Satz: Warum lohnt sich für einen Lieferanten die Investition in bessere Lastprognose direkt?",
      musterantwort: "Weil jede Abweichung zwischen gemeldetem Fahrplan und tatsächlichem Verbrauch teure Ausgleichsenergie auslöst — schon 1% Prognosefehler kann bei einem mittelgroßen Portfolio mehrere hunderttausend Euro im Jahr kosten."
    }
  },
  {
    id: "U3-14A",
    moduleId: "M3-NETZE",
    title: "§14a & Smart Meter — Das Netz lernt steuern statt bauen",
    primarySteckbriefId: "L3-VNB-NEU-01",
    vertiefungSteckbriefIds: ["L3-VNB-NEU-01", "L3-VNB-KLASSISCH-02"],
    hook: { text: "Ein Verteilnetzbetreiber darf deine Wärmepumpe für zwei Stunden drosseln — und zahlt dir dafür bis zu 190 € im Jahr. Warum ist das für ihn ein gutes Geschäft?" },
    kernidee: {
      text: "Wärmepumpen und E-Auto-Wallboxen verdoppeln lokal die Netzlast. Statt jeden Trafo teuer auszubauen, darf der VNB seit 2024 per <strong>§14a EnWG</strong> solche steuerbaren Verbrauchseinrichtungen bei Engpässen temporär auf 4,2 kW dimmen (max. 2h am Stück) — der Kunde bekommt dafür einen Netzentgeltnachlass (100–190 €/Jahr). Voraussetzung ist der <strong>Smart-Meter-Rollout</strong>: Ohne Smart Meter Gateway (SMGW) keine Steuerung. Die eigentliche Marge wandert vom reinen Messen hin zu den Datenservices über dem Zähler.",
      geldfluss: {
        nodes: [{ id: "vnb", label: "VNB" }, { id: "kunde", label: "Kunde (WP/EV)" }],
        edges: [
          { from: "vnb", to: "kunde", label: "Dimmen bei Engpass + Netzentgeltnachlass" },
          { from: "kunde", to: "vnb", label: "Flexibilität statt Trafo-Ausbau" }
        ]
      }
    },
    workedExample: {
      steckbriefId: "L3-VNB-NEU-01",
      steps: [
        { text: "Im Netze-BW-Gebiet lädt ein Haushalt um 18 Uhr mit 11 kW, während viele Nachbarn ihre Wärmepumpen hochfahren — der lokale Trafo droht zu überlasten. Der VNB dimmt die Wallbox per Steuersignal für maximal zwei Stunden auf 4,2 kW.", questionId: "Q-14A-WE1" },
        { text: "Ein einzelner Trafo-Tausch in dieser Straße hätte 30.000–100.000 € gekostet.", questionId: "Q-14A-WE2" }
      ]
    },
    retrievalItemIds: ["Q-14A-R1", "Q-14A-R2", "Q-14A-R3", "Q-14A-R4"],
    transferItemId: "Q-14A-T1",
    merkeDirEinenSatz: {
      prompt: "Formuliere in einem Satz: Warum ist §14a für den VNB wirtschaftlich attraktiv?",
      musterantwort: "Weil er teuren Trafo-Ausbau (30.000–100.000 €) durch temporäres Dimmen ersetzt und die dafür nötige Steuer-Infrastruktur regulatorisch als RAB-relevantes Betriebsmittel anerkannt wird — er spart Capex und darf die Flex-Technik trotzdem verzinsen."
    }
  },
  {
    id: "U3-BETREIB",
    moduleId: "M3-NETZE",
    title: "Wem gehört das Netz? — Betreibermodelle & Rekommunalisierung",
    primarySteckbriefId: "L3-VNB-BETREIB-05",
    vertiefungSteckbriefIds: ["L3-VNB-BETREIB-01", "L3-VNB-BETREIB-05"],
    hook: { text: "Alle 20 Jahre können Städte ihr Stromnetz zurückkaufen — und viele tun es. Was steckt hinter dieser stillen Rückabwicklung der Privatisierung?" },
    kernidee: {
      text: "Hinter der einheitlichen ARegV-Regulierung steht eine offene Strukturfrage: Wer hält <strong>Eigentum, Betrieb und Konzession</strong>? Beim kommunalen Eigenbetrieb bleibt der volle regulierte Return im Stadtwerke-Konzern. Die <strong>Konzession</strong> (§46 EnWG, Wegerecht fürs Netz) wird aber nur befristet (meist 20 Jahre) vergeben — läuft sie aus, kann die Kommune das Netz zurückkaufen (<strong>Rekommunalisierung</strong>), um Wertschöpfung, Gewinne und Steuerungshoheit über die Wärmewende in kommunale Hand zu holen. Jede Konzessionsrunde ist damit ein natürlicher Angriffs- und Wechselpunkt.",
      geldfluss: {
        nodes: [{ id: "kommune", label: "Kommune" }, { id: "netz", label: "Netz" }, { id: "return", label: "Reg. Return" }],
        edges: [
          { from: "kommune", to: "netz", label: "Rückkauf bei Konzessionsende" },
          { from: "netz", to: "return", label: "RAB-Rendite bleibt kommunal" }
        ]
      }
    },
    workedExample: {
      steckbriefId: "L3-VNB-BETREIB-05",
      steps: [
        { text: "Eine Stadt lässt ihre 20-jährige Netzkonzession auslaufen und kauft das Verteilnetz vom bisherigen Betreiber zurück, statt die Konzession erneut zu vergeben.", questionId: "Q-BETREIB-WE1" },
        { text: "Der regulierte Return auf die RAB fließt nun vollständig in den kommunalen Haushalt statt an einen externen Netzkonzern.", questionId: "Q-BETREIB-WE2" }
      ]
    },
    retrievalItemIds: ["Q-BETREIB-R1", "Q-BETREIB-R2", "Q-BETREIB-R3", "Q-BETREIB-R4"],
    transferItemId: "Q-BETREIB-T1",
    merkeDirEinenSatz: {
      prompt: "Formuliere in einem Satz: Was macht das Konzessionsende (§46 EnWG) zum kritischen Moment im Netzgeschäft?",
      musterantwort: "Weil die Konzession nur befristet (meist 20 Jahre) vergeben wird und bei Auslauf die Kommune das Netz zurückkaufen (rekommunalisieren) kann — der einzige Zeitpunkt, an dem ein sonst festes Monopol den Betreiber wechseln kann."
    }
  },
  {
    id: "U3-GAS",
    moduleId: "M3-NETZE",
    title: "Gasnetz & H2-Kernnetz — Stranded Asset oder Backbone der Zukunft?",
    primarySteckbriefId: "L3-GAS-FNB-02",
    vertiefungSteckbriefIds: ["L3-GAS-FNB-01", "L3-GAS-FNB-02"],
    hook: { text: "Ein Netzbetreiber baut eine Milliarden-Leitung für einen Markt, den es noch gar nicht gibt — und trägt trotzdem kaum Risiko. Wie kann das sein?" },
    kernidee: {
      text: "Das Erdgas-Fernleitungsnetz steht vor einer <strong>Mengenerosion</strong>: Elektrifizierung (Wärmepumpen, Prozesswärme) entzieht ihm die Durchleitung, auf der die Entgeltbasis ruht — sinkende Mengen bei fixen Kosten treiben die Entgelte und beschleunigen die Abwanderung (<strong>Death Spiral</strong>). Der Ausweg ist das <strong>H2-Kernnetz</strong> (~9.040 km, 2024 genehmigt, ~60% umgewidmete Gasleitungen): Über ein staatlich abgesichertes <strong>Amortisationskonto</strong> baut der FNB die Leitung vor, bevor genügend H2-Kunden da sind — der Staat trägt das Henne-Ei-Risiko der Anlaufphase.",
      geldfluss: {
        nodes: [{ id: "fnb", label: "FNB" }, { id: "konto", label: "Amortisationskonto" }, { id: "kunde", label: "H2-Kunden (später)" }],
        edges: [
          { from: "konto", to: "fnb", label: "deckt frühe Kostenlücke (Staat)" },
          { from: "kunde", to: "fnb", label: "H2-Netzentgelte (nach Ramp-up)" }
        ]
      }
    },
    workedExample: {
      steckbriefId: "L3-GAS-FNB-02",
      steps: [
        { text: "OGE baut eine H2-Leitung, bevor genug zahlende Industriekunden angeschlossen sind — ein klassisches Henne-Ei-Problem: keine Kunden ohne Leitung, keine Leitung ohne Kunden.", questionId: "Q-GAS-WE1" },
        { text: "Das Amortisationskonto lässt den Staat die Differenz zwischen echten Leitungskosten und den anfangs niedrigen H2-Netzentgelten vorübergehend tragen.", questionId: "Q-GAS-WE2" }
      ]
    },
    retrievalItemIds: ["Q-GAS-R1", "Q-GAS-R2", "Q-GAS-R3", "Q-GAS-R4"],
    transferItemId: "Q-GAS-T1",
    merkeDirEinenSatz: {
      prompt: "Formuliere in einem Satz: Was ist die 'Death Spiral' des Gasnetzes?",
      musterantwort: "Sinkende Durchleitungsmengen bei fixen Netzkosten treiben die Netzentgelte je Kunde nach oben, was weitere Kunden zum Ausstieg (Elektrifizierung) motiviert — ein sich selbst verstärkender Abwärtssog, der ohne H2-Repurposing im Stranded Asset endet."
    }
  },
  {
    id: "U1-BOERSE",
    moduleId: "M1-SPIELFELD",
    title: "Die Strombörse — Wo der Preis entsteht",
    primarySteckbriefId: "L3-HANDEL-BOERSE-01",
    vertiefungSteckbriefIds: ["L3-HANDEL-BOERSE-01"],
    hook: { text: "Ein Unternehmen wickelt über 700 Milliarden Kilowattstunden Stromhandel im Jahr ab — und ist es völlig egal, ob der Strompreis bei 20 oder 200 € liegt. Wie kann das sein?" },
    kernidee: {
      text: "Die <strong>Strombörse</strong> (EPEX SPOT für kurzfristig, EEX für Termingeschäfte) ist der zentrale Marktplatz, an dem sich der Strompreis bildet: In der täglichen <strong>Day-Ahead-Auktion</strong> geben tausende Teilnehmer Gebote für jede Stunde des Folgetags ab, ein Algorithmus ermittelt den markträumenden Preis. Die Börse verdient nicht am Preis, sondern an einer winzigen <strong>Transaktionsgebühr</strong> (0,03–0,15 €/MWh) — reine Infrastrukturrolle ohne Preisrisiko. Ihr Schutz ist der <strong>Netzwerkeffekt</strong>: Liquidität zieht Liquidität, ein Newcomer bekommt die kritische Masse kaum aufgebaut.",
      geldfluss: {
        nodes: [{ id: "kauf", label: "Käufer" }, { id: "boerse", label: "Börse" }, { id: "verkauf", label: "Verkäufer" }],
        edges: [
          { from: "kauf", to: "boerse", label: "Gebot + Transaktionsgebühr" },
          { from: "boerse", to: "verkauf", label: "markträumender Preis" }
        ]
      }
    },
    workedExample: {
      steckbriefId: "L3-HANDEL-BOERSE-01",
      steps: [
        { text: "Bei der Day-Ahead-Auktion geben Kraftwerksbetreiber, Lieferanten und Industrie ihre Kauf-/Verkaufsgebote für jede Stunde des Folgetags ab; die Börse ermittelt den Preis, bei dem sich Angebot und Nachfrage treffen.", questionId: "Q-BOERSE-WE1" },
        { text: "EPEX SPOT kassiert dafür wenige Cent pro MWh — bei mehreren hundert TWh Jahresvolumen ein verlässliches Geschäft, völlig unabhängig von der Höhe des Strompreises.", questionId: "Q-BOERSE-WE2" }
      ]
    },
    retrievalItemIds: ["Q-BOERSE-R1", "Q-BOERSE-R2", "Q-BOERSE-R3", "Q-BOERSE-R4"],
    transferItemId: "Q-BOERSE-T1",
    merkeDirEinenSatz: {
      prompt: "Formuliere in einem Satz: Woran verdient eine Strombörse — und was schützt sie vor Konkurrenz?",
      musterantwort: "Sie verdient an einer kleinen Transaktionsgebühr je gehandelter MWh, unabhängig vom Strompreis, und wird durch den Netzwerkeffekt geschützt: Liquidität zieht Liquidität, was neuen Konkurrenzbörsen den Markteintritt extrem erschwert."
    }
  },
  {
    id: "U1-PROP",
    moduleId: "M1-SPIELFELD",
    title: "Prop Trading — Geld verdienen mit besseren Prognosen",
    primarySteckbriefId: "L3-HANDEL-PORTFOLIO-01",
    vertiefungSteckbriefIds: ["L3-HANDEL-PORTFOLIO-01"],
    hook: { text: "Ein Händler verdient Millionen damit, dass er das Wetter von übermorgen ein bisschen besser kennt als der Markt. Warum verschwindet dieser Vorteil ständig — und muss immer neu erkämpft werden?" },
    kernidee: {
      text: "Beim <strong>Prop Trading</strong> (Handel auf eigene Rechnung) wandelt ein Händler Marktpreisrisiken in Gewinne um — etwa über den <strong>Clean Spark Spread</strong> (Strom vs. Gas + CO₂) oder Positionen auf Basis eigener EE-Prognosen. Die einzige nachhaltige Gewinnquelle ist ein <strong>Informationsvorsprung</strong>: ein besseres Wettermodell, schnellere Daten. Genau der wird aber laufend wegkommoditisiert — sobald ein Vorsprung bekannt ist, verschwindet die Marge. Alles läuft streng im Rahmen eines <strong>Risikobudgets (VAR)</strong> und unter REMIT-/MiFID-II-Compliance.",
      geldfluss: {
        nodes: [{ id: "prognose", label: "Prognose-Vorsprung" }, { id: "trader", label: "Trader (Eigenbuch)" }, { id: "markt", label: "Markt" }],
        edges: [
          { from: "prognose", to: "trader", label: "Alpha (temporär)" },
          { from: "markt", to: "trader", label: "P&L (VAR-begrenzt)" }
        ]
      }
    },
    workedExample: {
      steckbriefId: "L3-HANDEL-PORTFOLIO-01",
      steps: [
        { text: "Ein Trader sieht im eigenen Wettermodell mehr Wind für übermorgen, als der Markt einpreist — der Day-Ahead-Preis für die Mittagsstunden wird also fallen. Er verkauft heute Strom auf Termin, um morgen günstiger zurückzukaufen.", questionId: "Q-PROP-WE1" },
        { text: "Trifft die Prognose zu, kassiert er die Differenz; trifft sie nicht zu, trägt er den Verlust innerhalb seines VAR-Limits.", questionId: "Q-PROP-WE2" }
      ]
    },
    retrievalItemIds: ["Q-PROP-R1", "Q-PROP-R2", "Q-PROP-R3", "Q-PROP-R4"],
    transferItemId: "Q-PROP-T1",
    merkeDirEinenSatz: {
      prompt: "Formuliere in einem Satz: Warum ist ein Handelsvorteil im Prop Trading immer nur vorübergehend?",
      musterantwort: "Weil die einzige nachhaltige Alpha-Quelle ein Informationsvorsprung (besseres Prognosemodell, schnellere Daten) ist — sobald er allgemein bekannt oder käuflich wird, preist ihn der Markt ein und die Marge verschwindet, sodass der nächste Vorsprung gefunden werden muss."
    }
  },
  {
    id: "U1-ZERTIFIKATE",
    moduleId: "M1-SPIELFELD",
    title: "CO₂ & Herkunft — Die Märkte für das Unsichtbare",
    primarySteckbriefId: "L3-HANDEL-ZERTIF-01",
    vertiefungSteckbriefIds: ["L3-HANDEL-ZERTIF-01"],
    hook: { text: "Zwei Kunden bekommen exakt denselben Strom aus derselben Steckdose — der eine zahlt für ein 'Ökostrom'-Zertifikat 10 Cent, der andere 5 Euro. Warum der Riesenunterschied?" },
    kernidee: {
      text: "Zwei getrennte Zertifikatemärkte prägen die Energiewirtschaft. <strong>Herkunftsnachweise (HKN)</strong> bescheinigen, dass 1 MWh aus einer bestimmten EE-Quelle stammt — getrennt vom physischen Strom; Massen-HKN aus alten Wasserkraftwerken kosten Cent, Premium-HKN mit <strong>Zusätzlichkeit</strong> (Neuanlagen, 24/7-Matching) das Vielfache. Der <strong>EU-Emissionshandel (EU ETS)</strong> dagegen ist ein Pflichtmarkt: Stromerzeuger und Industrie müssen für jede Tonne CO₂ ein Zertifikat (EUA, >80 €/t) kaufen — das macht CO₂ zum echten Kostenfaktor jeder fossilen Kilowattstunde.",
      geldfluss: {
        nodes: [{ id: "erzeuger", label: "EE-Erzeuger" }, { id: "haendler", label: "Zertifikatehändler" }, { id: "abnehmer", label: "Lieferant/Industrie" }],
        edges: [
          { from: "erzeuger", to: "haendler", label: "HKN günstig ankaufen" },
          { from: "haendler", to: "abnehmer", label: "je nach Zusätzlichkeit teuer verkaufen" }
        ]
      }
    },
    workedExample: {
      steckbriefId: "L3-HANDEL-ZERTIF-01",
      steps: [
        { text: "Ein Lieferant kauft für seinen 'Ökostrom'-Tarif ein Massen-HKN aus einem alten norwegischen Wasserkraftwerk für 0,10–0,50 €/MWh — der physische Strom bleibt der deutsche Netzmix, das Zertifikat ist ein rein buchhalterischer Nachweis.", questionId: "Q-ZERTIFIKATE-WE1" },
        { text: "Ein Premium-HKN von einer neu gebauten deutschen Solaranlage (Zusätzlichkeit) kostet dagegen bis zu 5 €/MWh — weil es tatsächlich neue EE-Kapazität mitfinanziert hat.", questionId: "Q-ZERTIFIKATE-WE2" }
      ]
    },
    retrievalItemIds: ["Q-ZERTIFIKATE-R1", "Q-ZERTIFIKATE-R2", "Q-ZERTIFIKATE-R3", "Q-ZERTIFIKATE-R4"],
    transferItemId: "Q-ZERTIFIKATE-T1",
    merkeDirEinenSatz: {
      prompt: "Formuliere in einem Satz: Was unterscheidet den HKN-Markt vom EU ETS?",
      musterantwort: "Der HKN-Markt ist freiwillig und bescheinigt die grüne Herkunft von Strom (Preis je nach Zusätzlichkeit), während der EU ETS ein Pflichtmarkt ist, in dem Erzeuger und Industrie für jede Tonne CO₂ ein Zertifikat kaufen müssen — das eine belohnt Grün, das andere bepreist Emissionen."
    }
  },
  {
    id: "U1-BNETZA",
    moduleId: "M1-SPIELFELD",
    title: "Der Schiedsrichter — BNetzA & die Spielregeln",
    primarySteckbriefId: "L3-MARKT-BNETZA-01",
    vertiefungSteckbriefIds: ["L3-MARKT-BNETZA-01", "L3-MARKT-BNETZA-02"],
    hook: { text: "Eine Behörde mit 4.000 Mitarbeitern verkauft nichts und verdient nichts — beaufsichtigt aber ein reguliertes Vermögen von über einer halben Billion Euro. Was ist ihr eigentliches 'Produkt'?" },
    kernidee: {
      text: "Die <strong>Bundesnetzagentur (BNetzA)</strong> ist der Schiedsrichter des Energiesystems: Sie legt die Erlösobergrenzen der ~1.700 Netzbetreiber fest (ARegV), überwacht den Markt (REMIT), gestaltet über <strong>Festlegungsverfahren</strong> die Regeln (Marktkommunikation, §14a, dynamische Tarife) und führt die EEG-Ausschreibungen durch. Sie hat keine eigene Erlöslogik — ihr 'Produkt' ist ein funktionierender Rahmen, der alle anderen Geschäftsmodelle erst ermöglicht. Auf EU-Ebene sorgt <strong>ENTSO-E</strong> mit gemeinsamen Network Codes für die technische Harmonisierung.",
      geldfluss: {
        nodes: [{ id: "bnetza", label: "BNetzA" }, { id: "netz", label: "Netzbetreiber" }, { id: "markt", label: "Markt/Verbraucher" }],
        edges: [
          { from: "bnetza", to: "netz", label: "Erlösobergrenze + Regeln" },
          { from: "bnetza", to: "markt", label: "Wettbewerbsrahmen (kein Erlös)" }
        ]
      }
    },
    workedExample: {
      steckbriefId: "L3-MARKT-BNETZA-01",
      steps: [
        { text: "Die BNetzA setzt per Festlegungsverfahren verbindliche Regeln — z.B. §14a, dynamische Tarife, Marktkommunikation (MaBiS/GPKE). Solche Verfahren dauern oft 2–5 Jahre.", questionId: "Q-BNETZA-WE1" },
        { text: "Ein Fehler in der Regulierung (zu hohe Erlösobergrenze, falsche Effizienzparameter) kostet Verbraucher schnell Milliarden — die Qualität der Regeln ist der eigentliche Wert der Behörde.", questionId: "Q-BNETZA-WE2" }
      ]
    },
    retrievalItemIds: ["Q-BNETZA-R1", "Q-BNETZA-R2", "Q-BNETZA-R3", "Q-BNETZA-R4"],
    transferItemId: "Q-BNETZA-T1",
    merkeDirEinenSatz: {
      prompt: "Formuliere in einem Satz: Was ist das 'Geschäftsmodell' der BNetzA?",
      musterantwort: "Die BNetzA hat keine eigene Erlöslogik — ihr Wert liegt darin, über Erlösobergrenzen, Marktüberwachung und Festlegungsverfahren einen funktionierenden Wettbewerbs- und Regulierungsrahmen herzustellen, der alle anderen Geschäftsmodelle der Energiewirtschaft erst ermöglicht."
    }
  },
  {
    id: "U1-KAPAZITAET",
    moduleId: "M1-SPIELFELD",
    title: "Kapazitätsmarkt — Geld fürs Bereitstehen",
    primarySteckbriefId: "L3-MARKT-DESIGN-01",
    vertiefungSteckbriefIds: ["L3-MARKT-DESIGN-01"],
    hook: { text: "Ein Kraftwerk, das nur an wenigen hundert Stunden im Jahr läuft, wird trotzdem dringend gebraucht — aber niemand baut es. Wie will der Staat dieses Dilemma lösen?" },
    kernidee: {
      text: "Im heutigen <strong>Energy-Only-Market</strong> refinanzieren sich Kraftwerke allein über Strompreise. Bei hohem EE-Anteil reichen die seltenen Knappheitspreise aber nicht, um <strong>Backup-Kraftwerke</strong> zu finanzieren, die nur an wenigen Stunden laufen (Missing Money). Ein <strong>Kapazitätsmarkt</strong> löst das: Der Betreiber bekommt einen <strong>Leistungspreis</strong> (~50.000–80.000 €/MW/Jahr erwartet) allein fürs zuverlässige Bereitstehen. Mit der Kraftwerksstrategie/StromVKG ist der Einstieg beschlossen — 12 GW H2-ready ab 2026, umfassender Kapazitätsmarkt ab 2032. Prinzip: verdienen am Bereitstehen, nicht am Liefern.",
      geldfluss: {
        nodes: [{ id: "staat", label: "Kapazitätsmarkt" }, { id: "kraftwerk", label: "H2-ready Peaker" }, { id: "system", label: "Versorgungssicherheit" }],
        edges: [
          { from: "staat", to: "kraftwerk", label: "Leistungspreis fürs Bereitstehen" },
          { from: "kraftwerk", to: "system", label: "gesicherte Backup-Kapazität" }
        ]
      }
    },
    workedExample: {
      steckbriefId: "L3-MARKT-DESIGN-01",
      steps: [
        { text: "Ein H2-ready-Gaskraftwerk läuft nur an wenigen hundert Stunden (Backup für windschwache, sonnenarme Tage). Aus den seltenen Spotpreisspitzen allein kann es sich nicht refinanzieren — deshalb wird es ohne Zusatzvergütung nicht gebaut.", questionId: "Q-KAPAZITAET-WE1" },
        { text: "Der Kapazitätsmarkt gibt dem Betreiber zusätzlich einen Leistungspreis (~50.000–80.000 €/MW/Jahr) nur dafür, dass die Kapazität zuverlässig bereitsteht.", questionId: "Q-KAPAZITAET-WE2" }
      ]
    },
    retrievalItemIds: ["Q-KAPAZITAET-R1", "Q-KAPAZITAET-R2", "Q-KAPAZITAET-R3", "Q-KAPAZITAET-R4"],
    transferItemId: "Q-KAPAZITAET-T1",
    merkeDirEinenSatz: {
      prompt: "Formuliere in einem Satz: Welches Problem löst ein Kapazitätsmarkt?",
      musterantwort: "Das 'Missing Money'-Problem: Bei hohem EE-Anteil reichen die seltenen Knappheitspreise nicht, um dringend benötigte Backup-Kraftwerke zu finanzieren — der Kapazitätsmarkt vergütet deshalb das reine Bereitstehen der Kapazität, nicht nur die gelieferte Energie."
    }
  },
  {
    id: "U1-FLEXMARKT",
    moduleId: "M1-SPIELFELD",
    title: "Die Märkte von morgen — Lokale Flex & Wasserstoff",
    primarySteckbriefId: "L3-MARKT-DESIGN-02",
    vertiefungSteckbriefIds: ["L3-MARKT-DESIGN-02", "L3-MARKT-DESIGN-03"],
    hook: { text: "Ein Netzbetreiber könnte einen Engpass für 500.000 € mit Kupfer lösen — oder für 20 €/MWh mit einem Marktmechanismus. Warum gibt es diesen Markt trotzdem noch kaum?" },
    kernidee: {
      text: "Zwei Märkte entstehen gerade erst. <strong>Lokale Flexibilitätsmärkte</strong> lassen Verteilnetzbetreiber Engpässe kaufen statt bauen: Statt einen Trafo für Hunderttausende auszubauen, schreibt der VNB lokale Flexibilität aus (z.B. 5 MW Lastreduktion 17–19 Uhr) und kauft das günstigste Gebot (20–50 €/MWh). Größter Gegner ist der Regulierer selbst (§14a und Redispatch lösen dasselbe Problem ohne Markt). Der <strong>H2-Spotmarkt</strong> wiederum existiert noch nicht — Wasserstoff wird bilateral gehandelt, bis genug Liquidität für eine Börse da ist; H2Global überbrückt als staatlicher Zwischenmarkt.",
      geldfluss: {
        nodes: [{ id: "vnb", label: "VNB" }, { id: "markt", label: "lokaler Flexmarkt" }, { id: "agg", label: "Aggregator" }],
        edges: [
          { from: "vnb", to: "markt", label: "schreibt Engpass aus" },
          { from: "agg", to: "markt", label: "bietet Flex (20–50 €/MWh)" }
        ]
      }
    },
    workedExample: {
      steckbriefId: "L3-MARKT-DESIGN-02",
      steps: [
        { text: "Ein VNB stellt fest, dass ein Vorort zwischen 17 und 19 Uhr regelmäßig an die Kapazitätsgrenze kommt (viele E-Autos laden). Statt einen Trafo zu bauen, schreibt er über eine Plattform aus: 'Wer kann 5 MW Last reduzieren?'", questionId: "Q-FLEXMARKT-WE1" },
        { text: "Aggregatoren bieten dafür 20–50 €/MWh — deutlich günstiger als der vermiedene Netzausbau. Das noch ungelöste Problem: Dieselbe Batterie darf nicht gleichzeitig dem ÜNB und dem VNB zugesagt werden.", questionId: "Q-FLEXMARKT-WE2" }
      ]
    },
    retrievalItemIds: ["Q-FLEXMARKT-R1", "Q-FLEXMARKT-R2", "Q-FLEXMARKT-R3", "Q-FLEXMARKT-R4"],
    transferItemId: "Q-FLEXMARKT-T1",
    merkeDirEinenSatz: {
      prompt: "Formuliere in einem Satz: Warum ist der Regulierer der größte Gegner lokaler Flexmärkte?",
      musterantwort: "Weil §14a-Steuerung und Redispatch dieselben Netzengpässe reguliert und ohne Marktmechanismus lösen können — sie drohen die lokalen Flexmärkte überflüssig zu machen, bevor diese überhaupt genug Liquidität aufbauen."
    }
  },
  {
    id: "U5-VPP",
    moduleId: "M5-FLEX",
    title: "Virtuelles Kraftwerk — Wie aus tausend Anlagen ein Kraftwerk wird",
    primarySteckbriefId: "L3-AGG-VPP-01",
    vertiefungSteckbriefIds: ["L3-AGG-VPP-01"],
    hook: { text: "Ein Unternehmen betreibt über 14 Gigawatt Kraftwerksleistung — und besitzt kein einziges Kraftwerk. Was verkauft es eigentlich?" },
    kernidee: {
      text: "Ein <strong>virtuelles Kraftwerk (VPP)</strong> bündelt tausende dezentrale EE-Anlagen per Software zu einem steuerbaren Portfolio. Next Kraftwerke (Shell) vermarktet so >14 GW: Für jede Anlage entscheidet das System stündlich, ob Day-Ahead oder Intraday-Verkauf mehr bringt. Der Erlös ist eine <strong>Managementfee</strong> (0,15–0,45 ct/kWh) plus ein <strong>Outperformance-Split</strong> (20–40% des Mehrerlöses über den Referenzmarktwert). Das eigentliche Produkt ist der <strong>Diversifikationseffekt</strong>: Der Prognosefehler sinkt von 15–25% (Einzelanlage) auf 2–3% (großes Portfolio).",
      geldfluss: {
        nodes: [{ id: "anlagen", label: "1000e Anlagen" }, { id: "vpp", label: "VPP" }, { id: "boerse", label: "Börse" }],
        edges: [
          { from: "anlagen", to: "vpp", label: "Fee + Outperformance-Split" },
          { from: "vpp", to: "boerse", label: "optimierte Vermarktung" }
        ]
      }
    },
    workedExample: {
      steckbriefId: "L3-AGG-VPP-01",
      steps: [
        { text: "Eine einzelne Windturbine hat einen Prognosefehler von 15–25%. Im Bündel mit tausenden anderen Anlagen (Wind Nord, Solar Süd, Biogas) sinkt er auf 2–3%.", questionId: "Q-VPP-WE1" },
        { text: "Bei 10 GW Portfolio bringt die laufende Day-Ahead/Intraday-Umverteilung rund 2 €/MWh Mehrerlös — über das Jahr rund 80 Mio. €.", questionId: "Q-VPP-WE2" }
      ]
    },
    retrievalItemIds: ["Q-VPP-R1", "Q-VPP-R2", "Q-VPP-R3", "Q-VPP-R4"],
    transferItemId: "Q-VPP-T1",
    merkeDirEinenSatz: {
      prompt: "Formuliere in einem Satz: Was ist das eigentlich verkaufte Produkt eines EE-Direktvermarktungs-VPP?",
      musterantwort: "Nicht die einzelne Anlage, sondern der Diversifikationseffekt des großen Portfolios: Er senkt den Prognosefehler von 15–25% auf 2–3% und damit die teuren Ausgleichsenergiekosten, die eine Einzelanlage allein nie erreichen würde."
    }
  },
  {
    id: "U5-DEMAND",
    moduleId: "M5-FLEX",
    title: "Demand Response — Geld verdienen mit Flexibilität, die man schon hat",
    primarySteckbriefId: "L3-AGG-VPP-02",
    vertiefungSteckbriefIds: ["L3-AGG-VPP-02"],
    hook: { text: "Eine Aluminiumschmelze verdient Geld, indem sie gelegentlich für ein paar Minuten weniger produziert — ohne einen Cent zu investieren. Wie kann das ein Geschäft sein?" },
    kernidee: {
      text: "Große Industrielasten (Elektrolyse, Kühlhäuser, Rechenzentren) besitzen <strong>Flexibilität, die sie ohnehin haben</strong>. Ein <strong>Demand-Response-Aggregator</strong> bündelt diese Lasten zu einem virtuellen Regelenergie-Asset und vermarktet sie am aFRR/mFRR-Markt — ganz ohne eigene Anlagen zu bauen. Der Aggregator behält einen Revenue-Share (20–40%), der Industriekunde bekommt den Rest für Flexibilität, die er bisher ungenutzt liegen ließ. Der eigentliche Engpass ist nicht die Technik, sondern das <strong>Vertrauen</strong>: Zuverlässigkeit über 99% ist Pflicht.",
      geldfluss: {
        nodes: [{ id: "industrie", label: "Industrielast" }, { id: "agg", label: "Aggregator" }, { id: "uenb", label: "ÜNB" }],
        edges: [
          { from: "uenb", to: "agg", label: "Regelenergie-Erlös" },
          { from: "agg", to: "industrie", label: "Revenue-Share (Rest)" }
        ]
      }
    },
    workedExample: {
      steckbriefId: "L3-AGG-VPP-02",
      steps: [
        { text: "Eine Aluminiumschmelze hat sich präqualifiziert, in 5 Minuten 10 MW Last zu reduzieren (Drosselung einzelner Elektrolysezellen). Der ÜNB meldet aFRR-Down-Bedarf, Sympower schickt automatisch das Steuersignal.", questionId: "Q-DEMAND-WE1" },
        { text: "Sympower hat in diese 10 MW keinen Cent investiert — die Flexibilität existierte in der Fabrik bereits, nur ungenutzt.", questionId: "Q-DEMAND-WE2" }
      ]
    },
    retrievalItemIds: ["Q-DEMAND-R1", "Q-DEMAND-R2", "Q-DEMAND-R3", "Q-DEMAND-R4"],
    transferItemId: "Q-DEMAND-T1",
    merkeDirEinenSatz: {
      prompt: "Formuliere in einem Satz: Warum ist Vertrauen der eigentliche Engpass des Demand-Response-Modells?",
      musterantwort: "Weil ein Industriekunde einen Dritten nur dann auf seine Produktionslast zugreifen lässt, wenn die Zuverlässigkeit über viele Abrufe nachweislich über 99% liegt — ein einziger Fehlabruf mit Produktionsschaden würde die Kundenbeziehung beenden."
    }
  },
  {
    id: "U5-ROUTE",
    moduleId: "M5-FLEX",
    title: "Route-to-Market — Wenn der Optimierer das Risiko kauft",
    primarySteckbriefId: "L3-AGG-VPP-03",
    vertiefungSteckbriefIds: ["L3-AGG-VPP-03"],
    hook: { text: "Ein Batterieentwickler baut Speicher für hunderte Millionen — und überlässt das Geldverdienen komplett einem anderen. Warum ist das clever?" },
    kernidee: {
      text: "Asset-leichte Spezialisten (Entrix, Enspired, terralayr) vermarkten <strong>fremde</strong> Großbatterien per KI-Multimarkt-Optimierung — gegen Fee plus Outperformance-Share. Die zweite, wichtigere Wertschicht ist das <strong>Tolling/Floor-Modell</strong>: Der Optimierer garantiert dem Speicher-Eigentümer einen Festpreis bzw. Mindesterlös und trägt das Marktrisiko selbst. Das macht Speicherprojekte <strong>bankfähig</strong> (Banken verlangen gesicherte Cashflows) — das Merchant-Risiko wandert zu dem, der es am besten bepreisen kann. Nicht die Optimierung allein, sondern die <strong>Risikoübernahme</strong> wird zum eigentlichen Produkt.",
      geldfluss: {
        nodes: [{ id: "eigner", label: "Speicher-Eigner" }, { id: "opt", label: "Optimierer" }, { id: "markt", label: "Märkte" }],
        edges: [
          { from: "opt", to: "eigner", label: "garantierter Floor/Tolling-Festpreis" },
          { from: "markt", to: "opt", label: "Erlöse (Risiko beim Optimierer)" }
        ]
      }
    },
    workedExample: {
      steckbriefId: "L3-AGG-VPP-03",
      steps: [
        { text: "Kyon Energy baut Großspeicher (2026 u.a. 273 MW / 552 MWh), handelt aber nicht selbst — es hat Rahmenverträge mit den Optimierern Entrix und Enspired geschlossen, die viertelstündlich zwischen FCR, Intraday und aFRR wählen.", questionId: "Q-ROUTE-WE1" },
        { text: "Alternativ bietet terralayr ein Tolling-Modell: fester Preis pro MW und Monat für den Eigentümer, terralayr behält den Mehrerlös — und trägt das Marktrisiko.", questionId: "Q-ROUTE-WE2" }
      ]
    },
    retrievalItemIds: ["Q-ROUTE-R1", "Q-ROUTE-R2", "Q-ROUTE-R3", "Q-ROUTE-R4"],
    transferItemId: "Q-ROUTE-T1",
    merkeDirEinenSatz: {
      prompt: "Formuliere in einem Satz: Was macht das Tolling/Floor-Modell für den Speicher-Eigentümer so wertvoll?",
      musterantwort: "Es verwandelt unsichere Merchant-Erlöse in einen garantierten Mindesterlös und macht das Speicherprojekt dadurch bankfähig — das Marktrisiko übernimmt der Optimierer, der es am besten bepreisen kann."
    }
  },
  {
    id: "U5-V2G",
    moduleId: "M5-FLEX",
    title: "Vehicle-to-Grid — Das rollende Kraftwerk in der Garage",
    primarySteckbriefId: "L3-EMOB-V2G-01",
    vertiefungSteckbriefIds: ["L3-EMOB-V2G-01"],
    hook: { text: "10 Millionen E-Autos könnten das Sechsfache aller deutschen Großbatterien speichern — meistens stehen sie nur herum. Wer hebt diesen Schatz, und wer kassiert dafür?" },
    kernidee: {
      text: "<strong>Vehicle-to-Grid (V2G)</strong> nutzt E-Auto-Batterien bidirektional: Steht das Auto an einer bidirektionalen Wallbox, kann es bei Netzbedarf Strom zurückspeisen. Ein Aggregator bündelt tausende Fahrzeuge zum Regelenergie-Asset; der Halter bekommt 50–70% der Erlöse für Kapazität, die ohnehin herumsteht. Der Hebel: Eine EV-Batterie (~60 kWh) ist rund <strong>fünfmal größer</strong> als ein Heimspeicher. Die <strong>AFIR</strong> schreibt ab 2027 bidirektionale Ladepunkte vor (technische Voraussetzung, keine Nutzungspflicht). Die Schwachstelle: Der <strong>OEM kontrolliert die Fahrzeug-API</strong> — wer sie nicht hält, wird austauschbares Backend.",
      geldfluss: {
        nodes: [{ id: "halter", label: "EV-Halter" }, { id: "agg", label: "Aggregator" }, { id: "netz", label: "Netz/Markt" }],
        edges: [
          { from: "netz", to: "agg", label: "Regelenergie-Erlös" },
          { from: "agg", to: "halter", label: "50–70% Revenue-Share" }
        ]
      }
    },
    workedExample: {
      steckbriefId: "L3-EMOB-V2G-01",
      steps: [
        { text: "Ein ID.-Fahrer steht abends mit 80% Ladung (~60 kWh) an seiner bidirektionalen Wallbox. Die Elli-App meldet das Fahrzeug als verfügbare Flexibilität; bei ÜNB-Bedarf speist es zurück und wird vor der Morgenfahrt wieder geladen.", questionId: "Q-V2G-WE1" },
        { text: "Von den Regelenergie-Erlösen fließen 50–70% an den Fahrzeughalter zurück, der Rest bleibt beim Aggregator.", questionId: "Q-V2G-WE2" }
      ]
    },
    retrievalItemIds: ["Q-V2G-R1", "Q-V2G-R2", "Q-V2G-R3", "Q-V2G-R4"],
    transferItemId: "Q-V2G-T1",
    merkeDirEinenSatz: {
      prompt: "Formuliere in einem Satz: Warum sitzt der unabhängige V2G-Aggregator in einer strukturell schwachen Position?",
      musterantwort: "Weil der OEM die Fahrzeug-API kontrolliert und die Aggregation jederzeit selbst übernehmen kann, während Versorger V2G in ihre Tarife bündeln — wer weder Fahrzeugzugang noch Kundenvertrag exklusiv hält, wird zum austauschbaren Optimierungs-Backend."
    }
  },
  {
    id: "U5-FLEXKAMPF",
    moduleId: "M5-FLEX",
    title: "Wer kontrolliert die Flexibilität? — Der Kampf um dasselbe Gerät",
    primarySteckbriefId: "L3-ERZ-SPEICHER-02",
    vertiefungSteckbriefIds: ["L3-ERZ-SPEICHER-02", "L3-VNB-NEU-01"],
    hook: { text: "Deine Heimbatterie will gleichzeitig drei Herren dienen: dem Börsenpreis, dem Netz und dir selbst. Wer gewinnt — und warum ist das noch ungeklärt?" },
    kernidee: {
      text: "Dieselbe Flexibilität wird von mehreren Seiten umkämpft. Der <strong>Aggregator</strong> steuert nach Börsenpreis (maximaler Markterlös), der <strong>VNB</strong> per §14a nach Netzzustand (Engpassvermeidung), der <strong>Kunde</strong> will Eigenverbrauch — und der <strong>OEM/Hersteller</strong> besitzt oft die Geräte-Schnittstelle. Wer die <strong>Kundenschnittstelle zum Flex-Asset</strong> kontrolliert, entscheidet, wessen Optimierung Vorrang hat. Genau diese Priorisierung (marktlich vs. netzdienlich) ist regulatorisch noch nicht abschließend geklärt — der eigentliche Machtkampf der Flexibilitätswelt.",
      geldfluss: {
        nodes: [{ id: "asset", label: "Flex-Asset" }, { id: "agg", label: "Aggregator (Markt)" }, { id: "vnb", label: "VNB (Netz)" }],
        edges: [
          { from: "agg", to: "asset", label: "steuert nach Börsenpreis" },
          { from: "vnb", to: "asset", label: "steuert nach Netzzustand (§14a)" }
        ]
      }
    },
    workedExample: {
      steckbriefId: "L3-ERZ-SPEICHER-02",
      steps: [
        { text: "Ein Sonnen-Kunde hält 20% seines Heimspeichers für das virtuelle Kraftwerk frei; Sonnen bündelt tausende solcher Reserven zu einem präqualifizierten Regelenergie-Paket und teilt die Erlöse ~60:40.", questionId: "Q-FLEXKAMPF-WE1" },
        { text: "Gleichzeitig darf der VNB per §14a dasselbe Gerät bei lokalem Netzengpass drosseln — zwei Steuerungslogiken greifen auf dasselbe physische Asset zu.", questionId: "Q-FLEXKAMPF-WE2" }
      ]
    },
    retrievalItemIds: ["Q-FLEXKAMPF-R1", "Q-FLEXKAMPF-R2", "Q-FLEXKAMPF-R3", "Q-FLEXKAMPF-R4"],
    transferItemId: "Q-FLEXKAMPF-T1",
    merkeDirEinenSatz: {
      prompt: "Formuliere in einem Satz: Worum geht der eigentliche Machtkampf in der Flexibilitätswelt?",
      musterantwort: "Um die Kontrolle der Kundenschnittstelle zum Flex-Asset: Wer sie besitzt, entscheidet, ob das Gerät marktlich (Aggregator, nach Börsenpreis) oder netzdienlich (VNB, §14a) gesteuert wird — eine regulatorisch noch offene Priorisierungsfrage."
    }
  },
  {
    id: "U7-FERNWAERME",
    moduleId: "M7-WAERME",
    title: "Fernwärme — Das Monopol unter Dekarbonisierungsdruck",
    primarySteckbriefId: "L3-WAERME-FERN-01",
    vertiefungSteckbriefIds: ["L3-WAERME-FERN-01"],
    hook: { text: "Bei Fernwärme kannst du den Anbieter nicht wechseln — es gibt nur einen, das Rohr unter deiner Straße. Warum ist dieses Monopol trotzdem in Gefahr?" },
    kernidee: {
      text: "Fernwärme ist ein <strong>natürliches Netzmonopol</strong> (~25.000 km, 14% des Wärmebedarfs): Wer im Gebiet wohnt, kann nicht wechseln, der Preis wird nur durch die kartellrechtliche Missbrauchskontrolle begrenzt. Zwei neue Kräfte setzen das Monopol unter Druck: Das <strong>Wärmeplanungsgesetz (WPG)</strong> zwingt Kommunen zu Wärmeplänen, und <strong>GWB §35b</strong> verlangt bis 2030 mindestens 50% erneuerbare Wärme. Der eigentliche Angreifer ist aber die <strong>individuelle Wärmepumpe</strong>: Je höher der (jetzt transparente) Fernwärmepreis, desto eher steigen zahlungskräftige Kunden aus — und die Netzfixkosten bleiben an den Verbleibenden hängen.",
      geldfluss: {
        nodes: [{ id: "kunde", label: "Kunde (gebunden)" }, { id: "netz", label: "Fernwärmenetz" }, { id: "wp", label: "eigene Wärmepumpe" }],
        edges: [
          { from: "kunde", to: "netz", label: "Wärmepreis (Monopol)" },
          { from: "kunde", to: "wp", label: "Ausstieg bei hohem Preis" }
        ]
      }
    },
    workedExample: {
      steckbriefId: "L3-WAERME-FERN-01",
      steps: [
        { text: "Ein Haushalt im Berliner Fernwärmegebiet kann den Anbieter nicht wechseln — er ist an das Netz gebunden und zahlt den von Vattenfall festgelegten Preis, kontrolliert nur durch die Missbrauchskontrolle (GWB §19).", questionId: "Q-FERNWAERME-WE1" },
        { text: "Seit 2024 verpflichtet GWB §35b Vattenfall, bis 2030 mindestens 50% erneuerbare Wärme nachzuweisen — statt Kohle also Großwärmepumpen, Abwärme oder Geothermie.", questionId: "Q-FERNWAERME-WE2" }
      ]
    },
    retrievalItemIds: ["Q-FERNWAERME-R1", "Q-FERNWAERME-R2", "Q-FERNWAERME-R3", "Q-FERNWAERME-R4"],
    transferItemId: "Q-FERNWAERME-T1",
    merkeDirEinenSatz: {
      prompt: "Formuliere in einem Satz: Warum schützt das Fernwärme-Netzmonopol nicht vor dem Niedergang?",
      musterantwort: "Weil das Monopol zwar Wettbewerber ausschließt, aber nicht die Substitution durch individuelle Wärmepumpen — je höher der jetzt transparente Fernwärmepreis, desto mehr zahlungskräftige Kunden steigen aus, während die Netzfixkosten auf die Verbleibenden umgelegt werden."
    }
  },
  {
    id: "U7-WASSERSTOFF",
    moduleId: "M7-WAERME",
    title: "Grüner Wasserstoff — Das Subventionsrennen",
    primarySteckbriefId: "L3-WAERME-PTX-01",
    vertiefungSteckbriefIds: ["L3-WAERME-PTX-01"],
    hook: { text: "Ein Elektrolyseur produziert Wasserstoff für 2,70 €/kg und verkauft ihn für 8 € — und macht trotzdem kein gutes Geschäft. Wie kann das sein?" },
    kernidee: {
      text: "Elektrolyseure wandeln EE-Strom in <strong>grünen Wasserstoff</strong> (bei 70% Wirkungsgrad und 40 €/MWh Strom ~2,70 €/kg Gestehungskosten). Der Haken: <strong>Grauer</strong> (fossiler) H2 kostet nur 1,50–2 €/kg — genau so viel will ein Stahl- oder Chemiekunde zahlen. Die <strong>Subventionslücke</strong> von 3–7 €/kg wird heute über IPCEI und H2Global aus Bundesmitteln geschlossen. Das Geschäft ist deshalb (noch) keine Marge, sondern eine <strong>Subventions-Arbitrage</strong>: Wer die günstigsten Fördermittel sichert und früh Skaleneffekte aufbaut, gewinnt — bevor die Subventionen 2030+ auslaufen.",
      geldfluss: {
        nodes: [{ id: "strom", label: "EE-Strom" }, { id: "elektro", label: "Elektrolyseur" }, { id: "kunde", label: "Stahl/Chemie" }],
        edges: [
          { from: "strom", to: "elektro", label: "~2,70 €/kg Gestehung" },
          { from: "kunde", to: "elektro", label: "zahlt nur grau-Niveau (~2 €/kg) + Subvention" }
        ]
      }
    },
    workedExample: {
      steckbriefId: "L3-WAERME-PTX-01",
      steps: [
        { text: "Ein RWE-Elektrolyseur stellt bei 40 €/MWh Strom und 70% Wirkungsgrad H2 für ~2,70 €/kg her. Grüner H2 'verkauft' sich am Markt für 6–10 €/kg — aber das will kein Industriekunde freiwillig zahlen, solange grauer H2 für 1,5–2 €/kg verfügbar ist.", questionId: "Q-WASSERSTOFF-WE1" },
        { text: "Die Differenz von 3–7 €/kg zwischen Gestehungskosten und Zahlungsbereitschaft schließt heute H2Global oder IPCEI aus Bundesmitteln.", questionId: "Q-WASSERSTOFF-WE2" }
      ]
    },
    retrievalItemIds: ["Q-WASSERSTOFF-R1", "Q-WASSERSTOFF-R2", "Q-WASSERSTOFF-R3", "Q-WASSERSTOFF-R4"],
    transferItemId: "Q-WASSERSTOFF-T1",
    merkeDirEinenSatz: {
      prompt: "Formuliere in einem Satz: Woran verdient ein grüner Wasserstoff-Produzent heute wirklich?",
      musterantwort: "Nicht an einer echten Marktmarge, sondern an einer Subventions-Arbitrage: Wer die günstigsten Fördermittel (IPCEI, H2Global) sichert und früh Skaleneffekte aufbaut, überbrückt die Lücke von 3–7 €/kg zwischen Gestehungskosten und industrieller Zahlungsbereitschaft."
    }
  },
  {
    id: "U7-PROCUREMENT",
    moduleId: "M7-WAERME",
    title: "Energieeinkauf — Wie Industrie Millionen spart",
    primarySteckbriefId: "L3-CONTRACT-MGMT-01",
    vertiefungSteckbriefIds: ["L3-CONTRACT-MGMT-01"],
    hook: { text: "Ein Berater verschiebt einen Produktionsschritt von mittags in die Nacht — und spart der Fabrik 100.000 € im Jahr, ohne dass sie eine einzige Kilowattstunde weniger verbraucht. Wie?" },
    kernidee: {
      text: "Spezialisierte <strong>Energieeinkaufsberater</strong> senken die Energiekosten energieintensiver Industrie um typisch 5–15% — nicht über den Strompreis, sondern über vier Hebel: kluges <strong>Hedging</strong> (Timing von Termin- vs. Spotkauf), <strong>Netzentgelt-Optimierung</strong> (Lastspitzen senken), <strong>Umlagenbefreiungen</strong> (§64 EEG für stromintensive Industrie) und Portfoliomischung. Der Clou: Eine gesenkte Lastspitze von 1 MW spart 50.000–150.000 €/Jahr an leistungsabhängigen Netzentgelten — bei identischem Gesamtverbrauch. Bezahlt wird der Berater meist per <strong>Erfolgshonorar</strong> auf die nachgewiesene Einsparung.",
      geldfluss: {
        nodes: [{ id: "industrie", label: "Industrie" }, { id: "berater", label: "Berater" }, { id: "ersparnis", label: "Ersparnis" }],
        edges: [
          { from: "berater", to: "ersparnis", label: "Hedging + Netzentgelt + §64" },
          { from: "ersparnis", to: "berater", label: "Erfolgshonorar (% der Einsparung)" }
        ]
      }
    },
    workedExample: {
      steckbriefId: "L3-CONTRACT-MGMT-01",
      steps: [
        { text: "Ein Berater prüft für ein Chemieunternehmen die §64-EEG-Befreiung für stromintensive Industrie — gelingt sie, sinkt die Umlagebelastung bei hohem Verbrauch schnell um Hunderttausende.", questionId: "Q-PROCUREMENT-WE1" },
        { text: "Parallel verschiebt er einen energieintensiven Produktionsschritt von der Mittagsspitze in die Nacht: Die maximale Bezugsleistung sinkt um 1 MW — und damit der leistungsabhängige Netzentgeltanteil um 50.000–150.000 €/Jahr.", questionId: "Q-PROCUREMENT-WE2" }
      ]
    },
    retrievalItemIds: ["Q-PROCUREMENT-R1", "Q-PROCUREMENT-R2", "Q-PROCUREMENT-R3", "Q-PROCUREMENT-R4"],
    transferItemId: "Q-PROCUREMENT-T1",
    merkeDirEinenSatz: {
      prompt: "Formuliere in einem Satz: Wie spart ein Energieeinkaufsberater Geld, ohne den Verbrauch zu senken?",
      musterantwort: "Über Netzentgelt- und Umlagenoptimierung (Lastspitzen senken, §64-EEG-Befreiung) sowie kluges Hedging — eine um 1 MW gesenkte Lastspitze spart 50.000–150.000 €/Jahr an leistungsabhängigen Netzentgelten bei identischem Gesamtverbrauch."
    }
  },
  {
    id: "U7-EPC",
    moduleId: "M7-WAERME",
    title: "Effizienz-Contracting — Sparen ohne eigenes Kapital",
    primarySteckbriefId: "L3-CONTRACT-MGMT-02",
    vertiefungSteckbriefIds: ["L3-CONTRACT-MGMT-02"],
    hook: { text: "Ein Krankenhaus bekommt ein neues, effizientes Heizsystem geschenkt — bezahlt aus Geld, das es vorher an den Energieversorger verloren hat. Wer trägt das Risiko, wenn die Ersparnis ausbleibt?" },
    kernidee: {
      text: "Beim <strong>Energy Performance Contracting (EPC)</strong> finanziert ein Dienstleister (Siemens, Johnson Controls) Effizienzmaßnahmen (LED, Gebäudeautomation, Wärmepumpen) und refinanziert sich <strong>ausschließlich aus den garantierten Energieeinsparungen</strong>. Beim <strong>Guaranteed-Savings</strong>-Modell garantiert er eine Mindesteinsparung; wird sie nach dem Messstandard <strong>IPMVP</strong> nicht erreicht, zahlt der Contractor die Differenz — das Performance-Risiko liegt bei ihm, nicht beim Kunden. So kommen Kommunen und Krankenhäuser <strong>ohne eigenes Investitionsbudget</strong> zur Energiewende. Die offene Flanke: Streit über den Einsparungsnachweis (M&V).",
      geldfluss: {
        nodes: [{ id: "contractor", label: "Contractor" }, { id: "gebaeude", label: "Krankenhaus" }, { id: "einspar", label: "Energieeinsparung" }],
        edges: [
          { from: "contractor", to: "gebaeude", label: "finanziert Effizienztechnik" },
          { from: "einspar", to: "contractor", label: "refinanziert aus garantierter Einsparung" }
        ]
      }
    },
    workedExample: {
      steckbriefId: "L3-CONTRACT-MGMT-02",
      steps: [
        { text: "Siemens finanziert im Krankenhaus LED, Gebäudeautomation und ein effizienteres Heizsystem vor und garantiert vertraglich 25% Energieeinsparung. Das Krankenhaus refinanziert die Investition aus genau dieser Einsparung — sein Budget ändert sich zunächst kaum.", questionId: "Q-EPC-WE1" },
        { text: "Wird die garantierte Einsparung (nach IPMVP-Standard) nicht erreicht, muss Siemens die Differenz aus eigener Tasche ausgleichen.", questionId: "Q-EPC-WE2" }
      ]
    },
    retrievalItemIds: ["Q-EPC-R1", "Q-EPC-R2", "Q-EPC-R3", "Q-EPC-R4"],
    transferItemId: "Q-EPC-T1",
    merkeDirEinenSatz: {
      prompt: "Formuliere in einem Satz: Was ist der Kern des Guaranteed-Savings-EPC-Modells?",
      musterantwort: "Der Contractor finanziert Effizienzmaßnahmen vor und garantiert eine Mindesteinsparung; erreicht er sie nicht, trägt er selbst die Differenz — der Kunde bekommt die Energiewende ohne eigenes Kapital und ohne Performance-Risiko."
    }
  },
  {
    id: "U7-EIGENVERSORGUNG",
    moduleId: "M7-WAERME",
    title: "Eigenversorgung — Dem Netz entkommen",
    primarySteckbriefId: "L3-CONTRACT-MGMT-03",
    vertiefungSteckbriefIds: ["L3-CONTRACT-MGMT-03"],
    hook: { text: "Ein Stahlwerk baut sich eine Solaranlage aufs Dach und spart damit 8 Millionen Euro im Jahr — der größte Teil davon hat mit dem Strompreis gar nichts zu tun. Womit dann?" },
    kernidee: {
      text: "Großindustrie investiert in <strong>eigene Erzeugung direkt am Verbrauchsort</strong> (Solar aufs Hallendach, BHKW, Wind auf dem Werksgelände). Der größte Hebel ist nicht der Strompreis, sondern die <strong>Netzentgelt-Vermeidung</strong>: Für jede selbst erzeugte und direkt verbrauchte kWh entfällt das Netzentgelt (~8 ct/kWh). Bei 100 GWh Eigenverbrauch sind das ~8 Mio. €/Jahr. Voraussetzung ist der strenge <strong>räumliche Zusammenhang</strong> (§3 Nr. 19 EEG / Direktleitung §3 Nr. 12 EnWG) — verfehlt das Projekt die Kriterien knapp, entfällt die ganze Befreiung. Das Modell entzieht Netz und Lieferanten Mengen und ist deshalb regulatorisch angreifbar (AgNes).",
      geldfluss: {
        nodes: [{ id: "anlage", label: "eigene Anlage" }, { id: "werk", label: "Verbrauchsstätte" }, { id: "netz", label: "öffentliches Netz" }],
        edges: [
          { from: "anlage", to: "werk", label: "Direktverbrauch (netzentgeltfrei)" },
          { from: "werk", to: "netz", label: "umgangen → 8 ct/kWh gespart" }
        ]
      }
    },
    workedExample: {
      steckbriefId: "L3-CONTRACT-MGMT-03",
      steps: [
        { text: "Ein Stahlwerk mit 100 GWh Jahresverbrauch betreibt auf dem Werksgelände eine eigene Solaranlage/ein BHKW. Für jede direkt verbrauchte kWh entfällt das Netzentgelt von ~8 ct/kWh.", questionId: "Q-EIGENVERSORGUNG-WE1" },
        { text: "Der Engineering-Partner (GETEC, Siemens Energy) verdient nicht an der laufenden Einsparung, sondern am einmaligen Projekt — und an der regulatorischen Prüfung, ob der räumliche Zusammenhang die §3-Nr.-19-Kriterien erfüllt.", questionId: "Q-EIGENVERSORGUNG-WE2" }
      ]
    },
    retrievalItemIds: ["Q-EIGENVERSORGUNG-R1", "Q-EIGENVERSORGUNG-R2", "Q-EIGENVERSORGUNG-R3", "Q-EIGENVERSORGUNG-R4"],
    transferItemId: "Q-EIGENVERSORGUNG-T1",
    merkeDirEinenSatz: {
      prompt: "Formuliere in einem Satz: Worin liegt der größte wirtschaftliche Hebel der industriellen Eigenversorgung?",
      musterantwort: "In der Netzentgelt-Vermeidung: Für jede selbst erzeugte und direkt am Ort verbrauchte kWh entfällt das Netzentgelt (~8 ct/kWh), was bei 100 GWh Eigenverbrauch rund 8 Mio. €/Jahr spart — vorausgesetzt, der strenge räumliche Zusammenhang (§3 Nr. 19 EEG) ist erfüllt."
    }
  },
  {
    id: "U6-PV",
    moduleId: "M6-PROSUMER",
    title: "PV-Eigenverbrauch — Warum der Speicher die Anlage verdoppelt",
    primarySteckbriefId: "L3-PROSUM-HAUS-01",
    vertiefungSteckbriefIds: ["L3-PROSUM-HAUS-01"],
    hook: { text: "Ein Batteriespeicher erzeugt keine einzige Kilowattstunde Strom — und verdoppelt trotzdem den wirtschaftlichen Wert einer Solaranlage. Wie geht das?" },
    kernidee: {
      text: "Für einen PV-Prosumer ist jede <strong>selbst verbrauchte</strong> kWh viel mehr wert als eine eingespeiste: Eigenverbrauch spart den Bezugspreis (~30 ct/kWh), Einspeisung bringt nur die Vergütung (~8,2 ct/kWh). Ohne Speicher liegt die Eigenverbrauchsquote bei 25–35% (nur was mittags gerade läuft), mit Speicher bei 60–80%. Der Speicher erzeugt nichts — er verschiebt nur den Solarstrom vom Mittag in den Abend und hebt damit jede verschobene kWh von 8 auf 30 ct. Genau deshalb <strong>verdoppelt er den Wert</strong> derselben Anlage.",
      geldfluss: {
        nodes: [{ id: "pv", label: "PV-Dach" }, { id: "haus", label: "Eigenverbrauch" }, { id: "netz", label: "Netz" }],
        edges: [
          { from: "pv", to: "haus", label: "spart ~30 ct/kWh Bezug" },
          { from: "pv", to: "netz", label: "Einspeisung nur ~8 ct/kWh" }
        ]
      }
    },
    workedExample: {
      steckbriefId: "L3-PROSUM-HAUS-01",
      steps: [
        { text: "Ohne Speicher nutzt der Haushalt nur ~30% seines Solarstroms selbst; der Rest fließt für 8,2 ct/kWh ins Netz, während er abends Strom für ~30 ct/kWh zurückkauft.", questionId: "Q-PV-WE1" },
        { text: "Ein 10-kWh-Speicher hebt die Eigenverbrauchsquote auf 60–80% — jede so verschobene kWh ist statt 8,2 ct nun rund 30 ct wert.", questionId: "Q-PV-WE2" }
      ]
    },
    retrievalItemIds: ["Q-PV-R1", "Q-PV-R2", "Q-PV-R3", "Q-PV-R4"],
    transferItemId: "Q-PV-T1",
    merkeDirEinenSatz: {
      prompt: "Formuliere in einem Satz: Warum verdoppelt ein Heimspeicher den Wert einer PV-Anlage, obwohl er nichts erzeugt?",
      musterantwort: "Weil er den mittags erzeugten Überschuss in den Abend verschiebt und so die Eigenverbrauchsquote von ~30% auf 60–80% hebt — jede dadurch selbst genutzte kWh ist statt der Einspeisevergütung (~8 ct) den eingesparten Bezugspreis (~30 ct) wert."
    }
  },
  {
    id: "U6-BALKON",
    moduleId: "M6-PROSUMER",
    title: "Balkonkraftwerk — PV für alle, Marge für keinen",
    primarySteckbriefId: "L3-PROSUM-HAUS-02",
    vertiefungSteckbriefIds: ["L3-PROSUM-HAUS-02"],
    hook: { text: "Eine Mieterin steckt für 400 € zwei Solarmodule in die Steckdose — kein Handwerker, keine Netzanmeldung. Für sie ein gutes Geschäft, für den Hersteller kaum. Warum?" },
    kernidee: {
      text: "Das <strong>Balkonkraftwerk</strong> (max. 800 W, seit dem Solarpaket I 2024 nur noch Registrierung im Marktstammdatenregister statt Netzbetreiber-Anmeldung) demokratisiert PV: 300–600 €, plug-and-play, Amortisation in 3–5 Jahren, Ersparnis 5–15 €/Monat. Der Wert liegt beim <strong>Nutzer</strong>, nicht beim Anbieter: Für Hersteller (Anker, EcoFlow) ist es ein <strong>Hardware-Commodity</strong> mit Preisverfall, für Plattformen (Amazon, Aldi) nur eine Marktplatz-Provision. Differenzierung über Apps ist dünn — der Wettbewerb ist hart, die Marge flach.",
      geldfluss: {
        nodes: [{ id: "haendler", label: "Händler/Hersteller" }, { id: "kunde", label: "Mieter" }, { id: "haus", label: "Eigenverbrauch" }],
        edges: [
          { from: "kunde", to: "haendler", label: "300–600 € einmalig" },
          { from: "kunde", to: "haus", label: "spart 5–15 €/Monat" }
        ]
      }
    },
    workedExample: {
      steckbriefId: "L3-PROSUM-HAUS-02",
      steps: [
        { text: "Eine Mieterin kauft ein 400-€-Set bei Amazon, hängt zwei Module ans Balkongeländer und steckt den Mikro-Wechselrichter in die Steckdose — nur eine vereinfachte MaStR-Registrierung ist nötig.", questionId: "Q-BALKON-WE1" },
        { text: "Die bis zu 800 W werden direkt von laufenden Geräten verbraucht; Überschuss ins Netz wird ohne Zweirichtungszähler praktisch nicht vergütet.", questionId: "Q-BALKON-WE2" }
      ]
    },
    retrievalItemIds: ["Q-BALKON-R1", "Q-BALKON-R2", "Q-BALKON-R3", "Q-BALKON-R4"],
    transferItemId: "Q-BALKON-T1",
    merkeDirEinenSatz: {
      prompt: "Formuliere in einem Satz: Warum ist das Balkonkraftwerk für den Nutzer attraktiv, aber für den Anbieter ein schwieriges Geschäft?",
      musterantwort: "Für den Nutzer senkt es zu geringem Einstiegspreis die Stromrechnung ohne Handwerker; für den Anbieter ist es ein austauschbares Hardware-Commodity mit Preisverfall und dünner Differenzierung, dessen Wert fast vollständig beim Kunden landet."
    }
  },
  {
    id: "U6-MIETERSTROM",
    moduleId: "M6-PROSUMER",
    title: "Mieterstrom vs. GGV — Strom verkaufen oder Software verkaufen?",
    primarySteckbriefId: "L3-PROSUM-MIETER-01",
    vertiefungSteckbriefIds: ["L3-PROSUM-MIETER-01", "L3-PROSUM-MIETER-02", "L3-PROSUM-COMMUNITY-01"],
    hook: { text: "Zwei Wege, denselben Dachstrom an die Mieter zu bringen — beim einen wird der Vermieter zum Energieversorger mit allen Pflichten, beim anderen nur zum Software-Kunden. Warum verdrängt der zweite den ersten?" },
    kernidee: {
      text: "Beim klassischen <strong>Mieterstrom (§42a EnWG)</strong> wird der Vermieter (oder ein Dienstleister wie Buzzn) zum <strong>Energielieferanten</strong> mit allen EnWG-Pflichten (Bilanzkreis, Marktkommunikation, GPKE je Mieteinheit) — dafür Retail-Marge plus Mieterstromzuschlag. Die neuere <strong>GGV (§42b, seit 2024)</strong> ist die einfache Alternative: Solarstrom wird über einen virtuellen Zähler anteilig gutgeschrieben, <strong>ohne</strong> Lieferant zu werden — Plattformanbieter (Lumenaza, gridX) verkaufen dafür nur noch Software (SaaS), keinen Strom. Genau diese Vereinfachung unterhöhlt das Vollservice-Mieterstrommodell.",
      geldfluss: {
        nodes: [{ id: "dach", label: "Dach-PV" }, { id: "plattform", label: "Plattform/Dienstl." }, { id: "mieter", label: "Mieter" }],
        edges: [
          { from: "dach", to: "mieter", label: "Mieterstrom: Strom + Marge" },
          { from: "plattform", to: "mieter", label: "GGV: nur Abrechnungs-Software" }
        ]
      }
    },
    workedExample: {
      steckbriefId: "L3-PROSUM-MIETER-01",
      steps: [
        { text: "Bei Buzzn-Mieterstrom kauft der Mieter Dachstrom zu einem Tarif, der gesetzlich mind. 10% unter dem Grundversorgungstarif liegen muss; Buzzn kassiert zusätzlich den Mieterstromzuschlag (~1,6–2,6 ct/kWh) und übernimmt die volle Lieferantenrolle.", questionId: "Q-MIETERSTROM-WE1" },
        { text: "Bei der GGV verdient Lumenaza dagegen an einer SaaS-Gebühr an die WEG — der Reststrom läuft weiter über den frei gewählten Lieferanten jedes Mieters, kein neues Lieferverhältnis entsteht.", questionId: "Q-MIETERSTROM-WE2" }
      ]
    },
    retrievalItemIds: ["Q-MIETERSTROM-R1", "Q-MIETERSTROM-R2", "Q-MIETERSTROM-R3", "Q-MIETERSTROM-R4", "Q-MIETERSTROM-R5"],
    transferItemId: "Q-MIETERSTROM-T1",
    merkeDirEinenSatz: {
      prompt: "Formuliere in einem Satz: Was ist der Kernunterschied zwischen Mieterstrom (§42a) und GGV (§42b)?",
      musterantwort: "Beim Mieterstrom wird der Anbieter zum Energielieferanten mit voller EnWG-Pflicht und verdient an der Strommarge; bei der GGV bleibt er außen vor und verkauft nur Abrechnungs-Software, weil der Reststrom weiter über die eigenen Lieferanten der Mieter läuft."
    }
  },
  {
    id: "U6-ENPAL",
    moduleId: "M6-PROSUMER",
    title: "PV zur Miete — Das Enpal-Modell",
    primarySteckbriefId: "L3-PROSUM-MIETER-03",
    vertiefungSteckbriefIds: ["L3-PROSUM-MIETER-03"],
    hook: { text: "Ein Startup wird zum Milliardenunternehmen, indem es Solaranlagen verschenkt — die Kunden zahlen keinen Cent Anschaffung. Wo kommt das Geld her, und wo ist der Engpass?" },
    kernidee: {
      text: "Enpal und 1KOMMA5° drehen den Solar-Kauf um: Statt ~25.000 € Anschaffung zahlt der Kunde eine <strong>monatliche Miete</strong> (ab ~79 €) für PV + Speicher + Wallbox + Wärmepumpe als Bundle — und spart ab Monat 1 mehr, als die Miete kostet. Enpal behält das Eigentum, übernimmt Installation, Wartung, Versicherung und <strong>finanziert vor</strong>. Der Clou: Enpal refinanziert sich <strong>günstig über Green Bonds</strong>, weil der über 20 Jahre durch EEG und Mietraten abgesicherte Cashflow als risikoarm gilt. Der echte Engpass ist nicht Kapital, sondern die eigene <strong>Installationsflotte</strong> (3.000+ Mitarbeiter).",
      geldfluss: {
        nodes: [{ id: "invest", label: "Green-Bond-Investoren" }, { id: "enpal", label: "Enpal" }, { id: "kunde", label: "Hauseigentümer" }],
        edges: [
          { from: "invest", to: "enpal", label: "günstiges Kapital (Vorfinanzierung)" },
          { from: "kunde", to: "enpal", label: "Miete ~79-99 €/Monat, 20 Jahre" }
        ]
      }
    },
    workedExample: {
      steckbriefId: "L3-PROSUM-MIETER-03",
      steps: [
        { text: "Statt 25.000 € auf einmal zahlt der Kunde z.B. 99 €/Monat über 20 Jahre und spart gleichzeitig mehr Stromkosten, als die Rate kostet — weil ein Teil des Bedarfs jetzt aus eigener Solarerzeugung kommt.", questionId: "Q-ENPAL-WE1" },
        { text: "Enpal finanziert die Anlage vor, refinanziert sich aber günstig über Green Bonds, weil institutionelle Investoren dem 20-Jahres-Cashflow ein niedriges Risiko zuschreiben.", questionId: "Q-ENPAL-WE2" }
      ]
    },
    retrievalItemIds: ["Q-ENPAL-R1", "Q-ENPAL-R2", "Q-ENPAL-R3", "Q-ENPAL-R4"],
    transferItemId: "Q-ENPAL-T1",
    merkeDirEinenSatz: {
      prompt: "Formuliere in einem Satz: Worin liegt der Kern des Enpal-Geschäftsmodells — und sein größtes Risiko?",
      musterantwort: "Enpal verschafft dem Kunden Solar ohne Kapitaleinsatz gegen eine 20-jährige Miete und refinanziert die Vorfinanzierung günstig über Green Bonds; das größte Risiko ist die Abhängigkeit von günstigem Kapital (Zinsen) und der Flaschenhals der eigenen Installationskapazität."
    }
  },
  {
    id: "U6-CPO",
    moduleId: "M6-PROSUMER",
    title: "Ladeinfrastruktur — Das Auslastungsproblem",
    primarySteckbriefId: "L3-EMOB-CPO-01",
    vertiefungSteckbriefIds: ["L3-EMOB-CPO-01"],
    hook: { text: "Eine Schnellladesäule kostet bis zu 60.000 € und steht 90% der Zeit ungenutzt. Warum baut sie trotzdem jemand — und warum integriert er sie ausgerechnet in fremde Apps?" },
    kernidee: {
      text: "Ein <strong>Charge Point Operator (CPO)</strong> baut und betreibt öffentliche Ladepunkte (HPC-Säule: 30.000–60.000 € plus Netzanschluss). Das Kernproblem ist die <strong>Auslastung</strong>: Im Schnitt nur 6–12% (2024), Breakeven erst ab ~20% — ein Hühner-Ei-Rennen zwischen EV-Wachstum und Ladenetz-Ausbau. Deshalb fahren CPOs zwei Erlösströme: Direktladung zum vollen Tarif <strong>und</strong> passives <strong>Roaming</strong> (via OCPI-Protokoll geben sie Zugang für fremde eMSP-Apps und erhalten einen Nettobetrag). Genau dieser Roaming-Strom füllt die Auslastungslücke, die Eigenkunden allein nie schließen würden.",
      geldfluss: {
        nodes: [{ id: "cpo", label: "CPO (Säule)" }, { id: "fahrer", label: "EV-Fahrer" }, { id: "emsp", label: "eMSP (Roaming)" }],
        edges: [
          { from: "fahrer", to: "cpo", label: "Direktladung 45–80 ct/kWh" },
          { from: "emsp", to: "cpo", label: "Roaming-Nettobetrag (OCPI)" }
        ]
      }
    },
    workedExample: {
      steckbriefId: "L3-EMOB-CPO-01",
      steps: [
        { text: "Eine 350-kW-Ionity-Säule kostet inkl. Netzanschluss 30.000–60.000 €. Bei nur 6–12% Auslastung steht sie meist ungenutzt, während Capex und Netzanschluss unabhängig vom Ladevolumen weiterlaufen.", questionId: "Q-CPO-WE1" },
        { text: "Deshalb integriert Ionity seine Säulen zusätzlich über das OCPI-Roaming-Protokoll in fremde eMSP-Apps und erhält dafür einen Nettobetrag pro kWh — ohne selbst eine Kundenbeziehung zu pflegen.", questionId: "Q-CPO-WE2" }
      ]
    },
    retrievalItemIds: ["Q-CPO-R1", "Q-CPO-R2", "Q-CPO-R3", "Q-CPO-R4"],
    transferItemId: "Q-CPO-T1",
    merkeDirEinenSatz: {
      prompt: "Formuliere in einem Satz: Warum ist der CPO trotz asset-schwerer Position gegen asset-leichte Angreifer strukturell schwach?",
      musterantwort: "Weil eMSP-/Roaming-Aggregatoren die margenstärkste Endkundenbeziehung samt App-Layer übernehmen, ohne eigenes Infrastruktur-Capex zu tragen, und OEMs parallel eigene Netze bauen — der CPO trägt Capex und Auslastungsrisiko und kann zum reinen Hardware-Betreiber degradiert werden."
    }
  },
  {
    id: "U6-THG",
    moduleId: "M6-PROSUMER",
    title: "THG-Quote — Ein Markt aus dem Nichts",
    primarySteckbriefId: "L3-EMOB-THG-01",
    vertiefungSteckbriefIds: ["L3-EMOB-THG-01"],
    hook: { text: "Ein E-Auto-Halter lädt ein Foto seines Fahrzeugscheins hoch und bekommt dafür 300–450 € im Jahr — von einem Mineralölkonzern. Wer hat diesen Markt erfunden, und warum ist er so wackelig?" },
    kernidee: {
      text: "Die <strong>THG-Quote (§37a BImSchG)</strong> zwingt Inverkehrbringer fossiler Kraftstoffe, ihre Treibhausgasintensität jährlich stärker zu mindern — erfüllbar u.a. durch <strong>Zukauf</strong> zertifizierter E-Mobilitäts-Einsparungen. E-Auto-Halter lassen ihre (pauschale) Strommenge beim Umweltbundesamt zertifizieren, praktisch immer über <strong>Pooling-Dienstleister</strong> (carbonify, M3E), die tausende Fahrzeugscheine bündeln und die Zertifikate an Mineralölfirmen verkaufen. Das Geschäft ist <strong>zu 100% regulatorisch</strong> geschaffen — und damit maximal politik- und preisvolatil (Absturz von >380 € auf <100 € 2023/24).",
      geldfluss: {
        nodes: [{ id: "halter", label: "E-Auto-Halter" }, { id: "pooler", label: "Pooler" }, { id: "oel", label: "Mineralölfirma" }],
        edges: [
          { from: "pooler", to: "halter", label: "Prämie 300–450 €" },
          { from: "oel", to: "pooler", label: "Zertifikatskauf (Pönale-Anker 600 €/t)" }
        ]
      }
    },
    workedExample: {
      steckbriefId: "L3-EMOB-THG-01",
      steps: [
        { text: "Der Pooler carbonify meldet das Fahrzeug beim UBA an, das eine pauschale Jahresstrommenge (Pkw ~2.000 kWh) als CO₂-Einsparung zertifiziert, und verkauft die gebündelten Zertifikate an ein quotenverpflichtetes Mineralölunternehmen.", questionId: "Q-THG-WE1" },
        { text: "Die Zahlungsbereitschaft der Abnehmer ist regulatorisch nach oben verankert: Ohne Zertifikate müssten sie eine Pönale von 600 €/t CO₂ zahlen.", questionId: "Q-THG-WE2" }
      ]
    },
    retrievalItemIds: ["Q-THG-R1", "Q-THG-R2", "Q-THG-R3", "Q-THG-R4"],
    transferItemId: "Q-THG-T1",
    merkeDirEinenSatz: {
      prompt: "Formuliere in einem Satz: Warum ist der THG-Quotenhandel ein besonders wackeliges Geschäftsmodell?",
      musterantwort: "Weil es zu 100% auf einem regulatorisch geschaffenen Markt beruht — Quotenhöhe, Anrechnungsregeln und Preis hängen an Verordnungen und können abstürzen (2023/24 von über 380 € auf unter 100 €), während die Vermittlerposition selbst kaum verteidigungsfähig ist."
    }
  },
  {
    id: "U2-GROSSKLEIN",
    moduleId: "M2-ERZEUGEN",
    title: "Offshore-Milliarden & Bürgerenergie — zwei Extreme, eine Energiewende",
    primarySteckbriefId: "L3-ERZ-EE-03",
    vertiefungSteckbriefIds: ["L3-ERZ-EE-03", "L3-ERZ-EE-04"],
    hook: { text: "Das eine Projekt kostet 3 Milliarden Euro, das andere beginnt bei 100 Euro Genossenschaftsanteil – beide bauen dieselbe Energiewende. Wer verdient wie?" },
    kernidee: {
      text: "<strong>Offshore-Wind</strong> ist die kapitalintensivste EE-Kategorie (2.500–4.000 €/kW): Finanzierbar wird ein Milliardenprojekt nur durch den für 20 Jahre gesicherten Ausschreibungs-Gebotspreis – und die profitabelste Phase ist nicht der Bau, sondern der jahrzehntelange O&M-Betrieb (20–25% der Projekterlöse). <strong>Bürgerenergiegenossenschaften</strong> arbeiten am anderen Ende der Skala: Mitgliedseinlagen als günstiges, geduldiges Kapital, Identifikation statt Renditemaximierung, Churn unter 5% – und Mechaniken wie der EWS-Sonnencent, der Neuanlagen direkt aus dem Tarif finanziert.",
      geldfluss: {
        nodes: [{ id: "mitglied", label: "Mitglied/Kunde" }, { id: "geno", label: "Genossenschaft" }, { id: "anlage", label: "Neue EE-Anlage" }],
        edges: [
          { from: "mitglied", to: "geno", label: "Einlage + Sonnencent je kWh" },
          { from: "geno", to: "anlage", label: "direkte Projektfinanzierung" }
        ]
      }
    },
    workedExample: {
      steckbriefId: "L3-ERZ-EE-03",
      steps: [
        { text: "Ørsted plant einen 1-GW-Offshore-Park in der Nordsee. Die Investitionskosten liegen bei rund 3.000 € je Kilowatt installierter Leistung.", questionId: "Q-GROSSKLEIN-WE1" },
        { text: "Am anderen Ende der Skala: Die EWS Schönau erhebt auf jede verkaufte Kilowattstunde einen festen 'Sonnencent' – 2022 kamen so über die rund 224.000 Kunden etwa 2,3 Mio. € zusammen.", questionId: "Q-GROSSKLEIN-WE2" }
      ]
    },
    retrievalItemIds: ["Q-GROSSKLEIN-R1", "Q-GROSSKLEIN-R2", "Q-GROSSKLEIN-R3", "Q-GROSSKLEIN-R4"],
    transferItemId: "Q-GROSSKLEIN-T1",
    merkeDirEinenSatz: {
      prompt: "Formuliere in einem Satz: Was macht ein 3-Milliarden-Euro-Offshore-Projekt überhaupt erst finanzierbar?",
      musterantwort: "Der für 20 Jahre gesicherte Ausschreibungs-Gebotspreis: Er verwandelt ein offenes Marktpreisrisiko in einen planbaren Cashflow, den Banken finanzieren können."
    }
  }
];

const LERN_QUIZ_ITEMS = {};
