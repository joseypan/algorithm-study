/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const result = [];
  const path = [];
  const used = [];
  backtracking(nums, used, result, path);
  return result;
};
const backtracking = (nums, used, result, path) => {
  if (path.length === nums.length) {
    result.push([...path]);
    return;
  }
  for (let i = 0; i < nums.length; i++) {
    if (used[i] === true) continue;
    used[i] = true;
    path.push(nums[i]);
    backtracking(nums, used, result, path);
    path.pop();
    used[i] = false;
  }
};
