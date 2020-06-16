const { ListNode, Merge } = require('./code');
// const Merge = require('./code');

// function ListNode(x){
//   this.val = x;
//   this.next = null;
// }

const testNode1 = new ListNode(1);
testNode1.next = new ListNode(3);
testNode1.next.next = new ListNode(5);

const testNode2 = new ListNode(2);
testNode2.next = new ListNode(4);
testNode2.next.next = new ListNode(6);

function printList(head, listName = '') {
  console.log(`当前链表${listName}为：`)
  while(head) {
    console.log(head.val);
    head = head.next;
  }
}

printList(testNode1, 'testNode1');
printList(testNode2, 'testNode2');
printList(Merge(testNode1, testNode2), 'Merge(testNode1, testNode2)');