class Node {
    constructor() {
        this._data = null;
        this._nodes = [];
        this._id;
    }

    get getData() {
        return this._data;
    }

    set setData(value) {
        this._data = value
    }

    get getId() {
        return this._id;
    }

    set setId(value) {
        this._id = value;
    }

    moveTo(id) {
        const node = this._nodes.filter(node => {
            if (node.getId === id){
                return node
            } else {
                return null
            }
        })
        if(!node[0]) {
            return null
        } else {
            return node[0]
        }
    }
}

const node1 = new Node();
const node2 = new Node();
const node3 = new Node();
const node4 = new Node();
const node5 = new Node();
// Set all data of node1
node1.setId = 1;
node1.setData = 'Nodo Uno';
node1._nodes = [node4, node5];
// Set all data of node2
node2.setId = 2;
node2.setData = 'Nodo Dos';
node2._nodes = [node3, node4, node5];
// Set all data of node3
node3.setId = 3;
node3.setData = 'Nodo Tres';
node3._nodes = [node2, node4, node5];
// Set all data of node4
node4.setId = 4;
node4.setData = 'Nodo Cuatro';
node4._nodes = [node1, node2];
// Set all data of node5
node5.setId = 5;
node5.setData = 'Nodo Cuatro';
node5._nodes = [node4, node1];

// Test of moveTo
console.log(node1.moveTo(4))
console.log(node1.moveTo(2))
console.log(node5.moveTo(1))



console.log(node1);
console.log(node2);
console.log(node3);
console.log(node4);
console.log(node5);