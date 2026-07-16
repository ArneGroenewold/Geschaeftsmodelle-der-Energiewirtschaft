// ══════════════════════════════════════════════════════════
// lern-szenarien.js — Szenario-Missionen (K4-Format, Konzept §5)
//
// Verbundene Fallstudien: Der Lerner schlüpft in eine Rolle und trifft
// eine Kette strategischer Entscheidungen. Jede Option hat eine spürbare
// KONSEQUENZ (Wirkungstext) und verschiebt mehrere Kennzahlen-Dimensionen.
// Am Ende: Debrief mit Dimensions-Balken + Ergebnisstufe.
//
// Es gibt bewusst KEINE eindeutig richtige Option pro Schritt — jede
// Entscheidung ist ein Trade-off. Das trainiert Synthese/Bewertung (Bloom K4),
// nicht Faktenabruf. Inhaltlich verankert in den Wiki-Geschäftsmodellen.
//
// Schema je Mission:
//   { id, title, kurz, moduleId?, rolle, dimensionen:[{key,label,icon}],
//     schritte:[{ id, titel, situation, frage,
//                 optionen:[{ text, wirkung, bewertung:'gut'|'mittel'|'schlecht',
//                             punkte:{<dimKey>:<int>} }] }],
//     debrief:{ stufen:[{minPct, titel, text}] } }   // minPct auf 0..1, absteigend
// ══════════════════════════════════════════════════════════

