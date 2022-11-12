// 【分析】
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums) {
  const result = [];
  const path = [];
  const backtracking = (startIndex) => {
    if (path.length > 1) {
      result.push([...path]);
    }
    if (startIndex >= nums.length) {
      return;
    }
    const map = new Map();
    for (let i = startIndex; i < nums.length; i++) {
      if (
        (path.length > 0 && nums[i] < path[path.length - 1]) ||
        map.get(nums[i]) !== undefined
      ) {
        continue;
      }
      path.push(nums[i]);
      map.set(nums[i], nums[i]);
      backtracking(i + 1);
      path.pop();
    }
  };
  backtracking(0);
  return result;
};

const result = findSubsequences([4, 6, 7, 7]);
console.log("result", result);
