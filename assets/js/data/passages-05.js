/**
 * Passage bank 05 — health, medicine and the body.
 *
 * Clinical prose is unusually rich in -ION and -ITY nouns and in the -IC / -ICAL
 * adjective pair, and it gives the exam a natural place to test whether a
 * candidate can move between THERAPY and THERAPEUTIC, or IMMUNE and IMMUNITY.
 */
WC2.content.registerPassages([

{
  id: 'w21',
  title: 'The Microbes We Live With',
  focus: 'Adjetivos científicos y sufijos de proceso',
  brief: 'MICROBE→MICROBIAL · DIVERSE→DIVERSITY · PATHOGEN→PATHOGENIC · TOUCH→UNTOUCHED · FERMENT→FERMENTATION · INFLAME→INFLAMMATORY · PRESCRIBE→PRESCRIPTION · RESIST→RESISTANCE',
  text: `The human gut carries something in the order of forty trillion bacterial cells, and the {1} community they form is now understood to be less a passenger than an organ. Its {2} rather than its size appears to be what matters.

Only a small minority of these organisms are {3} under any circumstances. The rest train the developing immune system, synthesise vitamins the body cannot make, and process material that would otherwise pass through {4}. {5} in the colon produces short-chain fatty acids with measurable {6} effects.

The clinical consequences are still being worked out, and the popular literature has run some distance ahead of the evidence. What is not in doubt is that a broad-spectrum {7} clears the useful organisms along with the target, and that the population takes months to recover.

That, rather than {8} alone, is the strongest argument for prescribing less.`,
  gaps: [
    { n: 1, root: 'MICROBE', a: 'MICROBIAL', p: '-IAL sobre sustantivo', tip: 'MICROBE → MICROBIAL. Cae la E final.' },
    { n: 2, root: 'DIVERSE', a: 'DIVERSITY', p: '-ITY sobre adjetivo', tip: 'DIVERSE → DIVERSITY. Sujeto de «appears to be».' },
    { n: 3, root: 'PATHOGEN', a: 'PATHOGENIC', p: '-IC sobre sustantivo', tip: 'PATHOGEN → PATHOGENIC = patógeno, que causa enfermedad.' },
    { n: 4, root: 'TOUCH', a: 'UNTOUCHED', p: 'UN- + -ED', tip: 'TOUCH → TOUCHED → UNTOUCHED = sin tocar, intacto. Participio usado como adjetivo tras «pass through».' },
    { n: 5, root: 'FERMENT', a: 'FERMENTATION', p: 'Raíz + -ATION', tip: 'FERMENT → FERMENTATION. Como verbo el acento va al final; como sustantivo, al principio.' },
    { n: 6, root: 'INFLAME', a: 'INFLAMMATORY', p: '-ORY con doble M', tip: 'INFLAME → INFLAMMATION → INFLAMMATORY: la M se dobla. Aquí, antiinflamatorio por contexto.' },
    { n: 7, root: 'PRESCRIBE', a: 'PRESCRIPTION', p: '-SCRIBE → -SCRIPTION', tip: 'PRESCRIBE → PRESCRIPTION. La B se convierte en P.' },
    { n: 8, root: 'RESIST', a: 'RESISTANCE', p: '-ANCE sobre verbo', tip: 'RESIST → RESISTANT → RESISTANCE. Aquí, la resistencia a los antibióticos.' }
  ]
},

{
  id: 'w22',
  title: 'What the Diet Studies Cannot Show',
  focus: 'Sufijos de cualidad y adverbios de grado',
  brief: 'NUTRIENT→NUTRITION · CAUSE→CAUSAL · CONFOUND→CONFOUNDING · OBSERVE→OBSERVATIONAL · MODEST→MODESTLY · FAD→FADDISH · LONG→LONGEVITY · SCEPTIC→SCEPTICISM',
  text: `Almost everything the public believes about {1} rests on studies that cannot, by their design, establish a {2} link. Asking sixty thousand nurses what they ate in 1986 and following them for thirty years is a magnificent undertaking and it is not an experiment.

The difficulty is {3}. People who eat more vegetables also smoke less, walk more and earn more, and no statistical correction removes all of that. {4} work of this kind can only ever narrow the field of candidates.

Where trials have been run, the effects tend to be {5} positive rather than transformative, which is not what sells books. The gap between the modesty of the evidence and the confidence of the shelf explains most of what is {6} in the literature.

None of this argues for eating badly. It argues for treating claims about {7} with the same {8} one would apply to any other extraordinary assertion.`,
  gaps: [
    { n: 1, root: 'NUTRIENT', a: 'NUTRITION', p: 'Raíz + -ITION', tip: 'NUTRIENT → NUTRITION. Compará con MALNUTRITION, que le añade MAL-.' },
    { n: 2, root: 'CAUSE', a: 'CAUSAL', p: '-AL sobre sustantivo', tip: 'CAUSE → CAUSAL = causal. Cae la E final. Distinto de CASUAL, que es otra palabra.' },
    { n: 3, root: 'CONFOUND', a: 'CONFOUNDING', p: '-ING participial', tip: 'CONFOUND → CONFOUNDING. En estadística, un «confounding factor» es una variable que confunde el resultado.' },
    { n: 4, root: 'OBSERVE', a: 'OBSERVATIONAL', p: '-ATION + -AL', tip: 'OBSERVE → OBSERVATION → OBSERVATIONAL. Dos sufijos apilados.' },
    { n: 5, root: 'MODEST', a: 'MODESTLY', p: '-LY sobre adjetivo', tip: 'MODEST → MODESTLY. Adverbio que modifica al adjetivo «positive».' },
    { n: 6, root: 'FAD', a: 'FADDISH', p: '-ISH sobre sustantivo', tip: 'FAD → FADDISH: la D se dobla. -ISH añade un matiz despectivo.' },
    { n: 7, root: 'LONG', a: 'LONGEVITY', p: '-EVITY (irregular)', tip: 'LONG → LONGEVITY, del latín «longaevus». Nada que ver con LENGTH.' },
    { n: 8, root: 'SCEPTIC', a: 'SCEPTICISM', alt: ['SKEPTICISM'], p: '-ISM sobre sustantivo', tip: 'SCEPTIC → SCEPTICISM. En británico con SC-; en americano, SKEPTICISM.' }
  ]
},

{
  id: 'w23',
  title: 'The Placebo Problem',
  focus: 'Sufijos de método y adjetivos de fiabilidad',
  brief: 'THERAPY→THERAPEUTIC · MEASURE→MEASURABLE · SUBJECT→SUBJECTIVE · REPLICATE→REPLICATION · EXPECT→EXPECTATION · PSYCHOLOGY→PSYCHOLOGICAL · CONCLUDE→CONCLUSIVELY · METHOD→METHODOLOGICAL',
  text: `A sugar pill has no {1} properties whatever, and it reliably produces {2} changes in reported pain, in sleep quality and, less often, in blood pressure. This is not a failure of the patients; it is a real effect with a real mechanism.

The trouble it causes is methodological. Any outcome that is {3} — anything the patient reports rather than the instrument records — carries a placebo component that cannot be separated out except by blinding, and blinding is impossible for surgery and difficult for talking therapies.

{4} of placebo studies has been uneven, which is itself informative. The effect is strongest where {5} is highest: an injection outperforms a tablet, and a tablet from an expensive-looking box outperforms a plain one.

Whether the phenomenon is best described as {6} rather than physiological is a question the field has largely stopped asking, since the distinction dissolves under examination. What can be said {7} is that the {8} objections to ignoring it are decisive.`,
  gaps: [
    { n: 1, root: 'THERAPY', a: 'THERAPEUTIC', p: '-Y → -EUTIC', tip: 'THERAPY → THERAPEUTIC, con -EU- en medio. Formación irregular de origen griego.' },
    { n: 2, root: 'MEASURE', a: 'MEASURABLE', p: '-ABLE sobre verbo', tip: 'MEASURE → MEASURABLE. Cae la E. Compará con IMMEASURABLE.' },
    { n: 3, root: 'SUBJECT', a: 'SUBJECTIVE', p: '-CT + -IVE', tip: 'SUBJECT → SUBJECTIVE. Compará con OBJECTIVE, su opuesto.' },
    { n: 4, root: 'REPLICATE', a: 'REPLICATION', p: '-ATE → -ATION', tip: 'REPLICATE → REPLICATION. Sujeto de «has been uneven».' },
    { n: 5, root: 'EXPECT', a: 'EXPECTATION', p: 'Raíz + -ATION', tip: 'EXPECT → EXPECTATION. Sujeto de «is highest», así que incontable aquí.' },
    { n: 6, root: 'PSYCHOLOGY', a: 'PSYCHOLOGICAL', p: '-Y → -ICAL', tip: 'PSYCHOLOGY → PSYCHOLOGICAL. La P inicial es muda.' },
    { n: 7, root: 'CONCLUDE', a: 'CONCLUSIVELY', p: '-IVE + -LY', tip: 'CONCLUDE → CONCLUSIVE → CONCLUSIVELY. La D pasa a S.' },
    { n: 8, root: 'METHOD', a: 'METHODOLOGICAL', p: '-OLOGY + -ICAL', tip: 'METHOD → METHODOLOGY → METHODOLOGICAL. Tres piezas encadenadas.' }
  ]
},

{
  id: 'w24',
  title: 'Ageing Without Decline',
  focus: 'Sufijos de estado y prefijos de grado',
  brief: 'COGNITION→COGNITIVE · DECLINE→DECLINING · VITAL→VITALITY · HEREDITY→HEREDITARY · MOBILE→MOBILITY · FRAIL→FRAILTY · NOURISH→UNDERNOURISHMENT · REVERSE→REVERSIBLE',
  text: `The assumption that {1} decline is an inevitable feature of old age has not survived contact with the data. Average performance falls, certainly; but the average conceals a spread so wide that it is close to useless as a description of any individual.

What predicts a {2} trajectory is not chronological age but a cluster of other things: hearing loss, isolation, inactivity, and, with striking consistency, poor sleep. {3} in the ninth decade correlates far more strongly with these than with anything {4}.

The physical picture is similar. Loss of {5} is the single best predictor of the syndrome clinicians call {6}, and the loss usually begins with something small and fixable — a badly fitting shoe, a fear of falling, an undiagnosed case of {7}.

The practical conclusion is unglamorous and encouraging in equal measure: a substantial part of what looks like ageing is {8}, and the reversal costs very little.`,
  gaps: [
    { n: 1, root: 'COGNITION', a: 'COGNITIVE', p: '-ION → -IVE', tip: 'COGNITION → COGNITIVE. Se pierde el -ION.' },
    { n: 2, root: 'DECLINE', a: 'DECLINING', p: '-ING participial', tip: 'DECLINE → DECLINING. Cae la E ante -ING.' },
    { n: 3, root: 'VITAL', a: 'VITALITY', p: '-ITY sobre adjetivo', tip: 'VITAL → VITALITY = vitalidad, empuje. Sujeto de «correlates».' },
    { n: 4, root: 'HEREDITY', a: 'HEREDITARY', p: '-ITY → -ITARY', tip: 'HEREDITY → HEREDITARY. La Y pasa a AR: hereditar-y.' },
    { n: 5, root: 'MOBILE', a: 'MOBILITY', p: '-ITY sobre adjetivo', tip: 'MOBILE → MOBILITY. Cae la E final.' },
    { n: 6, root: 'FRAIL', a: 'FRAILTY', p: '-TY sobre adjetivo', tip: 'FRAIL → FRAILTY = fragilidad. En geriatría es un síndrome con nombre propio.' },
    { n: 7, root: 'NOURISH', a: 'UNDERNOURISHMENT', p: 'UNDER- + -MENT', tip: 'NOURISH → NOURISHMENT → UNDERNOURISHMENT. Más formal que MALNUTRITION.' },
    { n: 8, root: 'REVERSE', a: 'REVERSIBLE', p: '-IBLE sobre verbo', tip: 'REVERSE → REVERSIBLE. Compará con IRREVERSIBLE.' }
  ]
},

{
  id: 'w25',
  title: 'The Ethics Committee',
  focus: 'Sufijos de persona y adjetivos morales',
  brief: 'ETHIC→ETHICISTS · CONSENT→CONSENSUAL · EMBRYO→EMBRYONIC · INTERVENE→INTERVENTIONS · MODIFY→MODIFICATIONS · REGRET→REGRETTABLE · CAUTION→CAUTIONARY · ANTICIPATE→ANTICIPATION',
  text: `Every research hospital now keeps a committee of clinicians, lawyers and {1} whose function is to say no. The role is unpopular and structurally necessary, since the person best placed to see the benefit of a trial is the last person who should decide whether it is {2}.

The hardest cases are not the obvious ones. Nobody needs a committee to reject a plainly abusive protocol. The difficulty lies with work on {3} tissue, where the potential benefit is enormous, the harm is contested, and the {4} proposed cannot be undone.

Germline {5} sharpen this to a point. A change made to a somatic cell affects one patient; a change made to a germ cell affects everyone descended from that patient, none of whom can be consulted.

It would be {6} if the field were governed entirely by {7} tales. But a decision taken in {8} of consequences three generations away is not the same kind of decision as a dosing schedule, and the machinery has to reflect that.`,
  gaps: [
    { n: 1, root: 'ETHIC', a: 'ETHICISTS', p: '-IST sobre sustantivo', tip: 'ETHIC → ETHICIST. Aparece una I: ethi-c-ist.' },
    { n: 2, root: 'CONSENT', a: 'CONSENSUAL', p: '-UAL con cambio de raíz', tip: 'CONSENT → CONSENSUAL: la T pasa a S. Adjetivo tras «whether it is».' },
    { n: 3, root: 'EMBRYO', a: 'EMBRYONIC', p: '-NIC sobre sustantivo', tip: 'EMBRYO → EMBRYONIC. Aparece una N.' },
    { n: 4, root: 'INTERVENE', a: 'INTERVENTIONS', p: '-VENE → -VENTION', tip: 'INTERVENE → INTERVENTION. Plural por «cannot be undone» referido a varias.' },
    { n: 5, root: 'MODIFY', a: 'MODIFICATIONS', p: '-FY → -FICATION', tip: 'MODIFY → MODIFICATION. Todos los verbos en -FY hacen -FICATION.' },
    { n: 6, root: 'REGRET', a: 'REGRETTABLE', p: 'Consonante doble + -ABLE', tip: 'REGRET dobla la T porque el acento cae en la última sílaba.' },
    { n: 7, root: 'CAUTION', a: 'CAUTIONARY', p: '-ARY sobre sustantivo', tip: 'CAUTION → CAUTIONARY. A CAUTIONARY TALE es colocación fija.' },
    { n: 8, root: 'ANTICIPATE', a: 'ANTICIPATION', p: '-ATE → -ATION', tip: 'IN ANTICIPATION OF = en previsión de. Frase preposicional fija.' }
  ]
}

]);
