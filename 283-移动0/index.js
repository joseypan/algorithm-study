// 【分析】
// 1、题目的意思是要将数组中为0的项移动到数组最右端，非0项保持原有的顺序
// 2、这种元素的移动可以看做是排序的升级版
// 3、最简单且暴力的解法是用一个新数组，遍历当前数组，若非0则插入，若为0则放入另一个收集0的数组，最后数组合并(但是根据题意，这个方式是走不通的)
// 请注意 ，必须在不复制数组的情况下原地对数组进行操作。
// 其实就是可以利用冒泡排序，当发现为0的时候就一项一项往后面挪(但是冒泡排序的结果并不好看，所以考虑能否转成快速排序或者归并排序等思路)
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length - 1 - i; j++) {
      if (nums[j] === 0) {
        const temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
      }
    }
  }
};
// 快速排序(引申版本)
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      const temp = nums[j];
      nums[j] = nums[i];
      nums[i] = temp;
      j++;
    }
  }
};
