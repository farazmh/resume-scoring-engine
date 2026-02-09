export function scoreExperience(years: number): number {
  if (years >= 10) return 30;
  if (years >= 7) return 24;
  if (years >= 4) return 16;
  if (years >= 2) return 8;
  return 0;
}