const SZENARIO_MISSIONS = [
  {
    id: 'SZ-NEO-LAUNCH',
    title: 'Dein eigener Öko-Neo-Vertrieb',
    kurz: 'Gründe den Ökostrom-Discounter »Voltano« und triff die Schlüsselentscheidungen der ersten 18 Monate. Sechs Weichenstellungen, jede mit Folgen.',
    moduleId: 'M4-VERKAUFEN',
    rolle: 'Du bist Gründer:in von »Voltano«, einem neuen Ökostrom-Vertrieb. Kein Netz, keine Kraftwerke — nur ein schlankes Team, eine App und der Anspruch, es besser zu machen als die Großversorger. In den nächsten 18 Monaten entscheidest du über Beschaffung, Produkt, Technik und Wachstum. Es gibt selten eine perfekte Wahl — nur Abwägungen.',
    dimensionen: [
      { key: 'marge', label: 'Wirtschaftlichkeit', icon: '💰' },
      { key: 'vertrauen', label: 'Kundenvertrauen', icon: '🤝' },
      { key: 'resilienz', label: 'Resilienz', icon: '🛡️' }
    ],
    schritte: [
      {
        id: 's1-beschaffung',
        titel: 'Beschaffung',
        situation: 'Bevor der erste Kunde Strom bekommt, musst du entscheiden, wie du ihn einkaufst — und wer das Preisrisiko trägt.',
        frage: 'Wie beschaffst du den Strom für die ersten 5.000 Kunden?',
        optionen: [
          { text: 'Dynamischer Tarif: den stündlichen Börsenpreis 1:1 an die Kunden weitergeben (wie Tibber).',
            wirkung: 'Kunden lieben die Transparenz und sparen bei viel Wind — aber bei der nächsten Preisspitze zahlen sie plötzlich das Dreifache und beschweren sich lautstark. Das Preisrisiko liegt komplett bei ihnen.',
            bewertung: 'mittel', punkte: { marge: 1, vertrauen: 2, resilienz: -1 } },
          { text: 'Festpreis, über Termingeschäfte an der EEX abgesichert.',
            wirkung: 'Solide: Du kaufst die erwartete Menge im Voraus und schläfst ruhig. Die Absicherung kostet Marge, und bei fallenden Preisen sitzt du auf zu teuer eingekauftem Strom — aber kalkulierbar bleibt es.',
            bewertung: 'gut', punkte: { marge: 0, vertrauen: 1, resilienz: 2 } },
          { text: 'Kurzfristig am Spotmarkt einkaufen — ungesichert, aber billig.',
            wirkung: 'Die ersten Monate mit ruhigen Preisen sehen großartig aus, deine Marge glänzt. Dann kommt eine Dunkelflaute, der Preis explodiert, und ohne Absicherung frisst eine einzige Woche deinen Jahresgewinn.',
            bewertung: 'schlecht', punkte: { marge: 2, vertrauen: 0, resilienz: -3 } }
        ]
      },
      {
        id: 's2-tarifmodell',
        titel: 'Erlösmodell',
        situation: 'Jetzt zum Erlösmodell — die Frage, wie du pro Kunde überhaupt Geld verdienst.',
        frage: 'Welches Tarifmodell wählst du?',
        optionen: [
          { text: 'Monats-Abo mit festem Grundpreis, entkoppelt von der kWh-Menge (wie Octopus/Tibber).',
            wirkung: 'Deine Einnahmen werden planbar, und du verdienst auch, wenn Kunden Strom sparen — das entschärft den Zielkonflikt mit der Energiewende. Preissensible Wechsler finden das Abo aber erst mal ungewohnt.',
            bewertung: 'gut', punkte: { marge: 2, vertrauen: 1, resilienz: 1 } },
          { text: 'Klassische Marge pro kWh — je mehr die Leute verbrauchen, desto mehr verdienst du.',
            wirkung: 'Vertraut und leicht vergleichbar. Aber dein Interesse (viel Verbrauch) steht dem Kundeninteresse (sparen) entgegen — und genau damit werben deine Wettbewerber gegen dich.',
            bewertung: 'mittel', punkte: { marge: 1, vertrauen: -1, resilienz: 0 } },
          { text: 'Gar keinen Aufschlag verlangen und dich später über Zusatzprodukte finanzieren.',
            wirkung: 'Das Wachstum explodiert, alle lieben den Preis — aber du verbrennst mit jedem Kunden Geld, und die Zusatzerlöse lassen auf sich warten. Die Investoren werden nervös.',
            bewertung: 'schlecht', punkte: { marge: -2, vertrauen: 2, resilienz: -1 } }
        ]
      },
      {
        id: 's3-gruenstrom',
        titel: 'Grüner Strom',
        situation: '»Öko« steht auf deiner Fahne. Aber wie grün ist dein Strom wirklich — und wie glaubwürdig?',
        frage: 'Wie machst du deinen Strom grün?',
        optionen: [
          { text: 'Billige Herkunftsnachweise (HKN) aus norwegischer Wasserkraft zukaufen.',
            wirkung: 'Formal ist dein Strom jetzt »100 % Öko« — für wenige Cent pro Kunde. Doch Fachjournalisten und Kunden durchschauen das Zertifikate-Modell zunehmend; ein Vergleichstest stuft dich als »Graustrom mit Ökosiegel« ein.',
            bewertung: 'mittel', punkte: { marge: 2, vertrauen: -2, resilienz: 0 } },
          { text: 'Echte Zusätzlichkeit: langfristige PPAs mit neuen Anlagen (wie Fünf Grad).',
            wirkung: 'Teurer und aufwändiger — aber du kannst glaubwürdig zeigen, dass durch dich neue Erzeugung entsteht. Genau diese Story macht dich für die wachsende Zielgruppe echter Ökokunden unangreifbar.',
            bewertung: 'gut', punkte: { marge: -1, vertrauen: 3, resilienz: 1 } },
          { text: 'Graustrom liefern, aber im Marketing »klimafreundlich« behaupten.',
            wirkung: 'Kurzfristig top: volle Marge, grünes Image. Bis eine Verbraucherzentrale klagt, die Presse »Greenwashing« titelt und dir die Kunden in Scharen davonlaufen. Ein existenzielles Reputationsrisiko.',
            bewertung: 'schlecht', punkte: { marge: 3, vertrauen: -3, resilienz: -3 } }
        ]
      },
      {
        id: 's4-technik',
        titel: 'Technik & Skalierung',
        situation: 'Mit 20.000 Kunden ersticken deine Mitarbeiter in manueller Abrechnung und Kundenservice.',
        frage: 'Wie löst du das Technik- und Abrechnungsproblem?',
        optionen: [
          { text: 'Eine fertige Utility-Plattform lizenzieren (Kraken-Modell von Octopus).',
            wirkung: 'Hohe monatliche Lizenzkosten, aber Abrechnung, Wechselprozesse und Service laufen automatisiert und skalieren mühelos. Dein Service-Level steigt, während die Kosten pro Kunde sinken.',
            bewertung: 'gut', punkte: { marge: 1, vertrauen: 2, resilienz: 2 } },
          { text: 'Eigene Software von Grund auf bauen.',
            wirkung: 'Volle Kontrolle und keine Lizenzgebühr — aber die Entwicklung verschlingt Kapital und Monate, und jeder Bug trifft direkt deine Kunden. Ein Wettrennen gegen die Zeit.',
            bewertung: 'mittel', punkte: { marge: -1, vertrauen: 0, resilienz: 0 } },
          { text: 'Weiter manuell arbeiten — Personal ist billiger als IT.',
            wirkung: 'Bei 20.000 Kunden vielleicht noch machbar, aber Fehler häufen sich, die Wartezeiten im Support explodieren und die schlechten Bewertungen auch. So lässt sich nicht skalieren.',
            bewertung: 'schlecht', punkte: { marge: 0, vertrauen: -2, resilienz: -2 } }
        ]
      },
      {
        id: 's5-wachstum',
        titel: 'Wachstum',
        situation: 'Die Investoren wollen Wachstum sehen. Wie gewinnst du die nächsten 100.000 Kunden?',
        frage: 'Welchen Wachstumskanal drehst du auf?',
        optionen: [
          { text: 'Vergleichsportale wie Check24 — Provision (CPA) je vermitteltem Kunden.',
            wirkung: 'Die Kundenzahl schießt hoch. Aber du zahlst je Abschluss eine saftige Provision, und Portal-Kunden wechseln nach dem Bonusjahr sofort weiter — teuer erkauftes, illoyales Wachstum.',
            bewertung: 'mittel', punkte: { marge: -1, vertrauen: 0, resilienz: -1 } },
          { text: 'Organisch über Weiterempfehlung und eine starke Marke.',
            wirkung: 'Langsamer, aber die Kunden bleiben und bringen Freunde mit. Deine Akquisekosten sinken pro Kohorte, und die Loyalität macht dich in Krisen widerstandsfähig — nur den Investoren dauert es zu lang.',
            bewertung: 'gut', punkte: { marge: 1, vertrauen: 2, resilienz: 2 } },
          { text: 'Aggressive Neukunden-Boni, mit Verlust finanziert.',
            wirkung: 'Die Zahlen für die nächste Finanzierungsrunde sehen spektakulär aus. Doch du kaufst dir Schnäppchenjäger ein, deine Verluste wachsen mit jedem Kunden, und beim ersten Gegenwind bricht das Kartenhaus.',
            bewertung: 'schlecht', punkte: { marge: -2, vertrauen: 0, resilienz: -2 } }
        ]
      },
      {
        id: 's6-krise',
        titel: 'Die Preiskrise',
        situation: '18 Monate später: Eine Dunkelflaute treibt die Großhandelspreise auf ein Rekordhoch. Deine Beschaffung ächzt, die Kunden sind nervös.',
        frage: 'Wie reagierst du auf die Preiskrise?',
        optionen: [
          { text: 'Transparent kommunizieren, Spartipps geben, Härtefälle kurzfristig abfedern.',
            wirkung: 'Manche Kunden ärgern sich trotzdem, aber die meisten honorieren die Ehrlichkeit und bleiben. Deine Marke geht gestärkt aus der Krise hervor — Vertrauen, das Gold wert ist.',
            bewertung: 'gut', punkte: { marge: -1, vertrauen: 3, resilienz: 2 } },
          { text: 'Preise still und leise erhöhen und auf das Kleingedruckte verweisen.',
            wirkung: 'Kurzfristig rettet es die Marge. Aber der Shitstorm in den Bewertungsportalen und die Kündigungswelle kosten dich am Ende mehr, als die Erhöhung einbringt.',
            bewertung: 'mittel', punkte: { marge: 1, vertrauen: -2, resilienz: -1 } },
          { text: 'Mit Lockpreisen neue Kunden anwerben, um schnell Liquidität zu holen.',
            wirkung: 'Ein verzweifeltes Schneeballsystem: Du kaufst teuren Neukunden-Verbrauch genau dann ein, wenn Strom am teuersten ist — der klassische Weg in die Pleite, den 2021 reihenweise Billiganbieter gegangen sind.',
            bewertung: 'schlecht', punkte: { marge: -2, vertrauen: -2, resilienz: -3 } }
        ]
      }
    ],
    debrief: {
      stufen: [
        { minPct: 0.78, titel: '🚀 Der nächste Tibber', text: 'Voltano ist auf dem Weg zur Marke: profitabel, glaubwürdig grün und krisenfest. Du hast die Trade-offs zwischen Marge, Vertrauen und Resilienz meisterhaft ausbalanciert — genau die Kunst, die echte Neo-Vertriebe von den Pleitekandidaten trennt.' },
        { minPct: 0.55, titel: '👍 Solider Nischen-Player', text: 'Voltano steht stabil da und hat eine treue Kundschaft. In einzelnen Feldern hast du Potenzial liegen lassen — aber du hast die existenziellen Fehler vermieden und ein tragfähiges Geschäft aufgebaut.' },
        { minPct: 0.35, titel: '😬 Wackliger Start', text: 'Voltano überlebt, aber auf dünnem Eis. An mehreren Weichen hast du kurzfristige Vorteile gegen langfristige Stabilität eingetauscht. Schau dir an, welche Dimension am schwächsten ist — dort liegt dein größtes Risiko.' },
        { minPct: 0, titel: '💀 Bald insolvent', text: 'Voltano reiht sich in die lange Liste der Billiganbieter ein, die in der Preiskrise untergingen. Zu oft hat die Marge über Vertrauen und Resilienz gesiegt. Genau dieses Muster hat 2021 reihenweise Neo-Vertriebe die Existenz gekostet — versuch es nochmal.' }
      ]
    }
  },

  {
    id: 'SZ-HANDEL-DESK',
    title: 'Der Handelstisch',
    kurz: 'Du übernimmst den Energiehandel eines Stadtwerks. Zwischen Beschaffung, Absicherung und der Versuchung des Eigenhandels entscheidest du über Millionen — und der Aufsichtsrat schaut genau hin.',
    moduleId: 'M1-SPIELFELD',
    rolle: 'Du leitest den neuen Handelstisch der Stadtwerke Musterstadt. Deine Aufgabe: den Strom für 120.000 Kunden beschaffen, Risiken absichern — und vielleicht mit klugem Handel etwas dazuverdienen. Doch jeder Gewinn hat ein Risiko-Gegenstück, und Compliance ist keine Kür.',
    dimensionen: [
      { key: 'ertrag', label: 'Ertrag', icon: '💰' },
      { key: 'risiko', label: 'Risiko-Kontrolle', icon: '🛡️' },
      { key: 'compliance', label: 'Compliance', icon: '⚖️' }
    ],
    schritte: [
      { id: 'h1', titel: 'Beschaffung', situation: 'Der Vertrieb braucht Strom für das nächste Lieferjahr.', frage: 'Wie deckst du den Bedarf?', optionen: [
        { text: 'Strukturiert über Termingeschäfte in Tranchen einkaufen (fester Hedging-Fahrplan).', wirkung: 'Unspektakulär, aber genau richtig: Du glättest das Preisrisiko über die Zeit und bleibst kalkulierbar. Die Terminaufschläge kosten etwas Marge.', bewertung: 'gut', punkte: { ertrag: 0, risiko: 3, compliance: 1 } },
        { text: 'Alles kurzfristig am Spotmarkt kaufen — spart die Terminaufschläge.', wirkung: 'Solange die Preise ruhig sind, sparst du. Aber du wettest faktisch jeden Tag neu — eine Preisspitze trifft dich ungeschützt.', bewertung: 'mittel', punkte: { ertrag: 2, risiko: -2, compliance: 0 } },
        { text: 'Warten, bis die Preise fallen, und dann alles auf einmal kaufen.', wirkung: 'Das ist Market-Timing, also Spekulation mit dem Kundengeschäft. Geht es schief, fehlt der Strom teuer — und der Aufsichtsrat fragt, wer das genehmigt hat.', bewertung: 'schlecht', punkte: { ertrag: 1, risiko: -3, compliance: -1 } }
      ] },
      { id: 'h2', titel: 'Eigenhandel', situation: 'Ein Händler will mit freien Limits auf eigene Rechnung handeln.', frage: 'Wie hältst du es mit Prop-Trading?', optionen: [
        { text: 'Strikt getrennt: nur Absicherung des Kundengeschäfts, kein Eigenhandel.', wirkung: 'Du lässt Zusatzerlöse liegen, aber dein Risikoprofil ist sauber und der Aufsichtsrat schläft ruhig. Für ein Stadtwerk oft genau die richtige Wahl.', bewertung: 'gut', punkte: { ertrag: -1, risiko: 2, compliance: 3 } },
        { text: 'Kleines, eng limitiertes Eigenhandelsbuch mit klaren Risikolimits.', wirkung: 'Diszipliniert gemacht ein netter Zusatzerlös. Es braucht aber wasserdichte Limits und Kontrolle — sonst wächst es dir über den Kopf.', bewertung: 'mittel', punkte: { ertrag: 2, risiko: 0, compliance: 1 } },
        { text: 'Großes Eigenhandelsbuch — die Chancen sind zu gut, um sie liegen zu lassen.', wirkung: 'Ein Stadtwerk ist kein Hedgefonds. Ein einziger Fehlgriff kann Jahresgewinne verbrennen — mehrere Stadtwerke haben sich so ruiniert.', bewertung: 'schlecht', punkte: { ertrag: 3, risiko: -3, compliance: -2 } }
      ] },
      { id: 'h3', titel: 'Brennstoff-Hedge', situation: 'Euer Heizkraftwerk braucht Gas und CO₂-Zertifikate.', frage: 'Wie sicherst du die Brennstoffkosten ab?', optionen: [
        { text: 'Gas und CO₂ im Paket absichern (Clean Spark Spread).', wirkung: 'Du sicherst die Marge des Kraftwerks als Ganzes — genau so gehört es sich. Ruhiger Schlaf, planbarer Deckungsbeitrag.', bewertung: 'gut', punkte: { ertrag: 0, risiko: 3, compliance: 1 } },
        { text: 'Nur das Gas absichern, den CO₂-Preis offen lassen.', wirkung: 'Ein halber Hedge: Steigt der CO₂-Preis, schmilzt deine Marge trotzdem. Manchmal vertretbar, aber ein bewusstes Restrisiko.', bewertung: 'mittel', punkte: { ertrag: 1, risiko: -1, compliance: 0 } },
        { text: 'Gar nicht absichern — der Spread war zuletzt stabil.', wirkung: 'Vergangene Stabilität ist keine Garantie. Ein Sprung bei Gas oder CO₂ reißt ein Loch in die Bilanz, das niemand geplant hat.', bewertung: 'schlecht', punkte: { ertrag: 2, risiko: -3, compliance: -1 } }
      ] },
      { id: 'h4', titel: 'Regelenergie', situation: 'Euer Kraftwerk könnte am Regelenergiemarkt Leistung anbieten.', frage: 'Nutzt du den Regelenergiemarkt?', optionen: [
        { text: 'Präqualifizieren und Leistung vorhalten — planbarer Zusatzerlös aus dem Leistungspreis.', wirkung: 'Zusätzliche Einnahmen, die unabhängig vom Abruf fließen. Gut fürs Ergebnis und sauber ins Kerngeschäft integriert.', bewertung: 'gut', punkte: { ertrag: 2, risiko: 1, compliance: 1 } },
        { text: 'Nur gelegentlich bei besonders hohen Preisen mitbieten.', wirkung: 'Du nimmst Spitzen mit, ohne dich zu binden. Der Zusatzerlös bleibt bescheiden, aber das Risiko auch.', bewertung: 'mittel', punkte: { ertrag: 1, risiko: 0, compliance: 0 } },
        { text: 'Den Kraftwerksfahrplan komplett auf Regelenergie ausrichten und dafür verbiegen.', wirkung: 'Du optimierst auf einen Nebenmarkt und vernachlässigst die Grundversorgung — die Fahrplanabweichungen kosten am Ende teure Ausgleichsenergie.', bewertung: 'schlecht', punkte: { ertrag: 2, risiko: -2, compliance: -2 } }
      ] },
      { id: 'h5', titel: 'Compliance', situation: 'Die BNetzA verschärft die Transparenz- und Meldepflichten (REMIT).', frage: 'Wie gehst du mit den Meldepflichten um?', optionen: [
        { text: 'Alles sauber dokumentieren und jedes meldepflichtige Geschäft fristgerecht melden.', wirkung: 'Aufwändig, aber unangreifbar. Im Zweifel schützt genau diese Disziplin dich und das Stadtwerk vor empfindlichen Bußgeldern.', bewertung: 'gut', punkte: { ertrag: -1, risiko: 1, compliance: 3 } },
        { text: 'Das Nötigste melden, Graubereiche pragmatisch auslegen.', wirkung: 'Spart Arbeit, schafft aber angreifbare Grauzonen. Bei einer Prüfung wird aus Pragmatismus schnell ein Problem.', bewertung: 'mittel', punkte: { ertrag: 1, risiko: 0, compliance: -1 } },
        { text: 'Meldungen schleifen lassen — so genau kontrolliert das ohnehin niemand.', wirkung: 'Ein gefährlicher Irrtum: REMIT-Verstöße werden verfolgt und teuer geahndet. Ein einziger Fund reicht für einen handfesten Skandal.', bewertung: 'schlecht', punkte: { ertrag: 1, risiko: -1, compliance: -3 } }
      ] },
      { id: 'h6', titel: 'Die Preiskrise', situation: 'Eine geopolitische Krise lässt die Gas- und Strompreise explodieren.', frage: 'Wie reagierst du am Handelstisch?', optionen: [
        { text: 'Dank Hedging ruhig bleiben, den Fahrplan halten und die Kunden transparent informieren.', wirkung: 'Deine Vorsorge zahlt sich aus: Während andere in Panik teuer nachkaufen, bleibt dein Stadtwerk lieferfähig und glaubwürdig.', bewertung: 'gut', punkte: { ertrag: 0, risiko: 3, compliance: 1 } },
        { text: 'Offene Positionen hektisch glattstellen — teuer, aber sicher.', wirkung: 'Du kaufst genau im Hoch nach und realisierst Verluste. Sicher, aber ein teures Eingeständnis, dass die Absicherung vorher gefehlt hat.', bewertung: 'mittel', punkte: { ertrag: -2, risiko: 1, compliance: 0 } },
        { text: 'Auf schnell fallende Preise wetten und Positionen aufstocken.', wirkung: 'Mitten in der Krise das Risiko erhöhen ist ein Vabanquespiel. Fällt der Preis nicht, ist das Loch in der Bilanz existenziell.', bewertung: 'schlecht', punkte: { ertrag: 1, risiko: -3, compliance: -2 } }
      ] }
    ],
    debrief: { stufen: [
      { minPct: 0.78, titel: '🏆 Meister des Risikos', text: 'Dein Handelstisch bringt planbare Erträge, hält jedes Risiko im Griff und ist regulatorisch sauber. Genau diese Balance — Beschaffung sichern, nicht spekulieren, Compliance ernst nehmen — macht einen professionellen Energiehandel aus.' },
      { minPct: 0.55, titel: '👍 Solider Handelstisch', text: 'Du hast die groben Fehler vermieden und lieferst verlässlich. In einzelnen Situationen bist du etwas mehr Risiko gegangen als nötig — aber das Stadtwerk steht stabil da.' },
      { minPct: 0.35, titel: '😬 Auf der Kippe', text: 'Zu oft hat die Aussicht auf Zusatzerlöse über die Risikokontrolle gesiegt. Ein ruhiges Jahr verzeiht das — das nächste Krisenjahr womöglich nicht. Schau, welche Dimension am schwächsten ist.' },
      { minPct: 0, titel: '💀 Der Aufsichtsrat greift durch', text: 'Spekulation und laxe Compliance haben den Handelstisch in die roten Zahlen und in die Schlagzeilen gebracht. Genau so sind schon Stadtwerke in ernste Schieflage geraten — probier eine diszipliniertere Linie.' }
    ] }
  },

  {
    id: 'SZ-BESS-MERCHANT',
    title: 'Der Batteriespeicher',
    kurz: 'Du baust einen 50-MW-Großspeicher und musst ihn am Markt refinanzieren — zwischen sicheren Verträgen und lukrativer, aber riskanter Merchant-Vermarktung.',
    moduleId: 'M2-ERZEUGEN',
    rolle: 'Du entwickelst einen 50-MW-Batteriespeicher. Die Technik steht — jetzt entscheidest du, wie er Geld verdient. Sichere Verträge bringen Ruhe, Merchant-Vermarktung an FCR, Arbitrage und Regelenergie lockt mit höheren Renditen. Nur: Mit jedem neuen Speicher am Markt schrumpfen die Spreads.',
    dimensionen: [
      { key: 'rendite', label: 'Rendite', icon: '💰' },
      { key: 'opt', label: 'Optimierung', icon: '⚙️' },
      { key: 'resilienz', label: 'Resilienz', icon: '🛡️' }
    ],
    schritte: [
      { id: 'b1', titel: 'Standort', situation: 'Der Netzanschluss entscheidet oft über Erfolg oder Scheitern.', frage: 'Wo baust du den Speicher?', optionen: [
        { text: 'An einem Netzknoten mit freier Kapazität — auch wenn die Fläche teurer ist.', wirkung: 'Der schnelle, gesicherte Netzanschluss ist Gold wert. Du kannst früh ans Netz und verdienst, während andere noch in der Warteschlange stehen.', bewertung: 'gut', punkte: { rendite: 0, opt: 1, resilienz: 3 } },
        { text: 'Günstige Fläche nehmen, auch wenn der Netzanschluss Jahre dauert.', wirkung: 'Du sparst beim Grundstück, aber jedes Jahr ohne Anschluss ist ein Jahr ohne Erlös — und die Marktbedingungen können sich bis dahin drehen.', bewertung: 'mittel', punkte: { rendite: 1, opt: 0, resilienz: -2 } },
        { text: 'Egal wo, Hauptsache billig — der Anschluss klärt sich schon.', wirkung: 'Ein teurer Irrtum: Ohne gesicherten Netzanschluss ist der Speicher wertlos. Genau daran scheitern reihenweise Projekte.', bewertung: 'schlecht', punkte: { rendite: 2, opt: -1, resilienz: -3 } }
      ] },
      { id: 'b2', titel: 'Vermarktung', situation: 'Ein Speicher kann mehrere Märkte gleichzeitig bedienen.', frage: 'Wie vermarktest du die Kapazität?', optionen: [
        { text: 'Multi-Use-Stacking: FCR, Arbitrage und aFRR dynamisch je nach bestem Grenzerlös.', wirkung: 'Du holst das Maximum aus jeder Stunde heraus — das ist die Königsdisziplin der Speichervermarktung und rechtfertigt die Investition erst.', bewertung: 'gut', punkte: { rendite: 3, opt: 2, resilienz: 0 } },
        { text: 'Nur FCR — einfach und stabil, aber begrenzt.', wirkung: 'Verlässlich und schonend für die Zellen. Der FCR-Markt ist aber klein und die Preise fallen, je mehr Speicher dazukommen.', bewertung: 'mittel', punkte: { rendite: 1, opt: 0, resilienz: 1 } },
        { text: 'Nur Spotmarkt-Arbitrage mit voller Zyklenlast fahren.', wirkung: 'Die Erlöse können gut sein, aber die harte tägliche Zyklung lässt die Batterie schneller altern — du verdienst kurzfristig und zahlst langfristig.', bewertung: 'schlecht', punkte: { rendite: 2, opt: -1, resilienz: -2 } }
      ] },
      { id: 'b3', titel: 'Finanzierung', situation: 'Die Bank will wissen, wie sicher deine Erlöse sind.', frage: 'Wie finanzierst du den Speicher?', optionen: [
        { text: 'Tolling-/Floor-Vertrag mit einem Optimierer: garantierter Mindesterlös, Upside geteilt.', wirkung: 'Der garantierte Boden senkt dein Risiko und deine Finanzierungskosten deutlich. Du gibst einen Teil der Chance ab, gewinnst aber Planbarkeit.', bewertung: 'gut', punkte: { rendite: 0, opt: 1, resilienz: 3 } },
        { text: 'Mischung: die Hälfte über einen Floor abgesichert, die Hälfte merchant.', wirkung: 'Ein ausgewogener Weg — etwas Sicherheit, etwas Chance. Für viele Projekte genau der richtige Kompromiss.', bewertung: 'gut', punkte: { rendite: 1, opt: 1, resilienz: 1 } },
        { text: 'Voll merchant — die Bank verlangt dafür hohe Zinsen, aber die Rendite lockt.', wirkung: 'Ohne abgesicherte Erlöse trägst du das volle Marktrisiko, und die teure Finanzierung frisst einen Teil der Chance. Ein Spreadeinbruch kann dich kippen.', bewertung: 'schlecht', punkte: { rendite: 2, opt: 0, resilienz: -3 } }
      ] },
      { id: 'b4', titel: 'Optimierung', situation: 'Der Einsatzfahrplan entscheidet über den Erlös jeder Stunde.', frage: 'Wer optimiert den Speichereinsatz?', optionen: [
        { text: 'Einen erfahrenen Optimierer mit Erfolgsbeteiligung beauftragen.', wirkung: 'Gute Optimierung kann den Erlös vervielfachen — dieser Hebel ist die Provision fast immer wert. Der Partner hat dasselbe Interesse wie du.', bewertung: 'gut', punkte: { rendite: 2, opt: 3, resilienz: 1 } },
        { text: 'Eigene Optimierungssoftware entwickeln.', wirkung: 'Volle Kontrolle und keine laufende Gebühr — aber der Aufbau kostet Zeit und Können, und anfangs lässt du Erlöse liegen.', bewertung: 'mittel', punkte: { rendite: 0, opt: 0, resilienz: 0 } },
        { text: 'Feste Fahrpläne fahren, keine dynamische Optimierung.', wirkung: 'Du verschenkst genau die Stunden, aus denen sich ein Speicher refinanziert. Schlechte Optimierung lässt bares Geld liegen.', bewertung: 'schlecht', punkte: { rendite: -2, opt: -3, resilienz: 0 } }
      ] },
      { id: 'b5', titel: 'Degradation', situation: 'Jeder Lade-Zyklus altert die Batterie ein Stück.', frage: 'Wie fährst du die Batterie über die Lebensdauer?', optionen: [
        { text: 'Zyklen bewusst schonen, das Garantie-Fenster einhalten, Lebensdauer maximieren.', wirkung: 'Du verzichtest auf einige Erlöse heute, sicherst dir dafür viele profitable Jahre. Über die Laufzeit rechnet sich das fast immer.', bewertung: 'gut', punkte: { rendite: 0, opt: 1, resilienz: 2 } },
        { text: 'Aggressiver fahren, wenn die Preise besonders gut sind.', wirkung: 'Opportunistisch vertretbar — aber jede Extra-Runde kostet Lebensdauer. Diszipliniert dosieren, sonst kippt die Rechnung.', bewertung: 'mittel', punkte: { rendite: 2, opt: 0, resilienz: -2 } },
        { text: 'Maximale Auslastung rund um die Uhr, koste es was es wolle.', wirkung: 'Kurzfristig glänzen die Erlöse, aber die Batterie verliert rasant Kapazität — am Ende steht ein vorzeitiger, teurer Austausch.', bewertung: 'schlecht', punkte: { rendite: 2, opt: -1, resilienz: -3 } }
      ] },
      { id: 'b6', titel: 'Kannibalisierung', situation: 'Immer mehr Speicher am Markt drücken die FCR-Preise.', frage: 'Wie reagierst du auf sinkende Spreads?', optionen: [
        { text: 'Früh in andere Märkte (aFRR, Intraday) diversifizieren.', wirkung: 'Wer als Erster ausweicht, findet dort noch gute Erlöse. Diversifikation ist die beste Antwort auf einen enger werdenden Markt.', bewertung: 'gut', punkte: { rendite: 1, opt: 2, resilienz: 2 } },
        { text: 'Abwarten, ob sich die Preise wieder erholen.', wirkung: 'Passivität kostet: Während du wartest, ernten die Wendigen die letzten guten Spreads. Deine Erlöskurve zeigt nach unten.', bewertung: 'mittel', punkte: { rendite: -1, opt: 0, resilienz: -1 } },
        { text: 'Noch einen Speicher danebenbauen, um Skaleneffekte zu heben.', wirkung: 'Du drückst mit deinem eigenen Zubau die Preise weiter — und verdoppelst dein Risiko in einem Markt, der gerade enger wird.', bewertung: 'schlecht', punkte: { rendite: 0, opt: -1, resilienz: -2 } }
      ] }
    ],
    debrief: { stufen: [
      { minPct: 0.78, titel: '🚀 Der Spread-König', text: 'Dein Speicher ist ein Musterfall: gesicherter Netzanschluss, clevere Multi-Use-Vermarktung, kluge Finanzierung und eine geschonte Batterie. So verdient man mit Flexibilität nachhaltig Geld — auch wenn der Markt enger wird.' },
      { minPct: 0.55, titel: '👍 Solides Speichergeschäft', text: 'Der Speicher trägt sich und liefert ordentliche Renditen. An einzelnen Stellen hast du Erlöse oder Lebensdauer verschenkt — aber die existenziellen Fehler hast du vermieden.' },
      { minPct: 0.35, titel: '😬 Enge Margen', text: 'Zwischen zu viel Merchant-Risiko und schwacher Optimierung ist die Rendite dünn geworden. Ein Spreadeinbruch könnte gefährlich werden — schau, wo deine schwächste Dimension liegt.' },
      { minPct: 0, titel: '💀 Stranded Asset', text: 'Schlechter Standort, volles Marktrisiko und verschlissene Zellen: Dein Speicher verdient sein Kapital nicht mehr herein. Genau so werden aus Hoffnungsträgern Investitionsruinen — versuch es nochmal.' }
    ] }
  },

  {
    id: 'SZ-VNB-KONZESSION',
    title: 'Das Netz der Stadt',
    kurz: 'Du führst einen kommunalen Verteilnetzbetreiber durch Regulierung, Netzausbau und Energiewende — im Spannungsfeld aus Erlösobergrenze, Versorgungssicherheit und Kommunalpolitik.',
    moduleId: 'M3-NETZE',
    rolle: 'Du bist Geschäftsführer:in des Verteilnetzbetreibers deiner Stadt — ein reguliertes Monopol. Die BNetzA deckelt deine Erlöse über die Anreizregulierung, gleichzeitig sollst du Wärmepumpen, Wallboxen und PV ans Netz bringen. Zwischen Effizienzvorgaben, Versorgungssicherheit und dem Stadtrat sind kluge Investitionen gefragt.',
    dimensionen: [
      { key: 'wirt', label: 'Wirtschaftlichkeit', icon: '💰' },
      { key: 'vers', label: 'Versorgungssicherheit', icon: '🔌' },
      { key: 'reg', label: 'Regulatorik-Standing', icon: '⚖️' }
    ],
    schritte: [
      { id: 'n1', titel: 'Konzession', situation: 'Die Wegekonzession läuft aus, andere Betreiber bewerben sich.', frage: 'Wie sicherst du dir das Netz?', optionen: [
        { text: 'In ein faires Angebot, guten Service und ein überzeugendes Konzept investieren, um die Konzession zu halten.', wirkung: 'Du gewinnst die Ausschreibung glaubwürdig und bindest die Kommune langfristig. Die Investition zahlt sich über 20 Jahre Netzbetrieb aus.', bewertung: 'gut', punkte: { wirt: -1, vers: 1, reg: 3 } },
        { text: 'Auf den Bestandsvorteil vertrauen und wenig anbieten.', wirkung: 'Vielleicht reicht es — vielleicht aber schnappt sich ein hungriger Wettbewerber die Konzession. Ein unnötiges Risiko für dein Kerngeschäft.', bewertung: 'mittel', punkte: { wirt: 1, vers: 0, reg: -1 } },
        { text: 'Die Stadt mit Klagen und Fristen zermürben.', wirkung: 'Du verbrennst politisches Kapital. Selbst wenn du die Konzession behältst, hast du das Verhältnis zur Kommune nachhaltig vergiftet.', bewertung: 'schlecht', punkte: { wirt: 0, vers: -1, reg: -3 } }
      ] },
      { id: 'n2', titel: 'Effizienz', situation: 'Der Effizienzvergleich der BNetzA nach ARegV steht an.', frage: 'Wie stellst du dich auf?', optionen: [
        { text: 'In moderne, effiziente Technik investieren, um die Erlösobergrenze langfristig zu sichern.', wirkung: 'Effiziente Netze werden von der Regulierung belohnt und senken deine Kosten dauerhaft. Ein Invest, das sich über die Regulierungsperiode auszahlt.', bewertung: 'gut', punkte: { wirt: 0, vers: 2, reg: 2 } },
        { text: 'Kosten kurzfristig drücken und Wartung strecken.', wirkung: 'Das schönt die aktuelle Bilanz, aber aufgeschobene Wartung rächt sich: mehr Störungen, unzufriedene Kunden, am Ende teurer.', bewertung: 'mittel', punkte: { wirt: 2, vers: -2, reg: 0 } },
        { text: 'Ineffizienzen kaschieren und auf eine lasche Prüfung hoffen.', wirkung: 'Die BNetzA rechnet genau. Fliegt es auf, drohen Kürzungen der Erlösobergrenze und ein beschädigtes Standing — ein schlechtes Geschäft.', bewertung: 'schlecht', punkte: { wirt: 1, vers: -1, reg: -3 } }
      ] },
      { id: 'n3', titel: 'Netzausbau', situation: 'Immer mehr PV, Wärmepumpen und Wallboxen belasten deine Leitungen.', frage: 'Wie gehst du mit den Engpässen um?', optionen: [
        { text: 'Vorausschauend ausbauen und digitale Ortsnetzstationen einbauen.', wirkung: 'Du bist der Entwicklung voraus, vermeidest teure Notmaßnahmen und ermöglichst die Energiewende vor Ort. Genau das erwartet die Regulierung künftig.', bewertung: 'gut', punkte: { wirt: -1, vers: 3, reg: 2 } },
        { text: 'Nur reagieren, wenn es konkret eng wird.', wirkung: 'Spart heute Geld, führt aber zu Anschlussstaus und Beschwerden — und reaktiver Ausbau ist am Ende meist teurer als geplanter.', bewertung: 'mittel', punkte: { wirt: 1, vers: -1, reg: 0 } },
        { text: 'Neue Anschlüsse verzögern, um Investitionen zu sparen.', wirkung: 'Du bremst die Energiewende und riskierst Ärger mit Kunden und Aufsicht. Anschlussverweigerung ist rechtlich heikel und politisch Gift.', bewertung: 'schlecht', punkte: { wirt: 1, vers: -3, reg: -2 } }
      ] },
      { id: 'n4', titel: '§14a-Steuerung', situation: 'Steuerbare Verbraucher wie Wallboxen und Wärmepumpen müssen ins Netz integriert werden.', frage: 'Wie steuerst du sie?', optionen: [
        { text: 'Netzdienlich dimmen statt hart abschalten — mit Anreizen für die Kunden.', wirkung: 'Du hältst das Netz stabil, ohne die Kunden zu verprellen. Genau diese intelligente Steuerung macht den Ausbau bezahlbar.', bewertung: 'gut', punkte: { wirt: 0, vers: 3, reg: 2 } },
        { text: 'Nur die gesetzliche Mindeststeuerung umsetzen.', wirkung: 'Regelkonform, aber ohne Ambition. Du lässt Potenzial liegen, das dir teuren Netzausbau ersparen könnte.', bewertung: 'mittel', punkte: { wirt: 1, vers: 0, reg: 0 } },
        { text: 'Im Zweifel hart abschalten — das ist am einfachsten.', wirkung: 'Kunden, deren Wärmepumpe im Winter abgeschaltet wird, sind zu Recht empört. Ein Imageschaden und regulatorisch das falsche Signal.', bewertung: 'schlecht', punkte: { wirt: 1, vers: -1, reg: -2 } }
      ] },
      { id: 'n5', titel: 'Digitalisierung', situation: 'Der Smart-Meter-Rollout in deinem Gebiet stockt.', frage: 'Wie treibst du die Digitalisierung?', optionen: [
        { text: 'Den Rollout beschleunigen — die Messdaten senken künftig Redispatch- und Ausbaukosten.', wirkung: 'Daten sind die Grundlage eines effizienten Netzbetriebs. Wer früh digitalisiert, spart später an vielen Stellen.', bewertung: 'gut', punkte: { wirt: 0, vers: 2, reg: 2 } },
        { text: 'Im gesetzlichen Pflichttempo weitermachen.', wirkung: 'Nichts falsch gemacht, aber auch keinen Vorsprung gewonnen. Du bleibst abhängig von groben Schätzungen statt echter Daten.', bewertung: 'mittel', punkte: { wirt: 1, vers: 0, reg: 0 } },
        { text: 'Den Rollout so lange wie möglich hinauszögern.', wirkung: 'Du fliegst weiter im Blindflug und verpasst Effizienzgewinne. Die Aufsicht sieht das Zögern zunehmend kritisch.', bewertung: 'schlecht', punkte: { wirt: 1, vers: -1, reg: -2 } }
      ] },
      { id: 'n6', titel: 'Kommunalpolitik', situation: 'Der Stadtrat will die Netzentgelte senken und Gewinne ausschütten.', frage: 'Wie reagierst du?', optionen: [
        { text: 'Erklären, warum Investitionen jetzt Vorrang haben — Substanz vor Ausschüttung.', wirkung: 'Unbequem, aber verantwortungsvoll: Ein starkes Netz ist die Basis für alles Weitere. Gute Argumente überzeugen auch den Stadtrat.', bewertung: 'gut', punkte: { wirt: 0, vers: 2, reg: 2 } },
        { text: 'Einen Kompromiss finden: moderate Ausschüttung, den Rest investieren.', wirkung: 'Pragmatisch und politisch klug. Du befriedigst die Kommune, ohne die Netzsubstanz zu opfern.', bewertung: 'gut', punkte: { wirt: 1, vers: 1, reg: 1 } },
        { text: 'Voll ausschütten, um politisch zu punkten.', wirkung: 'Kurzfristig applaudiert der Stadtrat — langfristig verrottet das Netz. Ausschüttung auf Kosten der Substanz ist ein teurer Fehler.', bewertung: 'schlecht', punkte: { wirt: 2, vers: -3, reg: -2 } }
      ] }
    ],
    debrief: { stufen: [
      { minPct: 0.78, titel: '🏅 Vorbild-Netzbetreiber', text: 'Du hast die Konzession souverän gehalten, effizient investiert und die Energiewende ins Netz gebracht — bei sauberem Standing gegenüber Regulierung und Kommune. Genau diese Balance macht einen exzellenten Verteilnetzbetreiber aus.' },
      { minPct: 0.55, titel: '👍 Solides Netz', text: 'Dein Netz läuft stabil und regelkonform. An einzelnen Stellen hättest du mutiger investieren können — aber die Versorgung steht und die Aufsicht ist zufrieden.' },
      { minPct: 0.35, titel: '😬 Substanz bröckelt', text: 'Zu oft hat die kurzfristige Bilanz über die Netzsubstanz gesiegt. Störungen und Anschlussstaus häufen sich, und die Regulierung wird aufmerksam. Achte auf deine schwächste Dimension.' },
      { minPct: 0, titel: '💀 Konzession verloren', text: 'Vernachlässigte Substanz, verprellte Kommune, kritische Aufsicht: Am Ende ist das Netz in fremder Hand oder in schlechtem Zustand. Ein Monopol ist kein Selbstläufer — versuch eine langfristigere Linie.' }
    ] }
  },

  {
    id: 'SZ-FLEX-AGGREGATOR',
    title: 'Der Flex-Aggregator',
    kurz: 'Du bündelst tausende kleine Anlagen zu einem virtuellen Kraftwerk und verkaufst ihre Flexibilität — wenn du Portfolio, Technik und Verträge in Balance hältst.',
    moduleId: 'M5-FLEX',
    rolle: 'Du gründest einen Flexibilitäts-Aggregator. Einzeln sind Heimspeicher, Wärmepumpen und E-Autos unsichtbar für den Markt — gebündelt werden sie zum virtuellen Kraftwerk, das an Regelenergie- und Spotmärkten verdient. Deine Kunst: das richtige Portfolio, verlässliche Steuerung und faire Verträge.',
    dimensionen: [
      { key: 'marge', label: 'Marge', icon: '💰' },
      { key: 'port', label: 'Portfolio-Skalierung', icon: '📈' },
      { key: 'resilienz', label: 'Resilienz', icon: '🛡️' }
    ],
    schritte: [
      { id: 'f1', titel: 'Portfolio', situation: 'Nicht jede Anlagenart ist gleich gut zu bündeln.', frage: 'Womit startest du dein Portfolio?', optionen: [
        { text: 'Ein homogenes Heimspeicher-Portfolio — gut steuerbar und planbar.', wirkung: 'Homogen und zuverlässig: Heimspeicher lassen sich sauber aggregieren und schnell skalieren. Ein solides Fundament.', bewertung: 'gut', punkte: { marge: 1, port: 2, resilienz: 2 } },
        { text: 'Wenige große Industrielasten mit viel Leistung.', wirkung: 'Große Brocken bringen schnell Volumen, aber du bist von einzelnen Kunden abhängig — fällt einer aus, wackelt das ganze Portfolio.', bewertung: 'mittel', punkte: { marge: 2, port: 0, resilienz: -1 } },
        { text: 'Alles gleichzeitig — E-Autos, Wärmepumpen, Speicher und Industrie.', wirkung: 'Die Vielfalt klingt gut, aber jede Anlagenart braucht eigene Technik und Prozesse. Die Komplexität erschlägt dich zum Start.', bewertung: 'schlecht', punkte: { marge: 0, port: 1, resilienz: -2 } }
      ] },
      { id: 'f2', titel: 'Präqualifikation', situation: 'Ohne Präqualifikation kommst du nicht an den Regelenergiemarkt.', frage: 'Wie verschaffst du dir Marktzugang?', optionen: [
        { text: 'Sauber präqualifizieren, auch wenn es Monate dauert.', wirkung: 'Der aufwändige Weg zahlt sich aus: Danach steht dir der lukrative Regelenergiemarkt dauerhaft und unangreifbar offen.', bewertung: 'gut', punkte: { marge: 0, port: 1, resilienz: 3 } },
        { text: 'Über einen etablierten Partner einsteigen und die Marge teilen.', wirkung: 'Schneller am Markt, aber du gibst einen Teil der Erlöse ab und machst dich abhängig. Ein pragmatischer Startkompromiss.', bewertung: 'mittel', punkte: { marge: -1, port: 2, resilienz: 1 } },
        { text: 'Die Anforderungen kreativ auslegen, um schneller zu starten.', wirkung: 'Ein gefährliches Spiel: Erfüllst du die Präqualifikation nicht wirklich, drohen Marktausschluss und Pönalen — dein Ruf ist schnell ruiniert.', bewertung: 'schlecht', punkte: { marge: 1, port: 1, resilienz: -3 } }
      ] },
      { id: 'f3', titel: 'Markt-Routing', situation: 'Deine gebündelte Flexibilität kann verschiedene Märkte bedienen.', frage: 'Wie verteilst du sie?', optionen: [
        { text: 'Dynamisches Routing zwischen FCR, aFRR und Intraday je nach Grenzerlös.', wirkung: 'Du holst aus jeder Stunde das Optimum — genau diese Software-Intelligenz ist der Kern deines Geschäftsmodells.', bewertung: 'gut', punkte: { marge: 3, port: 1, resilienz: 0 } },
        { text: 'Ein fester Split nach Erfahrungswerten.', wirkung: 'Einfach und robust, aber du verschenkst die Erlöse, die eine dynamische Optimierung mitnehmen würde.', bewertung: 'mittel', punkte: { marge: 1, port: 0, resilienz: 1 } },
        { text: 'Alles in den aktuell lukrativsten Markt, voll fokussiert.', wirkung: 'Solange dieser eine Markt läuft, top — aber brechen dort die Preise ein, steht dein ganzer Erlös auf dem Spiel.', bewertung: 'schlecht', punkte: { marge: 2, port: 0, resilienz: -2 } }
      ] },
      { id: 'f4', titel: 'Kundenvertrag', situation: 'Ohne die Anlagenbesitzer gibt es kein Portfolio.', frage: 'Wie beteiligst du die Anlagenbesitzer?', optionen: [
        { text: 'Faire Erlösbeteiligung plus Garantie-Bonus — das bindet Kunden langfristig.', wirkung: 'Zufriedene Anlagenbesitzer bleiben und empfehlen dich weiter. Dein Portfolio wächst stabil und günstig — Loyalität ist deine beste Verteidigung.', bewertung: 'gut', punkte: { marge: -1, port: 3, resilienz: 2 } },
        { text: 'Eine feste, kleine Pauschale zahlen, den Rest behältst du.', wirkung: 'Deine Marge je Anlage ist hoch — aber die Kunden merken, wenn andere mehr bieten, und wandern ab.', bewertung: 'mittel', punkte: { marge: 2, port: -1, resilienz: 0 } },
        { text: 'Maximale Marge für dich, minimaler Anteil für die Kunden.', wirkung: 'Kurzfristig lukrativ, aber die Abwanderung frisst dein Portfolio schneller auf, als du neue Anlagen gewinnst.', bewertung: 'schlecht', punkte: { marge: 3, port: -2, resilienz: -2 } }
      ] },
      { id: 'f5', titel: 'Steuerung', situation: 'Tausende Geräte in Echtzeit zu steuern ist anspruchsvoll.', frage: 'Wie baust du die technische Steuerung?', optionen: [
        { text: 'Eine robuste Plattform mit Ausfallsicherung und Echtzeit-Monitoring.', wirkung: 'Verlässlichkeit ist bei Regelleistung Pflicht: Ein verpasster Abruf kostet Pönalen und Vertrauen. Diese Investition trägt dein ganzes Geschäft.', bewertung: 'gut', punkte: { marge: 0, port: 2, resilienz: 3 } },
        { text: 'Eine Standardlösung nehmen und gelegentliche Aussetzer in Kauf nehmen.', wirkung: 'Günstiger, aber jeder Ausfall im falschen Moment kostet dich Geld und Reputation am Markt.', bewertung: 'mittel', punkte: { marge: 1, port: 0, resilienz: -1 } },
        { text: 'Eine Billig-Steuerung — Hauptsache, es läuft meistens.', wirkung: 'Bei Systemdienstleistungen ist meistens nicht genug. Häufen sich die Fehlabrufe, verlierst du Präqualifikation und Kunden.', bewertung: 'schlecht', punkte: { marge: 1, port: -1, resilienz: -3 } }
      ] },
      { id: 'f6', titel: 'Konsolidierung', situation: 'Große Energiekonzerne drängen mit eigenen virtuellen Kraftwerken in den Markt.', frage: 'Wie behauptest du dich?', optionen: [
        { text: 'Auf eine Nische mit überlegenem Kundenerlebnis spezialisieren.', wirkung: 'Wo die Großen mit Masse fahren, punktest du mit Nähe und Service. Eine verteidigbare Position statt eines ruinösen Preiskampfs.', bewertung: 'gut', punkte: { marge: 1, port: 2, resilienz: 2 } },
        { text: 'Die Preise senken, um Marktanteil zu halten.', wirkung: 'Du hältst Kunden, aber ein Preiskampf gegen finanzstarke Konzerne zehrt an deiner Marge — den kannst du nicht ewig durchhalten.', bewertung: 'mittel', punkte: { marge: -2, port: 1, resilienz: -1 } },
        { text: 'Aggressiv Kunden mit Verlust-Boni abwerben.', wirkung: 'Du kaufst dir kurzfristig Volumen, das dich Geld kostet und beim ersten Gegenwind wieder abspringt. Ein teures Strohfeuer.', bewertung: 'schlecht', punkte: { marge: -2, port: 1, resilienz: -2 } }
      ] }
    ],
    debrief: { stufen: [
      { minPct: 0.78, titel: '🚀 Das virtuelle Kraftwerk', text: 'Du hast aus tausenden kleinen Anlagen ein profitables, verlässliches und loyales Portfolio geformt. Sauberer Marktzugang, kluge Optimierung und faire Verträge machen dich sogar gegen die Konzerne wettbewerbsfähig.' },
      { minPct: 0.55, titel: '👍 Solider Aggregator', text: 'Dein virtuelles Kraftwerk trägt sich und wächst. An einzelnen Stellen bist du Kompromisse eingegangen, aber die Grundpfeiler — Zugang, Technik, Kundenbindung — stehen.' },
      { minPct: 0.35, titel: '😬 Zwischen den Riesen', text: 'Zwischen dünner Marge, wackliger Technik und Kundenabwanderung wird die Luft dünn. Gegen die großen Wettbewerber brauchst du eine klarere Stärke — schau, welche Dimension am schwächsten ist.' },
      { minPct: 0, titel: '💀 Vom Markt verdrängt', text: 'Fehlabrufe, abgewanderte Kunden und ein ruinöser Preiskampf haben dein Portfolio zermürbt. Ohne verlässliche Technik und loyale Kunden hat ein Aggregator keine Chance — versuch es nochmal.' }
    ] }
  },

  {
    id: 'SZ-SOLAR-SERVICE',
    title: 'Solar zum Nulltarif',
    kurz: 'Du baust ein Solar-as-a-Service-Startup: Hausbesitzer bekommen die PV-Anlage ohne Anfangskosten, du finanzierst und verdienst über die Laufzeit — wenn dein Kapitalmodell die Zinswende übersteht.',
    moduleId: 'M6-PROSUMER',
    rolle: 'Du gründest ein Solar-Startup nach dem Miet-/Pacht-Modell (wie Enpal oder 1KOMMA5°): Der Kunde zahlt nichts im Voraus, du stellst Anlage, Speicher und Wartung und kassierst eine monatliche Rate. Das Modell wächst rasant — aber es steht und fällt mit billigem Kapital und effizienter Installation.',
    dimensionen: [
      { key: 'wirt', label: 'Wirtschaftlichkeit', icon: '💰' },
      { key: 'wach', label: 'Wachstum', icon: '📈' },
      { key: 'resilienz', label: 'Bilanz-Resilienz', icon: '🛡️' }
    ],
    schritte: [
      { id: 's1', titel: 'Modell', situation: 'Das Geschäftsmodell entscheidet über Erlösprofil und Risiko.', frage: 'Kauf oder Miete?', optionen: [
        { text: 'Reines Mietmodell — wiederkehrende Erlöse, aber du trägst Kapital und Risiko.', wirkung: 'Planbare monatliche Einnahmen über viele Jahre — der Traum jedes Investors. Der Preis: Du finanzierst die Anlagen vor und bindest viel Kapital.', bewertung: 'gut', punkte: { wirt: 0, wach: 3, resilienz: 0 } },
        { text: 'Verkauf mit Finanzierung — schnelleres Geld, weniger Kapitalbindung.', wirkung: 'Du bekommst früh Cash und entlastest deine Bilanz, verzichtest aber auf die attraktiven wiederkehrenden Erlöse.', bewertung: 'mittel', punkte: { wirt: 2, wach: 0, resilienz: 1 } },
        { text: 'Miete anbieten, aber auf jede Bonitätsprüfung der Kunden verzichten.', wirkung: 'Das Wachstum schießt hoch — bis die Zahlungsausfälle kommen. Ohne Bonitätsprüfung importierst du dir ein tickendes Kreditrisiko.', bewertung: 'schlecht', punkte: { wirt: 1, wach: 2, resilienz: -3 } }
      ] },
      { id: 's2', titel: 'Finanzierung', situation: 'Zehntausende Anlagen wollen refinanziert werden.', frage: 'Wie hältst du deine Bilanz tragfähig?', optionen: [
        { text: 'Anlagen verbriefen (ABS) und an Investoren weiterreichen — die Bilanz bleibt schlank.', wirkung: 'Du verwandelst gebundenes Kapital in frisches Wachstum und verteilst das Risiko. Genau dieser Kapitalmarkt-Zugang macht das Modell skalierbar.', bewertung: 'gut', punkte: { wirt: 1, wach: 2, resilienz: 2 } },
        { text: 'Klassische Bankkredite je Anlagenbündel.', wirkung: 'Solide und verständlich, aber begrenzt: Die Bank finanziert nur so viel, wie deine Bilanz trägt — das bremst das Tempo.', bewertung: 'mittel', punkte: { wirt: 0, wach: 0, resilienz: 1 } },
        { text: 'Alles über kurzfristige Kredite finanzieren — billig, solange die Zinsen niedrig sind.', wirkung: 'Kurzfristgeld ist günstig und schnell — bis die Zinsen drehen. Dann musst du teuer umschulden, während deine Erträge fest sind. Ein gefährliches Fristen-Mismatch.', bewertung: 'schlecht', punkte: { wirt: 2, wach: 1, resilienz: -3 } }
      ] },
      { id: 's3', titel: 'Akquise', situation: 'Ohne Kunden kein Wachstum — aber Akquise kostet.', frage: 'Wie gewinnst du Kunden?', optionen: [
        { text: 'Eigener Vertrieb und Weiterempfehlungen mit hoher Beratungsqualität.', wirkung: 'Gute Beratung schafft zufriedene Kunden, die weiterempfehlen — deine Akquisekosten sinken pro Kohorte, die Marke wächst gesund.', bewertung: 'gut', punkte: { wirt: 0, wach: 2, resilienz: 1 } },
        { text: 'Aggressives Performance-Marketing mit hohen Akquisekosten.', wirkung: 'Das Wachstum explodiert, aber jeder Kunde ist teuer erkauft. Solange die Finanzierung sitzt, geht die Rechnung auf — sonst nicht.', bewertung: 'mittel', punkte: { wirt: -1, wach: 3, resilienz: -1 } },
        { text: 'Drückerkolonnen mit vollmundigen Versprechen losschicken.', wirkung: 'Schnelle Abschlüsse, aber enttäuschte Kunden und schlechte Presse. Ein ramponierter Ruf kostet dich am Ende mehr Kunden, als die Kolonnen bringen.', bewertung: 'schlecht', punkte: { wirt: 1, wach: 2, resilienz: -3 } }
      ] },
      { id: 's4', titel: 'Installation', situation: 'Die Montage ist der eigentliche Engpass des Wachstums.', frage: 'Wie organisierst du die Installation?', optionen: [
        { text: 'Eigene, geschulte Montageteams aufbauen — teurer, aber Qualität und Tempo.', wirkung: 'Du kontrollierst Qualität und Termine selbst. Das kostet, sichert dir aber zufriedene Kunden und ein skalierbares Rückgrat.', bewertung: 'gut', punkte: { wirt: 0, wach: 2, resilienz: 2 } },
        { text: 'Subunternehmer beauftragen, auch wenn die Qualität schwankt.', wirkung: 'Flexibel und ohne Fixkosten, aber die schwankende Qualität schlägt sich in Nacharbeit und Bewertungen nieder.', bewertung: 'mittel', punkte: { wirt: 1, wach: 1, resilienz: -1 } },
        { text: 'Die billigsten Subunternehmer nehmen — Hauptsache Menge.', wirkung: 'Pfusch am Dach ist teuer: Reklamationen, Sicherheitsmängel und ein beschädigter Ruf fressen deine Marge und dein Wachstum auf.', bewertung: 'schlecht', punkte: { wirt: 1, wach: 1, resilienz: -3 } }
      ] },
      { id: 's5', titel: 'Förderung', situation: 'Ein Teil deiner Kalkulation hängt an der EEG-Einspeisevergütung.', frage: 'Wie stark machst du dich davon abhängig?', optionen: [
        { text: 'Das Modell auf Eigenverbrauch plus Speicher trimmen — unabhängig von der Förderung.', wirkung: 'Wer den Wert aus dem Eigenverbrauch zieht, ist gegen Förderkürzungen immun. Das macht dein Geschäft robust und zukunftssicher.', bewertung: 'gut', punkte: { wirt: 1, wach: 1, resilienz: 3 } },
        { text: 'Die Förderung einkalkulieren, aber einen Puffer einplanen.', wirkung: 'Vernünftig abgesichert: Sinkt die Vergütung, tut es weh, aber es reißt dich nicht um.', bewertung: 'mittel', punkte: { wirt: 1, wach: 0, resilienz: 0 } },
        { text: 'Voll auf die aktuelle Einspeisevergütung setzen.', wirkung: 'Deine ganze Rechnung hängt an einem politischen Federstrich. Wird die Vergütung gekürzt, kippt die Wirtschaftlichkeit über Nacht.', bewertung: 'schlecht', punkte: { wirt: 2, wach: 1, resilienz: -3 } }
      ] },
      { id: 's6', titel: 'Zinswende', situation: 'Die Leitzinsen steigen sprunghaft — dein Kapitalmodell wird auf die Probe gestellt.', frage: 'Wie reagierst du?', optionen: [
        { text: 'Das Wachstum drosseln, den Bestand profitabel machen und die Bilanz stärken.', wirkung: 'Unpopulär bei wachstumshungrigen Investoren, aber überlebenswichtig. Wer in der Zinswende auf Substanz umschaltet, kommt durch.', bewertung: 'gut', punkte: { wirt: 2, wach: -1, resilienz: 3 } },
        { text: 'Die Preise erhöhen und hoffen, dass die Nachfrage bleibt.', wirkung: 'Rettet kurzfristig die Marge, dämpft aber das Wachstum. Ob die Kunden die höheren Raten akzeptieren, ist ein Wagnis.', bewertung: 'mittel', punkte: { wirt: 1, wach: -1, resilienz: 0 } },
        { text: 'Auf Teufel komm raus weiterwachsen, um die Bewertung zu halten.', wirkung: 'Wachstum um jeden Preis in der Zinswende ist der klassische Weg in die Liquiditätsklemme — genau daran sind überhitzte Solar-Startups gescheitert.', bewertung: 'schlecht', punkte: { wirt: -2, wach: 2, resilienz: -3 } }
      ] }
    ],
    debrief: { stufen: [
      { minPct: 0.78, titel: '🚀 Das nächste Solar-Unicorn', text: 'Du hast ein rasant wachsendes Solar-Geschäft mit gesunder Bilanz gebaut: kluge Refinanzierung, Qualität in der Installation und Unabhängigkeit von der Förderung. Als die Zinswende kam, standest du auf festem Grund.' },
      { minPct: 0.55, titel: '👍 Gesundes Wachstum', text: 'Dein Startup wächst und trägt sich. An einzelnen Stellen bist du Risiken eingegangen, aber die Bilanz hält und das Modell funktioniert.' },
      { minPct: 0.35, titel: '😬 Kapital wird knapp', text: 'Schnelles Wachstum auf wackliger Finanzierung: Solange billiges Geld fließt, geht es gut. Dreht der Wind, wird es eng. Achte auf deine schwächste Dimension.' },
      { minPct: 0, titel: '💀 Insolvenz in der Zinswende', text: 'Kurzfristfinanzierung, Förderabhängigkeit und ungebremstes Wachstum haben sich in der Zinswende zur tödlichen Mischung addiert. Genau dieses Muster hat überhitzte Solar-Startups zerlegt — versuch eine robustere Aufstellung.' }
    ] }
  },

  {
    id: 'SZ-H2-HOCHLAUF',
    title: 'Das Wasserstoff-Projekt',
    kurz: 'Du entwickelst ein Projekt für grünen Wasserstoff — zwischen hohen Stromkosten, unsicheren Abnehmern und milliardenschwerer Förderung entscheidet sich, ob daraus ein Geschäft wird.',
    moduleId: 'M7-WAERME',
    rolle: 'Du leitest ein Projekt für einen 100-MW-Elektrolyseur. Grüner Wasserstoff gilt als Hoffnungsträger der Industrie-Dekarbonisierung — aber er ist teuer, der Markt jung und die Abnehmer zögern. Zwischen Standort, Abnahmeverträgen und Förderung entscheidest du, ob dein Projekt jemals schwarze Zahlen schreibt.',
    dimensionen: [
      { key: 'wirt', label: 'Wirtschaftlichkeit', icon: '💰' },
      { key: 'abn', label: 'Abnahmesicherheit', icon: '🤝' },
      { key: 'resilienz', label: 'Resilienz', icon: '🛡️' }
    ],
    schritte: [
      { id: 'w1', titel: 'Stromquelle', situation: 'Der Strom macht rund 70 % deiner Wasserstoffkosten aus.', frage: 'Woher kommt der Strom für die Elektrolyse?', optionen: [
        { text: 'Direkt von einem Windpark per langfristigem PPA — grün und preisstabil.', wirkung: 'Ein fester grüner Strompreis über viele Jahre ist die beste Basis für kalkulierbaren Wasserstoff. Genau darauf schauen Förderung und Abnehmer.', bewertung: 'gut', punkte: { wirt: 1, abn: 1, resilienz: 3 } },
        { text: 'Strom aus dem Netz beziehen und mit Herkunftsnachweisen grün machen.', wirkung: 'Bequem und flexibel, aber die Netzkosten und die Debatte um echte Grünheit bleiben. Ein gangbarer, aber kein herausragender Weg.', bewertung: 'mittel', punkte: { wirt: 0, abn: 0, resilienz: 0 } },
        { text: 'Strom ungesichert zu Spotpreisen aus dem Netz beziehen.', wirkung: 'Bei deinem Kostenanteil ist das ein Blindflug: Ein Preisanstieg macht deinen Wasserstoff über Nacht unverkäuflich teuer.', bewertung: 'schlecht', punkte: { wirt: 1, abn: 0, resilienz: -3 } }
      ] },
      { id: 'w2', titel: 'Abnehmer', situation: 'Ohne gesicherte Abnahme finanziert dir keine Bank das Projekt.', frage: 'Wer kauft deinen Wasserstoff?', optionen: [
        { text: 'Ein langfristiger Offtake-Vertrag mit einem Industriekunden, geschlossen vor Projektstart.', wirkung: 'Gesicherte Abnahme über Jahre ist das Fundament der Finanzierung. Damit steht dein Projekt auf festem Boden.', bewertung: 'gut', punkte: { wirt: 0, abn: 3, resilienz: 2 } },
        { text: 'Mehrere kleinere Absichtserklärungen (LOIs) sammeln.', wirkung: 'Zeigt Interesse, aber LOIs sind unverbindlich. Springt ein Interessent ab, wackelt deine Auslastung.', bewertung: 'mittel', punkte: { wirt: 1, abn: 1, resilienz: -1 } },
        { text: 'Erst bauen — die Abnehmer finden sich schon.', wirkung: 'Ohne gesicherte Abnahme produzierst du womöglich ins Leere. Genau an fehlenden Offtakes scheitern viele H2-Projekte.', bewertung: 'schlecht', punkte: { wirt: 2, abn: -2, resilienz: -3 } }
      ] },
      { id: 'w3', titel: 'Förderung', situation: 'Grüner Wasserstoff ist ohne Förderung heute kaum wettbewerbsfähig.', frage: 'Wie nutzt du die Förderkulisse?', optionen: [
        { text: 'Große Programme (IPCEI, H2Global) solide beantragen und die Auflagen einhalten.', wirkung: 'Die Förderung schließt die Lücke zwischen Kosten und Marktpreis — ohne sie rechnet sich heute fast kein Projekt. Der Antragsaufwand lohnt sich.', bewertung: 'gut', punkte: { wirt: 3, abn: 1, resilienz: 1 } },
        { text: 'Nur die Standardförderung nutzen, keinen Aufwand mit Großprogrammen.', wirkung: 'Weniger Bürokratie, aber du lässt Millionen liegen, die dein Projekt tragfähiger machen würden.', bewertung: 'mittel', punkte: { wirt: 1, abn: 0, resilienz: 0 } },
        { text: 'Ohne Förderung starten, um schneller zu sein.', wirkung: 'Beim heutigen Kostenniveau ist grüner Wasserstoff ohne Förderung schlicht unrentabel. Ein mutiger, aber verlustträchtiger Alleingang.', bewertung: 'schlecht', punkte: { wirt: -2, abn: 0, resilienz: -2 } }
      ] },
      { id: 'w4', titel: 'Stromkosten-Hedge', situation: 'Schwankende Strompreise bedrohen deine Kalkulation.', frage: 'Wie sicherst du die Stromkosten ab?', optionen: [
        { text: 'Langfristig absichern, auch wenn es etwas Flexibilität kostet.', wirkung: 'Kalkulierbare Stromkosten bedeuten kalkulierbaren Wasserstoffpreis — genau das, was deine Abnehmer und Financiers sehen wollen.', bewertung: 'gut', punkte: { wirt: 1, abn: 1, resilienz: 3 } },
        { text: 'Teilweise absichern und teilweise flexibel fahren.', wirkung: 'Ein Mittelweg: etwas Planungssicherheit, etwas Chance auf günstige Stunden. Vertretbar, wenn du das Restrisiko im Blick behältst.', bewertung: 'mittel', punkte: { wirt: 1, abn: 0, resilienz: 0 } },
        { text: 'Den Elektrolyseur nur laufen lassen, wenn der Strom gerade billig ist.', wirkung: 'Das senkt die Stromkosten je Kilo, aber die niedrigen Volllaststunden untergraben deine Lieferzusagen — Abnehmer wollen verlässliche Mengen.', bewertung: 'schlecht', punkte: { wirt: 0, abn: -2, resilienz: -2 } }
      ] },
      { id: 'w5', titel: 'Infrastruktur', situation: 'Der Wasserstoff muss auch zum Kunden gelangen.', frage: 'Wie löst du die Logistik?', optionen: [
        { text: 'Am geplanten H2-Kernnetz ansiedeln und die künftige Anbindung sichern.', wirkung: 'Wer am entstehenden Kernnetz sitzt, ist für den Markthochlauf bestens positioniert. Ein strategisch kluger Standort.', bewertung: 'gut', punkte: { wirt: 0, abn: 2, resilienz: 2 } },
        { text: 'Den Wasserstoff per Trailer und LKW ausliefern — teuer, aber flexibel.', wirkung: 'Du bist sofort lieferfähig, aber die Transportkosten drücken die Marge und begrenzen die Reichweite.', bewertung: 'mittel', punkte: { wirt: -1, abn: 1, resilienz: 0 } },
        { text: 'Auf eine private Pipeline setzen, die noch gar nicht genehmigt ist.', wirkung: 'Du machst dich von einem Bauprojekt abhängig, das sich verzögern oder ganz scheitern kann — ein Klumpenrisiko für die ganze Anlage.', bewertung: 'schlecht', punkte: { wirt: 1, abn: -1, resilienz: -3 } }
      ] },
      { id: 'w6', titel: 'Markthochlauf', situation: 'Der erwartete Nachfrageschub bleibt aus, die Kunden zögern.', frage: 'Wie reagierst du auf den verzögerten Hochlauf?', optionen: [
        { text: 'Das Projekt modular skalieren: klein starten und mit der Nachfrage wachsen.', wirkung: 'Du begrenzt dein Risiko und wächst nur, wenn der Markt wirklich abnimmt. Genau diese Flexibilität ist in einem jungen Markt Gold wert.', bewertung: 'gut', punkte: { wirt: 1, abn: 2, resilienz: 3 } },
        { text: 'Die Timeline strecken und auf bessere Rahmenbedingungen warten.', wirkung: 'Vorsichtig und kapitalschonend, aber jedes Jahr Verzögerung kostet Geld und Vorsprung. Ein defensiver Kompromiss.', bewertung: 'mittel', punkte: { wirt: -1, abn: 0, resilienz: 1 } },
        { text: 'Trotzdem voll ausbauen — der Markt kommt bestimmt bald.', wirkung: 'Ein teurer Elektrolyseur, der auf Abnehmer wartet, verbrennt Kapital. Zu früh zu groß ist der klassische Fehler junger Märkte.', bewertung: 'schlecht', punkte: { wirt: -2, abn: -1, resilienz: -3 } }
      ] }
    ],
    debrief: { stufen: [
      { minPct: 0.78, titel: '🚀 Wegbereiter der H2-Wirtschaft', text: 'Grüner Strom per PPA, gesicherte Abnahme, solide Förderung und modulares Wachstum: Du hast aus einem riskanten Zukunftsmarkt ein tragfähiges Projekt gemacht. Genau so gelingt der Hochlauf.' },
      { minPct: 0.55, titel: '👍 Tragfähiges Projekt', text: 'Dein Elektrolyseur läuft und findet Abnehmer. An einzelnen Stellen bist du Risiken eingegangen, aber das Projekt steht — ein respektabler Start in einem schwierigen Markt.' },
      { minPct: 0.35, titel: '😬 Auf Förderung angewiesen', text: 'Ohne die Förderung und mit wackliger Abnahme steht dein Projekt auf dünnem Eis. Verzögert sich der Markthochlauf, wird es eng. Achte auf deine schwächste Dimension.' },
      { minPct: 0, titel: '💀 Investitionsruine', text: 'Ungesicherte Stromkosten, fehlende Abnehmer und ein zu großer, zu früher Ausbau: Dein Elektrolyseur wartet auf einen Markt, der noch nicht da ist. So werden Hoffnungsträger zu teuren Ruinen — versuch eine vorsichtigere Strategie.' }
    ] }
  },

  {
    id: 'SZ-DEV-TO-SELL',
    title: 'Develop to Sell',
    kurz: 'Du entwickelst Wind- und Solarparks bis zur Baureife und verkaufst sie an Investoren — ein Geschäft aus Flächen, Genehmigungen und dem richtigen Exit-Timing.',
    moduleId: 'M8-OEKOSYSTEM',
    rolle: 'Du führst einen Projektentwickler für Erneuerbare. Dein Geschäft: Flächen sichern, durch das Genehmigungs-Dickicht steuern, in Auktionen bieten und die baureifen Projekte („Ready to Build") mit Marge an Investoren verkaufen. Kapital ist knapp, und finanzstarke Öl- und Gaskonzerne drängen in denselben Markt.',
    dimensionen: [
      { key: 'rendite', label: 'Rendite', icon: '💰' },
      { key: 'pipe', label: 'Pipeline-Wachstum', icon: '📈' },
      { key: 'risiko', label: 'Risiko-Kontrolle', icon: '🛡️' }
    ],
    schritte: [
      { id: 'd1', titel: 'Flächen', situation: 'Ohne Flächen keine Projekte — und die guten sind umkämpft.', frage: 'Wie sicherst du dir Flächen?', optionen: [
        { text: 'Frühzeitig faire, langfristige Pachtverträge mit den Grundeigentümern schließen.', wirkung: 'Verlässliche Partner und eine saubere Rechtsbasis sind das Fundament jeder Pipeline. Wer früh und fair sichert, hat später die Auswahl.', bewertung: 'gut', punkte: { rendite: 0, pipe: 3, risiko: 2 } },
        { text: 'Nur die absoluten Filetstücke sichern, dafür teuer bezahlen.', wirkung: 'Beste Standorte, aber schmale Marge und eine dünne Pipeline. Qualität vor Quantität — ein Ansatz mit Grenzen.', bewertung: 'mittel', punkte: { rendite: -1, pipe: 1, risiko: 1 } },
        { text: 'Möglichst viele Optionen billig einsammeln, egal wie geeignet.', wirkung: 'Deine Pipeline sieht auf dem Papier groß aus, aber viele Flächen sind unbrauchbar. Du bindest Kapital in Projekten, die nie gebaut werden.', bewertung: 'schlecht', punkte: { rendite: 1, pipe: 2, risiko: -3 } }
      ] },
      { id: 'd2', titel: 'Genehmigung', situation: 'Der Genehmigungsprozess ist das größte Nadelöhr der Branche.', frage: 'Wie steuerst du durch das Verfahren?', optionen: [
        { text: 'In gute Gutachten und frühe Bürgerbeteiligung investieren.', wirkung: 'Sorgfalt und Akzeptanz vor Ort senken das Risiko von Klagen und Verzögerungen enorm. Genehmigte Projekte sind bares Geld wert.', bewertung: 'gut', punkte: { rendite: -1, pipe: 2, risiko: 3 } },
        { text: 'Das Standardverfahren durchlaufen und auf zügige Bearbeitung hoffen.', wirkung: 'Nichts falsch gemacht, aber auch keinen Vorsprung. Du bist der Geschwindigkeit der Behörde ausgeliefert.', bewertung: 'mittel', punkte: { rendite: 0, pipe: 0, risiko: 0 } },
        { text: 'Auf Kante planen und Einwände ignorieren.', wirkung: 'Übergangene Anwohner und schludrige Gutachten enden vor Gericht. Eine erfolgreiche Klage kann Jahre Entwicklungszeit vernichten.', bewertung: 'schlecht', punkte: { rendite: 1, pipe: 1, risiko: -3 } }
      ] },
      { id: 'd3', titel: 'Auktion', situation: 'Der Zuschlag entscheidet sich in der EEG-Auktion.', frage: 'Wie bietest du?', optionen: [
        { text: 'Diszipliniert kalkulieren und nur auskömmliche Gebote abgeben.', wirkung: 'Vielleicht gewinnst du nicht jede Runde, aber jedes bezuschlagte Projekt trägt eine echte Marge. Nachhaltiger als Zuschläge um jeden Preis.', bewertung: 'gut', punkte: { rendite: 2, pipe: 1, risiko: 2 } },
        { text: 'Aggressiv niedrig bieten, um den Zuschlag sicher zu bekommen.', wirkung: 'Du gewinnst Volumen, aber die dünne Marge lässt kaum Puffer für Kostensteigerungen. Ein riskanter Wachstumsweg.', bewertung: 'mittel', punkte: { rendite: -1, pipe: 2, risiko: -1 } },
        { text: 'Um jeden Preis gewinnen, die Kalkulation ist zweitrangig.', wirkung: 'Zuschläge, die sich nicht rechnen, sind eine Falle: Entweder baust du mit Verlust oder du gibst den Zuschlag zurück und verlierst die Sicherheit.', bewertung: 'schlecht', punkte: { rendite: -2, pipe: 2, risiko: -3 } }
      ] },
      { id: 'd4', titel: 'Exit-Timing', situation: 'Der Verkaufszeitpunkt bestimmt deine Marge.', frage: 'Wann verkaufst du das Projekt?', optionen: [
        { text: 'Bei Baureife (Ready to Build) verkaufen — der beste Risiko-Ertrags-Punkt.', wirkung: 'Alle Risiken sind gehoben, das Projekt ist am wertvollsten und du bindest kein Baukapital. Genau das ist der Kern von Develop-to-Sell.', bewertung: 'gut', punkte: { rendite: 3, pipe: 1, risiko: 2 } },
        { text: 'Früher verkaufen — weniger Marge, aber auch weniger gebundenes Kapital.', wirkung: 'Du realisierst schneller Cash für die nächste Entwicklung, überlässt dem Käufer aber einen Teil der Wertsteigerung.', bewertung: 'mittel', punkte: { rendite: 1, pipe: 1, risiko: 1 } },
        { text: 'Selbst bauen und langfristig betreiben.', wirkung: 'Das bindet dein knappes Entwicklungskapital in einem einzigen Projekt und bremst deine Pipeline aus — ein anderes Geschäftsmodell, als du eigentlich betreibst.', bewertung: 'schlecht', punkte: { rendite: 0, pipe: -3, risiko: -2 } }
      ] },
      { id: 'd5', titel: 'Finanzierung', situation: 'Entwicklungskapital ist teuer und knapp.', frage: 'Wie finanzierst du deine Pipeline?', optionen: [
        { text: 'Mit einem Finanzpartner eine Entwicklungsplattform aufsetzen.', wirkung: 'Geduldiges Kapital an deiner Seite lässt dich mehrere Projekte parallel entwickeln — der Hebel, um wirklich zu wachsen.', bewertung: 'gut', punkte: { rendite: 1, pipe: 2, risiko: 2 } },
        { text: 'Jedes Projekt einzeln finanzieren.', wirkung: 'Übersichtlich und risikoarm, aber langsam: Du kannst immer nur so viel entwickeln, wie du gerade finanziert bekommst.', bewertung: 'mittel', punkte: { rendite: 0, pipe: 0, risiko: 0 } },
        { text: 'Alles über teures Mezzanine-Kapital hebeln.', wirkung: 'Du wächst schnell, aber die hohen Kapitalkosten fressen die Marge, und bei Verzögerungen wird die Finanzierungslast erdrückend.', bewertung: 'schlecht', punkte: { rendite: -1, pipe: 2, risiko: -3 } }
      ] },
      { id: 'd6', titel: 'Marktschock', situation: 'Zinsen und Turbinenpreise steigen, die Investoren werden wählerisch.', frage: 'Wie reagierst du?', optionen: [
        { text: 'Auf Qualität statt Menge setzen und nur die besten Projekte weiterentwickeln.', wirkung: 'In einem schwierigen Markt zählt Substanz. Erstklassige, genehmigte Projekte finden auch dann Käufer, wenn die Investoren zögern.', bewertung: 'gut', punkte: { rendite: 2, pipe: -1, risiko: 3 } },
        { text: 'Die Verkaufspreise anpassen und die Pipeline straffen.', wirkung: 'Realistisch auf den Markt reagiert: etwas weniger Marge, dafür fließen die Projekte weiter ab. Solides Krisenmanagement.', bewertung: 'mittel', punkte: { rendite: 0, pipe: 0, risiko: 1 } },
        { text: 'Die Pipeline mit Gewalt aufblähen, um Größe zu demonstrieren.', wirkung: 'Mehr unverkäufliche Projekte in einem schwachen Markt binden Kapital, das du dringend bräuchtest. Ein gefährlicher Bluff.', bewertung: 'schlecht', punkte: { rendite: -2, pipe: 2, risiko: -3 } }
      ] }
    ],
    debrief: { stufen: [
      { minPct: 0.78, titel: '🏆 Der Pipeline-Champion', text: 'Saubere Flächensicherung, genehmigungssichere Projekte, disziplinierte Gebote und der richtige Exit bei Baureife: Du hast eine wertvolle, risikoarme Pipeline aufgebaut, die selbst im Marktschock gefragt ist. Genau so funktioniert Develop-to-Sell.' },
      { minPct: 0.55, titel: '👍 Solider Entwickler', text: 'Deine Projekte finden Käufer und tragen Marge. An einzelnen Stellen bist du mehr Risiko gegangen als nötig — aber dein Geschäft steht auf gesundem Fundament.' },
      { minPct: 0.35, titel: '😬 Kapital wird eng', text: 'Zu viele mittelmäßige Flächen, zu aggressive Gebote oder teures Kapital haben dein Risiko hochgetrieben. Im Marktschock wird das gefährlich — schau, wo deine schwächste Dimension liegt.' },
      { minPct: 0, titel: '💀 Auf Projekten sitzengeblieben', text: 'Unverkäufliche Projekte, verlorene Klagen und gebundenes Kapital: Als der Markt drehte, saßst du auf einer teuren Pipeline ohne Käufer. Qualität und Risikokontrolle schlagen im Projektgeschäft blinde Menge — versuch es nochmal.' }
    ] }
  }
];

// Klassischer Script-Scope: global verfügbar wie LERN_MODULES (kein window-Mirror nötig).
if (typeof window !== 'undefined') window.SZENARIO_MISSIONS = SZENARIO_MISSIONS;
