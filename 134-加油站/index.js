// 【分析】
// 1、这道题的题干说明就是这事一个环形路程
// 2、当我们不知道存不存在的时候可以考虑遍历
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  const length = gas.length;
  let index = 0;
  while (index < length) {
    let gasCount = 0;
    let gasIndex = index;
    // 用于记录循环次数的
    let times = 0;
    //分成两段
    while (times < length) {
      gasCount = gasCount + gas[gasIndex] - cost[gasIndex];
      // 这里用break是跳出这次循环
      if (gasCount < 0) break;
      gasIndex = gasIndex === length - 1 ? 0 : gasIndex + 1;
      times++;
    }
    if (gasCount >= 0) return index;
    index++;
  }
  return -1;
};
const gas = [1, 2, 3, 4, 5],
  cost = [3, 4, 5, 1, 2];
let result = canCompleteCircuit(gas, cost);
console.log("result", result);
