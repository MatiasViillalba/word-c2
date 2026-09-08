# Accesibilidad

## Contraste

Medido sobre el fondo real de cada componente, no sobre negro puro.

| Combinación | Ratio | AA |
|---|---|---|
| `--fg` `#F2F5FA` sobre `--ink-800` `#0C111C` | 16.9 : 1 | ✅ |
| `--fg-soft` `#C3CCDC` sobre prosa de examen | 11.2 : 1 | ✅ |
| `--fg-dim` `#8794AA` sobre tarjeta | 5.6 : 1 | ✅ |
| `--azure-200` `#AFCFFF` sobre tarjeta (chip de raíz) | 9.4 : 1 | ✅ |
| `--good` `#2FD39C` sobre `--good-soft` | 6.1 : 1 | ✅ |
| `--bad` `#FF5470` sobre `--bad-soft` | 5.0 : 1 | ✅ |
| Blanco sobre `--azure-grad` (botón primario) | 4.9 : 1 | ✅ |
| `--fg-mute` `#5D697E` sobre tarjeta | 3.1 : 1 | ⚠️ sólo texto secundario |

`--fg-mute` se usa exclusivamente para metadatos que se repiten en otro sitio
(el contador «3/8», la etiqueta de origen). Nunca lleva información única.

## El color nunca informa solo

Regla dura en toda la app:

- Un hueco correcto es verde **y** conserva su respuesta en el input.
- Un hueco fallado es rojo **y** se sacude **y** muestra la respuesta correcta
  en una etiqueta aparte.
- Los botones de veredicto llevan texto («Aprendido», «Aún no») además del
  color, y `aria-pressed` además del texto.
- El medidor de progreso del ejercicio usa color, pero el número «3/8» está
  siempre al lado.

## Tamaños táctiles

- Botones principales: 52 px de alto.
- Botones pequeños y chips: 40 px y 34 px, siempre con relleno lateral.
- Botones de tamaño de texto: 42 × 42 px.
- Pestañas: 62 px de alto, un quinto del ancho cada una.

Nada interactivo baja de 34 px, y lo que está por debajo de 44 px tiene
separación suficiente para no tocarse por error.

## Teclado y lectores de pantalla

- Cada input de hueco declara `aria-label` con su número **y su raíz**: «Hueco
  3, a partir de ACCESS». Es la única forma de que un lector de pantalla dé el
  enunciado completo, porque el chip de raíz es visual.
- El chip de raíz lleva `aria-hidden="true"` para no leerse dos veces.
- Enter salta al hueco siguiente y hace blur en el último.
- En el ejercicio rápido, Enter corrige; el foco pasa entonces al botón, así que
  un segundo Enter avanza.
- La hoja inferior declara `role="dialog"` y `aria-modal`.
- Las toasts viven en un contenedor con `aria-live="polite"`.

## Movimiento reducido

Bajo `prefers-reduced-motion: reduce`, todas las duraciones se ponen a `0.001ms`
y las manchas del fondo dejan de animarse por completo. La app sigue siendo
plenamente usable: ninguna transición transmite información.

## Escala de lectura

Los dos botones «A» de Ajustes mueven un paso (6%) por toque entre 78% y 150%,
con muestra en vivo. Afecta a la prosa de examen, a los ejercicios, a las
explicaciones y a los chips de raíz. La interfaz mantiene su tamaño a propósito,
para que la navegación no se desarme al agrandar el texto.

## Pendiente

- El heatmap de doce semanas no tiene equivalente textual; su información sí
  está en las fichas de racha.
- Los gráficos de barras por familia se leen bien, pero un lector de pantalla
  recibe sólo las cifras, no la comparación visual.
- No hay recorrido de foco explícito entre pantallas: al cambiar de pantalla el
  foco vuelve al principio del documento.
