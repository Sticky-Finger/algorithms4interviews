/**
 * 递归
 * @param {*} n
 */
function Fibonacci(n)
{
    // write code here
}

/**
 * 递归 + 记忆化
 */

 /**
  * 递推
  */
function Fibonacci(n) {
  let fn0 = 0
  let fn1 = 1
  if (n < 2) {
    return n
  }
  for (let i = n; n > 1; n--) {
    const tmpFn = fn0 + fn1
    fn0 = fn1
    fn1 = tmpFn
  }
  return fn1
}