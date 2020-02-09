/**
 * 暴力递归遍历
 */
function jumpFloor(number)
{
  // write code here
  if (number < 3) {
    return number
  }
  return jumpFloor(number - 1) + jumpFloor(number - 2)
}

/**
 * 动态规划
 */
function jumpFloor(number)
{
  // let f0 = 0
  let f1 = 1
  let f2 = 2
  if (number < 3) {
    return number
  }
  let tmpF
  for (let i = 3; i <= number; i++) {
    tmpF = f1 + f2
    f1 = f2
    f2 = tmpF
  }
  return f2
}