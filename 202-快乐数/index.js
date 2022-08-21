// 【分析】
// 1、按照快乐数的定义，我们需要对每一位都进行平方求和
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const map = new Map();
  let count = calculate(n);
  while (count !== 1 && !map.get(count)) {
    map.set(count, true);
    count = calculate(count);
  }
  if (count === 1) return true;
  return false;
};
function calculate(n) {
  let result = 0;
  while (Math.floor(n) > 0) {
    let count = n % 10;
    n = Math.floor(n / 10);
    result += Math.pow(count, 2);
  }
  return result;
}

const result = isHappy(2);
console.log("result", result);
