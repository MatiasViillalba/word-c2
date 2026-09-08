/**
 * Passage bank 13 — society, power and the arguments that do not end.
 *
 * The closing bank, and the one that draws hardest on the whole system: long
 * -ATION and -ITY chains, the -IST / -ISM pair, the participial contrast, and
 * the negative prefixes stacked on top of suffixes already in place.
 */
WC2.content.registerPassages([

{
  id: 'w61',
  title: 'The Middle Ground Nobody Occupies',
  focus: 'Sufijos políticos y adjetivos de postura',
  brief: 'POLAR→POLARISATION · IDEOLOGY→IDEOLOGICAL · MODERATE→MODERATES · RESENT→RESENTMENT · RHETORIC→RHETORICAL · COMPROMISE→COMPROMISES · DEMAGOGUE→DEMAGOGUES · GOVERN→GOVERNANCE',
  text: `Survey after survey finds that the electorate's opinions have moved rather little, while its {1} has deepened sharply. What has changed is not what people believe but how they feel about those who believe otherwise.

The {2} distance between the two main parties in most democracies is smaller than it was in 1975. The affective distance is far greater, and it is the second that predicts behaviour.

{3} on both sides report being made to feel unwelcome by their own side, which is a fair description of what has happened to the centre. Much of the energy comes from {4} rather than from programme, and {5} escalation is cheap: it costs a politician nothing and it is rewarded immediately.

What suffers is the capacity to strike the ordinary {6} on which any parliament runs. {7} do not create this condition; they exploit one that already exists. The damage falls not on any particular policy but on {8} itself.`,
  gaps: [
    { n: 1, root: 'POLAR', a: 'POLARISATION', alt: ['POLARIZATION'], p: '-ISE + -ATION', tip: 'POLAR → POLARISE → POLARISATION = polarización.' },
    { n: 2, root: 'IDEOLOGY', a: 'IDEOLOGICAL', p: '-Y → -ICAL', tip: 'IDEOLOGY → IDEOLOGICAL. Toda la familia -OLOGY hace -OLOGICAL.' },
    { n: 3, root: 'MODERATE', a: 'MODERATES', af: 'inflection', p: 'Flexión: plural del sustantivo', tip: 'MODERATE como sustantivo = un moderado. Aquí sólo hace falta el plural.' },
    { n: 4, root: 'RESENT', a: 'RESENTMENT', p: '-MENT sobre verbo', tip: 'RESENT → RESENTMENT = resentimiento. El verbo significa «guardar rencor por».' },
    { n: 5, root: 'RHETORIC', a: 'RHETORICAL', p: '-IC → -ICAL', tip: 'RHETORIC → RHETORICAL. La raíz ya acaba en -IC, así que sólo se añade -AL.' },
    { n: 6, root: 'COMPROMISE', a: 'COMPROMISES', af: 'inflection', p: 'Flexión: plural del sustantivo', tip: 'COMPROMISE es sustantivo y verbo. Aquí el plural del sustantivo: concesiones mutuas.' },
    { n: 7, root: 'DEMAGOGUE', a: 'DEMAGOGUES', af: 'inflection', p: 'Flexión: plural del sustantivo', tip: 'Sólo el plural de la palabra dada. La ortografía británica conserva el -UE final.' },
    { n: 8, root: 'GOVERN', a: 'GOVERNANCE', p: '-ANCE sobre verbo', tip: 'GOVERN → GOVERNANCE = gobernanza, el modo de gobernar. Distinto de GOVERNMENT.' }
  ]
},

{
  id: 'w62',
  title: 'The Deference That Went',
  focus: 'Sufijos de jerarquía y adjetivos de actitud',
  brief: 'HIERARCHY→HIERARCHICAL · DEFER→DEFERENCE · AUTHORITY→AUTHORITATIVE · SUBMIT→SUBMISSIVENESS · GENERATION→GENERATIONAL · ASSERT→ASSERTIVENESS · ACCEPT→UNACCEPTABLE · CONSEQUENCE→CONSEQUENTIAL',
  text: `British institutions in 1955 were {1} to a degree that is now difficult to reconstruct. A patient did not question a consultant, a pupil did not question a master, and a junior officer did not question anything at all.

The {2} shown to professional judgement rested on an assumption that expertise and integrity travelled together. Where the judgement was genuinely {3}, the arrangement worked well and cheaply.

What ended it was a series of failures in which the deference itself turned out to be the mechanism of harm. Inquiry after inquiry found that somebody junior had known and had said nothing, and that their {4} had been read at the time as good manners.

The change was {5} rather than legislative: it arrived with people who had been taught differently. {6} is now trained explicitly in aviation and medicine, on the ground that a culture in which a subordinate cannot speak is {7} whatever its other merits. The shift has been slow, uneven and more {8} than almost any statute of the same period.`,
  gaps: [
    { n: 1, root: 'HIERARCHY', a: 'HIERARCHICAL', p: '-Y → -ICAL', tip: 'HIERARCHY → HIERARCHICAL. Ojo con la I antes de la E: HIER-.' },
    { n: 2, root: 'DEFER', a: 'DEFERENCE', p: '-ENCE sobre verbo', tip: 'DEFER TO somebody = mostrar deferencia. DEFERENCE no dobla la R, aunque DEFERRED sí.' },
    { n: 3, root: 'AUTHORITY', a: 'AUTHORITATIVE', p: '-Y → -ATIVE', tip: 'AUTHORITY → AUTHORITATIVE = con autoridad, fiable. No confundir con AUTHORITARIAN.' },
    { n: 4, root: 'SUBMIT', a: 'SUBMISSIVENESS', p: '-IVE + -NESS', tip: 'SUBMIT → SUBMISSION → SUBMISSIVE → SUBMISSIVENESS. La T pasa a doble S.' },
    { n: 5, root: 'GENERATION', a: 'GENERATIONAL', p: '-AL sobre sustantivo', tip: 'GENERATION → GENERATIONAL. Sobre un sustantivo que ya lleva -ATION.' },
    { n: 6, root: 'ASSERT', a: 'ASSERTIVENESS', p: '-IVE + -NESS', tip: 'ASSERT → ASSERTIVE → ASSERTIVENESS. -NESS necesita un adjetivo, así que -IVE va primero.' },
    { n: 7, root: 'ACCEPT', a: 'UNACCEPTABLE', p: 'UN- + -ABLE', tip: 'ACCEPT → ACCEPTABLE → UNACCEPTABLE. La raíz no cambia en ningún paso.' },
    { n: 8, root: 'CONSEQUENCE', a: 'CONSEQUENTIAL', p: '-CE → -TIAL', tip: 'CONSEQUENCE → CONSEQUENTIAL = de consecuencias, trascendente. La C pasa a T.' }
  ]
},

{
  id: 'w63',
  title: 'Watching the Watchers',
  focus: 'Sufijos de control y adjetivos de permiso',
  brief: 'OVERSEE→OVERSIGHT · SCRUTINY→SCRUTINISED · ACCOUNT→ACCOUNTABILITY · LIABLE→LIABILITY · INVESTIGATE→INVESTIGATION · PRACTICE→PRACTITIONERS · AUTHORITY→UNAUTHORISED · TRANSPARENT→TRANSPARENCY',
  text: `Any body with the power to compel needs somebody above it, and the design of that somebody is one of the hardest problems in public administration. {1} arrangements tend to be created after a scandal and to be shaped by the scandal rather than by the general case.

A regulator that is {2} only when something has gone wrong is not being held to account; it is being punished. Genuine {3} is continuous, dull and expensive, and it requires an inspector with a budget rather than a committee with a report.

Personal {4} for individual officers cuts the other way, and both effects are real: it deters carelessness and it also deters candour. An {5} that a professional fears will end their career produces silence.

Most schemes therefore protect the individual and expose the institution. {6} accept this readily. What no arrangement has solved is the case of {7} action taken in good faith, where {8} after the event is the only remedy anybody has proposed.`,
  gaps: [
    { n: 1, root: 'OVERSEE', a: 'OVERSIGHT', af: 'over-', p: 'OVER- + SIGHT', tip: 'OVERSIGHT tiene dos sentidos opuestos: supervisión y descuido. Acá es supervisión.' },
    { n: 2, root: 'SCRUTINY', a: 'SCRUTINISED', alt: ['SCRUTINIZED'], p: '-ISE + -ED', tip: 'SCRUTINY → SCRUTINISE → SCRUTINISED. La Y pasa a I.' },
    { n: 3, root: 'ACCOUNT', a: 'ACCOUNTABILITY', p: '-ABLE + -ITY', tip: 'ACCOUNT → ACCOUNTABLE → ACCOUNTABILITY. Sujeto de «is continuous».' },
    { n: 4, root: 'LIABLE', a: 'LIABILITY', p: '-ABLE → -ABILITY', tip: 'LIABLE → LIABILITY. -ABLE se transforma en -ABILITY, nunca *liableity.' },
    { n: 5, root: 'INVESTIGATE', a: 'INVESTIGATION', p: '-ATE → -ATION', tip: 'INVESTIGATE → INVESTIGATION. Compará con INVESTIGATIVE y INVESTIGATOR.' },
    { n: 6, root: 'PRACTICE', a: 'PRACTITIONERS', p: '-ITIONER (irregular)', tip: 'PRACTICE → PRACTITIONER, no *practicer. Formación irregular que hay que memorizar.' },
    { n: 7, root: 'AUTHORITY', a: 'UNAUTHORISED', alt: ['UNAUTHORIZED'], p: 'UN- + -ISE + -ED', tip: 'AUTHORITY → AUTHORISE → AUTHORISED → UNAUTHORISED. Cambridge acepta -ISED y -IZED.' },
    { n: 8, root: 'TRANSPARENT', a: 'TRANSPARENCY', p: '-ENT → -ENCY', tip: 'TRANSPARENT → TRANSPARENCY. -ENT da -ENCY sin excepción.' }
  ]
},

{
  id: 'w64',
  title: 'The Places That Tourism Eats',
  focus: 'Sufijos de viaje y adjetivos de experiencia',
  brief: 'DESTINE→DESTINATIONS · AUTHENTIC→AUTHENTICITY · IMMERSE→IMMERSIVE · ENCOUNTER→ENCOUNTERS · COMMODITY→COMMODIFIED · HURRY→HURRIED · RESIDE→RESIDENTS · SUSTAIN→UNSUSTAINABLE',
  text: `The most photographed {1} in Europe have a common problem, and it is not the number of visitors so much as their distribution: eleven weeks of the year, four streets, two hours of the day.

Visitors arrive in search of {2} and, by arriving, alter the thing they came for. A café that serves the neighbourhood becomes a café that serves people photographing the café.

The industry response has been to sell an {3} alternative — cookery classes, a night with a family, guided {4} with a fisherman — which works until it is scaled. At that point the experience is as thoroughly {5} as the coach tour it was sold against, and rather more expensive.

Nothing in this is the fault of individual travellers, most of whom are conscientious and {6}. The pressure is structural. {7} are priced out by short lets, the population that gave the place its character leaves, and what remains is a set that is {8} in the exact sense: it consumes the thing it depends on.`,
  gaps: [
    { n: 1, root: 'DESTINE', a: 'DESTINATIONS', p: '-INE → -INATION', tip: 'DESTINE → DESTINATION. El verbo casi sólo aparece en «destined for».' },
    { n: 2, root: 'AUTHENTIC', a: 'AUTHENTICITY', p: '-ITY sobre adjetivo', tip: 'AUTHENTIC → AUTHENTICITY. La C final suena /s/ ante la I.' },
    { n: 3, root: 'IMMERSE', a: 'IMMERSIVE', p: '-SE + -IVE', tip: 'IMMERSE → IMMERSION → IMMERSIVE. Doble M.' },
    { n: 4, root: 'ENCOUNTER', a: 'ENCOUNTERS', af: 'inflection', p: 'Flexión: plural del sustantivo', tip: 'ENCOUNTER ya es sustantivo: sólo hace falta el plural.' },
    { n: 5, root: 'COMMODITY', a: 'COMMODIFIED', p: '-IFY + -ED', tip: 'COMMODITY → COMMODIFY → COMMODIFIED. Los verbos en -IFY hacen -IFIED.' },
    { n: 6, root: 'HURRY', a: 'HURRIED', p: 'Y → I + -ED', tip: 'HURRY → HURRIED. La Y pasa a I tras consonante.' },
    { n: 7, root: 'RESIDE', a: 'RESIDENTS', p: '-ENT sobre verbo', tip: 'RESIDE → RESIDENT. Cae la E. El sustantivo abstracto es RESIDENCE.' },
    { n: 8, root: 'SUSTAIN', a: 'UNSUSTAINABLE', p: 'UN- + -ABLE', tip: 'SUSTAIN → SUSTAINABLE → UNSUSTAINABLE. Aquí en su sentido literal y no como consigna.' }
  ]
},

{
  id: 'w65',
  title: 'The Argument That Never Ends',
  focus: 'Sufijos filosóficos y adjetivos de método',
  brief: 'PHYSICAL→PHYSICALIST · REDUCE→REDUCTIVE · EXPERIENCE→EXPERIENTIAL · ELUDE→ELUSIVE · METAPHYSICS→METAPHYSICAL · EXPLAIN→EXPLANATORY · SUBJECT→SUBJECTIVITY · HUMBLE→HUMBLING',
  text: `Nobody disputes that the brain produces consciousness. The dispute is about whether saying so amounts to an explanation, and it has run without visible progress for four hundred years.

The {1} position holds that mental states simply are physical states, and that the appearance of a further mystery is an artefact of how we talk. Critics reply that this is not an account but a promise, and a {2} one at that.

The difficulty is that the {3} character of a mental state — what it is like to undergo it — is precisely what the third-person description leaves out, and it is remarkably {4} under examination. Every attempt to pin it down either loses it or smuggles it back in.

Whether the question is genuinely {5} or merely badly posed is itself contested. What has become clear is that the {6} gap will not be closed by more neuroscience, since more data about mechanism leaves {7} exactly where it was. That is an unsatisfying conclusion and a properly {8} one.`,
  gaps: [
    { n: 1, root: 'PHYSICAL', a: 'PHYSICALIST', p: '-IST sobre adjetivo', tip: 'PHYSICAL → PHYSICALIST. En filosofía: quien sostiene que todo es físico.' },
    { n: 2, root: 'REDUCE', a: 'REDUCTIVE', p: '-DUCE → -DUCTIVE', tip: 'REDUCE → REDUCTION → REDUCTIVE = reduccionista, simplificador.' },
    { n: 3, root: 'EXPERIENCE', a: 'EXPERIENTIAL', p: '-CE → -TIAL', tip: 'EXPERIENCE → EXPERIENTIAL = vivencial. La C se convierte en T.' },
    { n: 4, root: 'ELUDE', a: 'ELUSIVE', p: '-DE → -SIVE', tip: 'ELUDE → ELUSIVE = esquivo, difícil de captar. La D pasa a S.' },
    { n: 5, root: 'METAPHYSICS', a: 'METAPHYSICAL', p: '-ICS → -ICAL', tip: 'METAPHYSICS → METAPHYSICAL. La S del campo desaparece en el adjetivo.' },
    { n: 6, root: 'EXPLAIN', a: 'EXPLANATORY', p: '-ORY con pérdida de la I', tip: 'EXPLAIN → EXPLANATION → EXPLANATORY: se pierde la I del verbo. No es *explainatory.' },
    { n: 7, root: 'SUBJECT', a: 'SUBJECTIVITY', p: '-IVE + -ITY', tip: 'SUBJECT → SUBJECTIVE → SUBJECTIVITY. Compará con OBJECTIVITY.' },
    { n: 8, root: 'HUMBLE', a: 'HUMBLING', p: '-ING participial', tip: 'HUMBLE → HUMBLING = que hace sentir humildad. Cae la E. Compará con HUMILITY, el sustantivo.' }
  ]
}

]);
