/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let count = map.get(nums[i]);
    if (count) return true;
    map.set(nums[i], 1);
  }
  return false;
};
