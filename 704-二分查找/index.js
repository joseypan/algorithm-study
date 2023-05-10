/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  // 首先根据题干的含义，是一个递增数组，这个奠定了我们使用二分查找的基础
  // 二分查找需要确定中间索引，以及取左边还是取右边
  // 二分查找的结束条件是什么？当前的target 小于middle同时也小于left 或者 大于middle同时也大于right 说明找不到返回-1 如果等于middle则返回middleIndex
  // 二分查找需要使用while循环来执行这个循环逻辑
  let startIndex = 0;
  let endIndex = nums.length - 1;
  while (startIndex <= endIndex) {
    const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);
    const middleNum = nums[middleIndex];
    if (middleNum === target) {
      //说明找到了
      return middleIndex;
    } else if (middleNum < target) {
      // 说明需要继续找右边
      startIndex = middleIndex + 1;
    } else {
      // 说明需要继续找左边
      endIndex = middleIndex - 1;
    }
  }
  return -1; //说明最后都没有找到，返回-1
};
const result = search([-1, 0, 3, 5, 9, 12], 2);
console.log("result", result);
