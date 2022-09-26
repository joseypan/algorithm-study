/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const result = [];
  const path = [];
  backtracking(n, k, 1, result, path);
  return result;
};
// n表示是从1-n这么大的数，k表示这个组合数组的长度为多少
const backtracking = (n, k, startIndex, result, path) => {
  if (path.length === k) {
    result.push([...path]);
    return;
  }
  for (let i = startIndex; i <= n; i++) {
    path.push(i);
    backtracking(n, k, i + 1, result, path);
    path.pop();
  }
};

let result = combine(4, 2);
console.log("result", result);
