/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  nums.sort((a, b) => a - b); //先将数组变成递增数组
  // 这样操作后可以方便我们进行二分查找
  let startIndex = 0;
  let endIndex = nums.length - 1;
  while (startIndex <= endIndex) {
    const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);
    console.log("middleIndex", middleIndex);
    const middleNum = nums[middleIndex];
    if (middleNum === val) {
      console.log("相等");
      // 说明是需要去除的元素->需要对元素进行移除
      nums.splice(middleIndex, 1);
      // 移除之后需要考虑索引变动的问题
      endIndex--;
    } else if (middleNum < val) {
      // 说明val在右边，需要修改startIndex
      startIndex = middleIndex + 1;
    } else {
      endIndex = middleIndex - 1;
    }
  }
  return nums.length; //返回的是数组的长度
};

const result = removeElement([4, 5], 4);
console.log("result", result);
