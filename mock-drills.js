'use strict';
const LinkedList = require('./linked-list');

const insertInOrder = (LL, input) => {
  if (LL.head === null) {
    return null;
  }

  let currNode = LL.head;

  while (currNode !== null) {
    if (currNode.value >= input) {
      LL.insertFirst(input);
      return LL;
    } else if (
      currNode.value <= input &&
      (currNode.next === null || currNode.next.value > input)
    ) {
      LL.insertAfter(input, currNode);
      return LL;
    }
    currNode = currNode.next;
  }
};

// const insertInOrder = (LL, input) => {
//   if (LL.head === null) {
//     return null;
//   }

//   let currNode = LL.head;
//   let prevNode = LL.head;

//   while (currNode) {
//     if (prevNode.value <= input && currNode.value > input) {
//       console.log(LL.find(currNode.value));
//       LL.insertBefore(input, currNode);
//       return LL;
//     }
//     prevNode = currNode;
//     currNode = currNode.next;
//   }
// };

// const insertInOrder = (LL, input) => {
//   if (LL.head === null) {
//     return null;
//   }

//   let currNode = LL.head;
//   let prevNode = LL.head;

//   while (currNode !== null) {
//     if (currNode.value > input.value) {
//       LL.insertFirst(input.value);
//       return LL;
//     }
//     if (prevNode.value <= input.value && currNode.value > input.value) {
//       prevNode.next = input;
//       input.next = currNode;
//       return LL;
//     }
//     prevNode = currNode;
//     currNode = currNode.next;
//   }
// };

function main() {
  const LL = new LinkedList();

  const inputs = [1, 9];

  inputs.forEach(input => {
    LL.insertLast(input);
  });
  // const newNode = { value: 3, next: null };
  console.log(JSON.stringify(insertInOrder(LL, 4)));

  // console.log(JSON.stringify(LL));
}

main();
