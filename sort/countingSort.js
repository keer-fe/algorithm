/**
 * 计数排序
 * @param {number[]} arr 数组
 */
const countingSort = (arr) => {
  const count = []
  for (let i = 0; i < arr.length; i++) {
    if (!count[arr[i]]) count[arr[i]] = 0
    count[arr[i]] += 1
  }

  const result = []
  for (let i = 0; i < count.length; i++) {
    if (count[i]) {
      for (let j = 0; j < count[i]; j++) {
        result.push(i)
      }
    }
  }

  return result
}

arr = [33, 1, 23, 14, 22, 7]

arr = countingSort(arr)
console.log('arr', arr)
