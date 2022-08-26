var MyQueue = function () {
  // 但是这种解法没有遵循题目含义的两个栈
  this.list = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.list.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  return this.list.shift();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  return this.list[0];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.list.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
var MyQueue = function () {
  this.stackPush = [];
  this.stackPop = [];
};

MyQueue.prototype.pushToPop = function () {
  if (this.stackPop.length === 0) {
    while (this.stackPush.length) {
      this.stackPop.push(this.stackPush.pop());
    }
  }
};
/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.stackPush.push(x);
  this.pushToPop();
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (!this.stackPush.length && !this.stackPop.length) return;
  this.pushToPop();
  return this.stackPop.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  if (!this.stackPush.length && !this.stackPop.length) return;
  this.pushToPop();
  return this.stackPop[this.stackPop.length - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.stackPop.length === 0 && this.stackPush.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
