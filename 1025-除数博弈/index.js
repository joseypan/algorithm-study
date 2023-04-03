/**
 * @param {number} n
 * @return {boolean}
 */
var divisorGame = function (n) {
  // 首先爱丽丝先动手，要使得爱丽丝赢，则必要条件是爱丽丝能选择x，且n % x === 0 && n-x===1
  // 首先这个数不是奇数就是偶数，问题是怎么找到一个表达式方程呢？
  // an(n-1) = a(n) - x1;
  // an(n-2) = a(n-1) - x2;
  // a(n) % x === 0;
  // an(n-1) = a * x -x;
  const dps = []; //用来收集结果（这个基本上是动态规划题的必备）
  // 题目已知 为1的情况
  dps[1] = false;
  dps[2] = true;
  for (let i = 3; i <= n; i++) {
    dps[i] = false; //默认为false
    for (let j = 1; j < i; j++) {
      // 这里是穷举bob可能会出的情况 -> bob会输
      if (i % j === 0 && !dps[i - j]) {
        dps[i] = true;
        break;
      }
    }
  }
  return dps[n];
};
