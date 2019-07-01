/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 *
 * https://leetcode-cn.com/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (25.54%)
 * Likes:    962
 * Dislikes: 0
 * Total Accepted:    69K
 * Total Submissions: 270.1K
 * Testcase Example:  '"babad"'
 *
 * 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
 * 
 * 示例 1：
 * 
 * 输入: "babad"
 * 输出: "bab"
 * 注意: "aba" 也是一个有效答案。
 * 
 * 
 * 示例 2：
 * 
 * 输入: "cbbd"
 * 输出: "bb"
 * 
 * 
 */
function handleGetnumber(left,right,s,length){
  if(s[left] !== s[right]){
    return [left, 1];
  } else {
    if(left > 0 && right < length - 1) {
      left --;
      right ++;
    }
  }
  // console.log(left,right)
  while(s[left] !== undefined && s[right] !== undefined) {
    if(s[left] !== s[right]){
      left ++;
      right --;
      break;
    } else {
      if(left > 0 && right < length - 1) {
        left --;
        right ++;
      } else {
        break;
      }
    }
  }
  return [left > 0 ? left : 0, right - Math.abs(left) + 1];
}
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let length = s.length;
  if(s.length <= 1) {
    return s;
  }
  let str = '';
  for(let i = 0; i < s.length; i++) {
    let left,right;
    let array = handleGetnumber(i, i + 1, s, length);
    let array2 = handleGetnumber(i,i + 2, s, length);
    if(array2[1] > array[1]){
      left = array2[0];
      right = array2[0] + array2[1];
    } else {
      left = array[0];
      right = array[0] + array[1];
    }
    // console.log(array2, array)
    let targetStr = s.slice(left, right);
    str = targetStr.length >= str.length ? targetStr : str;
  }
  // console.log(str ? str : s[0] || s);

  return str ? str : s[0] || s;
};

// longestPalindrome('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
// longestPalindrome('ccc');
// longestPalindrome('ccc');
// longestPalindrome('aba');
// 回文串从左到右和从右到左都是一致
// 从左到右进行检查
// 偶数位是左右对称
// 奇数位是关于中间对称
// 对比方式 从第一位依次往后2位对比
