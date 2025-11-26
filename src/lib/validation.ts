/**
 * Validates an Iranian National Code (Code Melli).
 *
 * @param code The national code string to validate
 * @returns true if valid, false otherwise
 */
export function isValidNationalCode(code: string): boolean {
  if (!code || code.length !== 10 || !/^\d+$/.test(code)) {
    return false
  }

  // Check for repeated digits (often considered invalid)
  if (/^(\d)\1+$/.test(code)) {
    return false
  }

  const check = parseInt(code[9])
  const sum =
    code
      .split("")
      .slice(0, 9)
      .reduce((acc, x, i) => acc + parseInt(x) * (10 - i), 0) % 11

  return sum < 2 ? check === sum : check === 11 - sum
}
