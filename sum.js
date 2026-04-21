/**
 * @param {number[]} numbers.
 * @returns {number}
 */
export function sumAll(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}
