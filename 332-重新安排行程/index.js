// 【分析】
// 1、方法传入的ticket是一个二维数组，并且题目要求必须从JFK开始，所以优先找到JFK起始的航线,但是以JFK的线路不一定只有一个
// 2、首先完成第一个用例的思路 -> 优化成第二个用例的思路
/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function (tickets) {
  const result = [];
  const path = [];
  const used = new Array(tickets.length).fill(false);
  const backTracking = (startPlace) => {
    console.log("length", path.length, tickets.length);
    if (path.length > tickets.length) {
      console.log("---------------");
      console.log("expend path", [...path]);
      result.push(...path);
      return; //说明收集结束
    }
    for (let i = 0; i < tickets.length; i++) {
      if (used[i] === true || tickets[i][0] !== startPlace) continue;
      path.push(tickets[i][0]);
      used[i] = true;
      backTracking(tickets[i][1]);
      used[i] = false;
      path.pop();
    }
  };
  backTracking("JFK");
  return result;
};
const result = findItinerary([
  ["MUC", "LHR"],
  ["JFK", "MUC"],
  ["SFO", "SJC"],
  ["LHR", "SFO"],
]);
console.log("result", result);
// const result = findItinerary([
//   ["JFK", "SFO"],
//   ["JFK", "ATL"],
//   ["SFO", "ATL"],
//   ["ATL", "JFK"],
//   ["ATL", "SFO"],
// ]);
// console.log("result", result);
