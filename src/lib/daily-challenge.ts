function hashDate(dateStr: string): number {
  let hash = 0;
  for (let i = 0; i < dateStr.length; i++) {
    const char = dateStr.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  return Math.abs(hash);
}

export function getDailyChallengeModelId(
  allModelIds: string[],
  date?: Date
): string {
  const dateStr = (date ?? new Date()).toISOString().slice(0, 10);
  const index = hashDate(dateStr) % allModelIds.length;
  return allModelIds[index];
}
