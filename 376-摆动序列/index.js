/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function (nums) {
  if (nums.length === 0) return 0;
  let curCount = 1;
  let prevDiff = 0;
  let curDiff = 0;
  for (let i = 1; i < nums.length; i++) {
    curDiff = nums[i] - nums[i - 1];
    if ((curDiff > 0 && prevDiff <= 0) || (curDiff < 0 && prevDiff >= 0)) {
      //差值为0就不是摆动序列了
      prevDiff = curDiff;
      curCount++;
    }
  }
  return curCount;
};
