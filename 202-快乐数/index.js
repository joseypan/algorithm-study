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

// 一旦这个数之前出现过了，则说明进入循环了
var isHappy = function (n) {
  const set = new Set();
  let num = n;
  while (num !== 1) {
    // 需要一位一位的取
    let curCount = num;
    let total = 0;
    while (Math.floor(curCount) > 0) {
      const number = curCount % 10;
      curCount = Math.floor(curCount / 10);
      total += number * number;
    }
    // 加入set，看size是否变化
    const setSize = set.size;
    num = total;
    set.add(num);
    if (setSize === set.size) return false;
  }
  return true;
};
