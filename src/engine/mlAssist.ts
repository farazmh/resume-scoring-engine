export type MLSimilarityResult = {
  similarity: number; // 0.0 → 1.0
  boost: number;      // points added
};

export function mlAssistRoleSimilarity(role: string, resumeText: string): MLSimilarityResult {
  // placeholder for embedding-based similarity
  const normalizedText = resumeText.toLowerCase();
  const normalizedRole = role.toLowerCase();

  const similarity = normalizedText.includes(normalizedRole) ? 0.85 : 0.4;

  const boost = similarity > 0.8 ? 6 : similarity > 0.6 ? 3 : 0;

  return { similarity, boost };
}
