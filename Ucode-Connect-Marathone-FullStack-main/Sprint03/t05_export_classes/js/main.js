import {createLinkedList} from "./module.js";

const ll = createLinkedList([100, 1, 2, 3, 100, 4, 5, 100]);
ll.log();
while(ll.remove(100));
ll.log();
ll.add(10);
ll.log();
console.log(ll.contains(10));
let sum = 0;
for (const n of ll) {
sum += n; }
console.log(sum);
ll.clear();
ll.log();

