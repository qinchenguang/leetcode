/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 *
 * https://leetcode-cn.com/problems/search-insert-position/description/
 *
 * algorithms
 * Easy (43.72%)
 * Likes:    265
 * Dislikes: 0
 * Total Accepted:    52.4K
 * Total Submissions: 119.7K
 * Testcase Example:  '[1,3,5,6]\n5'
 *
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
 * 
 * 你可以假设数组中无重复元素。
 * 
 * 示例 1:
 * 
 * 输入: [1,3,5,6], 5
 * 输出: 2
 * 
 * 
 * 示例 2:
 * 
 * 输入: [1,3,5,6], 2
 * 输出: 1
 * 
 * 
 * 示例 3:
 * 
 * 输入: [1,3,5,6], 7
 * 输出: 4
 * 
 * 
 * 示例 4:
 * 
 * 输入: [1,3,5,6], 0
 * 输出: 0
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  return findArrayIndex(nums, target,  0, nums.length - 1);
};

function findArrayIndex(nums,target,start, end){
  if(end < start) {
    return start;
  }
  const midPoint = Math.floor((start + end)/2);
  if(nums[midPoint] == target){
    return midPoint;
  } else if( nums[midPoint] > target) {
    return findArrayIndex(nums, target, start, midPoint - 1);
  } else {
    return findArrayIndex(nums, target, midPoint + 1, end);
  }
};
// searchInsert([1,3,5,6],2)
