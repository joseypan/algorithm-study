/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  // should move number zero to the end -> loop the array when item equal zero change index? or bubblesort?
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = 0; j < nums.length - 1 - i; j++) {
      if (nums[j] === 0) {
        nums[j] = nums[j + 1];
        nums[j + 1] = 0;
      }
    }
  }
};
let list = [0, 1, 0, 3, 12];
moveZeroes(list);
console.log("list", list);
