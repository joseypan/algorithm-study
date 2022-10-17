// 【分析】
// 1、题目给出的是一个完全二叉树，完全二叉树有什么特点吗？
// 完全二叉树的特点：叶子结点只能出现在最下层和次下层，且最下层的叶子结点集中在树的左部。需要注意的是，满二叉树肯定是完全二叉树，而完全二叉树不一定是满二叉树。
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
var countNodes = function (root) {
  if (root === null) return 0;
  const queue = [root];
  let count = 0;
  while (queue.length) {
    const curCount = queue.length;
    for (let i = 0; i < curCount; i++) {
      const curNode = queue.shift();
      count++;
      curNode.left && queue.push(curNode.left);
      curNode.right && queue.push(curNode.right);
    }
  }
  return count;
};
