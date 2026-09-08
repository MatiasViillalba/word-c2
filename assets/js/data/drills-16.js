/**
 * Drill bank 16 — -AL, -IAL, -ARY and -ORY.
 *
 * All four mean roughly "relating to", and the choice between them is decided
 * by the stem, not by the sense. -AL is the default; -IAL appears after a stem
 * that ends in a vowel sound or in -CE / -CY (INFLUENCE → INFLUENTIAL,
 * POTENCY → POTENTIAL, where the C turns into T); -ARY and -ORY are Latin
 * leftovers on a closed list.
 *
 * Two of these stems are the classic traps: CONTINUE gives both CONTINUAL and
 * CONTINUOUS with different meanings, and EXPLAIN gives EXPLANATORY, losing the
 * I of the verb.
 */
WC2.content.registerDrills([

/* ---- -AL ------------------------------------------------------------------ */
{ id: 'd0729', root: 'FOCUS', a: 'FOCAL', p: '-AL sobre sustantivo', src: 'Adjetivos de relación', s: 'The fountain is the {1} point of the whole square.', tip: 'FOCUS → FOCAL: se pierde el -US latino. A FOCAL POINT es colocación fija.' },
{ id: 'd0730', root: 'REGION', a: 'REGIONAL', p: '-AL sobre sustantivo', src: 'Adjetivos de relación', s: 'The dish has half a dozen {1} variations.', tip: 'REGION → REGIONAL. Raíz intacta más -AL.' },
{ id: 'd0731', root: 'CULTURE', a: 'CULTURAL', p: '-AL sobre sustantivo', src: 'Adjetivos de relación', s: 'The quarter was rebranded as a {1} district in 2004.', tip: 'CULTURE → CULTURAL. Cae la E final.' },
{ id: 'd0732', root: 'DETRIMENT', a: 'DETRIMENTAL', p: '-AL sobre sustantivo', src: 'Adjetivos de relación', s: 'Prolonged noise of that kind is {1} to concentration.', tip: 'DETRIMENT → DETRIMENTAL TO = perjudicial para. Rige TO.' },
{ id: 'd0733', root: 'ELEMENT', a: 'ELEMENTAL', p: '-AL sobre sustantivo', src: 'Adjetivos de relación', s: 'The paintings have an {1} force that photographs never capture.', tip: 'ELEMENTAL = elemental en el sentido de primario y poderoso. ELEMENTARY es «básico, sencillo».' },
{ id: 'd0734', root: 'ENVIRONMENT', a: 'ENVIRONMENTAL', p: '-AL sobre sustantivo', src: 'Adjetivos de relación', s: 'An {1} assessment was required before any work began.', tip: 'ENVIRONMENT → ENVIRONMENTAL. El adverbio es ENVIRONMENTALLY.' },
{ id: 'd0735', root: 'GENERATION', a: 'GENERATIONAL', p: '-AL sobre sustantivo', src: 'Adjetivos de relación', s: 'The split was {1} rather than ideological.', tip: 'GENERATION → GENERATIONAL. Sobre un sustantivo que ya lleva -ATION.' },
{ id: 'd0736', root: 'OBSERVE', a: 'OBSERVATIONAL', p: '-ATION + -AL', src: 'Adjetivos de relación', s: 'The evidence is {1} rather than experimental.', tip: 'OBSERVE → OBSERVATION → OBSERVATIONAL. Dos sufijos apilados.' },
{ id: 'd0737', root: 'EXCEPT', a: 'EXCEPTIONAL', p: '-ION + -AL', src: 'Adjetivos de relación', s: 'The circumstances were, everyone agreed, {1}.', tip: 'EXCEPT → EXCEPTION → EXCEPTIONAL. El adverbio es EXCEPTIONALLY.' },
{ id: 'd0738', root: 'COMMUNITY', a: 'COMMUNAL', p: '-AL con pérdida de raíz', src: 'Adjetivos de relación', s: 'The flats share a {1} garden at the rear.', tip: 'COMMUNITY → COMMUNAL: se pierde el -ITY. No es *communital.' },
{ id: 'd0739', root: 'CONTINUE', a: 'CONTINUAL', p: '-AL sobre verbo', src: 'Adjetivos de relación', s: '{1} interruptions made any sustained work impossible.', tip: 'CONTINUAL = repetido con interrupciones; CONTINUOUS = sin pausa. La distinción se examina.' },
{ id: 'd0740', root: 'BEHAVE', a: 'BEHAVIOURAL', p: '-IOUR + -AL', src: 'Adjetivos de relación', s: 'The therapy takes a strictly {1} approach.', tip: 'BEHAVE → BEHAVIOUR → BEHAVIOURAL. Ortografía británica con -OUR.' },
{ id: 'd0741', root: 'NOCTURNE', a: 'NOCTURNAL', p: '-AL sobre sustantivo', src: 'Adjetivos de relación', s: 'Most of the island mammals are strictly {1}.', tip: 'NOCTURNE → NOCTURNAL = nocturno. Cae la E final.' },
{ id: 'd0742', root: 'TRADITION', a: 'TRADITIONAL', p: '-AL sobre sustantivo', src: 'Ampliación C2', s: 'The recipe is {1} to the valley and found nowhere else.', tip: 'TRADITION → TRADITIONAL → TRADITIONALLY → TRADITIONALIST. Una raíz, tres derivados.' },
{ id: 'd0743', root: 'MARGIN', a: 'MARGINAL', p: '-AL sobre sustantivo', src: 'Ampliación C2', s: 'The effect on the overall figure was {1}.', tip: 'MARGIN → MARGINAL. Compará con MARGINALISATION.' },
{ id: 'd0744', root: 'ORIGIN', a: 'ORIGINAL', p: '-AL sobre sustantivo', src: 'Ampliación C2', s: 'Only the {1} west door survives.', tip: 'ORIGIN → ORIGINAL → ORIGINALITY. El acento se desplaza en el tercer paso.' },
{ id: 'd0745', root: 'INSTITUTION', a: 'INSTITUTIONAL', p: '-AL sobre sustantivo', src: 'Ampliación C2', s: 'The report identified {1} failures at every level.', tip: 'INSTITUTION → INSTITUTIONAL. Como GENERATIONAL, sobre un -TION.' },
{ id: 'd0746', root: 'OCCASION', a: 'OCCASIONAL', p: '-AL sobre sustantivo', src: 'Ampliación C2', s: 'Apart from the {1} lorry, the road was empty.', tip: 'OCCASION → OCCASIONAL → OCCASIONALLY. Doble C, una sola S.' },

/* ---- -IAL ----------------------------------------------------------------- */
{ id: 'd0747', root: 'INFLUENCE', a: 'INFLUENTIAL', p: '-CE → -TIAL', src: 'Adjetivos de relación', s: 'Hers was the most {1} essay of the decade.', tip: 'INFLUENCE → INFLUENTIAL: la C se convierte en T. Regla constante en esta familia.' },
{ id: 'd0748', root: 'CONSEQUENCE', a: 'CONSEQUENTIAL', p: '-CE → -TIAL', src: 'Adjetivos de relación', s: 'The change looked minor but proved highly {1}.', tip: 'CONSEQUENCE → CONSEQUENTIAL. Misma conversión de C en T.' },
{ id: 'd0775', root: 'POTENCY', a: 'POTENTIAL', p: '-CY → -TIAL', src: 'Adjetivos de relación', s: 'The site was identified early on as a {1} flood risk.', tip: 'POTENCY → POTENTIAL. La C pasa a T. Compará con POTENT.' },
{ id: 'd0749', root: 'EXPERIENCE', a: 'EXPERIENTIAL', p: '-CE → -TIAL', src: 'Adjetivos de relación', s: 'The course is built around {1} learning.', tip: 'EXPERIENCE → EXPERIENTIAL = basado en la experiencia directa.' },
{ id: 'd0750', root: 'CONTROVERSY', a: 'CONTROVERSIAL', p: '-Y → -IAL', src: 'Adjetivos de relación', s: 'The appointment was {1} from the moment it was announced.', tip: 'CONTROVERSY → CONTROVERSIAL. La Y desaparece.' },
{ id: 'd0751', root: 'COLONY', a: 'COLONIAL', p: '-Y → -IAL', src: 'Adjetivos de relación', s: 'The museum has begun to confront its {1} holdings.', tip: 'COLONY → COLONIAL. Igual que CONTROVERSY → CONTROVERSIAL.' },
{ id: 'd0752', root: 'AUTHOR', a: 'AUTHORIAL', p: '-IAL sobre sustantivo', src: 'Adjetivos de relación', s: 'The novel keeps {1} comment to an absolute minimum.', tip: 'AUTHOR → AUTHORIAL = del autor, autorial. Distinto de AUTHORITATIVE.' },
{ id: 'd0753', root: 'MICROBE', a: 'MICROBIAL', p: '-IAL sobre sustantivo', src: 'Adjetivos de relación', s: 'The gut {1} community shifts within days of a change of diet.', tip: 'MICROBE → MICROBIAL. Cae la E final.' },
{ id: 'd0754', root: 'FINANCE', a: 'FINANCIAL', p: '-CE → -CIAL', src: 'Ampliación C2', s: 'The trust ran into serious {1} difficulty in 2011.', tip: 'FINANCE → FINANCIAL. Aquí la C se conserva y suena /ʃ/.' },
{ id: 'd0755', root: 'BENEFIT', a: 'BENEFICIAL', p: '-CIAL sobre sustantivo', src: 'Ampliación C2', s: 'A short daily walk is more {1} than an occasional long one.', tip: 'BENEFIT → BENEFICIAL. La T pasa a C. Rige TO o FOR.' },
{ id: 'd0756', root: 'SUBSTANCE', a: 'SUBSTANTIAL', p: '-CE → -TIAL', src: 'Ampliación C2', s: 'A {1} part of the collection was sold to cover the debt.', tip: 'SUBSTANCE → SUBSTANTIAL. La C pasa a T, como en INFLUENTIAL.' },
{ id: 'd0757', root: 'ESSENCE', a: 'ESSENTIAL', p: '-CE → -TIAL', src: 'Ampliación C2', s: 'Natural light was {1} to the whole design.', tip: 'ESSENCE → ESSENTIAL. Misma conversión.' },
{ id: 'd0758', root: 'RESIDE', a: 'RESIDENTIAL', p: '-ENT + -IAL', src: 'Ampliación C2', s: 'The site was rezoned for {1} use in the 1990s.', tip: 'RESIDE → RESIDENT → RESIDENTIAL. Compará con RESIDENTS.' },

/* ---- -ARY ----------------------------------------------------------------- */
{ id: 'd0759', root: 'CAUTION', a: 'CAUTIONARY', p: '-ARY sobre sustantivo', src: 'Adjetivos de relación', s: 'The episode is usually told as a {1} tale.', tip: 'CAUTION → CAUTIONARY. A CAUTIONARY TALE es colocación fija.' },
{ id: 'd0760', root: 'HEREDITY', a: 'HEREDITARY', p: '-ITY → -ITARY', src: 'Adjetivos de relación', s: 'The condition is {1} but does not always present.', tip: 'HEREDITY → HEREDITARY. La Y pasa a AR: hereditar-y.' },
{ id: 'd0761', root: 'REVOLT', a: 'REVOLUTIONARY', p: '-UTION + -ARY', src: 'Adjetivos de relación', s: 'The technique was genuinely {1} when it was first published.', tip: 'REVOLT → REVOLUTION → REVOLUTIONARY. Dos sufijos apilados.' },
{ id: 'd0762', root: 'RUDIMENTS', a: 'RUDIMENTARY', p: '-ARY sobre sustantivo', src: 'Adjetivos de relación', s: 'His grasp of the language was {1} at best.', tip: 'RUDIMENTS → RUDIMENTARY = rudimentario, básico.' },
{ id: 'd0763', root: 'NEED', a: 'NECESSARY', p: 'Raíz supletiva', src: 'Adjetivos de relación', s: 'It is not {1} to book, but it is advisable.', tip: 'NEED y NECESSARY no comparten forma: son raíces distintas para el mismo campo. El adverbio es NECESSARILY.' },
{ id: 'd0764', root: 'IMAGINE', a: 'IMAGINARY', p: '-ARY sobre verbo', src: 'Ampliación C2', s: 'The border is entirely {1} and yet perfectly real in law.', tip: 'IMAGINE → IMAGINARY = imaginario. Distinto de IMAGINATIVE, que es «con imaginación».' },
{ id: 'd0765', root: 'CUSTOM', a: 'CUSTOMARY', p: '-ARY sobre sustantivo', src: 'Ampliación C2', s: 'It is {1} to leave the last dance to the founders.', tip: 'CUSTOM → CUSTOMARY = habitual, de costumbre.' },
{ id: 'd0766', root: 'COMPLEMENT', a: 'COMPLEMENTARY', p: '-ARY sobre sustantivo', src: 'Ampliación C2', s: 'The two approaches are {1} rather than rival.', tip: 'COMPLEMENT → COMPLEMENTARY = que completa. No confundir con COMPLIMENTARY = gratuito o halagador.' },

/* ---- -ORY ----------------------------------------------------------------- */
{ id: 'd0767', root: 'EXPLAIN', a: 'EXPLANATORY', p: '-ORY con pérdida de la I', src: 'Adjetivos de relación', s: 'A short {1} note is printed on the back of each card.', tip: 'EXPLAIN → EXPLANATION → EXPLANATORY: se pierde la I del verbo. No es *explainatory.' },
{ id: 'd0768', root: 'INFLAME', a: 'INFLAMMATORY', p: '-ORY con doble M', src: 'Adjetivos de relación', s: 'The article was condemned as deliberately {1}.', tip: 'INFLAME → INFLAMMATION → INFLAMMATORY: la M se dobla. Vale para lo médico y para lo retórico.' },
{ id: 'd0769', root: 'MIGRATE', a: 'MIGRATORY', p: '-ATE → -ATORY', src: 'Adjetivos de relación', s: '{1} birds use the estuary as a staging post.', tip: 'MIGRATE → MIGRATORY. Se pierde la E y entra -ORY.' },
{ id: 'd0770', root: 'OBSERVE', a: 'OBSERVATORIES', af: '-ory', p: '-ATORY (sustantivo de lugar)', src: 'Adjetivos de relación', s: 'Two mountain {1} were built within a decade of each other.', tip: 'OBSERVE → OBSERVATORY = observatorio. Aquí -ORY nombra el lugar donde se hace la acción.' },
{ id: 'd0771', root: 'SATISFY', a: 'SATISFACTORY', p: '-ACTORY (irregular)', src: 'Ampliación C2', s: 'No {1} explanation has ever been offered.', tip: 'SATISFY → SATISFACTION → SATISFACTORY. El adverbio es SATISFACTORILY.' },
{ id: 'd0772', root: 'COMPEL', a: 'COMPULSORY', p: '-ORY con cambio de raíz', src: 'Ampliación C2', s: 'Attendance at the first session is {1}.', tip: 'COMPEL → COMPULSION → COMPULSORY = obligatorio. La E pasa a U.' },
{ id: 'd0773', root: 'CONTRADICT', a: 'CONTRADICTORY', p: '-ORY sobre verbo', src: 'Ampliación C2', s: 'The two accounts are flatly {1}.', tip: 'CONTRADICT → CONTRADICTORY. Se añade -ORY sin cambios.' },
{ id: 'd0774', root: 'INTRODUCE', a: 'INTRODUCTORY', p: '-DUCE → -DUCTORY', src: 'Ampliación C2', s: 'The {1} chapter can safely be skipped.', tip: 'INTRODUCE → INTRODUCTION → INTRODUCTORY. La misma raíz reformada.' }

]);
