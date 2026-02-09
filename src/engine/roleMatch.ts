export function scoreRoleMatch(targetRole: string, resumeText: string): number {
  if (resumeText.toLowerCase().includes(targetRole.toLowerCase())) {
    return 18;
  }
  return 0;
}
