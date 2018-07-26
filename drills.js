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
  //////////////////////////////////////////////
  SLL.insertLast('Tauhida');
  //////////////////////////////////////////////
  // SLL.remove('squirrel');
  //////////////////////////////////////////////
  // SLL.insertBefore('Athena', 'Boomer');
  //////////////////////////////////////////////
  // SLL.insertAfter('Hotdog', 'Helo');
  //////////////////////////////////////////////
  SLL.insertAt('kat', 2);
  //////////////////////////////////////////////
  // SLL.remove('Tauhida');

  console.log(JSON.stringify(SLL));
}

main();
