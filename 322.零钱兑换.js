/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 *
 * https://leetcode-cn.com/problems/coin-change/description/
 *
 * algorithms
 * Medium (43.72%)
 * Likes:    1324
 * Dislikes: 0
 * Total Accepted:    245.8K
 * Total Submissions: 562.3K
 * Testcase Example:  '[1,2,5]\n11'
 *
 * 给定不同面额的硬币 coins 和一个总金额
 * amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。
 * 
 * 你可以认为每种硬币的数量是无限的。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：coins = [1, 2, 5], amount = 11
 * 输出：3 
 * 解释：11 = 5 + 5 + 1
 * 
 * 示例 2：
 * 
 * 
 * 输入：coins = [2], amount = 3
 * 输出：-1
 * 
 * 示例 3：
 * 
 * 
 * 输入：coins = [1], amount = 0
 * 输出：0
 * 
 * 
 * 示例 4：
 * 
 * 
 * 输入：coins = [1], amount = 1
 * 输出：1
 * 
 * 
 * 示例 5：
 * 
 * 
 * 输入：coins = [1], amount = 2
 * 输出：2
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * 1 
 * 0 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// const coinChange = (coins, amount) => {
//   let mem = []
//   return dp(coins, amount, mem)
// }

// const dp = (coins, amount, mem) => {
//   if (amount === 0) return 0
//   if (amount < 0) return -1
//   if (mem[amount]) return mem[amount]
  
//   let min = Number.MAX_SAFE_INTEGER
//   for (let i = 0; i < coins.length; i++) {
//     const sub = dp(coins, amount - coins[i], mem)
//     if (sub < 0) continue
//     min = Math.min(min, sub + 1)
//   }

//   if (!mem[amount]) mem[amount] = min === Number.MAX_SAFE_INTEGER ? -1 : min
//   return mem[amount]
// }

// const coinChange = (coins, amount) => {
//   if (amount === 0) return 0
//   if (amount < 0) return -1
  
//   let min = Number.MAX_SAFE_INTEGER
//   for (let i = 0; i < coins.length; i++) {
//     let sub = coinChange(coins, amount - coins[i])
//     if (sub < 0) continue
//     min = Math.min(min, sub + 1)
//   }
//   return min === Number.MAX_SAFE_INTEGER ? -1 : min
// }

const coinChange = (coins, amount) => {
  const dp = new Array(amount + 1).fill(Number.MAX_SAFE_INTEGER)
  dp[0] = 0

  for (let i = 0; i < dp.length; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (i - coins[j] < 0) continue
      dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1)
    }
  }

  if (dp[amount] === Number.MAX_SAFE_INTEGER) return -1
  return dp[amount]
}

// coins = [1,2,5], amount = 2
// console.log(coinChange(coins, amount))
// @lc code=end

