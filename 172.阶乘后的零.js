/*
 * @lc app=leetcode.cn id=172 lang=javascript
 *
 * [172] 阶乘后的零
 *
 * https://leetcode-cn.com/problems/factorial-trailing-zeroes/description/
 *
 * algorithms
 * Easy (38.63%)
 * Likes:    133
 * Dislikes: 0
 * Total Accepted:    13.9K
 * Total Submissions: 35.9K
 * Testcase Example:  '3'
 *
 * 给定一个整数 n，返回 n! 结果尾数中零的数量。
 * 
 * 示例 1:
 * 
 * 输入: 3
 * 输出: 0
 * 解释: 3! = 6, 尾数中没有零。
 * 
 * 示例 2:
 * 
 * 输入: 5
 * 输出: 1
 * 解释: 5! = 120, 尾数中有 1 个零.
 * 
 * 说明: 你算法的时间复杂度应为 O(log n) 。
 * 
 */
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
  var ans = 0;
  //count the numbers of 5 in n!
  //ex. 25, ans = (25/5) + (5/5) = 6
  for (var i = n; i > 0; i = Math.floor(i/5)) {
    ans += Math.floor(i/5);
  }
  // console.log(ans);
  return ans;
};
// trailingZeroes(25);
