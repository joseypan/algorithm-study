// 【分析】
// 1、这道题主要是需要遍历root二叉树的节点（这里考虑层序遍历）
// 2、当出现某个节点的值与subRoot根节点的值相同时候开始进入比较的逻辑
// 3、比较逻辑也可以定为层序遍历
// 4、比较感觉得单独拿出来
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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
  if (!root || !subRoot) return false;
  const queue = [root];
  while (queue.length) {
    const curCount = queue.length;
    for (let i = 0; i < curCount; i++) {
      const curNode = queue.shift();
      if (curNode.val === subRoot.val) {
        //这里处理比较两个树是否相同的逻辑
        const result = isSameTree(curNode, subRoot);
        if (result === true) return true;
      }
      curNode.left && queue.push(curNode.left);
      curNode.right && queue.push(curNode.right);
    }
  }
  return false;
};
const isSameTree = (n1, n2) => {
  if (n1 === null && n2 === null) return true;
  if (n1 === null || n2 === null) return false;
  //怎么比较两个树是一样的呢？n1遍历一下n2也要遍历一下
  const n1Stack = [n1];
  const n2Stack = [n2];
  while (n1Stack.length || n2Stack.length) {
    const n1CurNode = n1Stack.shift();
    const n2CurNode = n2Stack.shift();
    if (!n1CurNode && !n2CurNode) continue;
    if (!n1CurNode || !n2CurNode || n1CurNode.val !== n2CurNode.val) {
      return false;
    }
    n1Stack.push(n1CurNode.left);
    n1Stack.push(n1CurNode.right);
    n2Stack.push(n2CurNode.left);
    n2Stack.push(n2CurNode.right);
  }
  return true;
};
