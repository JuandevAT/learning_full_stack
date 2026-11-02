# Diagnóstico Inicial — DevPath Academy

> **Propósito:** Medir el punto de partida real, no aprobar ni suspender. No otorga competencias por sí mismo; solo calibra la ruta de estudio.
> **Reglas de integridad:**
>
> 1. Sin IA, autocompletado inteligente ni ayuda del agente Antigravity.
> 2. Se permite documentación técnica oficial para recordar sintaxis, anotando cada consulta realizada.
> 3. Cada bloque dispone de 45 minutos de resolución y 15 minutos de registro.
> 4. Si no se puede resolver algo, dejarlo en blanco y describir el bloqueo concreto.
> 5. La corrección se realiza con la rúbrica 0–3 únicamente tras finalizar todas las partes.

---

## 0. Línea Base de Inglés (EF SET 4 Skills — 90 min)

- **Fecha de realización:** Pendiente
- **Resultado Global:** [Por completar: A1 / A2 / B1 / B2 / C1 / C2]
- **Reading:** [Puntuación / Nivel]
- **Listening:** [Puntuación / Nivel]
- **Speaking:** [Puntuación / Nivel]
- **Writing:** [Puntuación / Nivel]
- **Certificado / URL (opcional):** [Enlace o captura]

---

## Parte Previa: Autoevaluación de Experiencia

| Concepto / Tecnología                  | Experiencia previa (Ninguna / Teórica / Práctica académica / Práctica laboral) | Comentarios / Proyectos previos |
| -------------------------------------- | ------------------------------------------------------------------------------ | ------------------------------- |
| Variables y tipos básicos              |                                                                                |                                 |
| Condicionales y bucles                 |                                                                                |                                 |
| Funciones y alcance                    |                                                                                |                                 |
| Arrays y objetos                       |                                                                                |                                 |
| Manejo de errores (`try/catch`)        |                                                                                |                                 |
| Terminal / CLI (Zsh/Bash)              |                                                                                |                                 |
| Git básico (`add`, `commit`, `status`) |                                                                                |                                 |
| TypeScript                             |                                                                                |                                 |
| Vitest / Jest                          |                                                                                |                                 |
| Java / Swing                           |                                                                                |                                 |
| JDBC / Conectividad BD                 |                                                                                |                                 |
| MySQL                                  |                                                                                |                                 |
| PostgreSQL                             |                                                                                |                                 |

---

## Parte A: Lógica y Lectura de Código (Sesión 2 — 45 min resolución + 15 min registro)

### Bloque 1: Lógica (Descomposición en pasos o pseudocódigo)

_Instrucción:_ Descomponer los siguientes 3 problemas paso a paso sin escribir código de producción.

#### Problema 1.1: Validador de contraseñas seguras

- **Enunciado:** Describir el algoritmo para verificar que una contraseña tenga al menos 8 caracteres, al menos una mayúscula, un número y un símbolo especial.
- **Tu solución / pseudocódigo:**
  ```text
  [aplicamos reglas de caracteres en el formulario al ingresar la contraseña, exigiendo al menos 8 caracteres, 1mayuscula, 1numero y un caracter especial.
  luego esta contraseña debe ser encriptada y guardada en la base de datos]
  ```
- **Consultas realizadas:** Ninguna
- **Dificultades o bloqueos:**

#### Problema 1.2: Contador de frecuencias de palabras

- **Enunciado:** Dado un texto largo, describir el proceso para obtener una lista de cada palabra única y cuántas veces aparece, ignorando mayúsculas y signos de puntuación.
- **Tu solución / pseudocódigo:**
  ```text
  [separar en un arreglo cada palabra del texto largo separandolos por el espacio entre palabras, luego se debe validar que cada componente del arreglo sea unico y borrar los repetidos]
  ```
- **Consultas realizadas:** Ninguna
- **Dificultades o bloqueos:**

#### Problema 1.3: Detección de rangos de tiempo superpuestos

