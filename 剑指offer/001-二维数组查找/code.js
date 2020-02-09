/**
 * 1。暴力法
 */
function Find(target, array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i][j] === target) return true
    }
  }
  return false;
}

/**
 * 2.分治解题思路
 */
/**
 * 2.1 从左下角开始查找
 */
function Find(target, array) {
  const len = array.length
  // 左下开始
  let i = 0
  let j = len - 1
  while (i < len && j >= 0) {
    if (array[i][j] === target) {
      return true
    }
    array[i][j] > target && j--
    array[i][j] < target && i++
  }
  return false
}

/**
 * 2.2 从右上教开始查找
 */
function Find(target, array) {
  const len = array.length
  // 右上开始
  let i = len - 1
  let j = 0
  while(i >= 0 && j < len) {
    if (array[i][j] === target) {
      return true
    }
    array[i][j] > target ? i-- : j++
  }
  return false
}

/**
 * 3. 分治递归
 */
function Find(target, array) {
  const len = array.length
  function find(array, i = len, j = 0) {
    if (i < 0 && j >= len) {
      return false
    } 
    if (array[i][j] === target) {
      return true
    }
    return array[i][j] > target ? find(array, i - 1, j) : find(array, i, j + 1)
  }
}