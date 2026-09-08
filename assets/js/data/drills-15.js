/**
 * Drill bank 15 — -IVE, -ATIVE and -ITIVE.
 *
 * -IVE builds an adjective meaning "tending to" or "able to", and it does so
 * over the same reshaped Latin stem that -TION uses. That is the shortcut worth
 * owning: if you know the noun, you know the adjective.
 *   EXTEND → EXTENSION → EXTENSIVE
 *   REDUCE → REDUCTION → REDUCTIVE
 *   PERVADE → PERVASION → PERVASIVE
 * Verbs in -ATE keep the A and give -ATIVE; a handful of others take -ITIVE.
 */
WC2.content.registerDrills([

/* ---- -IVE sobre raíz reformada ------------------------------------------- */
{ id: 'd0691', root: 'EXTEND', a: 'EXTENSIVE', p: '-ND → -NSIVE', src: 'Adjetivos de tendencia', s: 'The house underwent {1} alterations in the 1920s.', tip: 'EXTEND → EXTENSION → EXTENSIVE. La misma S que aparece en el sustantivo.' },
{ id: 'd0692', root: 'REDUCE', a: 'REDUCTIVE', p: '-DUCE → -DUCTIVE', src: 'Adjetivos de tendencia', s: 'To read the whole period as a single conflict is badly {1}.', tip: 'REDUCE → REDUCTION → REDUCTIVE = reduccionista, simplificador.' },
{ id: 'd0693', root: 'SELECT', a: 'SELECTIVE', p: '-CT + -IVE', src: 'Adjetivos de tendencia', s: 'His memory of the period was distinctly {1}.', tip: 'SELECT → SELECTION → SELECTIVE.' },
{ id: 'd0694', root: 'ADDICT', a: 'ADDICTIVE', p: '-CT + -IVE', src: 'Adjetivos de tendencia', s: 'The format is designed from the ground up to be {1}.', tip: 'ADDICT → ADDICTION → ADDICTIVE. ADDICTED es la persona; ADDICTIVE, la cosa.' },
{ id: 'd0695', root: 'EXECUTE', a: 'EXECUTIVE', p: '-UTE → -UTIVE', src: 'Adjetivos de tendencia', s: 'The decision was taken at {1} level without consultation.', tip: 'EXECUTE → EXECUTION → EXECUTIVE. Funciona como adjetivo y como sustantivo.' },
{ id: 'd0696', root: 'ELUDE', a: 'ELUSIVE', p: '-DE → -SIVE', src: 'Adjetivos de tendencia', s: 'A definitive answer has proved remarkably {1}.', tip: 'ELUDE → ELUSION → ELUSIVE = esquivo, difícil de captar. La D pasa a S.' },
{ id: 'd0697', root: 'PERVADE', a: 'PERVASIVE', p: '-DE → -SIVE', src: 'Adjetivos de tendencia', s: 'The influence of the school is more {1} than its reputation suggests.', tip: 'PERVADE → PERVASIVE = omnipresente, que lo impregna todo. Misma pauta que ELUSIVE.' },
{ id: 'd0698', root: 'IMMERSE', a: 'IMMERSIVE', p: '-SE + -IVE', src: 'Adjetivos de tendencia', s: 'The exhibition offers an {1} reconstruction of the trenches.', tip: 'IMMERSE → IMMERSION → IMMERSIVE. Doble M.' },
{ id: 'd0699', root: 'RETROSPECT', a: 'RETROSPECTIVE', p: '-CT + -IVE', src: 'Adjetivos de tendencia', s: 'The gallery mounted a full {1} of her graphic work.', tip: 'RETROSPECT → RETROSPECTIVE. Como sustantivo: una retrospectiva. IN RETROSPECT = visto en perspectiva.' },
{ id: 'd0700', root: 'DECIDE', a: 'DECISIVE', p: '-DE → -SIVE', src: 'Ampliación C2', s: 'The last three minutes proved {1}.', tip: 'DECIDE → DECISION → DECISIVE. Familia de ELUSIVE y PERVASIVE.' },
{ id: 'd0701', root: 'PERSUADE', a: 'PERSUASIVE', p: '-DE → -SIVE', src: 'Ampliación C2', s: 'The case for closure was never especially {1}.', tip: 'PERSUADE → PERSUASION → PERSUASIVE.' },
{ id: 'd0702', root: 'EXPAND', a: 'EXPANSIVE', p: '-ND → -NSIVE', src: 'Ampliación C2', s: 'He was in {1} mood and talked for two hours.', tip: 'EXPAND → EXPANSION → EXPANSIVE. Aquí en sentido figurado: efusivo.' },
{ id: 'd0703', root: 'DEFEND', a: 'DEFENSIVE', p: '-ND → -NSIVE', src: 'Ampliación C2', s: 'The reply was unnecessarily {1}.', tip: 'DEFEND → DEFENCE → DEFENSIVE. En británico el sustantivo lleva C y el adjetivo S.' },
{ id: 'd0704', root: 'PROGRESS', a: 'PROGRESSIVE', p: '-IVE sobre sustantivo', src: 'Ampliación C2', s: 'The condition causes a slow but {1} loss of hearing.', tip: 'PROGRESS → PROGRESSIVE. Aquí «gradual», no político.' },
{ id: 'd0705', root: 'DESTROY', a: 'DESTRUCTIVE', p: '-TROY → -TRUCTIVE', src: 'Ampliación C2', s: 'The most {1} storm in living memory hit the coast that November.', tip: 'DESTROY → DESTRUCTION → DESTRUCTIVE. La misma raíz reformada.' },

/* ---- -ATIVE sobre verbos en -ATE ----------------------------------------- */
{ id: 'd0706', root: 'INNOVATE', a: 'INNOVATIVE', p: '-ATE → -ATIVE', src: 'Adjetivos de tendencia', s: 'The department has a reputation for {1} teaching.', tip: 'INNOVATE → INNOVATIVE. Los verbos en -ATE conservan la A.' },
{ id: 'd0707', root: 'INVESTIGATE', a: 'INVESTIGATIVE', p: '-ATE → -ATIVE', src: 'Adjetivos de tendencia', s: 'The paper built its name on {1} journalism.', tip: 'INVESTIGATE → INVESTIGATIVE. Compará con INVESTIGATOR.' },
{ id: 'd0708', root: 'LEGISLATE', a: 'LEGISLATIVE', p: '-ATE → -ATIVE', src: 'Adjetivos de tendencia', s: 'The change required a full {1} timetable of its own.', tip: 'LEGISLATE → LEGISLATIVE. El sustantivo es LEGISLATION.' },
{ id: 'd0709', root: 'MANIPULATE', a: 'MANIPULATIVE', p: '-ATE → -ATIVE', src: 'Adjetivos de tendencia', s: 'Critics found the film sentimental and frankly {1}.', tip: 'MANIPULATE → MANIPULATIVE = manipulador.' },
{ id: 'd0710', root: 'OPERATE', a: 'OPERATIVE', p: '-ATE → -ATIVE', src: 'Adjetivos de tendencia', s: 'The regulation became {1} on the first of January.', tip: 'OPERATIVE = en vigor, operativo. THE OPERATIVE WORD = la palabra clave.' },
{ id: 'd0711', root: 'AFFIRM', a: 'AFFIRMATIVE', p: 'Raíz + -ATIVE', src: 'Adjetivos de tendencia', s: 'The answer, when it finally came, was {1}.', tip: 'AFFIRM → AFFIRMATIVE. IN THE AFFIRMATIVE = afirmativamente, en registro formal.' },
{ id: 'd0712', root: 'REPRESENT', a: 'REPRESENTATIVE', p: 'Raíz + -ATIVE', src: 'Adjetivos de tendencia', s: 'The sample was not {1} of the population as a whole.', tip: 'REPRESENT → REPRESENTATIVE. Rige OF. Funciona también como sustantivo: un representante.' },
{ id: 'd0713', root: 'AUTHORITY', a: 'AUTHORITATIVE', p: '-Y → -ATIVE', src: 'Adjetivos de tendencia', s: 'Hers remains the {1} edition of the letters.', tip: 'AUTHORITY → AUTHORITATIVE = de referencia, con autoridad. No confundir con AUTHORITARIAN, que es autoritario.' },
{ id: 'd0714', root: 'ALTER', a: 'ALTERNATIVE', p: 'Raíz + -ATIVE', src: 'Adjetivos de tendencia', s: 'No {1} site was ever seriously considered.', tip: 'ALTER → ALTERNATE → ALTERNATIVE. Rige TO: an alternative TO something.' },
{ id: 'd0715', root: 'ALTERNATE', a: 'ALTERNATIVE', p: '-ATE → -ATIVE', src: 'Adjetivos de tendencia', s: 'Readers were offered an {1} ending in the second edition.', tip: 'Misma palabra desde el verbo ALTERNATE. En británico ALTERNATE es «alterno» y ALTERNATIVE «alternativo».' },
{ id: 'd0716', root: 'IMAGINE', a: 'IMAGINATIVE', p: '-INE → -ATIVE', src: 'Ampliación C2', s: 'The staging was {1} without ever being showy.', tip: 'IMAGINE → IMAGINATION → IMAGINATIVE. Ojo: IMAGINARY es «imaginario», otra cosa.' },
{ id: 'd0717', root: 'ADMINISTER', a: 'ADMINISTRATIVE', p: '-ER → -RATIVE', src: 'Ampliación C2', s: 'Most of the delay was purely {1}.', tip: 'ADMINISTER → ADMINISTRATION → ADMINISTRATIVE. Se pierde la E.' },
{ id: 'd0718', root: 'COMPARE', a: 'COMPARATIVE', p: '-ARE → -ARATIVE', src: 'Ampliación C2', s: 'The chapter takes a {1} approach to the two traditions.', tip: 'COMPARE → COMPARISON → COMPARATIVE. Compará con INCOMPARABLE.' },
{ id: 'd0719', root: 'TALK', a: 'TALKATIVE', p: 'Raíz + -ATIVE', src: 'Ampliación C2', s: 'He was not, by any account, a {1} man.', tip: 'TALK → TALKATIVE. Raro caso de -ATIVE sobre raíz germánica.' },
{ id: 'd0720', root: 'INFORM', a: 'INFORMATIVE', p: 'Raíz + -ATIVE', src: 'Ampliación C2', s: 'The labels are clear, brief and genuinely {1}.', tip: 'INFORM → INFORMATION → INFORMATIVE.' },

/* ---- -ITIVE --------------------------------------------------------------- */
{ id: 'd0721', root: 'COMPETE', a: 'COMPETITIVE', p: '-ETE → -ETITIVE', src: 'Adjetivos de tendencia', s: 'The market has become fiercely {1} in the past decade.', tip: 'COMPETE → COMPETITION → COMPETITIVE. Aparece la I, igual que en COMPETITOR.' },
{ id: 'd0722', root: 'INTUIT', a: 'INTUITIVE', p: 'Raíz + -IVE', src: 'Adjetivos de tendencia', s: 'The interface is far less {1} than the old one.', tip: 'INTUIT → INTUITION → INTUITIVE. Compará con COUNTERINTUITIVE.' },
{ id: 'd0723', root: 'COGNITION', a: 'COGNITIVE', p: '-ION → -IVE', src: 'Adjetivos de tendencia', s: 'The study measured {1} decline over a twelve-year period.', tip: 'COGNITION → COGNITIVE. Se pierde el -ION.' },
{ id: 'd0724', root: 'SENSE', a: 'SENSITIVE', p: '-ITIVE sobre sustantivo', src: 'Ampliación C2', s: 'The equipment is {1} enough to register a footstep.', tip: 'SENSE → SENSITIVE → SENSITIVITY. Compará con SENSIBLE, que significa «sensato».' },
{ id: 'd0725', root: 'REPEAT', a: 'REPETITIVE', p: 'Raíz + -ITIVE', src: 'Ampliación C2', s: 'The work is {1} but it demands complete concentration.', tip: 'REPEAT → REPETITION → REPETITIVE. Se pierde la A, como en el sustantivo.' },
{ id: 'd0726', root: 'DEFINE', a: 'DEFINITIVE', p: '-INE → -INITIVE', src: 'Ampliación C2', s: 'No {1} answer has emerged in forty years of digging.', tip: 'DEFINE → DEFINITION → DEFINITIVE = definitivo, concluyente.' },
{ id: 'd0727', root: 'PRIMARY', a: 'PRIMITIVE', p: 'Raíz + -ITIVE', src: 'Ampliación C2', s: 'The earliest tools found on the site are remarkably {1}.', tip: 'La raíz latina «primus» da PRIMARY, PRIMITIVE y PRIME.' },
{ id: 'd0728', root: 'SECRET', a: 'SECRETIVE', p: 'Raíz + -IVE', src: 'Ampliación C2', s: 'The foundation has always been oddly {1} about its funding.', tip: 'SECRET → SECRETIVE = reservado, hermético. Se acentúa en la primera sílaba.' }

]);
