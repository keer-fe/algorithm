/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 *
 * https://leetcode-cn.com/problems/triangle/description/
 *
 * algorithms
 * Medium (67.58%)
 * Likes:    806
 * Dislikes: 0
 * Total Accepted:    163K
 * Total Submissions: 240.6K
 * Testcase Example:  '[[2],[3,4],[6,5,7],[4,1,8,3]]'
 *
 * 给定一个三角形 triangle ，找出自顶向下的最小路径和。
 * 
 * 每一步只能移动到下一行中相邻的结点上。相邻的结点 在这里指的是 下标 与 上一层结点下标 相同或者等于 上一层结点下标 + 1
 * 的两个结点。也就是说，如果正位于当前行的下标 i ，那么下一步可以移动到下一行的下标 i 或 i + 1 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
 * 输出：11
 * 解释：如下面简图所示：
 * ⁠  2
 * ⁠ 3 4
 * ⁠6 5 7
 * 4 1 8 3
 * 自顶向下的最小路径和为 11（即，2 + 3 + 5 + 1 = 11）。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：triangle = [[-10]]
 * 输出：-10
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * triangle[0].length == 1
 * triangle[i].length == triangle[i - 1].length + 1
 * -10^4 
 * 
 * 
 * 
 * 
 * 进阶：
 * 
 * 
 * 你可以只使用 O(n) 的额外空间（n 为三角形的总行数）来解决这个问题吗？
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
const minimumTotal = (triangle) => {
  const dp = []
  for (let i = 0; i < triangle.length; i++) {
    if (!dp[i]) dp[i] = []
    for (let j = 0; j <= i; j++) {
      if (i - 1 < 0) {
        dp[i][j] = triangle[i][j]
      } else if (j - 1 < 0) {
        dp[i][j] = dp[i - 1][j] + triangle[i][j]
      } else if (j > i - 1) {
        dp[i][j] = dp[i - 1][j - 1] + triangle[i][j]
      } else {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i - 1][j - 1]) + triangle[i][j]
      }
    }
  }
  return Math.min(...dp[dp.length - 1])
}

// const minimumTotal = (triangle) => {
//   let preview = []
//   let current = []
//   for (let i = 0; i < triangle.length; i++) {
//     for (let j = 0; j <= i; j++) {
//       if (i - 1 < 0) {
//         current[j] = triangle[i][j]
//       } else if (j - 1 < 0) {
//         current[j] = preview[j] + triangle[i][j]
//       } else if (j > i - 1) {
//         current[j] = preview[j - 1] + triangle[i][j]
//       } else {
//         current[j] = Math.min(preview[j], preview[j - 1]) + triangle[i][j]
//       }
//     }
//     preview = current
//     current = []
//   }
//   return Math.min(...preview)
// }

// triangle = [[-10]]
// console.log(minimumTotal(triangle))
// @lc code=end

