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
var minDepth = function (root) {
  if (!root) return 0;
  const stack = [root];
  let currentDepth = 0;
  while (stack.length > 0) {
    let length = stack.length;
    while (length > 0) {
      let currentNode = stack.shift();
      if (!currentNode.left && !currentNode.right) return currentDepth + 1;
      if (currentNode.left) stack.push(currentNode.left);
      if (currentNode.right) stack.push(currentNode.right);
      length--;
    }
    currentDepth++;
  }
};
