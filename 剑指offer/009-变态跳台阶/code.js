/**
 * 暴力递归法
 */
function jumpFloorII(number)
{
  if (number < 2) {
    return number
  }
  // write code here
  let res = 0
  for(let i = 1; i < number; i++) {
    res += jumpFloorII(number - i)
  }
  return res
}

/**
 * // f(n) = 2f(n - 1),递归
 */
function jumpFloorII(number) {
  if (number < 2) {
    return number
  }
  return 2 * jumpFloorII(n - 1)
}

/**
 * // f(n) = 2f(n - 1),递推
 */
function jumpFloorII(number) {
  if (number < 2) {
    return number
  }
  const f1 = 1
  return f1 * 2 ** (number - 1)
}
