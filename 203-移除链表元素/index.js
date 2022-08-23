/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/* 分析：
1、遍历整个链表结构，需要判断当前项的val和传入的val是否相等，若相等则需要上一项的next指向下一项的next 
2、所以得有一个变量记录链表的上一项,但是上一项的初始值是null,null.next会报错
*/
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  // 判断传入的head是否为null,若为null直接返回
  if (!head) return null;
  let currentNode = head;
  let lastNode;
  while (currentNode) {
    // 判断当前项的val是否与传入的val值相同
    if (currentNode.val === val) {
      // 由于lastNode的初始值为null,所以这里得加一个判断
      if (lastNode) {
        // 将上一个节点的next指针指向currentNode的下一项
        lastNode.next = currentNode.next;
        // 上一个节点也要向后移动一位
        lastNode = lastNode.next;
      } else {
        // 当前项需要去除，但是是第一项
        if (!lastNode && currentNode.next.val !== val)
          lastNode = currentNode.next;
      }
    } else {
      // 说明当前项是要保留的，判断lastNode存不存在，若不存在则把lastNode指向当前项
      lastNode = currentNode;
    }
    currentNode = currentNode.next;
  }
  console.log("data", head, lastNode);

  return head;
};
const head = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 6,
      next: {
        val: 3,
        next: {
          val: 4,
          next: {
            val: 5,
            next: {
              val: 6,
              next: null,
            },
          },
        },
      },
    },
  },
};
const head1 = {
  val: 7,
  next: {
    val: 7,
    next: {
      val: 7,
      next: {
        val: 7,
        next: {
          val: 7,
          next: {
            val: 7,
            next: null,
          },
        },
      },
    },
  },
};
let result = removeElements(head, 6);
console.log("result", result);
let result1 = removeElements(head1, 7);
console.log("result1", result1);
