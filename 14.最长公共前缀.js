/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 *
 * https://leetcode-cn.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (38.91%)
 * Likes:    1357
 * Dislikes: 0
 * Total Accepted:    402.1K
 * Total Submissions: 1M
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 
 * 如果不存在公共前缀，返回空字符串 ""。
 * 
 * 示例 1:
 * 
 * 输入: ["flower","flow","flight"]
 * 输出: "fl"
 * 
 * 
 * 示例 2:
 * 
 * 输入: ["dog","racecar","car"]
 * 输出: ""
 * 解释: 输入不存在公共前缀。
 * 
 * 
 * 说明:
 * 
 * 所有输入只包含小写字母 a-z 。
 * 
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
// const longestCommonPrefixStr = (str1, str2) => {
//   let ans = ''
//   for (let i = 0; i < Math.min(str1.length, str2.length); i++) {
//     if (str1[i] === str2[i]) {
//       ans += str1[i]
//     } else {
//       return ans
//     }
//   }
//   return ans
// }

// const longestCommonPrefix = (strs) => {
//   if (!strs.length) return ''
//   let ans = strs[0]
//   for (let i = 1; i < strs.length; i++) {
//     ans = longestCommonPrefixStr(ans, strs[i])
//   }

//   return ans
// }

const longestCommonPrefix = (strs) => {
  if (!strs.length) return ''
  let ans = strs[0]

  for (let i = 0; i < strs[0].length; i++) {
      let has = true
      for (let j = 1; j < strs.length; j++) {
          if (strs[j].indexOf(ans)) {
              has = false
              break
          }
      }
      if (has) {
          break
      } else {
          ans = ans.slice(0, ans.length - 1)
      }
  }

  return ans
}

longestCommonPrefix(["c","acc","ccc"])

// @lc code=end

