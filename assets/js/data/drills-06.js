/**
 * Drill bank 06 — the -ATION family.
 *
 * The single most productive noun suffix in the exam. Three things decide the
 * spelling and all three are tested:
 *   verbs in -ATE drop it     CIRCULATE → CIRCULATION, not *circulateation
 *   verbs in -Y become -IC    MODIFY → MODIFICATION, NOTIFY → NOTIFICATION
 *   verbs in -ISE keep it     MONETISE → MONETISATION
 * Anything else simply adds -ATION: EXPLOIT → EXPLOITATION.
 */
WC2.content.registerDrills([

/* ---- Raíces en -ATE: la -ATE desaparece ---------------------------------- */
{ id: 'd0241', root: 'CIRCULATE', a: 'CIRCULATION', p: '-ATE → -ATION', src: 'Sustantivos abstractos', s: 'The magazine {1} halved in the space of five years.', tip: 'CIRCULATE pierde la -ATE entera: CIRCULATION. Nunca *circulateation.' },
{ id: 'd0242', root: 'AGGREGATE', a: 'AGGREGATION', p: '-ATE → -ATION', src: 'Sustantivos abstractos', s: 'The {1} of thousands of small readings produced a clear pattern.', tip: 'AGGREGATE → AGGREGATION = agregación, suma de partes.' },
{ id: 'd0243', root: 'ANTICIPATE', a: 'ANTICIPATION', p: '-ATE → -ATION', src: 'Sustantivos abstractos', s: 'Tickets sold out in {1} of a tour that never happened.', tip: 'IN ANTICIPATION OF = en previsión de. Frase preposicional fija.' },
{ id: 'd0244', root: 'APPRECIATE', a: 'APPRECIATION', p: '-ATE → -ATION', src: 'Sustantivos abstractos', s: 'His {1} of eighteenth-century glass was largely self-taught.', tip: 'APPRECIATION OF = comprensión o valoración de. También significa revalorización.' },
{ id: 'd0245', root: 'CONCENTRATE', a: 'CONCENTRATIONS', p: '-ATE → -ATION', src: 'Sustantivos abstractos', s: 'Unusually high {1} of nitrate were found downstream.', tip: 'Plural porque hay varias mediciones distintas. CONCENTRATE → CONCENTRATION.' },
{ id: 'd0246', root: 'EQUATE', a: 'EQUATIONS', p: '-ATE → -ATION', src: 'Sustantivos abstractos', s: 'The whole model rests on two remarkably simple {1}.', tip: 'EQUATE = equiparar. EQUATION = ecuación.' },
{ id: 'd0247', root: 'OPERATE', a: 'OPERATIONS', p: '-ATE → -ATION', src: 'Sustantivos abstractos', s: 'The company suspended {1} at three of its northern sites.', tip: 'OPERATE → OPERATION. En plural cuando se habla de actividad empresarial o militar.' },
{ id: 'd0248', root: 'PROLIFERATE', a: 'PROLIFERATION', p: '-ATE → -ATION', src: 'Sustantivos abstractos', s: 'The {1} of small independent labels transformed the scene.', tip: 'PROLIFERATE = multiplicarse. PROLIFERATION = proliferación.' },
{ id: 'd0249', root: 'NUMERATE', a: 'NUMERATION', p: '-ATE → -ATION', src: 'Sustantivos abstractos', s: 'Early systems of {1} rarely extended beyond a few thousand.', tip: 'NUMERATE → NUMERATION = numeración, sistema de contar.' },
{ id: 'd0250', root: 'AUTOMATIC', a: 'AUTOMATION', p: 'Raíz + -ATION', src: 'Sustantivos abstractos', s: 'Widespread {1} has hollowed out the middle of the labour market.', tip: 'AUTOMATIC → AUTOMATE → AUTOMATION. El adjetivo da el verbo y el verbo el sustantivo.' },

/* ---- Raíces en -Y: la Y se vuelve -IC ------------------------------------ */
{ id: 'd0251', root: 'MODIFY', a: 'MODIFICATIONS', p: '-FY → -FICATION', src: 'Sustantivos abstractos', s: 'A handful of minor {1} brought the building up to code.', tip: 'MODIFY → MODIFICATION. Todos los verbos en -FY hacen -FICATION: CLASSIFY, JUSTIFY, SIMPLIFY.' },
{ id: 'd0252', root: 'NOTIFY', a: 'NOTIFICATION', p: '-FY → -FICATION', src: 'Sustantivos abstractos', s: 'Residents received no {1} of the road closure.', tip: 'NOTIFY → NOTIFICATION. Mismo mecanismo que MODIFY.' },
{ id: 'd0253', root: 'IMPLY', a: 'IMPLICATION', p: '-Y → -ICATION', src: 'Sustantivos abstractos', s: 'The {1} of the remark was lost on nobody present.', tip: 'IMPLY → IMPLICATION = insinuación, cosa que se da a entender.' },
{ id: 'd0254', root: 'IMPLY', a: 'IMPLICATIONS', p: '-Y → -ICATION', src: 'Sustantivos abstractos', s: 'The ruling has serious {1} for every tenant in the country.', tip: 'En plural pasa a significar «consecuencias»: IMPLICATIONS FOR.' },

/* ---- Raíces en -ISE: se conserva ----------------------------------------- */
{ id: 'd0255', root: 'MONETISE', a: 'MONETISATION', alt: ['MONETIZATION'], p: '-ISE + -ATION', src: 'Sustantivos abstractos', s: 'The {1} of the archive proved harder than digitising it.', tip: 'MONETISE → MONETISATION. La S se mantiene; con -IZE sería MONETIZATION.' },
{ id: 'd0256', root: 'DIGITAL', a: 'DIGITISATION', alt: ['DIGITIZATION'], p: '-ISE + -ATION', src: 'Sustantivos abstractos', s: 'The {1} of the parish registers took eleven years.', tip: 'DIGITAL → DIGITISE → DIGITISATION. Tres pasos encadenados.' },
{ id: 'd0257', root: 'MARGIN', a: 'MARGINALISATION', alt: ['MARGINALIZATION'], p: '-AL + -ISE + -ATION', src: 'Sustantivos abstractos', s: 'The report documents the steady {1} of minority languages.', tip: 'MARGIN → MARGINAL → MARGINALISE → MARGINALISATION. Cuatro piezas.' },
{ id: 'd0258', root: 'POLAR', a: 'POLARISATION', alt: ['POLARIZATION'], p: '-ISE + -ATION', src: 'Sustantivos abstractos', s: 'Political {1} has deepened with every election cycle.', tip: 'POLAR → POLARISE → POLARISATION = polarización.' },
{ id: 'd0259', root: 'REVIVE', a: 'REVITALISATION', alt: ['REVITALIZATION'], p: '-AL + -ISE + -ATION', src: 'Sustantivos abstractos', s: 'The {1} of the town centre began with a single bookshop.', tip: 'REVIVE comparte raíz con VITAL: VITAL → VITALISE → REVITALISATION.' },
{ id: 'd0260', root: 'REAL', a: 'REALIZATION', alt: ['REALISATION'], p: '-ISE/-IZE + -ATION', src: 'Sustantivos abstractos', s: 'The {1} that nobody was coming dawned slowly.', tip: 'REAL → REALIZE → REALIZATION. Aquí es «darse cuenta», no «realizar».' },

/* ---- Raíces normales: se añade -ATION ------------------------------------ */
{ id: 'd0261', root: 'EXPLOIT', a: 'EXPLOITATION', p: 'Raíz + -ATION', src: 'Sustantivos abstractos', s: 'The commission was set up to investigate labour {1}.', tip: 'EXPLOIT → EXPLOITATION. La raíz no cambia ni una letra.' },
{ id: 'd0262', root: 'DOCUMENT', a: 'DOCUMENTATION', p: 'Raíz + -ATION', src: 'Sustantivos abstractos', s: 'The claim was rejected for want of adequate {1}.', tip: 'DOCUMENT → DOCUMENTATION. Incontable: nunca *a documentation.' },
{ id: 'd0263', root: 'ADAPT', a: 'ADAPTATION', p: 'Raíz + -ATION', src: 'Sustantivos abstractos', s: 'The novel has resisted every attempt at screen {1}.', tip: 'ADAPT → ADAPTATION. Ojo con la doble A: adapt-ation, no *adaption.' },
{ id: 'd0264', root: 'ADAPT', a: 'ADAPTATIONS', p: 'Raíz + -ATION', src: 'Sustantivos abstractos', s: 'Desert plants show a range of remarkable {1} to drought.', tip: 'En plural y en sentido biológico: adaptaciones al medio. Rige TO.' },
{ id: 'd0265', root: 'CONSERVE', a: 'CONSERVATION', p: '-VE → -VATION', src: 'Sustantivos abstractos', s: 'The trust spends most of its income on habitat {1}.', tip: 'CONSERVE → CONSERVATION. La E final cae.' },
{ id: 'd0266', root: 'PRESERVE', a: 'PRESERVATION', p: '-VE → -VATION', src: 'Sustantivos abstractos', s: 'The {1} of the timber frame was the most delicate part of the work.', tip: 'PRESERVE → PRESERVATION. Compará con CONSERVATION: preservar es mantener intacto, conservar es proteger de la pérdida.' },
{ id: 'd0267', root: 'DECLARE', a: 'DECLARATION', p: '-ARE → -ARATION', src: 'Sustantivos abstractos', s: 'The {1} was signed by delegates from forty countries.', tip: 'DECLARE → DECLARATION. La E cae y aparece la A.' },
{ id: 'd0268', root: 'INSPIRE', a: 'INSPIRATION', p: '-IRE → -IRATION', src: 'Sustantivos abstractos', s: 'She drew her {1} from medieval manuscript borders.', tip: 'INSPIRE → INSPIRATION. La I larga de INSPIRE se acorta en el sustantivo.' },
{ id: 'd0269', root: 'CONSOLE', a: 'CONSOLATION', p: '-OLE → -OLATION', src: 'Sustantivos abstractos', s: 'That the damage was covered proved scant {1}.', tip: 'CONSOLE (consolar) → CONSOLATION = consuelo. Nada que ver con la consola de videojuegos.' },
{ id: 'd0270', root: 'RECITE', a: 'RECITATION', p: '-ITE → -ITATION', src: 'Sustantivos abstractos', s: 'The whole poem was learned by heart for public {1}.', tip: 'RECITE → RECITATION = recitación.' },
{ id: 'd0271', root: 'FERMENT', a: 'FERMENTATION', p: 'Raíz + -ATION', src: 'Sustantivos abstractos', s: 'Slow {1} at a low temperature gives the loaf its flavour.', tip: 'FERMENT → FERMENTATION. Como verbo el acento va al final; como sustantivo, al principio.' },
{ id: 'd0272', root: 'DOMESTIC', a: 'DOMESTICATION', p: '-ATE + -ATION', src: 'Sustantivos abstractos', s: 'The {1} of the horse changed warfare permanently.', tip: 'DOMESTIC → DOMESTICATE → DOMESTICATION.' },
{ id: 'd0273', root: 'COMPUTE', a: 'COMPUTATION', p: '-UTE → -UTATION', src: 'Sustantivos abstractos', s: 'The {1} took a fortnight on the machines of the day.', tip: 'COMPUTE → COMPUTATION. Compará con COMPUTER, que usa la misma raíz con otro sufijo.' },
{ id: 'd0274', root: 'REPRESENT', a: 'REPRESENTATION', p: 'Raíz + -ATION', src: 'Sustantivos abstractos', s: 'Rural areas have long complained of poor {1} in parliament.', tip: 'REPRESENT → REPRESENTATION. Aparece la A antes de -TION.' },
{ id: 'd0275', root: 'MANIFEST', a: 'MANIFESTATIONS', p: 'Raíz + -ATION', src: 'Sustantivos abstractos', s: 'The illness has a number of quite distinct {1}.', tip: 'MANIFEST → MANIFESTATION = manifestación, forma en que algo se muestra.' },
{ id: 'd0276', root: 'DESTINE', a: 'DESTINATIONS', p: '-INE → -INATION', src: 'Sustantivos abstractos', s: 'The island became one of the most photographed {1} in Europe.', tip: 'DESTINE → DESTINATION. El verbo casi sólo aparece en «destined for».' },
{ id: 'd0277', root: 'DESPERATE', a: 'DESPERATION', p: '-ATE → -ATION', src: 'Sustantivos abstractos', s: 'In sheer {1} they wrote to the minister directly.', tip: 'DESPERATE → DESPERATION. Fijate: no es *desparation, la E se mantiene.' },
{ id: 'd0278', root: 'NARRATIVE', a: 'NARRATION', p: 'Raíz + -ATION', src: 'Sustantivos abstractos', s: 'The film relies on voice-over {1} throughout.', tip: 'NARRATIVE / NARRATE → NARRATION = la acción de narrar. NARRATIVE es el relato en sí.' },

/* ---- Ampliación: -ATION de alta frecuencia -------------------------------- */
{ id: 'd0279', root: 'INTERPRET', a: 'INTERPRETATION', p: 'Raíz + -ATION', src: 'Ampliación C2', s: 'Her {1} of the sonata divided the critics.', tip: 'INTERPRET → INTERPRETATION. Sin doblar la T.' },
{ id: 'd0280', root: 'OBSERVE', a: 'OBSERVATION', p: '-VE → -VATION', src: 'Ampliación C2', s: 'The tower was built purely for astronomical {1}.', tip: 'OBSERVE → OBSERVATION. Misma pauta que CONSERVE y PRESERVE.' },
{ id: 'd0281', root: 'DETERIORATE', a: 'DETERIORATION', p: '-ATE → -ATION', src: 'Ampliación C2', s: 'The {1} of the stonework accelerated after 1960.', tip: 'DETERIORATE → DETERIORATION = deterioro. Cinco sílabas y dos R separadas.' },
{ id: 'd0282', root: 'ACCUMULATE', a: 'ACCUMULATION', p: '-ATE → -ATION', src: 'Ampliación C2', s: 'The gradual {1} of silt eventually closed the harbour.', tip: 'ACCUMULATE → ACCUMULATION. Doble C, una sola M.' },
{ id: 'd0283', root: 'SPECULATE', a: 'SPECULATION', p: '-ATE → -ATION', src: 'Ampliación C2', s: 'The announcement put an end to months of {1}.', tip: 'SPECULATE → SPECULATION = especulación, conjetura.' },
{ id: 'd0284', root: 'JUSTIFY', a: 'JUSTIFICATION', p: '-FY → -FICATION', src: 'Ampliación C2', s: 'There was no plausible {1} for the delay.', tip: 'JUSTIFY → JUSTIFICATION. La familia -FY es completamente regular.' },
{ id: 'd0285', root: 'QUALIFY', a: 'QUALIFICATIONS', p: '-FY → -FICATION', src: 'Ampliación C2', s: 'Her academic {1} were never in doubt.', tip: 'QUALIFY → QUALIFICATION. En plural: titulaciones.' },
{ id: 'd0286', root: 'EXPECT', a: 'EXPECTATION', p: 'Raíz + -ATION', src: 'Ampliación C2', s: 'The response exceeded every reasonable {1}.', tip: 'EXPECT → EXPECTATION. Compará con UNEXPECTED: la misma raíz por dos caminos.' },
{ id: 'd0287', root: 'CONSIDER', a: 'CONSIDERATION', p: 'Raíz + -ATION', src: 'Ampliación C2', s: 'After long {1} the committee rejected all three bids.', tip: 'CONSIDER → CONSIDERATION. TAKE something INTO CONSIDERATION es colocación fija.' },
{ id: 'd0288', root: 'RECOMMEND', a: 'RECOMMENDATIONS', p: 'Raíz + -ATION', src: 'Ampliación C2', s: 'Only two of the twelve {1} were ever implemented.', tip: 'RECOMMEND → RECOMMENDATION. Una C y dos M: el error más común de la palabra.' },
{ id: 'd0289', root: 'IMPLEMENT', a: 'IMPLEMENTATION', p: 'Raíz + -ATION', src: 'Ampliación C2', s: 'The {1} of the new system slipped by two quarters.', tip: 'IMPLEMENT → IMPLEMENTATION = puesta en marcha.' },
{ id: 'd0290', root: 'ILLUMINATE', a: 'ILLUMINATION', p: '-ATE → -ATION', src: 'Ampliación C2', s: 'The manuscript {1} is the finest of its period.', tip: 'ILLUMINATE → ILLUMINATION. Doble L, una sola M y una sola N.' },
{ id: 'd0985', root: 'ISOLATE', a: 'ISOLATION', p: '-ATE → -ATION', src: 'Ampliación C2', s: 'Rural {1} is felt most keenly by those who cannot drive.', tip: 'ISOLATE → ISOLATION. Los verbos en -ATE pierden la E ante -ION.' }

]);
