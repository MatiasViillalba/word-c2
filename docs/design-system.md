# Sistema de diseño — «Cobalt»

## Punto de partida

Lienzo casi negro con un fondo azulado, y un cobalto eléctrico como único
acento. Todo lo demás —superficies, radios, curvas de aceleración, familias
tipográficas— deriva de las custom properties de `assets/css/tokens.css`, y
ningún componente inventa un valor propio.

| Rol | Token | Valor |
|---|---|---|
| Fondo | `--ink-1000` | `#04060B` |
| Superficie de tarjeta | `--ink-800` | `#0C111C` |
| Acento | `--azure-500` | `#2172F0` |
| Degradado de marca | `--azure-grad` | `#62A6FF → #2172F0 → #0B4FD0` |
| Acierto | `--good` | `#2FD39C` |
| Fallo | `--bad` | `#FF5470` |

El verde y el rojo se eligieron contra el azul, no contra el naranja: un verde
más frío y un rosa más saturado se separan mejor del acento y entre sí.

## Las dos tipografías

- **Interfaz**: la pila del sistema (`-apple-system`, `SF Pro`, `Segoe UI`). En
  un iPhone eso significa San Francisco, que es lo que el usuario ya lee todo el
  día.
- **Prosa de examen y ejercicios**: una serif (`New York`, `Iowan Old Style`,
  Georgia). Un texto de Part 3 es un texto impreso; leerlo en la misma fuente
  que los botones lo convierte en interfaz.

## El par hueco + raíz

Es el componente que define la app y no existe en un entrenador de open cloze.

El examen impreso pone la raíz en el margen derecho, alineada con su línea. Un
teléfono no tiene margen, así que la raíz viaja en un chip con borde punteado
inmediatamente después de su hueco: el ojo lee `______ (AVOID)` como una unidad.

Tres decisiones deliberadas:

- **Borde punteado, no sólido.** Marca el chip como material dado, no como algo
  que se pueda escribir.
- **Se enciende al enfocar.** El selector hermano adyacente (`.gap__input:focus
  + .gap__root`) pasa el borde a sólido y dispara un pulso. Con ocho huecos en
  pantalla, no queda duda de qué raíz corresponde al cursor.
- **Input de 156 px.** Las respuestas de word formation son largas
  (UNPRECEDENTED, OVERSIMPLIFICATION), bastante más que las de open cloze.

En la tarjeta de ejercicio rápido la raíz cambia de forma: allí es el enunciado
entero, así que ocupa un banner sobre la frase en vez de un chip.

## Interlineado

La prosa del examen usa `--read-lh` **más 0.22**. Los chips inline son más altos
que el texto que los rodea y, con el interlineado normal, las líneas se tocan.

## Escala de lectura

Una sola custom property, `--read-scale`, escrita sobre `<html>` por la pantalla
de Ajustes. De ella derivan el tamaño del texto de examen, el del ejercicio, el
de las explicaciones y el de los chips de raíz. Los dos botones «A» la mueven un
paso por toque entre 78% y 150%, con muestra en vivo debajo.

La interfaz **no** escala: los botones y las etiquetas mantienen su tamaño para
que la navegación no se rompa.

## Movimiento

- Entrada de pantalla: 10 px hacia arriba, 260 ms, `cubic-bezier(.22,1,.36,1)`.
- Escalonado de tarjetas mediante `--i` en el estilo inline.
- Sacudida de 420 ms en un hueco fallado.
- Halo de dos pulsos en un resultado de banda A.
- Pulso del chip de raíz al enfocar su hueco.
- Tres manchas desenfocadas que derivan lentamente en el fondo, animadas sólo
  con `transform` para que no toquen el hilo principal.

Todo colapsa a cero bajo `prefers-reduced-motion`, incluidas las manchas.

## Detalles de iOS

- Los inputs se fijan en 16 px: por debajo de eso, Safari hace zoom al enfocar y
  ya no vuelve.
- `autocapitalize="characters"`, `autocorrect="off"`, `spellcheck="false"`. El
  autocorrector convierte UNPRECEDENTED en cualquier cosa.
- `enterkeyhint="next"` en el examen y `"done"` en el ejercicio; Enter salta al
  hueco siguiente.
- `viewport-fit=cover` más `env(safe-area-inset-*)` en la barra superior y en la
  tab bar.
- `-webkit-user-select: none` en todo salvo inputs y prosa de examen, para que
  un toque mantenido no seleccione la interfaz.
