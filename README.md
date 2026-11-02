# DevPath Academy

> A personal, competency-based learning platform built step-by-step as part of the journey to Junior Full Stack Engineer.

[![License: UNLICENSED](https://img.shields.io/badge/License-UNLICENSED-yellow.svg)](#)
[![Node.js Version](https://img.shields.io/badge/Node.js-v24.21.0-brightgreen.svg)](#)
[![Status: Stage 0](https://img.shields.io/badge/Status-Stage%200%20(Setup)-blue.svg)](#)

---

## 1. Overview & Core Philosophy

**DevPath Academy** follows a single integrated track: **each stage teaches a core technology and simultaneously builds the component of the platform that uses it**. The curriculum always stays one step ahead of the code being written.

### Non-Negotiable Principles:
1. **Learn Before Generating:** The agent acts as a Socratic tutor and reviewer; code product autonomy is strictly tiered by stage.
2. **Evidence, Not Impressions:** Passive reading or chatting with the AI does not count towards competency mastery. Mastery requires independent problem solving and practical application.
3. **Zero Budget ($0 USD):** No paid APIs, billing profiles, or cloud services with variable pricing without explicit approval.
4. **AI is Optional:** The entire study routine and platform operate cleanly without reliance on proprietary AI APIs.
5. **Small Verified Increments:** One tested, understood micro-deliverable per 60-minute session.
6. **Domain First, Interface Second:** Core domain logic is written as pure, tested TypeScript before creating UI components.
7. **Security, Accessibility, and i18n from Day 1:** English (`en`) is the default language for UI and educational content; Spanish (`es`) is an alternative support language.
8. **Documented State ≠ Implemented State:** Tasks are never declared done until verified with real tests and files in the repository.

---

## 2. Roadmap at a Glance

| Stage | Weeks | Focus | What DevPath Academy Builds | Milestone |
|---|---|---|---|---|
| **0. Setup** | 0 | Linux, Git, Diagnostics & Student Pack | Initial repo, rules, skills, diagnostic route | **Environment Ready** |
| **1. Fundamentals** | 1–12 | JavaScript, TypeScript, Vitest, Node CLI | DevPath CLI in a single package (`src/domain`, `src/cli`) | **H1: Verified CLI Core** |
| **2. Web** | 13–29 | HTML/CSS, React (6 weeks), Router, Tailwind, i18n | DevPath Web (refactored to pnpm workspaces at week 16) | **H2: Bilingual Web App** |
| **3. Backend & Data** | 30–46 | HTTP, Express, SQL, local PostgreSQL, Prisma, Auth | REST API + Relational DB + Secure Authentication | **H3: Persistent MVP with Auth** |
| **Consolidation** | 47–48 | Environment audit, migrations from scratch, stabilization | Reproducible, bullet-proof H3 platform | **Technical Gate** |
| **4. Academy** | 49–64 | Curricula, evidences, rubric evaluations, SRS, E2E | Full functional DevPath Academy MVP | **H4: Complete MVP** |
| **5. Engineering** | 65–76 | Advanced Git, GitHub Actions CI, Docker, Networking, OWASP | Maintainable, production-ready release | **H5: Documented Release** |
| **6. Employability** | 77–88 | Second differential project, CV, technical English, interviews | Polished DevPath + 2nd project in portfolio | **H6: Job-ready Portfolio** |

---

## 3. Weekly Study Routine (7 Hours Max)

- **Monday – Thursday (60 min/day):**
  - 10 min: Active recall (1–2 questions without assistance).
  - 15 min: Concept reading (including official technical docs in English).
  - 25 min: Deliberate practice (student writes logic; agent offers progressive hints).
  - 10 min: Testing, explanation in own words, and logging.
- **Friday (0 min):** Full rest.
- **Saturday (30 min):** Weekly review, anti-copy verification test, and spoken technical English practice (from Stage 2 onward).
- **Sunday (150 min):** Dedicated project block (50 min sprints with pauses: integrate, test, debug, and document).

---

## 4. Repository Structure (Stage 0–1)

```text
learnfullstack/
├── .agents/
│   └── skills/
│       ├── sesion-diaria/SKILL.md
│       ├── revision-semanal/SKILL.md
│       └── diagnostico/SKILL.md
├── docs/
│   ├── adr/
│   │   ├── 0001-stack-inicial.md
│   │   └── 0002-antigravity-customizations.md
│   ├── ESTADO.md
│   ├── 00-vision-y-alcance.md
│   ├── diagnostico-inicial.md
│   ├── mercado-laboral.md
│   └── beneficios-github-estudiante.md
├── AGENTS.md
├── .gitignore
├── .node-version
├── package.json
└── README.md
```

*Note: Workspaces (`packages/core`, `apps/cli`, `apps/web`) and backend services (`apps/api`) are not created prematurely; they will be introduced as explicit refactors in Stage 2 (Week 16) and Stage 3 (Week 30).*

---

## 5. Getting Started

### Repository
- **Remote:** [https://github.com/JuandevAT/learning_full_stack](https://github.com/JuandevAT/learning_full_stack)
- **Clone:** `git clone https://github.com/JuandevAT/learning_full_stack.git`

### Prerequisites
- OS: EndeavourOS / Linux
- Node.js LTS (pinned via `.node-version`)
- Git >= 2.40

### Starting a Session with Google Antigravity
To initiate any study session in Antigravity, use the standard prompt:

```text
Continue DevPath Academy. Read AGENTS.md and docs/ESTADO.md, inspect git status and verify the real project state before proposing anything. Summarize where we are and propose ONE micro-deliverable that fits the current session. Start with active recall. Follow the language policy and the autonomy limits for the current stage; do not write assessed solutions.
```
