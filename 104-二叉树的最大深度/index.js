// 【分析】
// 1、根据题意可知，需要返回二叉树的最大深度
// 2、找出最大深度可以考虑用前序遍历
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
var maxDepth = function (root) {
  let maxLength = 0;
  if (!root) return maxLength;
  const stack = [root];
  while (stack.length > 0) {
    let length = stack.length;
    while (length > 0) {
      let currentNode = stack.shift();
      if (currentNode.left) stack.push(currentNode.left);
      if (currentNode.right) stack.push(currentNode.right);
      length--;
    }
    maxLength++;
  }
  return maxLength;
};
