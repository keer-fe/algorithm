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

/**
 * 桶排序
 * @param {number[]} arr 数组
 * @param {number} bucketSize 每个桶的大小，默认为 5
 */
const bucketSort = (arr, bucketSize = 5) => {
  if (!arr.length) return arr
  let max = Math.max.apply(null, arr)
  let min = Math.min.apply(null, arr)

  const buckets = []
  const bucketCount = Math.floor((max - min) / bucketSize) + 1
  for (let i = 0; i < bucketCount; i++) {
    if (!buckets[i]) buckets[i] = []
    buckets[Math.floor((arr[i] - min) / bucketSize)].push(arr[i])
  }

  const ret = []
  for (let i = 0; i < bucketCount; i++) {
    insertionSort(buckets[i])
    ret = [...ret, ...buckets[i]]
  }

  return ret
}


arr = [33, 1, 23, 14, 22, 7]

arr = bucketSort(arr)
console.log('arr', arr)