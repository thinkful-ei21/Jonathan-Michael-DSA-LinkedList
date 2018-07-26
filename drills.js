'use strict';
const LinkedList = require('./linked-list');

function main() {
  const SLL = new LinkedList();
  //////////////////////////////////////////////
  SLL.insertLast('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');
  // //////////////////////////////////////////////
  SLL.insertLast('Tauhida');
  //////////////////////////////////////////////
  // SLL.remove('squirrel');
  //////////////////////////////////////////////
  // SLL.insertBefore('Athena', 'Boomer');
  //////////////////////////////////////////////
  // SLL.insertAfter('Hotdog', 'Helo');
  //////////////////////////////////////////////
  // SLL.insertAt('kat', 8);
  //////////////////////////////////////////////
  // SLL.remove('Tauhida');

  // console.log(getLength(SLL));

  // console.log(isEmpty(SLL));

  // console.log(display(SLL));

  // console.log(findPrev(SLL, 'Starbuck'));

  console.log(findLast(SLL));
}

function display(SLL) {
  let current = SLL.head,
    displayList = '';

  while (current !== null) {
    displayList += `${current.value} -> `;
    current = current.next;
  }

  return displayList;
}

const getLength = SLL => {
  let currNode = SLL.head;
  let listLength = 0;
  while (currNode) {
    listLength++;
    currNode = currNode.next;
  }
  return listLength;
};

const isEmpty = SLL => {
  if (SLL.head === null) {
    return 'List Is Empty';
  }
  if (SLL.head !== null) {
    return 'List Is Not Empty';
  }
};

const findPrev = (SLL, item) => {
  let currNode = SLL.head;
  let prevNode = SLL.head;

  while (currNode) {
    if (currNode.value === item) {
      return prevNode.value;
    }
    prevNode = currNode;
    currNode = currNode.next;
  }
};

const findLast = SLL => {
  let currNode = SLL.head;

  while (currNode) {
    if (currNode.next === null) {
      return currNode.value;
    }
    currNode = currNode.next;
  }
};

main();
