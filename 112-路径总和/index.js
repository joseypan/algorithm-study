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
const hasPathSum2 = (root, targetSum) => {
  const stack = [];
  let currentNode = root;
  let sum = targetSum;
  while (currentNode || stack.length > 0) {
    while (currentNode) {
      sum = sum - currentNode.val;
      console.log("sum_remove", currentNode, currentNode.val, sum);
      if (sum === 0 && !currentNode.left && !currentNode.right) return true;
      stack.push(currentNode);
      currentNode = currentNode.left;
    }
    currentNode = stack.pop();
    console.log("currentNode", currentNode.val);
    let extralNum = 0;
    if (currentNode.left) extralNum = currentNode.left.val;
    sum += extralNum;
    console.log("sum_plus", sum);
    currentNode = currentNode.right;
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
const root1 = {
  val: 1,
  left: {
    val: -2,
    left: {
      val: 1,
      left: {
        val: -1,
        left: null,
        right: null,
      },
      right: null,
    },
    right: {
      val: 3,
      left: null,
      right: null,
    },
  },
  right: {
    val: -3,
    left: {
      val: -2,
      left: null,
      right: null,
    },
    right: null,
  },
};
let result = hasPathSum2(root1, -4);
console.log("result", result);
