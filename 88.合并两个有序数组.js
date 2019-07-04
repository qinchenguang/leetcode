/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 *
 * https://leetcode-cn.com/problems/merge-sorted-array/description/
 *
 * algorithms
 * Easy (44.35%)
 * Likes:    263
 * Dislikes: 0
 * Total Accepted:    51.9K
 * Total Submissions: 116.7K
 * Testcase Example:  '[1,2,3,0,0,0]\n3\n[2,5,6]\n3'
 *
 * 给定两个有序整数数组 nums1 和 nums2，将 nums2 合并到 nums1 中，使得 num1 成为一个有序数组。
 * 
 * 说明:
 * 
 * 
 * 初始化 nums1 和 nums2 的元素数量分别为 m 和 n。
 * 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
 * 
 * 
 * 示例:
 * 
 * 输入:
 * nums1 = [1,2,3,0,0,0], m = 3
 * nums2 = [2,5,6],       n = 3
 * 
 * 输出: [1,2,2,3,5,6]
 * 
 */
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let numsFlagNum = 0,i;
  while(nums2.length){
    let num  = nums2.shift();
    for(i = numsFlagNum; i < m; i++) {
      if(num < nums1[i]){
        nums1.splice(i,0,num);
        nums1.pop();
        num = null;
        numsFlagNum = i;
        m ++;
        break;
      }
    }
    if(i == m){
      num ? nums2.unshift(num) : '';
      nums1.splice(i, nums2.length, ...nums2);
      nums2 = [];
    }
  }
};
// merge([1,2,3,0,0,0],3,[2,5,6],3)
