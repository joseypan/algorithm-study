/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  const set = new Set();
  let size = set.size;
  //遍历链表，每遍历一项就往Set中添加一项，若添加之后size无变化，则认为有环形
  let currentNode = head;
  while (currentNode) {
    set.add(currentNode);
    let currentSize = set.size;
    if (currentSize === size) {
      return true;
    }
    size = currentSize;
    currentNode = currentNode.next;
  }
  return false;
};
// 但是此方式运行效果好像并不是很好,有无其他思路呢？
// 如何判断一个链表是不是回形链表？无非最直接的方式就是判断指针是否出现过，除此之外还有其他特点吗
// 而且链表有个特点，如果不是双向链表，很难通过当前节点找到上一个节点
// 所以仅通过next找下一个节点的方式，能判断出来吗？
