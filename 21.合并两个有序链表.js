/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 *
 * https://leetcode-cn.com/problems/merge-two-sorted-lists/description/
 *
 * algorithms
 * Easy (65.82%)
 * Likes:    1751
 * Dislikes: 0
 * Total Accepted:    588.5K
 * Total Submissions: 890.3K
 * Testcase Example:  '[1,2,4]\n[1,3,4]'
 *
 * 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：l1 = [1,2,4], l2 = [1,3,4]
 * 输出：[1,1,2,3,4,4]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：l1 = [], l2 = []
 * 输出：[]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：l1 = [], l2 = [0]
 * 输出：[0]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 两个链表的节点数目范围是 [0, 50]
 * -100 
 * l1 和 l2 均按 非递减顺序 排列
 * 
 * 
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// function ListNode(val, next) {
//   this.val = (val===undefined ? 0 : val)
//   this.next = (next===undefined ? null : next)
// }
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// const mergeTwoLists = (l1, l2) => {
//   const prehead = new ListNode(-1)

//   let pre = prehead
//   while(l1 && l2) {
//     if (l1.val <= l2.val) {
//       pre.next = l1
//       l1 = l1.next
//     } else {
//       pre.next = l2
//       l2 = l2.next
//     }
//     pre = pre.next
//   }

//   pre.next = l1 || l2
//   return prehead.next
// }

const mergeTwoLists = (l1, l2) => {
  if (!l1) {
    return l2
  } else if (!l2) {
    return l1
  } else if (l1.val <= l2.val) {
    l1.next = mergeTwoLists(l1.next, l2)
    return l1
  } else {
    l2.next = mergeTwoLists(l2.next, l1)
    return l2
  }
}
// @lc code=end

let l1 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 4
    }
  }
}

let l2 = {
  val: 1,
  next: {
    val: 3,
    next: {
      val: 4
    }
  }
}

console.log(JSON.stringify(mergeTwoLists(l1, l2)))