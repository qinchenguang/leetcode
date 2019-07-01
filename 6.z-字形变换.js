/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 *
 * https://leetcode-cn.com/problems/zigzag-conversion/description/
 *
 * algorithms
 * Medium (43.07%)
 * Likes:    320
 * Dislikes: 0
 * Total Accepted:    38.2K
 * Total Submissions: 88.8K
 * Testcase Example:  '"PAYPALISHIRING"\n3'
 *
 * 将一个给定字符串根据给定的行数，以从上往下、从左到右进行 Z 字形排列。
 * 
 * 比如输入字符串为 "LEETCODEISHIRING" 行数为 3 时，排列如下：
 * 
 * L   C   I   R
 * E T O E S I I G
 * E   D   H   N
 * 
 * 
 * 之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："LCIRETOESIIGEDHN"。
 * 
 * 请你实现这个将字符串进行指定行数变换的函数：
 * 
 * string convert(string s, int numRows);
 * 
 * 示例 1:
 * 
 * 输入: s = "LEETCODEISHIRING", numRows = 3
 * 输出: "LCIRETOESIIGEDHN"
 * 
 * 
 * 示例 2:
 * 
 * 输入: s = "LEETCODEISHIRING", numRows = 4
 * 输出: "LDREOEIIECIHNTSG"
 * 解释:
 * 
 * L     D     R
 * E   O E   I I
 * E C   I H   N
 * T     S     G
 * 
 */
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(s.length <= numRows || numRows == 1) {
      return s;
    }
    let twodimArray = new Array(numRows)
    // fill 导致变量引用
    for(let i = 0; i < numRows; i++) {
      twodimArray[i] = [];
    }
    let count = 0;
    let reverse = false;
    for(i = 0; i < s.length; i++) {
      twodimArray[count].push(s[i]);
      reverse ? count -- : count ++;
      if(count === numRows - 1 || count === 0) {
        reverse = !reverse;
      }
    }
    let str = '';
    for(let i = 0; i < twodimArray.length; i++) {
      str += twodimArray[i].join('');
    }
    return str;
};
// convert('ABc', 2)
// 转换为二维数组来填充

