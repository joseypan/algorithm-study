// 【分析】
// 1、这道题需要验证这棵树是否是二叉搜索树，题目给出了二叉搜索树的定义
// 2、那么这个场景就是都满足才是，只要有一个不满足就不是
// 3、考虑这道题用层序遍历,题目理解错意思了，二叉搜索树是左边的子节点均小于右边的子节点
// 4、所以这道题应该用中序遍历
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
 * @return {boolean}
 */
var isValidBST = function (root) {
  if (!root) return false;
  const stack = [root];
  let biggestCount;
  while (stack.length) {
    const curNode = stack.pop();
    if (curNode === null) {
      const node = stack.pop();
      if (biggestCount === undefined) {
        biggestCount = node.val;
      } else if (biggestCount < node.val) {
        biggestCount = node.val;
      } else {
        return false;
      }
    } else {
      curNode.right && stack.push(curNode.right);
      stack.push(curNode);
      stack.push(null);
      curNode.left && stack.push(curNode.left);
    }
  }
  return true;
};
