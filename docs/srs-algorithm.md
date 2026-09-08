# El programador de repaso

## Qué se programa

No palabras: **derivaciones**. La unidad es una raíz transformada de una manera
concreta.

```js
{ root: 'ACCESS', a: 'ACCESSIBLE',   k: 'access-accessible' }
{ root: 'ACCESS', a: 'INACCESSIBLE', k: 'access-inaccessible' }
```

Misma raíz, dos habilidades distintas, programadas por separado. Se puede tener
automatizado `ACCESSIBLE` y seguir fallando `INACCESSIBLE`, igual que se puede
tener `PRODUCTION` y fallar `PRODUCTIVITY`.

El banco actual tiene 1.175 derivaciones sobre 862 raíces.

## Cajas de Leitner

| Caja | Intervalo | Significado |
|---|---|---|
| 0 | mismo día | Sin ver, o recién fallada |
| 1 | 1 día | Reconocida con esfuerzo |
| 2 | 2 días | Empieza a asentarse |
| 3 | 4 días | Fiable en contexto conocido |
| 4 | 9 días | **Dominada** |
| 5 | 21 días | Automática |

```js
if (correct) box = Math.min(5, box + 1);
else         box = Math.max(0, box - 2);
due = Date.now() + INTERVALS[box] * DAY;
```

La asimetría es deliberada: subir cuesta un acierto, bajar cuesta dos cajas. Una
derivación que parecía asentada y se cae vuelve al circuito corto de inmediato.

## La cola de lapsus

Los intervalos por día no alcanzan: un fallo a las nueve de la noche que
reaparece «mañana» se olvida antes. Por eso, dentro de una sesión de ejercicios
rápidos, un fallo se reinserta **tres tarjetas más adelante**, una sola vez
(`assets/js/ui/drill.js`). El error se corrige mientras todavía está fresco, y
además queda reprogramado a días vista.

## Urgencia y selección

`WC2.srs.urgency(key)` puntúa cada derivación; cuanto más bajo, más urgente:

```
urgency = box − min(4, díasDeRetraso) × 0.6 + precisión × 1.2
```

Las derivaciones nunca vistas reciben 1.5: justo detrás de los fallos vencidos y
por delante de lo que ya funciona.

- **Ejercicios rápidos** — se ordenan las claves por urgencia y se toma una
  frase al azar de cada una, como máximo una por derivación para que la sesión
  no se atasque.
- **Textos de examen** — se puntúa cada texto por la urgencia acumulada de sus
  ocho derivaciones, con penalización por intentos previos, bonificación por
  días de descanso y una pizca de azar para que dos sesiones seguidas no se
  sientan mecánicas.
- **Por afijo** — el mapa de afijos filtra la cola a una sola familia, que es la
  única forma de arreglar una laguna de sistema en vez de una de vocabulario.

## Preparación e indicador de Grade A

Un `dominadas / total` puro no sirve: el banco tiene más de mil derivaciones y
llegar a la caja 4 lleva una semana de aciertos, así que el anillo se quedaría
en 0% durante quince días, que es exactamente cuando hace falta que se mueva.

El número del anillo es por tanto un compuesto de las tres cosas que un Grade A
necesita de verdad:

```
readiness = 0.45 × cobertura + 0.40 × solidez + 0.15 × precisión
```

- **Cobertura** — qué parte del banco intentaste alguna vez.
- **Solidez** — cuán alto están, en las cajas, las que ya viste.
- **Precisión** — tu tasa de acierto sobre todo lo respondido.

Las tres tienen que estar cerca del techo para llegar a 90, que es donde empieza
la banda A. Pero la aguja se mueve desde la primera sesión: hay un test que lo
verifica (`readiness moves on the very first correct answer`).

## Bandas

Se reportan bandas Cambridge en vez de porcentajes crudos, porque un 6/8 y un
7/8 significan cosas distintas en la práctica:

| Puntaje | Banda |
|---|---|
| ≥ 90% | Grade A |
| ≥ 78% | Grade B |
| ≥ 65% | Grade C |
| ≥ 50% | Nivel C1 |
| < 50% | Sin banda |

## Racha

Una racha sobrevive a varias sesiones el mismo día y a una vuelta al día
siguiente; cualquier hueco mayor la reinicia a 1. El contador que se muestra en
la barra superior es la racha *viva*: si hace dos días que no aparecés, muestra
cero aunque el récord siga guardado.
