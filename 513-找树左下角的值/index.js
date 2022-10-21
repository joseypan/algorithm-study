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
var findBottomLeftValue = function (root) {
  if (!root) return null;
  //层序遍历比较合适
  let result;
  const queue = [];
  queue.push(root);
  while (queue.length) {
    const curCount = queue.length;
    result = queue[0].val;
    for (let i = 0; i < curCount; i++) {
      const curNode = queue.shift();
      curNode.left && queue.push(curNode.left);
      curNode.right && queue.push(curNode.right);
    }
  }
  return result;
};
