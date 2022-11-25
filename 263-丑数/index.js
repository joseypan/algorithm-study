/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function (n) {
  if (n === 0) return false;
  if (n === 1) return true;
  const list = [2, 3, 5];
  for (let i = 0; i < list.length; i++) {
    if (n % list[i] === 0) {
      return isUgly(n / list[i]);
    } else {
      continue;
    }
  }
  return false;
};
