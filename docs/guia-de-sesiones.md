# Guía de Sesiones — DevPath Academy

Este documento contiene las instrucciones operativas paso a paso para ejecutar el proyecto sesión por sesión, respetando el límite de 7 horas semanales y los principios del Plan Maestro.

---

## 1. Cómo iniciar cada sesión (Protocolo de 60 minutos)

Cada sesión de lunes a jueves dura exactamente 60 minutos y sigue esta estructura:

```
[10 min] Repaso activo sin ayuda (responder 1–2 preguntas del día anterior)
[15 min] Concepto nuevo y lectura técnica (documentación oficial)
[25 min] Práctica deliberada (tú escribes la lógica; el agente solo da pistas)
[10 min] Verificación (ejecutar tests, explicar con tus palabras y registrar en docs/ESTADO.md)
```

### Prompt para iniciar la sesión con el agente (Antigravity o VS Code)
Copia y pega este texto exacto al abrir el chat:
```text
Continue DevPath Academy. Read AGENTS.md and docs/ESTADO.md, inspect git status and verify the real project state before proposing anything. Summarize where we are and propose ONE micro-deliverable that fits the current session. Start with active recall. Follow the language policy and the autonomy limits for the current stage; do not write assessed solutions.
```

---

## 2. Hoja de Ruta Detallada — Etapa 0: Arranque (Semana 0)

La Etapa 0 no cuenta dentro de las 88 semanas lectivas; sirve para dejar el entorno 100% verificado, medir tu punto de partida real y calibrar la ruta.

---

