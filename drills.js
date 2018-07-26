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

  // console.log(findLast(SLL));

  // WhatDoesThisProgramDo()  shifts all of the nodes to the next available nodes keeping the order  The complexity is O(n)

  // !!  Only got this far !!
  // Reverslist still in progress
 // console.log(display(listRevervsal(SLL)));


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
    return true;
  }
  if (SLL.head !== null) {
    return false;
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

const listRevervsal = SLL => {
  let lastNode = findLast(SLL);
  let nextToLastNode = findPrev(SLL, findLast(SLL));
  let firstNode = SLL.head;
  let currNode = SLL.head;
  let prevNode = SLL.head;

  while(firstNode) {
    if (currNode.next === null) {
      if(isEmpty) {
        return SLL;
      }
      currNode.next = prevNode;
      SLL.remove(lastNode);
      return listRevervsal(SLL);
    }

    prevNode = currNode;
    currNode = currNode.next;
  }

  SLL.head = lastNode;
  lastNode.next = nextToLastNode;


  return SLL;
  // console.log('Current: '+ currNode);
  // console.log('Previous: '+ prevNode);

};

main();
