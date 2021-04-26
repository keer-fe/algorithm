/**
 * 交换数组中的两个元素
 * @param {number[]} arr
 * @param {number} i
 * @param {number} j 
 */
const swap = (arr, i, j) => {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

/**
 * 冒泡排序
 * @param {number[]} arr 数值数组
 */
const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
      }
    }
  }

  return arr
}

arr = [33, 1, 23, 14, 22, 7]

arr = bubbleSort(arr)
console.log('arr', arr)
