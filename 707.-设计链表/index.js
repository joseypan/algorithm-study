var MyLinkedList = function (val, next) {
  this.length = val ? 1 : 0;
  // 初始化，可能传值可能不传值
  this.head = val ? new ListNode(val) : null;
  if (this.head) {
    this.head.next = next; // 这里需要建立关联
  }

  if (next) {
    let curNode = next;
    while (curNode) {
      this.tail = curNode;
      curNode = curNode.next;
      this.length++;
    }
  } else {
    this.tail = this.head;
  }
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  const node = this.getNode(index);
  console.log("node", node);
  return node === null ? -1 : node.val;
};
MyLinkedList.prototype.getNode = function (index) {
  // 说明这个索引的值是不存在的
  if (index >= this.length) return null;
  let curNode = this.head;
  let count = 0;
  while (curNode) {
    if (count === index) {
      return curNode;
    }
    curNode = curNode.next;
    count++;
  }
  return null;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  const node = new ListNode(val);
  // 需要考虑头节点在不在
  if (this.head) {
    node.next = this.head;
    this.head = node;
  } else {
    this.head = node;
    this.tail = node;
  }
  this.length++;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  const node = new ListNode(val);
  console.log("this.tail", this.tail);
  if (this.tail) {
    this.tail.next = node;
    this.tail = node;
  } else {
    this.head = node;
    this.tail = node;
  }
  this.length++;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index > this.length) return;
  else if (index === this.length) {
    this.addAtTail(val);
  } else if (index === 0) {
    this.addAtHead(val);
  } else {
    const node = this.getNode(index - 1);
    const nextNode = node.next;
    const newNode = new ListNode(val);
    newNode.next = nextNode;
    node.next = newNode;
    this.length++;
  }
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index >= this.length) return;
  if (index === 0) {
    // 考虑了头部
    this.head = this.head.next;
    this.tail = this.head ? this.tail : null;
  } else {
    const node = this.getNode(index - 1);
    node.next = node.next ? node.next.next : null;
    if (node.next === null) {
      this.tail = node;
    }
  }
  this.length--;
};

MyLinkedList.prototype.getList = function () {
  let curNode = this.head;
  const list = [];
  while (curNode) {
    list.push(curNode.val);
    curNode = curNode.next;
  }
  return list;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

function ListNode(val, next) {
  this.val = val ? val : null;
  this.next = next ? next : null;
}
const list = new ListNode(1);
list.next = new ListNode(2);
// const linkedList = new MyLinkedList(3, list);
const linkedList = new MyLinkedList();
console.log("linkedList", linkedList.getList());
// console.log("index0", linkedList.get(0));
// console.log("index1", linkedList.get(1));
// console.log("index2", linkedList.get(2));

linkedList.addAtIndex(0, 4);
linkedList.addAtIndex(0, 5);
console.log("linkedList", linkedList.getList());
console.log("length", linkedList.length);
linkedList.deleteAtIndex(1);
console.log("linkedList", linkedList.getList());
linkedList.deleteAtIndex(1);
console.log("linkedList", linkedList.getList());
linkedList.addAtHead(10);
linkedList.addAtTail(7);
linkedList.addAtTail(8);
console.log("linkedList", linkedList.getList());
console.log("index", linkedList.get(3));
console.log("index", linkedList.get(4));
