/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
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
      curNode.children.forEach((element) => {
        queue.push(element);
      });
    }
    result.push(curLevel);
  }
  return result;
};
