export function overallDownloadPercentage(
  completedFiles: number,
  currentFilePercentage: number,
  totalFiles: number,
): number {
  if (totalFiles <= 0) return 100;

  const boundedCurrentProgress = Math.min(100, Math.max(0, currentFilePercentage));
  return Math.round(((completedFiles + boundedCurrentProgress / 100) / totalFiles) * 100);
}
