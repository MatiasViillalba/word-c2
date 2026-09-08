/**
 * Passage bank 12 — physics, space and the limits of measurement.
 *
 * Scientific prose is where the -IC / -ICAL split matters most and where the
 * exam sets its longest derivations. It is also the register that most reliably
 * needs an adverb: EMPIRICALLY, THEORETICALLY, ASTRONOMICALLY.
 */
WC2.content.registerPassages([

{
  id: 'w56',
  title: 'Counting What Cannot Be Seen',
  focus: 'Adverbios científicos y sufijos de medida',
  brief: 'ASTRONOMY→ASTRONOMICAL · INFER→INFERRED · GRAVITY→GRAVITATIONAL · ROTATE→ROTATION · ACCOUNT→UNACCOUNTED · EMPIRICAL→EMPIRICALLY · THEORY→THEORETICAL · RESOLVE→UNRESOLVED',
  text: `Rather more than four fifths of the matter in the universe has never been observed directly. Its existence is not an {1} embarrassment so much as a straightforward consequence of arithmetic, and the arithmetic is not in dispute.

The quantity is {2} rather than measured. Galaxies rotate faster at their edges than the visible mass allows, and the {3} pull required to hold them together implies something that emits no light at all.

The evidence from galactic {4} was confirmed independently by gravitational lensing, which is a different method with different assumptions. That agreement is what turned an anomaly into a problem: the missing mass is {5} for by any known particle.

The candidates are numerous and none has been detected {6}, despite thirty years of increasingly sensitive experiments. Whether the deficiency is in the inventory or in the {7} framework itself is the live question, and it has been {8} for longer than most physicists expected.`,
  gaps: [
    { n: 1, root: 'ASTRONOMY', a: 'ASTRONOMICAL', p: '-Y → -ICAL', tip: 'ASTRONOMY → ASTRONOMICAL. Aquí en su sentido literal, no en el figurado de «desorbitado».' },
    { n: 2, root: 'INFER', a: 'INFERRED', p: 'Consonante doble + -ED', tip: 'INFER dobla la R porque el acento cae en la última sílaba: INFERRED. El sustantivo, INFERENCE, no la dobla.' },
    { n: 3, root: 'GRAVITY', a: 'GRAVITATIONAL', p: '-ATION + -AL', tip: 'GRAVITY → GRAVITATION → GRAVITATIONAL. Tres piezas encadenadas.' },
    { n: 4, root: 'ROTATE', a: 'ROTATION', p: '-ATE → -ATION', tip: 'ROTATE → ROTATION. Los verbos en -ATE pierden la E ante -ION.' },
    { n: 5, root: 'ACCOUNT', a: 'UNACCOUNTED', p: 'UN- + -ED', tip: 'ACCOUNT FOR → UNACCOUNTED FOR = sin explicación. Rige FOR, que aparece después.' },
    { n: 6, root: 'EMPIRICAL', a: 'EMPIRICALLY', p: '-ICAL → -ICALLY', tip: 'EMPIRICAL → EMPIRICALLY. La raíz ya acaba en -ICAL: sólo se añade -LY.' },
    { n: 7, root: 'THEORY', a: 'THEORETICAL', p: '-Y → -ETICAL', tip: 'THEORY → THEORETICAL. Aparece una T y el acento se desplaza a la tercera sílaba.' },
    { n: 8, root: 'RESOLVE', a: 'UNRESOLVED', p: 'UN- + -ED', tip: 'RESOLVE → RESOLVED → UNRESOLVED. Compará con RESOLUTION.' }
  ]
},

{
  id: 'w57',
  title: 'The Instrument Sets the Limit',
  focus: 'Sufijos de precisión y adjetivos de error',
  brief: 'SENSE→SENSITIVITY · CALIBRATE→CALIBRATION · SYSTEM→SYSTEMATIC · RANDOM→RANDOMLY · NEGLIGENT→NEGLIGIBLE · ACCUMULATE→ACCUMULATION · QUANTITY→QUANTIFIED · CERTAIN→UNCERTAINTIES',
  text: `Every measurement carries two kinds of error and confusing them is the commonest failure in experimental work. The {1} of an instrument sets a floor below which nothing can be distinguished from noise.

Above that floor, error divides. A {2} fault — a mirror a fraction out of true, a thermometer reading half a degree high — produces a {3} bias that no amount of repetition will remove. Taking a thousand readings with a badly set instrument yields a very precise wrong answer.

The other kind scatters {4}, and repetition does help: averaging reduces it in proportion to the square root of the number of readings. Errors of this sort become {5} long before the systematic ones do.

The two also differ in their {6}: random errors partially cancel, while systematic ones add. A modern paper reports both separately, each {7} with its own method, and the honest ones publish the {8} at greater length than the result.`,
  gaps: [
    { n: 1, root: 'SENSE', a: 'SENSITIVITY', p: '-ITIVE + -ITY', tip: 'SENSE → SENSITIVE → SENSITIVITY. No confundir con SENSIBILITY, que es la sensibilidad estética.' },
    { n: 2, root: 'CALIBRATE', a: 'CALIBRATION', p: '-ATE → -ATION', tip: 'CALIBRATE → CALIBRATION = calibración. Aquí como sustantivo antepuesto: «a calibration fault».' },
    { n: 3, root: 'SYSTEM', a: 'SYSTEMATIC', p: '-ATIC sobre sustantivo', tip: 'SYSTEM → SYSTEMATIC = sistemático, constante. Distinto de SYSTEMIC.' },
    { n: 4, root: 'RANDOM', a: 'RANDOMLY', p: '-LY sobre adjetivo', tip: 'RANDOM → RANDOMLY. Adverbio que modifica al verbo «scatters».' },
    { n: 5, root: 'NEGLIGENT', a: 'NEGLIGIBLE', p: '-IBLE con cambio de raíz', tip: 'NEGLIGENT (negligente) y NEGLIGIBLE (insignificante) comparten raíz y no significado. Aquí, despreciable.' },
    { n: 6, root: 'ACCUMULATE', a: 'ACCUMULATION', p: '-ATE → -ATION', tip: 'ACCUMULATE → ACCUMULATION. Doble C, una sola M. Tras el posesivo «their» hace falta sustantivo.' },
    { n: 7, root: 'QUANTITY', a: 'QUANTIFIED', p: '-IFY + -ED', tip: 'QUANTITY → QUANTIFY → QUANTIFIED. Los verbos en -IFY hacen -IFIED.' },
    { n: 8, root: 'CERTAIN', a: 'UNCERTAINTIES', p: 'UN- + -TY (plural)', tip: 'CERTAIN → CERTAINTY → UNCERTAINTY → UNCERTAINTIES. La Y pasa a IES.' }
  ]
},

{
  id: 'w58',
  title: 'A Telescope Made of Mathematics',
  focus: 'Sufijos de computación y adjetivos de escala',
  brief: 'COMPUTE→COMPUTATION · SYNTHESIS→SYNTHESISED · RESOLVE→RESOLUTION · COLLABORATE→COLLABORATION · SIMULTANEOUS→SIMULTANEOUSLY · PROCESS→PROCESSING · VERIFY→VERIFIABLE · REMARK→REMARKABLY',
  text: `The first image of a black hole was not photographed. It was reconstructed, by an enormous amount of {1}, from radio data gathered at eight observatories on four continents.

The array was {2} into a single virtual instrument the diameter of the Earth, which is the only way to obtain the angular {3} the target requires. No physical dish of the necessary size could be built or steered.

The {4} involved two hundred scientists and a decade of preparation. Every station recorded {5}, against atomic clocks, and the raw material amounted to several petabytes that had to be flown to the analysis centres because no network could carry it.

The {6} took two years and was deliberately duplicated: four independent teams, forbidden to compare notes, reconstructed the image separately so that the result would be {7} rather than merely agreed. That they converged on the same ring is what makes the picture {8} persuasive.`,
  gaps: [
    { n: 1, root: 'COMPUTE', a: 'COMPUTATION', p: '-UTE → -UTATION', tip: 'COMPUTE → COMPUTATION. Incontable aquí: cantidad de cálculo.' },
    { n: 2, root: 'SYNTHESIS', a: 'SYNTHESISED', alt: ['SYNTHESIZED'], p: '-ISE + -ED', tip: 'SYNTHESIS → SYNTHESISE → SYNTHESISED. El sustantivo acaba en -IS y el verbo en -ISE.' },
    { n: 3, root: 'RESOLVE', a: 'RESOLUTION', p: '-OLVE → -OLUTION', tip: 'RESOLVE → RESOLUTION. Aquí, resolución óptica. La V desaparece.' },
    { n: 4, root: 'COLLABORATE', a: 'COLLABORATION', p: '-ATE → -ATION', tip: 'COLLABORATE → COLLABORATION. Doble L de la raíz.' },
    { n: 5, root: 'SIMULTANEOUS', a: 'SIMULTANEOUSLY', p: '-EOUS + -LY', tip: 'SIMULTANEOUS → SIMULTANEOUSLY. -EOUS mantiene la E entera ante -LY.' },
    { n: 6, root: 'PROCESS', a: 'PROCESSING', p: '-ING sustantivado', tip: 'PROCESS → PROCESSING. Sustantivo incontable: el procesamiento.' },
    { n: 7, root: 'VERIFY', a: 'VERIFIABLE', p: '-Y → -IABLE', tip: 'VERIFY → VERIFIABLE. La Y pasa a I ante -ABLE.' },
    { n: 8, root: 'REMARK', a: 'REMARKABLY', p: '-ABLE → -ABLY', tip: 'REMARK → REMARKABLE → REMARKABLY. Modifica al adjetivo «persuasive».' }
  ]
},

{
  id: 'w59',
  title: 'Why the Sky Is Not Full of Light',
  focus: 'Sufijos de teoría y adjetivos de finitud',
  brief: 'FINITE→INFINITE · IMPLY→IMPLICATION · EXPAND→EXPANSION · OBSERVE→OBSERVABLE · INSTRUCT→INSTRUCTIVE · RESOLVE→RESOLUTION · DEMONSTRATE→DEMONSTRATION · SIGNIFY→SIGNIFICANCE',
  text: `If the universe were {1}, eternal and evenly filled with stars, every line of sight would eventually end on a stellar surface and the night sky would blaze in all directions. It does not, and working out why took three centuries.

The {2} of the darkness is that at least one of the three assumptions must be false. The answer, as it turned out, is that two of them are.

The universe has a finite age, so light from beyond a certain distance has not arrived. It is also in {3}, which redshifts distant light out of the visible band altogether. The {4} universe is therefore a sphere with an edge, and the edge is set by time rather than by geometry.

What makes the problem {5} is that it was stated clearly long before anybody could answer it, and that its {6} came from observation rather than from further argument. The darkness overhead is a {7} of cosmology, available to anybody who looks up, and its {8} is easy to miss for exactly that reason.`,
  gaps: [
    { n: 1, root: 'FINITE', a: 'INFINITE', p: 'IN- sobre adjetivo', tip: 'FINITE → INFINITE. Raíz latina, así que el negativo es IN-.' },
    { n: 2, root: 'IMPLY', a: 'IMPLICATION', p: '-Y → -ICATION', tip: 'IMPLY → IMPLICATION = lo que se sigue de algo.' },
    { n: 3, root: 'EXPAND', a: 'EXPANSION', p: '-ND → -NSION', tip: 'EXPAND → EXPANSION. La D se convierte en S.' },
    { n: 4, root: 'OBSERVE', a: 'OBSERVABLE', p: '-ABLE sobre verbo', tip: 'OBSERVE → OBSERVABLE. Cae la E. «The observable universe» es término técnico.' },
    { n: 5, root: 'INSTRUCT', a: 'INSTRUCTIVE', p: '-CT + -IVE', tip: 'INSTRUCT → INSTRUCTIVE = instructivo, revelador. Adjetivo tras «makes the problem».' },
    { n: 6, root: 'RESOLVE', a: 'RESOLUTION', p: '-OLVE → -OLUTION', tip: 'RESOLVE → RESOLUTION. La V desaparece, igual que en EVOLVE → REVOLUTION.' },
    { n: 7, root: 'DEMONSTRATE', a: 'DEMONSTRATION', p: '-ATE → -ATION', tip: 'DEMONSTRATE → DEMONSTRATION. Los verbos en -ATE pierden la E ante -ION.' },
    { n: 8, root: 'SIGNIFY', a: 'SIGNIFICANCE', p: '-ANT → -ANCE', tip: 'SIGNIFY → SIGNIFICANT → SIGNIFICANCE. Adjetivo en -ANT, sustantivo en -ANCE.' }
  ]
},

{
  id: 'w60',
  title: 'The Cost of a Kilogram',
  focus: 'Sufijos de definición y adjetivos de estabilidad',
  brief: 'DEFINE→DEFINITION · ARBITER→ARBITRARY · STABLE→STABILITY · REPRODUCE→REPRODUCIBLE · DEPEND→INDEPENDENT · PRECISE→PRECISION · CONSTANT→CONSTANTS · PRACTICE→IMPRACTICAL',
  text: `Until 2019 the kilogram was a lump of platinum-iridium in a vault outside Paris, and every other kilogram in the world was defined by reference to it. The {1} was circular in a way that made metrologists uncomfortable for over a century.

The cylinder was not {2}: it had been chosen with care in 1889. The difficulty was that its mass appeared to be drifting relative to the copies distributed to national laboratories, by a few tens of micrograms, and nobody could say which had changed.

A unit whose {3} cannot be verified is a unit with a problem, and it is not {4} in any useful sense. The replacement definition is {5} of any object: the kilogram is now fixed by the Planck constant, and a laboratory with the right equipment can realise it from first principles.

The {6} achieved is not, for most purposes, an improvement. What has been gained is that the definition rests on {7} of nature rather than on a artefact, and no vault is required. Building the apparatus, however, remains {8} for all but a handful of institutions.`,
  gaps: [
    { n: 1, root: 'DEFINE', a: 'DEFINITION', p: '-INE → -INITION', tip: 'DEFINE → DEFINITION. La I larga se acorta y la E cae.' },
    { n: 2, root: 'ARBITER', a: 'ARBITRARY', p: '-ARY con cambio de raíz', tip: 'ARBITER → ARBITRARY = arbitrario, sin fundamento. Se pierde la E de la raíz.' },
    { n: 3, root: 'STABLE', a: 'STABILITY', p: '-LE → -ILITY', tip: 'STABLE → STABILITY: la -LE pasa a -IL-. Igual que en STABILISE.' },
    { n: 4, root: 'REPRODUCE', a: 'REPRODUCIBLE', p: '-IBLE sobre verbo', tip: 'REPRODUCE → REPRODUCIBLE. Cae la E final.' },
    { n: 5, root: 'DEPEND', a: 'INDEPENDENT', p: 'IN- + -ENT', tip: 'DEPEND → DEPENDENT → INDEPENDENT. Rige OF, que aparece después.' },
    { n: 6, root: 'PRECISE', a: 'PRECISION', p: '-SE → -SION', tip: 'PRECISE → PRECISION. Con raíces en -SE la S ya está puesta.' },
    { n: 7, root: 'CONSTANT', a: 'CONSTANTS', p: 'Flexión de plural', af: 'inflection', tip: 'Aquí basta el plural del sustantivo dado. El sustantivo abstracto sería CONSTANCY.' },
    { n: 8, root: 'PRACTICE', a: 'IMPRACTICAL', p: 'IM- + -AL', tip: 'PRACTICE → PRACTICAL → IMPRACTICAL. Ante P el prefijo se vuelve IM-.' }
  ]
}

]);
