// 【分析】
// 1、要使得卖出股票赚的最多，一定是极大值点 -> 所谓极大值就是当前值的左侧差>0而右侧差<0
// 2、要使得买入是最低价，则一定是极小值点 -> 左侧差<0 右侧差>0
// 3、两个端点怎么办呢？ -> 还需要考虑递增或递减的情况

/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function (prices) {
//   if (prices.length === 0) return 0; //先将最特殊的情况处理
//   let maxCount = 0;
//   let lastDiff = 0;
//   let buyPrice;
//   for (let i = 0; i < prices.length; i++) {
//     //这是右侧差(prices[i+1]可能会为undefined) -> 这样处理了右端点的情况，如果是最后一项则取0
//     const curDiff = prices[i + 1] === undefined ? 0 : prices[i + 1] - prices[i];
//     if (curDiff <= 0 && lastDiff > 0) {
//       //卖出的时机
//       buyPrice = buyPrice !== undefined ? buyPrice : prices[0];
//       maxCount += prices[i] - buyPrice;
//     } else if (curDiff >= 0 && lastDiff < 0) {
//       //这里需要考虑递增情况下
//       //买入的时机
//       buyPrice = prices[i];
//     }
//     lastDiff = curDiff;
//   }
//   return Math.max(maxCount, 0);
// };
// // const result = maxProfit([7, 1, 5, 3, 6, 4]);
// // console.log("result", result);
// // const result = maxProfit([1, 2, 3, 4, 5]);
// // console.log("result", result);

// const result = maxProfit([0, 5, 5, 6, 2, 1, 1, 3]);
// console.log("result", result);

var maxProfit = function (prices) {
  let result = 0;
  for (let i = 1; i < prices.length; i++) {
    result += Math.max(prices[i] - prices[i - 1], 0);
  }
  return result;
};
