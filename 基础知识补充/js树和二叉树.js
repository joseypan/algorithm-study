// 树和二叉树全面总结
// 学习链接：https://juejin.cn/post/7065513748789723150
// https://juejin.cn/post/6890680584033533960
// 一、概念及定义
// 1、树
//   一个根节点向下发散出不同的节点，一个节点下面留着几个线叫做度，而下面没有了节点就称为叶子
//   同一层的叫兄弟节点，下一层的叫孩子节点，有几代人就有几个层级，层次最大值叫做这个家族的高度，生的孩子数目最多的叫做这个家族的度
// 2、二叉树
//   二叉树字面意思就是一个树只能分两个叉。左边的叉叫做左孩子，右边的叉叫做右孩子
//   官方术语：满足每个节点度不大于2，孩子节点次序确定的树
// 3、满二叉树
//   满二叉树就是每一层都是最大的节点，不能有空
// 4、完全二叉树
//   4.1节点按照编号从左到右依次构建二叉树，不存在无左孩子，却有右孩子的情况
//   4.2满二叉树一定是完全二叉树，完全二叉树不一定是满二叉树

// 二、二叉树的性质
// 1、层结点
//   在二叉树的第i层上最多有2^{i-1}个结点(i>=1)
// 2、总结点
//   深度为k的二叉树最多有2^{k}-1个结点(k>=1)
// 3、深度
//   具有n个节点的完全二叉树的深度为|log2 n|+1
// 4、节点树
//   对于任意一棵二叉树，度为0的节点数等于度为2的节点数+1
// 5、孩子节点
//   节点为i双亲节点为i/2向下取整，左孩子2*i,右孩子2*i+1

// 三、二叉树的遍历
// 1、先序遍历
//   遍历顺序：根节点->左子数->右子树
//   先序遍历就是从根节点开始，围绕二叉树的外圈开始跑（遇到缝隙就钻进去），按照顺序输出序列
// const preOrder = ()=>{
//   if(root !== null){
// /*     访问根节点 */
//     visit(root->data)
// /*     先序遍历左子树 */
//     preOrder(root -> LChild)
// /*     先序遍历右子树 */
//     preOrder(root -> RChild)
//   }
// }
// 2、中序遍历
//   遍历顺序：左子树->根节点->右子树
//   中序遍历就像投影仪一样，将二叉树从最左侧到最右侧一次投影到同一水平线上面，得到的从左到右的相关序列就是二叉树的中序遍历
// const inOrder =()=>{
//   if(root !== null){
//     inOrder(root->LChild);
//     visit(root->data);
//     inOrder(root->RChild);
//   }
// }
// 3、后序遍历
//   遍历顺序：左子树->右子树->根节点
//   后序遍历也是按照先序遍历的顺序输出，不过后序遍历就像剪葡萄，只能一个个剪，不能让超过一个1个的葡萄一起掉下来，那就错了。
// const postOrder = ()=>{
//   if(root !== null){
//     postOrder(root->LChild);
//     postOrder(root->RChild);
//     visit(root->data)
//   }
// }
// 4、层次遍历
//   算法讲解就是一层一层的从左至右输出

