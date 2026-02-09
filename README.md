# Resume Scoring Engine

Explainable resume and profile scoring API that combines deterministic rules with ML-assisted signals to help hiring teams make consistent decisions.

## Problem
Hiring decisions are often subjective, inconsistent, and hard to explain.
Black-box AI models reduce trust and accountability.

## Solution
A scoring engine that:
- Uses clear, deterministic rules first
- Augments with lightweight ML signals
- Produces a transparent score breakdown with explanations

## How It Works
1. Resume/profile is ingested as structured data
2. Rule engine scores experience, skills, and role fit
3. ML layer provides semantic similarity boost
4. Scores are weighted and composed into a final decision

## Example Output
```json
{
  "score": 82,
  "decision": "strong_match",
  "breakdown": {
    "experience": 30,
    "skills": 28,
    "role_match": 18,
    "ml_boost": 6
  }
}
