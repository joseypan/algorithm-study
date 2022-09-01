/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  const length = nums.length;
  for (let i = 0; i < length; i++) {
    if (!nums.includes(i)) {
      return i;
    }
  }
  return length;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  //先排序
  const list = nums.sort((a, b) => a - b);
  //遍历数组（应该是连续的）
  for (let i = 0; i < list.length; i++) {
    if (i !== list[i]) {
      return i;
    }
  }
  return list.length;
};
