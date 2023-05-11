/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  const ans = new Array(n).fill(0).map((ele) => new Array(n).fill(0));
  let startX = 0;
  let startY = 0;
  let loop = Math.floor(n / 2);
  let middle = Math.floor(n / 2);
  let offset = 1;
  let count = 1;
  let i, j;

  while (loop--) {
    for (j = startY; j < n - offset; j++) {
      ans[startX][j] = count++;
    }
    for (i = startX; i < n - offset; i++) {
      ans[i][j] = count++;
    }
    for (; j > startY; j--) {
      ans[i][j] = count++;
    }
    for (; i > startX; i--) {
      ans[i][j] = count++;
    }
    startX++;
    startY++;
    offset++;
  }
  if (n % 2 === 1) {
    ans[middle][middle] = count++;
  }
  return ans;
};
