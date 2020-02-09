/**
 * 暴力法
 */
function minNumberInRotateArray(rotateArray)
{
  // let min = 0
  if (!rotateArray.length) {
    return 0
  }  
  return Math.min(...rotateArray)
}

/**
 * 左右指针向中间移动
 */
function minNumberInRotateArray(rotateArray)
{
  if (!rotateArray.length) {
    return 0
  }  
  let left = 0
  let right = rotateArray.length - 1
  while (true) {
    if (left === right) {
      return rotateArray[left]
    }
    if (rotateArray[left] < rotateArray[right]) {
      return rotateArray[left]
    } else {
      left++
    }
  }
}

/**
 * 二分查找
 */
/**
 * error01:
 */
function minNumberInRotateArray(rotateArray) {
  // write code here
  if (!rotateArray.length) {
    return 0
  }
  let left = 0
  let right = rotateArray.length - 1

  while (true) {
    if (left === right) {
      return rotateArray[left]
    }
    let mid = (left + right) >> 1 // [1, 0]这种情况时会取到1 （left === mid 的情况）
    if (rotateArray[mid] > rotateArray[left]) {
      left = mid
    } else {
      right = mid
    }
  }
}

/**
 * error02:
 */
function minNumberInRotateArray(rotateArray) {
  // write code here
  if (!rotateArray.length) {
    return 0
  }
  let left = 0
  let right = rotateArray.length - 1

  while (true) {
    if (left === right) { 
      return rotateArray[left]
    }
    let mid = ((left + right) >> 1) + 1 // [1, 0]这种情况时会mid = left，每次循环left都取mid，mid再取left，死循环
    if (rotateArray[mid] > rotateArray[left]) {
      left = mid
    } else {
      right = mid
    }
  }
}

/**
 * error03:
 */
function minNumberInRotateArray(rotateArray) {
  // write code here
  if (!rotateArray.length) {
    return 0
  }
  let left = 0
  let right = rotateArray.length - 1

  while (true) {
    if (left === right) { 
      return rotateArray[left]
    }
    if (right - left === 1) { // left === mid 的情况(即left + 1 === right时)，left和right中最小值为结果
      return Math.min(rotateArray[left], rotateArray[right])
    }
    let mid = (left + right) >> 1
    if (rotateArray[mid] > rotateArray[left]) {
      left = mid
    } else {
      right = mid // rotateArray = [1, 1, 1, 1, 0, 1]时，第一次取得的mid = 2，后面再也取不到0了
    }
  }
}

/**
 * 参考Coding4Interviews项目的python代码，出现无限循环错误等
 */
function minNumberInRotateArray(rotateArray) {
  if (!rotateArray.length) {
    return 0
  }
  let left = 0
  let right = rotateArray.length - 1
  while (true) {
    let mid = (left + right) >> 1
    if (rotateArray[mid] >= rotateArray[left]) {
      left = mid
    } else {
      right = mid
    }
    if (rotateArray[mid] < rotateArray[mid - 1]) {
      return rotateArray[mid]
    }
  }
}