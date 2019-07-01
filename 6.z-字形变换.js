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
    if(numRows == 1){
      return s;
    }
    numRows = numRows - 1;
    let twodimArray = [];
    let xPoint = 0;
    let yPoint = 0;
    let week = numRows * 2;
    for(i = 0; i < s.length; i++) {
      let flag = i % week;
      if (flag <= numRows){
        xPoint = flag;
        yPoint = Math.floor(i / week) * numRows;
      } else {
        let base = Math.floor(i / week) ;
        xPoint = Math.abs(numRows - flag % numRows);
        yPoint = Math.abs(base * numRows + flag % numRows);
      }

      // console.log(xPoint,yPoint)
      if(twodimArray[xPoint]){
        twodimArray[xPoint][yPoint] = s[i];
      } else {
        twodimArray[xPoint] = [];
        twodimArray[xPoint][yPoint] = s[i]
      }
    }
    let str = '';
    for(let i = 0; i < twodimArray.length; i++) {
      str += twodimArray[i].join('');
    }
    return str;
};
 // convert('A', 1)
// 转换为二维数组来填充

