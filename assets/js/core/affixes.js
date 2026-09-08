/**
 * The morphology engine.
 *
 * Word formation is not an open vocabulary problem. It is a closed system of
 * roughly seventy affixes applied to an open set of stems, and a learner who
 * owns the system can derive a word they have never met. This module encodes
 * that system: what each prefix and suffix does, which part of speech it
 * produces, and how to read an unseen STEM → ANSWER pair back into the affixes
 * that built it.
 *
 * Everything downstream depends on it. The Puntos débiles screen groups a
 * learner's failures by affix family rather than by word, the affix explorer
 * turns the catalogue into a syllabus with live coverage, and the exam review
 * can always name the transformation it just tested.
 *
 * Detection is a heuristic and it is allowed to be: any content item can
 * override it outright with `af: 'un-'` or `af: ['un-', '-able']`, which is how
 * compounds (PLAY → PLAYWRIGHT) and deceptive stems (SIGHT → INSIGHTS, where
 * `in-` is locative rather than negative) are kept honest.
 */
(function (WC2) {
  'use strict';

  /* ------------------------------------------------------------- Groups --- */

  /**
   * The eight families a learner actually experiences as separate skills.
   * Order matters: it is the priority used when a derivation carries more than
   * one affix, and prefixes outrank suffixes because in UNAVOIDABLE the part
   * that gets missed is the `un-`, not the `-able`.
   */
  const GROUPS = [
    { id: 'neg',   label: 'Prefijos negativos',        note: 'UN-, IN-, IM-, IL-, IR-, DIS-, NON-, MIS-' },
    { id: 'pre',   label: 'Prefijos de grado y relación', note: 'OVER-, UNDER-, RE-, PRE-, INTER-, OUT-, CO-…' },
    { id: 'verb',  label: 'Sufijos que forman verbos',  note: '-ISE, -IFY, -EN, -ATE' },
    { id: 'agent', label: 'Personas y agentes',         note: '-ER, -OR, -IST, -ANT, -EE, -IAN' },
    { id: 'noun',  label: 'Sustantivos abstractos',     note: '-TION, -MENT, -NESS, -ITY, -ANCE…' },
    { id: 'adj',   label: 'Sufijos que forman adjetivos', note: '-ABLE, -FUL, -LESS, -OUS, -IVE, -AL, -IC…' },
    { id: 'adv',   label: 'Adverbios y dirección',      note: '-LY, -WARDS, -WISE' },
    { id: 'other', label: 'Compuestos y raíces irregulares', note: 'DEEP→DEPTH, PLAY→PLAYWRIGHT' }
  ];

  const groupById = (id) => GROUPS.filter((g) => g.id === id)[0] || GROUPS[GROUPS.length - 1];

  /* ----------------------------------------------------------- Prefixes --- */

  /* `m` is what is matched against the front of the answer. */
  const PREFIXES = [
    { id: 'un-',      tag: 'UN-',      m: 'un',      g: 'neg', label: 'Negación o reversión',        note: 'El negativo por defecto del inglés germánico. Con adjetivos y participios: UNAVOIDABLE, UNKNOWN, UNALTERED.' },
    { id: 'in-',      tag: 'IN-',      m: 'in',      g: 'neg', label: 'Negación (raíces latinas)',   note: 'Se usa con raíces de origen latino: INABILITY, INACCESSIBLE, INCONCLUSIVE. Asimila ante m/p/b, l y r.' },
    { id: 'im-',      tag: 'IM-',      m: 'im',      g: 'neg', label: 'Negación ante M, P y B',      note: 'IN- se asimila a la consonante que sigue: IMPROBABLE, IMPERSONAL, IMPARTIALITY.' },
    { id: 'il-',      tag: 'IL-',      m: 'il',      g: 'neg', label: 'Negación ante L',             note: 'ILLEGAL, ILLEGIBLE, ILLOGICAL. Nunca *INLEGAL.' },
    { id: 'ir-',      tag: 'IR-',      m: 'ir',      g: 'neg', label: 'Negación ante R',             note: 'IRREPARABLY, IRRESPECTIVE, IRREPLACEABLE, IRRATIONAL.' },
    { id: 'dis-',     tag: 'DIS-',     m: 'dis',     g: 'neg', label: 'Negación, reversión o privación', note: 'DISSATISFACTION, DISPROVED, DISCOURAGED, DISPOSSESSED. Aporta la idea de deshacer.' },
    { id: 'non-',     tag: 'NON-',     m: 'non',     g: 'neg', label: 'Negación neutra',             note: 'NONSENSE, NON-EXISTENT. Solo niega: no juzga, a diferencia de UN- o MIS-.' },
    { id: 'mis-',     tag: 'MIS-',     m: 'mis',     g: 'neg', label: 'Mal, de forma equivocada',    note: 'MISINTERPRETED, MISUNDERSTOOD, MISREPRESENTED. No es «no hacer», es «hacer mal».' },
    { id: 'mal-',     tag: 'MAL-',     m: 'mal',     g: 'neg', label: 'Mal, defectuoso',             note: 'MALNUTRITION, MALFUNCTION, MALPRACTICE. Registro más formal que MIS-.' },
    { id: 'anti-',    tag: 'ANTI-',    m: 'anti',    g: 'neg', label: 'Contra',                      note: 'ANTIBIOTIC, ANTISOCIAL, ANTICLOCKWISE.' },
    { id: 'counter-', tag: 'COUNTER-', m: 'counter', g: 'neg', label: 'En sentido contrario',        note: 'COUNTERPRODUCTIVE, COUNTERARGUMENT, COUNTERINTUITIVE.' },
    { id: 'de-',      tag: 'DE-',      m: 'de',      g: 'neg', label: 'Quitar, revertir un proceso', note: 'DECARBONISATION, DEFOREST, DEVALUE. Muy productivo en textos científicos.' },

    { id: 'over-',    tag: 'OVER-',    m: 'over',    g: 'pre', label: 'Exceso o por encima',         note: 'OVERPRODUCTION, OVERSIMPLIFICATION, OVERRULED, OVERCOME.' },
    { id: 'under-',   tag: 'UNDER-',   m: 'under',   g: 'pre', label: 'Insuficiencia o debajo',      note: 'UNDERESTIMATED, UNDERFUNDED, UNDERNOURISHMENT, UNDERGONE.' },
    { id: 're-',      tag: 'RE-',      m: 're',      g: 'pre', label: 'Repetición o vuelta atrás',   note: 'REASSESSMENT, RELOCATE, REPHRASE, REINTRODUCTION.' },
    { id: 'pre-',     tag: 'PRE-',     m: 'pre',     g: 'pre', label: 'Antes de',                    note: 'PREDATES, PREVIEW, PREOCCUPATION, PREMATURELY.' },
    { id: 'post-',    tag: 'POST-',    m: 'post',    g: 'pre', label: 'Después de',                  note: 'POSTWAR, POSTGRADUATE, POSTPONE.' },
    { id: 'inter-',   tag: 'INTER-',   m: 'inter',   g: 'pre', label: 'Entre, mutuamente',           note: 'INTERDEPENDENCE, INTERACTIONS, INTERNATIONAL.' },
    { id: 'intra-',   tag: 'INTRA-',   m: 'intra',   g: 'pre', label: 'Dentro de',                   note: 'INTRAVENOUS, INTRACELLULAR.' },
    { id: 'sub-',     tag: 'SUB-',     m: 'sub',     g: 'pre', label: 'Debajo, por debajo del nivel', note: 'SUBSTANDARD, SUBCONSCIOUS, SUBMARINE.' },
    { id: 'super-',   tag: 'SUPER-',   m: 'super',   g: 'pre', label: 'Por encima, superior',        note: 'SUPERVISOR, SUPERNATURAL, SUPERIMPOSE.' },
    { id: 'out-',     tag: 'OUT-',     m: 'out',     g: 'pre', label: 'Hacia fuera o superando',     note: 'OUTSPOKEN, OUTDATED, OUTWARD, OUTPERFORM.' },
    { id: 'co-',      tag: 'CO-',      m: 'co',      g: 'pre', label: 'Junto con',                   note: 'COINCIDENTAL, COOPERATE, COEXIST.' },
    { id: 'trans-',   tag: 'TRANS-',   m: 'trans',   g: 'pre', label: 'A través, cambio de estado',  note: 'TRANSPARENCY, TRANSFORM, TRANSATLANTIC.' },
    { id: 'fore-',    tag: 'FORE-',    m: 'fore',    g: 'pre', label: 'Por adelantado',              note: 'FOREWARNED, FORESEE, FORECAST.' },
    { id: 'ex-',      tag: 'EX-',      m: 'ex',      g: 'pre', label: 'Fuera de, antiguo',           note: 'EXACERBATING, EXTRAORDINARY, EX-PRESIDENT.' },
    { id: 'extra-',   tag: 'EXTRA-',   m: 'extra',   g: 'pre', label: 'Fuera de lo normal',          note: 'EXTRAORDINARY, EXTRACURRICULAR.' },
    { id: 'up-',      tag: 'UP-',      m: 'up',      g: 'pre', label: 'Hacia arriba, mejora',        note: 'UPGRADE, UPDATING, UPPER, UPHOLD.' },
    { id: 'en-',      tag: 'EN-/EM-',  m: 'en',      g: 'pre', label: 'Dotar de, convertir en',      note: 'ENSURING, ENTITLED, ENLIGHTENMENT, EMPOWER. Forma verbos a partir de sustantivos.' },
    { id: 'em-',      tag: 'EM-',      m: 'em',      g: 'pre', label: 'Variante de EN- ante M, P, B', note: 'EMPOWER, EMBODY, EMBITTER.' },
    { id: 'self-',    tag: 'SELF-',    m: 'self',    g: 'pre', label: 'Auto-, a sí mismo',           note: 'SELF-EVIDENT, SELF-SUFFICIENT, SELF-CONSCIOUS.' },
    { id: 'semi-',    tag: 'SEMI-',    m: 'semi',    g: 'pre', label: 'Medio, parcialmente',         note: 'SEMICIRCLE, SEMI-DETACHED.' },
    { id: 'multi-',   tag: 'MULTI-',   m: 'multi',   g: 'pre', label: 'Múltiple',                    note: 'MULTILINGUAL, MULTINATIONAL.' },
    { id: 'auto-',    tag: 'AUTO-',    m: 'auto',    g: 'pre', label: 'Por sí mismo',                note: 'AUTOMATION, AUTOBIOGRAPHY.' },
    { id: 'micro-',   tag: 'MICRO-',   m: 'micro',   g: 'pre', label: 'Pequeño',                     note: 'MICROBIAL, MICROSCOPIC.' },
    { id: 'with-',    tag: 'WITH-',    m: 'with',    g: 'pre', label: 'Atrás, en contra',            note: 'WITHDRAWN, WITHHOLD, WITHSTAND.' }
  ];

  /* ----------------------------------------------------------- Suffixes --- */

  const SUFFIXES = [
    /* --- Nouns: abstract ---------------------------------------------- */
    { id: '-ation',  tag: '-ATION',  m: 'ation',  g: 'noun',  label: 'Sustantivo de acción o resultado', note: 'El sufijo nominal más rentable del examen: ADAPTATION, DECLARATION, EXPLOITATION, CONSERVATION.' },
    { id: '-ition',  tag: '-ITION',  m: 'ition',  g: 'noun',  label: 'Sustantivo de acción',        note: 'Variante de -TION tras ciertas raíces: NUTRITION, COMPETITION, DEFINITION.' },
    { id: '-ution',  tag: '-UTION',  m: 'ution',  g: 'noun',  label: 'Sustantivo de acción',        note: 'RESOLUTION, REVOLUTION, EXECUTION, SOLUTION.' },
    { id: '-sion',   tag: '-SION',   m: 'sion',   g: 'noun',  label: 'Sustantivo tras raíz en -D, -DE o -SE', note: 'EXTENSION, INCLUSION, EXPANSION, CONGESTION. Compará DECIDE → DECISION.' },
    { id: '-tion',   tag: '-TION',   m: 'tion',   g: 'noun',  label: 'Sustantivo de acción o resultado', note: 'INTENTION, PRODUCTION, PERMISSION. Convierte verbos en sustantivos abstractos.' },
    { id: '-ment',   tag: '-MENT',   m: 'ment',   g: 'noun',  label: 'Sustantivo de acción o resultado', note: 'SETTLEMENT, MANAGEMENT, ABANDONMENT, ENLIGHTENMENT. Se pega a verbos sin cambiar la raíz.' },
    { id: '-ness',   tag: '-NESS',   m: 'ness',   g: 'noun',  label: 'Cualidad, a partir de adjetivos', note: 'DARKNESS, ATTENTIVENESS, PREPAREDNESS, ASSERTIVENESS. El de rendimiento más alto sobre adjetivos germánicos.' },
    { id: '-ability',tag: '-ABILITY',m: 'ability',g: 'noun',  label: 'Cualidad de lo que se puede',  note: 'AFFORDABILITY, SCALABILITY, DISPOSABILITY. Es -ABLE + -ITY en una sola pieza.' },
    { id: '-ibility',tag: '-IBILITY',m: 'ibility',g: 'noun',  label: 'Cualidad de lo que se puede',  note: 'FEASIBILITY, CREDIBILITY, VISIBILITY, RESPONSIBILITY.' },
    { id: '-ity',    tag: '-ITY',    m: 'ity',    g: 'noun',  label: 'Cualidad, a partir de adjetivos latinos', note: 'IDENTITY, ANONYMITY, VITALITY, LONGEVITY. Suele desplazar el acento: ORÍGINAL → ORIGINÁLITY.' },
    { id: '-ancy',   tag: '-ANCY',   m: 'ancy',   g: 'noun',  label: 'Estado o cualidad',           note: 'REDUNDANCY, VACANCY, DISCREPANCY.' },
    { id: '-ency',   tag: '-ENCY',   m: 'ency',   g: 'noun',  label: 'Estado o cualidad',           note: 'TENDENCY, DESPONDENCY, DEPENDENCY, EFFICIENCY.' },
    { id: '-ance',   tag: '-ANCE',   m: 'ance',   g: 'noun',  label: 'Acción o estado',             note: 'RELIANCE, MAINTENANCE, RESISTANCE, ASSURANCE.' },
    { id: '-ence',   tag: '-ENCE',   m: 'ence',   g: 'noun',  label: 'Acción o estado',             note: 'PERSISTENCE, EMERGENCE, DEFERENCE, COHERENCE. La elección -ANCE/-ENCE es pura memoria.' },
    { id: '-ship',   tag: '-SHIP',   m: 'ship',   g: 'noun',  label: 'Condición, cargo o vínculo',  note: 'RELATIONSHIP, SCHOLARSHIP, READERSHIP, LEADERSHIP.' },
    { id: '-hood',   tag: '-HOOD',   m: 'hood',   g: 'noun',  label: 'Estado o etapa de la vida',   note: 'CHILDHOOD, LIKELIHOOD, NEIGHBOURHOOD.' },
    { id: '-dom',    tag: '-DOM',    m: 'dom',    g: 'noun',  label: 'Estado, dominio o condición', note: 'WISDOM, FREEDOM, BOREDOM, KINGDOM. Ojo: WISE → WISDOM cambia la raíz.' },
    { id: '-ism',    tag: '-ISM',    m: 'ism',    g: 'noun',  label: 'Doctrina, práctica o rasgo',  note: 'CONSUMERISM, OPTIMISM, ABSENTEEISM, SCEPTICISM, SENSATIONALISM.' },
    { id: '-ology',  tag: '-OLOGY',  m: 'ology',  g: 'noun',  label: 'Disciplina o estudio de',     note: 'PSYCHOLOGY, TERMINOLOGY, METHODOLOGY.' },
    { id: '-ure',    tag: '-URE',    m: 'ure',    g: 'noun',  label: 'Acción o resultado',          note: 'MOISTURE, PRESSURE, EXPOSURE, DEPARTURE.' },
    { id: '-age',    tag: '-AGE',    m: 'age',    g: 'noun',  label: 'Acción, conjunto o coste',    note: 'BREAKAGES, SHORTAGE, MILEAGE, PERCENTAGE.' },
    { id: '-ery',    tag: '-ERY',    m: 'ery',    g: 'noun',  label: 'Actividad, oficio o lugar',   note: 'FORESTRY, MACHINERY, BAKERY, IMAGERY.' },
    { id: '-ry',     tag: '-RY',     m: 'ry',     g: 'noun',  label: 'Conjunto o actividad',        note: 'FORESTRY, RIVALRY, JEWELLERY.' },
    { id: '-ics',    tag: '-ICS',    m: 'ics',    g: 'noun',  label: 'Disciplina o campo',          note: 'DYNAMICS, ETHICS, ECONOMICS, LINGUISTICS.' },
    { id: '-th',     tag: '-TH',     m: 'th',     g: 'noun',  label: 'Cualidad, con cambio de vocal', note: 'DEEP → DEPTH, LONG → LENGTH, STRONG → STRENGTH, WIDE → WIDTH. Irregular y muy examinable.' },

    /* --- Nouns: people and agents ------------------------------------- */
    { id: '-ist',    tag: '-IST',    m: 'ist',    g: 'agent', label: 'Persona: profesión o doctrina', note: 'LYRICISTS, ECOLOGISTS, ANALYSTS, ELITIST, MODERNIST.' },
    { id: '-ian',    tag: '-IAN',    m: 'ian',    g: 'agent', label: 'Persona: especialidad u origen', note: 'HISTORIAN, MUSICIAN, POLITICIAN, LIBRARIAN.' },
    { id: '-eer',    tag: '-EER',    m: 'eer',    g: 'agent', label: 'Persona dedicada a',          note: 'ENGINEER, VOLUNTEER, MOUNTAINEER, PROFITEER.' },
    { id: '-ee',     tag: '-EE',     m: 'ee',     g: 'agent', label: 'Quien recibe la acción',      note: 'EMPLOYEE, INTERVIEWEE, TRAINEE. Es el paciente, no el agente: compará EMPLOYER / EMPLOYEE.' },
    { id: '-ant',    tag: '-ANT',    m: 'ant',    g: 'agent', label: 'Agente o sustancia que hace',  note: 'APPLICANTS, POLLUTANTS, INHABITANTS, ASSISTANT.' },
    { id: '-ent',    tag: '-ENT',    m: 'ent',    g: 'agent', label: 'Agente o cosa que hace',      note: 'RESIDENTS, CORRESPONDENTS, STUDENT, OPPONENT.' },
    { id: '-or',     tag: '-OR',     m: 'or',     g: 'agent', label: 'Agente (raíces latinas)',     note: 'COMMUNICATOR, SUCCESSOR, PROCESSOR, EDITOR, REGULATORS.' },
    { id: '-er',     tag: '-ER',     m: 'er',     g: 'agent', label: 'Agente o instrumento',        note: 'WORKERS, SPEAKERS, GATEKEEPERS, NEWCOMER, REFORMERS.' },

    /* --- Adjectives ---------------------------------------------------- */
    { id: '-able',   tag: '-ABLE',   m: 'able',   g: 'adj',   label: 'Que se puede, capaz de',      note: 'UNAVOIDABLE, ADAPTABLE, ACCOUNTABLE, CURABLE. Se pega sobre todo a verbos.' },
    { id: '-ible',   tag: '-IBLE',   m: 'ible',   g: 'adj',   label: 'Que se puede (raíces latinas)', note: 'ACCESSIBLE, CONVERTIBLE, LEGIBLE, RESPONSIBLE. -ABLE o -IBLE es puro léxico.' },
    { id: '-ative',  tag: '-ATIVE',  m: 'ative',  g: 'adj',   label: 'Con tendencia a',             note: 'REPRESENTATIVE, INNOVATIVE, MANIPULATIVE, AUTHORITATIVE.' },
    { id: '-itive',  tag: '-ITIVE',  m: 'itive',  g: 'adj',   label: 'Con tendencia a',             note: 'COMPETITIVE, SENSITIVE, INTUITIVE, DEFINITIVE.' },
    { id: '-ive',    tag: '-IVE',    m: 'ive',    g: 'adj',   label: 'Que tiende a o puede',        note: 'EXECUTIVE, SELECTIVE, REDUCTIVE, ELUSIVE, PERVASIVE.' },
    { id: '-ious',   tag: '-IOUS',   m: 'ious',   g: 'adj',   label: 'Lleno de, caracterizado por', note: 'LABORIOUS, SPACIOUS, VARIOUS, PRECIOUS.' },
    { id: '-eous',   tag: '-EOUS',   m: 'eous',   g: 'adj',   label: 'Lleno de',                    note: 'ADVANTAGEOUS, COURAGEOUS, SIMULTANEOUS.' },
    { id: '-uous',   tag: '-UOUS',   m: 'uous',   g: 'adj',   label: 'Caracterizado por',           note: 'CONTINUOUS, AMBIGUOUS, STRENUOUS.' },
    { id: '-ous',    tag: '-OUS',    m: 'ous',    g: 'adj',   label: 'Lleno de, con la cualidad de', note: 'NERVOUS, HUMOROUS, POISONOUS, MOMENTOUS, PROSPEROUS.' },
    { id: '-ical',   tag: '-ICAL',   m: 'ical',   g: 'adj',   label: 'Relativo a',                  note: 'PSYCHOLOGICAL, ECOLOGICAL, HIERARCHICAL, ASTRONOMICAL.' },
    { id: '-ic',     tag: '-IC',     m: 'ic',     g: 'adj',   label: 'Relativo a, propio de',       note: 'STRATEGIC, HEROIC, GENETIC, SYMBIOTIC, CATASTROPHIC.' },
    { id: '-ial',    tag: '-IAL',    m: 'ial',    g: 'adj',   label: 'Relativo a',                  note: 'INFLUENTIAL, CONSEQUENTIAL, CONTROVERSIAL, AUTHORIAL.' },
    { id: '-al',     tag: '-AL',     m: 'al',     g: 'adj',   label: 'Relativo a',                  note: 'FOCAL, DETRIMENTAL, ELEMENTAL, REGIONAL, COMMUNAL.' },
    { id: '-ary',    tag: '-ARY',    m: 'ary',    g: 'adj',   label: 'Relativo a, que sirve para',  note: 'CAUTIONARY, RUDIMENTARY, HEREDITARY, MIGRATORY.' },
    { id: '-ory',    tag: '-ORY',    m: 'ory',    g: 'adj',   label: 'Que hace o sirve para',       note: 'EXPLANATORY, INFLAMMATORY, SATISFACTORY, COMPULSORY.' },
    { id: '-ful',    tag: '-FUL',    m: 'ful',    g: 'adj',   label: 'Lleno de',                    note: 'POWERFUL, WASTEFUL, RESOURCEFUL, HEALTHFUL.' },
    { id: '-less',   tag: '-LESS',   m: 'less',   g: 'adj',   label: 'Sin, carente de',             note: 'MEANINGLESS, COUNTLESS, RELENTLESS, PRICELESS. El opuesto exacto de -FUL.' },
    { id: '-some',   tag: '-SOME',   m: 'some',   g: 'adj',   label: 'Que produce o tiende a',      note: 'BURDENSOME, TROUBLESOME, CUMBERSOME, WORRISOME.' },
    { id: '-ish',    tag: '-ISH',    m: 'ish',    g: 'adj',   label: 'Algo así, con matiz atenuado', note: 'FADDISH, CHILDISH, REDDISH. Suele añadir un juicio ligeramente negativo.' },
    { id: '-worthy', tag: '-WORTHY', m: 'worthy', g: 'adj',   label: 'Digno de',                    note: 'TRUSTWORTHY, NEWSWORTHY, NOTEWORTHY.' },
    { id: '-proof',  tag: '-PROOF',  m: 'proof',  g: 'adj',   label: 'A prueba de',                 note: 'WATERPROOF, FOOLPROOF, SOUNDPROOF.' },
    { id: '-ant/adj',tag: '-ANT',    m: 'ant',    g: 'adj',   label: 'Adjetivo de cualidad',        note: 'PREVALENT, ABUNDANT, SIGNIFICANT, DEVIANT.' },
    { id: '-ing',    tag: '-ING',    m: 'ing',    g: 'adj',   label: 'Participio activo: lo que causa', note: 'DEPRESSING, DEMANDING, ENDURING, INTOXICATING. Compará BORING (cosa) con BORED (persona).' },
    { id: '-ed',     tag: '-ED',     m: 'ed',     g: 'adj',   label: 'Participio pasivo: lo que se siente', note: 'ACCUSTOMED, ACCLAIMED, DISCOURAGED, CRAFTED.' },
    { id: '-y',      tag: '-Y',      m: 'y',      g: 'adj',   label: 'Que tiene o parece',          note: 'WEIGHTY, HEALTHY, RISKY, WEALTHY.' },

    /* --- Verbs --------------------------------------------------------- */
    { id: '-ise',    tag: '-ISE/-IZE',m: 'ise',   g: 'verb',  label: 'Convertir en, someter a',     note: 'MODERNISE, PRIORITISE, TRIVIALISE, SCRUTINISE. Cambridge acepta -ISE y -IZE si sos consistente.' },
    { id: '-ize',    tag: '-IZE',    m: 'ize',    g: 'verb',  label: 'Variante ortográfica de -ISE', note: 'REALIZE, ORGANIZE. Ortografía preferida en EE. UU. y en Oxford.' },
    { id: '-ify',    tag: '-IFY',    m: 'ify',    g: 'verb',  label: 'Hacer, convertir en',         note: 'FORTIFY, CLARIFY, INTENSIFY, SIMPLIFY.' },
    { id: '-ate',    tag: '-ATE',    m: 'ate',    g: 'verb',  label: 'Hacer, producir, dotar de',   note: 'AGGREGATE, DIFFERENTIATE, ACTIVATE. También forma adjetivos: PASSIONATE.' },
    { id: '-en',     tag: '-EN',     m: 'en',     g: 'verb',  label: 'Hacer más, volverse',         note: 'BROADEN, LESSEN, STRENGTHEN, WIDEN. Sobre adjetivos cortos.' },

    /* --- Adverbs ------------------------------------------------------- */
    { id: '-ically', tag: '-ICALLY', m: 'ically', g: 'adv',   label: 'Adverbio desde -IC / -ICAL',  note: 'REALISTICALLY, SYSTEMATICALLY, EMPIRICALLY, SCEPTICALLY. Ojo: es -ICALLY, nunca *-ICLY.' },
    { id: '-ly',     tag: '-LY',     m: 'ly',     g: 'adv',   label: 'Adverbio de modo o comentario', note: 'WIDELY, REMARKABLY, UNDOUBTEDLY, SEEMINGLY, ALARMINGLY.' },
    { id: '-wards',  tag: '-WARD(S)',m: 'ward',   g: 'adv',   label: 'Dirección',                   note: 'OUTWARD, TOWARDS, BACKWARDS, ONWARDS.' },
    { id: '-wise',   tag: '-WISE',   m: 'wise',   g: 'adv',   label: 'De ese modo, en cuanto a',    note: 'LIKEWISE, CLOCKWISE, OTHERWISE.' }
  ];

  /* Longest first, so -ATION wins over -TION and -ABILITY over -ITY. */
  const byLength = (a, b) => b.m.length - a.m.length;
  const PREFIX_ORDER = PREFIXES.slice().sort(byLength);
  const SUFFIX_ORDER = SUFFIXES.slice().sort(byLength);

  const INDEX = Object.create(null);
  PREFIXES.concat(SUFFIXES).forEach((a) => { INDEX[a.id] = a; });

  const COMPOUND = { id: 'compound', tag: 'COMPUESTO', g: 'other', kind: 'other',
    label: 'Palabra compuesta', note: 'Dos palabras plenas soldadas en una: PLAYWRIGHT, WILDLIFE, DEADLINE, FIREARMS, GATEKEEPERS.' };
  const INTERNAL = { id: 'internal', tag: 'RAÍZ', g: 'other', kind: 'other',
    label: 'Cambio interno de la raíz', note: 'La vocal o la consonante de la raíz cambia: DEEP → DEPTH, LONG → LENGTH, WISE → WISDOM, HIGH → HEIGHT.' };
  INDEX.compound = COMPOUND;
  INDEX.internal = INTERNAL;

  PREFIXES.forEach((p) => { p.kind = 'prefix'; });
  SUFFIXES.forEach((s) => { s.kind = 'suffix'; });

  /* ---------------------------------------------------------- Analysis --- */

  /* Inflections that ride on top of a derivation without being one. */
  function stripInflection(word) {
    if (/[^s]s$/.test(word) && !/(ss|us|is|ous)$/.test(word)) return word.slice(0, -1);
    if (/ies$/.test(word)) return word.slice(0, -3) + 'y';
    if (/es$/.test(word) && /(ch|sh|x|z|ss)es$/.test(word)) return word.slice(0, -2);
    return null;
  }

  function findPrefix(ans, root) {
    for (let i = 0; i < PREFIX_ORDER.length; i++) {
      const p = PREFIX_ORDER[i];
      if (ans.indexOf(p.m) !== 0) continue;
      if (root.indexOf(p.m) === 0) continue;          /* the stem already had it */
      if (ans.length - p.m.length < 3) continue;
      return p;
    }
    return null;
  }

  function findSuffix(ans, root) {
    const candidates = [ans];
    const bare = stripInflection(ans);
    if (bare) candidates.push(bare);

    for (let c = 0; c < candidates.length; c++) {
      const word = candidates[c];
      for (let i = 0; i < SUFFIX_ORDER.length; i++) {
        const s = SUFFIX_ORDER[i];
        const at = word.length - s.m.length;
        if (at < 3) continue;
        if (word.slice(at) !== s.m) continue;
        if (root.slice(-s.m.length) === s.m) continue;  /* the stem already ended so */
        return s;
      }
    }
    return null;
  }

  /**
   * Reads a STEM → ANSWER pair back into the affixes that built it.
   * `declared` (the item's `af` field) always wins: a string or an array of ids.
   */
  function analyse(root, answer, declared) {
    const R = String(root || '').toLowerCase().replace(/[^a-z]/g, '');
    const A = String(answer || '').toLowerCase().replace(/[^a-z]/g, '');

    if (declared) {
      const ids = [].concat(declared).filter((id) => INDEX[id]);
      if (ids.length) return build(ids.map((id) => INDEX[id]));
    }

    const parts = [];
    const prefix = findPrefix(A, R);
    if (prefix) parts.push(prefix);
    const suffix = findSuffix(A, R);
    if (suffix) parts.push(suffix);

    if (!parts.length) {
      /* No affix found. If the whole stem survives inside the answer it is a
         compound; if it does not, the root itself was reshaped. */
      parts.push(R && A.indexOf(R) !== -1 ? COMPOUND : INTERNAL);
    }
    return build(parts);
  }

  function build(parts) {
    const ids = parts.map((p) => p.id);
    const primary = parts[0];
    return {
      parts,
      ids,
      prefix: parts.filter((p) => p.kind === 'prefix')[0] || null,
      suffix: parts.filter((p) => p.kind === 'suffix')[0] || null,
      group: groupById(primary.g),
      label: parts.map((p) => p.tag).join(' + ')
    };
  }

  const get = (id) => INDEX[id] || null;
  const all = () => PREFIXES.concat(SUFFIXES).concat([COMPOUND, INTERNAL]);

  WC2.affixes = {
    GROUPS, PREFIXES, SUFFIXES, COMPOUND, INTERNAL,
    analyse, get, all, groupById, stripInflection
  };
}(window.WC2));
