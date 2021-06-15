/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
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
const addTwoNumbers = (l1, l2) => {
  let carry = 0
  let result = new ListNode(-1)
  let current = result

  while(l1 || l2) {
    const val1 = l1 ? l1.val : 0
    const val2 = l2 ? l2.val : 0

    current.next = new ListNode((val1 + val2 + carry) % 10)
    carry = Math.floor((val1 + val2 + carry) / 10)

    l1 = l1 ? l1.next : l1
    l2 = l2 ? l2.next : l2

    current = current.next
  }

  if (carry) current.next = new ListNode(carry)

  return result.next
}
// @lc code=end

