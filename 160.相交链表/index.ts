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
