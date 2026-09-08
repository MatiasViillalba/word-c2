/**
 * Drill bank 19 — the adverbs.
 *
 * -LY looks like the easiest suffix in the language and produces more careless
 * losses than any other, because reaching it usually means building an
 * adjective first and then applying a spelling rule to it. Six rules cover
 * almost everything the exam asks for:
 *
 *   -IC   → -ICALLY   REALISTIC → REALISTICALLY   (never *-icly)
 *   -LE   → -LY       PROBABLE → PROBABLY, REMARKABLE → REMARKABLY
 *   -Y    → -ILY      NECESSARY → NECESSARILY, ORDINARY → ORDINARILY
 *   -FUL  → -FULLY    BEAUTIFUL → BEAUTIFULLY   (two Ls)
 *   -AL   → -ALLY     ORAL → ORALLY   (two Ls)
 *   -UE   → -ULY      TRUE → TRULY, DUE → DULY   (the E goes)
 */
WC2.content.registerDrills([

/* ---- -LY sobre adjetivo simple ------------------------------------------- */
{ id: 'd0869', root: 'WIDE', a: 'WIDELY', p: '-LY sobre adjetivo', src: 'Adverbios', s: 'The technique is {1} used in conservation work.', tip: 'WIDE → WIDELY. La E se conserva. Compará con WIDESPREAD y WIDTH.' },
{ id: 'd0870', root: 'LARGE', a: 'LARGELY', p: '-LY sobre adjetivo', src: 'Adverbios', s: 'The collection remains {1} uncatalogued.', tip: 'LARGE → LARGELY = en gran medida. La E se conserva ante -LY.' },
{ id: 'd0871', root: 'DENSE', a: 'DENSELY', p: '-LY sobre adjetivo', src: 'Adverbios', s: 'The valley floor is {1} wooded for about four miles.', tip: 'DENSE → DENSELY. La E se conserva, como en LARGELY.' },
{ id: 'd0872', root: 'RAPID', a: 'RAPIDLY', p: '-LY sobre adjetivo', src: 'Adverbios', s: 'Conditions on the ridge deteriorated {1}.', tip: 'RAPID → RAPIDLY. Sin cambios en la raíz.' },
{ id: 'd0873', root: 'PREMATURE', a: 'PREMATURELY', p: '-LY sobre adjetivo', src: 'Adverbios', s: 'The announcement was made {1}, before the tests were complete.', tip: 'PREMATURE → PREMATURELY. La E se conserva.' },
{ id: 'd0874', root: 'ROUTINE', a: 'ROUTINELY', p: '-LY sobre adjetivo', src: 'Adverbios', s: 'Samples are {1} checked against a reference set.', tip: 'ROUTINE → ROUTINELY = de forma rutinaria, habitualmente.' },
{ id: 'd0875', root: 'RELATIVE', a: 'RELATIVELY', p: '-LY sobre adjetivo', src: 'Adverbios', s: 'The repair was {1} straightforward once the roof came off.', tip: 'RELATIVE → RELATIVELY = relativamente. Modifica al adjetivo que sigue.' },
{ id: 'd0876', root: 'EFFECT', a: 'EFFECTIVELY', p: '-IVE + -LY', src: 'Adverbios', s: 'The line was {1} closed for the whole of that winter.', tip: 'EFFECT → EFFECTIVE → EFFECTIVELY. Aquí significa «en la práctica», no «eficazmente».' },
{ id: 'd0877', root: 'PRODUCT', a: 'PRODUCTIVELY', p: '-IVE + -LY', src: 'Adverbios', s: 'The afternoon was spent rather more {1} than the morning.', tip: 'PRODUCT → PRODUCTIVE → PRODUCTIVELY. Compará con PRODUCTIVITY.' },
{ id: 'd0878', root: 'PROGRESS', a: 'PROGRESSIVELY', p: '-IVE + -LY', src: 'Adverbios', s: 'The bindings became {1} more fragile with each move.', tip: 'PROGRESS → PROGRESSIVE → PROGRESSIVELY = de forma gradual.' },
{ id: 'd0879', root: 'DECEIVE', a: 'DECEPTIVELY', p: '-IVE + -LY', src: 'Adverbios', s: 'The path looks {1} easy from the car park.', tip: 'DECEIVE → DECEPTION → DECEPTIVE → DECEPTIVELY. La V pasa a P.' },
{ id: 'd0880', root: 'CONCLUDE', a: 'CONCLUSIVELY', p: '-IVE + -LY', src: 'Adverbios', s: 'The point has never been settled {1}.', tip: 'CONCLUDE → CONCLUSIVE → CONCLUSIVELY. Compará con INCONCLUSIVE.' },
{ id: 'd0881', root: 'EXTENT', a: 'EXTENSIVELY', p: '-IVE + -LY', src: 'Adverbios', s: 'The building has been {1} altered since the first survey.', tip: 'EXTENT → EXTENSIVE → EXTENSIVELY. Compará con EXTENSION.' },

/* ---- -Y → -ILY ------------------------------------------------------------ */
{ id: 'd0882', root: 'NECESSARY', a: 'NECESSARILY', p: '-Y → -ILY', src: 'Adverbios', s: 'A longer text is not {1} a better one.', tip: 'NECESSARY → NECESSARILY. La Y pasa a I y entra la L: -ARILY.' },
{ id: 'd0883', root: 'NEED', a: 'NECESSARILY', p: 'Raíz supletiva + -ILY', src: 'Adverbios', s: 'What is popular is not {1} what lasts.', tip: 'Desde NEED hay que pasar por NECESSARY, que es una raíz distinta. El examen da cualquiera de las dos.' },
{ id: 'd0884', root: 'ORDINARY', a: 'ORDINARILY', p: '-Y → -ILY', src: 'Adverbios', s: 'The reading room is {1} open until eight.', tip: 'ORDINARY → ORDINARILY. Misma pauta que NECESSARILY. Compará con EXTRAORDINARILY.' },
{ id: 'd0885', root: 'VOLUNTEER', a: 'VOLUNTARILY', p: '-ARY → -ARILY', src: 'Adverbios', s: 'Every one of the sixty guides works {1}.', tip: 'VOLUNTEER → VOLUNTARY → VOLUNTARILY. Se pierde la doble E del sustantivo.' },
{ id: 'd0886', root: 'SATISFY', a: 'SATISFACTORILY', p: '-ORY → -ORILY', src: 'Adverbios', s: 'The discrepancy has never been explained {1}.', tip: 'SATISFY → SATISFACTORY → SATISFACTORILY. Seis sílabas: contá las letras al escribirla.' },
{ id: 'd0887', root: 'HAPPY', a: 'HAPPILY', p: '-Y → -ILY', src: 'Ampliación C2', s: '{1}, the original drawings had been photographed the year before.', tip: 'HAPPY → HAPPILY. Como adverbio de comentario significa «por suerte».' },
{ id: 'd0888', root: 'EASY', a: 'EASILY', p: '-Y → -ILY', src: 'Ampliación C2', s: 'It is {1} the most complete example in the country.', tip: 'EASY → EASILY. Ante un superlativo significa «con diferencia».' },

/* ---- -LE → -LY ------------------------------------------------------------ */
{ id: 'd0889', root: 'PROBABLE', a: 'PROBABLY', p: '-LE → -LY', src: 'Adverbios', s: 'The fire was {1} started by a fault in the wiring.', tip: 'PROBABLE → PROBABLY. Se pierde la E: no es *probablely.' },
{ id: 'd0890', root: 'REMARK', a: 'REMARKABLY', p: '-ABLE → -ABLY', src: 'Adverbios', s: 'The paintwork has survived {1} well.', tip: 'REMARK → REMARKABLE → REMARKABLY. Toda la familia -ABLE hace -ABLY.' },
{ id: 'd0891', root: 'CONSIDER', a: 'CONSIDERABLY', p: '-ABLE → -ABLY', src: 'Ampliación C2', s: 'Costs rose {1} in the second year.', tip: 'CONSIDER → CONSIDERABLE → CONSIDERABLY. Igual que REMARKABLY.' },
{ id: 'd0892', root: 'INEVITABLE', a: 'INEVITABLY', p: '-ABLE → -ABLY', src: 'Ampliación C2', s: 'The comparison with her earlier work is {1} unfair.', tip: 'INEVITABLE → INEVITABLY. Compará con INEVITABILITY.' },

/* ---- -AL → -ALLY (doble L) ----------------------------------------------- */
{ id: 'd0893', root: 'ORAL', a: 'ORALLY', p: '-AL → -ALLY', src: 'Adverbios', s: 'The tradition was transmitted {1} for three centuries.', tip: 'ORAL → ORALLY, con doble L. Compará con ORALITY.' },
{ id: 'd0894', root: 'ENVIRONMENT', a: 'ENVIRONMENTALLY', p: '-AL → -ALLY', src: 'Adverbios', s: 'The material is {1} preferable but three times the price.', tip: 'ENVIRONMENT → ENVIRONMENTAL → ENVIRONMENTALLY. Doble L.' },
{ id: 'd0895', root: 'TRADITION', a: 'TRADITIONALLY', p: '-AL → -ALLY', src: 'Adverbios', s: 'The harvest was {1} marked with a supper for the whole village.', tip: 'TRADITION → TRADITIONAL → TRADITIONALLY. Doble L en la unión.' },
{ id: 'd0896', root: 'EXCEPT', a: 'EXCEPTIONALLY', p: '-AL → -ALLY', src: 'Adverbios', s: 'The summer of that year was {1} dry.', tip: 'EXCEPT → EXCEPTION → EXCEPTIONAL → EXCEPTIONALLY. Cuatro pasos.' },
{ id: 'd0897', root: 'PROVISION', a: 'PROVISIONALLY', p: '-AL → -ALLY', src: 'Adverbios', s: 'The date was {1} fixed for the following March.', tip: 'PROVISION → PROVISIONAL → PROVISIONALLY = de forma provisional.' },
{ id: 'd0898', root: 'ADD', a: 'ADDITIONALLY', p: '-AL → -ALLY', src: 'Adverbios', s: '{1}, the roof will need attention within five years.', tip: 'ADD → ADDITION → ADDITIONAL → ADDITIONALLY. Adverbio de enlace: abre la oración.' },
{ id: 'd0899', root: 'PARTICULAR', a: 'PARTICULARLY', p: '-LY sobre adjetivo en -AR', src: 'Adverbios', s: 'The final movement is {1} difficult to bring off.', tip: 'PARTICULAR → PARTICULARLY. Acaba en -AR, así que sólo una L antes de -LY.' },

/* ---- -FUL → -FULLY -------------------------------------------------------- */
{ id: 'd0900', root: 'BEAUTY', a: 'BEAUTIFULLY', p: '-FUL → -FULLY', src: 'Adverbios', s: 'The endpapers are {1} preserved.', tip: 'BEAUTY → BEAUTIFUL → BEAUTIFULLY. El adjetivo lleva una L y el adverbio dos.' },
{ id: 'd0901', root: 'CARE', a: 'CAREFULLY', p: '-FUL → -FULLY', src: 'Ampliación C2', s: 'Each fragment was {1} numbered before it was lifted.', tip: 'CARE → CAREFUL → CAREFULLY. Misma regla de la doble L.' },
{ id: 'd0902', root: 'SUCCESS', a: 'SUCCESSFULLY', p: '-FUL → -FULLY', src: 'Ampliación C2', s: 'The species has been {1} reintroduced in four counties.', tip: 'SUCCESS → SUCCESSFUL → SUCCESSFULLY. Doble C, doble S y doble L.' },

/* ---- -IC → -ICALLY -------------------------------------------------------- */
{ id: 'd0903', root: 'REALISTIC', a: 'REALISTICALLY', p: '-IC → -ICALLY', src: 'Adverbios', s: '{1}, the work cannot be finished before the autumn.', tip: 'REALISTIC → REALISTICALLY. Siempre -ICALLY, nunca *-icly. La única excepción es PUBLIC → PUBLICLY.' },
{ id: 'd0904', root: 'SCEPTIC', a: 'SCEPTICALLY', alt: ['SKEPTICALLY'], p: '-IC → -ICALLY', src: 'Adverbios', s: 'The proposal was received {1} by the older members.', tip: 'SCEPTIC → SCEPTICAL → SCEPTICALLY. Compará con SCEPTICISM.' },
{ id: 'd0905', root: 'SYSTEM', a: 'SYSTEMATICALLY', p: '-ATIC → -ICALLY', src: 'Adverbios', s: 'The archive was {1} destroyed over a period of months.', tip: 'SYSTEM → SYSTEMATIC → SYSTEMATICALLY. Compará con SYSTEMIC, que no lleva -AT-.' },
{ id: 'd0906', root: 'EMPIRICAL', a: 'EMPIRICALLY', p: '-ICAL → -ICALLY', src: 'Adverbios', s: 'The claim has never been tested {1}.', tip: 'EMPIRICAL → EMPIRICALLY. La raíz ya acaba en -ICAL: sólo se añade -LY.' },
{ id: 'd0907', root: 'PUBLIC', a: 'PUBLICLY', p: 'Excepción a -ICALLY', src: 'Ampliación C2', s: 'The findings were never made {1} available.', tip: 'La única excepción de peso: PUBLIC → PUBLICLY, no *publically.' },

/* ---- -LY sobre participios y otros --------------------------------------- */
{ id: 'd0908', root: 'INCREASE', a: 'INCREASINGLY', p: '-ING + -LY', src: 'Adverbios', s: 'Winters here are {1} mild.', tip: 'INCREASE → INCREASING → INCREASINGLY = cada vez más. Se forma sobre el participio activo.' },
{ id: 'd0909', root: 'SURPRISE', a: 'SURPRISINGLY', p: '-ING + -LY', src: 'Adverbios', s: 'The hall is {1} warm for a building of that age.', tip: 'SURPRISE → SURPRISING → SURPRISINGLY. Cae la E antes de -ING.' },
{ id: 'd0910', root: 'ALARM', a: 'ALARMINGLY', p: '-ING + -LY', src: 'Adverbios', s: 'Groundwater levels have fallen {1} since 2010.', tip: 'ALARM → ALARMING → ALARMINGLY = de forma alarmante.' },
{ id: 'd0911', root: 'SEEM', a: 'SEEMINGLY', p: '-ING + -LY', src: 'Adverbios', s: 'The two accounts are {1} irreconcilable.', tip: 'SEEM → SEEMING → SEEMINGLY = aparentemente. Marca que lo dicho puede no ser cierto.' },
{ id: 'd0912', root: 'REPORT', a: 'REPORTEDLY', p: '-ED + -LY', src: 'Adverbios', s: 'The manuscript was {1} bought at a house sale for very little.', tip: 'REPORT → REPORTED → REPORTEDLY = según se informa. La E de -ED se pronuncia.' },
{ id: 'd0913', root: 'FORTUNE', a: 'FORTUNATELY', p: '-ATE + -LY', src: 'Adverbios', s: '{1}, a full transcript had been made in 1904.', tip: 'FORTUNE → FORTUNATE → FORTUNATELY. Compará con UNFORTUNATELY.' },
{ id: 'd0914', root: 'CAUTION', a: 'CAUTIOUSLY', p: '-OUS + -LY', src: 'Adverbios', s: 'The board reacted {1} to the first set of figures.', tip: 'CAUTION → CAUTIOUS → CAUTIOUSLY. Compará con CAUTIONARY.' },
{ id: 'd0915', root: 'LABOUR', a: 'LABORIOUSLY', p: '-IOUS + -LY', src: 'Adverbios', s: 'Each entry was {1} copied out by hand.', tip: 'LABOUR → LABORIOUS → LABORIOUSLY: se pierde la U de -OUR, como en HUMOROUS.' },
{ id: 'd0916', root: 'PERSIST', a: 'PERSISTENTLY', p: '-ENT + -LY', src: 'Adverbios', s: 'She {1} refused to name her source.', tip: 'PERSIST → PERSISTENT → PERSISTENTLY. Compará con PERSISTENCE.' },
{ id: 'd0917', root: 'SIGNIFY', a: 'SIGNIFICANTLY', p: '-ANT + -LY', src: 'Adverbios', s: 'Yields were {1} higher on the treated plots.', tip: 'SIGNIFY → SIGNIFICANT → SIGNIFICANTLY. La Y del verbo desaparece.' },
{ id: 'd0918', root: 'CONTINUE', a: 'CONTINUALLY', p: '-AL → -ALLY', src: 'Adverbios', s: 'The text was {1} revised over a period of thirty years.', tip: 'CONTINUE → CONTINUAL → CONTINUALLY = una y otra vez. CONTINUOUSLY sería sin interrupción.' },
{ id: 'd0919', root: 'VIRTUE', a: 'VIRTUALLY', p: '-AL → -ALLY', src: 'Adverbios', s: 'The village was {1} deserted by the end of the century.', tip: 'VIRTUE → VIRTUAL → VIRTUALLY = prácticamente, casi. Nada que ver con lo digital aquí.' },
{ id: 'd0920', root: 'DOUBT', a: 'DOUBTLESS', p: '-LESS adverbial', src: 'Ampliación C2', s: 'He was {1} right, though he never said so directly.', tip: 'DOUBTLESS funciona como adverbio sin necesidad de -LY. Compará con UNDOUBTEDLY, más enfático.' },
{ id: 'd0921', root: 'TRUE', a: 'TRULY', p: '-UE → -ULY', src: 'Ampliación C2', s: 'Only two of the pieces are {1} original.', tip: 'TRUE → TRULY: se pierde la E. Igual que DUE → DULY.' },
{ id: 'd0922', root: 'WHOLE', a: 'WHOLLY', p: '-LE → -LLY', src: 'Ampliación C2', s: 'The account is not {1} convincing.', tip: 'WHOLE → WHOLLY: se pierde la E y quedan dos L. No es *wholely.' }

]);
