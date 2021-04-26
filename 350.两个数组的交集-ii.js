/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 *
 * https://leetcode-cn.com/problems/intersection-of-two-arrays-ii/description/
 *
 * algorithms
 * Easy (47.53%)
 * Likes:    418
 * Dislikes: 0
 * Total Accepted:    154.3K
 * Total Submissions: 289.6K
 * Testcase Example:  '[1,2,2,1]\n[2,2]'
 *
 * 给定两个数组，编写一个函数来计算它们的交集。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：nums1 = [1,2,2,1], nums2 = [2,2]
 * 输出：[2,2]
 * 
 * 
 * 示例 2:
 * 
 * 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 * 输出：[4,9]
 * 
 * 
 * 
 * 说明：
 * 
 * 
 * 输出结果中每个元素出现的次数，应与元素在两个数组中出现次数的最小值一致。
 * 我们可以不考虑输出结果的顺序。
 * 
 * 
 * 进阶：
 * 
 * 
 * 如果给定的数组已经排好序呢？你将如何优化你的算法？
 * 如果 nums1 的大小比 nums2 小很多，哪种方法更优？
 * 如果 nums2 的元素存储在磁盘上，内存是有限的，并且你不能一次加载所有的元素到内存中，你该怎么办？
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = function(nums1 = [], nums2 = []) {
  const nums1Order = nums1.sort((a, b) => a - b)
  const nums2Order = nums2.sort((a, b) => a - b)

  let index1 = 0
  let index2 = 0
  const intersection = []

  while(index1 < nums1Order.length && index2 < nums2Order.length) {
    if (nums1Order[index1] === nums2Order[index2]) {
      intersection.push(nums1Order[index1])
      index1 ++
      index2 ++
    } else if (nums2Order[index2] < nums1Order[index1]) {
      index2 ++
    } else if (nums2Order[index2] > nums1Order[index1]) {
      index1 ++
    }
  }

  return intersection
}

intersect([4,9,5], [9,4,9,8,4])
// @lc code=end

