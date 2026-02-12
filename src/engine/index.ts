import { ResumeProfile, ScoreBreakdown } from "../types";
import { scoreExperience } from "./experience";
import { scoreSkills } from "./skills";
import { scoreRoleMatch } from "./roleMatch";
import { mlAssistRoleSimilarity } from "./mlAssist";


export function scoreResume(profile: ResumeProfile, resumeText: string, requiredSkills: string[])
  : { total: number, breakdown: ScoreBreakdown, ml: ReturnType<typeof mlAssistRoleSimilarity> } {
  
  //Optional usage if we want to weight different components differently in the future
  const WEIGHTS = {
    experience: 1,
    skills: 1,
    roleMatch: 1,
  };

  const breakdown: ScoreBreakdown = {
    experience: scoreExperience(profile.yearsOfExperience),
    skills: scoreSkills(profile.skills, requiredSkills),
    roleMatch: scoreRoleMatch(profile.targetRole, resumeText),
  };

  const ml = mlAssistRoleSimilarity(profile.targetRole, resumeText);

  const total =
    breakdown.experience * WEIGHTS.experience +
    breakdown.skills * WEIGHTS.skills +
    breakdown.roleMatch * WEIGHTS.roleMatch +
    ml.boost;

  return {
    total,
    breakdown,
    ml
  };
}
