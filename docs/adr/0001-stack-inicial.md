# ADR 0001: Selección del Stack Tecnológico Inicial

## Estado
Propuesto (a ratificar al cierre de la Etapa 0 tras completar la muestra de mercado en `docs/mercado-laboral.md`).

## Contexto
El usuario inicia su camino formativo hacia el perfil de Junior Full Stack. Cuenta con nociones previas en Java (Swing), conectividad JDBC, MySQL y PostgreSQL. Se requiere una ruta técnica con:
1. Alta demanda verificable en el mercado objetivo (Bolivia y remoto internacional).
2. Curva de aprendizaje progresiva que evite sobrecarga conceptual en las primeras semanas.
3. Compatibilidad total con el principio de Presupuesto USD 0 (herramientas de código abierto, sin requerimiento de tarjetas de crédito).
4. Coherencia en el uso de un solo ecosistema de lenguaje inicial (JavaScript/TypeScript) para reducir el cambio de contexto en las primeras etapas.

## Decisión Propuesta
Adoptar la ruta integrada JavaScript / TypeScript Full Stack:
- **Etapa 1:** JavaScript moderno -> TypeScript progresivo -> Node.js CLI (paquete único).
- **Etapa 2:** HTML/CSS -> React -> Vite -> React Router -> Tailwind CSS -> i18next (monorepo workspaces).
- **Etapa 3:** Express REST API -> SQL nativo -> PostgreSQL local -> Prisma ORM.

## Opciones Consideradas
1. **Ruta Propuesta: React + Node/Express + PostgreSQL + Prisma:**
   - *Pros:* Ecosistema unificado en TS; enorme oferta de recursos educativos gratuitos de calidad; React domina el mercado frontend; PostgreSQL aprovecha los conceptos relacionales ya conocidos por el usuario.
   - *Contras:* El ecosistema JS/TS evoluciona rápido; requiere rigor con tipado para no caer en malas prácticas.
2. **Ruta Alternativa A: Java + Spring Boot + React:**
   - *Pros:* Aprovecha la sintaxis y conceptos de POO previa del usuario en Java.
   - *Contras:* Spring Boot añade una capa de complejidad y abstracción (inyección de dependencias, anotaciones complejas) muy pesada para un casi principiante; requiere alternar entre dos lenguajes distintos desde temprano.
3. **Ruta Alternativa B: C# / .NET + React:**
   - *Pros:* Ecosistema robusto y tipado estricto.
   - *Contras:* Menor cantidad de recursos formativos completamente gratuitos comparado con Node/React; menor prevalencia en ofertas remotas junior internacionales comparado con el stack TypeScript.

## Criterio de Ratificación
Esta decisión será confirmada o ajustada formalmente al finalizar la Etapa 0, contrastándola contra los datos reales registrados en `docs/mercado-laboral.md`.
