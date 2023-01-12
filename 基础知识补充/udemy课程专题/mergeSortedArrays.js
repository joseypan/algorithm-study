const mergeSortedArrays = (arr1, arr2) => {
  // 由于arr1和arr2都是已经排序了的数组，所以后一项一定比前一项大,并且这个遍历要考虑到两个指针
  let i = 0;
  let j = 0;
  const arr = [];
  while (i < arr1.length || j < arr2.length) {
    // 两个都还有可遍历值的时候继续操作
    if (arr2[j] === undefined || arr1[i] <= arr2[j]) {
      arr.push(arr1[i]);
      i++;
    } else if (arr1[i] === undefined || arr1[i] > arr2[j]) {
      arr.push(arr2[j]);
      j++;
    }
  }
  return arr;
};
let result = mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);
console.log("result", result);
