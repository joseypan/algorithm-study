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
var averageOfLevels = function (root) {
  if (!root) return [];
  const result = [];
  const queue = [];
  queue.push(root);
  while (queue.length) {
    const curCount = queue.length;
    const curLevel = [];
    for (let i = 0; i < curCount; i++) {
      const curNode = queue.shift();
      curLevel.push(curNode.val);
      curNode.left && queue.push(curNode.left);
      curNode.right && queue.push(curNode.right);
    }
    const sum = curLevel.reduce((cur, prev) => cur + prev, 0);
    result.push(sum / curCount);
  }
  return result;
};
