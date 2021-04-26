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
 * 选择排序
 * @param {number[]} arr 数组
 */
const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    if (minIndex !== i) {
      swap(arr, minIndex, i)
    }
  }
  return arr
}

const arr = [22, 1, 23, 44, 21, 16]
console.log(selectionSort(arr))