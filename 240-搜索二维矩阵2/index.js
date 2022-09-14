// 【分析】
// 1、这道题的关键点在于它是有序的，无论是从左到右还是从上到下
// 2、根据这个特点可以将横坐标和纵坐标进行缩小范围
// 3、先判断x轴的中值是否大于target，然后再判断y轴的中值是否大于target,若都大于范围缩小到了第一象限
// 4、不断递归执行此操作，结束条件是什么？x轴的值为0且y轴的值为0还没有确定下来，就为false，否则根据matrix[y][x]一定能找到target
// 5、一个升序排列的数组，想要取其中位数，公式是什么arr[Math.foor((arr.length-1)/2)]
// 6、有点没太清楚二分的条件是是什么
// 7、这样写把问题复杂化了，其实可以考虑逐个遍历每一行，每一行内部进行二分查找
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  for (let row of matrix) {
    const index = findIndex(row, target);
    if (index >= 0) {
      // 说明存在
      return true;
    }
  }
  return false;
};
const findIndex = (row, target) => {
  let start = 0;
  let end = row.length - 1;
  console.log("start-end", start, end);
  while (end >= start) {
    const middle = Math.floor((end - start) / 2) + start;
    const num = row[middle];
    if (num > target) {
      // 说明目标索引小于中间索引
      end = middle - 1;
    } else if (num < target) {
      start = middle + 1;
    } else {
      return middle;
    }
  }
  return -1;
};

(matrix = [[-5]]), (target = -5);
let result = searchMatrix(matrix, target);
console.log("result", result);
