/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// 【分析】
// 这道题有几个关键点：
// 1、二叉搜索树结构是左节点的val<根节点的val<右节点的val
// 2、这是一个升序链表，很自然的符合了二叉搜索树的特性。所以我们要确保根节点位于链表中间
// 3、将问题拆分：我们每一次都是在寻找左右链表的中间值，然后再次划分成左右链表，再找中间值。直到left和right均为null,进行组装
// 4、如何找到链表的中间值？使用快慢指针
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
  const middleNode = findMiddle(head);
  if (!middleNode) return null;
  const root = new TreeNode(middleNode.val);
  const rightNode = middleNode.next;
  const leftNode = head === middleNode ? null : head;
  root.left = sortedListToBST(leftNode);
  root.right = sortedListToBST(rightNode);
  return root;
};
function findMiddle(head) {
  if (!head) return null;
  let fastArrow = head;
  let slowArrow = head;
  let lastNode = null;
  while (fastArrow.next && fastArrow.next.next) {
    // 说明还没有遍历完成
    fastArrow = fastArrow.next.next;
    lastNode = slowArrow;
    slowArrow = slowArrow.next;
  }
  if (lastNode) lastNode.next = null;
  return slowArrow;
}
const nodeList = {
  val: -10,
  next: {
    val: -3,
    next: {
      val: 0,
      next: {
        val: 5,
        next: {
          val: 9,
          next: null,
        },
      },
    },
  },
};
let result = sortedListToBST(nodeList);
console.log("result", result);
