/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  let array = [];
  let lastIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i + 1] - nums[i] > 1 || i === nums.length - 1) {
      //说明不连续
      if (lastIndex === i) {
        array.push(String(nums[i]));
      } else {
        array.push(`${nums[lastIndex]}->${nums[i]}`);
      }
      lastIndex = i + 1;
    }
  }
  return array;
};
