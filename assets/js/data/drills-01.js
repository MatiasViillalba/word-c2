/**
 * Drill bank 01 — the UN- prefix.
 *
 * UN- is the default English negative and the single most examined prefix in
 * Part 3. It attaches to adjectives and participles, almost never to verbs of
 * Latin origin (that is IN-'s territory), and it survives intact when a suffix
 * is stacked on top: AVOID → UNAVOIDABLE → UNAVOIDABLY.
 */
WC2.content.registerDrills([

/* ---- UN- + adjective ------------------------------------------------------ */
{ id: 'd0001', root: 'AVOID', a: 'UNAVOIDABLE', p: 'UN- + -ABLE', src: 'Prefijos negativos', s: 'Given the state of the roads, some delay was entirely {1}.', tip: 'AVOID → AVOIDABLE (evitable) → UNAVOIDABLE (inevitable). El sufijo entra primero y el prefijo después.' },
{ id: 'd0002', root: 'AVOID', a: 'UNAVOIDABLY', p: 'UN- + -ABLE + -LY', src: 'Prefijos negativos', s: 'The refurbishment has {1} disrupted the whole timetable.', tip: 'Tres piezas apiladas: AVOID + -ABLE + UN- + -LY. Como adverbio modifica al verbo «disrupted».' },
{ id: 'd0003', root: 'BEAR', a: 'UNBEARABLE', p: 'UN- + -ABLE', src: 'Prefijos negativos', s: 'By August the heat in the upper galleries becomes quite {1}.', tip: 'BEAR = soportar. UNBEARABLE = insoportable. Ojo con la doble R: no lleva.' },
{ id: 'd0004', root: 'THINK', a: 'UNTHINKABLE', p: 'UN- + -ABLE', src: 'Prefijos negativos', s: 'A generation ago such a proposal would have been simply {1}.', tip: 'UNTHINKABLE = impensable. Verbo irregular, pero el sufijo -ABLE se pega sin cambios.' },
{ id: 'd0005', root: 'AFFORD', a: 'UNAFFORDABLE', p: 'UN- + -ABLE', src: 'Prefijos negativos', s: 'Housing in the city centre has become {1} for anyone on an average salary.', tip: 'AFFORD → AFFORDABLE → UNAFFORDABLE. El doble F de la raíz se conserva.' },
{ id: 'd0006', root: 'SUSTAIN', a: 'UNSUSTAINABLE', p: 'UN- + -ABLE', src: 'Prefijos negativos', s: 'Current rates of extraction are widely acknowledged to be {1}.', tip: 'SUSTAIN → SUSTAINABLE → UNSUSTAINABLE. Palabra clave del registro medioambiental.' },
{ id: 'd0007', root: 'ACCOUNT', a: 'UNACCOUNTABLE', p: 'UN- + -ABLE', src: 'Prefijos negativos', s: 'Critics argue that the regulator is effectively {1} to anyone.', tip: 'ACCOUNTABLE = responsable ante alguien. UNACCOUNTABLE = que no rinde cuentas.' },
{ id: 'd0008', root: 'ACCEPT', a: 'UNACCEPTABLE', p: 'UN- + -ABLE', src: 'Prefijos negativos', s: 'The committee found the delay in reporting the incident wholly {1}.', tip: 'ACCEPT → ACCEPTABLE → UNACCEPTABLE. La raíz no cambia en ningún paso.' },
{ id: 'd0009', root: 'ACCEPT', a: 'UNACCEPTABLY', p: 'UN- + -ABLE + -LY', src: 'Prefijos negativos', s: 'Waiting times in the department remain {1} long.', tip: '-ABLE pierde la E ante -LY: UNACCEPTABLE → UNACCEPTABLY. Aquí modifica al adjetivo «long».' },
{ id: 'd0010', root: 'CONTAIN', a: 'UNCONTAINABLE', p: 'UN- + -ABLE', src: 'Prefijos negativos', s: 'Once the rumour reached social media it proved entirely {1}.', tip: 'CONTAIN = contener, atajar. UNCONTAINABLE = imposible de contener.' },
{ id: 'd0011', root: 'BRIDGE', a: 'UNBRIDGEABLE', p: 'UN- + -ABLE', src: 'Prefijos negativos', s: 'The gulf between the two positions looked {1} by the third day of talks.', tip: 'BRIDGE como verbo = salvar una distancia. La E de BRIDGE se conserva ante -ABLE porque va tras G.' },
{ id: 'd0012', root: 'DENY', a: 'UNDENIABLE', p: 'UN- + -ABLE', src: 'Prefijos negativos', s: 'Her contribution to the field is by now quite {1}.', tip: 'La Y de DENY se vuelve I: DENY → DENIABLE → UNDENIABLE.' },
{ id: 'd0013', root: 'DENY', a: 'UNDENIABLY', p: 'UN- + -ABLE + -LY', src: 'Prefijos negativos', s: 'The building is {1} striking, whatever one thinks of its function.', tip: 'UNDENIABLE → UNDENIABLY. Como adverbio de comentario suele preceder al adjetivo.' },
{ id: 'd0014', root: 'ACCEPT', a: 'UNACCEPTABLE', p: 'UN- + -ABLE', src: 'Refuerzo', s: 'Anything less than full disclosure would be {1} to the shareholders.', tip: 'Segundo contexto para la misma derivación: el patrón se fija con la variedad, no con la repetición literal.' },

/* ---- UN- + participle ----------------------------------------------------- */
{ id: 'd0015', root: 'EXPECT', a: 'UNEXPECTED', p: 'UN- + -ED', src: 'Prefijos negativos', s: 'An {1} rise in demand caught the whole sector off guard.', tip: 'UN- sobre participio pasado: UNEXPECTED = inesperado. Aquí funciona como adjetivo antepuesto.' },
{ id: 'd0016', root: 'EXPECT', a: 'UNEXPECTEDLY', p: 'UN- + -ED + -LY', src: 'Prefijos negativos', s: 'The negotiations ended {1} early, to everyone relief.', tip: 'UNEXPECTED → UNEXPECTEDLY. Adverbio que modifica a «early».' },
{ id: 'd0017', root: 'ALTER', a: 'UNALTERED', p: 'UN- + -ED', src: 'Prefijos negativos', s: 'The facade has survived four centuries essentially {1}.', tip: 'ALTER = alterar. UNALTERED = sin modificar. La R no se dobla porque el acento cae en la primera sílaba.' },
{ id: 'd0018', root: 'CONTROL', a: 'UNCONTROLLED', p: 'UN- + -ED', src: 'Prefijos negativos', s: 'Decades of {1} logging have left the watershed badly degraded.', tip: 'CONTROL dobla la L ante sufijo: CONTROLLED. Luego UN- delante.' },
{ id: 'd0019', root: 'BIAS', a: 'UNBIASED', p: 'UN- + -ED', src: 'Prefijos negativos', s: 'Readers are entitled to expect an {1} account of the affair.', tip: 'BIAS → BIASED → UNBIASED. La S no se dobla en británico estándar.' },
{ id: 'd0020', root: 'LICENSE', a: 'UNLICENSED', p: 'UN- + -ED', src: 'Prefijos negativos', s: 'The council has moved to close down {1} premises across the district.', tip: 'LICENSE (verbo) → LICENSED → UNLICENSED = sin licencia.' },
{ id: 'd0021', root: 'AUTHORITY', a: 'UNAUTHORIZED', alt: ['UNAUTHORISED'], p: 'UN- + -ISE/-IZE + -ED', src: 'Prefijos negativos', s: 'Staff are reminded that {1} access to the archive is a disciplinary matter.', tip: 'AUTHORITY → AUTHORIZE → AUTHORIZED → UNAUTHORIZED. Cambridge acepta -ISED y -IZED si sos consistente.' },
{ id: 'd0022', root: 'PRECEDE', a: 'UNPRECEDENTED', p: 'UN- + -ENT + -ED', src: 'Prefijos negativos', s: 'The scale of the response was {1} in the institution history.', tip: 'PRECEDE → PRECEDENT → UNPRECEDENTED = sin precedentes. Fijate en la E antes de la D final.' },
{ id: 'd0023', root: 'PRECEDENT', a: 'UNPRECEDENTED', p: 'UN- + -ED', src: 'Prefijos negativos', s: 'Rainfall reached {1} levels for a third consecutive winter.', tip: 'Desde el sustantivo PRECEDENT solo hace falta UN- y -ED. Misma palabra, raíz distinta: el examen usa las dos.' },
{ id: 'd0024', root: 'KNOW', a: 'UNKNOWN', p: 'UN- + participio irregular', src: 'Prefijos negativos', s: 'The author of the manuscript remains {1} to this day.', tip: 'KNOW → KNOWN (participio irregular) → UNKNOWN. No existe *UNKNOWED.' },
{ id: 'd0025', root: 'DOUBT', a: 'UNDOUBTEDLY', p: 'UN- + -ED + -LY', src: 'Prefijos negativos', s: 'She is {1} the finest translator of her generation.', tip: 'DOUBT → DOUBTED → UNDOUBTED → UNDOUBTEDLY = sin duda. La B es muda pero se escribe.' },

/* ---- UN- + simple adjective ----------------------------------------------- */
{ id: 'd0026', root: 'AWARE', a: 'UNAWARE', p: 'UN- sobre adjetivo', src: 'Prefijos negativos', s: 'Most passengers were entirely {1} of the diversion until they landed.', tip: 'UNAWARE of something = ajeno a algo. Rige la preposición OF.' },
{ id: 'd0027', root: 'CERTAIN', a: 'UNCERTAIN', p: 'UN- sobre adjetivo', src: 'Prefijos negativos', s: 'The long-term consequences of the ruling remain {1}.', tip: 'CERTAIN → UNCERTAIN. Compará con el sustantivo UNCERTAINTY.' },
{ id: 'd0028', root: 'IMPORTANT', a: 'UNIMPORTANT', p: 'UN- sobre adjetivo', src: 'Prefijos negativos', s: 'He dismissed the discrepancy as trivial and {1}.', tip: 'IMPORTANT ya empieza por IM-, pero ese IM- no es negativo: hace falta UN- delante.' },
{ id: 'd0029', root: 'TYPICAL', a: 'UNTYPICAL', alt: ['ATYPICAL'], p: 'UN- sobre adjetivo', src: 'Prefijos negativos', s: 'Such candour was distinctly {1} of him.', tip: 'UNTYPICAL y ATYPICAL coexisten; UN- es la formación transparente.' },
{ id: 'd0030', root: 'FAVOUR', a: 'UNFAVOURABLE', p: 'UN- + -ABLE', src: 'Prefijos negativos', s: 'The report drew an {1} comparison with the previous administration.', tip: 'FAVOUR → FAVOURABLE → UNFAVOURABLE. Ortografía británica con -OUR.' },
{ id: 'd0031', root: 'FORTUNATE', a: 'UNFORTUNATELY', p: 'UN- + -LY', src: 'Prefijos negativos', s: '{1}, the original recordings were destroyed in the fire.', tip: 'FORTUNATE → UNFORTUNATE → UNFORTUNATELY. Adverbio de comentario: abre la oración y va con coma.' },
{ id: 'd0032', root: 'CONVENTION', a: 'UNCONVENTIONAL', p: 'UN- + -AL', src: 'Prefijos negativos', s: 'Her methods were {1} but the results spoke for themselves.', tip: 'CONVENTION → CONVENTIONAL → UNCONVENTIONAL. El sufijo -AL va antes que el prefijo.' },
{ id: 'd0033', root: 'COUNTABLE', a: 'UNCOUNTABLE', p: 'UN- sobre adjetivo', src: 'Prefijos negativos', s: 'Grammarians classify «advice» and «information» as {1} nouns.', tip: 'La raíz ya es un adjetivo en -ABLE: solo falta el prefijo.' },
{ id: 'd0034', root: 'TIME', a: 'UNTIMELY', p: 'UN- + -LY adjetival', src: 'Prefijos negativos', s: 'His {1} death cut short a promising body of work.', tip: 'Aquí -LY forma un adjetivo, no un adverbio: UNTIMELY = prematuro, inoportuno.' },
{ id: 'd0035', root: 'REST', a: 'UNREST', p: 'UN- sobre sustantivo', src: 'Prefijos negativos', s: 'Months of civil {1} followed the collapse of the currency.', tip: 'Caso poco común: UN- sobre un sustantivo. UNREST = disturbios, agitación.' },

/* ---- UN- ampliado: material extra de nivel C2 ----------------------------- */
{ id: 'd0036', root: 'QUESTION', a: 'UNQUESTIONABLE', p: 'UN- + -ABLE', src: 'Ampliación C2', s: 'Her authority on the subject is {1}.', tip: 'QUESTIONABLE = discutible; UNQUESTIONABLE = incuestionable.' },
{ id: 'd0037', root: 'MISTAKE', a: 'UNMISTAKABLE', p: 'UN- + -ABLE', src: 'Ampliación C2', s: 'There was an {1} note of irritation in his reply.', tip: 'MISTAKE pierde la E ante -ABLE: UNMISTAKABLE = inconfundible.' },
{ id: 'd0038', root: 'PARALLEL', a: 'UNPARALLELED', p: 'UN- + -ED', src: 'Ampliación C2', s: 'The archive offers an {1} record of nineteenth-century trade.', tip: 'UNPARALLELED = sin parangón. Una sola L al final pese a las dos anteriores.' },
{ id: 'd0039', root: 'RIVAL', a: 'UNRIVALLED', p: 'UN- + -ED', src: 'Ampliación C2', s: 'For sheer breadth the collection is {1} in Europe.', tip: 'RIVAL dobla la L en británico: UNRIVALLED. En americano, UNRIVALED.' },
{ id: 'd0040', root: 'FOUND', a: 'UNFOUNDED', p: 'UN- + -ED', src: 'Ampliación C2', s: 'The allegations were shown to be entirely {1}.', tip: 'UNFOUNDED = infundado, sin fundamento. De FOUND en el sentido de «fundar, basar».' },
{ id: 'd0041', root: 'WARRANT', a: 'UNWARRANTED', p: 'UN- + -ED', src: 'Ampliación C2', s: 'The intrusion into her private life was wholly {1}.', tip: 'WARRANT = justificar. UNWARRANTED = injustificado.' },
{ id: 'd0042', root: 'FORESEE', a: 'UNFORESEEN', p: 'UN- + participio irregular', src: 'Ampliación C2', s: 'A series of {1} setbacks pushed the launch back a year.', tip: 'FORESEE → FORESEEN → UNFORESEEN. Participio irregular, como SEE → SEEN.' },
{ id: 'd0043', root: 'INHABIT', a: 'UNINHABITABLE', p: 'UN- + -ABLE', src: 'Ampliación C2', s: 'Rising salinity has left large tracts of the delta {1}.', tip: 'INHABIT → INHABITABLE → UNINHABITABLE. Ojo: el IN- de INHABIT no es negativo.' },
{ id: 'd0044', root: 'SETTLE', a: 'UNSETTLING', p: 'UN- + -ING', src: 'Ampliación C2', s: 'There is something quietly {1} about the painting composition.', tip: 'UNSETTLING = inquietante. Participio activo: describe lo que causa la sensación.' },
{ id: 'd0045', root: 'NERVE', a: 'UNNERVING', p: 'UN- + -ING', src: 'Ampliación C2', s: 'The silence that followed the announcement was frankly {1}.', tip: 'Doble N: UN + NERVE → UNNERVING = desconcertante.' },
{ id: 'd0046', root: 'COMPROMISE', a: 'UNCOMPROMISING', p: 'UN- + -ING', src: 'Ampliación C2', s: 'She took an {1} line on the question of funding.', tip: 'UNCOMPROMISING = inflexible, que no transige.' },
{ id: 'd0047', root: 'YIELD', a: 'UNYIELDING', p: 'UN- + -ING', src: 'Ampliación C2', s: 'The negotiators found him courteous but {1}.', tip: 'YIELD = ceder. UNYIELDING = que no cede, inquebrantable.' },
{ id: 'd0048', root: 'SCRUPLE', a: 'UNSCRUPULOUS', p: 'UN- + -OUS', src: 'Ampliación C2', s: 'A handful of {1} operators gave the whole trade a bad name.', tip: 'SCRUPLE → SCRUPULOUS → UNSCRUPULOUS = sin escrúpulos. Fijate en la U que aparece antes de -LOUS.' },
{ id: 'd0049', root: 'EASE', a: 'UNEASY', p: 'UN- + -Y', src: 'Ampliación C2', s: 'The two departments maintain an {1} truce over the budget.', tip: 'EASE → EASY → UNEASY = incómodo, tenso. El sustantivo es UNEASE.' },
{ id: 'd0050', root: 'WIT', a: 'UNWITTINGLY', p: 'UN- + -ING + -LY', src: 'Ampliación C2', s: 'He had {1} become the public face of a campaign he disliked.', tip: 'UNWITTINGLY = sin darse cuenta, involuntariamente. Nada que ver con «ingenio» moderno.' },
{ id: 'd0051', root: 'DUE', a: 'UNDULY', p: 'UN- + -LY', src: 'Ampliación C2', s: 'Nobody was {1} surprised when the merger was called off.', tip: 'DUE → DULY → UNDULY = excesivamente, indebidamente. La E desaparece.' },
{ id: 'd0052', root: 'ATTAIN', a: 'UNATTAINABLE', p: 'UN- + -ABLE', src: 'Ampliación C2', s: 'The targets set in 2019 now look frankly {1}.', tip: 'ATTAIN → ATTAINABLE → UNATTAINABLE = inalcanzable.' }

]);
