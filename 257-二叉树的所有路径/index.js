// 【分析】
// 1、像这种要找到树状结构的路径，首先想到的就是深度优先遍历（可以前中后都行）
// 2、但是难点在于我需要保留之前的父节点，才能组成一个完整的路径，要怎么绑定对应的父节点呢？
// 假设按照前序遍历来看，我们定义一个stack数组，一开始是root，取出root之后我们将right先unshift存入，然后再将left按unshift存入。
// 这样数组中的数据一定是按照最左边的是最前面,但是这样的话

// 先以完成这道题为目标来看，我们可以考虑递归
// 递归来写这道题其实就是字符串拼接
// 应该可以考虑用数组收集某条路径的内容，然后用array.join的方式进行拼接成字符串
// 用递归处理相对来说还好，通过传递list的方式能够保留每一个层级的值
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
 * @return {string[]}
 */
var binaryTreePaths = function (root, list = []) {
  if (!root) return [];
  const currentPathList = [...list];
  currentPathList.push(root.val);
  if (!root.left && !root.right) {
    //说明当前为叶子节点
    return [currentPathList.join("->")];
  }
  const leftList = binaryTreePaths(root.left, currentPathList);
  const rightList = binaryTreePaths(root.right, currentPathList);
  return [...leftList, ...rightList];
};

// 现在需要思考如何以非递归的方式把这道题写出来呢?

