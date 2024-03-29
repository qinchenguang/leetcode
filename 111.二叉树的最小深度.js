/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
 *
 * https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/description/
 *
 * algorithms
 * Easy (38.94%)
 * Likes:    130
 * Dislikes: 0
 * Total Accepted:    21.2K
 * Total Submissions: 54.1K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，找出其最小深度。
 * 
 * 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。
 * 
 * 说明: 叶子节点是指没有子节点的节点。
 * 
 * 示例:
 * 
 * 给定二叉树 [3,9,20,null,null,15,7],
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 返回它的最小深度  2.
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
 * @return {number}
 */
var minDepth = function(root) {
  const readLength = function(root){
    if(!root){
      return 0;
    } else if(root.left == null && root.right == null){
      return 1;
    } else if(root.left && root.right){
      return Math.min(readLength(root.left),readLength(root.right)) + 1;
    } else if(root.left == null) {
      return readLength(root.right) + 1;
    } else {
      return readLength(root.left) + 1;
    }
  };
  return readLength(root);
};

