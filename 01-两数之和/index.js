/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map();
  for (let i in nums) {
    let disValue = target - nums[i];
    if (map.get(disValue)) {
      return [map.get(disValue), i];
    } else {
      map.set(nums[i], i);
    }
  }
};
