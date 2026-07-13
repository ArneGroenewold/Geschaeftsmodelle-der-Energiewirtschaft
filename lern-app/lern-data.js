// ══════════════════════════════════════════════════════════
// lern-data.js — redaktionelle Lernschicht (Kurse/Quiz) für Modul 4 "Verkaufen".
// Referenziert GM_DATA (app/data.js) ausschließlich per steckbriefId — keine
// Inhalte werden dupliziert. Siehe dokumentation/07_LERNAPP_KONZEPT.md §9.
// ══════════════════════════════════════════════════════════

const LERN_MODULES = [
  {
    id: "M2-ERZEUGEN",
    title: "Erzeugen & Speichern",
    description: "Vom Gaskraftwerk über EEG und PPAs bis zum Batteriespeicher — wo entsteht Erzeugungs-Marge, und wer sichert sie ab?",
    unitIds: ["U2-MERIT", "U2-REGELENERGIE", "U2-EEG", "U2-PPA", "U2-SPEICHER", "U2-GROSSKLEIN"],
    bossQuizId: null // Stage 2
  },
  {
    id: "M4-VERKAUFEN",
    title: "Verkaufen",
    description: "Vollversorger, Neolieferanten, Ökostrom, Stadtwerke und Vergleichsplattformen — wie fließt das Geld beim Endkundenvertrieb?",
    unitIds: ["U-VOLL", "U-TIBBER", "U-TRANSPARENZ", "U-OCTOPUS", "U-IMPACT", "U-STADTWERK", "U-VERGLEICH"],
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
