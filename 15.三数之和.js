/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 *
 * https://leetcode-cn.com/problems/3sum/description/
 *
 * algorithms
 * Medium (26.29%)
 * Likes:    1962
 * Dislikes: 0
 * Total Accepted:    190.2K
 * Total Submissions: 723.4K
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0
 * ？请你找出所有满足条件且不重复的三元组。
 * 
 * 注意：答案中不可以包含重复的三元组。
 * 
 * 
 * 
 * 示例：
 * 
 * 给定数组 nums = [-1, 0, 1, 2, -1, -4]，
 * 
 * 满足要求的三元组集合为：
 * [
 * ⁠ [-1, 0, 1],
 * ⁠ [-1, -1, 2]
 * ]
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = (nums) => {
  if (nums.length < 3) return []

  const orderNums = nums.sort((a, b) => a - b)
  const ret = []

  for (let i = 0; i <= orderNums.length - 3; i++) {
    if (nums[i] > 0) break // 如果当前元素大于0，则之后的数都大于0，没有加和为0的三个数
    if (orderNums[i] === orderNums[i - 1]) continue

    let j = i + 1;
    let k = orderNums.length - 1
    const sum = 0 - orderNums[i]

    while (j < k) {
      if (orderNums[k] === orderNums[k + 1] && orderNums[j] === orderNums[j - 1] && j - 1 > i) {
        j += 1
        k -= 1
        continue
      }

      if (orderNums[j] + orderNums[k] === sum) {
        ret.push([orderNums[i], orderNums[j], orderNums[k]])
        j += 1
        k -= 1
      } else if (orderNums[j] + orderNums[k] < sum) {
        j += 1
      } else if (orderNums[j] + orderNums[k] > sum) {
        k -= 1
      }
    }
  }

  return ret
}

// nums = [-1,0,1,2,-1,-4,-2,-3,3,0,4]
// // [[-1,-1,2],[-1,0,1],[-2,0,2],[-3,0,3],[-3,1,2],[-4,0,4],[-4,1,3]]
// // [[-3,-1,4],[-2,-1,3],]
// // nums = [2, 0, 0, -2, -2]
// ret = threeSum(nums)
// console.log('ret', ret)
// @lc code=end

