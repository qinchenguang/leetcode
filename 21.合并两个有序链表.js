/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 *
 * https://leetcode-cn.com/problems/merge-two-sorted-lists/description/
 *
 * algorithms
 * Easy (55.19%)
 * Likes:    498
 * Dislikes: 0
 * Total Accepted:    79.8K
 * Total Submissions: 144.2K
 * Testcase Example:  '[1,2,4]\n[1,3,4]'
 *
 * 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
 * 
 * 示例：
 * 
 * 输入：1->2->4, 1->3->4
 * 输出：1->1->2->3->4->4
 * 
 * 
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let target,result;
    if(l1 && l2){
      if(l1.val >= l2.val) {
        result = l2;
        l2 = l2.next || null;
      } else {
        result = l1;
        l1 = l1.next || null;
      }
    }
    target = result;
    while(l1 && l2){
      if(l1.val >= l2.val){
        target.next = l2;
        target = target.next;
        l2 = l2.next || null;
      } else {
        target.next = l1;
        target = target.next;
        l1 = l1.next || null;
      }
    }
    if(l1){
      target ? target.next = l1 : result = l1;
    } else if(l2){
      target ? target.next = l2 : result = l2;
    } else {
      result ? result : result = l1;
    }
    return result;
};
