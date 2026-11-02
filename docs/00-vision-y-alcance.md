# 00 — Visión y Alcance del Proyecto: DevPath Academy

## 1. Visión
**DevPath Academy** es una plataforma personal de aprendizaje por competencias, construida como parte del propio camino hacia Junior Full Stack. El currículo y el producto están completamente integrados: cada etapa enseña una tecnología y, a la vez, construye la pieza de DevPath que la utiliza.

- **Entorno de desarrollo:** EndeavourOS (Arch-based rolling release) + Zsh + Git/GitHub.
- **Asistente:** Google Antigravity (IDE / CLI) en rol de tutor socrático y revisor.
- **Presupuesto:** USD 0 estricto (sin tarjetas, sin costos ocultos, sin APIs con cobro).
- **Idioma principal:** Inglés (`en`) por defecto en interfaz y contenido educativo. Español (`es`) como alternativa bilingüe y apoyo gradual.

---

## 2. Principios No Negociables
1. **Aprender antes que generar:** El usuario escribe la lógica. La autonomía del agente aumenta solo por etapas.
2. **Evidencias, no impresiones:** Charlar con el tutor o leer documentación no demuestra dominio; se requieren ejercicios independientes y aplicación práctica.
3. **Presupuesto cero:** Ningún servicio externo con cobro ni tarjeta asociada.
4. **La IA es opcional:** La plataforma y la rutina de estudio deben funcionar al 100% sin ningún proveedor de IA.
5. **Incrementos pequeños y verificados:** Un micro-entregable por sesión de 60 minutos, testeado y comprendido.
6. **Dominio primero, interfaz después:** Lógica pura de competencias en TypeScript testeado antes de crear maquetas o pantallas.
7. **Seguridad, accesibilidad e i18n desde el principio:** Implementadas orgánicamente por etapa, no como un parche final.
8. **Estado documentado ≠ implementado:** Solo lo verificado con tests y archivos reales se reporta como terminado.

---

## 3. Calendario y Ritmo de Estudio
- **Total:** 88 semanas lectivas + Semana 0 de preparación (fuera del cómputo).
- **Carga estándar:** Máximo 7 horas por semana.
  - **Lunes a Jueves:** 60 minutos diarios (práctica deliberada, lectura técnica, micro-entregable).
  - **Viernes:** Descanso absoluto (0 minutos).
  - **Sábado:** 30 minutos (repaso activo, control anti-copia, práctica oral de inglés técnico desde Etapa 2).
  - **Domingo:** 150 minutos (bloque de integración, pruebas, documentación, divididos en bloques de 50 min con pausas).
- **Semanas ligeras:** 8 semanas planificadas de ~4 horas (semanas 8, 20, 29, 38, 48, 58, 68 y 78). Reducen la carga para consolidación sin introducir nuevas tecnologías principales.
- **Carga de referencia:** ~592 horas de estudio guiado y práctica activa.

---

## 4. Hitos y Fases de Desarrollo

| Etapa | Semanas | Qué se aprende | Qué se construye en DevPath | Hito |
|---|---|---|---|---|
| **0. Arranque** | 0 | Entorno, Git, diagnóstico inicial y auditoría Student Pack | Repo configurado, reglas, diagnóstico y ruta calibrada | Entorno listo |
| **1. Fundamentos** | 1–12 | JavaScript, TypeScript gradual, lógica, datos, Vitest, Node básico | DevPath CLI en un único paquete (`src/domain/`, `src/cli/`, `tests/`) | **H1: Núcleo CLI verificado** |
| **2. Web** | 13–29 | HTML semántico, CSS, React (6 semanas), router, Tailwind, i18n, Testing Library/Playwright | DevPath Web local bilingüe con refactor a pnpm workspaces en semana 16 | **H2: App web usable y bilingüe** |
| **3. Backend y datos** | 30–46 | HTTP, Express, SQL relacional, PostgreSQL local, Prisma, Auth | API REST + Base de datos relacional + Login seguro conectados al frontend | **H3: MVP con persistencia y cuenta** |
| **Consolidación** | 47–48 | Auditoría completa, estabilidad, migraciones desde cero, contingencia | H3 reproducible, auditado y documentado | Puerta técnica a Academia |
| **4. Academia** | 49–64 | Integración total, currículo, evidencias, evaluaciones, repasos espaciados, E2E | Academia funcional integral | **H4: MVP completo** |
| **5. Ingeniería** | 65–76 | Git avanzado, CI con GitHub Actions, Docker, redes, Linux, seguridad OWASP | Release candidata documentada y mantenible | **H5: Release documentada** |
| **6. Portafolio** | 77–88 | Proyecto diferencial adicional, CV, inglés técnico, simulaciones técnicas y búsqueda | DevPath pulido + Segundo proyecto funcional | **H6: Portafolio listo** |

---

## 5. Alcance MVP (MoSCoW)
- **Must (Debe tener):**
  - Autenticación segura (registro, login, cookies httpOnly/SameSite, hashing moderno).
  - Roadmap interactivo y visualización modular de competencias.
  - Registro de evidencias y avance por puertas de dominio (`no_iniciada` -> `en_practica` -> `demostrada` -> `dominada`).
  - Repaso espaciado con límite diario (máx. 5 al día).
  - Dashboard con datos reales de progreso.
  - Soporte bilingüe completo (`en` predeterminado y fuente de verdad, `es` alternativo) con claves sincronizadas.
  - Catálogo propio de competencias y módulos en archivos JSON versionados por IDs estables.
  - Funcionamiento completo sin proveedores de IA.
- **Should (Debería tener):**
  - Recursos educativos enlazados por módulo y nivel.
  - Ejercicios guiados con contador de pistas.
  - Quizzes de autoevaluación con rúbricas objetivas.
  - Pruebas E2E de flujos clave (Playwright).
- **Could (Podría tener - Funcionalidades opcionales):**
  - Asistente/Tutor IA local opcional (Ollama).
  - Glosario técnico interactivo EN/ES con enlaces a IDs de competencias.
  - Ayuda contextual "Ver en español" por frase/término sin conmutar toda la UI.
  - Modo estricto sin traducción para inmersión avanzada.

---

## 6. Arquitectura Incremental
- **Etapas 0–1:** Un solo paquete npm simple (`src/domain/`, `src/cli/`, `tests/`). Sin monorepo prematuro.
- **Semana 16 (Etapa 2):** Refactor explícito a `pnpm workspaces` al introducir Vite y frontend web (`packages/core`, `apps/cli`, `apps/web`).
- **Etapa 3:** Introducción de `apps/api` con Express, PostgreSQL local y Prisma.
- **Etapa 5:** Contenedorización con Docker y Docker Compose para reproducción del entorno completo.
