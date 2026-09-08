/**
 * Drill bank 07 — -TION, -SION, -ITION and -UTION.
 *
 * Where bank 06 simply added -ATION, this one reshapes the stem first, and the
 * reshaping is the examinable part:
 *   -D / -DE / -SE  become -SION   EXPAND → EXPANSION, INCLUDE → INCLUSION
 *   -MIT            becomes -MISSION  PERMIT → PERMISSION
 *   -DUCE           becomes -DUCTION  PRODUCE → PRODUCTION
 *   -SCRIBE         becomes -SCRIPTION  PRESCRIBE → PRESCRIPTION
 *   -UTE            becomes -UTION   EXECUTE → EXECUTION
 * Nobody derives these by ear. They are learned as families.
 */
WC2.content.registerDrills([

/* ---- -DUCE → -DUCTION, -TROY → -TRUCTION --------------------------------- */
{ id: 'd0291', root: 'PRODUCE', a: 'PRODUCTION', p: '-DUCE → -DUCTION', src: 'Sustantivos abstractos', s: 'Steel {1} in the region collapsed within a decade.', tip: 'PRODUCE → PRODUCTION. Toda la familia -DUCE hace -DUCTION: REDUCE, INTRODUCE, DEDUCE.' },
{ id: 'd0292', root: 'PRODUCE', a: 'PRODUCTIONS', p: '-DUCE → -DUCTION', src: 'Sustantivos abstractos', s: 'The company mounted three new {1} in a single season.', tip: 'En plural y en el teatro: montajes, puestas en escena.' },
{ id: 'd0293', root: 'DESTROY', a: 'DESTRUCTION', p: '-TROY → -TRUCTION', src: 'Sustantivos abstractos', s: 'The {1} of the abbey library was total.', tip: 'DESTROY → DESTRUCTION. La raíz cambia bastante: no es *destroyation.' },
{ id: 'd0294', root: 'INTRODUCE', a: 'INTRODUCTION', p: '-DUCE → -DUCTION', src: 'Ampliación C2', s: 'The {1} of a levy on plastic bags cut usage by four fifths.', tip: 'Misma familia que PRODUCE y REINTRODUCE.' },

/* ---- -MIT → -MISSION ------------------------------------------------------ */
{ id: 'd0295', root: 'PERMIT', a: 'PERMISSION', p: '-MIT → -MISSION', src: 'Sustantivos abstractos', s: 'Written {1} is required to photograph the interior.', tip: 'PERMIT → PERMISSION. La familia -MIT hace -MISSION: ADMIT, SUBMIT, TRANSMIT, OMIT.' },
{ id: 'd0296', root: 'ADMIT', a: 'ADMISSION', p: '-MIT → -MISSION', src: 'Ampliación C2', s: '{1} to the gardens is free on the first Sunday of the month.', tip: 'ADMIT → ADMISSION = entrada, y también confesión.' },
{ id: 'd0297', root: 'TRANSMIT', a: 'TRANSMISSION', p: '-MIT → -MISSION', src: 'Ampliación C2', s: 'The {1} of the disease between species is still poorly understood.', tip: 'TRANSMIT → TRANSMISSION. Doble S, como toda la familia.' },

/* ---- -D / -DE / -SE → -SION ---------------------------------------------- */
{ id: 'd0298', root: 'EXPAND', a: 'EXPANSION', p: '-ND → -NSION', src: 'Sustantivos abstractos', s: 'Rapid {1} in the 1990s left the company badly overstretched.', tip: 'EXPAND → EXPANSION. La D se convierte en S.' },
{ id: 'd0299', root: 'EXTEND', a: 'EXTENSION', p: '-ND → -NSION', src: 'Sustantivos abstractos', s: 'The gallery is planning a substantial {1} to the east.', tip: 'EXTEND → EXTENSION. Compará con EXTENT, otro sustantivo de la misma raíz con otro sentido.' },
{ id: 'd0300', root: 'INCLUDE', a: 'INCLUSION', p: '-DE → -SION', src: 'Sustantivos abstractos', s: 'The {1} of two unpublished letters makes this edition essential.', tip: 'INCLUDE → INCLUSION. La D pasa a S. Igual que CONCLUDE → CONCLUSION.' },
{ id: 'd0301', root: 'PROTRUDE', a: 'PROTRUSIONS', p: '-DE → -SION', src: 'Sustantivos abstractos', s: 'Small bony {1} along the spine help anchor the muscle.', tip: 'PROTRUDE → PROTRUSION = protuberancia, saliente.' },
{ id: 'd0302', root: 'CONGEST', a: 'CONGESTION', p: 'Raíz + -ION', src: 'Sustantivos abstractos', s: 'The charge was introduced to reduce {1} in the city centre.', tip: 'CONGEST → CONGESTION. Aquí la T se mantiene y sólo se añade -ION.' },
{ id: 'd0303', root: 'DECIDE', a: 'DECISION', p: '-DE → -SION', src: 'Ampliación C2', s: 'The {1} was taken without consulting the residents.', tip: 'DECIDE → DECISION. Modelo puro de la familia -DE.' },
{ id: 'd0304', root: 'PERSUADE', a: 'PERSUASION', p: '-DE → -SION', src: 'Ampliación C2', s: 'It took some {1} to get him to sit for the portrait.', tip: 'PERSUADE → PERSUASION. La D se vuelve S y la E cae.' },
{ id: 'd0305', root: 'SUPERVISE', a: 'SUPERVISION', p: '-SE → -SION', src: 'Ampliación C2', s: 'The work was carried out under expert {1}.', tip: 'SUPERVISE → SUPERVISION. Con raíces en -SE la S ya está puesta.' },

/* ---- -CT y -PT: se añade -ION -------------------------------------------- */
{ id: 'd0306', root: 'EXTINCT', a: 'EXTINCTION', p: '-CT + -ION', src: 'Sustantivos abstractos', s: 'The species was driven to {1} within forty years.', tip: 'EXTINCT → EXTINCTION. Colocación fija: DRIVEN TO EXTINCTION.' },
{ id: 'd0307', root: 'OBJECT', a: 'OBJECTIONS', p: '-CT + -ION', src: 'Sustantivos abstractos', s: 'Two hundred formal {1} were lodged before the deadline.', tip: 'OBJECT → OBJECTION. RAISE o LODGE an objection TO something.' },
{ id: 'd0308', root: 'PROJECT', a: 'PROJECTIONS', p: '-CT + -ION', src: 'Sustantivos abstractos', s: 'Every one of the original {1} proved far too cautious.', tip: 'PROJECT → PROJECTION = proyección, previsión numérica.' },
{ id: 'd0309', root: 'INTERRUPT', a: 'INTERRUPTIONS', p: '-PT + -ION', src: 'Sustantivos abstractos', s: 'She worked for six hours without {1}.', tip: 'INTERRUPT → INTERRUPTION. Doble R en la raíz.' },
{ id: 'd0310', root: 'ENCRYPT', a: 'ENCRYPTION', p: '-PT + -ION', src: 'Sustantivos abstractos', s: 'End-to-end {1} is now standard on most messaging apps.', tip: 'ENCRYPT → ENCRYPTION. La Y es la única vocal de la raíz.' },
{ id: 'd0311', root: 'ASSUME', a: 'ASSUMPTION', p: '-UME → -UMPTION', src: 'Sustantivos abstractos', s: 'The argument rests on one unexamined {1}.', tip: 'ASSUME → ASSUMPTION. Aparece una P que no está en el verbo. Igual que CONSUME → CONSUMPTION.' },
{ id: 'd0312', root: 'CONSUME', a: 'CONSUMPTION', p: '-UME → -UMPTION', src: 'Ampliación C2', s: 'Domestic energy {1} fell for the third year running.', tip: 'CONSUME → CONSUMPTION. La misma P intrusa que en ASSUMPTION.' },
{ id: 'd0313', root: 'CONVINCE', a: 'CONVICTION', p: '-VINCE → -VICTION', src: 'Sustantivos abstractos', s: 'He argued the case with evident personal {1}.', tip: 'CONVINCE → CONVICTION = convicción, y también condena judicial. La N desaparece.' },
{ id: 'd0314', root: 'PRESCRIBE', a: 'PRESCRIPTION', p: '-SCRIBE → -SCRIPTION', src: 'Sustantivos abstractos', s: 'The drug is available only on {1}.', tip: 'PRESCRIBE → PRESCRIPTION. Toda la familia -SCRIBE hace -SCRIPTION: DESCRIBE, SUBSCRIBE.' },
{ id: 'd0315', root: 'DESCRIBE', a: 'DESCRIPTION', p: '-SCRIBE → -SCRIPTION', src: 'Ampliación C2', s: 'The catalogue {1} runs to a single, unhelpful line.', tip: 'DESCRIBE → DESCRIPTION. La B se convierte en P.' },

/* ---- -TEND / -TENT y -VENE ------------------------------------------------ */
{ id: 'd0316', root: 'INTEND', a: 'INTENTION', p: '-TEND → -TENTION', src: 'Sustantivos abstractos', s: 'He announced his {1} to stand down at the end of the term.', tip: 'INTEND → INTENTION. La D pasa a T. Rige TO + infinitivo.' },
{ id: 'd0317', root: 'INTERVENE', a: 'INTERVENTION', p: '-VENE → -VENTION', src: 'Sustantivos abstractos', s: 'Early {1} is what makes the difference in these cases.', tip: 'INTERVENE → INTERVENTION. La E final cae y aparece la T.' },
{ id: 'd0318', root: 'INTERVENE', a: 'INTERVENTIONS', p: '-VENE → -VENTION', src: 'Sustantivos abstractos', s: 'A series of small {1} proved more effective than one large one.', tip: 'Mismo sustantivo en plural: medidas o actuaciones concretas.' },
{ id: 'd0319', root: 'PREVENT', a: 'PREVENTION', p: 'Raíz + -ION', src: 'Ampliación C2', s: 'The charity spends most of its budget on {1} rather than treatment.', tip: 'PREVENT → PREVENTION. La T ya está: sólo se añade -ION.' },

/* ---- -UTE → -UTION -------------------------------------------------------- */
{ id: 'd0320', root: 'EXECUTE', a: 'EXECUTION', p: '-UTE → -UTION', src: 'Sustantivos abstractos', s: 'The idea was sound; the {1} was hopeless.', tip: 'EXECUTE → EXECUTION. Aquí significa ejecución en el sentido de llevar algo a cabo.' },
{ id: 'd0321', root: 'POLLUTE', a: 'POLLUTION', p: '-UTE → -UTION', src: 'Sustantivos abstractos', s: 'Light {1} has made the Milky Way invisible from most cities.', tip: 'POLLUTE → POLLUTION. Doble L en la raíz.' },
{ id: 'd0322', root: 'RESOLVE', a: 'RESOLUTION', p: '-OLVE → -OLUTION', src: 'Sustantivos abstractos', s: 'The dispute was settled without recourse to a formal {1}.', tip: 'RESOLVE → RESOLUTION. La V desaparece, igual que en EVOLVE → REVOLUTION.' },
{ id: 'd0323', root: 'DISTRIBUTE', a: 'DISTRIBUTION', p: '-UTE → -UTION', src: 'Ampliación C2', s: 'The uneven {1} of rainfall shapes the whole agricultural year.', tip: 'DISTRIBUTE → DISTRIBUTION. Misma familia que EXECUTE y POLLUTE.' },

/* ---- -ITION --------------------------------------------------------------- */
{ id: 'd0324', root: 'NUTRIENT', a: 'NUTRITION', p: 'Raíz + -ITION', src: 'Sustantivos abstractos', s: 'Poor {1} in the first three years leaves lasting effects.', tip: 'NUTRIENT → NUTRITION. Compará con MALNUTRITION, que le añade MAL-.' },
{ id: 'd0325', root: 'INHIBIT', a: 'INHIBITIONS', p: 'Raíz + -ITION', src: 'Sustantivos abstractos', s: 'A second glass tended to loosen his {1} considerably.', tip: 'INHIBIT → INHIBITION. Se pierde la T final antes de -ITION.' },
{ id: 'd0326', root: 'COMPETE', a: 'COMPETITION', p: '-ETE → -ETITION', src: 'Ampliación C2', s: 'Fierce {1} drove three of the four suppliers out of business.', tip: 'COMPETE → COMPETITION. Aparece una I: no es *competetion.' },
{ id: 'd0327', root: 'DEFINE', a: 'DEFINITION', p: '-INE → -INITION', src: 'Ampliación C2', s: 'The problem begins with the {1} of the term itself.', tip: 'DEFINE → DEFINITION. La I larga se acorta y la E cae.' },
{ id: 'd0328', root: 'REPEAT', a: 'REPETITION', p: 'Raíz + -ITION', src: 'Ampliación C2', s: 'Endless {1} of the same phrase dulls its effect.', tip: 'REPEAT → REPETITION. Ojo: se pierde la A. No es *repeatition.' },

/* ---- Otros nominalizadores frecuentes ------------------------------------- */
{ id: 'd0329', root: 'SECRETE', a: 'SECRETIONS', p: '-ETE → -ETION', src: 'Sustantivos abstractos', s: 'The plant defends itself with sticky {1} along the stem.', tip: 'SECRETE → SECRETION = secreción. El verbo se acentúa en la segunda sílaba.' },
{ id: 'd0330', root: 'SUSPEND', a: 'SUSPENSION', p: '-ND → -NSION', src: 'Ampliación C2', s: 'His {1} from the register lasted eighteen months.', tip: 'SUSPEND → SUSPENSION. Igual que EXPAND y EXTEND.' },
{ id: 'd0331', root: 'COMPREHEND', a: 'COMPREHENSION', p: '-ND → -NSION', src: 'Ampliación C2', s: 'The scale of the loss is almost beyond {1}.', tip: 'COMPREHEND → COMPREHENSION. BEYOND COMPREHENSION es colocación fija.' },
{ id: 'd0332', root: 'ERODE', a: 'EROSION', p: '-DE → -SION', src: 'Ampliación C2', s: 'Coastal {1} claims about a metre of the cliff each year.', tip: 'ERODE → EROSION. Vale tanto para la costa como para la confianza pública.' },
{ id: 'd0333', root: 'INVADE', a: 'INVASION', p: '-DE → -SION', src: 'Ampliación C2', s: 'The {1} of non-native species has altered the lake entirely.', tip: 'INVADE → INVASION. La D pasa a S.' },
{ id: 'd0334', root: 'OMIT', a: 'OMISSION', p: '-MIT → -MISSION', src: 'Ampliación C2', s: 'The {1} of any mention of cost was surely deliberate.', tip: 'OMIT → OMISSION. Una M en el verbo, dos S en el sustantivo.' },
{ id: 'd0335', root: 'CONCEIVE', a: 'CONCEPTION', p: '-CEIVE → -CEPTION', src: 'Ampliación C2', s: 'Their {1} of the city is closer to a village than a capital.', tip: 'CONCEIVE → CONCEPTION. La familia -CEIVE hace -CEPTION: RECEIVE, PERCEIVE, DECEIVE.' },
{ id: 'd0336', root: 'PERCEIVE', a: 'PERCEPTION', p: '-CEIVE → -CEPTION', src: 'Ampliación C2', s: 'Public {1} of the risk bears little relation to the data.', tip: 'PERCEIVE → PERCEPTION. Misma familia que CONCEPTION y DECEPTION.' },
{ id: 'd0986', root: 'PUBLISH', a: 'PUBLICATION', p: '-ISH → -ICATION', src: 'Ampliación C2', s: 'The journal accepted the paper but delayed {1} for a year.', tip: 'PUBLISH → PUBLICATION. Se pierde el -SH y entra -ICATION, como en ABOLISH → ABOLITION.' },
{ id: 'd0987', root: 'CONFUSE', a: 'CONFUSION', p: '-SE → -SION', src: 'Ampliación C2', s: 'There was some {1} about which entrance to use.', tip: 'CONFUSE → CONFUSION. Con raíces en -SE la S ya está puesta.' }

]);
