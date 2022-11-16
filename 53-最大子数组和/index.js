/**
 * @param {number[]} nums
 * @return {number}
 */
// var maxSubArray = function (nums) {
//   let lastMaxSum = 0;
//   let maxSum = nums[nums.length - 1];
//   //由推断可知，长度为n的数组其子项有(1+n)*n/2个
//   //所以我们需要对nums的子项进行分组来穷举表示出来，分组的规则是以当前元素开头的所有子项
//   for (let i = nums.length - 1; i >= 0; i--) {
//     if (lastMaxSum > 0) {
//       lastMaxSum += nums[i];
//     } else {
//       lastMaxSum = nums[i];
//     }
//     if (lastMaxSum > maxSum) maxSum = lastMaxSum;
//   }
//   return maxSum;
// };
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var maxSubArray = function (nums) {
//   let lastMaxCount = 0;
//   let maxCount = nums[0];
//   for (let i = 0; i < nums.length; i++) {
//     if (lastMaxCount > 0) {
//       lastMaxCount += nums[i];
//     } else {
//       lastMaxCount = nums[i];
//     }
//     if (maxCount < lastMaxCount) maxCount = lastMaxCount;
//   }
//   return maxCount;
// };
// maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);

/* 【分析】
首先一个数组需要穷举其所有子数组
总个数n*(n+1)/2
要求得到连续子数组最大值，则需要找到子数组的规律
那么，需要找到以当前元素开头的子数组和下一个元素开头的子数组的关系
假设一个数组：[0,1,2.3.4]
以1开头的子数组为
[1],[1,2],[1,2,3],[1,2,3,4]
以2开头的子数组为
[2],[2,3],[2,3,4]
观察可知，两个子数组集合的规律
1、以1开头的子数组多了一项是当前元素的子数组
2、以1开头的子数组每一个都多了当前元素
所以问题回到了我们需要确认上一个元素开头的所有子数组的和最大值
当前元素开头的子数组最大值 = 上一个元素开头的子数组最大值+当前元素  或者 当前元素
这个或者条件是根据上一个元素开头的子数组最大值是否大于0决定的，如果>0两个数的和大于当前元素，如果<0则当前元素一个数更大
通过这样一个表达式，我们可以进行推导（参考数学的归纳法）
Smax(n) = Smax(n+1)>0?Smax(n+1) + a(n):a(n);
这样我们可以拿到当前元素子集的最大值
最后再把所有元素的子集最大值进行比较，拿到最大的即为数组中最大的子集和 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  //要求出连续子数组中最大的和，一定是整数大于负数，和会更大
  // 先暴力解法吧 -> 双层for循环 -> 但是有个问题在于，不一定是在循环之后判断大小 ->暴力解法直接超时
  let maxCount;
  for (let i = 0; i < nums.length; i++) {
    let totalCount = 0;
    for (let j = i; j < nums.length; j++) {
      totalCount += nums[j];
      if (maxCount === undefined || maxCount < totalCount) {
        maxCount = totalCount;
      }
    }
  }
  return maxCount;
};
const result = maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
console.log("result", result);

// 重新思考 -> 其实可以这么想，什么情况下值最大？一定是正数和正数相加的值更大 假设A + B 只有当B是正数的时候 A+B>A
// 难点在于如何确定B是正数呢？B可能是1个数也可能是n个数的和
// 当发现收集终止的时候记得要复原
var maxSubArray = function (nums) {
  let result = -Infinity;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    count += nums[i];
    if (count > result) {
      result = count;
    }
    if (count < 0) {
      count = 0;
    }
  }
  return result;
};
