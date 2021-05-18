/**
 * 堆排序
 * @param {number[]} arr 数组
 */
const heapSort = (arr) => {
  // 从最后一个节点的父节点开始首先进行一次排序，父节点 i 的子节点为 2*i+1，
  // 所以最后一个节点的父节点为 Math.floor(arr / 2) - 1
  for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
    maxHeapify(arr, i, arr.length)
  }

  // 因为第一次排序已经对父节点进行过堆排序了，所以之后的都对根节点
  for (let i = arr.length - 1; i > 0; i--) {
    swap(arr, 0, i)
    maxHeapify(arr, 0, i)
  }

  return arr
}

/**
 * 对 start-end 区间内的数值按照堆排序
 * @param {number} start 
 * @param {number} end 
 */
const maxHeapify = (arr, start, end) => {
  const parent = start
  let children = 2 * parent + 1

  // 如果父节点大于数组的边界，直接退出
  if (children >= end) return

  if (children + 1 < end && arr[children] < arr[children + 1]) {
    children += 1
  }

  if (arr[parent] < arr[children]) {
    swap(arr, parent, children)
    maxHeapify(arr, children, end)
  }

  return arr
}

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

arr = [33, 1, 23, 14, 22, 7]

arr = heapSort(arr)
console.log('arr', arr)