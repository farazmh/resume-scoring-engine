import { ResumeProfile, ScoreBreakdown } from "../types";
import { scoreExperience } from "./experience";
import { scoreSkills } from "./skills";
import { scoreRoleMatch } from "./roleMatch";

export function scoreResume(profile: ResumeProfile, resumeText: string, requiredSkills: string[])
  : { total: number; breakdown: ScoreBreakdown } {
  const breakdown: ScoreBreakdown = {
    experience: scoreExperience(profile.yearsOfExperience),
    skills: scoreSkills(profile.skills, requiredSkills),
    roleMatch: scoreRoleMatch(profile.targetRole, resumeText),
  };

  const total = breakdown.experience + breakdown.skills + breakdown.roleMatch;

  return { total, breakdown };
}
