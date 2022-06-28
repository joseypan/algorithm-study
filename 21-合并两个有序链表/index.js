/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/* const getVal = (linkList, array) => {
  console.log(array, linkList);
  let list = [...array];
  let curNode = linkList;
  console.log(curNode, curNode.val);
  while (linkList.next) {
    list.push(curNode.val);
    curNode = curNode.next;
  }
  list.push(curNode.val);
  return list;
}; */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
/* var mergeTwoLists = function (list1, list2) {
  //分别遍历list1和list2获取到所有的val进行排序再重新组成链表结构
  const list = [];
  //list = getVal(list1,list);
  //list = getVal(list2,list);
  let curNode = list1;
  while (curNode.next) {
    list.push(curNode.val);
    curNode = curNode.next;
  }
  list.push(curNode.val);
  curNode.next = list2;
  curNode = list2;
  while (curNode.next) {
    list.push(curNode.val);
    curNode = curNode.next;
  }
  list.push(curNode.val);
  let array = list.sort((a, b) => a - b);
  console.log(array, list1);
  curNode = list1;
  let index = 0;
  while (curNode.next) {
    curNode.val = array[index];
    index++;
    curNode = curNode.next;
  }
  curNode.val = array[index];
  return list1;
}; */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  //是否可以引入冒泡排序的思想？
  const prehead = new ListNode(-1);
  let prev = prehead;
  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      prev.next = list1;
      list1 = list1.next;
    } else {
      prev.next = list2;
      list2 = list2.next;
    }
    prev = prev.next;
  }
  prev.next = list1 === null ? list2 : list1;
  return prehead.next;
};
