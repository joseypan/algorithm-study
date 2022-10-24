// 【分析】
// 1、我们相当于要通过中序遍历的结果和后序遍历的结果推算出这个树形结构
// 2、中序遍历的顺序是左中右 后序遍历的顺序是左右中,这两者之间有什么关联呢？
// 3、如果是要构造一个树状结构，应该会是中左右的顺序
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  if (inorder.length === 0 || postorder.length === 0) return null;
  // 取出后序遍历的最后一位作为根节点
  const rootVal = postorder[postorder.length - 1];
  const rootNode = new TreeNode(rootVal);
  if (inorder.length === 1 || postorder.length === 1) return rootNode;
  //切割中序遍历的元素
  const rootIndex = inorder.indexOf(rootVal);
  const inorderLeft = inorder.slice(0, rootIndex);
  const inorderRight = inorder.slice(rootIndex + 1, inorder.length);
  const postorderLeft = postorder.slice(0, inorderLeft.length);
  const postorderRight = postorder.slice(
    inorderLeft.length,
    postorder.length - 1
  );
  rootNode.left = buildTree(inorderLeft, postorderLeft);
  rootNode.right = buildTree(inorderRight, postorderRight);
  return rootNode;
};
