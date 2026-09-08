/**
 * Drill bank 14 — -OUS, -FUL, -LESS, -SOME and -ISH.
 *
 * -FUL and -LESS are a clean antonym pair over the same stem: POWERFUL against
 * POWERLESS, MEANINGFUL against MEANINGLESS. -OUS is the Latin equivalent of
 * -FUL and carries most of the abstract vocabulary of the exam, with three
 * spelling traps worth knowing outright:
 *   -OUR loses the U       HUMOUR → HUMOROUS, VIGOUR → VIGOROUS
 *   -F becomes -V          GRIEF → GRIEVOUS, MISCHIEF → MISCHIEVOUS
 *   -Y becomes -I          VARY → VARIOUS, FURY → FURIOUS
 */
WC2.content.registerDrills([

/* ---- -OUS ----------------------------------------------------------------- */
{ id: 'd0646', root: 'NERVE', a: 'NERVOUS', p: '-OUS sobre sustantivo', src: 'Adjetivos de cualidad', s: 'She was too {1} to look at the audience for the first minute.', tip: 'NERVE → NERVOUS. Cae la E final.' },
{ id: 'd0647', root: 'HUMOUR', a: 'HUMOROUS', p: '-OUR pierde la U', src: 'Adjetivos de cualidad', s: 'The letters are affectionate and frequently {1}.', tip: 'HUMOUR → HUMOROUS: la U de -OUR desaparece. No es *humourous.' },
{ id: 'd0648', root: 'POISON', a: 'POISONOUS', p: '-OUS sobre sustantivo', src: 'Adjetivos de cualidad', s: 'Only two of the region snakes are genuinely {1}.', tip: 'POISON → POISONOUS. La raíz no cambia.' },
{ id: 'd0649', root: 'MOUNTAIN', a: 'MOUNTAINOUS', p: '-OUS sobre sustantivo', src: 'Adjetivos de cualidad', s: 'The northern third of the country is {1}.', tip: 'MOUNTAIN → MOUNTAINOUS. También se usa figuradamente: mountainous debts.' },
{ id: 'd0650', root: 'MOMENT', a: 'MOMENTOUS', p: '-OUS sobre sustantivo', src: 'Adjetivos de cualidad', s: 'Nobody present understood how {1} the meeting would prove.', tip: 'MOMENTOUS = trascendental, de gran importancia. No significa «momentáneo», que es MOMENTARY.' },
{ id: 'd0651', root: 'PROSPER', a: 'PROSPEROUS', p: '-OUS sobre verbo', src: 'Adjetivos de cualidad', s: 'The town was at its most {1} in the 1880s.', tip: 'PROSPER → PROSPEROUS. Compará con PROSPERITY, el sustantivo.' },
{ id: 'd0652', root: 'GRIEF', a: 'GRIEVOUS', p: '-F → -V + -OUS', src: 'Adjetivos de cualidad', s: 'The error was described in court as {1}.', tip: 'GRIEF → GRIEVOUS: la F se vuelve V. Igual que MISCHIEF → MISCHIEVOUS.' },
{ id: 'd0653', root: 'SULPHUR', a: 'SULPHUROUS', alt: ['SULFUROUS'], p: '-OUS sobre sustantivo', src: 'Adjetivos de cualidad', s: 'A faint {1} smell hung over the whole valley.', tip: 'SULPHUR → SULPHUROUS. En británico con PH; en americano, SULFUR.' },
{ id: 'd0654', root: 'SERENDIPITY', a: 'SERENDIPITOUS', p: '-Y → -OUS', src: 'Adjetivos de cualidad', s: 'The discovery was entirely {1}: he was looking for something else.', tip: 'SERENDIPITY → SERENDIPITOUS = fortuito y afortunado a la vez.' },
{ id: 'd0655', root: 'VARY', a: 'VARIOUS', p: 'Y → I + -OUS', src: 'Adjetivos de cualidad', s: 'The delay has been blamed on {1} unrelated factors.', tip: 'VARY → VARIOUS. La Y pasa a I. Compará con VARIETIES y INVARIABLY.' },
{ id: 'd0656', root: 'SPACE', a: 'SPACIOUS', p: '-CE → -CIOUS', src: 'Adjetivos de cualidad', s: 'The flats are light and surprisingly {1}.', tip: 'SPACE → SPACIOUS. La E se pierde y la C se mantiene con sonido /ʃ/.' },
{ id: 'd0657', root: 'AMBITION', a: 'AMBITIOUS', p: '-ION → -IOUS', src: 'Ampliación C2', s: 'The plan was {1} to the point of recklessness.', tip: 'AMBITION → AMBITIOUS. Los sustantivos en -ION suelen dar adjetivos en -IOUS.' },
{ id: 'd0658', root: 'CAUTION', a: 'CAUTIOUS', p: '-ION → -IOUS', src: 'Ampliación C2', s: 'The board took a deliberately {1} view of the forecast.', tip: 'CAUTION → CAUTIOUS. Misma pauta que AMBITIOUS.' },
{ id: 'd0659', root: 'FURY', a: 'FURIOUS', p: 'Y → I + -OUS', src: 'Ampliación C2', s: 'The response from readers was {1}.', tip: 'FURY → FURIOUS. Como VARY → VARIOUS.' },
{ id: 'd0660', root: 'MYSTERY', a: 'MYSTERIOUS', p: 'Y → I + -OUS', src: 'Ampliación C2', s: 'The circumstances of the loss remain {1}.', tip: 'MYSTERY → MYSTERIOUS. La Y final pasa a I.' },
{ id: 'd0661', root: 'COURAGE', a: 'COURAGEOUS', p: 'E conservada tras G', src: 'Ampliación C2', s: 'It was a {1} decision and it cost him the job.', tip: 'La E se conserva tras G: COURAGEOUS. Igual que ADVANTAGEOUS y OUTRAGEOUS.' },
{ id: 'd0662', root: 'VIGOUR', a: 'VIGOROUS', p: '-OUR pierde la U', src: 'Ampliación C2', s: 'The proposal met {1} opposition from the residents.', tip: 'VIGOUR → VIGOROUS: pierde la U, como HUMOUR → HUMOROUS.' },
{ id: 'd0663', root: 'DISASTER', a: 'DISASTROUS', p: '-ER → -ROUS', src: 'Ampliación C2', s: 'The rebranding proved {1} for the paper circulation.', tip: 'DISASTER → DISASTROUS: se pierde la E. No es *disasterous.' },
{ id: 'd0664', root: 'MONSTER', a: 'MONSTROUS', p: '-ER → -ROUS', src: 'Ampliación C2', s: 'The scale of the new wing was widely called {1}.', tip: 'MONSTER → MONSTROUS. Misma pérdida de E que DISASTROUS.' },
{ id: 'd0665', root: 'SIMULTANEOUS', a: 'SIMULTANEOUSLY', p: '-EOUS + -LY', src: 'Ampliación C2', s: 'The two papers appeared almost {1}.', tip: 'SIMULTANEOUS → SIMULTANEOUSLY. -EOUS mantiene la E entera ante -LY.' },
{ id: 'd0666', root: 'CONTINUE', a: 'CONTINUOUS', p: '-UOUS sobre verbo', src: 'Ampliación C2', s: 'The kiln was in {1} use for four hundred years.', tip: 'CONTINUOUS = ininterrumpido; CONTINUAL = repetido una y otra vez. El examen distingue las dos.' },

/* ---- -FUL ----------------------------------------------------------------- */
{ id: 'd0667', root: 'POWER', a: 'POWERFUL', p: '-FUL sobre sustantivo', src: 'Adjetivos de cualidad', s: 'The closing chapter makes a {1} case for reform.', tip: 'POWER → POWERFUL. Una sola L: el sufijo es -FUL, nunca *-FULL.' },
{ id: 'd0668', root: 'WASTE', a: 'WASTEFUL', p: '-FUL sobre sustantivo', src: 'Adjetivos de cualidad', s: 'The old system was slow, expensive and {1}.', tip: 'WASTE → WASTEFUL. La E se conserva.' },
{ id: 'd0669', root: 'RESOURCE', a: 'RESOURCEFUL', p: '-FUL sobre sustantivo', src: 'Adjetivos de cualidad', s: 'The crew proved remarkably {1} with almost no equipment.', tip: 'RESOURCE → RESOURCEFUL = ingenioso, con recursos.' },
{ id: 'd0670', root: 'HEAL', a: 'HEALTHFUL', p: '-TH + -FUL', src: 'Adjetivos de cualidad', s: 'The diet was promoted as more {1} than it turned out to be.', tip: 'HEAL → HEALTH → HEALTHFUL = saludable, que da salud. HEALTHY es «que tiene salud».' },
{ id: 'd0671', root: 'MEANING', a: 'MEANINGFUL', p: '-FUL sobre sustantivo', src: 'Ampliación C2', s: 'No {1} comparison is possible between the two data sets.', tip: 'MEANING → MEANINGFUL. Su opuesto exacto es MEANINGLESS.' },
{ id: 'd0672', root: 'DOUBT', a: 'DOUBTFUL', p: '-FUL sobre sustantivo', src: 'Ampliación C2', s: 'It is {1} whether the bridge will open this year.', tip: 'DOUBT → DOUBTFUL. La B es muda. Compará con UNDOUBTEDLY.' },
{ id: 'd0673', root: 'PLENTY', a: 'PLENTIFUL', p: 'Y → I + -FUL', src: 'Ampliación C2', s: 'Rain that spring was unusually {1}.', tip: 'PLENTY → PLENTIFUL. La Y pasa a I ante el sufijo.' },
{ id: 'd0674', root: 'BEAUTY', a: 'BEAUTIFUL', p: 'Y → I + -FUL', src: 'Ampliación C2', s: 'The bindings are {1} even where the text is unreadable.', tip: 'BEAUTY → BEAUTIFUL. El adverbio es BEAUTIFULLY, con doble L.' },
{ id: 'd0675', root: 'RESPECT', a: 'RESPECTFUL', p: '-FUL sobre sustantivo', src: 'Ampliación C2', s: 'The disagreement remained {1} throughout.', tip: 'RESPECTFUL = respetuoso. Ojo con RESPECTABLE (decente) y RESPECTIVE (respectivo): tres adjetivos distintos.' },

/* ---- -LESS ---------------------------------------------------------------- */
{ id: 'd0676', root: 'MEAN', a: 'MEANINGLESS', p: '-ING + -LESS', src: 'Adjetivos de cualidad', s: 'Without the baseline figures the percentages are {1}.', tip: 'MEAN → MEANING → MEANINGLESS. El sufijo necesita el sustantivo, no el verbo.' },
{ id: 'd0677', root: 'COUNT', a: 'COUNTLESS', p: '-LESS sobre verbo', src: 'Adjetivos de cualidad', s: 'The story has been retold {1} times since.', tip: 'COUNT → COUNTLESS = incontables. Compará con UNCOUNTABLE, que es un término gramatical.' },
{ id: 'd0678', root: 'RELENT', a: 'RELENTLESS', p: '-LESS sobre verbo', src: 'Adjetivos de cualidad', s: 'The pace of the second half is {1}.', tip: 'RELENT = ceder, ablandarse. RELENTLESS = implacable, incesante.' },
{ id: 'd0679', root: 'POWER', a: 'POWERLESS', p: '-LESS sobre sustantivo', src: 'Ampliación C2', s: 'Local authorities were effectively {1} to intervene.', tip: 'El opuesto exacto de POWERFUL, sobre la misma raíz.' },
{ id: 'd0680', root: 'PRICE', a: 'PRICELESS', p: '-LESS sobre sustantivo', src: 'Ampliación C2', s: 'The collection of maps is, in scholarly terms, {1}.', tip: 'Trampa: PRICELESS significa «de valor incalculable», no «sin valor». Como INVALUABLE.' },
{ id: 'd0681', root: 'END', a: 'ENDLESS', p: '-LESS sobre sustantivo', src: 'Ampliación C2', s: 'The committee held {1} meetings and reached no decision.', tip: 'END → ENDLESS = interminable.' },
{ id: 'd0682', root: 'REGARD', a: 'REGARDLESS', p: '-LESS sobre sustantivo', src: 'Ampliación C2', s: 'The event goes ahead {1} of the weather.', tip: 'REGARDLESS OF = sin importar. Sinónimo casi exacto de IRRESPECTIVE OF.' },
{ id: 'd0683', root: 'RUTH', a: 'RUTHLESS', p: '-LESS sobre sustantivo', src: 'Ampliación C2', s: 'The editing was {1} and the book is better for it.', tip: 'RUTHLESS = despiadado. La raíz RUTH (compasión) ya no se usa suelta.' },

/* ---- -SOME y -ISH --------------------------------------------------------- */
{ id: 'd0684', root: 'BURDEN', a: 'BURDENSOME', p: '-SOME sobre sustantivo', src: 'Adjetivos de cualidad', s: 'The reporting requirements became increasingly {1}.', tip: 'BURDEN → BURDENSOME = gravoso, pesado. -SOME indica «que produce eso».' },
{ id: 'd0685', root: 'TROUBLE', a: 'TROUBLESOME', p: '-SOME sobre sustantivo', src: 'Ampliación C2', s: 'The damp in the north wall has always been {1}.', tip: 'TROUBLE → TROUBLESOME. La E se conserva.' },
{ id: 'd0686', root: 'CUMBER', a: 'CUMBERSOME', p: '-SOME sobre verbo', src: 'Ampliación C2', s: 'The approval process is slow and {1}.', tip: 'CUMBERSOME = engorroso, aparatoso. La raíz apenas se usa suelta.' },
{ id: 'd0687', root: 'FAD', a: 'FADDISH', p: '-ISH sobre sustantivo', src: 'Adjetivos de cualidad', s: 'The book dismisses the whole movement as {1}.', tip: 'FAD → FADDISH: la D se dobla. -ISH añade un matiz despectivo: pasajero, de moda.' },
{ id: 'd0688', root: 'CHILD', a: 'CHILDISH', p: '-ISH sobre sustantivo', src: 'Ampliación C2', s: 'The exchange descended into {1} name-calling.', tip: 'CHILDISH = infantil, en sentido peyorativo. CHILDLIKE es el elogio.' },
{ id: 'd0689', root: 'SELF', a: 'SELFISH', p: '-ISH sobre sustantivo', src: 'Ampliación C2', s: 'The decision was not {1}, whatever his critics said.', tip: 'SELF → SELFISH = egoísta. El sustantivo es SELFISHNESS.' },
{ id: 'd0690', root: 'FOOL', a: 'FOOLISH', p: '-ISH sobre sustantivo', src: 'Ampliación C2', s: 'It would be {1} to ignore a warning of that kind.', tip: 'FOOL → FOOLISH. El sustantivo es FOOLISHNESS.' }

]);
