/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */
// 【分析】
// 1、按照最基础的方式无非就是遍历所有版本，然后第一次出现的则为第一版本有问题的，但是这样的效率太低了。还出现了超出限制。
// 2、其实仔细分析题意，当出现一版错误的时候后面都会错误，那么第一次出现一定是介于不错和错误之间-->二分法

const isBadVersion = function (version) {
  return version === 4;
};
/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    for (let i = 0; i < n; i++) {
      let result = isBadVersion(i + 1);
      if (result) {
        return i + 1;
      }
    }
  };
};

/**
 * 描述：二分法处理第一个错误版本(速度提升了很多，但是还是只击败了50左右)
 * @param {  }
 * @return
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let start = 1;
    let end = n;
    let middle = Math.ceil((end - start) / 2);
    while (end > start) {
      let result = isBadVersion(middle);
      if (result) {
        //说明中间已经是错误版本了，所以取左侧继续二分
        end = middle;
        middle = middle - Math.ceil((end - start) / 2);
      } else {
        //说明中间还不是错误版本，选择右侧继续二分
        start = middle + 1;
        middle = middle + Math.ceil((end - start) / 2);
      }
    }
    return end;
  };
};

const fn = solution((num) => num >= 4);
let result = fn(8);
console.log("result", result);
