/**
 * Passage bank 03 — technology and computation.
 *
 * The register that has generated most of the language's newest derivations,
 * and therefore the one where the exam can be confident a candidate is deriving
 * rather than recalling: SCALE → SCALABILITY, DIGITAL → DIGITISATION,
 * ALGORITHM → ALGORITHMIC.
 */
WC2.content.registerPassages([

{
  id: 'w11',
  title: 'The Accountability Gap',
  focus: 'Sufijos abstractos en el registro técnico',
  brief: 'ALGORITHM→ALGORITHMIC · ACCOUNT→ACCOUNTABILITY · TRANSPARENT→TRANSPARENCY · BIAS→UNBIASED · REGULATE→REGULATORS · DEPLOY→DEPLOYMENT · SCRUTINY→SCRUTINISE · LIABLE→LIABILITY',
  text: `An {1} decision differs from a human one in a way that the law has not yet absorbed: there is nobody to ask. When a loan is refused by a committee, the committee can be made to explain itself. When it is refused by a model trained on twelve years of previous refusals, {2} dissolves.

The industry answer has been {3}, which sounds like a solution and is not quite one. Publishing the weights of a network tells almost nobody anything. What matters is whether the outputs are {4}, and that can only be established by testing them.

{5} in three jurisdictions have now begun to require impact assessments before {6}, on the model of environmental law. Firms object that this is impossible to {7} in any meaningful way, given how fast the systems change.

The objection has force. It is also, conveniently, an argument for leaving {8} exactly where it currently sits, which is nowhere.`,
  gaps: [
    { n: 1, root: 'ALGORITHM', a: 'ALGORITHMIC', p: '-IC sobre sustantivo', tip: 'ALGORITHM → ALGORITHMIC. Adjetivo antepuesto a «decision». La TH se conserva.' },
    { n: 2, root: 'ACCOUNT', a: 'ACCOUNTABILITY', p: '-ABLE + -ITY', tip: 'ACCOUNT → ACCOUNTABLE → ACCOUNTABILITY. Sujeto del verbo «dissolves».' },
    { n: 3, root: 'TRANSPARENT', a: 'TRANSPARENCY', p: '-ENT → -ENCY', tip: 'TRANSPARENT → TRANSPARENCY. Los adjetivos en -ENT dan sustantivos en -ENCY.' },
    { n: 4, root: 'BIAS', a: 'UNBIASED', p: 'UN- + -ED', tip: 'BIAS → BIASED → UNBIASED. La S no se dobla en británico estándar.' },
    { n: 5, root: 'REGULATE', a: 'REGULATORS', p: '-ATE → -ATOR', tip: 'REGULATE → REGULATOR. Los verbos en -ATE toman -OR, nunca *-ater.' },
    { n: 6, root: 'DEPLOY', a: 'DEPLOYMENT', p: '-MENT sobre verbo', tip: 'DEPLOY → DEPLOYMENT. Tras la preposición «before» hace falta sustantivo o gerundio.' },
    { n: 7, root: 'SCRUTINY', a: 'SCRUTINISE', alt: ['SCRUTINIZE'], p: '-ISE sobre sustantivo', tip: 'SCRUTINY → SCRUTINISE: la Y pasa a I. Tras «impossible to» va infinitivo.' },
    { n: 8, root: 'LIABLE', a: 'LIABILITY', p: '-ABLE → -ABILITY', tip: 'LIABLE → LIABILITY. -ABLE se transforma en -ABILITY, nunca *liableity.' }
  ]
},

{
  id: 'w12',
  title: 'Built to Be Replaced',
  focus: 'Sufijos de cualidad y compuestos técnicos',
  brief: 'OBSOLETE→OBSOLESCENCE · DISPOSE→DISPOSABILITY · REPAIR→IRREPARABLE · MANUFACTURE→MANUFACTURERS · SUSTAIN→SUSTAINABILITY · CONSUMER→CONSUMERISM · LEGISLATE→LEGISLATION · MODULE→MODULAR',
  text: `Planned {1} is usually described as a conspiracy and is better understood as an incentive structure. No engineer sets out to design a failure; the industry simply rewards a product that must be bought again.

The cult of {2} in consumer electronics took hold within about fifteen years. Devices that could once be opened with a screwdriver became sealed units, and a fault that would have cost eight pounds to fix in 1990 now makes the whole object {3}.

{4} defend the change on grounds of thinness, water resistance and safety, all of which are genuine. They are also, without exception, compatible with a repairable design if {5} is treated as a requirement rather than a slogan.

What has moved the argument is not consumer pressure — {6} is not going to reform itself — but {7}. Several European jurisdictions now require spare parts to be available for a decade. The first genuinely {8} phones, built so that the battery and screen come out in under a minute, appeared shortly afterwards.`,
  gaps: [
    { n: 1, root: 'OBSOLETE', a: 'OBSOLESCENCE', p: '-ESCENCE (irregular)', tip: 'OBSOLETE → OBSOLESCENCE, con -SC- en medio. PLANNED OBSOLESCENCE es colocación fija.' },
    { n: 2, root: 'DISPOSE', a: 'DISPOSABILITY', p: '-ABLE + -ITY', tip: 'DISPOSE → DISPOSABLE → DISPOSABILITY = el carácter de usar y tirar.' },
    { n: 3, root: 'REPAIR', a: 'IRREPARABLE', p: 'IR- + -ABLE', tip: 'REPAIR → REPARABLE (pierde la I) → IRREPARABLE. Esa pérdida es lo que se falla.' },
    { n: 4, root: 'MANUFACTURE', a: 'MANUFACTURERS', p: '-ER sobre verbo', tip: 'MANUFACTURE → MANUFACTURER. Se conserva la R de la raíz: -RER.' },
    { n: 5, root: 'SUSTAIN', a: 'SUSTAINABILITY', p: '-ABLE + -ITY', tip: 'SUSTAIN → SUSTAINABLE → SUSTAINABILITY. Sujeto de la pasiva «is treated».' },
    { n: 6, root: 'CONSUMER', a: 'CONSUMERISM', p: '-ISM sobre sustantivo', tip: 'CONSUMER → CONSUMERISM. -ISM nombra la práctica o la doctrina.' },
    { n: 7, root: 'LEGISLATE', a: 'LEGISLATION', p: '-ATE → -ATION', tip: 'LEGISLATE → LEGISLATION. Incontable: nunca *a legislation.' },
    { n: 8, root: 'MODULE', a: 'MODULAR', p: '-AR sobre sustantivo', tip: 'MODULE → MODULAR: la E final pasa a -AR. Adjetivo antepuesto a «phones».' }
  ]
},

{
  id: 'w13',
  title: 'The Cost of Latency',
  focus: 'Sufijos técnicos y adjetivos de escala',
  brief: 'LATENT→LATENCY · SCALE→SCALABILITY · ENCRYPT→ENCRYPTION · PROCESS→PROCESSORS · REDUNDANT→REDUNDANCY · CASCADE→CASCADING · VULNERABLE→VULNERABILITIES · SYSTEM→SYSTEMIC',
  text: `Distance is the one constraint that engineering cannot argue with. A signal crossing the Atlantic takes about sixty milliseconds, and no amount of investment will make it faster, which is why {1} rather than bandwidth now dictates where data centres are built.

The industry has spent two decades solving for {2} — for the ability to serve ten million users as easily as ten — and has been notably less rigorous about what happens when a component fails. {3} adds a few milliseconds; caching removes them; and both are usually configured by whoever is on duty.

Modern machines pack dozens of {4} onto a single die, and the resulting concentration is efficient and brittle in equal measure. {5} is expensive, so it is the first thing cut from a budget. When one region goes down, the {6} failures that follow are rarely predicted by anybody.

The {7} exposed by such an outage are almost never novel. They are {8}, and they are known about years in advance.`,
  gaps: [
    { n: 1, root: 'LATENT', a: 'LATENCY', p: '-ENT → -ENCY', tip: 'LATENT → LATENCY = retardo. Sujeto del verbo «dictates».' },
    { n: 2, root: 'SCALE', a: 'SCALABILITY', p: '-ABLE + -ITY', tip: 'SCALE → SCALABLE → SCALABILITY. La E de SCALE desaparece.' },
    { n: 3, root: 'ENCRYPT', a: 'ENCRYPTION', p: '-PT + -ION', tip: 'ENCRYPT → ENCRYPTION. La Y es la única vocal de la raíz.' },
    { n: 4, root: 'PROCESS', a: 'PROCESSORS', p: '-OR sobre verbo', tip: 'PROCESS → PROCESSOR. Plural tras «dozens of».' },
    { n: 5, root: 'REDUNDANT', a: 'REDUNDANCY', p: '-ANT → -ANCY', tip: 'REDUNDANT → REDUNDANCY. Con A, porque el adjetivo lleva -ANT. Aquí es «redundancia técnica», no despido.' },
    { n: 6, root: 'CASCADE', a: 'CASCADING', p: '-ING participial', tip: 'CASCADE → CASCADING = en cascada, encadenado. Cae la E.' },
    { n: 7, root: 'VULNERABLE', a: 'VULNERABILITIES', p: '-ABLE → -ABILITY', tip: 'VULNERABLE → VULNERABILITY → VULNERABILITIES. La Y pasa a IES.' },
    { n: 8, root: 'SYSTEM', a: 'SYSTEMIC', p: '-IC sobre sustantivo', tip: 'SYSTEMIC = del sistema entero. Distinto de SYSTEMATIC, que es «metódico».' }
  ]
},

{
  id: 'w14',
  title: 'Nobody Reads the Terms',
  focus: 'Sufijos legales y adjetivos de cantidad',
  brief: 'PRIVATE→PRIVACY · AGGREGATE→AGGREGATION · ANONYMOUS→ANONYMITY · PROFILE→PROFILING · PERMIT→PERMISSION · MEAN→MEANINGLESS · SURVEY→SURVEILLANCE · AWARE→UNAWARE',
  text: `The great {1} bargain of the last twenty years was never really struck, because one party to it did not read the contract and the other knew as much. Consent obtained by a scrolling box is consent in a narrow legal sense only.

What makes the arrangement unusual is that no single disclosure is damaging. Harm arises from {2}: a postcode is nothing, a postcode plus a birth date plus a job title is a name. Studies have repeatedly shown that {3} in a large data set is far more fragile than the people in it assume.

Behavioural {4} then closes the loop, and the {5} granted for one purpose is used for another. A consent framework built on a single tick becomes {6} the moment the data leaves the context it was gathered in.

Most users are not indifferent to {7}; they are simply {8} of how little separates an anonymous record from an identified one.`,
  gaps: [
    { n: 1, root: 'PRIVATE', a: 'PRIVACY', p: '-ATE → -ACY', tip: 'PRIVATE → PRIVACY. Los adjetivos en -ATE dan -ACY: la T se vuelve C.' },
    { n: 2, root: 'AGGREGATE', a: 'AGGREGATION', p: '-ATE → -ATION', tip: 'AGGREGATE → AGGREGATION = agregación, suma de partes.' },
    { n: 3, root: 'ANONYMOUS', a: 'ANONYMITY', p: '-OUS → -ITY', tip: 'ANONYMOUS → ANONYMITY. Se pierde el -OUS entero.' },
    { n: 4, root: 'PROFILE', a: 'PROFILING', p: '-ING sustantivado', tip: 'PROFILE → PROFILING. Cae la E. Sustantivo incontable.' },
    { n: 5, root: 'PERMIT', a: 'PERMISSION', p: '-MIT → -MISSION', tip: 'PERMIT → PERMISSION. La familia -MIT hace -MISSION: ADMIT, SUBMIT, TRANSMIT.' },
    { n: 6, root: 'MEAN', a: 'MEANINGLESS', p: '-ING + -LESS', tip: 'MEAN → MEANING → MEANINGLESS. El sufijo necesita el sustantivo, no el verbo.' },
    { n: 7, root: 'SURVEY', a: 'SURVEILLANCE', p: '-ANCE con cambio de raíz', tip: 'SURVEY y SURVEILLANCE comparten origen francés, pero la ortografía cambia: -VEIL-, no *-VEY-.' },
    { n: 8, root: 'AWARE', a: 'UNAWARE', p: 'UN- sobre adjetivo', tip: 'AWARE → UNAWARE. Rige OF, que aparece justo después.' }
  ]
},

{
  id: 'w15',
  title: 'The Machine That Writes',
  focus: 'Sufijos de proceso y adjetivos de juicio',
  brief: 'COMPUTE→COMPUTATIONAL · PLAUSIBLE→PLAUSIBILITY · DISTINGUISH→INDISTINGUISHABLE · CREDIT→DISCREDITED · VERIFY→VERIFICATION · PROLIFERATE→PROLIFERATION · REGULATE→UNREGULATED · CRITIC→CRITICALLY',
  text: `A language model does not know anything. It estimates, from a very large sample of prior text, which word tends to follow which, and the {1} achievement of the last decade is that this turns out to be enough to produce prose.

The difficulty is that fluency and accuracy are unrelated. A model optimised for {2} will produce a confident and entirely fictitious citation as readily as a real one, because in the training data the two are {3} in form.

Claims that the technology will replace expertise are easily {4}; claims that it changes nothing are equally weak. What it does change is the cost of {5}. When plausible text becomes free, the scarce resource is no longer writing but checking, and the {6} of unchecked material raises the price of every honest claim.

An {7} flood of confident prose does not make people better informed. It makes the ability to read {8} the only defence left.`,
  gaps: [
    { n: 1, root: 'COMPUTE', a: 'COMPUTATIONAL', p: '-ATION + -AL', tip: 'COMPUTE → COMPUTATION → COMPUTATIONAL. Dos sufijos apilados.' },
    { n: 2, root: 'PLAUSIBLE', a: 'PLAUSIBILITY', p: '-IBLE → -IBILITY', tip: 'PLAUSIBLE → PLAUSIBILITY = verosimilitud. Tras «optimised for» hace falta sustantivo.' },
    { n: 3, root: 'DISTINGUISH', a: 'INDISTINGUISHABLE', p: 'IN- + -ABLE', tip: 'DISTINGUISH → DISTINGUISHABLE → INDISTINGUISHABLE. Cinco sílabas y ninguna letra doble.' },
    { n: 4, root: 'CREDIT', a: 'DISCREDITED', p: 'DIS- + -ED', tip: 'CREDIT → DISCREDIT → DISCREDITED = desacreditado. La T no se dobla.' },
    { n: 5, root: 'VERIFY', a: 'VERIFICATION', p: '-FY → -FICATION', tip: 'VERIFY → VERIFICATION. Todos los verbos en -FY hacen -FICATION.' },
    { n: 6, root: 'PROLIFERATE', a: 'PROLIFERATION', p: '-ATE → -ATION', tip: 'PROLIFERATE → PROLIFERATION = proliferación.' },
    { n: 7, root: 'REGULATE', a: 'UNREGULATED', p: 'UN- + -ED', tip: 'REGULATE → REGULATED → UNREGULATED. Adjetivo antepuesto a «flood».' },
    { n: 8, root: 'CRITIC', a: 'CRITICALLY', p: '-IC → -ICALLY', tip: 'CRITIC → CRITICAL → CRITICALLY. Siempre -ICALLY, nunca *-icly.' }
  ]
}

]);
