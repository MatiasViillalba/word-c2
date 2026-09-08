/**
 * Passage bank 09 — work, money and what things cost.
 *
 * Economic prose is where -ITY and -ISM meet the prefixes of degree, and where
 * the exam most often asks for a long chain: PRODUCE → PRODUCTIVE →
 * PRODUCTIVITY, AFFORD → AFFORDABLE → AFFORDABILITY.
 */
WC2.content.registerPassages([

{
  id: 'w41',
  title: 'The Productivity Puzzle',
  focus: 'Cadenas largas y adjetivos de medida',
  brief: 'PRODUCE→PRODUCTIVITY · MEASURE→MEASUREMENT · STAGNANT→STAGNATED · INVEST→INVESTMENT · AUTOMATIC→AUTOMATION · EXPLAIN→EXPLANATION · PERSIST→PERSISTENT · SATISFY→SATISFACTORY',
  text: `{1} in most advanced economies has barely moved since 2008, and no account of why commands general assent. The puzzle is real, and it is not an artefact of bad data, though {2} certainly plays a part.

Output per hour {3} at almost exactly the moment when the technologies that were supposed to transform it became universal. Everybody in the economy acquired a device of extraordinary power, and the aggregate figures registered nothing at all.

{4} in equipment and training fell sharply after the crisis and has never fully recovered, which is one candidate. {5} may be displacing labour into low-productivity service work, which is another. Neither {6} accounts for the timing in every country.

What is not in dispute is that the slowdown is {7} rather than cyclical, and that compound growth of two per cent versus half a per cent produces radically different countries within a generation. No {8} answer has emerged, and the absence of one is itself worth noticing.`,
  gaps: [
    { n: 1, root: 'PRODUCE', a: 'PRODUCTIVITY', p: '-IVE + -ITY', tip: 'PRODUCE → PRODUCTIVE → PRODUCTIVITY. Tres pasos desde el verbo.' },
    { n: 2, root: 'MEASURE', a: 'MEASUREMENT', p: '-MENT sobre verbo', tip: 'MEASURE → MEASUREMENT. La E se conserva ante -MENT.' },
    { n: 3, root: 'STAGNANT', a: 'STAGNATED', p: '-ATE + -ED', tip: 'STAGNANT → STAGNATE → STAGNATED = se estancó. El adjetivo da el verbo.' },
    { n: 4, root: 'INVEST', a: 'INVESTMENT', p: '-MENT sobre verbo', tip: 'INVEST → INVESTMENT. Sujeto de «fell», así que incontable aquí.' },
    { n: 5, root: 'AUTOMATIC', a: 'AUTOMATION', p: 'Raíz + -ATION', tip: 'AUTOMATIC → AUTOMATE → AUTOMATION. El adjetivo da el verbo y el verbo el sustantivo.' },
    { n: 6, root: 'EXPLAIN', a: 'EXPLANATION', p: '-ATION con pérdida de la I', tip: 'EXPLAIN → EXPLANATION: se pierde la I del verbo. Compará con EXPLANATORY.' },
    { n: 7, root: 'PERSIST', a: 'PERSISTENT', p: '-ENT adjetival', tip: 'PERSIST → PERSISTENT. El sustantivo es PERSISTENCE y el adverbio PERSISTENTLY.' },
    { n: 8, root: 'SATISFY', a: 'SATISFACTORY', p: '-ACTORY (irregular)', tip: 'SATISFY → SATISFACTION → SATISFACTORY. El adverbio es SATISFACTORILY.' }
  ]
},

{
  id: 'w42',
  title: 'Everything Is a Subscription Now',
  focus: 'Sufijos de comercio y prefijos de repetición',
  brief: 'SUBSCRIBE→SUBSCRIPTION · OWN→OWNERSHIP · RECUR→RECURRING · PREDICT→PREDICTABLE · CONSUME→CONSUMERS · CANCEL→CANCELLATION · DELIBERATE→DELIBERATELY · ERODE→EROSION',
  text: `The shift from selling a product once to renting it monthly is the most consequential change in retail since self-service, and it happened almost without comment. A {1} converts a customer into an annuity.

For the seller the attraction is obvious: {2} of a physical object ends the relationship, whereas a {3} charge continues it indefinitely and makes revenue {4} enough to borrow against.

For {5} the calculation is less clear. Access is cheaper at the outset and dearer over any long horizon, and the point at which the two lines cross is rarely advertised. {6} is generally possible and is generally made {7} awkward: three screens, a retention offer, a telephone number.

What is being lost is not money so much as the ability to own a thing outright and keep it working. The {8} of that possibility has been gradual enough that most people have not noticed it happening.`,
  gaps: [
    { n: 1, root: 'SUBSCRIBE', a: 'SUBSCRIPTION', p: '-SCRIBE → -SCRIPTION', tip: 'SUBSCRIBE → SUBSCRIPTION. La B se convierte en P, como en PRESCRIPTION.' },
    { n: 2, root: 'OWN', a: 'OWNERSHIP', p: '-ER + -SHIP', tip: 'OWN → OWNER → OWNERSHIP. Dos sufijos apilados.' },
    { n: 3, root: 'RECUR', a: 'RECURRING', p: 'Consonante doble + -ING', tip: 'RECUR dobla la R porque el acento cae en la última sílaba: RECURRING.' },
    { n: 4, root: 'PREDICT', a: 'PREDICTABLE', p: '-ABLE sobre verbo', tip: 'PREDICT → PREDICTABLE. Adjetivo tras «makes revenue».' },
    { n: 5, root: 'CONSUME', a: 'CONSUMERS', p: '-ER sobre verbo', tip: 'CONSUME → CONSUMER. Cae la E. Compará con CONSUMPTION y CONSUMERISM.' },
    { n: 6, root: 'CANCEL', a: 'CANCELLATION', p: 'Doble L + -ATION', tip: 'CANCEL → CANCELLATION: la L se dobla en británico. En americano, CANCELATION.' },
    { n: 7, root: 'DELIBERATE', a: 'DELIBERATELY', p: '-LY sobre adjetivo', tip: 'DELIBERATE → DELIBERATELY. Adverbio que modifica al adjetivo «awkward».' },
    { n: 8, root: 'ERODE', a: 'EROSION', p: '-DE → -SION', tip: 'ERODE → EROSION. Vale para la costa y, como aquí, para lo abstracto.' }
  ]
},

{
  id: 'w43',
  title: 'The Four-Day Week, Measured',
  focus: 'Sufijos de resultado y adverbios de grado',
  brief: 'EMPLOY→EMPLOYEES · PUT→OUTPUT · SCEPTIC→SCEPTICAL · RETAIN→RETENTION · SIGNIFY→SIGNIFICANTLY · EXHAUST→EXHAUSTION · GENERAL→GENERALISE · CAUTION→CAUTIOUS',
  text: `Sixty firms, three thousand {1}, six months, and one instruction: keep pay the same and cut the week to four days. The trial was designed by people who expected it to work, which is a weakness, and it was measured by people who did not, which is a partial remedy.

{2} did not fall. That is the headline, and it survives fairly hard examination. Managers who had been {3} beforehand reported, mostly, that the fifth day had been absorbing work that expanded to fill it.

Staff {4} improved {5}, and self-reported {6} fell by roughly two thirds. Both are cheap outcomes to produce in a trial that everybody wants to succeed, and both should be treated carefully.

It would be wrong to {7} from sixty self-selected firms, most of them small and none of them running a hospital or a shift-based factory. A {8} reading is that the arrangement suits knowledge work and has not yet been tested anywhere else.`,
  gaps: [
    { n: 1, root: 'EMPLOY', a: 'EMPLOYEES', p: '-EE (paciente)', tip: 'EMPLOY → EMPLOYEE = el empleado, quien recibe la acción. Su par activo es EMPLOYER.' },
    { n: 2, root: 'PUT', a: 'OUTPUT', p: 'Compuesto OUT + PUT', tip: 'OUT + PUT = producción, rendimiento. El acento va en OUT.' },
    { n: 3, root: 'SCEPTIC', a: 'SCEPTICAL', alt: ['SKEPTICAL'], p: '-IC → -ICAL', tip: 'SCEPTIC → SCEPTICAL. En británico con SC-; en americano, SKEPTICAL.' },
    { n: 4, root: 'RETAIN', a: 'RETENTION', p: '-AIN → -ENTION', tip: 'RETAIN → RETENTION: el diptongo AI se vuelve E. Igual que MAINTAIN → MAINTENANCE.' },
    { n: 5, root: 'SIGNIFY', a: 'SIGNIFICANTLY', p: '-ANT + -LY', tip: 'SIGNIFY → SIGNIFICANT → SIGNIFICANTLY. La Y del verbo desaparece.' },
    { n: 6, root: 'EXHAUST', a: 'EXHAUSTION', p: 'Raíz + -ION', tip: 'EXHAUST → EXHAUSTION = agotamiento. Compará con EXHAUSTING y EXHAUSTIVE.' },
    { n: 7, root: 'GENERAL', a: 'GENERALISE', alt: ['GENERALIZE'], p: '-ISE sobre adjetivo', tip: 'GENERAL → GENERALISE. Tras «wrong to» va infinitivo sin cambios.' },
    { n: 8, root: 'CAUTION', a: 'CAUTIOUS', p: '-ION → -IOUS', tip: 'CAUTION → CAUTIOUS. Los sustantivos en -ION suelen dar adjetivos en -IOUS.' }
  ]
},

{
  id: 'w44',
  title: 'Where the Clothes Go',
  focus: 'Sufijos de producción y adjetivos de exceso',
  brief: 'PRODUCE→OVERPRODUCTION · DISPOSE→DISPOSAL · EXPLOIT→EXPLOITATION · LABOUR→LABOURERS · TRANSPARENT→TRANSPARENCY · ENVIRONMENT→ENVIRONMENTALLY · COMMODITY→COMMODIFIED · REGULATE→UNREGULATED',
  text: `The industry manufactures something in the order of a hundred billion garments a year for a population of eight billion people, and the resulting {1} has to go somewhere. A large fraction is never sold at all.

{2} of unsold stock was, until recently, a matter firms declined to discuss. Incineration was standard, because it protects the brand and costs less than storage.

The labour side has been examined more thoroughly. Documented {3} in the supply chain has produced two decades of audits, codes and undertakings, and conditions for the {4} at the bottom have improved unevenly at best. {5} stops at the second tier: firms know their factories and not their factories' subcontractors.

The environmental accounting is worse still, because nobody agrees what to count. A garment worn twice is {6} ruinous whatever its material. The deeper problem is that clothing has been so thoroughly {7} that the question of durability has dropped out of the design brief altogether, in a market that remains almost entirely {8}.`,
  gaps: [
    { n: 1, root: 'PRODUCE', a: 'OVERPRODUCTION', p: 'OVER- + -TION', tip: 'PRODUCE → PRODUCTION → OVERPRODUCTION. OVER- = más de la cuenta.' },
    { n: 2, root: 'DISPOSE', a: 'DISPOSAL', p: '-AL sobre verbo', tip: 'DISPOSE → DISPOSAL. La E cae. Ojo: no es *disposement.' },
    { n: 3, root: 'EXPLOIT', a: 'EXPLOITATION', p: 'Raíz + -ATION', tip: 'EXPLOIT → EXPLOITATION. La raíz no cambia ni una letra.' },
    { n: 4, root: 'LABOUR', a: 'LABOURERS', p: '-ER sobre sustantivo', tip: 'LABOUR → LABOURER. Ortografía británica con -OUR.' },
    { n: 5, root: 'TRANSPARENT', a: 'TRANSPARENCY', p: '-ENT → -ENCY', tip: 'TRANSPARENT → TRANSPARENCY. -ENT da -ENCY sin excepción.' },
    { n: 6, root: 'ENVIRONMENT', a: 'ENVIRONMENTALLY', p: '-AL → -ALLY', tip: 'ENVIRONMENT → ENVIRONMENTAL → ENVIRONMENTALLY. Doble L.' },
    { n: 7, root: 'COMMODITY', a: 'COMMODIFIED', p: '-IFY + -ED', tip: 'COMMODITY → COMMODIFY → COMMODIFIED. Los verbos en -IFY hacen -IFIED.' },
    { n: 8, root: 'REGULATE', a: 'UNREGULATED', p: 'UN- + -ED', tip: 'REGULATE → REGULATED → UNREGULATED.' }
  ]
},

{
  id: 'w45',
  title: 'The Price of a Quiet Street',
  focus: 'Sufijos de valor y adjetivos de comparación',
  brief: 'VALUE→INVALUABLE · QUANTITY→QUANTIFY · SUBJECT→SUBJECTIVE · PREFER→PREFERENCES · APPROXIMATE→APPROXIMATION · CONTEST→CONTESTED · DEFEND→INDEFENSIBLE · MODEST→MODESTY',
  text: `Economists are frequently accused of putting a price on things that are {1}, and the accusation is fair only if one misunderstands what the exercise is for. Nobody claims that a view or a birdsong has a market value. The claim is narrower: that decisions about them are being made anyway, and that refusing to {2} leaves the choice to whoever shouts loudest.

The methods are frankly crude. Asking people what they would pay to avoid aircraft noise produces answers that are wildly {3} and vary with the weather. Inferring the same figure from house prices captures revealed {4} and confounds them with everything else about the street.

Each technique yields an {5}, and every practitioner says so. The results are routinely {6} and should be.

What would be genuinely {7} is the alternative: pretending that a road scheme has no cost because the cost falls on something nobody has priced. The discipline's chief failing here is not arrogance but a shortage of {8} in how the numbers are reported.`,
  gaps: [
    { n: 1, root: 'VALUE', a: 'INVALUABLE', p: 'IN- + -ABLE', tip: 'Trampa: INVALUABLE significa «inestimable, valiosísimo», no «sin valor». Lo sin valor es WORTHLESS.' },
    { n: 2, root: 'QUANTITY', a: 'QUANTIFY', p: '-IFY sobre sustantivo', tip: 'QUANTITY → QUANTIFY = cuantificar. Se pierde el -ITY.' },
    { n: 3, root: 'SUBJECT', a: 'SUBJECTIVE', p: '-CT + -IVE', tip: 'SUBJECT → SUBJECTIVE. Compará con OBJECTIVE y SUBJECTIVITY.' },
    { n: 4, root: 'PREFER', a: 'PREFERENCES', p: '-ENCE sobre verbo', tip: 'PREFER → PREFERENCE: una sola R, aunque PREFERRED lleve dos.' },
    { n: 5, root: 'APPROXIMATE', a: 'APPROXIMATION', p: '-ATE → -ATION', tip: 'APPROXIMATE → APPROXIMATION. Doble P en la raíz.' },
    { n: 6, root: 'CONTEST', a: 'CONTESTED', p: '-ED participial', tip: 'CONTEST → CONTESTED = discutido, impugnado. Participio tras «are routinely».' },
    { n: 7, root: 'DEFEND', a: 'INDEFENSIBLE', p: 'IN- + -IBLE', tip: 'DEFEND → DEFENSIBLE → INDEFENSIBLE. La D pasa a S.' },
    { n: 8, root: 'MODEST', a: 'MODESTY', p: '-Y sobre adjetivo', tip: 'MODEST → MODESTY = modestia, mesura. Tras «a shortage of» hace falta sustantivo.' }
  ]
}

]);
