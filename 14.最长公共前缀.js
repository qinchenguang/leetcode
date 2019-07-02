/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 *
 * https://leetcode-cn.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (33.76%)
 * Likes:    591
 * Dislikes: 0
 * Total Accepted:    90.9K
 * Total Submissions: 269.2K
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 
 * 如果不存在公共前缀，返回空字符串 ""。
 * 
 * 示例 1:
 * 
 * 输入: ["flower","flow","flight"]
 * 输出: "fl"
 * 
 * 
 * 示例 2:
 * 
 * 输入: ["dog","racecar","car"]
 * 输出: ""
 * 解释: 输入不存在公共前缀。
 * 
 * 
 * 说明:
 * 
 * 所有输入只包含小写字母 a-z 。
 * 
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let str = '', i = 0;
    let target = strs[0] || '';
    while(true){
      i++;
      str = target.slice(0,i);
      let flag = strs.every(string => string.indexOf(str) === 0);
      if (!flag) {
        break;
      } else if(i > target.length -1){
        i++;
        break;
      }
    }
    return target.slice(0,i - 1);
};
// longestCommonPrefix(["aa","aa"]);
