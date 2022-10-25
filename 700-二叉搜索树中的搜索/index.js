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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
  if (!root) return null;
  const stack = [root];
  while (stack.length) {
    const curNode = stack.pop();
    if (!curNode) {
      //说明这个node是null
      const node = stack.pop();
      if (node.val === val) {
        return node;
      }
    } else {
      curNode.right && stack.push(curNode.right);
      curNode.left && stack.push(curNode.left);
      stack.push(curNode);
      stack.push(null);
    }
  }
  return null;
};
