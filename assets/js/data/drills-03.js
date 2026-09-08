/**
 * Drill bank 03 — DIS-, MIS-, NON-, MAL-, DE-, ANTI- and COUNTER-.
 *
 * These are the prefixes that carry a judgement. UN- and IN- merely negate;
 * MIS- says the thing was done badly, MAL- that it is defective, DIS- that it
 * was undone or reversed, NON- that it simply is not the case. Choosing between
 * them is a semantic decision, not a spelling one, and Part 3 tests exactly
 * that: MISUNDERSTOOD is not *UNUNDERSTOOD, and MALNUTRITION is not
 * *UNNUTRITION.
 */
WC2.content.registerDrills([

/* ---- DIS- : reversión, privación, lo contrario ---------------------------- */
{ id: 'd0103', root: 'SATISFY', a: 'DISSATISFACTION', p: 'DIS- + -ACTION', src: 'Prefijos de juicio', s: 'Growing {1} with the timetable led to a formal complaint.', tip: 'SATISFY → SATISFACTION → DISSATISFACTION. Doble S en la unión: DIS + SATIS-.' },
{ id: 'd0104', root: 'COURAGE', a: 'DISCOURAGED', p: 'DIS- + -ED', src: 'Prefijos de juicio', s: 'Applicants should not feel {1} by the length of the form.', tip: 'COURAGE → ENCOURAGE / DISCOURAGE. DISCOURAGED = desanimado.' },
{ id: 'd0105', root: 'PROVE', a: 'DISPROVED', p: 'DIS- + -ED', src: 'Prefijos de juicio', s: 'The hypothesis was comprehensively {1} within a decade.', tip: 'DISPROVE = refutar. No confundir con DISAPPROVE = desaprobar.' },
{ id: 'd0106', root: 'POSSESS', a: 'DISPOSSESSED', p: 'DIS- + -ED', src: 'Prefijos de juicio', s: 'Whole communities were {1} of land they had farmed for centuries.', tip: 'POSSESS → DISPOSSESS = desposeer. Doble S dos veces: POSSESS ya las trae.' },
{ id: 'd0107', root: 'INCENTIVE', a: 'DISINCENTIVES', p: 'DIS- sobre sustantivo', s: 'The tax structure creates powerful {1} to investment.', src: 'Prefijos de juicio', tip: 'INCENTIVE → DISINCENTIVE = desincentivo. El plural es regular.' },
{ id: 'd0108', root: 'PROPORTIONATE', a: 'DISPROPORTIONATELY', p: 'DIS- + -LY', src: 'Prefijos de juicio', s: 'The cuts fell {1} on the poorest boroughs.', tip: 'PROPORTIONATE → DISPROPORTIONATE → DISPROPORTIONATELY. Cinco sílabas y ni una letra de más.' },

/* ---- MIS- : hecho mal, no «no hecho» -------------------------------------- */
{ id: 'd0109', root: 'UNDERSTAND', a: 'MISUNDERSTOOD', p: 'MIS- + participio irregular', src: 'Prefijos de juicio', s: 'His silence was widely {1} as consent.', tip: 'UNDERSTAND → UNDERSTOOD → MISUNDERSTOOD. El participio es irregular y el prefijo no lo toca.' },
{ id: 'd0110', root: 'INTERPRET', a: 'MISINTERPRETED', p: 'MIS- + -ED', src: 'Prefijos de juicio', s: 'The data had been badly {1} by the original team.', tip: 'INTERPRET no dobla la T: MISINTERPRETED, con una sola T antes de -ED.' },
{ id: 'd0111', root: 'INTERPRET', a: 'MISINTERPRETATION', p: 'MIS- + -ATION', src: 'Prefijos de juicio', s: 'The whole dispute rests on a single {1} of the treaty.', tip: 'INTERPRET → INTERPRETATION → MISINTERPRETATION. La misma raíz da participio y sustantivo.' },
{ id: 'd0112', root: 'REPRESENT', a: 'MISREPRESENTED', p: 'MIS- + -ED', src: 'Prefijos de juicio', s: 'She complained that her position had been grossly {1} in the press.', tip: 'MISREPRESENT = tergiversar. Distinto de UNREPRESENTED = sin representación.' },

/* ---- NON-, MAL-, DE-, ANTI-, COUNTER- ------------------------------------- */
{ id: 'd0113', root: 'SENSE', a: 'NONSENSE', p: 'NON- sobre sustantivo', src: 'Prefijos de juicio', s: 'The suggestion that the tunnel could be dug in a year is plain {1}.', tip: 'NON- niega sin juzgar. NONSENSE se escribe junto y sin guion.' },
{ id: 'd0114', root: 'NUTRITION', a: 'MALNUTRITION', p: 'MAL- sobre sustantivo', src: 'Prefijos de juicio', s: 'Chronic {1} still affects a tenth of the region children.', tip: 'MAL- = defectuoso, mal. MALNUTRITION es desnutrición, no ausencia total de alimento.' },
{ id: 'd0115', root: 'CARBON', a: 'DECARBONISATION', alt: ['DECARBONIZATION'], p: 'DE- + -ISE + -ATION', src: 'Prefijos de juicio', s: 'The {1} of heavy industry remains the hardest part of the transition.', tip: 'CARBON → CARBONISE → DECARBONISE → DECARBONISATION. DE- quita, revierte.' },
{ id: 'd0116', root: 'FOREST', a: 'DEFORESTATION', p: 'DE- + -ATION', src: 'Ampliación C2', s: 'Satellite imagery has made {1} impossible to hide.', tip: 'DE- + FOREST + -ATION. El prefijo indica retirada: quitar el bosque.' },
{ id: 'd0117', root: 'VALUE', a: 'DEVALUED', p: 'DE- + -ED', src: 'Ampliación C2', s: 'Long service came to be quietly {1} within the organisation.', tip: 'DEVALUE = devaluar, restar valor. Compará con INVALUABLE, que es lo contrario de lo que parece.' },
{ id: 'd0118', root: 'SOCIAL', a: 'ANTISOCIAL', p: 'ANTI- sobre adjetivo', src: 'Ampliación C2', s: 'The council introduced new powers to deal with {1} behaviour.', tip: 'ANTI- = contra. Se escribe junto salvo ante mayúscula o vocal repetida.' },
{ id: 'd0119', root: 'PRODUCTIVE', a: 'COUNTERPRODUCTIVE', p: 'COUNTER- sobre adjetivo', src: 'Ampliación C2', s: 'Punishing late returns proved entirely {1}.', tip: 'COUNTERPRODUCTIVE = contraproducente. Produce el efecto contrario al buscado.' },
{ id: 'd0120', root: 'INTUITIVE', a: 'COUNTERINTUITIVE', p: 'COUNTER- sobre adjetivo', src: 'Ampliación C2', s: 'The finding is {1} but it has been replicated many times.', tip: 'COUNTERINTUITIVE = contrario a la intuición. Muy frecuente en textos científicos del CPE.' },

/* ---- Ampliación DIS- ------------------------------------------------------ */
{ id: 'd0121', root: 'ADVANTAGE', a: 'DISADVANTAGED', p: 'DIS- + -ED', src: 'Ampliación C2', s: 'The scheme targets children from {1} backgrounds.', tip: 'ADVANTAGE → DISADVANTAGE → DISADVANTAGED = desfavorecido.' },
{ id: 'd0122', root: 'REGARD', a: 'DISREGARD', p: 'DIS- sobre sustantivo o verbo', src: 'Ampliación C2', s: 'The report criticises a systematic {1} for basic procedure.', tip: 'DISREGARD FOR = desprecio hacia. Funciona como sustantivo y como verbo sin cambiar.' },
{ id: 'd0123', root: 'CREDIT', a: 'DISCREDITED', p: 'DIS- + -ED', src: 'Ampliación C2', s: 'The theory has been thoroughly {1} but refuses to die.', tip: 'DISCREDIT = desacreditar. DISCREDITED = desacreditado.' },
{ id: 'd0124', root: 'HONEST', a: 'DISHONESTY', p: 'DIS- + -Y', src: 'Ampliación C2', s: 'He was dismissed for {1} rather than incompetence.', tip: 'HONEST → HONESTY → DISHONESTY. El prefijo va delante del sustantivo ya formado.' },
{ id: 'd0125', root: 'ORIENT', a: 'DISORIENTATING', alt: ['DISORIENTING'], p: 'DIS- + -ATE + -ING', src: 'Ampliación C2', s: 'The effect of the mirrored walls is deliberately {1}.', tip: 'Ambas formas se aceptan en británico: DISORIENTATING y DISORIENTING.' },
{ id: 'd0126', root: 'CONNECT', a: 'DISCONNECT', p: 'DIS- sobre sustantivo', src: 'Ampliación C2', s: 'There is a growing {1} between policy and practice.', tip: 'Como sustantivo, a DISCONNECT BETWEEN = un desfase entre. Uso muy moderno y muy examinable.' },
{ id: 'd0127', root: 'ILLUSION', a: 'DISILLUSIONED', p: 'DIS- + -ED', src: 'Ampliación C2', s: 'Many early supporters became {1} within a year.', tip: 'ILLUSION → DISILLUSION → DISILLUSIONED = desencantado.' },
{ id: 'd0128', root: 'ORDER', a: 'DISORDERLY', p: 'DIS- + -LY adjetival', src: 'Ampliación C2', s: 'The files had been left in a {1} heap on the desk.', tip: 'Aquí -LY forma adjetivo: DISORDERLY = desordenado, no un adverbio.' },
{ id: 'd0129', root: 'CONTENT', a: 'DISCONTENT', p: 'DIS- sobre sustantivo', src: 'Ampliación C2', s: 'A winter of mounting {1} preceded the resignation.', tip: 'DISCONTENT = descontento. El adjetivo es DISCONTENTED.' },
{ id: 'd0130', root: 'APPEAR', a: 'DISAPPEARANCE', p: 'DIS- + -ANCE', src: 'Ampliación C2', s: 'The sudden {1} of the species from the estuary alarmed ecologists.', tip: 'APPEAR → DISAPPEAR → DISAPPEARANCE. Una S y dos P: DIS + APPEAR.' },

/* ---- Ampliación MIS- ------------------------------------------------------ */
{ id: 'd0131', root: 'LEAD', a: 'MISLEADING', p: 'MIS- + -ING', src: 'Ampliación C2', s: 'The chart is accurate but the headline above it is {1}.', tip: 'MISLEAD → MISLEADING = engañoso. Participio activo: describe lo que induce a error.' },
{ id: 'd0132', root: 'JUDGE', a: 'MISJUDGED', p: 'MIS- + -ED', src: 'Ampliación C2', s: 'The tone of the campaign was badly {1} from the outset.', tip: 'MISJUDGE = calcular mal, juzgar erróneamente.' },
{ id: 'd0133', root: 'CONCEPTION', a: 'MISCONCEPTIONS', p: 'MIS- sobre sustantivo', src: 'Ampliación C2', s: 'The exhibition sets out to correct a number of popular {1}.', tip: 'MISCONCEPTION = idea equivocada. Muy usual en plural.' },
{ id: 'd0134', root: 'MANAGE', a: 'MISMANAGEMENT', p: 'MIS- + -MENT', src: 'Ampliación C2', s: 'Years of financial {1} left the trust close to collapse.', tip: 'MANAGE → MANAGEMENT → MISMANAGEMENT = mala gestión.' },
{ id: 'd0135', root: 'PLACE', a: 'MISPLACED', p: 'MIS- + -ED', src: 'Ampliación C2', s: 'Her confidence in the contractor turned out to be sadly {1}.', tip: 'MISPLACED = mal depositado, fuera de lugar. Se usa mucho con confidence, loyalty, optimism.' },
{ id: 'd0136', root: 'USE', a: 'MISUSE', p: 'MIS- sobre sustantivo', src: 'Ampliación C2', s: 'The inquiry found repeated {1} of public funds.', tip: 'MISUSE = uso indebido. Como sustantivo la S suena /s/; como verbo, /z/.' },

/* ---- Ampliación NON- y MAL- ----------------------------------------------- */
{ id: 'd0137', root: 'EXIST', a: 'NONEXISTENT', alt: ['NON-EXISTENT'], p: 'NON- + -ENT', src: 'Ampliación C2', s: 'Public transport in the valley is effectively {1}.', tip: 'NONEXISTENT o NON-EXISTENT: ambas se aceptan. NON- niega de forma neutra.' },
{ id: 'd0138', root: 'COMMIT', a: 'NONCOMMITTAL', alt: ['NON-COMMITTAL'], p: 'NON- + -AL', src: 'Ampliación C2', s: 'The minister gave a studiously {1} answer.', tip: 'NONCOMMITTAL = evasivo, que no se compromete. Doble T por la regla de acento en COMMIT.' },
{ id: 'd0139', root: 'FUNCTION', a: 'MALFUNCTION', p: 'MAL- sobre sustantivo', src: 'Ampliación C2', s: 'A software {1} grounded the entire fleet for two days.', tip: 'MALFUNCTION = fallo, avería. Sustantivo y verbo con la misma forma.' },
{ id: 'd0140', root: 'PRACTICE', a: 'MALPRACTICE', p: 'MAL- sobre sustantivo', src: 'Ampliación C2', s: 'Two consultants were struck off for professional {1}.', tip: 'MALPRACTICE = negligencia profesional. Incontable: nunca *a malpractice.' },
{ id: 'd0141', root: 'ADJUST', a: 'MALADJUSTED', p: 'MAL- + -ED', src: 'Ampliación C2', s: 'The report avoids the label {1} in favour of plainer language.', tip: 'MALADJUSTED = inadaptado. MAL- indica que el ajuste salió mal, no que falte.' },

/* ---- Contraste deliberado entre prefijos ---------------------------------- */
{ id: 'd0142', root: 'INFORM', a: 'MISINFORMED', p: 'MIS- + -ED', src: 'Contraste de prefijos', s: 'The public was not merely uninformed but actively {1}.', tip: 'UNINFORMED = sin información; MISINFORMED = con información falsa. La frase contrapone las dos.' },
{ id: 'd0143', root: 'TRUST', a: 'DISTRUST', p: 'DIS- sobre sustantivo', src: 'Contraste de prefijos', s: 'A deep {1} of official statistics runs through the whole essay.', tip: 'DISTRUST = desconfianza activa; MISTRUST es casi sinónimo pero más vago.' },
{ id: 'd0144', root: 'LOYAL', a: 'DISLOYALTY', p: 'DIS- + -TY', src: 'Ampliación C2', s: 'Questioning the strategy was treated as {1}.', tip: 'LOYAL → LOYALTY → DISLOYALTY. El sufijo entra antes que el prefijo.' },
{ id: 'd0145', root: 'ENGAGE', a: 'DISENGAGEMENT', p: 'DIS- + -MENT', src: 'Ampliación C2', s: 'Voter {1} has deepened with every election.', tip: 'ENGAGE → ENGAGEMENT → DISENGAGEMENT = desvinculación, desconexión.' },
{ id: 'd0146', root: 'COURAGE', a: 'DISCOURAGING', p: 'DIS- + -ING', src: 'Contraste de prefijos', s: 'The early results were, frankly, rather {1}.', tip: 'DISCOURAGING (lo que desanima) frente a DISCOURAGED (quien está desanimado): activo contra pasivo.' },
{ id: 'd0147', root: 'PROPORTIONATE', a: 'DISPROPORTIONATE', p: 'DIS- sobre adjetivo', src: 'Contraste de prefijos', s: 'The penalty seemed wholly {1} to the offence.', tip: 'DISPROPORTIONATE TO = desproporcionado respecto a. La forma adverbial es DISPROPORTIONATELY.' }

]);
