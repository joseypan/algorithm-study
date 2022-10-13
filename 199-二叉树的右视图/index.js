// 【分析】
// 1、这道题其实就是要收集最右侧支线的节点，其实有点像昨天学习的非递归版本的中序遍历的变种题，可以试着做一下,但是这样不就和链表没区别了么
// 2、前面的思路都是错的，其实它更像是找到每一层最右边的节点
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
var rightSideView = function (root) {
  if (!root) return [];
  const result = [];
  const queue = [];
  queue.push(root);
  while (queue.length) {
    const curCount = queue.length;
    result.push(queue[curCount - 1].val);
    for (let i = 0; i < curCount; i++) {
      const curNode = queue.shift();
      curNode.left && queue.push(curNode.left);
      curNode.right && queue.push(curNode.right);
    }
  }
  return result;
};
