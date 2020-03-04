/**
 * 暴力法（超时未通过）
 * @param {Number[]} array 
 */
function reOrderArray(array)
{
  const len = array.length
  let oddSubarray = []
  let evenSubarray = []
  // write code here
  for (let i = 0; i < len; i++) {
    array[i] & 1 ? oddSubarray.push(array[i]) : evenSubarray.push(array[i]) 
  }
  // return [...oddSubarray, ...evenSubarray]
  return oddSubarray.concat(evenSubarray) // 改成concat，通过
}


/**
 * 参考答案（超时未通过）
 */
function reOrderArray(array) {
  const len = array.length

  // for (let i = 0; i < len; i++) {
  let i = 0
  // while (i < len) {
  while (i < len - 1) { // ！！只需要遍历到倒数第二个，避免j越界
    // if (array[i] & 1 === 1) { // 数组第i项为奇数，i++
    if (array[i] % 2 === 1) { // 数组第i项为奇数，i++
      i++
    } else {
      let j = i + 1
      // while (array[j] & 1 === 0) { // 数组第j项为偶数，j++
      while (array[j] % 2 === 0) { // 数组第j项为偶数，j++
        // if (j === len - 1) {
        if (j >= len - 1) {
          return array
        }
        j++
      }
      // j遍历到奇数停止，暂存这个数
      const tempOdd = array[j]
      // 偶数后移一位
      while (j > i) {
        array[j] = array[j - 1]
        j--
      }
      // 奇数放到偶数前
      array[i] = tempOdd
    }
  }

  return array
}

reOrderArray([1,2,3])
