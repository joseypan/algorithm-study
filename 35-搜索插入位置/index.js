/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  if (target <= nums[0]) return 0;
  if (target > nums[nums.length - 1]) return nums.length;
  let startIndex = 0;
  let endIndex = nums.length - 1;
  let middleIndex = Math.ceil((endIndex - startIndex) / 2);
  while (endIndex - startIndex > 1) {
    if (target > nums[middleIndex]) {
      //说明当前目标值是在二分的右边
      startIndex = middleIndex;
      middleIndex = middleIndex + Math.ceil((endIndex - startIndex) / 2);
    } else if (target < nums[middleIndex]) {
      //说明当前目标值在二分的左边
      endIndex = middleIndex;
      middleIndex = middleIndex - Math.ceil((endIndex - startIndex) / 2);
    } else if (target === nums[middleIndex]) {
      return middleIndex;
    }
  }
  return endIndex;
};
let nums = [1, 3, 5, 6],
  target = 5;
let result = searchInsert(nums, target);
console.log("result", result);
