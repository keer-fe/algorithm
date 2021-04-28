/**
 * 插入排序
 * @param {number[]} arr 数组
 */
const insertionSort = (arr) => {
  let current

  for (let i = 1; i < arr.length; i++) {
    current = arr[i]

    for (let j = i - 1; j >= 0; j--) {
      if (current < arr[j]) {
        arr[j + 1] = arr[j]
        if (j === 0) arr[j] = current
      } else {
        arr[j + 1] = current
        break
      }
    }
  }

  return arr
}

const arr = [22, 0, 22, 1, 33, 2]
console.log(insertionSort(arr))