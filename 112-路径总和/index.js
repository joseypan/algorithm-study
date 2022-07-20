/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  //需要用数组维护当前路径上的节点，目前的问题是需要回退到哪个位置呢？
  let currentNode = root;
  if (currentNode) {
    console.log(targetSum, "targetSum", currentNode.val);
    if (
      targetSum === currentNode.val &&
      !currentNode.left &&
      !currentNode.right
    )
      return true;
    let leftResult = hasPathSum(currentNode.left, targetSum - currentNode.val);
    if (leftResult) return leftResult;
    let rightResult = hasPathSum(
      currentNode.right,
      targetSum - currentNode.val
    );
    if (rightResult) return rightResult;
  }
  return false;
};
const root = {
  val: 5,
  left: {
    val: 4,
    left: {
      val: 11,
      left: {
        val: 7,
        left: null,
        right: null,
      },
      right: {
        val: 2,
        left: null,
        right: null,
      },
    },
    right: null,
  },
  right: {
    val: 8,
    left: {
      val: 13,
      left: null,
      right: null,
    },
    right: {
      val: 4,
      left: null,
      right: {
        val: 1,
        left: null,
        right: null,
      },
    },
  },
};
let result = hasPathSum(root, 22);
console.log("result", result);
