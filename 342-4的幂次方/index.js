// 【分析】
// 1、这道题是要判断是不是4的幂次方，首先我们看一下4的幂次方有哪些特点
// 2、 1->4^0 --> 00000001 4->4^1 --> 00000100 16->4^2 --> 00100000
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
  let count = 0;
  while (count < 32) {
    if (n === 1 << count) {
      return true;
    }
    count = count + 2;
  }
  return false;
};
const result = isPowerOfFour(16);
console.log("result", result);
