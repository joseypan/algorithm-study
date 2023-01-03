/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  const result = guess(n);
  if (result === -1) {
    //说明选出的比猜的小，那么范围限定在1~n
    n--;
    return guessNumber(n);
  } else if (result === 1) {
    n++;
    return guessNumber(n);
  } else {
    return n;
  }
};
/* 上述写法可以解决这道题，但是实际在检验过程中会出现超出栈内存的提示。所以得对当前算法进行优化
目前有一个困惑点在于pick值我们是不知道的，只能通过n去进行尝试
当我们发现n>pick的时候调用guess会获得-1，这个时候我们会将n缩小范围，关键在于我们如何合理的缩小范围，假设我们让newN = Math.floor(n/2),再进行验证，若guess(newN)===-1,则说明需要进一步缩小
而且关键点在于pick的值一定是在1和初始n之间，也就是第一次的结果一定会是0或者-1 */
var guessNumber = function (n) {
  let left = 1;
  let right = n;
  while (left < right) {
    let middle = left + Math.floor((right - left) / 2);
    if (guess(middle) <= 0) {
      //说明middle的值大于pick的值
      right = middle;
    } else {
      left = middle + 1;
    }
  }
  return left;
};
