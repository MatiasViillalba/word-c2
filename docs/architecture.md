# Arquitectura

## Principio

La app tiene que abrirse desde el ícono de la pantalla de inicio, en modo avión,
en menos de un segundo. Todo lo demás se subordina a eso.

No hay framework, ni bundler, ni paso de build. Los archivos que escribís son
exactamente los que ejecuta el teléfono. Eso elimina una clase entera de
problemas (versiones de dependencias, source maps, hidratación) a cambio de
disciplina en el código.

## Capas

```
index.html          Shell: topbar, 10 pantallas vacías, tab bar, sheet
  ├─ assets/css/    5 hojas en cascada: tokens → base → components → screens → animations
  ├─ assets/js/
  │   ├─ version.js       Identidad de build (namespace del caché del SW)
  │   ├─ core/util.js     Hyperscript el(), normalización de respuestas, PRNG, fechas
  │   ├─ core/sync-config.js  URL y clave pública del proyecto de Supabase
  │   ├─ core/store.js    Estado persistente en localStorage + racha
  │   ├─ core/sync.js     Fusión y viaje bajar → fusionar → subir (ver docs/sync.md)
  │   ├─ core/srs.js      Cajas de Leitner, vencimientos, bandas Cambridge
  │   ├─ core/words.js    Cuaderno de errores por palabra
  │   ├─ core/affixes.js  Catálogo de afijos y analizador morfológico
  │   ├─ core/content.js  Registro, índice por derivación y por afijo, selección
  │   ├─ data/*.js        33 archivos de contenido que se auto-registran
  │   ├─ ui/*.js          Una pantalla por archivo, sin estado compartido
  │   └─ app.js           Router, sesiones y arranque
  └─ sw.js            Precaché completo, cache-first
```

Cada archivo es un IIFE que recibe `window.WC2` y le cuelga su parte. El orden
de los `<script>` en `index.html` es la única dependencia: núcleo, datos,
pantallas, router.

## Flujo de arranque

1. `version.js` crea el namespace `WC2`.
2. El núcleo registra `util`, `sync-config`, `store`, `sync`, `srs`, `words`,
   `affixes` y `content`.
3. Los 33 archivos de datos llaman a `WC2.content.registerPassages` /
   `registerDrills`. Cada ítem se normaliza (raíz y respuesta en mayúsculas), se
   le calcula su clave de derivación y se analiza morfológicamente **una sola
   vez**, en el momento del registro. Ese análisis construye dos índices: por
   derivación y por afijo.
4. Las pantallas se registran en `WC2.ui`.
5. `app.js` corre `boot()`: carga el estado, inyecta el degradado del anillo,
   aplica el tamaño de texto, cablea la navegación, va a Inicio y registra el
   service worker.

## La pieza que no tiene Cloze C2: `core/affixes.js`

Un ejercicio de open cloze pide una palabra. Uno de word formation pide una
**transformación**, y las transformaciones forman un sistema cerrado: unos
setenta afijos sobre un conjunto abierto de raíces.

`affixes.js` codifica ese sistema. Contiene el catálogo (qué hace cada prefijo y
sufijo, qué clase de palabra produce, con qué ejemplos) y un analizador que lee
un par RAÍZ → RESPUESTA hacia atrás para averiguar qué afijos lo construyeron.

El analizador es una heurística y se le permite serlo: cualquier ítem puede
declarar `af: 'un-'` y ganarle. Eso es lo que mantiene honestos los compuestos
(PLAY → PLAYWRIGHT) y las raíces engañosas (SIGHT → INSIGHTS, donde el IN- es
locativo y no negativo).

Todo lo de aguas abajo depende de él: la pantalla de Puntos débiles agrupa los
fallos por familia de afijos en vez de por palabra, el explorador de afijos
convierte el catálogo en un temario con cobertura en vivo, y la corrección del
examen siempre puede nombrar la derivación que acaba de evaluar.

## Enrutado

`WC2.app.go(name, params)` desactiva todas las pantallas, activa
`#screen-<name>` y llama a `WC2.ui[name].render(host, params)`. Cada pantalla
redibuja desde cero: no hay diffing ni estado retenido entre visitas, lo cual es
viable porque el árbol más pesado (un texto de examen) son unos 70 nodos.

Las pantallas de examen declaran `immersive: true`, lo que oculta la tab bar
mediante `data-immersive` en `#app`.

## Por qué scripts clásicos y no módulos ES

Los módulos exigen resolución por red o por sistema de archivos con CORS. Bajo
`file://` fallan, y bajo un service worker añaden peticiones que hay que cachear
individualmente. Un script clásico ya está en el caché o no está.

## Estado

Todo vive en un único registro de `localStorage` (`wc2.wordform.state.v1`), con
escrituras agrupadas cada 220 ms porque la pantalla de examen corrige ocho
huecos de golpe. Si el navegador prohíbe el almacenamiento (modo privado), el
estado cae a memoria y la pantalla de Ajustes lo advierte en vez de fallar en
silencio.
