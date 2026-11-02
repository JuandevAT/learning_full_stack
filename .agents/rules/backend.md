---
trigger: glob
globs: "apps/api/**/*.ts, src/server/**/*.ts, prisma/**/*"
description: "Standards for Express, Zod, PostgreSQL, and Prisma."
---

# Backend Standards
- Validate `body`, `query`, and `params` with Zod before processing.
- Stable error codes; the frontend decides how to display or translate them.
- Small, reviewable, and testable database migrations.
- Never log passwords, tokens, or private user data.
- Authorization is strictly enforced on the backend.
- Do not create future database tables before a real feature needs them.
