// 【分析】
// 这道题的关键点在于将root也看做是左右节点的内容，然后通过一个数组去收集每一层级的节点值，并且左孩子的左孩子判断是否和右孩子的右孩子相同，等等以此类推，从而判断每一层都是两两取值配对
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 描述：用来核对是否相等的方法
 * @param {  }
 * @return
 */
const check = (nodeLeft, nodeRight) => {
  const list = [];
  list.push(nodeLeft);
  list.push(nodeRight);
  while (list.length > 0) {
    let left = list.shift();
    let right = list.shift();
    if (!left && !right) continue;
    if (!left || !right || left.val !== right.val) return false;
    list.push(left.left);
    list.push(right.right);
    list.push(left.right);
    list.push(right.left);
  }
  return true;
};
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  //考虑二叉树的广度优先遍历
  return check(root, root);
};
