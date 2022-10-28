// 【分析】
// 1、这道题找二叉树中的val的众数（出现频次最高的），这道题就类似于找出数组中的众数
// 2、还有一个特点是这个题目给的是搜索二叉树，也就是说我们通过中序遍历得到的一定会是一个递增数组
// 3、既然是有序递增的，我们是不是可以通过当前val和前一个val是否相同来进行count统计呢
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
var findMode = function (root) {
  if (!root) return [0];
  const result = [];
  let maxCount = 0;
  let count = 0;
  let nodeList = [];
  const stack = [root];
  while (stack.length) {
    const curNode = stack.pop();
    if (!curNode) {
      const node = stack.pop();
      const lastNodeVal = nodeList[nodeList.length - 1];
      nodeList.push(node.val);
      //这里的逻辑需要梳理一下
      // 什么时候收集？
      // 当node.val !== lastNodeVal的时候，说明上一个数需要收集了,这里可能会存在上一个数是undefined的情况
      // 当node.val === lastNodeVal的时候count++无论是否相等都应该count++来记录当前数
      if (lastNodeVal !== node.val) {
        if (count > maxCount) {
          result.length = 0;
          result.push(lastNodeVal);
          maxCount = count;
        } else if (count === maxCount && lastNodeVal !== undefined) {
          result.push(lastNodeVal);
          maxCount = count;
        } else if (count < maxCount) {
          //不收集
        }
        count = 0;
      }
      count++;
    } else {
      curNode.right && stack.push(curNode.right);
      stack.push(curNode);
      stack.push(null);
      curNode.left && stack.push(curNode.left);
    }
  }
  // 这个还需要考虑最后一个元素
  const lastNodeVal = nodeList[nodeList.length - 1];
  if (count > maxCount) {
    result.length = 0;
    result.push(lastNodeVal);
    maxCount = count;
  } else if (count === maxCount && lastNodeVal !== undefined) {
    result.push(lastNodeVal);
    maxCount = count;
  }
  return result;
};

const result = findMode({
  val: 1,
  left: null,
  right: { val: 2, left: { val: 2, left: null, right: null }, right: null },
});

console.log("result", result);
