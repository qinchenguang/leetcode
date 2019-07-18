/*
 * @lc app=leetcode.cn id=130 lang=javascript
 *
 * [130] 被围绕的区域
 *
 * https://leetcode-cn.com/problems/surrounded-regions/description/
 *
 * algorithms
 * Medium (36.61%)
 * Likes:    75
 * Dislikes: 0
 * Total Accepted:    6.6K
 * Total Submissions: 18.1K
 * Testcase Example:  '[["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]'
 *
 * 给定一个二维的矩阵，包含 'X' 和 'O'（字母 O）。
 * 
 * 找到所有被 'X' 围绕的区域，并将这些区域里所有的 'O' 用 'X' 填充。
 * 
 * 示例:
 * 
 * X X X X
 * X O O X
 * X X O X
 * X O X X
 * 
 * 
 * 运行你的函数后，矩阵变为：
 * 
 * X X X X
 * X X X X
 * X X X X
 * X O X X
 * 
 * 
 * 解释:
 * 
 * 被围绕的区间不会存在于边界上，换句话说，任何边界上的 'O' 都不会被填充为 'X'。 任何不在边界上，或不与边界上的 'O' 相连的 'O'
 * 最终都会被填充为 'X'。如果两个元素在水平或垂直方向相邻，则称它们是“相连”的。
 * 
 */
function mark(board, x, y, row, col){
  if(x < 0 || y < 0 || x > row - 1 || y > col - 1 || board[x][y] !== "O"){
    return;
  }
  board[x][y] = 'A';
  mark(board, x + 1, y, row, col)
  mark(board, x - 1, y, row, col)
  mark(board, x, y + 1, row, col)
  mark(board, x, y - 1, row, col)
}
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
  
  let row = board.length;
  let col = board[0] ? board[0].length : 0;
  if(row <= 2 || col <= 2){
    return board;
  }
  for(let i = 0; i < row; i++){
    for (let j = 0; j < col; j++) {
      if( i == 0 || j === 0 || i === row - 1 || j === col - 1){
        mark(board,i,j,row,col);
      }
    }
  }
  for(let i = 0; i < row; i++){
    for (let j = 0; j < col; j++) {
      if(board[i][j] === 'A'){
        board[i][j] = 'O';
      } else {
        board[i][j] = 'X';
      }
    }
  }
      
};
// solve([["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]])
// 从外到内进行遍历 按照正方形的边进行遍历
// 然后za
