// 【分析】
// 1、根据这道题来说假设我输入的是[1,2,3],其收集过程是怎样的？
// 2、应该是遍历nums，起始是从startIndex开始的，然后每一项都继续收集，直到startIndex
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const result = [];
  const path = [];
  backtracking(nums, 0, result, path);
  return result;
};
const backtracking = (nums, startIndex, result, path) => {
  //结束条件是什么呢？是否是判断上一个
  result.push([...path]);
  if (startIndex >= nums.length) {
    return;
  }
  for (let i = startIndex; i < nums.length; i++) {
    path.push(nums[i]);
    backtracking(nums, i + 1, result, path);
    path.pop();
  }
};
const result = subsets([1, 2, 3]);
console.log("result", result);
