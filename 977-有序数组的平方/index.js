/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  // 非递减顺序是什么意思?说明是按照递增排序排列的数组，只不过可能包含相同大小的元素
  // 这道题还有个特点，可能包含负数，当负数平方之后的值是可能比之前大的
  // 这道题最直接的方法是用一个新的数组存放平方过后的值，再从大到小进行排序
  // return nums.map((item) => Math.pow(item, 2)).sort((a, b) => a - b);
  // 这道题的关键问题在于我们没有办法判断负值放在哪?所以是否可以考虑排序算法的插值处理？
  // 同样也是用一个新数组来存放，关键是这个值应该插入到哪个位置？
  // 但这样的复杂度就是O(n2)了,还有其他方式吗
  // 或者是找到小于0的数，取绝对值？才是它实际应该放在的位置？
  // 由于已经是排序了的数组了，所以可以依靠双指针来进行两个数的比较(负数越小，平方之后越大，所以不用考虑负数平方相互之间大小会乱的情况)
  // const list = [];
  // let startIndex = 0;
  // let endIndex = nums.length - 1;
  // while (startIndex <= endIndex) {
  //   if (nums[startIndex] * nums[startIndex] < nums[endIndex] * nums[endIndex]) {
  //     // 说明起始索引的数更小,取较大的数
  //     list.unshift(nums[endIndex]);
  //     endIndex--;
  //   } else {
  //     list.unshift(nums[startIndex]);
  //     startIndex++;
  //   }
  // }
  // return list;
  const list = [];
  let startIndex = 0;
  let endIndex = nums.length - 1;
  while (startIndex <= endIndex) {
    const startNum = nums[startIndex] * nums[startIndex];
    const endNum = nums[endIndex] * nums[endIndex];
    if (startNum < endNum) {
      // 说明起始索引的数更小,取较大的数
      list.unshift(endNum);
      endIndex--;
    } else {
      list.unshift(startNum);
      startIndex++;
    }
  }
  return list;
};
