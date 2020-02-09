/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/

/**
 * 1.遍历链表，将val存入栈，完成后，在出栈，得到结果
 */
function printListFromTailToHead(head) {
  // write code here
  let stack = []
  let curNode = head
  while (curNode.next) {
    stack.push(curNode.val)
    curNode = curNode.next
  }
  let res = []
  while (curNode.length) {
    res.push(stack.pop())
  }
  return res
}

/**
 * 用reverse得到从尾到头来的数组
 *
 * @param {*} head
 */
function printListFromTailToHead(head) {
  let res = []
  while (head.next) {
    res.push(head.val)
    head = head.next
  }
  return res.revese()
}