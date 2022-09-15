// 【分析】
// 1、这道题需要进行排序，排序的规则要满足nums[0]<nums[1]>nums[2]<nums[3]
// 2、个人认为这道题有个很讨巧的做法，先对数组进行排序，然后奇数位取最小的数，偶数位取最大的数
// 3、下面的写法应该能够完成功能，但是题目要求直接修改nums，题目会根据nums来判断结果
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function (nums) {
  const list = nums.sort((a, b) => a - b);
  const result = [];
  let index = 0;
  while (list.length > 0) {
    let num;
    if (index % 2 === 1) {
      num = list.unshift();
    } else if (index % 2 === 0) {
      num = list.pop();
    }
    result.push(num);
    index++;
  }
  return result;
};
// 这样就意味着要在原数组中进行数据的处理了
// 对于这道题来说，奇数位的数每次都是剩下数中最小的，偶数位的数每次都是剩下中最大的
// 那么，先排序？然后遍历？在偶数位上穿插？
// 这样在运行到[1,3,2,2,3,1]时错了
// 说明整体思路上还是有问题
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function (nums) {
  //先排序，再插空
  nums.sort((a, b) => a - b);
  const count = nums.length;
  let index = 0;
  while (index < count) {
    if (index % 2 === 1) {
      // 需要将最后一个值插进来
      const num = nums.pop();
      nums.splice(index, 0, num);
    }
    index++;
  }
};
wiggleSort([1, 5, 1, 1, 6, 4]);

// 确实没有思路了
