// 【分析】
// 1、这道题相当于说我调用方法的时候传入一个数字，就代表我有几组()
// 2、例如传入3，那么我们会得到3组()，如何针对于这3组()实现排列组合呢?
// 数量不确定，如何穷举呢？
// 都说回溯算法是深度优先搜索+状态重置，如何理解这两个点呢
// 这道题通过解析来理解回溯算法吧
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  /*
   * 描述：首先定义一个数组用来收集我们的结果
   */
  const result = [];
  /*
   * 描述：这里是用来处理回溯的逻辑了
   * 其他说明：我们每一层其实都是对结果进行操作，进行内容插入
   */
  backtrack(result, [], 0, 0, n);
  /*
   * 描述：最后肯定是要将结果返回的
   */
  return result;
};
/**
 * 描述：处理回溯的逻辑方法
 * @param { string[] } result 结果数组，用来存放所有的配对结果的
 * @param { string[] } cur 用来存放当前这条线他所有的字符组合
 * @param { number } oepn 左括号的数量
 * @param { number } close 右括号的数量
 * @param { number } max 最大的组数
 * @return
 */
function backtrack(result, cur, open, close, max) {
  // 说明已经收集满了，可以把这次的结果加入到结果数组中了
  if (cur.length === 2 * max) {
    result.push(cur.join(""));
    return;
  }
  // 有一点没理解的是这种情况，都是要先(再），不过官方示例中好像也是如此
  // 可能这个是规律吧;
  if (open < max) {
    cur.push("(");
    backtrack(result, cur, open + 1, close, max);
    cur.pop();
  }
  if (close < open) {
    cur.push(")");
    backtrack(result, cur, open, close + 1, max);
    cur.pop();
  }
}
