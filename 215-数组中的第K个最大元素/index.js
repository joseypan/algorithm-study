// 【分析】
// 1、这道题用最讨巧的方式一定是从大到小排序，然后根据K确认索引返回值
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const list = nums.sort((a, b) => b - a);
  return list[k - 1];
};
// 但是，这道题我们主要想锻炼的是分治算法，所以我们得考虑自己手动去写排序，而不是依赖于sort方法来实现
// 使用递归这种方式，复杂度是nlogn，但是在碰到很大的测试用例时，是跑不起来的
const sortNums = (nums) => {
  if (nums.length === 0) return [];
  //在这里做排序操作
  const compareEle = nums[0];
  const leftList = [];
  const rightList = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= compareEle && i !== 0) {
      leftList.push(nums[i]);
    } else if (nums[i] < compareEle) {
      rightList.push(nums[i]);
    }
  }
  return [...sortNums(leftList), compareEle, ...sortNums(rightList)];
};
var findKthLaargest = function (nums, k) {
  // 排序
  const list = sortNums(nums);
  // 取值
  return list[k - 1];
};

const result = findKthLaargest([3, 2, 1, 5, 6, 4], 2);
console.log("result", result);

// 考虑在同一个数组中的分治方法实现数组排序
// 在组内交换来实现空间复杂度的优化

const swap = (arr, i, j) => {
  // 交换数组内元素方法
  [arr[i], arr[j]] = [arr[j], arr[i]];
};

const finndCenter = (arr, left, right) => {
  // 这个函数用来做分区操作，返回一个idx，分区后的数组 idx 左边都比它小，idx 右边都比它大
  const flag = arr[left]; // 随便找一个元素作为标尺，这里找数组第一个
  let idx = left + 1; // 定义一个指针指向标尺右边的元素，从标尺右边的元素开始遍历
  for (let i = idx; i <= right; i++) {
    if (arr[i] < flag) {
      swap(arr, i, idx); // 如果比标尺元素小，就和标尺右边的元素进行交换
      idx++; // 交换完了，idx向右移一位
    }
  }
  swap(arr, left, idx - 1); // 遍历完了之后，把标尺元素交换到比它小的元素右边去，只需要和最右边的元素交换即可。
  return idx;
};

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    const center = finndCenter(arr, left, right); // 拿到标尺元素分区后的下标
    quickSort(arr, left, center - 1); // 对左边的元素继续重复上面的操作
    quickSort(arr, center + 1, right); // 对右边的元素继续重复上面的操作
  }
  return arr; // 元素已排好序，直接返回 arr
};

var findKthLaargest = function (nums, k) {
  // 排序
  const list = quickSort(nums);
  console.log("list", list);
  // 取值
  return list[list.length - k];
};

const result1 = findKthLaargest([3, 2, 1, 5, 6, 4], 2);
console.log("result1", result1);
