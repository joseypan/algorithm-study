/**
 * @param {number} n
 * @param {number[][]} relation
 * @param {number} k
 * @return {number}
 */
var numWays = function (n, relation, k) {
  // 这道题又有点触及只是盲区了，只能慢慢分析一下
  // 首先n表示一共有几个数，索引是从0~n-1之间
  // relation是一个二维数组，数组中的数组长度为2，表示能所A索引到达B索引的关联关系
  // k表示的是走几步能到
  // 那这样是不是要基于这个关联数组标记每一项如果要到达终点的步数？
  // 大致思路是需要把结束目的地相关的节点记录下来，并且对应节点的步数也要记录一下
  // 以0开头的步数都为1
  // 首先找到以n-1结束的项，其步数为前一项的步数+1
  // 还需要有个数组用来收集各自的步数
  let ways = 0;
  const edges = new Array(n).fill(0).map(() => new Array());
  for (const [src, dst] of relation) {
    edges[src].push(dst);
  }
  const dfs = (index, steps) => {
    if (steps === k) {
      if (index === n - 1) {
        ways++;
      }
      return;
    }
    const list = edges[index];
    for (const nextIndex of list) {
      dfs(nextIndex, steps + 1);
    }
  };
  dfs(0, 0);
  return ways;
};

numWays(
  5,
  [
    [0, 2],
    [2, 1],
    [3, 4],
    [2, 3],
    [1, 4],
    [2, 0],
    [0, 4],
  ],
  3
);
