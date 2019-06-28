/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 *
 * https://leetcode-cn.com/problems/add-two-numbers/description/
 *
 * algorithms
 * Medium (34.55%)
 * Likes:    2572
 * Dislikes: 0
 * Total Accepted:    146.1K
 * Total Submissions: 422.9K
 * Testcase Example:  '[2,4,3]\n[5,6,4]'
 *
 * 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
 * 
 * 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
 * 
 * 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 * 
 * 示例：
 * 
 * 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
 * 输出：7 -> 0 -> 8
 * 原因：342 + 465 = 807
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
var addTwoNumbers = function(l1, l2) {
  let carry = 0;
  let listNode = null;
  let num1 = l1.val;
  let num2 = l2.val;
  // 链表改变
  l1 = l1.next;
  l2 = l2.next;
  // 计算当前位置
  let sum = num1 + num2 + carry;
  let num = sum % 10;
  carry = Math.floor(sum / 10);
  let list = new ListNode(num);
  listNode = list;
  let source = listNode;
  while((l1 && l2 )){
    // 取值
    let num1 = l1.val;
    let num2 = l2.val;
    // 链表改变
    l1 = l1.next;
    l2 = l2.next;
    // 计算当前位置
    let sum = num1 + num2 + carry;
    let num = sum % 10;
    carry = Math.floor(sum / 10);
    let list = new ListNode(num);
    listNode.next = list;
    listNode = list
  }

  while((l1 && l2) || carry){
    let num1 = l1 ? l1.val : 0;
    let num2 = l2 ? l2.val : 0;
    // 链表改变
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
    // 计算当前位置
    let sum = num1 + num2 + carry;
    let num = sum % 10;
    carry = Math.floor(sum / 10);
    let list = new ListNode(num);
    listNode.next = list;
    listNode = list
  }
  if(l1){
    listNode.next = l1;
  }else {
    listNode.next = l2;
  }
  return source;
};

