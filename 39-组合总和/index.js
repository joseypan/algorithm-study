// 【分析】
// 1、这道题像是求两数之和题目演化过来的
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

var combinationSum = function (candidates, target) {
  const result = [];
  const path = [];
  backtracking(candidates, target, 0, result, path);
  return result;
};

const backtracking = (candidates, target, startIndex, result, path) => {
  const sum = path.reduce((cur, prev) => cur + prev, 0);
  console.log(sum, path, candidates[startIndex], target);
  if (sum === target) {
    result.push([...path]);
    return;
  } else if (sum > target) {
    return;
  }
  for (let i = startIndex; i < candidates.length; i++) {
    path.push(candidates[i]);
    backtracking(candidates, target, i, result, path);
    path.pop();
  }
};

const result = combinationSum([2, 3, 6, 7], 7);
console.log("result", result);
