/**
 * 暴力递归
 */
function rectCover(number)
{
  // write code here
  if (number <= 2) {
    return number
  }
  return rectCover(number - 1) + rectCover(number - 2)
}

/**
 * 递推
 */
function rectCover(number)
{
  // write code here
  if (number <= 2) {
    return number
  }
  let f1 = 1
  let f2 = 2
  for (let i = 3; i <= number; i++) {
    const tmp = f1 + f2
    // [f1, f2] = [f2, tmp]
    f1 = f2
    f2 = tmp
  }
  return f2
}