// 第二篇文章的学习笔记;
// 一、树的基本概念
//   树是用来模拟具有树状结构性质的数据集合。或者你可以把它认为是一种抽象数据结构或是实现这种抽象数据类型的数据结构，用来模拟具有梳妆结构性质的数据集合。
//   它是由n(n>0)个有限节点组成一个具有层次关系的集合。把它叫做“树”是因为它看起来像一棵倒挂的树，也就是说它是根朝上，而叶朝下的。
//   它具有以下特点：
//     1、每个节点都只有有限个子节点或无子节点
//     2、没有父节点的节点成为根节点
//     3、每一个非根节点有且只有一个父节点
//     4、除了根节点外，每个子节点可以分为多个不相交的子树
//     5、树里面没有环路
// 二、树的基本术语
//   节点的度：一个节点含有的子树的个数称为该节点的度
//   树的度：一棵树中，最大的节点度称为该树的度
//   非终端节点或分支节点： 度不为零的节点
//   叶节点或终端节点：度为零的节点
//   父亲节点或父节点：若一个节点含有子节点，则这个节点成为其子节点的父节点
//   孩子节点或子节点：一个节点含有的子树的根节点称为该节点的子节点
//   兄弟节点：具有相同父节点的节点称为兄弟节点
//   节点的层次：从根开始定义起，根为第1层，根的子节点为第2层，以此类推
//   深度：对于任意节点n,n的深度从根到n的唯一路径长，根的深度为0
//   高度：对于任意节点n,n的高度从n到一片叶子的最长路径长，所有树叶的高度为0
//   堂兄弟的节点：父节点在同一层的节点互为堂兄弟
//   节点的祖先：从根到该节点所经分支上的所有节点
//   子孙：以某节点为根的子树中任一节点都称为该节点的子孙
//   森林：由m(m>=0)棵互不相交的树的集合称为森林
// 二、树的种类
// 无序树：树中任意节点的子节点之间没有顺序关系，这种树成为无序树，也称为自由树
// 有序数：树中任意节点的子节点之间有顺序关系，这种树称为有序树
//       二叉树：每个节点最多含有两个子树的树称为二叉树
//         完全二叉树：对于一棵二叉树，假设其深度为d(d>1)。除了第d层外，其他各层的节点数目均已达最大值，且第d层所有节点从左向右连续紧密排列，这样的二叉树被称为完全二叉树
//         满二叉树：所有叶节点都在最底层的完全二叉树
//         平衡二叉树：当且仅当任何节点的两颗子树的高度差不大于1的二叉树
//         排序二叉树：也称二叉搜索树，有序二叉树
//         霍夫曼树：带权路径最短的二叉树称为哈夫曼树或最优二叉树
//         B树：一种对读写操作进行优化的自平衡的二叉查找树，能够保持数据有序，拥有多于两个子树
// 三、二叉树的概念
//   二叉树是一种典型的树树状结构。如它名字所描述的那样，二叉树是每个节点最多有两个子树的树结构，通常子树被称为“左子树“和”右子树“
//   二叉树的5种基本形态：
//   1、空二叉树
//   2、根和空的左右子树
//   3、根和左子树
//   4、根和右子树
//   5、根和左右子树
// 四、二叉树的遍历
//   1、前序遍历
//   给你一个二叉树的根节点root,返回它节点值的前序遍历
// 用对象来模拟二叉树
let root = {
  val: 1,
  left: null,
  right: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null,
    },
    right: null,
  },
};
let list = [];
const preOrder = (root) => {
  if (root) {
    list.push(root.val);
    if (root.left) preOrder(root.left);
    if (root.right) preOrder(root.right);
  }
};
preOrder(root);
console.log("list", list);
// 非递归版本
let list1 = [];
const preOrderV2 = (root) => {
  const stack = [];
  let currentNode = root;
  while (currentNode || stack.length > 0) {
    while (currentNode) {
      list1.push(currentNode.val);
      stack.push(currentNode);
      currentNode = currentNode.left;
    }
    currentNode = stack.pop();
    currentNode = currentNode.right;
  }
};
preOrderV2(root);
console.log("list1", list1);
// 自己尝试实现这段逻辑
let list2 = [];
const preOrderByCustom = (root) => {
  const stack = [];
  stack.push(root);
  while (stack.length > 0) {
    let currentNode = stack.shift();
    list2.push(currentNode.val);
    if (currentNode.right) stack.unshift(currentNode.right);
    if (currentNode.left) stack.unshift(currentNode.left);
  }
};
preOrderByCustom(root);
console.log("list2", list2);
// 2、中序遍历
// 给定一个二叉树，返回它的中序遍历
// 疑问：什么是迭代算法
const list3 = [];
const inOrder = (root) => {
  if (root) {
    inOrder(root.left);
    list3.push(root.val);
    inOrder(root.right);
  }
};
inOrder(root);
console.log("list3", list3);
//考虑非递归完成中序遍历
const list4 = [];
const inOrderByCustom = (root) => {
  const stack = [];
  stack.push(root);
  while (stack.length > 0) {
    let currentNode = stack.shift();
    if (currentNode.right) {
      stack.unshift(currentNode.right);
    }
    list4.push(currentNode.val);
    if (currentNode.left) {
      stack.unshift(currentNode.left);
    }
  }
};
inOrderByCustom(root);
console.log("list4", list4);
// 3、后序遍历
// 递归版本
const list5 = [];
const postOrder = (root) => {
  if (root) {
    postOrder(root.left);
    postOrder(root.right);
    list5.push(root.val);
  }
};
postOrder(root);
console.log("list5", list5);
// 非递归版
const list6 = [];
const postOrder2 = (root) => {
  const stack = [];
  let currentNode = root;
  let lastNode = null;
  while (currentNode || stack.length > 0) {
    while (currentNode) {
      stack.push(currentNode);
      currentNode = currentNode.left;
    }
    currentNode = stack[stack.length - 1];
    if (!currentNode.right || currentNode.right === lastNode) {
      currentNode = stack.pop();
      list6.push(currentNode.val);
      lastNode = currentNode;
      currentNode = null;
    } else {
      currentNode = currentNode.right;
    }
  }
};
postOrder2(root);
console.log("list6", list6);
