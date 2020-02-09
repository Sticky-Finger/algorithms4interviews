/**
 * 1. 栈stack0存储，栈stack1实现pop【只用stack0存储，每次pop，先将stack0中所有元素出栈push进stack1，stack1出栈一个元素后，在pop出剩下的给stack0存储】
 * ? 超时error ？
 */
const stack0 = []
const stack1 = []

function push(node)
{
  // write code here
  stack0.push(node)
}
function pop()
{
  // write code here
  if (!stack0.length) {
    return 
  }
  
  while (stack0.length) {
    stack1.push(stack0.pop())
  }
  const res = stack1.pop()
  while (stack1.length) {
    stack0.push(stack1.pop())
  }
  return res
}

/**
 * 2. 优化法1，每次stack1出栈到空，才将stack0中元素存到stack1 
 */
const stack0 = []
const stack1 = []

function push(node)
{
  // write code here
  stack0.push(node)
}
function pop()
{
  // write code here
  if (!stack1.length) {
    while (stack0.length) {
      stack1.push(stack0.pop())
    }
  }
  return stack1.pop()
}

/**
 * 3. 优化法1，每次stack1出栈到空，才将stack0中元素存到stack1 
 */
const stack0 = []
const stack1 = []

function push(node)
{
  // write code here
  while(stack1.length) {
    stack0.push(stack1.pop())
  }
  stack0.push(node)
  while (stack0.length) {
    stack1.push(stack0.pop())
  }
}
function pop()
{
  return stack1.pop()
}
