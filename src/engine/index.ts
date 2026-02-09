import { ResumeProfile, ScoreBreakdown } from "../types";
import { scoreExperience } from "./experience";
import { scoreSkills } from "./skills";
import { scoreRoleMatch } from "./roleMatch";
import { mlAssistRoleSimilarity } from "./mlAssist";


export function scoreResume(profile: ResumeProfile, resumeText: string, requiredSkills: string[])
  : { total: number, breakdown: ScoreBreakdown, ml: ReturnType<typeof mlAssistRoleSimilarity> } {
  const breakdown: ScoreBreakdown = {
    experience: scoreExperience(profile.yearsOfExperience),
    skills: scoreSkills(profile.skills, requiredSkills),
    roleMatch: scoreRoleMatch(profile.targetRole, resumeText),
  };

  const ml = mlAssistRoleSimilarity(profile.targetRole, resumeText);

  const total =
    breakdown.experience +
    breakdown.skills +
    breakdown.roleMatch +
    ml.boost;

  return {
    total,
    breakdown,
    ml
  };
}
