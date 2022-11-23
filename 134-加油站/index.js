// 【分析】
// 1、这道题的题干说明就是这事一个环形路程
// 2、当我们不知道存不存在的时候可以考虑遍历
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
// var canCompleteCircuit = function (gas, cost) {
// const length = gas.length;
// let index = 0;
// while (index < length) {
//   let gasCount = 0;
//   let gasIndex = index;
//   // 用于记录循环次数的
//   let times = 0;
//   //分成两段
//   while (times < length) {
//     gasCount = gasCount + gas[gasIndex] - cost[gasIndex];
//     // 这里用break是跳出这次循环
//     if (gasCount < 0) break;
//     gasIndex = gasIndex === length - 1 ? 0 : gasIndex + 1;
//     times++;
//   }
//   if (gasCount >= 0) return index;
//   index++;
// }
// return -1;
// };
// 并不知道从哪开始？ ->
// 并且这个遍历是循环的 遍历到最后要回到索引为0开始 ->先确定起始坐标
var canCompleteCircuit = function (gas, cost) {
  // 首先，统计差值的和，如果说cost的和大于gas的和，那么无论怎么遍历，一定都走不到结束
  let totalSum = 0;
  let curSum = 0;
  let startIndex = 0;
  // 需要寻找从哪个出发点开始出发
  // 假设一开始从0出发，一旦出现前面的消耗累计<0则说明无法从当时的出发点出发，出发点应该在哪？出发点这时候定在i+1
  for (let i = 0; i < cost.length; i++) {
    curSum += gas[i] - cost[i];
    totalSum += gas[i] - cost[i];
    if (curSum < 0) {
      startIndex = i + 1;
      curSum = 0;
    }
  }
  if (totalSum < 0) result - 1;
  return startIndex;
};
const gas = [1, 2, 3, 4, 5],
  cost = [3, 4, 5, 1, 2];
let result = canCompleteCircuit(gas, cost);
console.log("result", result);
