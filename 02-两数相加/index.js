// 【分析】
// 1、看这道题感觉就是两个链表的遍历，遍历这个步骤肯定是少不了了，遍历的同时就可以把两个链表的数分别算出，
// 2、但问题是它最后的结果还是一个链表，而且有个情况是两个链表的长度也不一定一致，所以得反向遍历
// 3、反向遍历才能一位一位对齐，好难啊
// 4、那么通过查询资料得知要想反向获取链表的结构，可以采取栈的思路，先进后出
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let l1CurrentNode = l1;
  let l2CurrentNode = l2;
  const l1Stack = [];
  const l2Stack = [];
  while (l1CurrentNode !== null) {
    l1Stack.push(l1CurrentNode);
    l1CurrentNode = l1CurrentNode.next;
  }
  while (l2CurrentNode !== null) {
    l2Stack.push(l2CurrentNode);
    l2CurrentNode = l2CurrentNode.next;
  }
  let head = null;
  let isFlag = 0;
  let listNode = head;
  while (l1Stack.length !== 0 || l2Stack.length !== 0) {
    const l1Val = l1Stack.length > 0 ? l1Stack.shift() : 0;
    const l2Val = l2Stack.length > 0 ? l2Stack.shift() : 0;
    let val = l1Val + l2Val + isFlag;
    if (val >= 10) {
      isFlag = 1;
      val = val % 10;
    } else {
      isFlag = 0;
    }
    const currentNode = new ListNode(val, null);
    if (listNode === null) {
      listNode = currentNode;
      head = listNode;
    } else {
      listNode.next = currentNode;
      listNode = listNode.next;
    }
  }
  if (isFlag === 1) {
    listNode.next = new ListNode(isFlag, null);
  }
  return head;
};
