/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/

/**
 * 将节点存放着数组中
 */
function FindKthToTail(head, k)
{
  // write code here
  let cur = head
  let list = []
  while (cur) {
    // list.push(cur.val) // 返回只要求是节点
    list.push(cur)
    cur = cur.next
  }
  if (list.length - k >= 0) {
    return list[list.length - k]
    // return list[list.length - k - 1] // k从0开始！！
    
  } else {
    return null
  }
}

/**
 * 遍历获取链表长度，算出正向序列数，再次遍历找出
 */
function FindKthToTail(head, k)
{
  // write code here
  let cur = head
  let len = 0
  while (cur) {
    len++
    cur = cur.next
  }
  if (len >= k) {
    let res = head
    for (i = 0; i < len - k; i++) {
      res = res.next
    }
    return res
  } else {
    return null
  }
}

/**
 * 快慢指针法，慢指针比快指针慢k步
 */
// function FindKthToTail(head, k) {
//   let slow = null
//   let fast = head
//   let i = 1
//   while (fast) {
//     if (i === k) {
//       slow = head
//     } else if (i > k) {
//       slow = slow.next
//     }
//     fast = fast.next
//     i++
//   }
//   return slow
// }
function FindKthToTail(head, k) {
  let slow = head
  let fast = head
  for (let i = 0; i < k; i++) {
    // if (fast) {
    //   fast = fast.next
    // } else {
    //   return null
    // }
    if (!fast) {
      return null
    }
    fast = fast.next
  }
  while (fast) {
    slow = slow.next
    fast = fast.next
  }
  return slow
}