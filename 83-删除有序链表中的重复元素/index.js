// 【分析】
// 1、其实还不是很理解链表结构，暂且用对象来替代表示吧
// 2、其实问题就回到我要遍历这个对象，并且需要去除重复项，就是将下一位移到上一位来
// 按照这个思路有个情况没有考虑到，如果说下下位也相等，则会遗漏这个判断情况，是不对的
// 所以如何处理这个关系呢？
//方式一：是否可以借助一个新的链表结构，判断当前遍历的节点val与新链表的最后一项的val是否相等，若相等则不加进去
//方式二：改变能替换的条件，条件必须是和下一项不相等的情况下，才能被赋值，要记录最后的node
//先按照方式一来实现，需要解决的疑问，如何创建一个空链表
//可以通过调用ListNode方法来创建
let head = {
  val: 1,
  next: {
    val: 1,
    next: {
      val: 2,
      next: {
        val: 3,
        next: {
          val: 3,
          next: null,
        },
      },
    },
  },
};
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (head === null) return head;
  let currentNode = head;
  let lastNode = head;
  while (currentNode.next !== null) {
    if (currentNode.val !== lastNode.val) {
      lastNode.next = currentNode;
      lastNode = lastNode.next;
    }
    currentNode = currentNode.next;
  }
  if (currentNode.val === lastNode.val) {
    lastNode.next = null;
  } else {
    lastNode.next = currentNode;
  }
  return head;
};
let result = deleteDuplicates(head);
console.log("result", result);
