---
trigger: glob
globs: "src/**/*.ts, src/**/*.tsx, src/**/*.json, apps/web/**/*.ts, apps/web/**/*.tsx"
description: "Standards for React, TypeScript, accessibility, and internationalization."
---

# Frontend Standards
- Small, focused components with typed props and state; no `any`.
- Feature-based organization.
- Every visible user-facing text must pass through the i18n system.
- `en` is complete and the source of truth; `es` must maintain the exact same keys.
- `lang="en"` by default; explicit `Intl` locale `en-US` or `es-BO`.
- Keyboard navigation, accessible aria-labels, sufficient contrast, and responsive layout.
- Do not translate code, identifiers, or API symbols.
