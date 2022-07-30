/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let aCurrentNode = headA;
  while (aCurrentNode) {
    let bCurrentNode = headB;
    while (bCurrentNode) {
      if (bCurrentNode === aCurrentNode) {
        return bCurrentNode;
      } else {
        bCurrentNode = bCurrentNode.next;
      }
    }
    aCurrentNode = aCurrentNode.next;
  }
  return null;
};
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let aSize = 0;
  let bSize = 0;
  let aCurrentNode = headA;
  let bCurrentNode = headB;
  while (aCurrentNode) {
    aSize++;
    aCurrentNode = aCurrentNode.next;
  }
  while (bCurrentNode) {
    bSize++;
    bCurrentNode = bCurrentNode.next;
  }
  //计算出来个数差，表示从第几项开始短的一项开始进行索引计算
  let diff = Math.abs(aSize - bSize);
  let index = 0;
  aCurrentNode = headA;
  bCurrentNode = headB;
  while (index < aSize || index < bSize) {
    if (index < diff) {
      //只有多出来的链表计算
      if (aSize > bSize) aCurrentNode = aCurrentNode.next;
      else bCurrentNode = bCurrentNode.next;
    } else {
      //两个链表都需要计算
      if (aCurrentNode === bCurrentNode) {
        return aCurrentNode;
      }
      aCurrentNode = aCurrentNode.next;
      bCurrentNode = bCurrentNode.next;
    }
    index++;
  }
  return null;
};
