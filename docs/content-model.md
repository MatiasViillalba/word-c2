# Modelo de contenido

## Dos formatos

### Texto de examen (`passage`)

Réplica de la Part 3: prosa continua de nivel C2 con ocho huecos, cada uno con
su palabra raíz.

```js
{
  id: 'w01',
  title: 'The Case Against Certainty',
  focus: 'Prefijos negativos y sustantivos de cualidad',
  brief: 'CERTAIN→UNCERTAIN · CONCLUDE→INCONCLUSIVE · …',   // uno por hueco, en orden
  text: `…a great one is merely {1} in a more interesting way…`,
  gaps: [
    {
      n: 1,
      root: 'CERTAIN',            // la palabra que da el examen
      a: 'UNCERTAIN',             // la respuesta, siempre en mayúsculas
      alt: [],                    // alternativas aceptadas (-ISE/-IZE, etc.)
      af: 'un-',                  // opcional: fuerza el análisis morfológico
      p: 'UN- sobre adjetivo',    // etiqueta del patrón
      tip: 'CERTAIN → UNCERTAIN. El adjetivo tras «is» describe el resultado…'
    }
  ]
}
```

Los párrafos se separan con una línea en blanco dentro del literal de plantilla.
El primero recibe capitular azul automáticamente.

### Ejercicio rápido (`drill`)

Una frase, una raíz, un hueco `{1}`.

```js
{
  id: 'd0001', root: 'AVOID', a: 'UNAVOIDABLE',
  p: 'UN- + -ABLE', src: 'Prefijos negativos',
  s: 'Given the state of the roads, some delay was entirely {1}.',
  tip: 'AVOID → AVOIDABLE (evitable) → UNAVOIDABLE (inevitable)…'
}
```

## Reglas

Las verifica `tests/content-integrity.test.mjs` y son de cumplimiento
obligatorio:

1. Ocho huecos por texto, ni más ni menos.
2. Los marcadores `{n}` de la prosa coinciden en número y orden con `gaps[]`.
3. Los identificadores son únicos en todo el banco.
4. **Ningún texto pide la misma derivación dos veces.** El examen real da ocho
   raíces distintas; repetir una permitiría copiar la segunda respuesta de la
   primera.
5. Toda respuesta es **una sola palabra**.
6. Respuesta y raíz van en mayúsculas.
7. **La respuesta nunca es idéntica a la raíz.** Si lo fuera, no habría
   ejercicio. La única excepción legítima es una respuesta que sólo flexiona la
   raíz (el plural del sustantivo dado), y esa se declara `af: 'inflection'`.
8. Todo hueco declara `root`, `p` y un `tip` de más de 20 caracteres.
9. Ninguna alternativa repite la respuesta canónica.
10. La respuesta canónica siempre se acepta, en minúsculas y con espacios
    sobrantes.
11. Ninguna derivación queda registrada sin ejercicios que la practiquen.
12. **El `brief` de cada texto coincide exactamente con sus huecos**, en orden.
    Es lo que se ve en la biblioteca antes de abrir el texto, así que uno
    desactualizado describe mal el ejercicio.

Además, `tests/coverage.test.mjs` exige que las 598 derivaciones de
`docs/word-list.md` estén cubiertas y que toda respuesta tenga al menos una
frase donde practicarse.

## Cómo se corrige una respuesta

`WC2.util.norm()` normaliza antes de comparar: recorta, pasa a minúsculas,
descompone tildes, unifica apóstrofos tipográficos (`’` → `'`) y descarta
puntuación. Los guiones **sobreviven**, porque unas cuantas respuestas de C2 los
llevan de verdad (WELL-BEING, SELF-EVIDENT) y el corrector tiene que poder
distinguirlas de la grafía sin guion.

`alt` existe para los casos en que el examen acepta más de una forma:
`-ISE` / `-IZE` en todo el paradigma, `JUDGEMENT` / `JUDGMENT`,
`SCEPTICISM` / `SKEPTICISM`. No se usa para tolerar errores.

## Cobertura actual

| Archivo | Contenido |
|---|---|
| `passages-01…03` | Prefijos negativos, naturaleza, tecnología |
| `passages-04…06` | Medios, salud, ciudad y patrimonio |
| `passages-07…09` | Lengua, artes, economía y trabajo |
| `passages-10…13` | Historia, mente, física, sociedad y ética |
| `drills-01…05` | El sistema de prefijos completo |
| `drills-06…12` | Sufijos nominales y de persona |
| `drills-13…17` | Sufijos adjetivales |
| `drills-18…20` | Participios, adverbios, verbos y compuestos |

## Añadir material

1. Escribí el texto o la frase en el archivo correspondiente de
   `assets/js/data/`.
2. Reutilizá una raíz existente si la derivación ya está en el banco: así el
   programador acumula evidencia en vez de dispersarla.
3. Si el analizador morfológico se equivocaría (un compuesto, un IN- locativo,
   un adjetivo en -ANT), declaralo con `af`.
4. Si creás un archivo nuevo, agregalo a `index.html` **y** a la lista `ASSETS`
   de `sw.js`. `npm run lint:syntax` falla si te olvidás del segundo, porque un
   archivo servido pero no cacheado funciona online y desaparece en modo avión.
5. `npm test`.
