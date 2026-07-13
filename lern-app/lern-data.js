// ══════════════════════════════════════════════════════════
// lern-data.js — redaktionelle Lernschicht (Kurse/Quiz) für Modul 4 "Verkaufen".
// Referenziert GM_DATA (app/data.js) ausschließlich per steckbriefId — keine
// Inhalte werden dupliziert. Siehe dokumentation/07_LERNAPP_KONZEPT.md §9.
// ══════════════════════════════════════════════════════════

const LERN_MODULES = [
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
    hook: { text: "Ein durchschnittlicher Stromkunde bringt seinem Versorger oft nur 35–70 € Marge – im ganzen Jahr. Warum kämpfen Konzerne trotzdem um Millionen solcher Kunden?" },
    kernidee: {
      text: "Grundversorger beliefern Haushalte ohne aktiven Vertrag automatisch zum Grundversorgungstarif (GVT) – rechtlich abgesichert über §36 EnWG. Vom Strompreis bleibt nach Beschaffung, Netzentgelten, Steuern und Umlagen nur eine winzige Marge von 0,5–2 ct/kWh übrig. Der eigentliche Gewinnhebel liegt deshalb nicht im Strompreis, sondern im Cross-Selling: Wallbox, Wärmepumpen-Tarif oder PV-Pacht bringen ein Vielfaches der reinen Strommarge.",
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
        { text: "Bleiben dem Versorger nur 1–2 ct/kWh Marge, wird jeder Zusatzverkauf an denselben Kunden – eine Wallbox, ein Wärmepumpen-Tarif, ein PV-Pachtvertrag – überproportional wertvoll, weil dafür kein neuer Kunde akquiriert werden muss.", questionId: "Q-VOLL-WE2" }
      ]
    },
    retrievalItemIds: ["Q-VOLL-R1", "Q-VOLL-R2", "Q-VOLL-R3", "Q-VOLL-R4", "Q-VOLL-R5"],
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
        { text: "Ein Kunde lädt sein E-Auto über Nacht. Die App prüft die bereits mittags veröffentlichten Stundenpreise für den Folgetag und verschiebt den Ladevorgang automatisch in die günstigsten Stunden – meist tief in der Nacht bei hohem Windstromanteil.", questionId: "Q-TIBBER-WE1" },
        { text: "Tibber selbst verdient an dieser Verschiebung nichts zusätzlich – jede eingesparte Kilowattstunde bleibt komplett beim Kunden. Der Erlös von ~6 €/Monat ist vollständig von der Energiemenge entkoppelt.", questionId: "Q-TIBBER-WE2" }
      ]
    },
    retrievalItemIds: ["Q-TIBBER-R1", "Q-TIBBER-R2", "Q-TIBBER-R3", "Q-TIBBER-R4", "Q-TIBBER-R5"],
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
        { text: "Diese Rechnung sieht in Monat 1 genauso aus wie in Monat 25 – deshalb liegt die Kündigungsquote bei Ostrom bei nur ~5%/Jahr statt der 20-30%, die viele Lockangebot-Anbieter sehen.", questionId: "Q-TRANSPARENZ-WE2" }
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
        { text: "Bei einem klassischen Versorger mit Alt-IT löst ein Umzug mit Zählerwechsel mehrere manuelle Bearbeitungsschritte in getrennten Systemen aus. Bei Octopus läuft derselbe Vorgang in Kraken als ein automatisierter Prozess.", questionId: "Q-OCTOPUS-WE1" },
        { text: "Diese eingesparten Betriebskosten investiert Octopus in den Preis – wodurch der Tarif unter dem des Incumbents liegen kann und trotzdem dieselbe Marge trägt. So wuchs die deutsche Kundenzahl von 500.000 auf über 1 Mio. binnen zwölf Monaten.", questionId: "Q-OCTOPUS-WE2" }
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
        { text: "Der Kunde erhält am Jahresende einen Bericht mit Flächengröße und gemessener CO₂-Bindung – einen Nachweis, den ein Konzern-Ökotarif mit zugekauften HKN-Zertifikaten aus 30 Jahre altem norwegischem Wasserkraftstrom nicht liefern kann.", questionId: "Q-IMPACT-WE2" }
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
        { text: "Bei SWM erzielen die profitablen Strom-, Gas- und Fernwärmenetzsparten stabile Überschüsse, die steuerlich über §4 Abs. 6 KStG mit den laufenden Verlusten von U-Bahn und Tram verrechnet werden dürfen.", questionId: "Q-STADTWERK-WE1" },
        { text: "Diese Verschränkung bedeutet: Die Investitionsentscheidung zwischen neuem Fernwärmenetz und zusätzlichen Tram-Linien wird intern im selben Konzern abgewogen, mit dem Stadtrat als letzter Entscheidungsinstanz – nicht von zwei unabhängigen, konkurrierenden Unternehmen.", questionId: "Q-STADTWERK-WE2" }
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
        { text: "Ein Kunde mit 3.500 kWh Jahresverbrauch gibt seine Postleitzahl ein und bekommt eine Rangliste von Tarifen – primär die, mit denen das Portal eine Provisionsvereinbarung hat.", questionId: "Q-VERGLEICH-WE1" },
        { text: "Schließt der Kunde einen Vertrag ab, zahlt der Lieferant 20-60 € (Strom) bzw. 80-150 € (Gas) an das Portal – unabhängig davon, ob der vermittelte Tarif tatsächlich der günstigste am Gesamtmarkt war.", questionId: "Q-VERGLEICH-WE2" }
      ]
    },
    retrievalItemIds: ["Q-VERGLEICH-R1", "Q-VERGLEICH-R2", "Q-VERGLEICH-R3", "Q-VERGLEICH-R4"],
    transferItemId: "Q-VERGLEICH-T1",
    merkeDirEinenSatz: {
      prompt: "Formuliere in einem Satz: Woran verdienen Verivox/Check24 wirklich, und was bedeutet das für die 'Bestenliste', die ein Kunde sieht?",
      musterantwort: "Sie verdienen an einer Provision pro vermitteltem Vertrag, weshalb die angezeigte Reihenfolge auch von der Provisionshöhe und nicht nur vom günstigsten Preis beeinflusst wird."
    }
  }
];

const LERN_QUIZ_ITEMS = {};
