// 【分析】
// 1、要判断是否为平衡二叉树，就要根据平衡二叉树的定义去判定
// 一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1 。
// 2、自己的思路首先想到的是通过广度优先先去遍历二叉树
// 3、若是左孩子或者右孩子的结点为null则开始计数层级，判断层级差是否大于1，若大于1直接return false
// 回归到最根本的定义，什么是节点的高度？
// 高度：对于任意节点n,n的高度从n到一片叶子的最长路径长，所有树叶的高度为0
// 所有仅当左右孩子均为null的时候才能被认为是叶子结点，当前叶子结点才可以计数
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
// /**
//  * @param {TreeNode} root
//  * @return {boolean}
//  */
// var isBalanced = function (root) {
//   // 先将最特殊的情况进行处理
//   if (!root) return true;
//   const stack = [root];
//   let maxLength = 0;
//   let minLength = 0;
//   let isFirst = true;
//   while (stack.length > 0) {
//     let length = stack.length;
//     while (length > 0) {
//       let currentNode = stack.shift();
//       if (!currentNode.left || !currentNode.right) {
//         minLength = isFirst ? maxLength + 1 : minLength;
//         isFirst = false;
//       }
//       if (currentNode.left) {
//         stack.push(currentNode.left);
//       }
//       if (currentNode.right) {
//         stack.push(currentNode.right);
//       }
//       length--;
//     }
//     maxLength++;
//   }
//   console.log("min", minLength, "max", maxLength);
//   return maxLength <= minLength + 1;
// };
// const root = {
//   val: 3,
//   left: {
//     val: 9,
//     left: null,
//     right: null,
//   },
//   right: {
//     val: 20,
//     left: {
//       val: 15,
//       left: null,
//       right: null,
//     },
//     right: {
//       val: 7,
//       left: null,
//       right: null,
//     },
//   },
// };
// const root = {
//   val: 1,
//   left: {
//     val: 2,
//     left: {
//       val: 3,
//       left: {
//         val: 4,
//         left: null,
//         right: null,
//       },
//       right: {
//         val: 4,
//         left: null,
//         right: null,
//       },
//     },
//     right: {
//       val: 3,
//       left: null,
//       right: null,
//     },
//   },
//   right: {
//     val: 2,
//     left: null,
//     right: null,
//   },
// };
const root = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: {
        val: 8,
        left: null,
        right: null,
      },
      right: null,
    },
    right: {
      val: 5,
      left: null,
      right: null,
    },
  },
  right: {
    val: 3,
    left: {
      val: 6,
      right: null,
      left: null,
    },
    right: null,
  },
};
let result = isBalanced(root);
console.log("result", result);

// 【分析】
// 1、题目也给出了平衡二叉树的定义，每个节点的左右两个子树的高度差绝对值不超过1
// 2、想到的方式是层序遍历，每一个节点都判断一下当前节点的左右子树的最大深度，然后比较深度差
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
var isBalanced = function (root) {
  // 特殊情况，传入的根元素是null，也当做true处理
  if (root === null) return true;
  const queue = [root];
  while (queue.length) {
    const curCount = queue.length;
    for (let i = 0; i < curCount; i++) {
      const curNode = queue.shift();
      //取出当前节点之后，需要判断当前节点的左右节点最大深度
      const leftCount = maxHeight(curNode.left);
      const rightCount = maxHeight(curNode.right);
      if (Math.abs(leftCount - rightCount) > 1) {
        return false;
      }
      curNode.left && queue.push(curNode.left);
      curNode.right && queue.push(curNode.right);
    }
  }
  return true;
};

const maxHeight = (root) => {
  //用后序遍历
  if (!root) return 0;
  const stack = [root];
  let count = 0;
  let maxDepth = 0;
  while (stack.length) {
    const curNode = stack.pop();
    if (curNode === null) {
      stack.pop();
      count--; //这里的count--不是很理解
    } else {
      stack.push(curNode);
      stack.push(null);
      curNode.right && stack.push(curNode.right);
      curNode.left && stack.push(curNode.left);
      count++;
    }
    maxDepth = maxDepth > count ? maxDepth : count;
  }
  return maxDepth;
};
