/**
 * Drill bank 18 — participial -ED and -ING.
 *
 * Two jobs each, and Part 3 uses both.
 *
 * As adjectives they split by voice: the -ING form describes what causes the
 * effect, the -ED form what undergoes it. A DEPRESSING report leaves you
 * DEPRESSED. Getting this backwards is the single most common C1 error that
 * survives into C2.
 *
 * As nouns, -ING is a fully productive nominaliser — GRAZING, MAPPING,
 * STREAMING, LAUNDERING — and several of those are the answer the exam wants,
 * not the verb they came from.
 */
WC2.content.registerDrills([

/* ---- -ED : lo que recibe la acción ---------------------------------------- */
{ id: 'd0821', root: 'ACCLAIM', a: 'ACCLAIMED', p: '-ED participial', src: 'Participios adjetivales', s: 'Her second novel was widely {1} on publication.', tip: 'ACCLAIM → ACCLAIMED = aclamado. CRITICALLY ACCLAIMED es colocación casi fija.' },
{ id: 'd0822', root: 'CUSTOM', a: 'ACCUSTOMED', p: 'AC- + -ED', src: 'Participios adjetivales', s: 'Readers had grown {1} to a new issue every month.', tip: 'CUSTOM → ACCUSTOM → ACCUSTOMED TO. Rige TO + sustantivo o gerundio, nunca infinitivo.' },
{ id: 'd0823', root: 'ALLEGE', a: 'ALLEGED', p: '-ED participial', src: 'Participios adjetivales', s: 'The {1} breach was never substantiated.', tip: 'ALLEGE → ALLEGED = presunto. El adverbio ALLEGEDLY pronuncia la E: /a-LEJ-id-li/.' },
{ id: 'd0824', root: 'MEASURE', a: 'MEASURED', p: '-ED participial', src: 'Participios adjetivales', s: 'His response was {1} and entirely free of rancour.', tip: 'MEASURE → MEASURED = comedido, mesurado. En sentido figurado, no de medición.' },
{ id: 'd0825', root: 'NUANCE', a: 'NUANCED', p: '-ED sobre sustantivo', src: 'Participios adjetivales', s: 'The chapter offers a far more {1} account of the period.', tip: 'NUANCE → NUANCED = matizado. -ED sobre un sustantivo: «dotado de matices».' },
{ id: 'd0826', root: 'DISCIPLINE', a: 'DISCIPLINED', p: '-ED sobre sustantivo', src: 'Participios adjetivales', s: 'The prose is spare and rigorously {1}.', tip: 'DISCIPLINE → DISCIPLINED = disciplinado. Compará con INTERDISCIPLINARY.' },
{ id: 'd0827', root: 'CRAFT', a: 'CRAFTED', p: '-ED sobre sustantivo', src: 'Participios adjetivales', s: 'Every sentence in the essay is carefully {1}.', tip: 'CRAFT → CRAFTED = elaborado con oficio. Compará con CRAFTSMANSHIP.' },
{ id: 'd0828', root: 'ANTIQUE', a: 'ANTIQUATED', p: '-ATE + -ED', src: 'Participios adjetivales', s: 'The ticketing system was {1} even when it was installed.', tip: 'ANTIQUE → ANTIQUATE → ANTIQUATED = anticuado, obsoleto.' },
{ id: 'd0829', root: 'BROAD', a: 'BROADENED', p: '-EN + -ED', src: 'Participios adjetivales', s: 'The remit was quietly {1} to cover the whole region.', tip: 'BROAD → BROADEN → BROADENED. El verbo se forma con -EN antes del participio.' },
{ id: 'd0830', root: 'LONG', a: 'PROLONGED', p: 'PRO- + -ED', src: 'Participios adjetivales', s: '{1} exposure to the solvent proved dangerous.', tip: 'LONG → PROLONG → PROLONGED = prolongado. El prefijo PRO- da el verbo.' },
{ id: 'd0831', root: 'THREAT', a: 'THREATENED', p: '-EN + -ED', src: 'Participios adjetivales', s: 'Eleven {1} species were recorded in the survey.', tip: 'THREAT → THREATEN → THREATENED. Igual que BROADEN: -EN construye el verbo.' },
{ id: 'd0832', root: 'SHELF', a: 'SHELVED', p: '-F → -V + -ED', src: 'Participios adjetivales', s: 'The whole scheme was quietly {1} after the election.', tip: 'SHELF → SHELVE → SHELVED. La F se vuelve V, como en LEAF → LEAVES. SHELVE = archivar, aparcar un plan.' },
{ id: 'd0833', root: 'HURRY', a: 'HURRIED', p: 'Y → I + -ED', src: 'Participios adjetivales', s: 'A {1} apology did nothing to settle the matter.', tip: 'HURRY → HURRIED. La Y pasa a I tras consonante.' },
{ id: 'd0834', root: 'ARISE', a: 'AROUSED', p: 'Raíz alterna', src: 'Participios adjetivales', s: 'The find {1} considerable interest among specialists.', tip: 'ARISE y AROUSE comparten origen pero son verbos distintos: AROUSE = despertar, suscitar. Su pasado es AROUSED.' },
{ id: 'd0835', root: 'PORTION', a: 'APPORTIONED', p: 'AP- + -ED', src: 'Participios adjetivales', s: 'Costs were {1} between the three councils.', tip: 'PORTION → APPORTION = repartir. El AP- es el prefijo latino AD- asimilado ante P.' },
{ id: 'd0836', root: 'EMPHASIS', a: 'EMPHASISED', alt: ['EMPHASIZED'], p: '-ISE + -ED', src: 'Participios adjetivales', s: 'She {1} that the findings were provisional.', tip: 'EMPHASIS → EMPHASISE → EMPHASISED. El sustantivo lleva S final, el verbo -ISE.' },
{ id: 'd0837', root: 'POPULAR', a: 'POPULARISED', alt: ['POPULARIZED'], p: '-ISE + -ED', src: 'Participios adjetivales', s: 'The term was {1} by a single television series.', tip: 'POPULAR → POPULARISE → POPULARISED. Compará con POPULARITY.' },
{ id: 'd0838', root: 'SUBSIDY', a: 'SUBSIDISED', alt: ['SUBSIDIZED'], p: '-ISE + -ED', src: 'Participios adjetivales', s: 'Rail travel is heavily {1} in most of Europe.', tip: 'SUBSIDY → SUBSIDISE → SUBSIDISED. La Y pasa a I.' },
{ id: 'd0839', root: 'MATERIAL', a: 'MATERIALISED', alt: ['MATERIALIZED'], p: '-ISE + -ED', src: 'Participios adjetivales', s: 'The promised investment never {1}.', tip: 'MATERIAL → MATERIALISE → MATERIALISED = concretarse, hacerse realidad.' },
{ id: 'd0840', root: 'REVOLT', a: 'REVOLUTIONISED', alt: ['REVOLUTIONIZED'], p: '-ISE + -ED', src: 'Participios adjetivales', s: 'Cheap printing {1} the circulation of ideas.', tip: 'REVOLT → REVOLUTION → REVOLUTIONISE → REVOLUTIONISED. Cuatro pasos.' },
{ id: 'd0841', root: 'COMMODITY', a: 'COMMODIFIED', p: '-IFY + -ED', src: 'Participios adjetivales', s: 'Even solitude has been thoroughly {1}.', tip: 'COMMODITY → COMMODIFY → COMMODIFIED. Los verbos en -IFY hacen -IFIED.' },
{ id: 'd0842', root: 'SETTLE', a: 'SETTLED', p: '-ED participial', src: 'Participios adjetivales', s: 'The question is far from {1} among specialists.', tip: 'SETTLE → SETTLED = zanjado, resuelto. Compará con SETTLEMENT y UNSETTLING.' },

/* ---- -ING : lo que produce el efecto -------------------------------------- */
{ id: 'd0843', root: 'DEPRESS', a: 'DEPRESSING', p: '-ING participial', src: 'Participios adjetivales', s: 'The figures for the third quarter made {1} reading.', tip: 'DEPRESSING = lo que deprime; DEPRESSED = quien está deprimido. El contraste activo/pasivo se examina.' },
{ id: 'd0844', root: 'DEMAND', a: 'DEMANDING', p: '-ING participial', src: 'Participios adjetivales', s: 'The role is more {1} than the salary suggests.', tip: 'DEMAND → DEMANDING = exigente. Lo que exige, no lo que es exigido.' },
{ id: 'd0845', root: 'CHARM', a: 'CHARMING', p: '-ING participial', src: 'Participios adjetivales', s: 'The village is {1} and almost entirely uninhabited.', tip: 'CHARM → CHARMING = encantador. La M no se dobla.' },
{ id: 'd0846', root: 'ENDURE', a: 'ENDURING', p: '-ING participial', src: 'Participios adjetivales', s: 'The book {1} appeal owes little to its plot.', tip: 'ENDURE → ENDURING = duradero, perdurable. Cae la E. Compará con ENDURANCE.' },
{ id: 'd0847', root: 'DECLINE', a: 'DECLINING', p: '-ING participial', src: 'Participios adjetivales', s: '{1} numbers forced the school to merge.', tip: 'DECLINE → DECLINING. Cae la E ante -ING.' },
{ id: 'd0848', root: 'EVOLVE', a: 'EVOLVING', p: '-ING participial', src: 'Participios adjetivales', s: 'The picture is still {1} as new data arrives.', tip: 'EVOLVE → EVOLVING. Cae la E. Compará con REVOLUTION, de la misma raíz.' },
{ id: 'd0849', root: 'CASCADE', a: 'CASCADING', p: '-ING participial', src: 'Participios adjetivales', s: 'One outage triggered a {1} series of failures.', tip: 'CASCADE → CASCADING = en cascada, encadenado. Cae la E.' },

/* ---- -ING como sustantivo deverbal --------------------------------------- */
{ id: 'd0850', root: 'GRAZE', a: 'GRAZING', p: '-ING sustantivado', src: 'Sustantivos en -ING', s: 'The upland was reserved for summer {1}.', tip: 'GRAZE → GRAZING = pastoreo, y también el pasto mismo. Sustantivo incontable.' },
{ id: 'd0851', root: 'MAP', a: 'MAPPING', p: 'Consonante doble + -ING', src: 'Sustantivos en -ING', s: 'The {1} of the seabed took four seasons.', tip: 'MAP dobla la P: MAPPING. Una vocal breve entre consonantes fuerza el doblado.' },
{ id: 'd0852', root: 'STREAM', a: 'STREAMING', p: '-ING sustantivado', src: 'Sustantivos en -ING', s: '{1} now accounts for the bulk of the industry revenue.', tip: 'STREAM → STREAMING. La doble E impide doblar la M.' },
{ id: 'd0853', root: 'LAUNDER', a: 'LAUNDERING', p: '-ING sustantivado', src: 'Sustantivos en -ING', s: 'The bank was fined for failures in its anti-money {1} controls.', tip: 'LAUNDER → LAUNDERING = blanqueo. La R no se dobla: el acento cae en LAUN-.' },
{ id: 'd0854', root: 'PROFILE', a: 'PROFILING', p: '-ING sustantivado', src: 'Sustantivos en -ING', s: 'The report condemned the use of racial {1}.', tip: 'PROFILE → PROFILING. Cae la E.' },
{ id: 'd0855', root: 'ADVERT', a: 'ADVERTISING', p: '-ISE + -ING', src: 'Sustantivos en -ING', s: 'Half the magazine income came from {1}.', tip: 'ADVERT → ADVERTISE → ADVERTISING. Incontable: nunca *an advertising.' },
{ id: 'd0856', root: 'REASON', a: 'REASONING', p: '-ING sustantivado', src: 'Sustantivos en -ING', s: 'The {1} behind the decision was never made public.', tip: 'REASON → REASONING = razonamiento. Compará con REASONABLE y RATIONALE.' },
{ id: 'd0857', root: 'SAY', a: 'SAYING', p: '-ING sustantivado', src: 'Sustantivos en -ING', s: 'There is an old local {1} about the wind in that valley.', tip: 'SAY → SAYING = dicho, refrán. Aquí es un sustantivo contable.' },
{ id: 'd0858', root: 'WRITE', a: 'WRITINGS', p: '-ING sustantivado', src: 'Sustantivos en -ING', s: 'His early {1} on the subject remain unpublished.', tip: 'WRITE → WRITING → WRITINGS. Cae la E. En plural: los escritos de alguien.' },
{ id: 'd0859', root: 'LAND', a: 'LANDING', p: '-ING sustantivado', src: 'Sustantivos en -ING', s: 'The {1} was postponed twice because of fog.', tip: 'LAND → LANDING = aterrizaje, y también el rellano de una escalera.' },
{ id: 'd0860', root: 'SIGHT', a: 'SIGHTING', p: '-ING sustantivado', src: 'Sustantivos en -ING', s: 'The first confirmed {1} in sixty years was made from a ferry.', tip: 'SIGHT → SIGHTING = avistamiento. Compará con INSIGHTS y FORESIGHT.' },
{ id: 'd0861', root: 'KEYBOARD', a: 'KEYBOARDING', p: '-ING sustantivado', src: 'Sustantivos en -ING', s: '{1} was taught as a separate subject well into the 1990s.', tip: 'KEYBOARD → KEYBOARDING = mecanografía en teclado. Sustantivo incontable.' },
{ id: 'd0862', root: 'PASS', a: 'TRESPASSING', p: 'TRES- + -ING', src: 'Sustantivos en -ING', s: 'The sign warns against {1} in the strongest terms.', tip: 'PASS → TRESPASS = entrar sin permiso, literalmente «pasar a través». TRESPASSING es el sustantivo.' },
{ id: 'd0863', root: 'DEMOCRACY', a: 'DEMOCRATISING', alt: ['DEMOCRATIZING'], p: '-ISE + -ING', src: 'Sustantivos en -ING', s: 'Printing had a {1} effect that took two centuries to work through.', tip: 'DEMOCRACY → DEMOCRATISE → DEMOCRATISING. La CY pasa a T.' },
{ id: 'd0864', root: 'WELL', a: 'WELLBEING', af: 'compound', alt: ['WELL-BEING'], p: 'Compuesto WELL + BEING', src: 'Sustantivos en -ING', s: 'The scheme was judged on its effect on staff {1}.', tip: 'WELL + BEING. Se admite junto o con guion. Compará con WELFARE, de la misma raíz.' },

/* ---- El contraste que decide marcas -------------------------------------- */
{ id: 'd0865', root: 'INTEREST', a: 'INTERESTED', p: '-ED frente a -ING', src: 'Contraste activo y pasivo', s: 'Anyone {1} in the subject should start with the 1958 edition.', tip: 'INTERESTED = la persona que siente interés. INTERESTING = la cosa que lo provoca.' },
{ id: 'd0866', root: 'CONCERN', a: 'CONCERNING', p: '-ED frente a -ING', src: 'Contraste activo y pasivo', s: 'The trend in the youngest age group is particularly {1}.', tip: 'CONCERNING = preocupante (la cosa). CONCERNED = preocupado (la persona).' },
{ id: 'd0867', root: 'EXHAUST', a: 'EXHAUSTING', p: '-ED frente a -ING', src: 'Contraste activo y pasivo', s: 'The journey by road is long and thoroughly {1}.', tip: 'EXHAUSTING = agotador (la cosa). EXHAUSTED = agotado (la persona). No confundir con EXHAUSTIVE = exhaustivo.' },
{ id: 'd0868', root: 'DISTURB', a: 'DISTURBED', p: '-ED frente a -ING', src: 'Contraste activo y pasivo', s: 'The nesting birds must not be {1} before July.', tip: 'DISTURBED = molestado, alterado. DISTURBING = inquietante.' },
{ id: 'd0990', root: 'CONFOUND', a: 'CONFOUNDING', p: '-ING participial', src: 'Ampliación C2', s: 'The study controlled for every {1} factor the authors could name.', tip: 'CONFOUND → CONFOUNDING. En estadística, una variable que confunde el resultado.' }

]);
