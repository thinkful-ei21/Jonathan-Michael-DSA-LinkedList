'use strict';
const LinkedList = require('./linked-list');

function main() {
  const SLL = new LinkedList();

  SLL.insertLast('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');
  SLL.insertLast('Tauhida');

  SLL.remove('Starbuck');

  SLL.insertBefore('Jonathan', 'Husker');
  
  console.log(JSON.stringify(SLL));
}

main();
