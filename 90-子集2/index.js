//【分析】
// 1、这种收集子集的基本上就是每一次操作都需要记录
// 2、但是这道题需要去重 -> 感觉和之前那道题一样。在于如何剪枝
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  const result = [];
  const path = [];
  const used = [];
  const backtracking = (startIndex) => {
    result.push(...[path]);
    if (startIndex >= nums.length) {
      return;
    }
    for (let i = startIndex; i < nums.length; i++) {
      //这里需要进行判断
      if (i > 0 && nums[i] === nums[i - 1] && used[i - 1] === false) {
        continue;
      }
      used[i] = true;
      path.push(nums[i]);
      backtracking(i + 1);
      used[i] = false;
      path.pop();
    }
  };
  nums.sort((a, b) => a - b); //先进行排序，才能让相同的元素相邻
  backtracking(0);
  return result;
};