- **Enunciado:** Dadas dos citas con hora de inicio y fin, determinar la lógica para saber si chocan o se superponen.
- **Tu solución / pseudocódigo:**
  ```text
  [dado que ambos tienen un rango de hora ya establecido solo deberemos identificar si la hora menor de cada uno de los dos esta dentro del rango del otro, asi si esta dentro podemos decir que se superponen y si el tiempo final de uno coincide con el inicial del otro decimos que se chocan]
  ```
- **Consultas realizadas:** Ninguna
- **Dificultades o bloqueos:**

---

### Bloque 2: Lectura y Depuración de Código

#### Fragmento 2.1 — Predicción de salida

```javascript
let total = 0;
const items = [10, 20, 30];
for (var i = 0; i < items.length; i++) {
  setTimeout(() => {
    total += items[i] || 0;
  }, 100);
}
console.log("Total síncrono:", total);
```

- **Predicción del `console.log` síncrono:**
- **¿Qué ocurre luego de 100ms? Explicación:**
  no lo se

#### Fragmento 2.2 — Predicción de salida

```javascript
const user = { name: "Alex", scores: [80, 90] };
const backup = Object.assign({}, user);
backup.name = "Carlos";
backup.scores.push(100);
console.log(user.name, user.scores.length);
```

- **Predicción de la salida:**
- **Razón técnica:**
  no lo se

#### Fragmento 2.3 — Localizar el error

```javascript
function calculateAverage(numbers) {
  let sum = 0;
  for (let i = 1; i <= numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
}
```

- **Error localizado:**
- **Corrección propuesta:**
  no lo se

#### Fragmento 2.4 — Localizar el error

```javascript
function findActiveUser(users) {
  return (
    users.filter((u) => {
      if (u.isActive) {
        return true;
      }
    })[0] || null
  );
}
// Considerar qué ocurre con un array vacío o si no hay usuario activo
```

- **Análisis de comportamiento y fallas de borde:**
  no lo se

---

## Parte B1: Sintaxis y Datos (Sesión 3 — 45 min resolución + 15 min registro)

_Nota:_ Los ejercicios se ejecutan con la pista JavaScript de Exercism (Grupo A) ejecutando sus tests locales oficiales.

### Bloque 3: Sintaxis (4 funciones pequeñas)

1. **Ejercicio 3.1:** [Nombre ejercicio Exercism A1] — Estado tests: [Pendiente / Pasan / Fallan]
2. **Ejercicio 3.2:** [Nombre ejercicio Exercism A2] — Estado tests: [Pendiente / Pasan / Fallan]
3. **Ejercicio 3.3:** [Nombre ejercicio Exercism A3] — Estado tests: [Pendiente / Pasan / Fallan]
4. **Ejercicio 3.4:** [Nombre ejercicio Exercism A4] — Estado tests: [Pendiente / Pasan / Fallan]

- **Consultas de sintaxis:** Ninguna
- **Bloqueos identificados:**
  no lo se

### Bloque 4: Datos (3 ejercicios de arrays y objetos)

1. **Ejercicio 4.1 (Recorrer/Transformar):** [Nombre ejercicio Exercism A5] — Estado tests: [Pendiente]
2. **Ejercicio 4.2 (Filtrar):** [Nombre ejercicio Exercism A6] — Estado tests: [Pendiente]
3. **Ejercicio 4.3 (Agrupar/Reducir):** [Nombre ejercicio Exercism A7] — Estado tests: [Pendiente]

- **Consultas realizadas:** Ninguna
- **Bloqueos identificados:**

---

## Parte B2: Herramientas y Terminal (Sesión 4 — 45 min resolución + 15 min registro)

### Bloque 5: Herramientas (Terminal y Git)

