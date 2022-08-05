// 【分析】
// 1、最直接的方式是先计算出大于n/2的数是多少，然后用一个Map来维护key和次数，每次遍历都判断一下是否超过这个数了
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const maxTimes = Math.ceil(nums.length / 2);
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.get(nums[i])) {
      let count = map.get(nums[i]);
      count++;
      if (count >= maxTimes) return nums[i];
      map.set(nums[i], count);
    } else {
      map.set(nums[i], 1);
    }
  }
  return nums[0];
};
// var majorityElement = function (nums) {
//   const maxTimes = Math.ceil(nums.length / 2);
//   const map = new Map();
// };
const result = majorityElement([6, 5, 5]);
console.log("result", result);
