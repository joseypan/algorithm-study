/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let lowestCount = prices[0];
  let profit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < lowestCount) {
      lowestCount = prices[i];
    }
    let diff = prices[i] - lowestCount;
    if (diff > profit) {
      profit = diff;
    }
  }
  return profit;
};
