// 【分析】
// 1、这道题其实也是一道组合题，需要遍历n大小的数组
// 2、先准备一个addedList数组用来统计收集情况，先默认都赋值给false，然后初始是从数组第一项开始，然后第二个数从第二项到最后一项。如果初始是从第二项开始，那么第二个数可能从第一个也可能从第三个，第四个...每一种情况都要考虑
/**
 * @param {number} n
 * @return {number}
 */
var countArrangement = function (n) {
  const result = [];
  const path = [];
  // addedList用来统计哪些数字已经被收集了
  const addedList = new Array(n).fill(false);
  backtracking(n, addedList, result, path);
  console.log("result", result);
  return result.length;
};
const backtracking = (n, addedList, result, path) => {
  if (path.length === n) {
    //说明都已经收集了
    result.push([...path]);
    return;
  }
  for (let i = 0; i < n; i++) {
    if ((i + 1) % (path.length + 1) !== 0 && (path.length + 1) % (i + 1))
      continue;
    if (addedList[i] === false) {
      addedList[i] = true;
      path.push(i + 1);
      backtracking(n, addedList, result, path);
      addedList[i] = false;
      path.pop();
    }
  }
};
countArrangement(3);
