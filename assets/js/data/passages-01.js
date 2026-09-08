/**
 * Passage bank 01 — negative prefixes under pressure.
 *
 * Each text is an original Cambridge C2 Part 3 exercise: continuous prose with
 * eight gaps, a stem supplied for each, and the derived form to be built. These
 * five turn on the prefix system — knowing that a Latin stem takes IN- and its
 * assimilated forms while a Germanic one takes UN-, and that MIS- and DIS- are
 * judgements rather than simple negations.
 */
WC2.content.registerPassages([

{
  id: 'w01',
  title: 'The Case Against Certainty',
  focus: 'Prefijos negativos y sustantivos de cualidad',
  brief: 'CERTAIN→UNCERTAIN · CONCLUDE→INCONCLUSIVE · TEND→TENDENCY · DOUBT→UNDOUBTEDLY · PROBABLE→IMPROBABLE · ASSUME→ASSUMPTION · QUESTION→QUESTIONABLE · HUMBLE→HUMILITY',
  text: `Science is popularly imagined as a machine for producing certainties, which is precisely the reverse of what its practitioners believe. A good result is provisional; a great one is merely {1} in a more interesting way than its predecessors. Three separate trials of the same compound may return {2} findings, and the honest report says so.

There is a persistent {3} among journalists to translate this caution into failure. A study that declines to settle a question is written up as a study that went wrong. Yet the researcher who says she does not yet know is {4} closer to the truth than the columnist who is sure. It is not {5} that the most confident public voices on a technical subject are the ones with least contact with the data.

Every experiment rests on an {6} that cannot itself be tested within the experiment, and a discipline that forgets this becomes {7} in the deepest sense. The mark of a mature science is not the volume of its answers but the {8} with which it holds them.`,
  gaps: [
    { n: 1, root: 'CERTAIN', a: 'UNCERTAIN', p: 'UN- sobre adjetivo', tip: 'CERTAIN → UNCERTAIN. El adjetivo tras «is» describe el resultado: incierto.' },
    { n: 2, root: 'CONCLUDE', a: 'INCONCLUSIVE', p: 'IN- + -IVE', tip: 'CONCLUDE → CONCLUSIVE → INCONCLUSIVE. Raíz latina, así que el negativo es IN-, no UN-.' },
    { n: 3, root: 'TEND', a: 'TENDENCY', p: '-ENCY sobre verbo', tip: 'Tras «a persistent» hace falta un sustantivo: TENDENCY. Rige TO + infinitivo, como aquí.' },
    { n: 4, root: 'DOUBT', a: 'UNDOUBTEDLY', p: 'UN- + -ED + -LY', tip: 'Adverbio de comentario que modifica a toda la afirmación: sin duda. La B es muda pero se escribe.' },
    { n: 5, root: 'PROBABLE', a: 'IMPROBABLE', p: 'IM- sobre adjetivo', tip: 'Ante P el IN- latino se vuelve IM-: IMPROBABLE. «It is not improbable that…» = bien podría ser que…' },
    { n: 6, root: 'ASSUME', a: 'ASSUMPTION', p: '-UME → -UMPTION', tip: 'Tras «an» hace falta sustantivo. ASSUME → ASSUMPTION, con una P que no está en el verbo.' },
    { n: 7, root: 'QUESTION', a: 'QUESTIONABLE', p: '-ABLE sobre verbo', tip: 'QUESTIONABLE = discutible, dudoso. El adjetivo va tras «becomes».' },
    { n: 8, root: 'HUMBLE', a: 'HUMILITY', p: '-ITY con cambio de raíz', tip: 'HUMBLE → HUMILITY: desaparece la B y cambia la vocal. Tras «the» y antes de «with which» hace falta sustantivo.' }
  ]
},

{
  id: 'w02',
  title: 'The Unpaid Hours',
  focus: 'Sufijos abstractos y participios',
  brief: 'DEPEND→DEPENDENCY · RELY→RELIANCE · SUSTAIN→UNSUSTAINABLE · VISIBLE→INVISIBLE · ASSESS→ASSESSMENTS · EXCLUDE→EXCLUSIVELY · ADEQUATE→INADEQUACIES · RECOGNISE→RECOGNITION',
  text: `Every advanced economy runs on a quantity of unpaid work that its statistics barely register. The care of the very old and the very young is treated as a private matter, and the resulting {1} on family members is invisible in the national accounts precisely because no money changes hands.

Britain's {2} on this arrangement has deepened as the population has aged. Demographers have been warning for two decades that the pattern is {3} — that a shrinking cohort of working-age adults cannot indefinitely absorb a growing volume of unwaged care — and successive governments have found the warning easy to ignore, largely because the labour itself is {4}.

The people doing it, overwhelmingly women, are not counted as workers at all. Formal {5} of need are carried out by local authorities, but they are {6} concerned with the person receiving care and not with the person providing it. The {7} of the system are structural rather than accidental.

What is asked for is not, in the first instance, money. It is {8}: a category in the accounts, and a name.`,
  gaps: [
    { n: 1, root: 'DEPEND', a: 'DEPENDENCY', p: '-ENT → -ENCY', tip: 'Tras «the resulting» hace falta sustantivo. DEPENDENCY subraya la relación de sometimiento; rige ON.' },
    { n: 2, root: 'RELY', a: 'RELIANCE', p: '-ANCE sobre verbo', tip: 'RELY → RELIANCE: la Y pasa a I. Rige ON, que aparece justo después.' },
    { n: 3, root: 'SUSTAIN', a: 'UNSUSTAINABLE', p: 'UN- + -ABLE', tip: 'SUSTAIN → SUSTAINABLE → UNSUSTAINABLE. El adjetivo va tras «is».' },
    { n: 4, root: 'VISIBLE', a: 'INVISIBLE', p: 'IN- sobre adjetivo', tip: 'VISIBLE es raíz latina: el negativo es IN-. El párrafo entero gira sobre esa invisibilidad.' },
    { n: 5, root: 'ASSESS', a: 'ASSESSMENTS', p: '-MENT sobre verbo', tip: 'Tras «Formal» y con verbo en plural («are carried out») hace falta el plural del sustantivo.' },
    { n: 6, root: 'EXCLUDE', a: 'EXCLUSIVELY', p: '-IVE + -LY', tip: 'EXCLUDE → EXCLUSIVE → EXCLUSIVELY: la D pasa a S. Adverbio que modifica a «concerned with».' },
    { n: 7, root: 'ADEQUATE', a: 'INADEQUACIES', p: 'IN- + -CY (plural)', tip: 'ADEQUATE → ADEQUACY → INADEQUACY → INADEQUACIES. La Y pasa a IES en plural.' },
    { n: 8, root: 'RECOGNISE', a: 'RECOGNITION', p: '-ISE → -ITION', tip: 'RECOGNISE → RECOGNITION: se pierde el -ISE. Tras los dos puntos se enumera qué es ese sustantivo.' }
  ]
},

{
  id: 'w03',
  title: 'A Question of Access',
  focus: 'Sufijos de cualidad y adjetivos de capacidad',
  brief: 'ACCESS→ACCESSIBILITY · ACCESS→INACCESSIBLE · LEGISLATE→LEGISLATIVE · CONSIDER→CONSIDERABLE · RESIST→RESISTANCE · EXPENSE→EXPENSIVE · WELCOME→UNWELCOME · PROFOUND→PROFOUNDLY',
  text: `For most of the twentieth century, museum {1} meant a ramp at the side entrance and nothing else. The galleries themselves — narrow stairs, unlit cases, labels set at the height of a standing adult — remained effectively {2} to a substantial minority of the people who paid for them.

The {3} framework that changed this was introduced late and enforced later. Even then, {4} resistance came from curators who argued, with genuine conviction, that the fabric of a listed building could not be altered. That {5} was not always cynical; it was frequently sincere and almost always {6} to overcome, since every proposed lift shaft threatened something older than the objection to it.

What shifted the argument was not law but evidence. Institutions that rebuilt their circulation found that the changes were far from {7} to anybody. Wider doorways, seating at intervals, labels a child could read: none of it diminished the collection, and all of it {8} altered who felt entitled to walk in.`,
  gaps: [
    { n: 1, root: 'ACCESS', a: 'ACCESSIBILITY', p: '-IBLE + -ITY', tip: 'Tras «museum» hace falta un sustantivo abstracto. ACCESS → ACCESSIBLE → ACCESSIBILITY.' },
    { n: 2, root: 'ACCESS', a: 'INACCESSIBLE', p: 'IN- + -IBLE', tip: 'Misma raíz, otra rama: el adjetivo negativo. Fijate en que el texto pide dos derivados distintos de ACCESS.' },
    { n: 3, root: 'LEGISLATE', a: 'LEGISLATIVE', p: '-ATE → -ATIVE', tip: 'Tras «The» y antes de «framework» hace falta adjetivo: LEGISLATIVE.' },
    { n: 4, root: 'CONSIDER', a: 'CONSIDERABLE', p: '-ABLE sobre verbo', tip: 'CONSIDERABLE = notable, cuantioso. No significa «considerado», que sería CONSIDERATE.' },
    { n: 5, root: 'RESIST', a: 'RESISTANCE', p: '-ANCE sobre verbo', tip: 'Tras «That» hace falta sustantivo, retomando la idea del párrafo anterior. Con A, como RESISTANT.' },
    { n: 6, root: 'EXPENSE', a: 'EXPENSIVE', p: '-IVE sobre sustantivo', tip: 'EXPENSE → EXPENSIVE. El adjetivo va tras «almost always» y antes de «to overcome».' },
    { n: 7, root: 'WELCOME', a: 'UNWELCOME', p: 'UN- sobre adjetivo', tip: 'WELCOME → UNWELCOME. «Far from unwelcome» = todo lo contrario de molesto.' },
    { n: 8, root: 'PROFOUND', a: 'PROFOUNDLY', p: '-LY sobre adjetivo', tip: 'Adverbio que modifica al verbo «altered»: profundamente. PROFOUND → PROFOUNDLY.' }
  ]
},

{
  id: 'w04',
  title: 'The Limits of the Map',
  focus: 'Sustantivos de acción y adjetivos de relación',
  brief: 'REPRESENT→REPRESENTATION · DECEIVE→DECEPTIVELY · SELECT→SELECTIVE · POLITICS→POLITICAL · NEUTRAL→NEUTRALITY · DISTORT→DISTORTION · INEVITABLE→INEVITABLY · PROJECT→PROJECTIONS',
  text: `A map is not a small copy of the world. It is a {1} of it, and every representation involves a choice about what to leave out. The result looks {2} objective: clean lines, a legend, a scale bar. That appearance of neutrality is itself the most powerful thing about it.

Cartography is necessarily {3}. A road atlas that showed every footpath would be unusable, so paths are omitted, and the omission carries a message about who the map is for. The choices are frequently {4} as well as practical: which settlements are named, which border is drawn solid and which dotted, whose spelling is used.

Claims of {5} therefore deserve some scepticism. Even the mathematics is partial. Any attempt to flatten a sphere onto a page produces {6} somewhere, and the cartographer chooses where it falls. Mercator preserves angles and {7} exaggerates the poles; Peters preserves area and stretches everything else.

The honest position is not that all {8} are equally good. It is that none of them is innocent.`,
  gaps: [
    { n: 1, root: 'REPRESENT', a: 'REPRESENTATION', p: 'Raíz + -ATION', tip: 'Tras «a» hace falta sustantivo. REPRESENT → REPRESENTATION, con la A antes de -TION.' },
    { n: 2, root: 'DECEIVE', a: 'DECEPTIVELY', p: '-IVE + -LY', tip: 'Adverbio que modifica al adjetivo «objective». DECEIVE → DECEPTIVE → DECEPTIVELY: la V pasa a P.' },
    { n: 3, root: 'SELECT', a: 'SELECTIVE', p: '-CT + -IVE', tip: 'Adjetivo tras «is necessarily». SELECT → SELECTION → SELECTIVE.' },
    { n: 4, root: 'POLITICS', a: 'POLITICAL', p: '-ICS → -ICAL', tip: 'POLITICS → POLITICAL. La S del campo desaparece en el adjetivo.' },
    { n: 5, root: 'NEUTRAL', a: 'NEUTRALITY', p: '-ITY sobre adjetivo', tip: 'Tras «Claims of» hace falta sustantivo abstracto: NEUTRALITY.' },
    { n: 6, root: 'DISTORT', a: 'DISTORTION', p: '-ION sobre verbo', tip: 'DISTORT → DISTORTION. Aquí incontable: la distorsión como fenómeno.' },
    { n: 7, root: 'INEVITABLE', a: 'INEVITABLY', p: '-ABLE → -ABLY', tip: 'Adverbio que modifica a «exaggerates». La E de -ABLE desaparece ante -LY.' },
    { n: 8, root: 'PROJECT', a: 'PROJECTIONS', p: '-CT + -ION', tip: 'En cartografía, una PROJECTION es una proyección. Plural por «all» y «are».' }
  ]
},

{
  id: 'w05',
  title: 'Reading the Weather',
  focus: 'Prefijos de grado y sufijos de probabilidad',
  brief: 'PREDICT→UNPREDICTABLE · ESTIMATE→UNDERESTIMATED · PROBABLE→PROBABILISTIC · CERTAIN→CERTAINTY · RELY→RELIABLE · COMPUTE→COMPUTATION · SIGNIFY→SIGNIFICANTLY · CAUTION→CAUTIOUSLY',
  text: `The atmosphere is not random, but it is thoroughly {1} beyond about ten days, and the reason is arithmetic rather than ignorance. Small errors in the initial measurements grow, and they grow at a rate that was badly {2} until the 1960s.

Modern forecasting is therefore {3} by design. A bulletin that gives a seventy per cent chance of rain is not hedging; it is reporting the fraction of simulated futures in which rain fell. The demand for {4} that audiences bring to a forecast is a demand the science cannot meet and should not pretend to.

What has improved, spectacularly, is the short range. A five-day forecast today is as {5} as a two-day forecast was in 1980, and almost all of that gain comes from sheer {6} — from running the same model dozens of times with slightly different starting points. Satellite coverage of the oceans has helped {7} as well.

Forecasters, sensibly, now phrase their conclusions {8}, and the public has learned, slowly, to read the hedge as information rather than evasion.`,
  gaps: [
    { n: 1, root: 'PREDICT', a: 'UNPREDICTABLE', p: 'UN- + -ABLE', tip: 'PREDICT → PREDICTABLE → UNPREDICTABLE. El adjetivo va tras «is thoroughly».' },
    { n: 2, root: 'ESTIMATE', a: 'UNDERESTIMATED', p: 'UNDER- + -ED', tip: 'UNDER- indica defecto: se calculó por debajo de lo real. Compará con OVERESTIMATED.' },
    { n: 3, root: 'PROBABLE', a: 'PROBABILISTIC', p: '-ITY + -IC', tip: 'PROBABLE → PROBABILITY → PROBABILISTIC. Adjetivo tras «is therefore».' },
    { n: 4, root: 'CERTAIN', a: 'CERTAINTY', p: '-TY sobre adjetivo', tip: 'Tras «The demand for» hace falta sustantivo. CERTAIN → CERTAINTY, con -TY y no *-ness.' },
    { n: 5, root: 'RELY', a: 'RELIABLE', p: 'Y → I + -ABLE', tip: 'Estructura comparativa «as ___ as»: hace falta adjetivo. RELY → RELIABLE.' },
    { n: 6, root: 'COMPUTE', a: 'COMPUTATION', p: '-UTE → -UTATION', tip: 'Tras «sheer» hace falta sustantivo incontable: la potencia de cálculo. COMPUTE → COMPUTATION.' },
    { n: 7, root: 'SIGNIFY', a: 'SIGNIFICANTLY', p: '-ANT + -LY', tip: 'Adverbio que modifica a «has helped». SIGNIFY → SIGNIFICANT → SIGNIFICANTLY.' },
    { n: 8, root: 'CAUTION', a: 'CAUTIOUSLY', p: '-OUS + -LY', tip: 'Adverbio de modo tras «phrase their conclusions». CAUTION → CAUTIOUS → CAUTIOUSLY.' }
  ]
}

]);
