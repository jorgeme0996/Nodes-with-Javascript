class Node {
    constructor(){
        this._data = null;
        this._next = null;
        this._prev = null;
    }

    get data() {
        return this._data;
    }

    set data(value) {
        this._data = value;
    }

    get next() {
        return this._next;
    }

    set next(value) {
        this._next = value;
    }

    get prev() {
        return this._prev;
    }

    set prev(value) {
        this._prev = value
    }
}

const node1 = new Node();
const node2 = new Node();
const node3 = new Node();

// Se generó una lista circular

node1.next = node2;
node1.prev = node3;

node2.next = node3;
node2.prev = node1;

node3.next = node1;
node3.prev = node2;
// Se genero una pila

node1.next = node2;
node1.prev = null;

node2.next = node3;
node2.prev = null;

node3.next = null;
node3.prev = null;
