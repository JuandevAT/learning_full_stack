# DevPath Academy — Project Instructions

## Mission
Build DevPath Academy directly as a learning product. Teach the user the concepts
needed for each feature while implementing the approved scope.

## Environment and constraints
- EndeavourOS + Zsh; Git/GitHub; Google Antigravity.
- Maximum 7 hours/week; Friday is a full rest day.
- Base budget: USD 0.
- Never enable billing, add a payment method, or use metered services without
  explicit user approval.
- Do not install tools before the current feature needs them.

## Agent autonomy
- High autonomy: analyze, plan, implement complete approved features, test,
  debug, document, and explain.
- Keep changes scoped to the approved feature.
- Ask before destructive commands, global/system changes, external publication,
  billing, credentials, major dependencies, or stack changes.
- Never claim tests passed unless they were actually run.

## Integrated learning
- Identify 1–3 key concepts before each feature.
- Explain the concepts briefly, then implement the approved feature.
- Explain changed files, design decisions, tests, and remaining limitations.
- Ask the user to explain or modify a small part.
- Do not solve independent assessments or anti-copy exercises.

## Product invariants
- English (`en`) is the default UI and learning-content language.
- Spanish (`es`) is supported; `en` is the source of truth.
- UI and learning-content locale are independent.
- Progress and evidence use stable IDs, never translated text.
- Core learning workflows must work without an AI provider.
- Evidence, not activity or AI conversation, determines mastery.
- No microservices in the MVP.
- Never execute arbitrary student code in the main process; no eval().
- Prefer TypeScript strictness; do not introduce `any` deliberately.
- Validate untrusted input and protect secrets.
- Accessibility, responsive design, tests, and i18n are part of acceptance.

## Session continuity
- At start: read docs/ESTADO.md, inspect git status and recent commits.
- Before implementation: state scope, acceptance criteria, risks, and learning concepts.
- At finish: run relevant tests, summarize verified results, update docs/ESTADO.md,
  and propose a commit message.
- Distinguish planned, implemented, tested, and accepted work.
