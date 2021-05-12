/**
 * 归并排序
 * @param {number[]} arr 数组
 * @returns 
 */
const mergeSort = (arr) => {
  if (arr.length < 2) return arr

  const middle = Math.floor(arr.length / 2)
  return merge(mergeSort(arr.slice(0, middle)), mergeSort(arr.slice(middle)))
}

const merge = (left, right) => {
  let result = []
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }

  if (left.length) result = [...result, ...left]
  if (right.length) result = [...result, ...right]
  return result
}

const arr = [22, 0, 22, 1, 33, 2]
console.log(mergeSort(arr))
