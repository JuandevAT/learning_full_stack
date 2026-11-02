# DevPath Academy

> A personal, competency-based learning platform built step-by-step as an integrated path to Junior Full Stack Engineer (Plan Maestro v7).

[![License: UNLICENSED](https://img.shields.io/badge/License-UNLICENSED-yellow.svg)](#)
[![Node.js Version](https://img.shields.io/badge/Node.js-v24.21.0-brightgreen.svg)](#)
[![Status: Phase 1](https://img.shields.io/badge/Status-Phase%201%20(Functional%20Skeleton)-blue.svg)](#)
[![Language: Bilingual](https://img.shields.io/badge/Language-EN%20%7C%20ES-purple.svg)](#)

---

## 1. Overview & Vision (Plan Maestro v7)

**DevPath Academy** follows a **direct build-and-learn model**: the platform is developed from the very first increment while teaching the user the essential concepts needed for each feature.

### Core Principles
1. **Build From Day One:** No lengthy theoretical pre-courses or separate CLI prototypes; the real web platform starts immediately.
2. **Just-In-Time Learning:** Learn 1–3 central concepts with each feature increment.
3. **High Agent Autonomy:** Google Antigravity analyzes, plans, implements complete features, runs automated tests, and explains all changes.
4. **Evidence, Not Impressions:** Domain mastery is tracked via independent problem solving and verifiable evidence.
5. **Zero Budget ($0 USD):** Zero reliance on paid third-party APIs or credit cards.
6. **Bilingual by Default:** English (`en`) as the primary language and source of truth, with full Spanish (`es`) parity.
7. **AI is Optional:** The entire platform functions completely without proprietary AI APIs.

---

## 2. Product Roadmap (Phases)

- **Phase 0: Preparation & Baseline** — Environment setup, Git connection, diagnostic, and Student Pack audit.
- **Phase 1: Functional Skeleton** — Runnable React application, layout, dashboard, navigation, and EN/ES language toggle.
- **Phase 2: Pedagogical Core** — Stable competency IDs, prerequisite tree, evidence logging, and mastery state machine.
- **Phase 3: Content & Practice** — Learning modules, interactive lessons, curated external resources, and guided exercises with hint tracking.
- **Phase 4: Spaced Repetition & Retention** — Daily 5-item SRS review queue, UTC scheduling, and progress persistence.
- **Phase 5: Backend & Security** — Express REST API, Zod input validation, and local PostgreSQL / Prisma persistence.
- **Phase 6: Optional AI Tutor** — Decoupled provider-agnostic Socratic tutor (Gemini / local Ollama).
- **Phase 7: Engineering & Portfolio** — GitHub Actions CI, Docker containerization, security audit, and public demo.

---

## 3. Tech Stack (Phase 1)

- **Runtime:** Node.js LTS (v24.21.0 pinned via `.node-version`)
- **Frontend:** React 19 + TypeScript + Vite
- **Styling:** Tailwind CSS + Lucide React
- **Testing:** Vitest
- **Repository:** [JuandevAT/learning_full_stack](https://github.com/JuandevAT/learning_full_stack)

---

## 4. Getting Started

```bash
# Clone the repository
git clone https://github.com/JuandevAT/learning_full_stack.git
cd learning_full_stack

# Install dependencies (Phase 1)
npm install

# Start local development server
npm run dev

# Run automated tests
npm test
```
