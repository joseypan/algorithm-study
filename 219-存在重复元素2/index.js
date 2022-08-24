/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.get(nums[i]) !== undefined) {
      const index = map.get(nums[i]);
      if (Math.abs(index - i) <= k) {
        return true;
      }
    }
    map.set(nums[i], i);
  }
  return false;
};
