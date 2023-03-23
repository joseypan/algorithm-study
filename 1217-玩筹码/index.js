/**
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function (position) {
  // 这道题要使得代价最小则需要确保以最大个数筹码的为基准
  let even = 0;
  let odd = 0;
  for (let i = 0; i < position.length; i++) {
    if (position[i] % 2 === 1) {
      odd++;
    } else {
      even++;
    }
  }
  return Math.min(odd, even);
};
