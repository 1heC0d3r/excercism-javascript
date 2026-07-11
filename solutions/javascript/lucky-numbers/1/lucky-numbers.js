// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let sum1 = "";
  for (let index = 0; index < array1.length; index++) {
    sum1 = sum1 + array1[index];
  }
  let sum2 = "";
  for (let index = 0; index < array2.length; index++) {
    sum2 = sum2 + array2[index];
  }
  return Number(sum1) + Number(sum2);
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  var numStr = String(value);
  const reversed = numStr.split('').reverse().join('');
    return value === Number(reversed);
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if(!input) {
    return 'Required field';
  }

  if (Number.isNaN(Number(input)) || Number(input) === 0) {
    return 'Must be a number besides 0';
  }

  return '';
}
