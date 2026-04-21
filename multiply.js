/**
 * @param {number[]} numbers
 * @returns {number}
 */
export function maultiply(...numbers) {
  return numbers.reduce((product, n) => product * n, 1);
}
