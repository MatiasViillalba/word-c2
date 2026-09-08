/**
 * Passage bank 04 — media, evidence and the public record.
 *
 * A register built almost entirely on abstract nouns, which makes it ideal for
 * drilling the -ITY / -ISM / -ENCE families against one another, and for the
 * agent suffixes that name the people involved.
 */
WC2.content.registerPassages([

{
  id: 'w16',
  title: 'Who Guards the Gate',
  focus: 'Agentes y sustantivos de cualidad',
  brief: 'GATE→GATEKEEPERS · CREDIBLE→CREDIBILITY · SENSATION→SENSATIONALISM · INVESTIGATE→INVESTIGATIVE · CORRESPOND→CORRESPONDENTS · PARTIAL→IMPARTIALITY · CIRCULATE→CIRCULATION · SUBSCRIBE→SUBSCRIBERS',
  text: `For most of the twentieth century a small number of editors decided what the public would read, and they are now routinely denounced as {1}. The description is accurate and the denunciation is more complicated than it looks.

Gatekeeping was, among other things, a mechanism for {2}. An editor who printed a fabrication answered for it, and that liability paid for the fact-checking. Remove the gate and you remove the cost of {3} along with the cost of care.

The economics have collapsed in a particular order. {4} journalism was always cross-subsidised: it never paid for itself, and it was funded by classified advertising and by the sports pages. Foreign {5} went first, then the local courts reporter, then the specialist.

Claims of editorial {6} were always somewhat overstated. But a paper with a {7} of two hundred thousand and a duty to correct itself in print is a different animal from a feed with no readers at all, only {8}.`,
  gaps: [
    { n: 1, root: 'GATE', a: 'GATEKEEPERS', p: 'Compuesto + -ER', tip: 'GATE + KEEP + -ER. Quien controla el acceso. Plural tras «denounced as».' },
    { n: 2, root: 'CREDIBLE', a: 'CREDIBILITY', p: '-IBLE → -IBILITY', tip: 'CREDIBLE → CREDIBILITY. Nunca *credibleity.' },
    { n: 3, root: 'SENSATION', a: 'SENSATIONALISM', p: '-AL + -ISM', tip: 'SENSATION → SENSATIONAL → SENSATIONALISM = sensacionalismo.' },
    { n: 4, root: 'INVESTIGATE', a: 'INVESTIGATIVE', p: '-ATE → -ATIVE', tip: 'INVESTIGATE → INVESTIGATIVE. Adjetivo antepuesto a «journalism».' },
    { n: 5, root: 'CORRESPOND', a: 'CORRESPONDENTS', p: '-ENT sobre verbo', tip: 'CORRESPOND → CORRESPONDENT. Doble R en la raíz. Aquí, corresponsales.' },
    { n: 6, root: 'PARTIAL', a: 'IMPARTIALITY', p: 'IM- + -ITY', tip: 'PARTIAL → IMPARTIAL → IMPARTIALITY = imparcialidad. Ante P, IN- se vuelve IM-.' },
    { n: 7, root: 'CIRCULATE', a: 'CIRCULATION', p: '-ATE → -ATION', tip: 'CIRCULATE → CIRCULATION. En prensa: la tirada.' },
    { n: 8, root: 'SUBSCRIBE', a: 'SUBSCRIBERS', p: '-ER sobre verbo', tip: 'SUBSCRIBE → SUBSCRIBER. Cae la E. El contraste con «readers» es el remate del texto.' }
  ]
},

{
  id: 'w17',
  title: 'The Correction on Page Nine',
  focus: 'Sufijos de acción y adverbios de comentario',
  brief: 'REPORT→REPORTEDLY · ALLEGE→ALLEGED · RETRACT→RETRACTION · PROMINENT→PROMINENCE · MISREPRESENT→MISREPRESENTATION · ACCURATE→ACCURACY · DEFEND→INDEFENSIBLE · ROUTINE→ROUTINELY',
  text: `A newspaper that gets something badly wrong on its front page will, if it is honest, correct it — in four lines, at the foot of page nine, some weeks later. The story that was {1} true reaches two million people; the correction reaches perhaps four thousand.

The vocabulary of the trade is built to manage this asymmetry. A person is {2} to have done something, and the word does a great deal of quiet work: it permits publication while reserving the possibility of a {3} later.

Regulators have pressed for corrections to be given the same {4} as the original claim, and proprietors have resisted on the grounds that this would give a single error more space than the news of the day. The argument is not absurd. It is also, when the original was a serious {5}, beside the point.

{6} is expensive and the market does not reward it directly. That does not make the current arrangement {7}, only comfortable, which is why it is defended so {8}.`,
  gaps: [
    { n: 1, root: 'REPORT', a: 'REPORTEDLY', p: '-ED + -LY', tip: 'REPORT → REPORTED → REPORTEDLY = según se informa. La E de -ED se pronuncia.' },
    { n: 2, root: 'ALLEGE', a: 'ALLEGED', p: '-ED participial', tip: 'ALLEGE → ALLEGED = presunto. Estructura: «is alleged to have done».' },
    { n: 3, root: 'RETRACT', a: 'RETRACTION', p: '-CT + -ION', tip: 'RETRACT → RETRACTION = rectificación, retractación.' },
    { n: 4, root: 'PROMINENT', a: 'PROMINENCE', p: '-ENT → -ENCE', tip: 'PROMINENT → PROMINENCE. Los adjetivos en -ENT dan -ENCE.' },
    { n: 5, root: 'MISREPRESENT', a: 'MISREPRESENTATION', p: 'MIS- + -ATION', tip: 'La raíz ya trae MIS-: sólo falta el sufijo. REPRESENT → REPRESENTATION.' },
    { n: 6, root: 'ACCURATE', a: 'ACCURACY', p: '-ATE → -ACY', tip: 'ACCURATE → ACCURACY. Doble C, una sola R. Sujeto de «is expensive».' },
    { n: 7, root: 'DEFEND', a: 'INDEFENSIBLE', p: 'IN- + -IBLE', tip: 'DEFEND → DEFENSIBLE → INDEFENSIBLE. La D pasa a S.' },
    { n: 8, root: 'ROUTINE', a: 'ROUTINELY', p: '-LY sobre adjetivo', tip: 'ROUTINE → ROUTINELY = de forma rutinaria. La E se conserva.' }
  ]
},

{
  id: 'w18',
  title: 'The Archive Nobody Kept',
  focus: 'Sufijos de proceso y adjetivos de permanencia',
  brief: 'PRESERVE→PRESERVATION · DIGITAL→DIGITISATION · PERMANENT→PERMANENCE · DOCUMENT→DOCUMENTATION · FUND→UNDERFUNDED · RETRIEVE→RETRIEVAL · PROPRIETOR→PROPRIETARY · SYSTEM→SYSTEMATICALLY',
  text: `Paper is a remarkably good storage medium. Left dry and dark, it lasts five hundred years without maintenance, which is why the {1} of a medieval charter is a solved problem and the preservation of a 1998 website is not.

{2} was sold to libraries as a solution to decay and turned out to introduce a new kind of it. A digital file has no {3} of its own: it survives only as long as somebody actively copies it forward, and the {4} needed to make sense of it must be copied too.

Most municipal archives are chronically {5} and have no line in the budget for migration. The result is that {6} of material from the first two decades of the web is now difficult and in places impossible, since the formats are {7} and the software that read them no longer exists.

A handful of national libraries have begun to harvest the web {8}. Everything outside their remit is simply being lost, quietly, at a rate nobody has measured.`,
  gaps: [
    { n: 1, root: 'PRESERVE', a: 'PRESERVATION', p: '-VE → -VATION', tip: 'PRESERVE → PRESERVATION. Cae la E final.' },
    { n: 2, root: 'DIGITAL', a: 'DIGITISATION', alt: ['DIGITIZATION'], p: '-ISE + -ATION', tip: 'DIGITAL → DIGITISE → DIGITISATION. Tres pasos encadenados.' },
    { n: 3, root: 'PERMANENT', a: 'PERMANENCE', p: '-ENT → -ENCE', tip: 'PERMANENT → PERMANENCE. También existe PERMANENCY, menos frecuente.' },
    { n: 4, root: 'DOCUMENT', a: 'DOCUMENTATION', p: 'Raíz + -ATION', tip: 'DOCUMENT → DOCUMENTATION. Incontable: nunca *a documentation.' },
    { n: 5, root: 'FUND', a: 'UNDERFUNDED', p: 'UNDER- + -ED', tip: 'UNDER- indica insuficiencia. Doble D antes de -ED.' },
    { n: 6, root: 'RETRIEVE', a: 'RETRIEVAL', p: '-AL sobre verbo', tip: 'RETRIEVE → RETRIEVAL. Los verbos en -VE toman -AL. I antes de E salvo tras C.' },
    { n: 7, root: 'PROPRIETOR', a: 'PROPRIETARY', p: '-ARY con pérdida de -OR', tip: 'PROPRIETOR → PROPRIETARY = propietario, de formato cerrado. Se pierde la O final de la raíz.' },
    { n: 8, root: 'SYSTEM', a: 'SYSTEMATICALLY', p: '-ATIC → -ICALLY', tip: 'SYSTEM → SYSTEMATIC → SYSTEMATICALLY. Compará con SYSTEMIC, que no lleva -AT-.' }
  ]
},

{
  id: 'w19',
  title: 'Ratings and What They Measure',
  focus: 'Sufijos de medida y adjetivos de fiabilidad',
  brief: 'ANALYSE→ANALYSTS · PROJECT→PROJECTIONS · DECEIVE→DECEPTIVE · REPRESENT→UNREPRESENTATIVE · AGGREGATE→AGGREGATED · WEIGH→WEIGHTING · SIGNIFY→SIGNIFICANCE · CAUTION→CAUTIONARY',
  text: `Audience figures are a currency, and like any currency their value depends on collective agreement rather than on anything intrinsic. {1} who work with them daily are noticeably more careful about what they claim than the executives who quote them.

The {2} published each week rest on a panel of a few thousand households, scaled up. The arithmetic is sound. What is {3} is the presentation: a figure given to the nearest thousand implies a precision the method cannot support.

Panels drift. A household that agreed to be monitored in 2015 is, by 2026, thoroughly {4} of the population it stands for, and the correction is applied by {5} the responses rather than by recruiting new ones, because recruitment is expensive.

Any {6} applied after the fact is a judgement, and judgements accumulate. None of this means the numbers are worthless; it means their {7} is narrower than the confidence with which they are cited. The history of audience measurement is one long {8} tale.`,
  gaps: [
    { n: 1, root: 'ANALYSE', a: 'ANALYSTS', p: '-ST (irregular)', tip: 'ANALYSE → ANALYST: se pierde la E y sólo queda la T. No es *analyser en este sentido.' },
    { n: 2, root: 'PROJECT', a: 'PROJECTIONS', p: '-CT + -ION', tip: 'PROJECT → PROJECTION = previsión numérica. Plural por «rest».' },
    { n: 3, root: 'DECEIVE', a: 'DECEPTIVE', p: '-CEIVE → -CEPTIVE', tip: 'DECEIVE → DECEPTION → DECEPTIVE. La V pasa a P.' },
    { n: 4, root: 'REPRESENT', a: 'UNREPRESENTATIVE', p: 'UN- + -ATIVE', tip: 'REPRESENT → REPRESENTATIVE → UNREPRESENTATIVE. Rige OF, que aparece después.' },
    { n: 5, root: 'AGGREGATE', a: 'AGGREGATING', p: '-ING tras preposición', tip: 'Tras la preposición BY va gerundio: AGGREGATING. La E de -ATE desaparece.' },
    { n: 6, root: 'WEIGH', a: 'WEIGHTING', p: '-ING sustantivado', tip: 'WEIGH → WEIGHT → WEIGHTING = ponderación estadística. Distinto de WEIGHTY, el adjetivo.' },
    { n: 7, root: 'SIGNIFY', a: 'SIGNIFICANCE', p: '-ANT → -ANCE', tip: 'SIGNIFY → SIGNIFICANT → SIGNIFICANCE. Adjetivo en -ANT, sustantivo en -ANCE.' },
    { n: 8, root: 'CAUTION', a: 'CAUTIONARY', p: '-ARY sobre sustantivo', tip: 'CAUTION → CAUTIONARY. A CAUTIONARY TALE es colocación fija.' }
  ]
},

{
  id: 'w20',
  title: 'Two Kinds of Silence',
  focus: 'Sufijos abstractos y adjetivos de poder',
  brief: 'CENSOR→CENSORSHIP · SUPPRESS→SUPPRESSED · MARGIN→MARGINALISATION · ACCESS→ACCESSIBLE · COMMISSION→COMMISSIONED · ADVOCATE→ADVOCACY · LEGITIMATE→LEGITIMACY · EFFECT→EFFECTIVELY',
  text: `{1} is easy to recognise and comparatively easy to resist, because it leaves a mark: a banned title, a closed paper, a name that cannot be printed. A story that is actively {2} at least announces its own existence.

The second kind of silence leaves no mark at all. It is produced by cost. A subject that nobody will fund, in a language nobody translates, addressed to readers nobody is trying to reach, achieves the same result as a ban and attracts none of the {3} that a ban attracts.

Work of this sort tends to appear only where it is least {4}: in a doctoral thesis, in a report {5} by a charity and read by nine people. {6} groups know the pattern well and spend much of their effort simply moving material from one register to another.

Neither silence has more {7} than the other. But only one of them can be photographed, and that is why campaigns against the first are {8} easier to run.`,
  gaps: [
    { n: 1, root: 'CENSOR', a: 'CENSORSHIP', p: '-SHIP sobre sustantivo', tip: 'CENSOR → CENSORSHIP. -SHIP nombra la práctica o la condición.' },
    { n: 2, root: 'SUPPRESS', a: 'SUPPRESSED', p: '-ED participial', tip: 'SUPPRESS → SUPPRESSED. Doble P y doble S en la raíz.' },
    { n: 3, root: 'MARGIN', a: 'MARGINALISATION', alt: ['MARGINALIZATION'], p: '-AL + -ISE + -ATION', tip: 'MARGIN → MARGINAL → MARGINALISE → MARGINALISATION. Cuatro piezas.' },
    { n: 4, root: 'ACCESS', a: 'ACCESSIBLE', p: '-IBLE sobre sustantivo', tip: 'ACCESS → ACCESSIBLE, con -IBLE. Adjetivo tras «least».' },
    { n: 5, root: 'COMMISSION', a: 'COMMISSIONED', p: '-ED participial', tip: 'COMMISSION → COMMISSIONED = encargado. Doble M y doble S.' },
    { n: 6, root: 'ADVOCATE', a: 'ADVOCACY', p: '-ATE → -ACY', tip: 'ADVOCATE → ADVOCACY = defensa activa de una causa. Antepuesto a «groups».' },
    { n: 7, root: 'LEGITIMATE', a: 'LEGITIMACY', p: '-ATE → -ACY', tip: 'LEGITIMATE → LEGITIMACY. Misma pauta que ADVOCACY y PRIVACY.' },
    { n: 8, root: 'EFFECT', a: 'EFFECTIVELY', p: '-IVE + -LY', tip: 'EFFECT → EFFECTIVE → EFFECTIVELY. Aquí modifica al comparativo «easier».' }
  ]
}

]);
