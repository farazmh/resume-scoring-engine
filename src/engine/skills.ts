export function scoreSkills(candidateSkills: string[], requiredSkills: string[]): number {
  const matched = candidateSkills.filter(skill => requiredSkills.includes(skill.toLowerCase())).length;

  return Math.min(matched * 4, 28);
}
