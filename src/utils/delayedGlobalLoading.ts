import { useGlobalLoading } from "@/hooks/useGlobalLoading";

export const withDelayedGlobalLoading = async <T>(
  promise: Promise<T>,
  delay = 300 // ms 기준, 300ms 이후에만 로딩 표시
): Promise<T> => {
  const { startGlobalLoading, stopGlobalLoading } = useGlobalLoading.getState();

  let timeoutId: NodeJS.Timeout | null = null;

  timeoutId = setTimeout(() => {
    startGlobalLoading();
  }, delay);

  try {
    const result = await promise;
    return result;
  } finally {
    if (timeoutId) clearTimeout(timeoutId);
    stopGlobalLoading();
  }
};
