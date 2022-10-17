/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (root === null) return null;
  const queue = [];
  queue.push(root);
  while (queue.length) {
    const curCount = queue.length;
    for (let i = 0; i < curCount; i++) {
      const curNode = queue.shift();
      const temp = curNode.left;
      curNode.left = curNode.right;
      curNode.right = temp;
      curNode.left && queue.push(curNode.left);
      curNode.right && queue.push(curNode.right);
    }
  }
  return root;
};
