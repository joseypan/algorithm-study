/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let lastMaxSum = 0;
  let maxSum = nums[nums.length - 1];
  //由推断可知，长度为n的数组其子项有(1+n)*n/2个
  //所以我们需要对nums的子项进行分组来穷举表示出来，分组的规则是以当前元素开头的所有子项
  for (let i = nums.length - 1; i >= 0; i--) {
    if (lastMaxSum > 0) {
      lastMaxSum += nums[i];
    } else {
      lastMaxSum = nums[i];
    }
    if (lastMaxSum > maxSum) maxSum = lastMaxSum;
  }
  return maxSum;
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let lastMaxCount = 0;
  let maxCount = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (lastMaxCount > 0) {
      lastMaxCount += nums[i];
    } else {
      lastMaxCount = nums[i];
    }
    if (maxCount < lastMaxCount) maxCount = lastMaxCount;
  }
  return maxCount;
};
maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);

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
