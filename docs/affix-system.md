# El sistema de afijos

## La idea

El vocabulario del inglés es abierto: siempre hay una palabra más. Su
**morfología** no lo es. El Part 3 del Proficiency se resuelve con unos setenta
afijos, y quien domina esos setenta puede derivar una palabra que no vio nunca.

Por eso la app no está organizada por palabras sino por familias, y por eso el
`core/affixes.js` es el archivo central del proyecto.

## Las ocho familias

El catálogo completo se agrupa en ocho familias, que son las que un alumno vive
como habilidades separadas:

| Familia | Qué contiene | Por qué es una familia |
|---|---|---|
| Prefijos negativos | UN-, IN-, IM-, IL-, IR-, DIS-, NON-, MIS-, MAL- | Elegir entre ellos es una decisión de origen y de registro, no de ortografía |
| Prefijos de grado y relación | OVER-, UNDER-, RE-, PRE-, INTER-, OUT-, CO-, SUB-… | No niegan nada; quien sólo conoce prefijos negativos los lee mal todos |
| Verbos derivados | -ISE, -IFY, -EN, -ATE | Los únicos sufijos que crean verbos |
| Personas y agentes | -ER, -OR, -IST, -ANT, -EE, -IAN | -ER es germánico y libre; -OR es latino y de lista cerrada |
| Sustantivos abstractos | -TION, -MENT, -NESS, -ITY, -ANCE/-ENCE, -SHIP… | El grupo más numeroso y el que decide más marcas |
| Adjetivos | -ABLE, -FUL, -LESS, -OUS, -IVE, -AL, -IC, -ARY… | -ABLE contra -IBLE es memoria pura; el resto tiene reglas |
| Adverbios | -LY, -ICALLY, -WARDS, -WISE | Casi siempre exigen construir un adjetivo primero |
| Compuestos y raíces irregulares | PLAYWRIGHT, DEPTH, RATIONALE | No se derivan: se saben |

El orden importa. Cuando una derivación lleva prefijo **y** sufijo, la familia
que la clasifica es la del prefijo, porque en UNAVOIDABLE lo que se falla es el
`un-`, no el `-able`.

## El analizador

`WC2.affixes.analyse(root, answer, declared)` lee un par hacia atrás:

1. Si el ítem declara un afijo (`af`), ese gana y no se busca nada más.
2. Se prueba el principio de la respuesta contra los prefijos, del más largo al
   más corto. Un prefijo sólo cuenta si la **raíz no lo trae ya**: INHABIT →
   INHABITABLE no añade IN-, porque INHABIT ya empieza así.
3. Se prueba el final contra los sufijos, del más largo al más corto, primero
   sobre la palabra tal cual y después sobre su forma sin flexión. Ese segundo
   intento es el que hace visible el `-MENT` debajo de ADJUSTMENT**S** y el
   `-ABILITY` debajo de VULNERABILIT**IES**.
4. Si no aparece ningún afijo, se decide entre **compuesto** (la raíz entera
   sobrevive dentro de la respuesta: PLAY dentro de PLAYWRIGHT) y **raíz
   irregular** (no sobrevive: DEEP no está dentro de DEPTH).

### Por qué el orden de la flexión es crítico

La reducción de plurales prueba `-IES` **antes** que la `-S` genérica. Al revés,
VULNERABILITIES se reduce a `vulnerabilitie` y el `-ABILITY` que hay debajo no
se ve nunca. Es un bug real que se cometió y que `tests/affixes.test.mjs` ahora
impide que vuelva.

### Las excepciones declaradas

Tres casos obligan a que el dato pueda ganarle a la heurística:

- **IN- locativo.** SIGHT → INSIGHTS, TAKE → INTAKE, DOOR → INDOORS. El
  detector los leería como negativos. Se declaran `af: 'compound'`.
- **-ANT y -ENT.** APPLICANT (agente) y ABUNDANT (adjetivo) comparten sufijo y
  forma. El detector asume agente; los adjetivos declaran `-ant/adj`.
- **A- suelto.** Un prefijo de una sola letra se tragaría medio banco, así que
  está marcado `manual: true`: existe en el catálogo, pero sólo se aplica cuando
  un ítem lo pide (PACE → APACE).

## Qué se construye encima

- **Puntos débiles** agrupa los fallos por familia. Ver once fallos caer todos
  en «-ANCE contra -ENCE» es un diagnóstico; ver once palabras sueltas no lo es.
- **Progreso** muestra una barra por familia, ordenadas de peor a mejor. Un
  hueco entero en una familia es una laguna de sistema, y se arregla con una
  sesión de esa familia.
- **Mapa de afijos** lista las familias con su cobertura en vivo y convierte
  cada una en una sesión de un toque.
- La **corrección** de cada hueco imprime `RAÍZ → RESPUESTA` con el nombre del
  afijo, para que lo que quede grabado sea la transformación y no la palabra.

## Añadir un afijo

1. Agregá la entrada a `PREFIXES` o `SUFFIXES` en `assets/js/core/affixes.js`,
   con `id`, `tag`, `m` (lo que se compara), `g` (familia), `label` y `note`.
2. Si es corto y podría dar falsos positivos, marcalo `manual: true`.
3. `npm test`. La suite verifica que cada entrada esté completa, que el `id` sea
   único, que la familia exista y que todo afijo referenciado por el contenido
   resuelva contra el catálogo.
