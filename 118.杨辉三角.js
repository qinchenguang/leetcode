/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 *
 * https://leetcode-cn.com/problems/pascals-triangle/description/
 *
 * algorithms
 * Easy (62.74%)
 * Likes:    160
 * Dislikes: 0
 * Total Accepted:    27.7K
 * Total Submissions: 44K
 * Testcase Example:  '5'
 *
 * 给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。
 * 
 * 
 * 
 * 在杨辉三角中，每个数是它左上方和右上方的数的和。
 * 
 * 示例:
 * 
 * 输入: 5
 * 输出:
 * [
 * ⁠    [1],
 * ⁠   [1,1],
 * ⁠  [1,2,1],
 * ⁠ [1,3,3,1],
 * ⁠[1,4,6,4,1]
 * ]
 * 
 */
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if(numRows === 0) {
    return [];
  }
  let resultArray = [];
  let array = [1];
  resultArray.push(array);
  for(let i = 1; i < numRows; i++) {
    let array = [1];
    let lastArray = resultArray[i - 1];
    for(let j = 1; j < i; j++) {
      array.push(lastArray[j - 1] + lastArray[j])
    }
    array.push(1);
    resultArray.push(array);
  }
  return resultArray;
};

