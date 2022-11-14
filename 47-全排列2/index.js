/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const result = [];
  const path = [];
  const used = new Array(nums.length).fill(false);
  const backtracking = () => {
    if (path.length === nums.length) {
      result.push([...path]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (
        used[i] === true ||
        (i > 0 && nums[i - 1] === nums[i] && used[i - 1] === true)
      )
        continue;
      used[i] = true;
      path.push(nums[i]);
      backtracking();
      path.pop();
      used[i] = false;
    }
  };
  nums.sort((a, b) => a - b);
  backtracking();
  return result;
};

const result = permuteUnique([1, 1, 2]);
console.log("result", result);
