/**
 * 希尔排序
 * @param {number[]} arr 数组
 */
const shellSort = (arr) => {
  for (let gap = arr.length >> 1; gap > 0; gap >>= 1) {
    for (let i = gap; i < arr.length; i++) {
      const temp = arr[i]
      let j
      for (j = i - gap; j >= 0 && arr[j] > temp; j -= gap) {
        arr[j + gap] = arr[j]
      }
      arr[j + gap] = temp
    }
  }

  return arr
}

const arr = [22, 1, 23, 44, 21, 16]
console.log(shellSort(arr))

