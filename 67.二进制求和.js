/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 *
 * https://leetcode-cn.com/problems/add-binary/description/
 *
 * algorithms
 * Easy (49.10%)
 * Likes:    210
 * Dislikes: 0
 * Total Accepted:    29.2K
 * Total Submissions: 59.4K
 * Testcase Example:  '"11"\n"1"'
 *
 * 给定两个二进制字符串，返回他们的和（用二进制表示）。
 * 
 * 输入为非空字符串且只包含数字 1 和 0。
 * 
 * 示例 1:
 * 
 * 输入: a = "11", b = "1"
 * 输出: "100"
 * 
 * 示例 2:
 * 
 * 输入: a = "1010", b = "1011"
 * 输出: "10101"
 * 
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let carry = 0;
  a = a.split('');
  b = b.split('');
  let result = [];
  while(a.length && b.length){
    let num = Number(a.pop()) + Number(b.pop()) + carry;
    carry = Math.floor(num / 2);
    result.unshift(num % 2);
  }
  if(a.length){
    result = addOne(result, a, carry)
  } else if(b.length){
    result = addOne(result, b, carry)
  } else if(carry !== 0) {
    result.unshift(1);
  }
  return result.join('');
};
/**
 *
 * @param {nums} target
 * @param {nums} nums
 * @param {number} carry
 * @returns {nums}
 */
function addOne(target,nums,carry){
  while(nums.length){
    let num = Number(nums.pop()) + carry;
    carry = Math.floor(num / 2);
    target.unshift(num % 2);
    if(carry == 0){
      break;
    }
  }
  if(nums.length){
    target = nums.concat(target);
  }
  if(carry == 1){
    target.unshift(1); 
  }
  return target;
};
// addBinary('1010','1011');
