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
  if (root === null || p === null || q === null) return root;
  //根据搜索二叉树的特点可知，左侧的值>中间的值>右边的值
  // 若p.val和q.val均小于currentNode.val说明这两个节点都在左子树上
  // 若p.val和q.val均大于currentNode.val说明这两个节点都在右子树上
  // 若一左一右，基本上当前节点就是公共父节点了
  //广度优先遍历
  const stack = [root];
  while (stack.length > 0) {
    let currentNode = stack.shift();
    if (p.val < currentNode.val && q.val < currentNode.val) {
      stack.push(currentNode.left);
    } else if (p.val > currentNode.val && q.val > currentNode.val) {
      stack.push(currentNode.right);
    } else {
      return currentNode;
    }
  }
};
