// 一、链表的定义
//   链表是一组节点组成的集合，每个节点都使用一个对象的引用来指向它的后一个节点。指向另一个节点的引用叫做链。
//   假设链表的结构有两个字段val和next,val表示当前节点的值，next表示链表下一项的指针
//   当next指向null节点的时候，表示链表结束的位置
//   通常，会给链表添加一个特殊的节点在开头，称为头节点
//   Header next -> val1 next -> val2 next -> val3 next -> null
//   向链表中插入一个节点的效率很高，需要修改他前面的节点（前驱），使其指向新加入的节点，而将新节点指向原来前驱节点指向的节点即可
//   从链表中删除一个节点，也很简单。只需将待删节点的前驱节点指向待删节点的，同时将待删节点指向null，那么节点就删除成功了
// 参考链接：https://www.jianshu.com/p/f254ec665e57
// 实现一个单链表结构
// 节点的构造函数
function Node(val, next = null) {
  this.val = val;
  this.next = next;
}
// 操作链表的构造函数
function NodeList() {
  this.head = new Node("head");
  this.find = find;
  this.insert = insert;
  this.remove = remove;
  this.findPrev = findPrev;
}
/**
 * 描述：实现一个方法用来找到指定元素的节点
 * @param { String } val 当前要查找的值
 * @return { NodeList } 当前值为传入值的链表结构
 */
function find(val) {
  let currentNode = this.head;
  while (currentNode.val !== val) {
    currentNode = currentNode.next;
  }
  return currentNode;
}
/**
 * 描述：实现一个方法用来插入链表元素（插入默认为是向后插入）
 * @param { String } newVal 新插入节点的值
 * @param { String } val 需要插入项的值内容
 * @return
 */
function insert(newVal, val) {
  const newNode = new Node(newVal);
  let findNode = this.find(val);
  newNode.next = findNode.next;
  findNode.next = newNode;
}
/**
 * 描述：找到当前项的前一项节点
 * @param { String } val 当前项的值
 * @return {NodeList} nodeList 当前项的前一项所链接的链表结构
 */
function findPrev(val) {
  let currentNode = this.head;
  while (currentNode.next !== null && currentNode.next.val !== val) {
    currentNode = currentNode.next;
  }
  return currentNode;
}
/**
 * 描述：从链表中删除一个节点
 * @param { String } val 要删除的节点的值
 * @return {Node} 删除的节点
 */
function remove(val) {
  let prevNode = this.findPrev(val);
  if (prevNode.next !== null) {
    prevNode.next = prevNode.next.next;
  }
}
// const nodeList = new NodeList();
// nodeList.insert("apple", "head");
// nodeList.insert("banana", "apple");
// nodeList.insert("pear", "banana");
// let result = nodeList.find("head");
// console.log("result", result);
// let removeItem = nodeList.remove("banana");
// console.log("removeItem", removeItem);
// let result1 = nodeList.find("head");
// console.log("result1", result1);

// 实现一个双链表
/**
 * 描述：创建节点的构造函数
 * @param { String } val 需要创建节点的值
 * @param { DoubleNodeLink } next 创建节点的后面一项的结构，默认值设为null
 * @param { DoubleNodeLink } prev 创建节点的前面一项的之前结构，默认值也设为null
 * @return undefined
 */
function DoubleNode(val, next = null, prev = null) {
  this.val = val;
  this.next = next;
  this.prev = prev;
}
/**
 * 描述：双链表的构造函数
 * @return  undefined
 */
function DoubleNodeLink() {
  this.head = new DoubleNode("head");
  this.find = findDoubleLink;
  this.insert = insertDoubleLink;
  this.remove = removeDoubleNode;
}
/**
 * 描述：根据值查找到第一次出现的位置
 * @param { String} val 要查找的值
 * @return {DoubleNodeLink} nodeLink 查找到的双链表
 */
function findDoubleLink(val) {
  let currentNode = this.head;
  while (currentNode.val !== val) {
    currentNode = currentNode.next;
  }
  return currentNode;
}
/**
 * 描述：插入一个新节点，一般是在目标节点后插入
 * @param { string } newVal 新节点的值
 * @param { string } val 需要插入节点的值
 * @return undefined
 */
function insertDoubleLink(newVal, val) {
  const currentNode = this.find(val);
  const newNode = new DoubleNode(newVal);
  newNode.next = currentNode.next;
  newNode.prev = currentNode;
  currentNode.next = newNode;
}
/**
 * 描述：删除节点
 * @param { string } val 需要删除项的值
 * @return
 */
function removeDoubleNode(val) {
  const currentNode = this.find(val);
  if (currentNode.next !== null) {
    currentNode.prev.next = currentNode.next;
    currentNode.next.prev = currentNode.prev;
    currentNode.next = null;
    currentNode.prev = null;
  }
}
const doubleNodeLink = new DoubleNodeLink();
doubleNodeLink.insert("apple", "head");
doubleNodeLink.insert("banana", "apple");
doubleNodeLink.insert("pear", "banana");
doubleNodeLink.remove("banana");
let doubleResult = doubleNodeLink.find("head");
console.log("doubleResult", doubleResult);

//循环链表就是最后一项的next指向开头节点
