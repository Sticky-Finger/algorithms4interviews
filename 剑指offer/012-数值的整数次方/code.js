/**
 * 递归
 */
function Power(base, exponent)
{
  // write code here
  if (base === 0) {
    return 0
  }
  if (exponent === 0) {
    return 1
  }
  if (exponent < 0) {
    exponent = -exponent
    base = 1 / base 
  }
  if (exponent & 1) {
    return base * Power(base * base, exponent >> 1)
  } esle {
    return Power(base * base, exponent >> 1)
  }
}

/**
 * 递推
 */
function Power(base, exponent) {
  if (base === 0) {
    return 0
  }
  if (exponent === 0) {
    return 1
  }
  if (exponent < 0) {
    exponent = -exponent
    base = 1 / base 
  }

  let res = 1
  while (exponent > 0) {
    if (exponent & 1) {
      res *= base
      exponent -= 1
    }
    base *= base
    exponent >>= 1
  }

  return res
}