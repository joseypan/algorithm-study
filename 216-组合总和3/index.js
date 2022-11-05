// 【分析】
// 1、这道题要求是使用1-9的数实现k个数相加为n,把所有满足情况的数据返回
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  const result = []; //用来收集结果的容器
  const path = [];
  let totalCount = 0;
  const backtracking = (k, n, startIndex) => {
    if (path.length === k) {
      //终止条件是什么？收集的个数等于k了
      //需要考虑一下收不收集 -> 若总和为n则收集，我们可以用一个全局来收集总和，这样就不用每次都重新计算 ->优化
      if (totalCount === n) {
        result.push([...path]);
      }
      return;
    }
    for (let i = startIndex; i <= 9 - (k - path.length) + 1; i++) {
      path.push(i);
      totalCount += i;
      if (totalCount > n) {
        //已经大于了，不需要继续递归了
        path.pop();
        totalCount -= i;
        return;
      }
      backtracking(k, n, i + 1, path);
      //这里回退走两个步骤
      path.pop();
      totalCount -= i;
    }
  };
  backtracking(k, n, 1);
  return result;
};
const result = combinationSum3(3, 7);
console.log("result", result);
