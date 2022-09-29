// 【分析】
// 1、这道题感觉有点难度，它是相当于用二维数组围成了一个棋盘，然后需要根据棋盘的情况推断出能否组成这样一个单词,应该是属于八皇后的变换题型
// 2、先思考一下吧，之前我们操作的内容仅仅是一维数组，但是现在变成了二维的，如何遍历呢?并且要使得其是一个单词，必须是当前位置的相邻位置，也就是[i-1,j],[i+1,j],[i,j-1],[i,j+1]
// 3、那么先遍历？怎么遍历呢？
// 4、我们首先来想我们递归的结束条件是什么？同样同样是path.length === word.length,这样就表示结束了
// 5、我们递归的时候需要传递的参数有哪些？board,word,rowIndex,columnIndex,result,path
// 6、我们在每次遍历的时候都
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  let result = false;
  const path = [];
  backtracking(board, word, 0, result, path);
  return result;
};
const backtracking = (board, word, rowIndex, result, path) => {
  if (
    path.length === word.length ||
    rowIndex === board[0].length - 1 ||
    rowIndex === 0
  ) {
    // 这里临时先这样写，把基本架子搭出来之后再改具体逻辑
    let str = "";
    for (let i = 0; i < path.length; i++) {
      const row = path[i][0];
      const column = path[i][1];
      // console.log("index", row, column);
      // console.log("for-str", str, board[row][column]);
      str += board[row][column];
    }
    console.log("str", str, path);
    if (str === word) result = true;
    return;
  }
  for (let columnIndex = 0; columnIndex < board.length; columnIndex++) {
    if (isValid(rowIndex, columnIndex, path, board)) {
      path.push([rowIndex, columnIndex]);
      backtracking(board, word, rowIndex + 1, result, path);
      backtracking(board, word, rowIndex - 1, result, path);
      path.pop();
    }
  }
};
const isValid = (rowIndex, columnIndex, path, board) => {
  // 什么样算作有效？path的最后一个元素的rowIndex或者columnIndex相同
  const lastItem = path[path.length - 1];
  return (
    path.length === 0 ||
    (lastItem && (lastItem[0] === rowIndex || lastItem[1] === columnIndex))
  );
};
const result = exist(
  [
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"],
  ],
  "ABCCED"
);
console.log("result", result);
