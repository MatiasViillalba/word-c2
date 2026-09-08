/**
 * Drill bank 12 — people, agents and instruments.
 *
 * -ER is Germanic and takes almost anything; -OR is Latin and sits on a closed
 * list that has to be learned (COMMUNICATOR, not *communicater); -IST names a
 * profession or an adherent; -ANT and -ENT name an agent or a substance that
 * acts; -EE names the person the action is done *to*, which is the pair the
 * exam likes best: EMPLOYER against EMPLOYEE, INTERVIEWER against INTERVIEWEE.
 */
WC2.content.registerDrills([

/* ---- -ER ------------------------------------------------------------------ */
{ id: 'd0544', root: 'WORK', a: 'WORKERS', p: '-ER sobre verbo', src: 'Personas y agentes', s: 'Some four hundred {1} were employed at the mill in its prime.', tip: 'WORK → WORKER. El agente más transparente del inglés.' },
{ id: 'd0545', root: 'SPEAK', a: 'SPEAKERS', p: '-ER sobre verbo', src: 'Personas y agentes', s: 'Fewer than two thousand {1} of the language remain.', tip: 'SPEAK → SPEAKER. Compará con OUTSPOKEN, la misma raíz por otro camino.' },
{ id: 'd0546', root: 'SING', a: 'SINGERS', p: '-ER sobre verbo', src: 'Personas y agentes', s: 'The chorus draws its {1} from six local choirs.', tip: 'SING → SINGER. La G no se dobla.' },
{ id: 'd0547', root: 'LABOUR', a: 'LABOURERS', p: '-ER sobre sustantivo', src: 'Personas y agentes', s: 'Migrant {1} built most of the canal network.', tip: 'LABOUR → LABOURER. Ortografía británica con -OUR. Compará con LABORIOUSLY, que la pierde.' },
{ id: 'd0548', root: 'REFORM', a: 'REFORMERS', p: '-ER sobre verbo', src: 'Personas y agentes', s: 'Nineteenth-century {1} founded the first free libraries.', tip: 'REFORM → REFORMER. Sin cambios en la raíz.' },
{ id: 'd0549', root: 'SUBSCRIBE', a: 'SUBSCRIBERS', p: '-ER sobre verbo', src: 'Personas y agentes', s: 'The newsletter passed ten thousand {1} in its second year.', tip: 'SUBSCRIBE → SUBSCRIBER. Cae la E. Compará con SUBSCRIPTION.' },
{ id: 'd0550', root: 'COMMISSION', a: 'COMMISSIONERS', p: '-ER sobre sustantivo', src: 'Personas y agentes', s: 'The {1} published their findings eighteen months later.', tip: 'COMMISSION → COMMISSIONER. Doble M y doble S de la raíz.' },
{ id: 'd0551', root: 'ADVERT', a: 'ADVERTISERS', p: '-ISE + -ER', src: 'Personas y agentes', s: 'Major {1} withdrew from the platform within a week.', tip: 'ADVERT → ADVERTISE → ADVERTISER. El verbo se forma primero.' },
{ id: 'd0552', root: 'ASTRONOMY', a: 'ASTRONOMERS', p: '-ER sobre sustantivo', src: 'Personas y agentes', s: 'Amateur {1} made the first sighting.', tip: 'ASTRONOMY → ASTRONOMER: la Y se pierde. No es *astronomist.' },
{ id: 'd0553', root: 'GATE', a: 'GATEKEEPERS', p: 'Compuesto + -ER', src: 'Personas y agentes', s: 'Editors have lost much of their old role as cultural {1}.', tip: 'GATE + KEEP + -ER. GATEKEEPER = quien controla el acceso.' },
{ id: 'd0554', root: 'COME', a: 'NEWCOMER', p: 'Compuesto + -ER', src: 'Personas y agentes', s: 'As a relative {1} to the field, she brought no assumptions with her.', tip: 'NEW + COME + -ER. Cae la E de COME.' },
{ id: 'd0555', root: 'FLY', a: 'FLYERS', alt: ['FLIERS'], p: '-ER sobre verbo', src: 'Personas y agentes', s: 'Frequent {1} were the first to notice the change.', tip: 'FLY → FLYER o FLIER: las dos grafías se aceptan.' },
{ id: 'd0556', root: 'PRACTISE', a: 'PRACTITIONERS', p: '-ITIONER (irregular)', src: 'Personas y agentes', s: 'General {1} handle nine out of ten cases without referral.', tip: 'PRACTISE → PRACTITIONER, no *practiser. Formación irregular que hay que aprender de memoria.' },
{ id: 'd0557', root: 'PRACTICE', a: 'PRACTITIONERS', p: '-ITIONER (irregular)', src: 'Personas y agentes', s: 'The conference brings together researchers and {1}.', tip: 'Misma palabra desde el sustantivo PRACTICE. En británico PRACTICE es sustantivo y PRACTISE verbo.' },
{ id: 'd0558', root: 'EMPLOY', a: 'EMPLOYER', p: '-ER sobre verbo', src: 'Ampliación C2', s: 'The hospital is the largest single {1} in the county.', tip: 'EMPLOY → EMPLOYER = quien da empleo. Su par es EMPLOYEE.' },
{ id: 'd0559', root: 'RESEARCH', a: 'RESEARCHERS', p: '-ER sobre verbo', src: 'Ampliación C2', s: '{1} at three universities reached the same conclusion.', tip: 'RESEARCH → RESEARCHER. Sin cambios en la raíz.' },
{ id: 'd0560', root: 'MANUFACTURE', a: 'MANUFACTURERS', p: '-ER sobre verbo', src: 'Ampliación C2', s: 'Three {1} account for four fifths of the market.', tip: 'MANUFACTURE → MANUFACTURER. Se conserva la R final de la raíz: -RER.' },

/* ---- -OR ------------------------------------------------------------------ */
{ id: 'd0561', root: 'COMMUNICATE', a: 'COMMUNICATOR', p: '-ATE → -ATOR', src: 'Personas y agentes', s: 'Whatever else he was, he was a gifted {1}.', tip: 'COMMUNICATE → COMMUNICATOR. Los verbos en -ATE toman -OR, nunca *-ater.' },
{ id: 'd0562', root: 'REGULATE', a: 'REGULATORS', p: '-ATE → -ATOR', src: 'Personas y agentes', s: 'Financial {1} were slow to see the risk.', tip: 'REGULATE → REGULATOR. Misma familia que COMMUNICATOR.' },
{ id: 'd0563', root: 'POLLEN', a: 'POLLINATORS', p: '-ATE + -OR', src: 'Personas y agentes', s: 'Wild bees are far more effective {1} than honeybees.', tip: 'POLLEN → POLLINATE → POLLINATOR. Fijate en la I: es POLLIN-, no *pollen-.' },
{ id: 'd0564', root: 'PREDATE', a: 'PREDATORS', p: '-ATE → -ATOR', src: 'Personas y agentes', s: 'The island had no land {1} until rats arrived.', tip: 'PREDATOR = depredador. Ojo: el verbo PREDATE también significa «ser anterior a».' },
{ id: 'd0565', root: 'EDIT', a: 'EDITOR', p: '-OR sobre verbo', src: 'Personas y agentes', s: 'The {1} refused to run the piece without a second source.', tip: 'EDIT → EDITOR. Con -OR, no *editer.' },
{ id: 'd0566', root: 'COMPETE', a: 'COMPETITOR', p: '-ITOR (irregular)', src: 'Personas y agentes', s: 'Their nearest {1} undercut them by a third.', tip: 'COMPETE → COMPETITOR, con una I intercalada, como COMPETITION.' },
{ id: 'd0567', root: 'SUCCEED', a: 'SUCCESSOR', p: '-OR con cambio de raíz', src: 'Personas y agentes', s: 'Her {1} inherited a department in some disarray.', tip: 'SUCCEED → SUCCESSOR: la doble E pasa a doble S. Igual que SUCCESS.' },
{ id: 'd0568', root: 'PROCESS', a: 'PROCESSOR', p: '-OR sobre verbo', src: 'Personas y agentes', s: 'A single {1} handled the entire calculation.', tip: 'PROCESS → PROCESSOR. Doble S de la raíz más -OR.' },
{ id: 'd0569', root: 'PROCESS', a: 'PROCESSORS', p: '-OR sobre verbo', src: 'Personas y agentes', s: 'Modern chips pack dozens of {1} onto a single die.', tip: 'Mismo agente en plural. El plural es regular: -ORS.' },
{ id: 'd0570', root: 'INVESTIGATE', a: 'INVESTIGATOR', p: '-ATE → -ATOR', src: 'Ampliación C2', s: 'The lead {1} resigned before the report was published.', tip: 'INVESTIGATE → INVESTIGATOR. Familia -ATE → -ATOR.' },
{ id: 'd0571', root: 'SUPERVISE', a: 'SUPERVISOR', p: '-OR sobre verbo', src: 'Ampliación C2', s: 'Her doctoral {1} had written the standard work on the subject.', tip: 'SUPERVISE → SUPERVISOR. Cae la E.' },
{ id: 'd0572', root: 'TRANSLATE', a: 'TRANSLATOR', p: '-ATE → -ATOR', src: 'Ampliación C2', s: 'The {1} preserved the rhyme scheme at some cost to the sense.', tip: 'TRANSLATE → TRANSLATOR. Compará con INTERPRETER, que sí lleva -ER.' },

/* ---- -IST ----------------------------------------------------------------- */
{ id: 'd0573', root: 'SCIENCE', a: 'SCIENTISTS', p: '-IST sobre sustantivo', src: 'Personas y agentes', s: 'A team of {1} spent two seasons on the ice.', tip: 'SCIENCE → SCIENTIST. La CE final pasa a T antes de -IST.' },
{ id: 'd0574', root: 'ECOLOGY', a: 'ECOLOGISTS', p: '-Y → -IST', src: 'Personas y agentes', s: 'Marine {1} had warned about the bloom for years.', tip: 'ECOLOGY → ECOLOGIST. La Y desaparece ante -IST.' },
{ id: 'd0575', root: 'LYRIC', a: 'LYRICISTS', p: '-IST sobre sustantivo', src: 'Personas y agentes', s: 'The best {1} of the period were rarely the best poets.', tip: 'LYRIC → LYRICIST. Aparece una I: lyri-c-ist.' },
{ id: 'd0576', root: 'CYCLE', a: 'CYCLISTS', p: '-IST sobre sustantivo', src: 'Personas y agentes', s: 'Separating {1} from traffic halved the accident rate.', tip: 'CYCLE → CYCLIST. Cae la E final.' },
{ id: 'd0577', root: 'ETHIC', a: 'ETHICISTS', p: '-IST sobre sustantivo', src: 'Personas y agentes', s: 'Medical {1} were consulted before the trial began.', tip: 'ETHIC → ETHICIST. Como LYRICIST, aparece la I.' },
{ id: 'd0578', root: 'ELITE', a: 'ELITIST', p: '-IST sobre sustantivo', src: 'Personas y agentes', s: 'The charge of being {1} has followed the institution for decades.', tip: 'ELITE → ELITIST. Aquí funciona como adjetivo; el sustantivo es ELITISM.' },
{ id: 'd0579', root: 'MODERN', a: 'MODERNIST', p: '-IST sobre adjetivo', src: 'Personas y agentes', s: 'The building is a rare {1} survival in the old town.', tip: 'MODERN → MODERNIST. Compará con MODERNISE, el verbo.' },
{ id: 'd0580', root: 'TRADITION', a: 'TRADITIONALISTS', p: '-AL + -IST', src: 'Personas y agentes', s: '{1} within the society opposed every one of the changes.', tip: 'TRADITION → TRADITIONAL → TRADITIONALIST. El adjetivo va primero.' },
{ id: 'd0581', root: 'PASTORAL', a: 'PASTORALISTS', p: '-IST sobre adjetivo', src: 'Personas y agentes', s: 'Nomadic {1} have grazed the plateau for three thousand years.', tip: 'PASTORAL → PASTORALIST = pastor trashumante, ganadero nómada.' },
{ id: 'd0582', root: 'PRESERVE', a: 'PRESERVATIONISTS', p: '-ATION + -IST', src: 'Personas y agentes', s: '{1} fought the demolition through three separate inquiries.', tip: 'PRESERVE → PRESERVATION → PRESERVATIONIST. Tres piezas apiladas.' },
{ id: 'd0583', root: 'PHYSICAL', a: 'PHYSICALIST', p: '-IST sobre adjetivo', src: 'Personas y agentes', s: 'The {1} account leaves consciousness unexplained.', tip: 'PHYSICAL → PHYSICALIST. En filosofía: quien sostiene que todo es físico.' },
{ id: 'd0584', root: 'TRIUMPH', a: 'TRIUMPHALIST', p: '-AL + -IST', src: 'Personas y agentes', s: 'The tone of the closing chapter is frankly {1}.', tip: 'TRIUMPH → TRIUMPHAL → TRIUMPHALIST = triunfalista.' },
{ id: 'd0585', root: 'ANALYSE', a: 'ANALYSTS', af: '-ist', p: '-ST (irregular)', src: 'Personas y agentes', s: 'City {1} had predicted a far smaller loss.', tip: 'ANALYSE → ANALYST: se pierde la E y sólo queda la T. No es *analyser en este sentido.' },
{ id: 'd0586', root: 'JOURNAL', a: 'JOURNALISTS', p: '-IST sobre sustantivo', src: 'Ampliación C2', s: 'Two {1} were expelled the following morning.', tip: 'JOURNAL → JOURNALIST. La actividad es JOURNALISM.' },
{ id: 'd0587', root: 'SPECIAL', a: 'SPECIALISTS', p: '-IST sobre adjetivo', src: 'Ampliación C2', s: 'The case was referred to {1} at the teaching hospital.', tip: 'SPECIAL → SPECIALIST. El verbo es SPECIALISE.' },

/* ---- -ANT y -ENT como agentes -------------------------------------------- */
{ id: 'd0588', root: 'APPLY', a: 'APPLICANTS', p: '-Y → -ICANT', src: 'Personas y agentes', s: 'Over six hundred {1} were shortlisted to forty.', tip: 'APPLY → APPLICANT. Aparece la C, como en APPLICATION.' },
{ id: 'd0589', root: 'INHABIT', a: 'INHABITANTS', p: '-ANT sobre verbo', src: 'Personas y agentes', s: 'The island has fewer than ninety permanent {1}.', tip: 'INHABIT → INHABITANT. Compará con INHABITABLE y UNINHABITABLE.' },
{ id: 'd0590', root: 'POLLUTE', a: 'POLLUTANTS', p: '-ANT sobre verbo', src: 'Personas y agentes', s: 'Airborne {1} were measured at four sites across the city.', tip: 'POLLUTE → POLLUTANT: la sustancia que contamina. Cae la E.' },
{ id: 'd0591', root: 'RESIDE', a: 'RESIDENTS', p: '-ENT sobre verbo', src: 'Personas y agentes', s: 'Local {1} were given no notice of the works.', tip: 'RESIDE → RESIDENT. Cae la E. El sustantivo abstracto es RESIDENCE.' },
{ id: 'd0592', root: 'CORRESPOND', a: 'CORRESPONDENTS', p: '-ENT sobre verbo', src: 'Personas y agentes', s: 'Foreign {1} filed their copy from a single hotel.', tip: 'CORRESPOND → CORRESPONDENT. Doble R en la raíz.' },
{ id: 'd0593', root: 'ASSIST', a: 'ASSISTANTS', p: '-ANT sobre verbo', src: 'Ampliación C2', s: 'Two research {1} were taken on for the summer.', tip: 'ASSIST → ASSISTANT. Con A, y el sustantivo abstracto es ASSISTANCE.' },
{ id: 'd0594', root: 'PARTICIPATE', a: 'PARTICIPANTS', p: '-ANT sobre verbo', src: 'Ampliación C2', s: 'All forty {1} completed the follow-up questionnaire.', tip: 'PARTICIPATE → PARTICIPANT. Se pierde el -ATE.' },

/* ---- -EE : el paciente, no el agente -------------------------------------- */
{ id: 'd0595', root: 'EMPLOY', a: 'EMPLOYEE', p: '-EE (paciente)', src: 'Personas y agentes', s: 'Every {1} was offered the same terms.', tip: 'EMPLOY → EMPLOYEE = el empleado, quien recibe la acción. Su par activo es EMPLOYER.' },
{ id: 'd0596', root: 'INTERVIEW', a: 'INTERVIEWEE', p: '-EE (paciente)', src: 'Ampliación C2', s: 'The {1} was given the questions half an hour in advance.', tip: 'INTERVIEWEE = el entrevistado; INTERVIEWER, el que entrevista. El contraste es puro Part 3.' },
{ id: 'd0597', root: 'TRAIN', a: 'TRAINEES', p: '-EE (paciente)', src: 'Ampliación C2', s: 'The {1} spend their first month observing.', tip: 'TRAIN → TRAINEE = quien recibe formación. El formador es el TRAINER.' },
{ id: 'd0598', root: 'REFER', a: 'REFEREE', p: '-EE sobre verbo', src: 'Ampliación C2', s: 'Each paper is read by at least one external {1}.', tip: 'REFER → REFEREE. Aquí no es un árbitro deportivo sino un revisor académico.' },

/* ---- -IAN y otros gentilicios y especialidades ---------------------------- */
{ id: 'd0599', root: 'MAMMAL', a: 'MAMMALIAN', p: '-IAN sobre sustantivo', src: 'Personas y agentes', s: 'The structure is unique to the {1} inner ear.', tip: 'MAMMAL → MAMMALIAN. Aquí -IAN forma adjetivo, no persona.' },
{ id: 'd0600', root: 'HISTORY', a: 'HISTORIANS', p: '-IAN sobre sustantivo', src: 'Ampliación C2', s: 'Economic {1} have revised the figure twice.', tip: 'HISTORY → HISTORIAN. La Y pasa a I.' },
{ id: 'd0601', root: 'LIBRARY', a: 'LIBRARIAN', p: '-IAN sobre sustantivo', src: 'Ampliación C2', s: 'The county {1} catalogued the bequest single-handed.', tip: 'LIBRARY → LIBRARIAN. Igual que HISTORY → HISTORIAN.' },
{ id: 'd0602', root: 'BRITISH', a: 'BRITONS', p: 'Gentilicio irregular', src: 'Personas y agentes', s: 'Some two million {1} were living abroad at the time.', tip: 'BRITISH es el adjetivo; BRITON, la persona. No existe *Britishers en registro formal.' },
{ id: 'd0603', root: 'DEMAGOGUE', a: 'DEMAGOGUES', af: 'inflection', p: 'Flexión de plural', src: 'Personas y agentes', s: 'The chapter compares three {1} of the interwar years.', tip: 'Aquí no hay sufijo derivativo: sólo el plural de la palabra dada. A veces la respuesta del Part 3 es exactamente eso.' },
{ id: 'd0604', root: 'VOLUNTEER', a: 'VOLUNTEERS', af: 'inflection', p: 'Flexión de plural', src: 'Personas y agentes', s: 'Unpaid {1} run the entire archive.', tip: 'VOLUNTEER ya es la persona: sólo hace falta el plural. El adverbio es VOLUNTARILY.' }

]);
