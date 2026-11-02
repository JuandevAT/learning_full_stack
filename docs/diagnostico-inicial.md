# Diagnóstico Inicial — DevPath Academy

> **Propósito:** Medir el punto de partida real, no aprobar ni suspender. No otorga competencias por sí mismo; solo calibra la ruta de estudio.  
> **Reglas de integridad:**
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
| Concepto / Tecnología | Experiencia previa (Ninguna / Teórica / Práctica académica / Práctica laboral) | Comentarios / Proyectos previos |
|---|---|---|
| Variables y tipos básicos | | |
| Condicionales y bucles | | |
| Funciones y alcance | | |
| Arrays y objetos | | |
| Manejo de errores (`try/catch`) | | |
| Terminal / CLI (Zsh/Bash) | | |
| Git básico (`add`, `commit`, `status`) | | |
| TypeScript | | |
| Vitest / Jest | | |
| Java / Swing | | |
| JDBC / Conectividad BD | | |
| MySQL | | |
| PostgreSQL | | |

---

## Parte A: Lógica y Lectura de Código (Sesión 2 — 45 min resolución + 15 min registro)

### Bloque 1: Lógica (Descomposición en pasos o pseudocódigo)
*Instrucción:* Descomponer los siguientes 3 problemas paso a paso sin escribir código de producción.

#### Problema 1.1: Validador de contraseñas seguras
- **Enunciado:** Describir el algoritmo para verificar que una contraseña tenga al menos 8 caracteres, al menos una mayúscula, un número y un símbolo especial.
- **Tu solución / pseudocódigo:**
  ```text
  [Escribe aquí tu descomposición]
  ```
- **Consultas realizadas:** [Ninguna / Anotar consultas]
- **Dificultades o bloqueos:**

#### Problema 1.2: Contador de frecuencias de palabras
- **Enunciado:** Dado un texto largo, describir el proceso para obtener una lista de cada palabra única y cuántas veces aparece, ignorando mayúsculas y signos de puntuación.
- **Tu solución / pseudocódigo:**
  ```text
  [Escribe aquí tu descomposición]
  ```
- **Consultas realizadas:**
- **Dificultades o bloqueos:**

#### Problema 1.3: Detección de rangos de tiempo superpuestos
- **Enunciado:** Dadas dos citas con hora de inicio y fin, determinar la lógica para saber si chocan o se superponen.
- **Tu solución / pseudocódigo:**
  ```text
  [Escribe aquí tu descomposición]
  ```
- **Consultas realizadas:**
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

#### Fragmento 2.4 — Localizar el error
```javascript
function findActiveUser(users) {
  return users.filter(u => {
    if (u.isActive) {
      return true;
    }
  })[0] || null;
}
// Considerar qué ocurre con un array vacío o si no hay usuario activo
```
- **Análisis de comportamiento y fallas de borde:**

---

## Parte B1: Sintaxis y Datos (Sesión 3 — 45 min resolución + 15 min registro)
*Nota:* Los ejercicios se ejecutan con la pista JavaScript de Exercism (Grupo A) ejecutando sus tests locales oficiales.

### Bloque 3: Sintaxis (4 funciones pequeñas)
1. **Ejercicio 3.1:** [Nombre ejercicio Exercism A1] — Estado tests: [Pendiente / Pasan / Fallan]
2. **Ejercicio 3.2:** [Nombre ejercicio Exercism A2] — Estado tests: [Pendiente / Pasan / Fallan]
3. **Ejercicio 3.3:** [Nombre ejercicio Exercism A3] — Estado tests: [Pendiente / Pasan / Fallan]
4. **Ejercicio 3.4:** [Nombre ejercicio Exercism A4] — Estado tests: [Pendiente / Pasan / Fallan]
- **Consultas de sintaxis:**
- **Bloqueos identificados:**

### Bloque 4: Datos (3 ejercicios de arrays y objetos)
1. **Ejercicio 4.1 (Recorrer/Transformar):** [Nombre ejercicio Exercism A5] — Estado tests: [Pendiente]
2. **Ejercicio 4.2 (Filtrar):** [Nombre ejercicio Exercism A6] — Estado tests: [Pendiente]
3. **Ejercicio 4.3 (Agrupar/Reducir):** [Nombre ejercicio Exercism A7] — Estado tests: [Pendiente]
- **Consultas realizadas:**
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

| Bloque | Puntuación (0–3) | Mínimo requerido | Evidencia / Justificación |
|---|---|---|---|
| **Bloque 1: Lógica** | [ ] | ≥ 2 | |
| **Bloque 2: Lectura y depuración** | [ ] | ≥ 1 | |
| **Bloque 3: Sintaxis** | [ ] | ≥ 2 | |
| **Bloque 4: Datos** | [ ] | ≥ 1 | |
| **Bloque 5: Herramientas** | [ ] | ≥ 1 | |
| **Media global:** | [ ] | - | |
| **Integridad del intento:** | [ ] Válido / [ ] Invalidado | |

### Decisión de Ruta:
- [ ] **Refuerzo específico:** Media < 1.2, Bloque 1 o 3 < 2, o cualquier bloque con 0.
- [ ] **Ruta base:** Media 1.2 – 2.4 y todos los mínimos superados.
- [ ] **Ruta acelerada:** Media > 2.4 (requiere mini-test adicional).
