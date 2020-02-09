/**
 * 1.遍历字符串（执行时间过长，通不过）
 * 
 * @param {*} str
 * @returns
 */
function replaceSpace(str) {
  let result = '';
  for (let char of str) {
    result += char === ' ' ? '%20' : char
  }
  return result
}

/**
 * 2.正则表达式
 *
 * @param {*} str
 * @returns
 */
function replaceSpace(str) {
  return str.replace(/\s/g, '%20')
}

// /**
//  * 3.
//  */
// function replaceSpace(str) {
//   let charList = str.split('')
//   let strLen = str.length
//   let spaceCount = 0
//   for (let char of charList) {
//     char === ' ' && spaceCount++
//   }
//   strLen += 2 * spaceCount
//   for (let char of charList) {
//     if (char === ' ') {

//     } else {

//     }
//   }
// }