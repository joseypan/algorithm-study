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
const backtracking = (n, k, startIndex, result, path) => {
  if (path.length === k) {
    result.push(path);
    return;
  }
  for (let i = startIndex; i <= n; i++) {
    path.push(i);
    backtracking(n, k, startIndex + 1, result, path);
    path.pop();
  }
};

let result = combine(4, 2);
console.log("result", result);
