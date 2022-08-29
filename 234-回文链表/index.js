/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  if (head === null) return false;
  //使用快慢指针来解决此类问题、
  let fastPoint = head;
  let slowPoint = head;
  let frontNodeList = null;
  while (fastPoint !== null) {
    fastPoint = fastPoint.next ? fastPoint.next.next : null;
    frontNodeList = slowPoint;
    slowPoint = slowPoint.next;
  }
  frontNodeList.next = null;
  let reversedNodeList = null;
  while (slowPoint !== null) {
    let restNode = slowPoint.next;
    slowPoint.next = reversedNodeList;
    reversedNodeList = slowPoint;
    slowPoint = restNode;
  }
  let curNode = head;
  let reverseCurNode = reversedNodeList;
  while (curNode !== null && reverseCurNode !== null) {
    if (curNode.val !== reverseCurNode.val) return false;
    curNode = curNode.next;
    reverseCurNode = reverseCurNode.next;
  }
  return true;
};
