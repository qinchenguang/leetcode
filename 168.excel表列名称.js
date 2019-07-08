/*
 * @lc app=leetcode.cn id=168 lang=javascript
 *
 * [168] Excel表列名称
 *
 * https://leetcode-cn.com/problems/excel-sheet-column-title/description/
 *
 * algorithms
 * Easy (33.11%)
 * Likes:    122
 * Dislikes: 0
 * Total Accepted:    9.5K
 * Total Submissions: 28.6K
 * Testcase Example:  '1'
 *
 * 给定一个正整数，返回它在 Excel 表中相对应的列名称。
 * 
 * 例如，
 * 
 * ⁠   1 -> A
 * ⁠   2 -> B
 * ⁠   3 -> C
 * ⁠   ...
 * ⁠   26 -> Z
 * ⁠   27 -> AA
 * ⁠   28 -> AB 
 * ⁠   ...
 * 
 * 
 * 示例 1:
 * 
 * 输入: 1
 * 输出: "A"
 * 
 * 
 * 示例 2:
 * 
 * 输入: 28
 * 输出: "AB"
 * 
 * 
 * 示例 3:
 * 
 * 输入: 701
 * 输出: "ZY"
 * 
 * 
 */
/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
  // A - Z 对应 65 - 90; 
  let max = 26;
  let result = [];
  let i = 0;
  let maxLength = 0;
  while(n >= Math.pow(max, maxLength + 1)){
    maxLength ++;
  }
  for(let i = maxLength; i >= 0; i--) {
    let num = Math.floor(n / Math.pow(max, i));
    result.push(num)
    n = n - Math.pow(max, i) * num;
  }
  for (i = result.length - 1; i > 0; i--) {
    if (result[i] === 0) {
      result[i] = 26;
      result[i-1] = result[i-1] - 1;
    }
  }
  let resultStr = '';
  for(let i = 0; i < result.length; i ++) {
    if(result[i] !== 0) {
      resultStr += String.fromCharCode(result[i] + 64);
    }
  }
  return resultStr;

};
// convertToTitle(702);
// 先把数字转换成26进制来做。然后对特殊的字符 z（为26）进行处理

