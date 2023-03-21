/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function (nums) {
  // 这道题需要扣特性 三角形的特性是 两边之和大于第三边 两边之差小于第三边
  // 又由于需要周长最大，我们不妨给nums先排序
  // 最大一定是相邻的三项
  nums.sort((a, b) => b - a);
  let roundLen = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    // 这里需要考虑一下满不满足条件
    if (
      nums[i + 2] + nums[i + 1] > nums[i] &&
      nums[i] - nums[i + 2] < nums[i + 1]
    ) {
      const total = nums[i] + nums[i + 1] + nums[i + 2];
      if (total > roundLen) roundLen = total;
    }
  }
  return roundLen;
};
largestPerimeter([1, 2, 1, 10]);
