# Resume Scoring Engine

Explainable resume and profile scoring API that combines deterministic rules with ML-assisted signals to help hiring teams make consistent, auditable decisions.

---

## 🚀 Badges

![Node.js](https://img.shields.io/badge/Node.js-18%2B-green) ![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue) ![Status](https://img.shields.io/badge/Status-MVP%20Complete-brightgreen) ![Architecture](https://img.shields.io/badge/Architecture-Explainable%20AI-orange)
---

## Problem

Hiring decisions are often subjective, inconsistent, and hard to explain.
Pure black-box AI models reduce trust, make audits difficult, and are risky in enterprise hiring workflows.

---

## Solution

An **explainable scoring engine** that:

* Uses clear, deterministic rules as the primary signal
* Adds ML-assisted signals only as a bounded boost
* Produces a transparent score breakdown with human-readable explanations

Rules stay in control. ML assists — it does not decide.

---

## How It Works

1. Resume or profile data is ingested as structured input
2. Rule engine scores:

   * Years of experience
   * Skill match
   * Role match
3. ML assist computes a lightweight semantic similarity signal
4. Scores are weighted and composed into a final decision

---

## Example Output

```json
{
  "total": 82,
  "breakdown": {
    "experience": 30,
    "skills": 28,
    "roleMatch": 18
  },
  "ml": {
    "similarity": 0.85,
    "boost": 6
  }
}
```

---

## Why Explainable Matters

* Easier audits and compliance
* Higher recruiter trust
* Safer enterprise adoption
* Clear reasoning during interviews and client discussions

---

## Tech Stack

* Node.js
* TypeScript
* Express

---

## Project Structure

```
src/
  engine/
    experience.ts
    skills.ts
    roleMatch.ts
    mlAssist.ts
    index.ts
  types.ts
  server.ts
```

---

## Setup

### Prerequisites

* Node.js 18+ (Node 22 recommended)
* npm

### Install dependencies

```bash
npm install
```

(Dependencies include `express`, `@types/express`, `typescript`)

### Build

```bash
npm run build
```

### Run

```bash
npm run dev
```

Server starts on port **3000**.

---

## API Usage

### POST /score

```bash
curl -X POST http://localhost:3000/score \
  -H "Content-Type: application/json" \
  -d '{
    "profile": {
      "yearsOfExperience": 11,
      "skills": ["node.js", "typescript", "oauth", "aws"],
      "targetRole": "backend engineer"
    },
    "resumeText": "Senior backend engineer with IAM and OAuth experience",
    "requiredSkills": ["node.js", "typescript", "aws"]
  }'
```

---

## Design Principles

-   Deterministic first, ML second
-   Pure functions
-   No hidden magic
-   Easy to extend and reason about

------------------------------------------------------------------------

## Notes

This project is intentionally simple and serves as a base to expand into
ML-driven resume scoring engines.
