/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  const numMap = {}
  for (let i = 0; i < nums.length; i++) {
    if (typeof numMap[target - nums[i]] === 'number') {
      return [numMap[target - nums[i]], i]
    } else {
      numMap[nums[i]] = i
    }
  }
}

nums = [2, 7, 11, 15], target = 18
const ret = twoSum(nums, target)
console.log(ret)
// @lc code=end

