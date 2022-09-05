/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.nums = nums;
  this.sumList = [];
  for (let i = 0; i < this.nums.length; i++) {
    if (i === 0) {
      this.sumList[i] = this.nums[i];
    } else {
      this.sumList[i] = this.sumList[i - 1] + this.nums[i];
    }
  }
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  return this.sumList[right] - this.sumList[left] + this.nums[left];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
