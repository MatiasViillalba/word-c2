/**
 * Drill bank 13 — -ABLE and -IBLE.
 *
 * Semantically identical, orthographically arbitrary. The only usable rule is
 * historical: a stem that survives as a free-standing English word usually
 * takes -ABLE (ADAPT → ADAPTABLE), while a bound Latin stem usually takes
 * -IBLE (AUDIBLE, TANGIBLE, PLAUSIBLE). It is a tendency, not a law, and the
 * exam exploits the exceptions.
 *
 * The spelling changes are more tractable and just as examinable:
 *   silent E drops        DESIRE → DESIRABLE, CURE → CURABLE
 *   E stays after C or G  NOTICE → NOTICEABLE, MANAGE → MANAGEABLE
 *   Y becomes I           RELY → RELIABLE, VARY → VARIABLE
 *   final consonant doubles on a stressed syllable  REGRET → REGRETTABLE
 */
WC2.content.registerDrills([

/* ---- -ABLE sobre verbo, raíz intacta ------------------------------------- */
{ id: 'd0605', root: 'ADAPT', a: 'ADAPTABLE', p: '-ABLE sobre verbo', src: 'Adjetivos de capacidad', s: 'The species is unusually {1} to changes in salinity.', tip: 'ADAPT → ADAPTABLE. Rige TO. Compará con ADAPTATION, el sustantivo.' },
{ id: 'd0606', root: 'ADJUST', a: 'ADJUSTABLE', p: '-ABLE sobre verbo', src: 'Adjetivos de capacidad', s: 'The desks are fully {1} for height.', tip: 'ADJUST → ADJUSTABLE. Compará con ADJUSTMENTS, el sustantivo.' },
{ id: 'd0607', root: 'ACCOUNT', a: 'ACCOUNTABLE', p: '-ABLE sobre verbo', src: 'Adjetivos de capacidad', s: 'Ministers are {1} to parliament, not to the party.', tip: 'ACCOUNTABLE TO somebody FOR something. Compará con UNACCOUNTABLE y ACCOUNTABILITY.' },
{ id: 'd0608', root: 'QUESTION', a: 'QUESTIONABLE', p: '-ABLE sobre verbo', src: 'Adjetivos de capacidad', s: 'The provenance of two of the panels is at best {1}.', tip: 'QUESTION → QUESTIONABLE = dudoso, discutible.' },
{ id: 'd0609', root: 'CONSIDER', a: 'CONSIDERABLE', p: '-ABLE sobre verbo', src: 'Adjetivos de capacidad', s: 'The find is of {1} importance to the period.', tip: 'CONSIDERABLE = notable, cuantioso. No significa «considerado»: eso es CONSIDERATE.' },
{ id: 'd0610', root: 'INHABIT', a: 'INHABITABLE', p: '-ABLE sobre verbo', src: 'Adjetivos de capacidad', s: 'Only a narrow coastal strip is genuinely {1}.', tip: 'INHABIT → INHABITABLE = habitable. Su negativo es UNINHABITABLE.' },
{ id: 'd0611', root: 'RENEW', a: 'RENEWABLE', p: '-ABLE sobre verbo', src: 'Adjetivos de capacidad', s: 'Almost half the country electricity now comes from {1} sources.', tip: 'RENEW → RENEWABLE. La W se conserva.' },
{ id: 'd0612', root: 'FAVOUR', a: 'FAVOURABLE', p: '-ABLE sobre sustantivo', src: 'Adjetivos de capacidad', s: 'The review was cautiously {1}.', tip: 'FAVOUR → FAVOURABLE. Ortografía británica. Su negativo es UNFAVOURABLE.' },
{ id: 'd0613', root: 'PREDICT', a: 'PREDICTABLE', p: '-ABLE sobre verbo', src: 'Ampliación C2', s: 'The ending is {1} but no less satisfying for that.', tip: 'PREDICT → PREDICTABLE. El adverbio es PREDICTABLY.' },
{ id: 'd0614', root: 'REASON', a: 'REASONABLE', p: '-ABLE sobre sustantivo', src: 'Ampliación C2', s: 'A {1} person would have asked for the estimate in writing.', tip: 'REASON → REASONABLE = razonable. Compará con REASONING, el sustantivo.' },
{ id: 'd0615', root: 'REMARK', a: 'REMARKABLE', p: '-ABLE sobre verbo', src: 'Ampliación C2', s: 'The recovery of the population has been {1}.', tip: 'REMARK → REMARKABLE. El adverbio es REMARKABLY.' },
{ id: 'd0616', root: 'PROFIT', a: 'PROFITABLE', p: '-ABLE sobre sustantivo', src: 'Ampliación C2', s: 'The line was never {1} and closed in 1963.', tip: 'PROFIT → PROFITABLE. Una sola T: el acento cae en la primera sílaba.' },
{ id: 'd0617', root: 'COMFORT', a: 'COMFORTABLE', p: '-ABLE sobre sustantivo', src: 'Ampliación C2', s: 'They won by a {1} margin in the end.', tip: 'COMFORT → COMFORTABLE. En sentido figurado: holgado, cómodo.' },
{ id: 'd0618', root: 'DEBATE', a: 'DEBATABLE', p: '-ABLE sobre verbo', src: 'Ampliación C2', s: 'Whether the restoration improved the fresco is highly {1}.', tip: 'DEBATE → DEBATABLE. La E final cae.' },
{ id: 'd0619', root: 'NEGOTIATE', a: 'NEGOTIABLE', p: '-ABLE sobre verbo', src: 'Ampliación C2', s: 'The deadline, she made clear, was not {1}.', tip: 'NEGOTIATE → NEGOTIABLE. Se pierde el -ATE.' },
{ id: 'd0620', root: 'ENVY', a: 'ENVIABLE', p: 'Y → I + -ABLE', src: 'Ampliación C2', s: 'The museum is in the {1} position of having too much space.', tip: 'ENVY → ENVIABLE. La Y pasa a I.' },
{ id: 'd0621', root: 'RELY', a: 'RELIABLE', p: 'Y → I + -ABLE', src: 'Ampliación C2', s: 'The parish registers are the only {1} source for those years.', tip: 'RELY → RELIABLE. Misma pauta que ENVY y VARY.' },
{ id: 'd0622', root: 'VALUE', a: 'VALUABLE', p: '-ABLE sobre sustantivo', src: 'Ampliación C2', s: 'The bequest included several {1} first editions.', tip: 'VALUE → VALUABLE (cae la E). Ojo con INVALUABLE, que intensifica en vez de negar.' },
{ id: 'd0623', root: 'KNOWLEDGE', a: 'KNOWLEDGEABLE', p: 'E conservada tras G', src: 'Ampliación C2', s: 'The guide was genuinely {1} about the stonework.', tip: 'La E se conserva tras G para que suene suave: KNOWLEDGEABLE, no *knowledgable.' },
{ id: 'd0624', root: 'MANAGE', a: 'MANAGEABLE', p: 'E conservada tras G', src: 'Ampliación C2', s: 'Broken into weekly targets the task became {1}.', tip: 'MANAGE → MANAGEABLE. Misma regla que KNOWLEDGEABLE y NOTICEABLE.' },
{ id: 'd0625', root: 'NOTICE', a: 'NOTICEABLE', p: 'E conservada tras C', src: 'Ampliación C2', s: 'There was a {1} pause before he answered.', tip: 'La E se conserva tras C para que suene /s/: NOTICEABLE.' },
{ id: 'd0626', root: 'REGRET', a: 'REGRETTABLE', p: 'Consonante doble + -ABLE', src: 'Adjetivos de capacidad', s: 'The tone of the letter was {1} but the argument stood.', tip: 'REGRET dobla la T porque el acento cae en la última sílaba: REGRETTABLE.' },
{ id: 'd0627', root: 'CURE', a: 'CURABLE', p: 'E muda + -ABLE', src: 'Adjetivos de capacidad', s: 'The condition is now entirely {1} if caught early.', tip: 'CURE → CURABLE. La E muda desaparece.' },
{ id: 'd0628', root: 'DESIRE', a: 'DESIRABLE', p: 'E muda + -ABLE', src: 'Adjetivos de capacidad', s: 'Proximity to the station makes the whole street {1}.', tip: 'DESIRE → DESIRABLE. Cae la E, como en CURABLE.' },
{ id: 'd0629', root: 'MEMORY', a: 'MEMORABLE', p: 'Y → -ABLE (irregular)', src: 'Adjetivos de capacidad', s: 'It was, by any account, a {1} evening.', tip: 'MEMORY → MEMORABLE: se pierde la Y entera. No es *memoryable.' },
{ id: 'd0630', root: 'APPRECIATE', a: 'APPRECIABLE', p: '-ATE → -ABLE', src: 'Adjetivos de capacidad', s: 'There has been no {1} improvement since the trial began.', tip: 'APPRECIATE → APPRECIABLE = perceptible, considerable. Se pierde el -ATE.' },
{ id: 'd0631', root: 'ADVISE', a: 'ADVISABLE', p: '-ABLE sobre verbo', src: 'Ampliación C2', s: 'It would be {1} to book well in advance.', tip: 'ADVISE → ADVISABLE. En británico ADVISE es verbo y ADVICE sustantivo.' },
{ id: 'd0632', root: 'CHARITY', a: 'CHARITABLE', p: 'Y → -ABLE', src: 'Ampliación C2', s: 'The trust has {1} status for tax purposes.', tip: 'CHARITY → CHARITABLE. Como MEMORY, pierde la Y.' },
{ id: 'd0633', root: 'PERISH', a: 'PERISHABLE', p: '-ABLE sobre verbo', src: 'Ampliación C2', s: 'The hold was reserved for {1} goods.', tip: 'PERISH → PERISHABLE = perecedero.' },

/* ---- -IBLE sobre raíz latina --------------------------------------------- */
{ id: 'd0634', root: 'ACCESS', a: 'ACCESSIBLE', p: '-IBLE sobre raíz latina', src: 'Adjetivos de capacidad', s: 'The archive is {1} to any reader with a library card.', tip: 'ACCESS → ACCESSIBLE, con -IBLE. Compará con INACCESSIBLE y ACCESSIBILITY.' },
{ id: 'd0635', root: 'CONVERT', a: 'CONVERTIBLE', p: '-IBLE sobre raíz latina', src: 'Adjetivos de capacidad', s: 'The bonds are {1} into shares after five years.', tip: 'CONVERT → CONVERTIBLE. Rige INTO.' },
{ id: 'd0636', root: 'TERROR', a: 'TERRIBLE', p: '-IBLE con pérdida de raíz', src: 'Adjetivos de capacidad', s: 'The acoustics in the old hall were frankly {1}.', tip: 'TERROR → TERRIBLE: se pierde la O. No es *terrorible.' },
{ id: 'd0637', root: 'TANGENT', a: 'TANGIBLE', p: '-IBLE sobre raíz latina', src: 'Ampliación C2', s: 'After two years there was still nothing {1} to show.', tip: 'TANGIBLE = tangible, palpable. Raíz latina «tangere», tocar.' },
{ id: 'd0638', root: 'PERMIT', a: 'PERMISSIBLE', p: '-IBLE con cambio de raíz', src: 'Ampliación C2', s: 'The maximum {1} load is marked on the plate.', tip: 'PERMIT → PERMISSIBLE. La T pasa a doble S, como en PERMISSION.' },
{ id: 'd0639', root: 'DEFEND', a: 'DEFENSIBLE', p: '-IBLE con cambio de raíz', src: 'Ampliación C2', s: 'The position is not intellectually {1}.', tip: 'DEFEND → DEFENSIBLE. La D pasa a S, como en DEFENSIVE.' },
{ id: 'd0640', root: 'COMPREHEND', a: 'COMPREHENSIBLE', p: '-IBLE con cambio de raíz', src: 'Ampliación C2', s: 'The instructions were barely {1} to a first-time user.', tip: 'COMPREHEND → COMPREHENSIBLE. Misma pauta que DEFENSIBLE.' },
{ id: 'd0641', root: 'SUSCEPT', a: 'SUSCEPTIBLE', p: '-IBLE sobre raíz latina', src: 'Ampliación C2', s: 'Older trees proved far more {1} to the fungus.', tip: 'SUSCEPTIBLE TO = propenso a. La raíz no existe suelta en inglés.' },
{ id: 'd0642', root: 'DISCERN', a: 'DISCERNIBLE', p: '-IBLE sobre verbo', src: 'Ampliación C2', s: 'There is no {1} pattern in the distribution.', tip: 'DISCERN → DISCERNIBLE = perceptible. Con -IBLE pese a ser un verbo libre.' },
{ id: 'd0643', root: 'DIGEST', a: 'DIGESTIBLE', p: '-IBLE sobre verbo', src: 'Ampliación C2', s: 'The report has been rewritten in a more {1} form.', tip: 'DIGEST → DIGESTIBLE. Vale para la comida y para la información.' },
{ id: 'd0644', root: 'REVERSE', a: 'REVERSIBLE', p: '-IBLE sobre verbo', src: 'Ampliación C2', s: 'The damage at this stage is still {1}.', tip: 'REVERSE → REVERSIBLE. Compará con IRREVERSIBLE.' },
{ id: 'd0645', root: 'AUDIO', a: 'AUDIBLE', p: '-IBLE sobre raíz latina', src: 'Ampliación C2', s: 'His reply was barely {1} from the back of the room.', tip: 'Raíz latina «audire», oír. AUDIBLE = audible. Su negativo es INAUDIBLE.' }

]);
