// 【分析】
// 1、这道题是需要对链表进行排序，题目要求是升序排列
// 2、链表的排序其实就是改变next指针的位置
// 3、可以参考冒泡排序，快排等等的思路(未做出来)
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// var sortList = function (head) {
//   if (!head) return null;
//   const compareVal = head.val;
//   let currentNode = head.next;
//   let smallNodeList = null;
//   let smallCurrentNode = null;
//   let largeNodeList = null;
//   let largeCurrentNode = null;
//   while (currentNode) {
//     if (currentNode.val < compareVal) {
//       // 说明当前节点小于root节点的val值
//       if (smallNodeList === null) {
//         smallNodeList = currentNode;
//         smallCurrentNode = currentNode;
//       } else {
//         smallCurrentNode.next = currentNode;
//         smallCurrentNode = smallCurrentNode.next;
//       }
//     } else {
//       if (largeNodeList === null) {
//         largeNodeList = currentNode;
//         largeCurrentNode = currentNode;
//       } else {
//         largeNodeList.next = currentNode;
//         smallCurrentNode = smallCurrentNode.next;
//       }
//     }
//     currentNode = currentNode.next;
//   }
//   // 这里需要将左链表和头节点以及右链表进行拼接
//   let leftNodeList = sortList(smallNodeList);
//   const rightNode = sortList(largeNodeList);
//   head.next = rightNode;
//   console.log("head", leftNodeList, head);
//   if (leftNodeList === null) {
//     leftNodeList = head;
//   } else {
//     let leftCurrent = leftNodeList;
//     let lastNode = null;
//     while (leftCurrent) {
//       lastNode = leftCurrent;
//       leftCurrent = leftCurrent.next;
//     }
//     lastNode.next = head;
//   }
//   return leftNodeList;
// };
// const head = {
//   val: 4,
//   next: {
//     val: 2,
//     next: {
//       val: 1,
//       next: {
//         val: 3,
//         next: null,
//       },
//     },
//   },
// };
// let result = sortList(head);
// console.log("result", result);
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  let currentNode = head;
  let nodeList = [];
  while (currentNode) {
    nodeList.push(currentNode.val);
    currentNode = currentNode.next;
  }
  nodeList = nodeList.sort((a, b) => b - a);
  let list = null;
  let listCurNode = null;
  while (nodeList.length) {
    const count = nodeList.pop();
    const node = new ListNode(count);
    if (list === null) {
      list = node;
      listCurNode = node;
    } else {
      listCurNode.next = node;
      listCurNode = listCurNode.next;
    }
  }
  return list;
};
