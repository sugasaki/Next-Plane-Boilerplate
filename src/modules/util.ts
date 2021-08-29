/**
 * Timeout
 * ex. await timeout(1000)
 * @param ms
 * @returns
 */
export const timeout = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
