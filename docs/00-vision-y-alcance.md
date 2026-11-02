# 00 — Vision and Scope: DevPath Academy (Plan Maestro v7)

## 1. Vision & Core Philosophy
**DevPath Academy** is a personal competency-based learning platform built step-by-step while the user learns Full Stack development.
Under **Plan Maestro v7**, DevPath abandons the long preparatory curriculum of v6 and begins building the actual platform from the very first increment.

- **Operating System & Shell:** EndeavourOS (Arch-based rolling release) + Zsh.
- **VCS & Remote:** Git / GitHub ([JuandevAT/learning_full_stack](https://github.com/JuandevAT/learning_full_stack)).
- **Development Agent:** Google Antigravity (IDE / CLI) with high autonomy for implementing approved features, testing, debugging, and teaching.
- **Budget:** Strict USD 0 (no billing, no paid APIs without explicit approval).
- **Default Language:** English (`en`) for UI and educational content; Spanish (`es`) as an integrated alternative.

---

## 2. Non-Negotiable Principles
1. **Build from the first increment:** Every learning session directly contributes to DevPath Academy.
2. **Just-in-time learning:** Learn the concepts needed before or during the implementation of each feature.
3. **High agent autonomy with controlled scope:** Antigravity analyzes, plans, implements complete features, tests, and explains.
4. **Evidence, not impressions:** Reading or AI chat does not count as mastery. Real evidence (tests, commits, independent tasks) is required.
5. **Zero budget:** No credit cards or metered cloud APIs without explicit approval.
6. **AI is optional:** The core learning workflows and platform must function 100% without an AI provider.
7. **Small verified increments:** Every feature must be testable and reviewable in a manageable scope.
8. **Security and privacy by design:** Zero hardcoded secrets; `.env` excluded from version control.
9. **Accessibility and i18n from Day 1:** English as source of truth with complete Spanish parity.
10. **Simple modular architecture:** Modular application before premature monorepos or microservices.
11. **Documented state ≠ implemented state:** Only code verified with automated tests is marked as complete.

---

## 3. Product Phases (Product Gates)

| Phase | Focus | What DevPath Academy Builds | Phase Gate |
|---|---|---|---|
| **Phase 0** | Preparation & Baseline | Environment, Git, diagnostic, Student Pack audit | Environment & Calibration Ready |
| **Phase 1** | Functional Skeleton | Runnable app, base layout, navigation, empty/demo dashboard, EN/ES toggle | **P1: Runnable Web App** |
| **Phase 2** | Pedagogical Core | Stable IDs, competency model, prerequisites, evidence logging, mastery state engine | **P2: Measurable Learning Engine** |
| **Phase 3** | Content & Practice | Modules, bite-sized lessons, linked resources, guided exercises with hint counter, rubrics | **P3: Interactive Lessons & Practice** |
| **Phase 4** | Spaced Repetition & Persistence | Daily SRS review queue (max 5/day), UTC scheduler, persistent progress, dashboard metrics | **P4: Continuity & Retention** |
| **Phase 5** | Backend & Security | HTTP API with Express, Zod validation, local PostgreSQL/Prisma, secure session auth | **P5: Persistent Multi-layer Platform** |
| **Phase 6** | Optional AI Tutor | Decoupled adapter layer, Socratic hints, concept explanations (Gemini / local) | **P6: Optional AI Assistance** |
| **Phase 7** | Quality & Portfolio | CI with GitHub Actions, Docker, OWASP audit, technical portfolio documentation | **P7: Release-Ready Portfolio** |

---

## 4. MVP Scope (MoSCoW)
- **Must Have:**
  - Runnable local web application and responsive navigation.
  - English default and complete Spanish alternative.
  - Initial catalog of modules and competencies with stable IDs.
  - Mastery state transitions (`not_started` -> `in_practice` -> `demonstrated` -> `mastered`).
  - Study session timer (60-minute protocol).
  - Daily spaced repetition reviews with 5-item limit.
  - Local persistence of user progress and preferences.
  - Automated tests verifying domain logic and i18n parity.
- **Should Have:**
  - JSON import/export of learning progress.
  - Exercise hint counter to differentiate guided practice from independent evidence.
  - E2E tests for core learning flows.
- **Could Have (Deferred):**
  - Optional AI tutor.
  - Strict immersion mode.
  - Isolated code sandbox.
