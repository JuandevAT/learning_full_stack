# ADR 0002: Verificación de la Configuración y Detección en Google Antigravity

## Estado
Aprobado y Verificado.

## Contexto
El flujo de trabajo pedagógico y de desarrollo de DevPath Academy utiliza Google Antigravity como asistente, mentor socrático y revisor técnico.
Para asegurar que las instrucciones del plan se cumplan sin desviaciones:
1. Las directivas de rol y límites deben cargarse automáticamente en cada sesión.
2. Las habilidades operativas (`sesion-diaria`, `revision-semanal`, `diagnostico`, `revisar-i18n`) deben estar disponibles en el momento requerido.
3. Las reglas de arquitectura para frontend (`rules/frontend.md`) y backend (`rules/backend.md`) deben activarse condicionalmente según los archivos modificados.

## Verificación Local Realizada
- **Fecha de verificación:** 2026-11-01
- **Sistema Operativo:** EndeavourOS (Linux x86_64, kernel rolling)
- **Instalación de Antigravity:** `/home/juan/.local/bin/antigravity` -> `/home/juan/.local/opt/antigravity/`
- **Descubrimiento comprobado:**
  - `AGENTS.md` ubicado en la raíz del espacio de trabajo (`/home/juan/Documentos/proyectos personales/learnfullstack/AGENTS.md`). Antigravity lo lee jerárquicamente sin requerir frontmatter.
  - `.agents/skills/<nombre>/SKILL.md`: Estructura estándar detectada con frontmatter YAML (`name`, `description`). Habilidades registradas:
    - `.agents/skills/sesion-diaria/SKILL.md`
    - `.agents/skills/revision-semanal/SKILL.md`
    - `.agents/skills/diagnostico/SKILL.md`
  - `.agents/rules/*.md`: Estructura reservada para Etapas 2 y 3 con trigger por glob.

## Consecuencias
1. La configuración reside exclusivamente dentro del repositorio versionado en Git, garantizando portabilidad y reproducibilidad.
2. Se confirma la precedencia: Workspace Project (`.agents/`, `AGENTS.md`) prevalece sobre configuraciones globales de máquina (`~/.gemini/config/`).
