/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  const result = [];
  const path = [];
  let letterCount = 0;
  const backtraking = (startIndex) => {
    //终止条件
    if (letterCount === s.length) {
      //说明全部都已经遍历完了
      result.push([...path]);
      return;
    }
    for (let i = 0; i < s.length; i++) {
      //这里需要考虑一下怎么收集

      // 若是回文
      path.push(s[i]);
      letterCount++;
      backtraking(i + 1);
      path.pop();
      letterCount--;
    }
  };
  backtraking(0);
  return result;
};

const result = partition("aab");
console.log("result", result);
