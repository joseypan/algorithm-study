// 【分析】
// 1、按照回溯三部曲的确算出了部分答案，但是这道题存在一个问题，给出的集合中是有重复元素的，即使我们是一直往后推进，也会出现解集重复的问题
// 2、这个问题应该如何避免呢？在result.push的时候遍历之前的结果？判断是否是相同元素？
// 判断两个数组是否包含的元素相同？感觉这个也不太好判断，可能又是一个双重for循环了,而且在加上result是一个二维数组。。。

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  const result = [];
  const path = [];
  let totalCount = 0;
  //这里用一个map收集一下组合？
  const map = new Map();
  const backtraking = (startIndex) => {
    //终止条件 totalCount > target -> return totalCount === target -> 收集+return
    if (totalCount > target) return;
    if (totalCount === target) {
      const item = path.sort((a, b) => {
        return a - b;
      });
      if (!map.has(item.join())) {
        //说明已经收集过了
        result.push([...item]);
        map.set(item.join(), item);
      }
      return;
    }
    for (let i = startIndex; i < candidates.length; i++) {
      path.push(candidates[i]);
      totalCount += candidates[i];
      backtraking(i + 1);
      path.pop();
      totalCount -= candidates[i];
    }
  };
  backtraking(0);
  return result;
};

const result = combinationSum2([10, 1, 2, 7, 6, 1, 5], 8);
console.log("result", result);
