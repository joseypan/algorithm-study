// 【分析】
// 1、只要每次修改最小值即可
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function (nums, k) {
  //可以先排序(从小到大排列)
  for (let i = 0; i < k; i++) {
    nums.sort((a, b) => a - b);
    nums[0] = -nums[0];
  }
  const total = nums.reduce((cur, prev) => (cur += prev), 0);
  return total;
};