### Sesión 1: Entorno, Git y Conexión con Exercism (60 min)
- **Objetivo:** Dejar configurada tu identidad Git, comprobar el acceso a Exercism y registrar el primer commit del repositorio.
- **Paso a paso:**
  1. Abrir terminal en `/home/juan/Documentos/proyectos personales/learnfullstack`.
  2. Configurar tu identidad global en Git:
     ```bash
     git config --global user.name "Tu Nombre"
     git config --global user.email "tu-email@dominio.com"
     ```
  3. Vincular tu cuenta de Exercism con tu token de [exercism.org/settings/api_cli](https://exercism.org/settings/api_cli):
     ```bash
     exercism configure --token=TU_TOKEN
     ```
  4. Comprobar que Exercism responde:
     ```bash
     exercism tracks
     ```
  5. Registrar el commit inicial del proyecto y subirlo a GitHub (`JuandevAT/learning_full_stack`):
     ```bash
     git add .
     git commit -m "chore(stage-0): initial project scaffolding, docs, and vscode config"
     git push -u origin main
     ```
  6. Actualizar [docs/ESTADO.md](file:///home/juan/Documentos/proyectos%20personales/learnfullstack/docs/ESTADO.md).
- **Criterio de salida:** `git log` muestra el primer commit, `exercism tracks` lista los lenguajes sin error y `git push` sincroniza exitosamente con https://github.com/JuandevAT/learning_full_stack.git.

---

### Sesión 2: Test Inicial — Parte A: Lógica y Lectura de Código (60 min)
- **Documento de trabajo:** [docs/diagnostico-inicial.md](file:///home/juan/Documentos/proyectos%20personales/learnfullstack/docs/diagnostico-inicial.md#L30-L105)
- **Regla:** Sin IA, sin autocompletado y sin ayuda del agente. Solo puedes consultar sintaxis en documentación oficial anotando cada consulta.
- **Distribución:** 45 min de resolución + 15 min de registro.
- **Paso a paso:**
  1. **Bloque 1 (Lógica):** Resolver los 3 problemas de descomposición paso a paso o pseudocódigo (Validador de contraseñas, Frecuencia de palabras, Rangos superpuestos).
  2. **Bloque 2 (Lectura y Depuración):** Analizar los 4 fragmentos JavaScript: predecir la salida de los dos primeros y localizar/corregir el error en los dos últimos.
  3. Anotar tus respuestas directamente en [docs/diagnostico-inicial.md](file:///home/juan/Documentos/proyectos%20personales/learnfullstack/docs/diagnostico-inicial.md).
  4. Actualizar [docs/ESTADO.md](file:///home/juan/Documentos/proyectos%20personales/learnfullstack/docs/ESTADO.md) y hacer commit:
     ```bash
     git add docs/
     git commit -m "docs(diagnostic): record part a logic and code reading answers"
     ```

---

### Sesión 3: Test Inicial — Parte B1: Sintaxis y Datos en Exercism (60 min)
- **Documento de trabajo:** [docs/diagnostico-inicial.md](file:///home/juan/Documentos/proyectos%20personales/learnfullstack/docs/diagnostico-inicial.md#L107-L130)
- **Regla:** Resolver los ejercicios seleccionados del **Grupo A** de la pista JavaScript en Exercism. Ejecutar sus tests locales.
- **Distribución:** 45 min de código + 15 min de registro.
- **Paso a paso:**
  1. Descargar los ejercicios asignados para sintaxis (Bloque 3: 4 funciones) y datos (Bloque 4: 3 ejercicios de arrays/objetos):
     ```bash
     exercism download --track=javascript --exercise=<ejercicio>
     ```
  2. Resolverlos en tu editor ejecutando las pruebas locales incluidas:
     ```bash
     npm test
     ```
  3. Registrar en [docs/diagnostico-inicial.md](file:///home/juan/Documentos/proyectos%20personales/learnfullstack/docs/diagnostico-inicial.md) el estado de cada ejercicio (pasan/fallan), las consultas realizadas y los bloqueos encontrados.
  4. Actualizar [docs/ESTADO.md](file:///home/juan/Documentos/proyectos%20personales/learnfullstack/docs/ESTADO.md) y hacer commit del registro.

---

### Sesión 4: Test Inicial — Parte B2: Terminal y Git (60 min)
- **Documento de trabajo:** [docs/diagnostico-inicial.md](file:///home/juan/Documentos/proyectos%20personales/learnfullstack/docs/diagnostico-inicial.md#L132-L144)
- **Objetivo:** Demostrar dominio independiente de comandos esenciales de terminal y control de versiones.
- **Paso a paso:**
  1. Ejecutar las tareas prácticas de la lista en una carpeta temporal `test-lab/`:
     - Navegación y creación de carpetas anidadas (`mkdir -p`).
     - Inicializar repo con `git init`.
     - Crear `.gitignore` y staging con `git add`.
     - Registrar commits con mensajes semánticos e inspeccionar `git log --oneline`.
     - Crear y alternar ramas (`git checkout -b` o `git switch -c`).
  2. Marcar los checkboxes completados en [docs/diagnostico-inicial.md](file:///home/juan/Documentos/proyectos%20personales/learnfullstack/docs/diagnostico-inicial.md).
  3. Eliminar la carpeta de prueba temporal `test-lab/`.
  4. Actualizar [docs/ESTADO.md](file:///home/juan/Documentos/proyectos%20personales/learnfullstack/docs/ESTADO.md) y hacer commit.

---

### Sesión 5: Auditorías y Preparación Final (60 min)
- **Documentos de trabajo:**
  - [docs/beneficios-github-estudiante.md](file:///home/juan/Documentos/proyectos%20personales/learnfullstack/docs/beneficios-github-estudiante.md)
  - [docs/mercado-laboral.md](file:///home/juan/Documentos/proyectos%20personales/learnfullstack/docs/mercado-laboral.md)
- **Paso a paso:**
  1. Entrar a [education.github.com/pack](https://education.github.com/pack) y verificar el estado de los beneficios activos en tu cuenta (GitHub Pro, Codespaces, Actions, Copilot).
  2. Rellenar las cuotas y fechas de revalidación en [docs/beneficios-github-estudiante.md](file:///home/juan/Documentos/proyectos%20personales/learnfullstack/docs/beneficios-github-estudiante.md).
  3. Revisar 5 ofertas de empleo junior (Bolivia / remoto) y comenzar a registrar las tecnologías requeridas en [docs/mercado-laboral.md](file:///home/juan/Documentos/proyectos%20personales/learnfullstack/docs/mercado-laboral.md).
  4. Actualizar [docs/ESTADO.md](file:///home/juan/Documentos/proyectos%20personales/learnfullstack/docs/ESTADO.md) y hacer commit.

---

### Sábado de Semana 0: Calificación, Rúbrica y Ajuste de Ruta (30 min)
- **Objetivo:** Corregir el diagnóstico junto con el agente y definir la ruta de estudio (base o con refuerzos).
- **Paso a paso:**
  1. Abrir chat con el agente e invocar la skill `diagnostico`.
  2. Evaluar cada bloque con la rúbrica 0–3 en [docs/diagnostico-inicial.md](file:///home/juan/Documentos/proyectos%20personales/learnfullstack/docs/diagnostico-inicial.md#L146-L170):
     - Mínimo en Lógica y Sintaxis: ≥ 2.
     - Mínimo en Lectura, Datos y Herramientas: ≥ 1.
  3. Calcular la media y seleccionar la ruta correspondiente (Refuerzo, Base o Acelerada).
  4. Registrar la decisión en [docs/ESTADO.md](file:///home/juan/Documentos/proyectos%20personales/learnfullstack/docs/ESTADO.md) y hacer commit.

---

### Bloque Independiente: Test CEFR de Inglés (90 min — Cualquier día de Semana 0)
- **Herramienta:** Test gratuito de 4 habilidades en [EF SET (4-skill)](https://www.efset.org/4-skill/).
- **Objetivo:** Establecer tu línea base objetiva en lectura, escucha, habla y escritura técnica.
- **Acción:** Al finalizar, guardar tus niveles por habilidad en la sección 0 de [docs/diagnostico-inicial.md](file:///home/juan/Documentos/proyectos%20personales/learnfullstack/docs/diagnostico-inicial.md#L14-L22).

---

## 3. Estructura de Semanas Regulares (Etapa 1 en adelante)

| Día | Duración | Actividad principal |
|---|---|---|
| **Lunes a Jueves** | 60 min | Micro-entregable del tema de la semana (10m repaso + 15m teoría + 25m código + 10m pruebas/bitácora) |
| **Viernes** | 0 min | **Descanso total** (sin estudio, sin código, sin tareas) |
| **Sábado** | 30 min | Repaso espaciado activo, control anti-copia (reimplementar 1 función sin ayuda) y 15 min de práctica oral en inglés (desde Etapa 2) |
| **Domingo** | 150 min | Bloque de proyecto: integración, refactorización, suite de tests y actualización de documentación (3 bloques de 50 min con pausas) |

---

## 4. Checklist para Cerrar Cualquier Sesión
Antes de apagar el equipo o cerrar tu editor:
- [ ] ¿Los tests pertinentes se ejecutaron y pasaron?
- [ ] ¿Se actualizó [docs/ESTADO.md](file:///home/juan/Documentos/proyectos%20personales/learnfullstack/docs/ESTADO.md) con lo que realmente quedó hecho y la próxima tarea?
- [ ] ¿Se realizó el commit correspondiente con un mensaje claro en inglés (ej. `feat: ...`, `test: ...`, `docs: ...`)?
- [ ] ¿El árbol de trabajo quedó limpio (`git status` sin cambios pendientes)?
