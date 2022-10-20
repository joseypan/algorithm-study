// 【分析】
// 1、这道题是要求所有左叶子之和，首先想到的是深度遍历（用后序遍历试试）
// 2、题目理解错意思了，它要的是叶子节点
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
  if (!root) return 0;
  const stack = [root];
  let count = 0;
  while (stack.length) {
    const curNode = stack.pop();
    if (curNode === null) {
      stack.pop();
    } else {
      stack.push(curNode);
      stack.push(null);
      curNode.right && stack.push(curNode.right);
      if (curNode.left && !curNode.left.left && !curNode.left.right) {
        count += curNode.left.val;
      }
      curNode.left && stack.push(curNode.left);
    }
  }
  return count;
};
