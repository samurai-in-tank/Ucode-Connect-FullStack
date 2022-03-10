class Node {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}

class List {
    constructor() {
        this.head = null;
        this.length = 0;
    }
    add(value) {
        let node = new Node(value);
        if (this.length === 0)
            this.head = node;
        else {
            let start_i = this.head;
            while(start_i.next)
                start_i = start_i.next;
            start_i.next = new Node(value);
        }
        this.length++;
    }
    remove(value) {
        if (this.head.data === value) {
            this.head = this.head.next;
            this.length--;
            return true;
        } else
            for (let start_i = this.head; start_i.next; start_i = start_i.next)
                if (start_i.next.data === value) {
                    start_i.next = start_i.next.next;
                    this.length--;
                    return true;
                }
        return false;
    }
    contains(value) {
        for (let start_i = this.head; start_i; start_i = start_i.next)
            if (start_i.data === value)
                return true;
        return false;
    }
    [Symbol.iterator] = function() {
        let koll_znach = this.head;
        return {
            next() {
                if (koll_znach) {
                    let value = koll_znach.data;
                    koll_znach = koll_znach.next;
                    return {value: value, done: false};
                }
                return {done: true};
            }
        };
    };
    clear() {
        this.head = null;
    }
    count() {
        return this.length;
    }
    log() {
        let stroka = '';
        for (let start_i = this.head; start_i; start_i = start_i.next) {
            stroka += start_i.data;
            if (start_i.next)
                stroka += ', ';
        }
        console.log(stroka);
    }
}

let createLinkedList = (arr) => {
    const data = new List();
    arr.forEach(value => data.add(value));
    return data;
}
