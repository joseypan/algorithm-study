// 【分析】
// 1、要判断能否跳到最后一格，需要判断当前可跳的最大长度与当前格距离最后一格的距离的差值
// 2、要求能够跳到的最远位置，判断当前格能跳到的最大格数和当前格+下一格能跳到的最大格数是否超过了length
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var canJump = function (nums) {
//   const destinationLength = nums.length - 1;
//   let totalCount = 0;
//   let index = 0;
//   while (index < destinationLength && !nums[index] === 0) {
//     // 判断当前步数和下一格的
//     let curStepCount = nums[index];
//     let nextStepCount = nums[index + 1] + 1;
//     totalCount += Math.max(curStepCount, nextStepCount);
//     if (totalCount >= destinationLength) return true;
//     index = totalCount;
//   }
//   return totalCount >= destinationLength;
// };
// const result = canJump([3, 2, 1, 0, 4]);
// console.log("result", result);

var canJump = function (nums) {
  if (nums.length === 1) return true;
  let cover = 0;
  for (let i = 0; i <= cover; i++) {
    cover = Math.max(cover, i + nums[i]);
    if (cover >= nums.length - 1) return true;
  }
  return false;
};
