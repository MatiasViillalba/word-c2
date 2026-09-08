/**
 * Drill bank 10 — -ITY, -ABILITY and -IBILITY.
 *
 * -ITY is what -NESS becomes on a Latin adjective, and it does two things at
 * once: it changes the word class and it moves the stress. ACTIVE → acTIVity,
 * POPular → popuLARity. Candidates who hear the word in their head and write
 * what they hear lose marks here.
 *
 * -ABILITY and -IBILITY are not separate suffixes at all: they are -ABLE / -IBLE
 * plus -ITY, welded. Whichever the adjective takes, the noun keeps.
 */
WC2.content.registerDrills([

/* ---- -ITY sobre adjetivo -------------------------------------------------- */
{ id: 'd0426', root: 'ACTIVE', a: 'ACTIVITY', p: '-ITY sobre adjetivo', src: 'Sustantivos de cualidad', s: 'Seismic {1} in the region has increased since the drilling began.', tip: 'ACTIVE → ACTIVITY. Se pierde la E y el acento se desplaza a la segunda sílaba.' },
{ id: 'd0427', root: 'ANONYMOUS', a: 'ANONYMITY', p: '-ITY sobre adjetivo', src: 'Sustantivos de cualidad', s: 'The donor insisted on complete {1}.', tip: 'ANONYMOUS → ANONYMITY. Se pierde el -OUS entero.' },
{ id: 'd0428', root: 'AMBIGUOUS', a: 'AMBIGUITY', p: '-ITY sobre adjetivo', src: 'Sustantivos de cualidad', s: 'The clause was drafted with a degree of deliberate {1}.', tip: 'AMBIGUOUS → AMBIGUITY. Igual que ANONYMOUS: cae el -OUS.' },
{ id: 'd0429', root: 'AUTHENTIC', a: 'AUTHENTICITY', p: '-ITY sobre adjetivo', src: 'Sustantivos de cualidad', s: 'Doubts about the panel {1} surfaced in the 1960s.', tip: 'AUTHENTIC → AUTHENTICITY. La C final suena /s/ ante la I.' },
{ id: 'd0430', root: 'CREATE', a: 'CREATIVITY', p: '-IVE + -ITY', src: 'Sustantivos de cualidad', s: 'The brief was deliberately loose, to leave room for {1}.', tip: 'CREATE → CREATIVE → CREATIVITY. Dos pasos: -IVE antes que -ITY.' },
{ id: 'd0431', root: 'DIVERSE', a: 'DIVERSITY', p: '-ITY sobre adjetivo', src: 'Sustantivos de cualidad', s: 'Hedgerows support a {1} of insect life that fields cannot.', tip: 'DIVERSE → DIVERSITY. Cae la E final.' },
{ id: 'd0432', root: 'ELECTRIC', a: 'ELECTRICITY', p: '-ITY sobre adjetivo', src: 'Sustantivos de cualidad', s: 'The mill generated its own {1} from 1898.', tip: 'ELECTRIC → ELECTRICITY. La C se repite: electri-c-ity.' },
{ id: 'd0433', root: 'FATAL', a: 'FATALITIES', p: '-ITY sobre adjetivo', src: 'Sustantivos de cualidad', s: 'There were no {1}, but sixteen people were treated for smoke inhalation.', tip: 'FATAL → FATALITY → FATALITIES. En plural designa a las víctimas mortales.' },
{ id: 'd0434', root: 'FUNCTION', a: 'FUNCTIONALITY', p: '-AL + -ITY', src: 'Sustantivos de cualidad', s: 'The redesign added polish but stripped out {1}.', tip: 'FUNCTION → FUNCTIONAL → FUNCTIONALITY. Tres piezas.' },
{ id: 'd0435', root: 'HUMBLE', a: 'HUMILITY', p: '-ITY con cambio de raíz', src: 'Sustantivos de cualidad', s: 'He accepted the award with genuine {1}.', tip: 'HUMBLE → HUMILITY. Irregular: desaparece la B y cambia la vocal. No es *humbleity.' },
{ id: 'd0436', root: 'IDENTIFY', a: 'IDENTITY', p: '-ITY sobre verbo', src: 'Sustantivos de cualidad', s: 'The whole essay is about regional {1}.', tip: 'IDENTIFY → IDENTITY. Se pierde el -FY entero.' },
{ id: 'd0437', root: 'IMMUNE', a: 'IMMUNITY', p: '-ITY sobre adjetivo', src: 'Sustantivos de cualidad', s: 'Herd {1} requires a very high rate of coverage.', tip: 'IMMUNE → IMMUNITY. Cae la E final.' },
{ id: 'd0438', root: 'LIABLE', a: 'LIABILITY', p: '-ABLE → -ABILITY', src: 'Sustantivos de cualidad', s: 'The clause limits the contractor {1} to the value of the work.', tip: 'LIABLE → LIABILITY. -ABLE se transforma en -ABILITY, nunca *liableity.' },
{ id: 'd0439', root: 'LINEAR', a: 'LINEARITY', p: '-ITY sobre adjetivo', src: 'Sustantivos de cualidad', s: 'The novel resists the {1} of conventional narrative.', tip: 'LINEAR → LINEARITY. Se añade -ITY sin más cambios.' },
{ id: 'd0440', root: 'LIQUID', a: 'LIQUIDITY', p: '-ITY sobre sustantivo', src: 'Sustantivos de cualidad', s: 'The bank ran into serious {1} problems that autumn.', tip: 'LIQUID → LIQUIDITY. En finanzas: disponibilidad de efectivo.' },
{ id: 'd0441', root: 'LONG', a: 'LONGEVITY', p: '-EVITY (irregular)', src: 'Sustantivos de cualidad', s: 'The {1} of the design owes something to sheer luck.', tip: 'LONG → LONGEVITY, del latín «longaevus». Nada que ver con LENGTH: uno es duración, el otro medida.' },
{ id: 'd0442', root: 'MAJOR', a: 'MAJORITY', p: '-ITY sobre adjetivo', src: 'Sustantivos de cualidad', s: 'The {1} of respondents had never visited the site.', tip: 'MAJOR → MAJORITY. THE MAJORITY OF + plural admite verbo en plural.' },
{ id: 'd0443', root: 'MINOR', a: 'MINORITY', p: '-ITY sobre adjetivo', src: 'Sustantivos de cualidad', s: 'A vocal {1} opposed the change from the start.', tip: 'MINOR → MINORITY. Par exacto de MAJORITY.' },
{ id: 'd0444', root: 'MOBILE', a: 'MOBILITY', p: '-ITY sobre adjetivo', src: 'Sustantivos de cualidad', s: 'Social {1} has stalled for the first time in a century.', tip: 'MOBILE → MOBILITY. Cae la E final.' },
{ id: 'd0445', root: 'MUNICIPAL', a: 'MUNICIPALITIES', p: '-ITY sobre adjetivo', src: 'Sustantivos de cualidad', s: 'Three neighbouring {1} share the same water authority.', tip: 'MUNICIPAL → MUNICIPALITY → MUNICIPALITIES. La Y pasa a IES.' },
{ id: 'd0446', root: 'NEUTRAL', a: 'NEUTRALITY', p: '-ITY sobre adjetivo', src: 'Sustantivos de cualidad', s: 'The broadcaster {1} was questioned from both sides.', tip: 'NEUTRAL → NEUTRALITY. Sin cambios en la raíz.' },
{ id: 'd0447', root: 'OBJECT', a: 'OBJECTIVITY', p: '-IVE + -ITY', src: 'Sustantivos de cualidad', s: 'Complete {1} is an ideal rather than a method.', tip: 'OBJECT → OBJECTIVE → OBJECTIVITY. Compará con SUBJECTIVITY, su opuesto exacto.' },
{ id: 'd0448', root: 'SUBJECT', a: 'SUBJECTIVITY', p: '-IVE + -ITY', src: 'Sustantivos de cualidad', s: 'The method acknowledges the {1} of the observer.', tip: 'SUBJECT → SUBJECTIVE → SUBJECTIVITY. Mismo camino que OBJECTIVITY.' },
{ id: 'd0449', root: 'ORAL', a: 'ORALITY', p: '-ITY sobre adjetivo', src: 'Sustantivos de cualidad', s: 'The chapter contrasts {1} with the fixity of print.', tip: 'ORAL → ORALITY = oralidad, la condición de lo transmitido de viva voz.' },
{ id: 'd0450', root: 'POPULAR', a: 'POPULARITY', p: '-ITY sobre adjetivo', src: 'Sustantivos de cualidad', s: 'The show {1} caught the network completely off guard.', tip: 'POPULAR → POPULARITY. El acento salta a la tercera sílaba: popu-LA-rity.' },
{ id: 'd0451', root: 'PRIOR', a: 'PRIORITY', p: '-ITY sobre adjetivo', src: 'Sustantivos de cualidad', s: 'Flood defence became the council overriding {1}.', tip: 'PRIOR → PRIORITY. El verbo derivado es PRIORITISE.' },
{ id: 'd0452', root: 'PRODUCE', a: 'PRODUCTIVITY', p: '-IVE + -ITY', src: 'Sustantivos de cualidad', s: '{1} in the sector has barely moved in fifteen years.', tip: 'PRODUCE → PRODUCTIVE → PRODUCTIVITY. Tres pasos desde el verbo.' },
{ id: 'd0453', root: 'PROSPER', a: 'PROSPERITY', p: '-ITY sobre verbo', src: 'Sustantivos de cualidad', s: 'The post-war {1} of the town rested on a single factory.', tip: 'PROSPER → PROSPERITY. Compará con PROSPEROUS, el adjetivo.' },
{ id: 'd0454', root: 'SENSE', a: 'SENSITIVITY', p: '-ITIVE + -ITY', src: 'Sustantivos de cualidad', s: 'The instrument {1} allows it to detect a single photon.', tip: 'SENSE → SENSITIVE → SENSITIVITY. No confundir con SENSIBILITY, que es la sensibilidad estética.' },
{ id: 'd0455', root: 'SOLID', a: 'SOLIDARITY', p: '-ARITY (irregular)', src: 'Sustantivos de cualidad', s: 'The dockers came out in {1} with the miners.', tip: 'SOLID → SOLIDARITY, con una A intercalada. No es *solidity, que significa firmeza física.' },
{ id: 'd0456', root: 'VIABLE', a: 'VIABILITY', p: '-ABLE → -ABILITY', src: 'Sustantivos de cualidad', s: 'The commercial {1} of the line was never demonstrated.', tip: 'VIABLE → VIABILITY. Mismo mecanismo que LIABLE → LIABILITY.' },
{ id: 'd0457', root: 'VITAL', a: 'VITALITY', p: '-ITY sobre adjetivo', src: 'Sustantivos de cualidad', s: 'The scene retains a {1} that the official version lacks.', tip: 'VITAL → VITALITY = vitalidad, empuje.' },
{ id: 'd0458', root: 'VOLATILE', a: 'VOLATILITY', p: '-ITY sobre adjetivo', src: 'Sustantivos de cualidad', s: 'Market {1} made any forecast close to worthless.', tip: 'VOLATILE → VOLATILITY. Cae la E final.' },

/* ---- -ABILITY ------------------------------------------------------------- */
{ id: 'd0459', root: 'ACCOUNT', a: 'ACCOUNTABILITY', p: '-ABLE + -ITY', src: 'Sustantivos de cualidad', s: 'The reforms were sold as a gain in democratic {1}.', tip: 'ACCOUNT → ACCOUNTABLE → ACCOUNTABILITY. Compará con UNACCOUNTABLE.' },
{ id: 'd0460', root: 'AFFORD', a: 'AFFORDABILITY', p: '-ABLE + -ITY', src: 'Sustantivos de cualidad', s: 'Housing {1} is now the central issue in local politics.', tip: 'AFFORD → AFFORDABLE → AFFORDABILITY.' },
{ id: 'd0461', root: 'CAPABLE', a: 'CAPABILITY', p: '-ABLE → -ABILITY', src: 'Sustantivos de cualidad', s: 'The laboratory lacks the {1} to run the test in house.', tip: 'CAPABLE → CAPABILITY. Compará con CAPACITY: capability es la destreza, capacity el volumen.' },
{ id: 'd0462', root: 'DISPOSE', a: 'DISPOSABILITY', p: '-ABLE + -ITY', src: 'Sustantivos de cualidad', s: 'The essay attacks the cult of {1} in consumer design.', tip: 'DISPOSE → DISPOSABLE → DISPOSABILITY = el carácter de usar y tirar.' },
{ id: 'd0463', root: 'INEVITABLE', a: 'INEVITABILITY', p: '-ABLE → -ABILITY', src: 'Sustantivos de cualidad', s: 'The narrative gives the collapse an air of {1} it did not have.', tip: 'INEVITABLE → INEVITABILITY = inevitabilidad. La raíz ya trae IN-.' },
{ id: 'd0464', root: 'PROFIT', a: 'PROFITABILITY', p: '-ABLE + -ITY', src: 'Sustantivos de cualidad', s: 'The chain restored {1} by closing a third of its branches.', tip: 'PROFIT → PROFITABLE → PROFITABILITY.' },
{ id: 'd0465', root: 'SCALE', a: 'SCALABILITY', p: '-ABLE + -ITY', src: 'Sustantivos de cualidad', s: 'The prototype worked; its {1} was another matter.', tip: 'SCALE → SCALABLE → SCALABILITY. La E de SCALE cae.' },
{ id: 'd0466', root: 'SUITABLE', a: 'SUITABILITY', p: '-ABLE → -ABILITY', src: 'Sustantivos de cualidad', s: 'The panel raised no question as to her {1} for the post.', tip: 'SUITABLE → SUITABILITY. SUITABILITY FOR = idoneidad para.' },
{ id: 'd0467', root: 'SUSTAIN', a: 'SUSTAINABILITY', p: '-ABLE + -ITY', src: 'Sustantivos de cualidad', s: 'Every department now has a {1} officer.', tip: 'SUSTAIN → SUSTAINABLE → SUSTAINABILITY. Compará con UNSUSTAINABLE.' },
{ id: 'd0468', root: 'VULNERABLE', a: 'VULNERABILITIES', p: '-ABLE → -ABILITY', src: 'Sustantivos de cualidad', s: 'The audit exposed several serious {1} in the network.', tip: 'VULNERABLE → VULNERABILITY → VULNERABILITIES. La Y pasa a IES.' },
{ id: 'd0469', root: 'RESPONSIBLE', a: 'RESPONSIBILITY', p: '-IBLE → -IBILITY', src: 'Ampliación C2', s: 'Nobody was willing to accept {1} for the decision.', tip: 'RESPONSIBLE → RESPONSIBILITY. Con -IBLE, no -ABLE: de ahí -IBILITY.' },
{ id: 'd0470', root: 'PROBABLE', a: 'PROBABILITY', p: '-ABLE → -ABILITY', src: 'Ampliación C2', s: 'The {1} of a repeat event was put at one in four hundred.', tip: 'PROBABLE → PROBABILITY. Compará con IMPROBABLE y PROBABILISTIC, de la misma raíz.' },

/* ---- -IBILITY ------------------------------------------------------------- */
{ id: 'd0471', root: 'ACCESS', a: 'ACCESSIBILITY', p: '-IBLE + -ITY', src: 'Sustantivos de cualidad', s: 'The refit was driven mainly by {1} requirements.', tip: 'ACCESS → ACCESSIBLE → ACCESSIBILITY. Con -IBLE, así que -IBILITY.' },
{ id: 'd0472', root: 'CREDIBLE', a: 'CREDIBILITY', p: '-IBLE → -IBILITY', src: 'Sustantivos de cualidad', s: 'The retraction cost the paper a good deal of {1}.', tip: 'CREDIBLE → CREDIBILITY. Nunca *credibleity.' },
{ id: 'd0473', root: 'FEASIBLE', a: 'FEASIBILITY', p: '-IBLE → -IBILITY', src: 'Sustantivos de cualidad', s: 'A {1} study was commissioned before any money was committed.', tip: 'FEASIBLE → FEASIBILITY. A FEASIBILITY STUDY es colocación fija.' },
{ id: 'd0474', root: 'FLEXIBLE', a: 'FLEXIBILITY', p: '-IBLE → -IBILITY', src: 'Sustantivos de cualidad', s: 'Staff value the {1} of the arrangement above the salary.', tip: 'FLEXIBLE → FLEXIBILITY. La X se conserva.' },
{ id: 'd0475', root: 'LEGIBLE', a: 'LEGIBILITY', p: '-IBLE → -IBILITY', src: 'Sustantivos de cualidad', s: 'The typeface was chosen purely for {1} at small sizes.', tip: 'LEGIBLE → LEGIBILITY. Compará con ILLEGIBLE, su negativo.' },
{ id: 'd0476', root: 'VISIBLE', a: 'VISIBILITY', p: '-IBLE → -IBILITY', src: 'Sustantivos de cualidad', s: 'Poor {1} forced the closure of the airport for six hours.', tip: 'VISIBLE → VISIBILITY. También se usa en sentido figurado: notoriedad pública.' },
{ id: 'd0477', root: 'SENSIBLE', a: 'SENSIBILITY', p: '-IBLE → -IBILITY', src: 'Ampliación C2', s: 'The letters reveal a {1} formed almost entirely by reading.', tip: 'SENSIBILITY = sensibilidad estética o moral. No confundir con SENSITIVITY, que es la reacción a un estímulo.' },
{ id: 'd0478', root: 'COMPATIBLE', a: 'COMPATIBILITY', p: '-IBLE → -IBILITY', src: 'Ampliación C2', s: '{1} with the older format was abandoned in version four.', tip: 'COMPATIBLE → COMPATIBILITY. Rige WITH.' },
{ id: 'd0479', root: 'ELIGIBLE', a: 'ELIGIBILITY', p: '-IBLE → -IBILITY', src: 'Ampliación C2', s: 'Her {1} for the grant was never in doubt.', tip: 'ELIGIBLE → ELIGIBILITY. ELIGIBLE FOR = con derecho a.' },
{ id: 'd0480', root: 'PLAUSIBLE', a: 'PLAUSIBILITY', p: '-IBLE → -IBILITY', src: 'Ampliación C2', s: 'The account gains {1} from a wealth of small detail.', tip: 'PLAUSIBLE → PLAUSIBILITY = verosimilitud.' },
{ id: 'd0481', root: 'CAPACITY', a: 'CAPACITIES', p: 'Flexión de plural', af: 'inflection', src: 'Ampliación C2', s: 'He served the institution in three different {1} over twenty years.', tip: 'Aquí no hay derivación: sólo el plural del sustantivo dado. La Y pasa a IES.' },
{ id: 'd0482', root: 'COMPLEX', a: 'COMPLEXITY', p: '-ITY sobre adjetivo', src: 'Ampliación C2', s: 'The sheer {1} of the tax code defeats most taxpayers.', tip: 'COMPLEX → COMPLEXITY. La X se mantiene.' }

]);
