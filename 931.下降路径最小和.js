/*
 * @lc app=leetcode.cn id=931 lang=javascript
 *
 * [931] 下降路径最小和
 *
 * https://leetcode-cn.com/problems/minimum-falling-path-sum/description/
 *
 * algorithms
 * Medium (64.36%)
 * Likes:    95
 * Dislikes: 0
 * Total Accepted:    12.8K
 * Total Submissions: 19.8K
 * Testcase Example:  '[[2,1,3],[6,5,4],[7,8,9]]'
 *
 * 给你一个 n x n 的 方形 整数数组 matrix ，请你找出并返回通过 matrix 的下降路径 的 最小和 。
 * 
 * 下降路径
 * 可以从第一行中的任何元素开始，并从每一行中选择一个元素。在下一行选择的元素和当前行所选元素最多相隔一列（即位于正下方或者沿对角线向左或者向右的第一个元素）。具体来说，位置
 * (row, col) 的下一个元素应当是 (row + 1, col - 1)、(row + 1, col) 或者 (row + 1, col + 1)
 * 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：matrix = [[2,1,3],[6,5,4],[7,8,9]]
 * 输出：13
 * 解释：下面是两条和最小的下降路径，用加粗标注：
 * [[2,1,3],      [[2,1,3],
 * ⁠[6,5,4],       [6,5,4],
 * ⁠[7,8,9]]       [7,8,9]]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：matrix = [[-19,57],[-40,-5]]
 * 输出：-59
 * 解释：下面是一条和最小的下降路径，用加粗标注：
 * [[-19,57],
 * ⁠[-40,-5]]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：matrix = [[-48]]
 * 输出：-48
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * n == matrix.length
 * n == matrix[i].length
 * 1 
 * -100 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number}
 */
// const minFallingPathSum = (matrix) => {
//   const rows = matrix.length
//   const cols = matrix[0].length

//   const cache = new Array(rows)

//   const dp = (i, j) => {
//     // 如果 j 已经到达最后一层，说明递归可以结束了
//     if (i >= rows) return 0
//     // j 是一行的边界
//     if (j < 0 || j >= cols) return Number.MAX_SAFE_INTEGER

//     if (!cache[i]) cache[i] = []
//     if (cache[i][j]) return cache[i][j]

//     const leftBottom = dp(i + 1, j - 1)
//     const bottom = dp(i + 1, j)
//     const rightBottom = dp(i + 1, j + 1)
//     cache[i][j] = matrix[i][j] + Math.min.apply(null, [leftBottom, bottom, rightBottom])
//     return cache[i][j]
//   }

//   const pathSum = []
//   for (let i = 0; i < cols; i++) {
//     pathSum[i] = dp(0, i)
//   }

//   return Math.min.apply(null, pathSum)
// }

const minFallingPathSum = (matrix) => {
  const cache = []
  const rows = matrix.length
  const cols = matrix[0].length

  for (let i = rows - 1; i >= 0; i--) {
    if (!cache[i]) cache[i] = []

    for (let j = 0; j < cols; j++) {
      if (i === rows - 1) {
        cache[i][j] = matrix[i][j]
      } else {
        const leftBottom = j - 1 < 0 ? null : matrix[i + 1][j - 1]
        const bottom = matrix[i + 1][j]
        const rightBottom = j + 1 >= cols ? null : matrix[i + 1][j + 1]
        cache[i][j] = matrix[i][j] + Math.min(...[leftBottom, bottom, rightBottom])
      }
    }
  }

  return Math.min(...cache[0])
}

matrix = [[2,1,3],[6,5,4],[7,8,9]]
console.log(minFallingPathSum(matrix))
// @lc code=end

