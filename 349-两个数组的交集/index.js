/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const map = new Map();
  const list = [];
  for (let i = 0; i < nums1.length; i++) {
    if (!map.has(nums1[i])) {
      map.set(nums1[i], i);
    }
  }
  for (let i = 0; i < nums2.length; i++) {
    if (map.has(nums2[i]) && !list.includes(nums2[i])) {
      list.push(nums2[i]);
    }
  }
  return list;
};
const result = intersection([1, 2, 2, 1], [2, 2]);
console.log("result", result);
