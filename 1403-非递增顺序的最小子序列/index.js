/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function (nums) {
  nums.sort((a, b) => b - a);
  const total = nums.reduce((prev, next) => prev + next, 0);
  let sum = 0;
  const list = [];
  for (let i = 0; i < nums.length; i++) {
    if (total - sum < sum) break;
    list.push(nums[i]);
    sum += nums[i];
  }
  return list;
};
