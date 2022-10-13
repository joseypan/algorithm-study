/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];
  const result = [];
  const queue = [];
  queue.push(root);
  while (queue.length) {
    const levelCount = queue.length;
    const curLevel = [];
    for (let i = 0; i < levelCount; i++) {
      const curNode = queue.shift();
      curLevel.push(curNode.val);
      if (curNode.left) queue.push(curNode.left);
      if (curNode.right) queue.push(curNode.right);
    }
    result.push(curLevel);
  }
  return result;
};
