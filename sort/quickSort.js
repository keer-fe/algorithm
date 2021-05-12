/**
 * 快速排序
 * @param {number[]} arr 数组
 * @param {number} left 数组第一个元素的下标
 * @param {number} right 数组最后一个元素的下标
 */
const quickSort = (arr, left = 0, right = arr.length - 1) => {
  let partitionIndex = 0
  if (left < right) {
    partitionIndex = partition(arr, left, right)
    quickSort(arr, left, partitionIndex - 1)
    quickSort(arr, partitionIndex + 1, right)
  }
  return arr
}

/**
 * 找出以第一个元素分界的下标
 * @param {number[]} arr 数组
 * @param {number} left 数组第一个元素的下标
 * @param {number} right 数组最后一个元素的下标
 * @returns 分界的下标
 */
const partition = (arr, left, right) => {
  let index = left + 1
  for (let i = index; i <= right; i++) {
    if (arr[left] > arr[i]) {
      swap(arr, i, index)
      index++
    }
  }
  swap(arr, left, index - 1)
  return index - 1
}

const swap = (arr, i, j) => {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}


const arr = [22, 0, 22, 1, 33, 2]
console.log(quickSort(arr))
