/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  // 复杂度O(n2)直接超出时间限制，这样是不行的
  // let minLength = Infinity;
  // for (let slowIndex = 0; slowIndex < nums.length; slowIndex++) {
  //   let total = 0;
  //   for (let quickIndex = slowIndex; quickIndex < nums.length; quickIndex++) {
  //     if (total < target && total + nums[quickIndex] >= target) {
  //       // 说明是最小连续数组
  //       minLength = Math.min(quickIndex - slowIndex + 1, minLength);
  //       total = 0; //重置
  //       break;
  //     } else {
  //       total += nums[quickIndex];
  //     }
  //   }
  // }
  // return minLength === Infinity ? 0 : minLength;
  // 其实可以把思路打开，我们每次都是取一个区间的值
  // 所以startIndex和endIndex几乎是必须的，我们要求的就是startIndex和endIndex之间所有值的和，但是如果要重复的话就会像上面一样n2来考虑
  // 考虑通过滑动窗口来完成
  // 既然考虑滑动窗口就要考虑窗口的范围，所以定义起始索引和结束索引来表示窗口的范围
  // 结束条件是什么？endIndex到达nums.length-1
  let startIdex = 0;
  let endIndex = 0;
  let total = 0;
  let minLength = Infinity;
  while (endIndex < nums.length) {
    total += nums[endIndex];
    while (total >= target) {
      // 说明已经超过target了，这个时候可以考虑缩小窗口了
      minLength = Math.min(minLength, endIndex - startIdex + 1);
      total -= nums[startIdex];
      startIdex++;
    }
    endIndex++; //当和小于目标值的时候，应该往右移动窗口了
  }
  return minLength === Infinity ? 0 : minLength;
};
const result = minSubArrayLen(15, [5, 1, 3, 5, 10, 7, 4, 9, 2, 8]);
console.log("result", result);
