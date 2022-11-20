/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  if (nums.length === 1) return 1;
  let minStep = Infinity;
  let cover = 0;
  let step = 0;
  for (let i = 0; i <= cover; i++) {
    if (i + nums[i] > cover) {
      cover = i + nums[i];
      step++;
    }
    if (cover >= nums.length) {
      minStep = Math.min(minStep, step);
    }
  }
  return minStep;
};
