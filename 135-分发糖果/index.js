// 【分析】
// 1、题目要求准备最少得糖果数目 -> 两两相比较评分高的有更多的糖果，最少也有1个
// 2、按照比较抠门的方案，当然是小的是1，大的是2
// [1,2,3] -> 如果1是1,2就是2
// 这道题得确认递增的过程,但是递增过程不一定是跨步1,是不是得从定位递增 ->定位递减
// 若当前点的左侧是递增，右侧是递减，右侧可以认为是1吗？也不一定，一定是极小值点是1
// 所谓极小值点是左边递减，右边递增
// 换个思路，每个人至少有一个糖果，也就是说最少n个人也有n个糖果，多余的糖果怎么算呢？
/**
 * @param {number[]} ratings
 * @return {number}
 */
// var candy = function (ratings) {
//   // 处理只有一位的情况
//   if (ratings.length === 1) return 1;
//   if (ratings.length === 2) {
//     if (ratings[0] === ratings[1]) return 2;
//     return 3;
//   }
//   let totalCount = 0;
//   let curSum = 1;
//   for (let i = 0; i < ratings.length - 1; i++) {
//     if (ratings[i + 1] <= ratings[i]) {
//       curSum++;
//     } else {
//       curSum = 1;
//     }
//     totalCount += curSum;
//   }
//   //还需要比较最后一位，如果最后一位小于倒数第二位则为1，但是直接处理
//   if (ratings[ratings.length - 1] <= ratings[ratings.length - 2]) {
//     curSum = 1;
//   } else {
//     curSum++;
//   }
//   totalCount += curSum;
//   return totalCount;
// };

var candy = function (ratings) {
  let candyList = new Array(ratings.length).fill(1);
  for (let i = 1; i < ratings.length; i++) {
    if (ratings[i] > ratings[i - 1]) {
      candyList[i] = candyList[i - 1] + 1;
    }
  }
  for (let i = ratings.length - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      candyList[i] = Math.max(candyList[i], candyList[i + 1] + 1);
    }
  }
  const total = candyList.reduce((cur, prev) => (cur += prev), 0);
  return total;
};
const result = candy([1, 0, 2]);
console.log("result", result);
