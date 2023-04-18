/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  // 直接先排序，然后再取值
  nums.sort((a, b) => b - a);
  let count = 1;
  let num = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (count === 3) break;
    if (num > nums[i]) {
      console.log("num", num, nums[i], count);
      num = nums[i];
      ++count;
    }
  }
  console.log("count", count, nums[0], num);
  return count < 3 ? nums[0] : num;
};
// const result = thirdMax([1, 2, 2, 5, 3, 5]);
// console.log("result", result);
const result = thirdMax([3, 2, 1]);
console.log("result", result);
