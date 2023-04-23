/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  // 这道题要找到中位数，首先得明确中位数的概念，也就是从小到大排序之后需要找到中间那一位，如果中间有两位，则需要算平均值
  // 所以先要判断nums1的个数和nums2的个数的和的奇偶性，如果是奇数则index为Math.floor((nums1.length+nums2.length)/2)，若是偶数则这一项再往后加一项取平均值
  const list = [...nums1, ...nums2];
  list.sort((a, b) => a - b);
  console.log("list", list);
  const middleIndex = Math.floor((list.length - 1) / 2);
  const isOdd = list.length % 2 === 1;
  let middleNum = list[middleIndex];
  if (!isOdd) {
    middleNum = (middleNum + list[middleIndex + 1]) / 2;
  }
  return middleNum;
};
const result = findMedianSortedArrays([3], [-2, -1]);
console.log("result", result);