- [ ] 5.1 Navegar directorios, crear estructura `mkdir -p test-lab/sub` y crear archivo con contenido.
- [ ] 5.2 Inicializar un repositorio temporal con `git init`, comprobar `git status`.
- [ ] 5.3 Crear `.gitignore`, añadir archivos al staging con `git add` y registrar un commit claro con `git commit -m`.
- [ ] 5.4 Inspeccionar historial con `git log --oneline` e identificar el hash SHA del commit.
- [ ] 5.5 Crear una rama `feature/test`, cambiarse a ella y volver a `main`.

---

## Rúbrica y Calificación (Sábado — Corrección)

Escala:

- `0`: No pudo empezar o no produjo respuesta evaluable.
- `1`: Resultado mayormente incorrecto; requiere enseñanza y práctica guiada.
- `2`: Parcialmente correcto o con errores menores; puede continuar con refuerzo puntual.
- `3`: Resuelve de forma independiente y explica su razonamiento con precisión.

| Bloque                             | Puntuación (0–3)            | Mínimo requerido | Evidencia / Justificación |
| ---------------------------------- | --------------------------- | ---------------- | ------------------------- |
| **Bloque 1: Lógica**               | 1                           | ≥ 2              | Reconoce requisitos y estrategias parciales; no cubre todos los criterios ni describe un proceso suficiente para contar frecuencias o decidir todos los solapamientos. |
| **Bloque 2: Lectura y depuración** | 0                           | ≥ 1              | Las cuatro respuestas indican “no lo sé” o no contienen una predicción/análisis evaluable. |
| **Bloque 3: Sintaxis**             | 0                           | ≥ 2              | No hay ejercicios ni resultados registrados; los nombres A1–A4 siguen como marcadores. No mide de forma fiable la capacidad de sintaxis. |
| **Bloque 4: Datos**                | 0                           | ≥ 1              | No hay ejercicios ni resultados registrados; los nombres A5–A7 siguen como marcadores. No mide de forma fiable la capacidad de trabajar con datos. |
| **Bloque 5: Herramientas**         | 0                           | ≥ 1              | Ninguna tarea de la lista aparece completada ni acompañada de evidencia. |
| **Media global:**                  | 0.2 / 3                     | -                | Media aritmética de los cinco bloques; orientativa porque B1 no se ejecutó y B2 no tiene evidencia. |
| **Integridad del intento:**        | Válido                      |                  | El usuario confirmó que no usó IA/autocompletado ni realizó consultas externas. |

### Decisión de Ruta:

- [x] **Refuerzo específico:** Media < 1.2, Bloque 1 o 3 < 2, o cualquier bloque con 0.
- [ ] **Ruta base:** Media 1.2 – 2.4 y todos los mínimos superados.
- [ ] **Ruta acelerada:** Media > 2.4 (requiere mini-test adicional).

### Interpretación y refuerzo recomendado

- **Bloque 1:** En 1.1 identificas los requisitos, pero la respuesta se desvía a almacenamiento y no detalla cómo comprobarlos. En 1.2 propones separar y eliminar repetidos, pero no explicas cómo normalizar el texto ni conservar los recuentos. En 1.3 reconoces la comparación entre rangos, aunque la descripción no cubre todos los casos de solapamiento. Insertar práctica guiada de descomposición de problemas antes de comenzar los ejercicios de programación.
- **Bloque 2:** No hay respuestas evaluables. Insertar repaso introductorio de lectura de código, índices, copias de objetos y ejecución diferida antes de la práctica JavaScript.
- **Bloques 3 y 4:** El 0 representa ausencia de evidencia, no demuestra falta de capacidad: los ejercicios A1–A7 no están identificados ni se registraron ejecuciones. Definir ejercicios concretos y repetir estos bloques con sus pruebas locales antes de tomar decisiones sobre sintaxis o estructuras de datos.
- **Bloque 5:** No hay evidencia de ejecución. Repetir la práctica de terminal y Git en una carpeta temporal con verificación de cada paso.
- **Límite de la decisión:** La ruta marcada es conservadora y provisional. La media no calibra de forma fiable sintaxis ni datos hasta que B1 se ejecute.
