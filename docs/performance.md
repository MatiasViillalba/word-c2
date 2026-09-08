# Rendimiento

## Presupuesto

| Parte | Tamaño | Nota |
|---|---|---|
| HTML | ~7 KB | El shell, con los 53 `<script>` |
| CSS (5 archivos) | ~42 KB | Sin minificar, con comentarios |
| Núcleo JS (7 archivos) | ~52 KB | Incluye el catálogo de afijos |
| Interfaz (11 archivos) | ~62 KB | Una pantalla por archivo |
| Contenido (33 archivos) | ~640 KB | 65 textos + 991 ejercicios |
| Iconos (4 PNG) | ~50 KB | Opacos, tamaños exactos |
| **Total precacheado** | **~855 KB** | Una sola vez, en la instalación |

Tres cuartas partes del peso son contenido, no código, y eso es exactamente lo
que se quiere: es lo único que el alumno usa de verdad.

## Por qué no hay minificación

No hay paso de build, así que el archivo que se sirve es el que se lee. A 855 KB
sobre una conexión móvil normal la descarga inicial ronda los tres segundos, y
sólo ocurre una vez. Minificar ahorraría quizá un 30% de ese único evento a
cambio de una cadena de herramientas, un source map y una clase entera de fallos
que ahora no existe.

Si algún día el banco se duplica, la respuesta correcta no es minificar sino
cargar los archivos de contenido bajo demanda. Eso sí costaría el modo avión, y
por eso no se ha hecho.

## Estrategia de caché

Cache-first, sin revalidación. El banco es estático y está versionado con el
build, así que no hay nada que comprobar en tiempo de ejecución y ninguna razón
para tocar la red una vez que la app está en la pantalla de inicio.

`sw.js` añade cada recurso **individualmente** con su propio `catch`. Un
`cache.addAll()` es atómico: un solo 404 aborta el precaché entero y produce esa
PWA que «a veces» funciona sin conexión. Aquí, si un archivo falla, el resto
queda cacheado igual.

`npm run lint:syntax` verifica además que todo archivo servido esté en la lista
`ASSETS`. Un archivo de datos nuevo que se olvide de añadir ahí funcionaría en
el navegador y desaparecería en modo avión, que es el peor fallo posible para
esta app.

## Coste de arranque

Con todo en caché, desde tocar el ícono hasta ver la pantalla de inicio:

1. El navegador lee 53 archivos del caché (sin red).
2. Los 33 archivos de datos se ejecutan y registran su contenido. Ese registro
   incluye **un análisis morfológico por derivación**, que se hace una sola vez
   al arrancar y no vuelve a calcularse.
3. `boot()` carga `localStorage`, aplica la escala de texto y pinta Inicio.

El paso 2 es el más caro y es lineal: 1.175 análisis, cada uno un puñado de
comparaciones de cadena. En un iPhone 15 no es medible; en un teléfono de gama
baja de 2018 son unas decenas de milisegundos.

## Decisiones que cuestan y valen la pena

- **`backdrop-filter` en las barras.** Caro en compositing, pero es lo que hace
  que la app parezca nativa. Sólo hay dos elementos que lo usan.
- **Manchas de fondo desenfocadas.** Se animan únicamente con `transform`, así
  que viven en la GPU y no tocan el hilo principal. Desaparecen bajo
  `prefers-reduced-motion`.
- **Redibujado completo de pantalla.** No hay diffing: cada visita reconstruye
  el árbol. El más pesado es un texto de examen, unos 70 nodos. Un framework
  ahorraría eso y costaría 40 KB y un paso de build.

## Lo que no se mide

No hay analítica de ningún tipo. La app no hace una sola petición de red después
de instalarse, y eso es una característica, no una omisión.
