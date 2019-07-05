/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
 *
 * https://leetcode-cn.com/problems/balanced-binary-tree/description/
 *
 * algorithms
 * Easy (48.46%)
 * Likes:    123
 * Dislikes: 0
 * Total Accepted:    20.4K
 * Total Submissions: 42K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，判断它是否是高度平衡的二叉树。
 * 
 * 本题中，一棵高度平衡二叉树定义为：
 * 
 * 
 * 一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过1。
 * 
 * 
 * 示例 1:
 * 
 * 给定二叉树 [3,9,20,null,null,15,7]
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 返回 true 。
 * 
 * 示例 2:
 * 
 * 给定二叉树 [1,2,2,3,3,null,null,4,4]
 * 
 * ⁠      1
 * ⁠     / \
 * ⁠    2   2
 * ⁠   / \
 * ⁠  3   3
 * ⁠ / \
 * ⁠4   4
 * 
 * 
 * 返回 false 。
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
 * @return {boolean}
 */
var isBalanced = function(root) {
  if(!root) return true
  let depth = new Map
  let s = []
  let last
  
  while(root || s.length) {
      if(root) {
          s.push(root)
          root = root.left
      }else {
          root = s[s.length-1];
          if(!root.right || last == root.right) {
              last = s.pop()
              
              let left = depth.get(last.left)||0
              let right = depth.get(last.right)||0
              if(Math.abs(left-right)>1) return false
              depth.set(last, 1 + Math.max(left, right))
              
              root = null
          }else {
              root = root.right
          }
      }
  }
  return true
  
};
// 错误想法：
// 根据每个子节点检测。
// 从树的第一层往下检测
// 计算每一次是否是完全二叉树。也就是每层就是上一层 * 2
// 出现2层的偏差就是错误

// if(!root) return true;
//   let array = [];
//   array.push(root); // 初始数组
//   let i = 1; // 初始num
//   let waring = false; // 警告
//   while(array.length){
//     let newChild = [];
//     for(let j = 0; j < array.length; j++){
//       if(array[j].left) newChild.push(array[j].left)
//       if(array[j].right) newChild.push(array[j].right)
//     }
//     i = i * 2;
//     if(newChild.length < i && newChild.length !== 0){
//       console.log('??')
//       if(waring === true) {
//         return false;
//       }
//       waring = true;
//     }
//     array = newChild;
    
//   }
//   return true


// 正确解法：
// 先存放左子数，然后在遍历右
// [1,2,2,3,3,3,3,4,4,4,4,4,4,null,null,5,5]

// [1,2,3,4,5]

// [1,2,3,4]

// [1,2,3,4,5]

// [1,2,3,4]

// [1,2,3]

// [1,2,3,4]

// [1,2,3]

// [1,2]

