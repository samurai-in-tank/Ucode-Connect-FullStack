const { LLData } = require("./LLData");

exports.LList = class {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  
  getFirst() {
    return this.head;
  }

  getLast() {
    return this.tail;
  }

  add(value) {
    let node = new LLData(value);
      if (this.tail)
        this.tail.next = node;
      this.tail = node;
      if (!this.head)
        this.head = node;
  }
  
  addFromArray(arrayOfData) {
    arrayOfData.forEach(arrayOfData => this.add(arrayOfData));
  }
  
  remove(value) {
    if (!this.head)
      return null;
    let node = this.head;
    if (this.head.data === value) {
      this.head = this.head.next;
      return true;
    }
    while (node.next) {
      if (node.next.data === value) {
        if (node.next === this.tail)
          this.tail = node;
        node.next = node.next.next;
        return true;
        } else node = node.next;
      }
    return false;
  }
  
  removeAll(value) {
    // if (!this.head)
    //   return null;
    let node = this.head;
    if (node !== null) {
      if (this.head.data === value)
        this.head = this.head.next;
      while (node.next) {
        if (node.next.data === value)
          node.next = node.next.next;
        else
          node = node.next;
      }
    }
    if (this.tail.data === value)
      this.tail = node;
  }

  contains(value) {
    let currentNode = this.head;
    while (currentNode) {
        if (currentNode.data === value)
          return true;
        currentNode = currentNode.next;
    }
    return false;
  }

  clear() {
    this.head = null;
  }

  count() {
    if (!this.head)
      return null;
    let count = 0;
    let currentNode = this.head;
    while (currentNode) {
      currentNode = currentNode.next;
      count++;
    } 
    return count;
  }

  toString() {
    let arr = [];
    let currentNode = this.head;
    while (currentNode) {
      arr.push(currentNode.data);
      currentNode = currentNode.next;
    }
    return arr.join(', ');
  }

  getIterator() {
    return this[Symbol.iterator]();
  }

  filter = function(callback) {
    const res = new LList();
  
    for (let node of this) {
      if (callback(node)) {
        res.add(node);
      }    
    }
    return res;
  };

  [Symbol.iterator]() {
    let node = this.head;
    return {
        next() {
            let value, done = true;
            if (node !== null) {
              value = node.data;
              done = false;
              node = node.next;
            }
            return { value: value, done: done }
        }
    }
}
}

function makeIterator(array){
  var nextIndex = 0;

  return {
     next: function(){
         return nextIndex < array.length ? {value: array[nextIndex++], done: false} : {done: true};
     }
  }
}

const {LList} = require("./LList");
const list = new LList();

list.addFromArray([100, 1, 2, 3, 100, 4, 5, 100]);

list.add(10);
const onlySmallList = list.filter((data) => {
  return data < 18;
});

let sumOfAll = 0;
for (const data of list) {
  console.log(data);
  sumOfAll += data;
}
console.log('Count: ' + list.count());
console.log('Contains: ' + list.contains(11));

console.log([...list]);
console.log([...onlySmallList]);
console.log(sumOfAll);
console.log(list.contains(10)); 
console.log(list.contains(22)); 

list.clear();

console.log([...list]);
