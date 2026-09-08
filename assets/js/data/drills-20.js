/**
 * Drill bank 20 — verbs, compounds and irregular stems.
 *
 * Three groups the other banks could not hold.
 *
 * Verb-forming suffixes are few and worth knowing outright: -ISE turns a noun
 * or adjective into a process, -IFY into a causing, -EN into a becoming, -ATE
 * into a doing. Cambridge accepts -ISE and -IZE, but not both in one paper.
 *
 * Compounds are the group candidates least expect, because nothing is added at
 * all: two whole words are welded. PLAY + WRIGHT, WILD + LIFE, DEAD + LINE.
 *
 * Irregular stems are the ones that simply have to be known. CONCEIVE gives
 * CONCEPT, REASON gives RATIONALE, WELL gives WELFARE, and no rule predicts it.
 */
WC2.content.registerDrills([

/* ---- -ISE / -IZE : el sufijo que crea procesos ---------------------------- */
{ id: 'd0923', root: 'MODERN', a: 'MODERNISE', alt: ['MODERNIZE'], p: '-ISE sobre adjetivo', src: 'Verbos derivados', s: 'The trustees voted to {1} the heating before anything else.', tip: 'MODERN → MODERNISE = modernizar. Compará con MODERNIST y MODERNITY.' },
{ id: 'd0924', root: 'PRIORITY', a: 'PRIORITISE', alt: ['PRIORITIZE'], p: '-ISE sobre sustantivo', src: 'Verbos derivados', s: 'Staff were asked to {1} the most fragile items.', tip: 'PRIORITY → PRIORITISE: la Y pasa a I. Compará con PRIOR.' },
{ id: 'd0925', root: 'SCRUTINY', a: 'SCRUTINISE', alt: ['SCRUTINIZE'], p: '-ISE sobre sustantivo', src: 'Verbos derivados', s: 'Every claim was {1} by two independent readers.', tip: 'SCRUTINY → SCRUTINISE = examinar con lupa. La Y pasa a I.' },
{ id: 'd0926', root: 'TRIVIAL', a: 'TRIVIALISE', alt: ['TRIVIALIZE'], p: '-ISE sobre adjetivo', src: 'Verbos derivados', s: 'To call it a scheduling problem is to {1} the whole affair.', tip: 'TRIVIAL → TRIVIALISE = banalizar, quitar importancia.' },
{ id: 'd0927', root: 'CRITIC', a: 'CRITICISE', alt: ['CRITICIZE'], p: '-ISE sobre sustantivo', src: 'Ampliación C2', s: 'The design was {1} for its treatment of the courtyard.', tip: 'CRITIC → CRITICISE. Compará con CRITICISM y CRITICAL.' },
{ id: 'd0928', root: 'SPECIAL', a: 'SPECIALISE', alt: ['SPECIALIZE'], p: '-ISE sobre adjetivo', src: 'Ampliación C2', s: 'The workshop came to {1} in eighteenth-century clocks.', tip: 'SPECIAL → SPECIALISE IN = especializarse en. Rige IN.' },
{ id: 'd0929', root: 'STABLE', a: 'STABILISE', alt: ['STABILIZE'], p: '-ISE con cambio de raíz', src: 'Ampliación C2', s: 'The bank moved to {1} the currency within hours.', tip: 'STABLE → STABILISE: la -LE pasa a -IL-. Igual que en STABILITY.' },
{ id: 'd0930', root: 'MINIMUM', a: 'MINIMISE', alt: ['MINIMIZE'], p: '-ISE sobre sustantivo', src: 'Ampliación C2', s: 'The route was chosen to {1} disruption to residents.', tip: 'MINIMUM → MINIMISE. Se pierde el -UM latino.' },
{ id: 'd0931', root: 'CHARACTER', a: 'CHARACTERISE', alt: ['CHARACTERIZE'], p: '-ISE sobre sustantivo', src: 'Ampliación C2', s: 'The period is {1} by a sudden turn towards abstraction.', tip: 'CHARACTER → CHARACTERISE = caracterizar. Muy frecuente en pasiva.' },

/* ---- -IFY : el sufijo causativo ------------------------------------------- */
{ id: 'd0932', root: 'FORT', a: 'FORTIFY', p: '-IFY sobre sustantivo', src: 'Verbos derivados', s: 'The abbey was {1} against raids from the sea.', tip: 'FORT → FORTIFY = fortificar. El sustantivo es FORTIFICATION.' },
{ id: 'd0933', root: 'CLEAR', a: 'CLARIFY', p: '-IFY con cambio de raíz', src: 'Ampliación C2', s: 'The minister was asked to {1} his earlier statement.', tip: 'CLEAR → CLARIFY: la raíz vuelve a su forma latina CLAR-. No es *clearify.' },
{ id: 'd0934', root: 'INTENSE', a: 'INTENSIFY', p: '-IFY sobre adjetivo', src: 'Ampliación C2', s: 'Pressure on the department began to {1} after the leak.', tip: 'INTENSE → INTENSIFY. Cae la E final.' },
{ id: 'd0935', root: 'SIMPLE', a: 'SIMPLIFY', p: '-IFY sobre adjetivo', src: 'Ampliación C2', s: 'The form was redesigned to {1} the whole application.', tip: 'SIMPLE → SIMPLIFY. Cae la E. Compará con OVERSIMPLIFICATION.' },
{ id: 'd0936', root: 'JUSTICE', a: 'JUSTIFY', p: '-IFY sobre sustantivo', src: 'Ampliación C2', s: 'Nothing in the file could {1} a delay of that length.', tip: 'JUSTICE → JUSTIFY. Se pierde el -ICE.' },

/* ---- -EN : el sufijo incoativo ------------------------------------------- */
{ id: 'd0937', root: 'LESS', a: 'LESSENS', p: '-EN sobre adjetivo', src: 'Verbos derivados', s: 'Insulating the roof {1} the heat loss by about a third.', tip: 'LESS → LESSEN = reducir. Doble S y tercera persona en -S. No confundir con LESSON.' },
{ id: 'd0938', root: 'STRENGTH', a: 'STRENGTHEN', p: '-EN sobre sustantivo', src: 'Ampliación C2', s: 'The buttresses were added to {1} the south wall.', tip: 'STRONG → STRENGTH → STRENGTHEN. El verbo se forma sobre el sustantivo, no sobre el adjetivo.' },
{ id: 'd0939', root: 'WIDE', a: 'WIDEN', p: '-EN sobre adjetivo', src: 'Ampliación C2', s: 'Plans to {1} the road were abandoned in 1974.', tip: 'WIDE → WIDEN. La E se conserva. Compará con WIDTH y WIDELY.' },
{ id: 'd0940', root: 'SHARP', a: 'SHARPENED', p: '-EN + -ED', src: 'Ampliación C2', s: 'The tone of the debate {1} considerably in the final week.', tip: 'SHARP → SHARPEN → SHARPENED. -EN sólo se pega a adjetivos cortos.' },

/* ---- -ATE ----------------------------------------------------------------- */
{ id: 'd0941', root: 'PROPER', a: 'APPROPRIATE', p: 'AP- + -ATE', src: 'Verbos derivados', s: 'The tone of the letter was hardly {1} to the occasion.', tip: 'PROPER → APPROPRIATE. Como adjetivo acaba en /-ət/; como verbo, en /-eɪt/, y significa «apropiarse de».' },
{ id: 'd0942', root: 'PASSION', a: 'PASSIONATE', p: '-ATE sobre sustantivo', src: 'Verbos derivados', s: 'He was a {1} defender of the branch library system.', tip: 'PASSION → PASSIONATE. Aquí -ATE forma adjetivo, no verbo: «lleno de».' },
{ id: 'd0943', root: 'ACTIVE', a: 'ACTIVATE', p: '-ATE sobre adjetivo', src: 'Ampliación C2', s: 'The alarm is {1} by movement rather than heat.', tip: 'ACTIVE → ACTIVATE. Compará con ACTIVITY y ACTIVISM.' },
{ id: 'd0944', root: 'DIFFERENT', a: 'DIFFERENTIATE', p: '-ATE sobre adjetivo', src: 'Ampliación C2', s: 'It is not always easy to {1} the two hands in the manuscript.', tip: 'DIFFERENT → DIFFERENTIATE = distinguir. Rige BETWEEN o FROM.' },

/* ---- Adjetivos en -ANT / -ENT -------------------------------------------- */
{ id: 'd0945', root: 'ABOUND', a: 'ABUNDANT', af: '-ant/adj', p: '-ANT adjetival', src: 'Adjetivos en -ANT/-ENT', s: 'Evidence of earlier occupation is {1} on the site.', tip: 'ABOUND → ABUNDANT. El OU del verbo pasa a U. El sustantivo es ABUNDANCE.' },
{ id: 'd0946', root: 'SIGNIFY', a: 'SIGNIFICANT', af: '-ant/adj', p: '-ANT adjetival', src: 'Adjetivos en -ANT/-ENT', s: 'The difference between the two groups was not {1}.', tip: 'SIGNIFY → SIGNIFICANT. Aparece una C. El sustantivo es SIGNIFICANCE.' },
{ id: 'd0947', root: 'DEVIATE', a: 'DEVIANT', af: '-ant/adj', p: '-ANT adjetival', src: 'Adjetivos en -ANT/-ENT', s: 'The chapter examines how societies define {1} behaviour.', tip: 'DEVIATE → DEVIANT. Se pierde el -ATE. El sustantivo es DEVIANCE o DEVIATION.' },
{ id: 'd0948', root: 'PREVAIL', a: 'PREVALENT', af: '-ent/adj', p: '-ENT adjetival', src: 'Adjetivos en -ANT/-ENT', s: 'The practice was more {1} in the north than anywhere else.', tip: 'PREVAIL → PREVALENT: se pierde la I. El sustantivo es PREVALENCE.' },
{ id: 'd0949', root: 'DIVERGE', a: 'DIVERGENT', af: '-ent/adj', p: '-ENT adjetival', src: 'Adjetivos en -ANT/-ENT', s: 'The two traditions took sharply {1} paths after 1750.', tip: 'DIVERGE → DIVERGENT. Cae la E. El sustantivo es DIVERGENCE.' },
{ id: 'd0950', root: 'DEPEND', a: 'DEPENDENT', af: '-ent/adj', p: '-ENT adjetival', src: 'Ampliación C2', s: 'The outcome is heavily {1} on the weather in May.', tip: 'DEPENDENT es el adjetivo (con E); DEPENDANT, con A, es la persona a cargo. Rige ON.' },
{ id: 'd0951', root: 'RESIST', a: 'RESISTANT', af: '-ant/adj', p: '-ANT adjetival', src: 'Ampliación C2', s: 'The new variety is {1} to the fungus but not immune.', tip: 'RESIST → RESISTANT TO. Con A, igual que RESISTANCE.' },

/* ---- -Y adjetival --------------------------------------------------------- */
{ id: 'd0952', root: 'WEIGH', a: 'WEIGHTY', af: '-y', p: '-Y adjetival', src: 'Adjetivos en -Y', s: 'The committee had rather more {1} matters to consider.', tip: 'WEIGH → WEIGHT → WEIGHTY = de peso, importante. El sufijo -Y forma adjetivos: RISKY, WEALTHY, HEALTHY.' },
{ id: 'd0953', root: 'WEALTH', a: 'WEALTHY', af: '-y', p: '-Y adjetival', src: 'Adjetivos en -Y', s: 'The chapel was paid for by a single {1} parishioner.', tip: 'WEALTH → WEALTHY. Igual que HEALTH → HEALTHY.' },

/* ---- Verbos de raíz latina opaca ----------------------------------------- */
{ id: 'd0954', root: 'COMPLETE', a: 'ACCOMPLISH', af: 'internal', p: 'Raíz latina alterna', src: 'Raíces irregulares', s: 'The team managed to {1} in six months what had been budgeted for two years.', tip: 'COMPLETE y ACCOMPLISH comparten la raíz latina «complere», llenar. El sustantivo es ACCOMPLISHMENT.' },
{ id: 'd0955', root: 'STABLE', a: 'ESTABLISH', af: 'internal', p: 'Raíz latina alterna', src: 'Raíces irregulares', s: 'The society was {1} by a group of amateur naturalists.', tip: 'STABLE → ESTABLISH: literalmente «hacer estable». El sustantivo es ESTABLISHMENT.' },
{ id: 'd0956', root: 'CONCEIVE', a: 'CONCEPT', p: 'Raíz latina alterna', src: 'Raíces irregulares', s: 'The whole {1} of the museum changed in the course of a decade.', tip: 'CONCEIVE → CONCEPT: la V pasa a P. Igual que en CONCEPTION y PERCEPTION.' },
{ id: 'd0957', root: 'REASON', a: 'RATIONALE', p: 'Raíz latina alterna', src: 'Raíces irregulares', s: 'The {1} for the closure was never properly explained.', tip: 'REASON y RATIONALE vienen ambos del latín «ratio». RATIONALE = la razón de ser, los fundamentos.' },
{ id: 'd0958', root: 'WELL', a: 'WELFARE', p: 'Compuesto WEL + FARE', src: 'Raíces irregulares', s: 'Animal {1} standards were tightened the following year.', tip: 'WELL + FARE (ir, andar): literalmente «que le vaya bien». Compará con WELLBEING.' },
{ id: 'd0959', root: 'DISCIPLE', a: 'DISCIPLINE', p: 'Raíz latina alterna', src: 'Raíces irregulares', s: 'History was slow to establish itself as an academic {1}.', tip: 'DISCIPLE (discípulo) y DISCIPLINE comparten la raíz «discere», aprender. Aquí es «disciplina académica».' },
{ id: 'd0984', root: 'EXTEND', a: 'EXTENT', af: 'internal', p: 'Raíz con -D → -T', src: 'Raíces irregulares', s: 'To some {1} the two accounts can be reconciled.', tip: 'EXTEND → EXTENT: la D final pasa a T. TO SOME EXTENT y TO WHAT EXTENT son colocaciones fijas. No confundir con EXTENSION, que es la ampliación física.' },
{ id: 'd0960', root: 'HUMAN', a: 'HUMANE', af: 'internal', p: 'Cambio de acento y sentido', src: 'Raíces irregulares', s: 'The reforms were presented as a more {1} approach to sentencing.', tip: 'HUMAN (de la especie) frente a HUMANE (compasivo). Sólo cambia una E, y el acento se desplaza al final.' },
{ id: 'd0961', root: 'PACE', a: 'APACE', af: 'a-', p: 'A- + sustantivo', src: 'Raíces irregulares', s: 'Work on the new wing continued {1} through the winter.', tip: 'APACE = a buen ritmo, rápidamente. Registro literario; el prefijo A- ya casi no se usa.' },

/* ---- Compuestos: dos palabras enteras ------------------------------------ */
{ id: 'd0962', root: 'PLAY', a: 'PLAYWRIGHT', p: 'Compuesto PLAY + WRIGHT', src: 'Compuestos', s: 'She is better known as a novelist than as a {1}.', tip: 'PLAY + WRIGHT (artesano, como en SHIPWRIGHT). No es *playwriter, por mucho que escriba.' },
{ id: 'd0963', root: 'WILD', a: 'WILDLIFE', p: 'Compuesto WILD + LIFE', src: 'Compuestos', s: 'The reserve was set up to protect {1} rather than scenery.', tip: 'WILD + LIFE. Incontable y sin guion. Compará con WILDERNESS.' },
{ id: 'd0964', root: 'WORLD', a: 'WORLDWIDE', p: 'Compuesto WORLD + WIDE', src: 'Compuestos', s: 'The recording sold half a million copies {1}.', tip: 'WORLD + WIDE. Funciona como adjetivo y como adverbio sin cambiar.' },
{ id: 'd0965', root: 'WIDE', a: 'WIDESPREAD', p: 'Compuesto WIDE + SPREAD', src: 'Compuestos', s: 'There was {1} support for keeping the building.', tip: 'WIDE + SPREAD. Sólo adjetivo: nunca *widespreadly.' },
{ id: 'd0966', root: 'HIGH', a: 'HIGHLIGHTS', p: 'Compuesto HIGH + LIGHT', src: 'Compuestos', s: 'The {1} of the season were broadcast on the last evening.', tip: 'HIGH + LIGHT. Sustantivo y verbo con la misma forma.' },
{ id: 'd0967', root: 'DEAD', a: 'DEADLINE', p: 'Compuesto DEAD + LINE', src: 'Compuestos', s: 'The {1} for submissions was extended by a fortnight.', tip: 'DEAD + LINE. El origen es literal y siniestro: la línea que un preso no podía cruzar.' },
{ id: 'd0968', root: 'FIRE', a: 'FIREARMS', p: 'Compuesto FIRE + ARM', src: 'Compuestos', s: 'Licensing of {1} was tightened after the inquiry.', tip: 'FIRE + ARM. Casi siempre en plural en registro legal.' },
{ id: 'd0969', root: 'FARM', a: 'FARMLAND', p: 'Compuesto FARM + LAND', src: 'Compuestos', s: 'A third of the county {1} was given over to pasture.', tip: 'FARM + LAND. Incontable, como la mayoría de los compuestos con -LAND.' },
{ id: 'd0970', root: 'LIFE', a: 'LIFESTYLES', p: 'Compuesto LIFE + STYLE', src: 'Compuestos', s: 'Sedentary {1} are implicated in the whole cluster of conditions.', tip: 'LIFE + STYLE. En plural cuando se habla de varios modos de vida.' },
{ id: 'd0971', root: 'SAFE', a: 'SAFEGUARDS', p: 'Compuesto SAFE + GUARD', src: 'Compuestos', s: 'The legislation contains few meaningful {1}.', tip: 'SAFE + GUARD = salvaguarda. También funciona como verbo: to safeguard something.' },
{ id: 'd0972', root: 'STAGE', a: 'BACKSTAGE', p: 'Compuesto BACK + STAGE', src: 'Compuestos', s: 'Most of the real negotiation happened {1}.', tip: 'BACK + STAGE = entre bastidores. Adverbio y adjetivo.' },
{ id: 'd0973', root: 'ALLEY', a: 'ALLEYWAYS', p: 'Compuesto ALLEY + WAY', src: 'Compuestos', s: 'The old town is a maze of narrow {1}.', tip: 'ALLEY + WAY. La Y de ALLEY se conserva porque va tras vocal.' },
{ id: 'd0974', root: 'INSECT', a: 'INSECTICIDES', p: 'Compuesto INSECT + -CIDE', src: 'Compuestos', s: 'Broad-spectrum {1} killed the pollinators along with the pest.', tip: 'INSECT + -CIDE (matar, del latín «caedere»). Como PESTICIDE y HERBICIDE.' },
{ id: 'd0975', root: 'CULTURAL', a: 'AGRICULTURAL', p: 'Compuesto AGRI- + CULTURAL', src: 'Compuestos', s: 'The whole plain was given over to {1} use by 1900.', tip: 'AGRI- (campo) + CULTURAL. La raíz latina «ager» da AGRICULTURE.' },
{ id: 'd0976', root: 'HABIT', a: 'HABITATS', p: 'Raíz latina compartida', src: 'Compuestos', s: 'Three distinct {1} meet within a mile of the coast.', tip: 'HABIT y HABITAT comparten la raíz «habitare», habitar, pero son palabras distintas.' },
{ id: 'd0977', root: 'FURTHER', a: 'FURTHERMORE', p: 'Compuesto FURTHER + MORE', src: 'Compuestos', s: '{1}, no record of the transaction has ever been found.', tip: 'FURTHER + MORE = además. Adverbio de enlace: abre la oración y va con coma.' },
{ id: 'd0978', root: 'MEAN', a: 'MEANWHILE', p: 'Compuesto MEAN + WHILE', src: 'Compuestos', s: '{1}, the second team had reached the summit by a different route.', tip: 'MEAN (intermedio) + WHILE (tiempo) = mientras tanto. Nada que ver con «significar».' },
{ id: 'd0979', root: 'MOST', a: 'UTMOST', p: 'Compuesto UT + MOST', src: 'Compuestos', s: 'The papers were handled with the {1} care.', tip: 'UT (out) + MOST = sumo, máximo. OF THE UTMOST IMPORTANCE es colocación fija.' },
{ id: 'd0980', root: 'TOWN', a: 'TOWNIES', p: '-IE + plural', src: 'Compuestos', s: 'The locals had a range of unflattering names for weekend {1}.', tip: 'TOWN → TOWNIE, con el sufijo coloquial -IE. En plural: TOWNIES.' },

/* ---- Cuando la respuesta es sólo una flexión ----------------------------- */
{ id: 'd0981', root: 'MODERATE', a: 'MODERATES', af: 'inflection', p: 'Flexión: plural del sustantivo', src: 'Flexión sin derivación', s: '{1} on both sides were quickly sidelined.', tip: 'A veces el Part 3 sólo pide el plural de la palabra dada. MODERATE como sustantivo = un moderado.' },
{ id: 'd0982', root: 'ENCOUNTER', a: 'ENCOUNTERS', af: 'inflection', p: 'Flexión: plural del sustantivo', src: 'Flexión sin derivación', s: 'Her {1} with the composer are described in the third chapter.', tip: 'ENCOUNTER ya es sustantivo: sólo hace falta el plural.' },
{ id: 'd0983', root: 'COMPROMISE', a: 'COMPROMISES', af: 'inflection', p: 'Flexión: plural del sustantivo', src: 'Flexión sin derivación', s: 'The final text involved {1} that satisfied nobody.', tip: 'COMPROMISE es sustantivo y verbo. Aquí el plural del sustantivo: concesiones mutuas.' }

]);
