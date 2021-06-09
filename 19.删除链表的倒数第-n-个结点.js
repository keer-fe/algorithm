/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
 *
 * https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/description/
 *
 * algorithms
 * Medium (41.61%)
 * Likes:    1399
 * Dislikes: 0
 * Total Accepted:    405.6K
 * Total Submissions: 965.7K
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
 * 
 * 进阶：你能尝试使用一趟扫描实现吗？
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：head = [1,2,3,4,5], n = 2
 * 输出：[1,2,3,5]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：head = [1], n = 1
 * 输出：[]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：head = [1,2], n = 1
 * 输出：[1]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 链表中结点的数目为 sz
 * 1 
 * 0 
 * 1 
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
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = (head, n) => {
  let pre = head
  let last = head
  while(n--) pre = pre.next

  if(!pre) return head.next

  while(pre.next) {
    pre = pre.next
    last = last.next
  }

  last.next = last.next.next

  return head
}

// @lc code=end
// var val1 = {
//   val: 1,
//   // next: {
//   //   val: 2,
//   //   next: {
//   //     val: 3,
//   //     next: {
//   //       val: 4,
//   //       next: {
//   //         val: 5
//   //       }
//   //     }
//   //   }
//   // }
// }

// head = val1, n = 1
// console.log(JSON.stringify(removeNthFromEnd(head, n)))