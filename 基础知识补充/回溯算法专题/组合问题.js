// 例如 77题
// 【分析】
// [1,n]说明n是横向for循环的,个数为k,则k是纵向深度
const combine = (n, k) => {
  const result = []; //用来收集结果的容器
  const list = []; //每一层的容器
  const backtracking = (n, k, startIndex, list) => {
    //终止条件
    if (list.length === k) {
      //说明收集满了
      result.push([...list]);
      return; //结束递归
    }
    //循环体
    for (let i = startIndex; i <= n; i++) {
      //收集
      list.push(i);
      //递归
      backtracking(n, k, i + 1, list);
      //回溯
      list.pop();
    }
  };
  backtracking(n, k, 1, list);
  return result;
};
// 回溯算法的剪枝优化;
// 举个例子，n=4,k=4的话，那么第一层for循环的时候，从元素2开始的遍历都没有意义了。在第二层for循环，从元素3开始的遍历都没有意义了
// 剪枝的地方就是在递归中每一层的for循环所选择的起始位置。
// 如果for循环选择的起始位置之后的元素个数已经不足我们需要的元素个数了，那么久没有必要搜索了
// 1、已经选择的元素个数：path.length
// 2、还需要的元素个数：k - path.length
// 3、在集合n中至多要从该起始位置：n-(k-path.length) +1开始遍历
const combine1 = (n, k) => {
  const result = [];
  const path = [];
  const backtracking = (n, k, startIndex, path, result) => {
    if (path.length === k) {
      result.push([...path]);
      return;
    }
    for (let i = startIndex; i <= n - (k - path.length) + 1; i++) {
      path.push(i);
      backtracking(n, k, i + 1, path, result);
      path.pop();
    }
  };
  backtracking(n, k, 1, path, result);
  return result;
};
