/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeTwoLists(list1, list2) {
  let dummy = { value: -1, next: null };
  let current = dummy;

  while (list1 && list2) {
    if (list1.value < list2.value) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }

  current.next = list1 || list2;

  return dummy.next;
}

let list1=[1,2,4]; 
let list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

mergeTwoLists(list1,list2);

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

// function printList(list) {
//   console.log(list.value);
//   list.next === null ? null : printList(list.next)

//   // while (i !== null) {
//   //   console.log(i.value);
//   //   i = i.next;
//   // }

// }

function printList(list) {
//  let i = list;
//  let arr=[];

//  while(i) {
//   arr.push(i.value);
//   i=i.next;
//  }
//  for (let index = arr.length-1; index >= 0; index--) {
//   console.log(arr[index]);
  
//  }

}

printList(list);
