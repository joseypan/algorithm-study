/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  //使用双指针来完成这道题
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;
  while (left < right) {
    const leftHeight = height[left];
    const rightHeight = height[right];
    const area = (right - left) * Math.min(leftHeight, rightHeight);
    maxArea = Math.max(maxArea, area);
    if (leftHeight < rightHeight) {
      left++;
    } else {
      right--;
    }
  }
  return maxArea;
};
/* 【分析】
这道题目他的要求是求可以盛最多水的情况，无非就是height*底部长要最大
S容器 = Math.min(height[i1],height[i2]) * (i2-i1)
这里很明显要确定i1和i2的值，那这种情况优先考虑使用双指针来进行确认了
虽然确定是双指针来做，我们定义左指针的起始索引是0，右指针的起始索引是length-1。然后要确认的点在于怎么移动指针，规则是什么，结束条件是什么？
结束条件相对来说比较好确认，一般这种双指数当左指针超过右指针的时候就结束了
那么移动规则是什么呢？
我们仔细观察一下，假设当前i1和i2组成了面积S，当我们向内收的时候，i2-i1一定是减少的，我们在内收的情况下能取得的最大面积一定是内收较矮的那个，因为求面积得要求高要高才有可能比现在大
我们用一个变量收集最大的面积，当我们在遍历数组的过程中出现比记录的面积更大的时候替换即可，最后遍历结束我们也能得到最大的面积 */
