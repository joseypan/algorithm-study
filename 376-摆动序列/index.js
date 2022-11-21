/**
 * @param {number[]} nums
 * @return {number}
 */
// var wiggleMaxLength = function (nums) {
//   if (nums.length === 0) return 0;
//   let curCount = 1;
//   let prevDiff = 0;
//   let curDiff = 0;
//   for (let i = 1; i < nums.length; i++) {
//     curDiff = nums[i] - nums[i - 1];
//     if ((curDiff > 0 && prevDiff <= 0) || (curDiff < 0 && prevDiff >= 0)) {
//       //差值为0就不是摆动序列了
//       prevDiff = curDiff;
//       curCount++;
//     }
//   }
//   return curCount;
// };
// 【分析】
// 1、能够删除序列中的某些项，返回可以组成摆动序列的最大长度,这里数组的顺序是不可以改变的
// 2、所谓摆动序列是指的差值是正负交替的
// 3、由于是正负正负，所以递增序列是不行的，什么情况下能够摆动的最多呢？只取峰值上的值即可
/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function (nums) {
  if (nums.length === 0) return 0;
  let count = 1;
  let prevDiff = 0;
  let curDiff = 0;
  for (let i = 1; i < nums.length; i++) {
    curDiff = nums[i] - nums[i - 1];
    if ((prevDiff <= 0 && curDiff > 0) || (prevDiff >= 0 && curDiff < 0)) {
      prevDiff = curDiff;
      count++;
    }
  }
  return count;
};
