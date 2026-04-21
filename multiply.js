/**
 * @param {number[]} numbers
 * @returns {number}
 */
export function multiplay(...numbers) {
  return numbers.reduce((product, n) => product * n, 1);
}
