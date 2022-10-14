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
 * @return {number[]}
 */
var largestValues = function (root) {
  if (!root) return [];
  const result = [];
  const queue = [];
  queue.push(root);
  while (queue.length) {
    const curCount = queue.length;
    let maxValue = queue[0].val;
    for (let i = 0; i < curCount; i++) {
      const curNode = queue.shift();
      if (curNode.val > maxValue) maxValue = curNode.val;
      curNode.left && queue.push(curNode.left);
      curNode.right && queue.push(curNode.right);
    }
    result.push(maxValue);
  }
  return result;
};
