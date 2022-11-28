// 【分析】
// 1、需要判断这个数是不是完全平方数，如果是就为true如果不是则为false
// 2、如何才能判断出来呢？
/**
 * @param {number} num
 * @return {boolean}
 */
// var isPerfectSquare = function (num) {
//   let count = 1;
//   while (count * count < num) {
//     count++;
//   }
//   return count * count === num;
// };
var isPerfectSquare = function (num) {
  let left = 0;
  let right = num;
  while (left <= right) {
    const middle = Math.floor((right - left) / 2 + left);
    const count = middle * middle;
    if (count < num) {
      left = middle + 1;
    } else if (count > num) {
      right = middle - 1;
    } else {
      return true;
    }
  }
  return false;
};
