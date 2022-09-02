// 参考资料：
// https://juejin.cn/post/6844903938290876430
// 1、快速排序是比较常见的一种排序方式，其也分为原地排序和非原地排序版本
// 先来了解非原地排序版本
// 其实快速排序的核心思想就是分而治之，讲究分、归、并
// 所谓分-->如何分？
// 我们的核心诉求是为了排序，排序是不是可以看做我们指定某一个数，比这个数大的位于这个数的右侧，比这个数小的位于这个数的左侧
// 如何确定这个指定的数呢？随便确定，假设我们就确定元素的第一项
// 所谓归-->如何归？
// 我们确定了某一个数，又希望是升序排列，是否小于这个数放在左边（左边用一个数组收集），大于这个数放在右边（右边用一个数组收集）
// 所谓并-->如何并
// [...quickSort(leftArr),node,...quickSort(rightSort)]
// 并且这是一个递归的过程
let arr = [3, 1, 6, 1, 5, 7, 2, 4];
// const quickSort = (arr) => {
//   if (arr.length < 2) return arr;
//   const node = arr[0];
//   const leftArr = [];
//   const rightArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < node) {
//       leftArr.push(arr[i]);
//     } else if (arr[i] > node) {
//       rightArr.push(arr[i]);
//     }
//   }
//   return [...quickSort(leftArr), node, ...quickSort(rightArr)];
// };

// 但这样的写法有一个问题，当我们有两个数相等时，会造成丢失的情况，如何解决

const quickSort = (arr) => {
  if (arr.length < 2) return arr;
  const node = arr[0];
  const leftArr = [];
  const rightArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= node && i !== 0) {
      leftArr.push(arr[i]);
    } else if (arr[i] > node) {
      rightArr.push(arr[i]);
    }
  }
  return [...quickSort(leftArr), node, ...quickSort(rightArr)];
};

let result = quickSort(arr);
console.log("result", result);

// 原地快速排序
