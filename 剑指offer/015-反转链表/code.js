/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function ReverseList(pHead) {
  let pre = null
  let cur = pHead
  while (cur) {
    const tmpNode = cur.next
    cur.next = pre
    pre = cur
    cur = tmpNode
  }
  return pre
}