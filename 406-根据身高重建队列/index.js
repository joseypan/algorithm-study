// 【分析】
// 1、要进行排序，应该要找到ki为0的先进行排序，然后还要进行插叙
// 2、难点在于当前值应该放在哪？
/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
  let queue = [];
  people.sort((a, b) => {
    if (b[0] !== a[0]) {
      return b[0] - a[0];
    } else {
      return a[1] - b[1];
    }
  });
  for (let i = 0; i < people.length; i++) {
    queue.splice(people[i][1], 0, people[i]);
  }
  return queue;
};
