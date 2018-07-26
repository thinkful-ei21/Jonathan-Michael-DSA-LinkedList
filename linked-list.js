'use strict';

const _Node = require('./node');

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  insertBefore(item, beforeItem) {
    let currNode = this.head;
    let prevNode = this.head;

    while(currNode) {
      if (currNode.value === beforeItem) {
        prevNode.next = new _Node(item, currNode);
        return;
      }
      prevNode = currNode;
      currNode = currNode.next;
    }
    prevNode.next = new _Node(item, null);
  }

  find(item) {
    let currNode = this.head;
    if (!this.head) {
      return null;
    }
    while (currNode.value !== item) {
      if (currNode.next === null) {
        return null;
      } else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }

  remove(item) {
    if (!this.head) {
      return null;
    }

    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }

    let currNode = this.head;
    let prevNode = this.head;

    while (currNode !== null && currNode.value !== item) {
      prevNode = currNode;
      currNode = currNode.next;
    }

    if (currNode === null) {
      console.log('Item Not Found');
      return;
    }

    // let { currNode, prevNode }= this.crawler(item);
    // // let currNode = this.crawler(item.currNode);
    // console.log(currNode);

    prevNode.next = currNode.next;
  }

  // crawler(SLL, item) {

  //   let currNode = this.head;
  //   let prevNode = this.head;
  
  //   while (currNode !== null && currNode.value !== item) {
  //     prevNode = currNode;
  //     currNode = currNode.next;
  //   }
  
  //   if (currNode === null) {
  //     console.log('Item Not Found');
  //     return;
  //   }

  //   return currNode, prevNode;
  // }
}

module.exports = LinkedList;
