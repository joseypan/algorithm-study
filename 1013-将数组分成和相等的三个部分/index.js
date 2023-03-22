/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canThreePartsEqualSum = function (arr) {
  // 这道题需要将arr分成三个部分的值要相同，首先算出arr的总和，再除以3，就是每个部分的和。若除完之后不为整数则返回false
  // 然后遍历arr,通过大小判断不合适，因为有可能前面大后面减少
  // 同时这道题是不能够打乱数组顺序的
  const total = arr.reduce((prev, cur) => prev + cur, 0);
  const partTotal = total === 0 ? 0 : total / 3;
  console.log("total", total, partTotal, Math.floor(partTotal));
  if (partTotal !== Math.floor(partTotal)) return false;
  let curCount = 0;
  let collectedNum = 0;
  for (let i = 0; i < arr.length; i++) {
    curCount += arr[i];
    console.log("curCount-prev", curCount, collectedNum);
    collectedNum = curCount === partTotal ? collectedNum + 1 : collectedNum;
    curCount = curCount === partTotal ? 0 : curCount;
    console.log("curCount-after", curCount, collectedNum);
  }
  return collectedNum >= 3;
};

const result = canThreePartsEqualSum([0, 0, 0, 0]);
console.log("result", result);
