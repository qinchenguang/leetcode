/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个有序数组的中位数
 *
 * https://leetcode-cn.com/problems/median-of-two-sorted-arrays/description/
 *
 * algorithms
 * Hard (35.26%)
 * Likes:    1177
 * Dislikes: 0
 * Total Accepted:    62.8K
 * Total Submissions: 178.1K
 * Testcase Example:  '[1,3]\n[2]'
 *
 * 给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。
 * 
 * 请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。
 * 
 * 你可以假设 nums1 和 nums2 不会同时为空。
 * 
 * 示例 1:
 * 
 * nums1 = [1, 3]
 * nums2 = [2]
 * 
 * 则中位数是 2.0
 * 
 * 
 * 示例 2:
 * 
 * nums1 = [1, 2]
 * nums2 = [3, 4]
 * 
 * 则中位数是 (2 + 3)/2 = 2.5
 * 
 * 
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let len1 = nums1.length;
  let len2 = nums2.length;
  let target = [];
  target[0] = Math.floor((len1 + len2 - 1) / 2);
  target[1] = target[0] + (len1 + len2 - 1) % 2;
  
  let targetArray = [];
  while(nums1.length && nums2.length) {
    if(nums1[0] >= nums2[0]){
      targetArray.push(nums2.shift())
    }else{
      targetArray.push(nums1.shift())
    }
    if(targetArray.length > target[1]){
      break;
    }
  }
  targetArray = targetArray.concat(nums1,nums2);
  let num = (targetArray[target[0]] + targetArray[target[1]]) / 2;
  return num
};

