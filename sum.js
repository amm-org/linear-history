/**
 * @param {number[]} numbers
 * @returns {number}
 */
export function soma(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}
