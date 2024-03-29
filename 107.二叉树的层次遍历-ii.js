/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层次遍历 II
 *
 * https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii/description/
 *
 * algorithms
 * Easy (61.04%)
 * Likes:    112
 * Dislikes: 0
 * Total Accepted:    18.3K
 * Total Submissions: 29.9K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，返回其节点值自底向上的层次遍历。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）
 * 
 * 例如：
 * 给定二叉树 [3,9,20,null,null,15,7],
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 
 * 返回其自底向上的层次遍历为：
 * 
 * [
 * ⁠ [15,7],
 * ⁠ [9,20],
 * ⁠ [3]
 * ]
 * 
 * 
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  let array = [];
  if(root){

  } else {
    return array;
  }
  let rootArray = [];
  let valArray = [];
  valArray.push(root.val);
  array.push(valArray)
  rootArray.push(root);


  const readChild = function(childNode){
    let valArray = [];
    let nodeArray = [];
    if(childNode.length){
      for(let i = 0; i < childNode.length; i++) {
        let left = childNode[i].left;
        let right = childNode[i].right;
        if(left){
          valArray.push(left.val);
          nodeArray.push(left);
        }
        if(right){
          valArray.push(right.val);
          nodeArray.push(right);
        }
      }
      if(valArray.length) {
        array.unshift(valArray)
        readChild(nodeArray);
      }
    }else {
      
    }
  }
  readChild(rootArray);
  return array;
};

