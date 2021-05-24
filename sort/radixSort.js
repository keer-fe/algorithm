/**
 * 基数排序
 * @param {number[]} arr 数组
 */
const radixSort = (arr) => {
  const maxLength = String(Math.max.apply(null, arr)).length
  let result = arr
  let stack = []
  for (let i = 1; i <= maxLength; i++) {
    stack = []
    for (let j = 0; j < result.length; j++) {
      const temp = Number(String(result[j]).split('').reverse()[i - 1]) || 0
      if (!stack[temp]) stack[temp] = []
      stack[temp].push(result[j])
    }

    result = []
    for (let j = 0; j < stack.length; j++) {
      if (stack[j]) {
        result = [...result, ...stack[j]]
      }
    }
  }

  return result
}

arr = [33, 1, 23, 14, 22, 7]

arr = radixSort(arr)
console.log('arr', arr)