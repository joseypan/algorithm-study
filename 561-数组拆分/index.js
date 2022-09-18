// 【分析】
// 1、这道题很明显是要进行两两分组，然后分组之后取组内最小值求和，这个和希望是最大值
// 2、我们来分析一下，何时最大？
//   若min1和min2一组，min3和min4一组 ...min(n-1)和min(n)一组，那么求和是min1+min3+min5+...+min(n-1)
//   若min1和min(n)一组，min2和min(n-1)一组,...min((n-1)/2-1)和min((n-1)/2)一组
//   其实把问题拆分之后，我们想要最终的和最大，其实也就意味着每组得到的数一定是有限情况下的最大值
//   那么应该把数组进行排序，然后由小到大两两分组，这样取到的值一定是最大的
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  nums.sort((a, b) => a - b);
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      count += nums[i];
    }
  }
  return count;
};
