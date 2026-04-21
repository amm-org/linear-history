/**
 * @param {number[]} numbers
 * @returns {number}
 */
export function multiply(...numbers) {
  return numbers.reduce((product, n) => product * n, 1);
}
