/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 *
 * https://leetcode-cn.com/problems/reverse-integer/description/
 *
 * algorithms
 * Easy (32.53%)
 * Likes:    1109
 * Dislikes: 0
 * Total Accepted:    138.6K
 * Total Submissions: 425.8K
 * Testcase Example:  '123'
 *
 * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
 * 
 * 示例 1:
 * 
 * 输入: 123
 * 输出: 321
 * 
 * 
 * 示例 2:
 * 
 * 输入: -123
 * 输出: -321
 * 
 * 
 * 示例 3:
 * 
 * 输入: 120
 * 输出: 21
 * 
 * 
 * 注意:
 * 
 * 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−2^31,  2^31 − 1]。请根据这个假设，如果反转后整数溢出那么就返回
 * 0。
 * 
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let min = - Math.pow(2,31);
    let max = Math.pow(2,31) - 1;
    let num = 0;
    if (x >= min  && x <= max) {
      let negativeFlag = x < 0;
      num = Number(String(Math.abs(x)).split('').reverse().join(''));
      if (negativeFlag) {
        num = 0 - num;
      }
    } else {
      return 0
    }
    if (num >= min  && num <= max) {
      return num
    } else {
      return 0
    }
};

