/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (root === null) return null;
  const queue = [];
  queue.push(root);
  while (queue.length) {
    const curCount = queue.length;
    for (let i = 0; i < curCount; i++) {
      const curNode = queue.shift();
      if (i < curCount - 1) {
        curNode.next = queue[0];
      }
      curNode.left && queue.push(curNode.left);
      curNode.right && queue.push(curNode.right);
    }
  }
  return root;
};
