/**
 * @param {number[]} numbers
 * @returns {number}
 */
export function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}
