/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
  // 最开始声明一个计数器
  let count = 0;
  let RCount = 0;
  let LCount = 0;
  // 规则是啥呢？判断起始标志是什么？因为是要求最大数量的，所以要对本次收集的R和L数量进行统计
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "R") {
      RCount++;
    } else {
      LCount++;
    }
    if (RCount === LCount && RCount !== 0) {
      count++;
      RCount = 0;
      LCount = 0;
    }
  }
  return count;
};
