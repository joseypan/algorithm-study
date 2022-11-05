// 【分析】
// 1、这道题是要将给定的数据插入到一个二叉搜索树中
// 2、二叉搜索树有什么特点 左<中<右 所以我们可以考虑采取中序遍历，比较当前Val的值和当前节点的值以及下一个节点的值，若curNode.val<val<nexNode.val，那么就是插入的时机
// 3、但是如果说根节点需要被替换，那么原来的根节点可能会要替换其他的位置
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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
  //考虑用递归做，其实就是插空
  if (root === null) {
    const node = new TreeNode(val);
    return node;
  }
  if (root.val > val) root.left = insertIntoBST(root.left, val);
  if (root.val < val) root.right = insertIntoBST(root.right, val);
  return root;
};
