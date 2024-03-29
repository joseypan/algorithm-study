// 先通过了解递归来了解二叉树
// 递归的核心思想：
// 1、确定递归函数的参数和返回值
// 2、确定终止条件
// 3、确定单层递归的逻辑
// 前序遍历
const traversal = (curNode, result) => {
  if (curNode === null) return;
  //由于是前序遍历，所以中间节点优先收集
  result.push(curNode.val);
  // 这里其实都不需要加判断了，等下一次调用的时候会根据curNode进行判断有效性
  traversal(curNode.left, result);
  traversal(curNode.right, result);
};
const preorderTraversal = (root) => {
  let result = [];
  traversal(root, result);
  return result;
};
// 中序遍历
const traversal1 = (curNode, result) => {
  if (curNode === null) return;
  traversal1(curNode.left, result);
  result.push(curNode.val);
  traversal1(curNode.right, result);
};
const middleOrderTraversal = (root) => {
  let result = [];
  traversal1(root, result);
  return result;
};
// 后序遍历;
const traversal2 = (curNode, result) => {
  if (curNode === null) return;
  traversal2(curNode.left, result);
  traversal2(curNode.right, result);
  result.push(curNode.val);
};
const afterOrderTraversal = (root) => {
  let result = [];
  traversal2(root, result);
  return result;
};
// 前序遍历（迭代法）
// 1、我们知道前序遍历的顺序是中左右，那么当我们用栈来模拟这个过程的时候一定是先放入中，然后取出中，拿到左和右，将右先放入栈中，再后放入左。这样取的时候就会先取出左，循环往复
const preorderTraversal1 = (root) => {
  // 处理一下特殊情况，传入的就是null,那么快速返回
  if (root === null) return [];
  // 用一个栈来收集,其实前中后的区别就在于进栈(队列可能更合适）的区别
  const stack = [];
  const result = [];
  stack.push(root);
  while (stack.length !== 0) {
    const curNode = stack.pop();
    //因为是前序，所以先加入result
    result.push(curNode.val);
    stack.push(curNode.right);
    stack.push(curNode.left);
  }
  return result;
};
// 中序遍历（迭代法）
// 1、目前中序遍历存在一个问题，我们需要先收集左节点的内容，再收集中间节点的内容，但是我们遍历是从中间节点开始的，这就造成了一个问题,开始困惑了
// 2、可以借助指针来解决这一问题
// 3、他的核心思想是我先一层一层收集左侧的节点，当发现收集到最后一层的时候，开始取
const inorderTraversal = (root) => {
  // 还是一样，处理一下错误情况
  if (root === null) return [];
  const stack = [];
  const result = [];
  // 这里有一点区别的是使用了curNode变量在外层,初始值当然是root，并且不填充stack
  let curNode = root;
  while (curNode !== null && stack.length !== 0) {
    if (curNode !== null) {
      //说明当前节点有值，可以继续收集其左节点
      stack.push(curNode);
      curNode = curNode.left;
    } else {
      //已经遍历到左侧节点的尽头了，开始出栈处理了,取栈中第一个，因为第一个是最开始加入的
      curNode = stack.pop(); //这里取出的是最左侧的节点
      result.push(curNode.val);
      curNode = curNode.right;
    }
  }
  return result;
};
// 后序遍历（迭代法）
// 1、所谓后序的顺序是左右中，
const postorderTraversal = (root) => {
  if (root === null) return [];
  const stack = [];
  const result = [];
  stack.push(root);
  while (stack.length !== 0) {
    const curNode = stack.pop();
    result.push(curNode.val);
    if (curNode.left) stack.push(curNode.left);
    if (curNode.right) stack.push(curNode.right);
  }
  //从中右左通过数组反转变成左右中
  const arr = result.reverse();
  return arr;
};
const result = postorderTraversal({
  val: 3,
  left: { val: 1, left: null, right: null },
  right: { val: 2, left: null, right: null },
});
console.log("result", result);
// 二叉树的统一迭代法
const inorderTraversal2 = (root) => {
  if (root === null) return [];
  const result = [];
  const stack = [];
  if (root !== null) stack.push(root);
  while (stack.length) {
    let curNode = stack[stack.length - 1];
    if (curNode !== null) {
      stack.pop();
      if (curNode.right) stack.push(curNode.right);
      stack.push(curNode);
      stack.push(null);
      if (curNode.left) stack.push(curNode.left);
    } else {
      stack.pop(); //弹出空节点
      curNode = stack.pop();
      result.push(node.val);
    }
  }
  return result;
};
var preorderTraversal2 = function (root) {
  if (!root) return [];
  const result = [];
  const stack = [];
  stack.push(root);
  while (stack.length) {
    let curNode = stack.pop();
    if (!curNode) {
      result.push(stack.pop().val);
      continue;
    }
    if (curNode.right) stack.push(curNode.right);
    if (curNode.left) stack.push(curNode.left);
    stack.push(curNode);
    stack.push(null);
  }
  return result;
};
// 二叉树的层序遍历，了解完这个就可以开始写二叉树的算法题了
// 其实要做到广度优先遍历，我们遇到的难点在于如何获取当前层级，其实我们可以用一个数组收集呀！
const levelOrder = (root) => {
  // 和之前一样，先进行根元素判断，若根元素是null则直接返回空数组
  if (!root) return [];
  // 和之前不同的是这里的思想是队列，我们就暂且取名queue吧，不过在js中都是用数组模拟
  const result = [];
  const queue = [];
  queue.push(root);
  while (queue.length) {
    //我们需要知道当前层级有多少个，只用看当前queue中的长度，然后用个数组来收集这一层中所有的元素
    const levelCount = queue.length;
    const curLevel = [];
    for (let i = 0; i < levelCount; i++) {
      //从前面取出来，放到当前层级中去
      const node = queue.shift();
      curLevel.push(node.val);
      //将左节点加入到队列中，方便下一层级的遍历
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    result.push(curLevel);
  }
  return result;
};
// 二叉树实际题目训练
