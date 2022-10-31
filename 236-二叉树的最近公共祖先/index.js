// [分析]
// 1、要找到二叉树的最近公共祖先应该要定位到其父组件,感觉应该要考虑后序遍历
// 2、首先来分析一下有哪些情况？
//   2.1 p和q分别在父节点的两个子节点，这样的话只需要判断节点的left和right就能确定
//   2.2 p是q的父节点，这样一定是确定p之后然后遍历p的子节点找到了q
//   2.3 p和q没有任何关联，这种情况要怎么才能确认呢
// 3、这道题正确的思路是用回溯法做
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  const travelTree = (root, p, q) => {
    if (root === q || root === p || root === null) return root;
    const left = travelTree(root.left, p, q);
    const right = travelTree(root.right, p, q);
    if (left !== null && right !== null) return root;
    if (left === null) return right;
    return left;
  };
  return travelTree(root, p, q);
};
