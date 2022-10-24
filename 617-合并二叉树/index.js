// 【分析】
// 1、它需要比较两个树之间的差异，
// 如果说两个节点都存在的情况下，应该是需要两个节点的值相加
// 如果说A存在B不存在，则需要集成A的节点
// 如果说A不存在B存在，则需要集成B节点
// 所以需要创建一个新的空树吗;
// 感觉还是可以考虑层序遍历
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
  if (!root1 && !root2) return null;
  if (root1 && !root2) return root1;
  if (!root1 && root2) return root2;
  const newRoot = new TreeNode(root1.val + root2.val);
  buildUpTree(root1, root2, newRoot);
  return newRoot;
};
const buildUpTree = (root1, root2, newRoot) => {
  if (root1.left && root2.left) {
    newRoot.left = new TreeNode(root1.left.val + root2.left.val);
    buildUpTree(root1.left, root2.left, newRoot.left);
  } else {
    newRoot.left = root1.left || root2.left;
  }
  if (root1.right && root2.right) {
    newRoot.right = new TreeNode(root1.right.val + root2.right.val);
    buildUpTree(root1.right, root2.right, newRoot.right);
  } else {
    newRoot.right = root1.right || root2.right;
  }
};
