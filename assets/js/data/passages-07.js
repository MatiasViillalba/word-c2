/**
 * Passage bank 07 — language, translation and literacy.
 *
 * The subject that lets the exam be reflexive: texts about word formation are
 * unusually good at forcing the candidate to notice the machinery they are
 * using — ORAL against ORALITY, LITERATE against LITERACY, IDIOM against
 * IDIOMATIC.
 */
WC2.content.registerPassages([

{
  id: 'w31',
  title: 'The Last Fluent Speakers',
  focus: 'Sufijos de persona y sustantivos de estado',
  brief: 'SPEAK→SPEAKERS · LINGUIST→LINGUISTIC · DOCUMENT→DOCUMENTATION · ORAL→ORALLY · REVIVE→REVITALISATION · CONFINE→CONFINED · LITERATE→LITERACY · PRESERVE→PRESERVATIONISTS',
  text: `A language does not die when its last speaker dies. It dies a generation earlier, when the last child stops learning it, and by the time the remaining fluent {1} are counted the outcome is already fixed.

Roughly half the world's {2} diversity is expected to disappear this century. {3} — recording, transcribing, building a grammar — preserves a record and does not preserve a language, since a language transmitted {4} in a family is a living thing and an archive is not.

{5} programmes that have worked share one feature: they created a domain in which the language was necessary rather than merely permitted. A school, a radio station, a workplace. Where the language remains {6} to the kitchen, nothing holds.

{7} in the minority language matters more than campaigners once assumed, because a language with no written register is easily dismissed as a dialect. The {8} who insisted on orthographies in the 1970s were often mocked and have turned out to be right.`,
  gaps: [
    { n: 1, root: 'SPEAK', a: 'SPEAKERS', p: '-ER sobre verbo', tip: 'SPEAK → SPEAKER. Compará con OUTSPOKEN, la misma raíz por otro camino.' },
    { n: 2, root: 'LINGUIST', a: 'LINGUISTIC', p: '-IC sobre sustantivo', tip: 'LINGUIST → LINGUISTIC. El campo entero es LINGUISTICS.' },
    { n: 3, root: 'DOCUMENT', a: 'DOCUMENTATION', p: 'Raíz + -ATION', tip: 'DOCUMENT → DOCUMENTATION. Incontable, y sujeto del verbo «preserves».' },
    { n: 4, root: 'ORAL', a: 'ORALLY', p: '-AL → -ALLY', tip: 'ORAL → ORALLY, con doble L. Compará con ORALITY, el sustantivo.' },
    { n: 5, root: 'REVIVE', a: 'REVITALISATION', alt: ['REVITALIZATION'], p: '-AL + -ISE + -ATION', tip: 'REVIVE comparte raíz con VITAL: VITAL → VITALISE → REVITALISATION.' },
    { n: 6, root: 'CONFINE', a: 'CONFINED', p: '-ED participial', tip: 'CONFINE → CONFINED TO = limitado a. Rige TO, que aparece justo después.' },
    { n: 7, root: 'LITERATE', a: 'LITERACY', p: '-ATE → -ACY', tip: 'LITERATE → LITERACY. Compará con ILLITERATE y con ORALITY.' },
    { n: 8, root: 'PRESERVE', a: 'PRESERVATIONISTS', p: '-ATION + -IST', tip: 'PRESERVE → PRESERVATION → PRESERVATIONIST. Tres piezas encadenadas.' }
  ]
},

{
  id: 'w32',
  title: 'Translating the Untranslatable',
  focus: 'Adjetivos de posibilidad y sufijos de equivalencia',
  brief: 'TRANSLATE→UNTRANSLATABLE · EQUIVALENT→EQUIVALENCE · IDIOM→IDIOMATIC · NUANCE→NUANCED · FIDELITY→INFIDELITY · INTERPRET→MISINTERPRETATION · CULTURE→CULTURAL · APPROXIMATE→APPROXIMATION',
  text: `The claim that some words are {1} is usually made about a noun with no single-word counterpart, and it is almost always false in the sense intended. Anything can be explained; what cannot always be done is to explain it in three syllables while preserving the rhythm of the sentence.

Exact {2} between languages is rare even for concrete objects, and it is vanishingly rare for anything abstract. The translator's real problem is not vocabulary but register: a phrase that is perfectly {3} in one language may be, word for word, merely odd in another.

A {4} rendering will sometimes depart quite far from the surface of the original in order to stay close to its effect, and purists call this {5}. The charge assumes that the alternative — a literal version that invites {6} at every turn — is somehow more honest.

Where the difficulty is {7} rather than linguistic, no solution is available at all. What the translator produces is an {8}, offered in good faith, and the good ones say so in a note.`,
  gaps: [
    { n: 1, root: 'TRANSLATE', a: 'UNTRANSLATABLE', p: 'UN- + -ABLE', tip: 'TRANSLATE → TRANSLATABLE → UNTRANSLATABLE. Cae la E de la raíz.' },
    { n: 2, root: 'EQUIVALENT', a: 'EQUIVALENCE', p: '-ENT → -ENCE', tip: 'EQUIVALENT → EQUIVALENCE. Los adjetivos en -ENT dan sustantivos en -ENCE.' },
    { n: 3, root: 'IDIOM', a: 'IDIOMATIC', p: '-ATIC sobre sustantivo', tip: 'IDIOM → IDIOMATIC. Aparece -AT-, como en DRAMA → DRAMATIC.' },
    { n: 4, root: 'NUANCE', a: 'NUANCED', p: '-ED sobre sustantivo', tip: 'NUANCE → NUANCED = matizado. -ED sobre sustantivo: «dotado de matices».' },
    { n: 5, root: 'FIDELITY', a: 'INFIDELITY', p: 'IN- sobre sustantivo', tip: 'FIDELITY → INFIDELITY. El prefijo se pega directamente al sustantivo.' },
    { n: 6, root: 'INTERPRET', a: 'MISINTERPRETATION', p: 'MIS- + -ATION', tip: 'INTERPRET → INTERPRETATION → MISINTERPRETATION. Sin doblar la T.' },
    { n: 7, root: 'CULTURE', a: 'CULTURAL', p: '-AL sobre sustantivo', tip: 'CULTURE → CULTURAL. Cae la E final.' },
    { n: 8, root: 'APPROXIMATE', a: 'APPROXIMATION', p: '-ATE → -ATION', tip: 'APPROXIMATE → APPROXIMATION = aproximación. Doble P en la raíz.' }
  ]
},

{
  id: 'w33',
  title: 'How Children Get the Rules',
  focus: 'Sufijos de adquisición y adjetivos de sistema',
  brief: 'ACQUIRE→ACQUISITION · EXPOSE→EXPOSURE · REGULAR→IRREGULAR · GENERAL→GENERALISING · CORRECT→CORRECTION · INTUIT→INTUITIVE · EXPLAIN→EXPLICIT · REMARK→REMARKABLE',
  text: `Language {1} in early childhood is achieved without instruction, without correction that anybody follows, and on a diet of {2} that is fragmentary and full of errors. That it works at all is the central puzzle of the field.

The clearest evidence comes from mistakes. A three-year-old who has been saying «went» correctly for months will suddenly start saying «goed», which cannot have been learned by imitation because nobody says it. The child has extracted a rule and applied it to an {3} verb.

What she is doing is {4} from a pattern, and the over-application is proof that the pattern is real. Adult {5} makes almost no difference at this stage; children ignore it, and go on ignoring it until the exception is relearned individually.

The knowledge that results is entirely {6}. Almost no native speaker can state the rule they have just applied, and asking for an {7} account of it produces confusion. It is a {8} way to build a system, and nobody has designed a better one.`,
  gaps: [
    { n: 1, root: 'ACQUIRE', a: 'ACQUISITION', p: '-IRE → -ISITION', tip: 'ACQUIRE → ACQUISITION. La raíz cambia bastante: no es *acquirement en este sentido técnico.' },
    { n: 2, root: 'EXPOSE', a: 'EXPOSURE', p: '-URE sobre verbo', tip: 'EXPOSE → EXPOSURE. La E cae ante -URE.' },
    { n: 3, root: 'REGULAR', a: 'IRREGULAR', p: 'IR- sobre adjetivo', tip: 'REGULAR → IRREGULAR. Ante R el prefijo se vuelve IR- y la R se dobla.' },
    { n: 4, root: 'GENERAL', a: 'GENERALISING', alt: ['GENERALIZING'], p: '-ISE + -ING', tip: 'GENERAL → GENERALISE → GENERALISING. Tras «is doing» hace falta gerundio.' },
    { n: 5, root: 'CORRECT', a: 'CORRECTION', p: '-CT + -ION', tip: 'CORRECT → CORRECTION. Aquí incontable: la corrección como práctica.' },
    { n: 6, root: 'INTUIT', a: 'INTUITIVE', p: 'Raíz + -IVE', tip: 'INTUIT → INTUITION → INTUITIVE. Compará con COUNTERINTUITIVE.' },
    { n: 7, root: 'EXPLAIN', a: 'EXPLICIT', p: 'Raíz latina alterna', tip: 'EXPLAIN y EXPLICIT comparten la raíz «explicare», desplegar. EXPLICIT = explícito.' },
    { n: 8, root: 'REMARK', a: 'REMARKABLE', p: '-ABLE sobre verbo', tip: 'REMARK → REMARKABLE. El adverbio es REMARKABLY.' }
  ]
},

{
  id: 'w34',
  title: 'The Dictionary Is Not the Law',
  focus: 'Sufijos de norma y adjetivos de uso',
  brief: 'PRESCRIBE→PRESCRIPTIVE · DESCRIBE→DESCRIPTIVE · USE→USAGE · CONVENTION→CONVENTIONAL · AUTHORITY→AUTHORITATIVE · ARBITER→ARBITRARY · EVOLVE→EVOLVING · RESIST→RESISTANCE',
  text: `Readers open a dictionary expecting a verdict and find, if it is a good one, a report. The distinction between {1} and {2} lexicography is the oldest quarrel in the discipline and it is not really a quarrel about words.

A modern dictionary records {3}. If enough educated writers use a construction, it goes in, with a note about register if the editors think one is needed. This strikes many readers as an abdication, and the complaint is worth taking seriously, because a {4} standard does have value: it is what allows a document to be read the same way in Auckland and in Aberdeen.

The most {5} works have always understood this and have never claimed more than they could support. Where a rule is genuinely {6} — the ban on splitting an infinitive, imported wholesale from Latin — saying so is not permissiveness but accuracy.

A living language is {7} whether anyone approves or not, and {8} to a change that has already happened is simply a way of dating oneself.`,
  gaps: [
    { n: 1, root: 'PRESCRIBE', a: 'PRESCRIPTIVE', p: '-SCRIBE → -SCRIPTIVE', tip: 'PRESCRIBE → PRESCRIPTIVE = normativo, que dicta cómo debe hablarse.' },
    { n: 2, root: 'DESCRIBE', a: 'DESCRIPTIVE', p: '-SCRIBE → -SCRIPTIVE', tip: 'DESCRIBE → DESCRIPTIVE = descriptivo. La B se convierte en P en toda la familia.' },
    { n: 3, root: 'USE', a: 'USAGE', p: '-AGE sobre sustantivo', tip: 'USE → USAGE = el uso real de la lengua. Incontable en este sentido.' },
    { n: 4, root: 'CONVENTION', a: 'CONVENTIONAL', p: '-AL sobre sustantivo', tip: 'CONVENTION → CONVENTIONAL. Compará con UNCONVENTIONAL.' },
    { n: 5, root: 'AUTHORITY', a: 'AUTHORITATIVE', p: '-Y → -ATIVE', tip: 'AUTHORITY → AUTHORITATIVE = de referencia. No confundir con AUTHORITARIAN.' },
    { n: 6, root: 'ARBITER', a: 'ARBITRARY', p: '-ARY con cambio de raíz', tip: 'ARBITER → ARBITRARY = arbitrario, sin fundamento. Se pierde la E de la raíz.' },
    { n: 7, root: 'EVOLVE', a: 'EVOLVING', p: '-ING participial', tip: 'EVOLVE → EVOLVING. Cae la E. Compará con REVOLUTION, de la misma raíz latina.' },
    { n: 8, root: 'RESIST', a: 'RESISTANCE', p: '-ANCE sobre verbo', tip: 'RESIST → RESISTANCE. Con A, como RESISTANT. Rige TO.' }
  ]
},

{
  id: 'w35',
  title: 'Reading Without Books',
  focus: 'Sufijos de transmisión y adjetivos de memoria',
  brief: 'RECITE→RECITATION · MEMORY→MEMORISE · ENDURE→ENDURING · TRADITION→TRADITIONALLY · SCHOLAR→SCHOLARSHIP · ORAL→ORALITY · MYTH→MYTHOLOGICAL · ESTIMATE→UNDERESTIMATED',
  text: `The Homeric poems were composed and transmitted for several centuries before anybody wrote them down. Public {1} was the only form in which they existed, and the performers did not {2} a fixed text: they rebuilt it each time from a stock of formulaic phrases.

The discovery of how this worked, made by comparing Greek epic with living Serbian oral poetry in the 1930s, was the most {3} contribution of twentieth-century classical scholarship. It explained the repetitions that {4} had been treated as clumsiness — the wine-dark sea, the swift-footed Achilles — as the load-bearing structure of the whole method.

Nothing in later {5} has overturned it. What has changed is the estimate of how much such a system can carry. {6} was long assumed to impose a hard limit on complexity, and the {7} material transmitted in this way across several cultures suggests that the limit was badly {8}.`,
  gaps: [
    { n: 1, root: 'RECITE', a: 'RECITATION', p: '-ITE → -ITATION', tip: 'RECITE → RECITATION = recitación pública.' },
    { n: 2, root: 'MEMORY', a: 'MEMORISE', alt: ['MEMORIZE'], p: '-ISE sobre sustantivo', tip: 'MEMORY → MEMORISE: la Y pasa a I. Tras «did not» va infinitivo sin TO.' },
    { n: 3, root: 'ENDURE', a: 'ENDURING', p: '-ING participial', tip: 'ENDURE → ENDURING = duradero, perdurable. Cae la E.' },
    { n: 4, root: 'TRADITION', a: 'TRADITIONALLY', p: '-AL → -ALLY', tip: 'TRADITION → TRADITIONAL → TRADITIONALLY. Doble L en la unión.' },
    { n: 5, root: 'SCHOLAR', a: 'SCHOLARSHIP', p: '-SHIP sobre sustantivo', tip: 'SCHOLAR → SCHOLARSHIP. Aquí no es una beca: es la erudición como actividad.' },
    { n: 6, root: 'ORAL', a: 'ORALITY', p: '-ITY sobre adjetivo', tip: 'ORAL → ORALITY = oralidad, la condición de lo transmitido de viva voz.' },
    { n: 7, root: 'MYTH', a: 'MYTHOLOGICAL', p: '-OLOGY + -ICAL', tip: 'MYTH → MYTHOLOGY → MYTHOLOGICAL. Dos pasos.' },
    { n: 8, root: 'ESTIMATE', a: 'UNDERESTIMATED', p: 'UNDER- + -ED', tip: 'UNDER- indica defecto: se calculó por debajo de lo real.' }
  ]
}

]);
