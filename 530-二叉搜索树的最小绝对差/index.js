// 【分析】
// 1、这道题需要求出两个节点中差值最小的
// 2、这道题的前提是这是一个二叉搜索树，二叉搜索树按照中序遍历展平来看一定是一个递增数列
// 3、所以抓住这个特点，想要得到最小的差值，一定是在这个节点的左右两侧出现的
// 4、这里用层序遍历思路错了，应该还是要用中序遍历，通过中序遍历当前节点和前一个节点的差值作比较才是准确的
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
var getMinimumDifference = function (root) {
  if (!root) return 0;
  const stack = [root];
  const collecedList = [];
  let minDiff = Infinity;
  while (stack.length) {
    const curNode = stack.pop();
    if (curNode === null) {
      const node = stack.pop();
      if (collecedList.length !== 0) {
        const diff = Math.abs(node.val - collecedList[collecedList.length - 1]);
        minDiff = Math.min(minDiff, diff);
      }
      collecedList.push(node.val);
    } else {
      curNode.right && stack.push(curNode.right);
      stack.push(curNode);
      stack.push(null);
      curNode.left && stack.push(curNode.left);
    }
  }
  return minDiff;
};
