function ListNode(x){
    this.val = x;
    this.next = null;
}


// function Merge(pHead1, pHead2)
// {
//   // write code here
//   let head = null
  

//   // 两个链表都为空时
//   if (!pHead1 && !pHead2) {
//     return head;
//   }

//   // 一个链表为空，另一个不为空时
//   if (!pHead1) {
//     head = pHead2;
//     return head;
//   }
//   if (!pHead2) {
//     head = pHead1;
//     return head;
//   }

//   // 两个链表都不为空时
//   let curentNode = null
//   let loop = 0
//   while (pHead1 && pHead2) {
//     const prevNode = curentNode;
//     if (pHead1.val < pHead2.val) {
//       curentNode = pHead1;
//       pHead1 = pHead1.next;
//     } else {
//       curentNode = pHead2;
//       pHead2 = pHead2.next;
//     }

//     if (prevNode) {
//       prevNode.next = curentNode;
//     }

//     if (loop === 0) {
//       head = curentNode;
//     }

//     loop++;
//   }

//   return head;
// }

function Merge(pHead1, pHead2) {
  const res = new ListNode(0);
  let head = res;

  while(pHead1 && pHead2) {
    if (pHead1.val < pHead2.val) {
      head.next = pHead1;
      head = head.next;
      pHead1 = pHead1.next;
    } else {
      head.next = pHead2;
      head = head.next;
      pHead2 = pHead2.next;
    }
  }

  if (pHead1) {
    head.next = pHead1;
  }

  if (pHead2) {
    head.next = pHead2;
  }

  return res.next;
}

module.exports = {
  ListNode,
  Merge,
}