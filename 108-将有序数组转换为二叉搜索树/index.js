/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
// 是否需要将数组进行分组处理呢
//【疑问】高度差不超过1，是指的判断下一个子节点存在问题？和值应该无关吧？但是和题解的答案不是很理解这个说法
// 搜索树是指左孩子的值小于父节点的值小于右孩子的值;

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  return change(nums, null);
};
const change = (nums, node) => {
  if (nums.length === 0) return null;
  const currentMiddleIndex = Math.floor((nums.length - 1) / 2);
  let binaryTree = node;
  binaryTree = new TreeNode(nums[currentMiddleIndex]);
  let leftArr = nums.slice(0, currentMiddleIndex);
  let rightArr = nums.slice(currentMiddleIndex + 1, nums.length);
  binaryTree.left = change(leftArr, binaryTree.left);
  binaryTree.right = change(rightArr, binaryTree.right);
  return binaryTree;
};
var sortedArrayToBST2 = function (nums) {
  return change2(nums, 0, nums.length - 1);
};
const change2 = (nums, startIndex, endIndex) => {
  if (endIndex < startIndex) return null;
  const currentMiddleIndex = Math.floor((startIndex + endIndex) / 2);
  let binaryTree = new TreeNode(nums[currentMiddleIndex]);
  binaryTree.left = change2(nums, startIndex, currentMiddleIndex - 1);
  binaryTree.right = change2(nums, currentMiddleIndex + 1, endIndex);
  return binaryTree;
};
let result = sortedArrayToBST2([-10, -3, 0, 5, 9]);
console.log("result", result);
