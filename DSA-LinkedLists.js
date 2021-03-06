class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }
    insertFirst(item) {
        this.head = new _Node(item, this.head);
    }

    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item);
        }
        else {
            let tempNode = this.head;
            while (tempNode.next != null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null);
        }
    }

    insertBefore(item) {
        before = new _Node(item, -1)
    }

    insertAfter(item) {
        after = new _Node(item, 1)
    }

    insertAt(item, position) {
        at = new _Node(item, position)
    }

    find(item) {
        let currNode = this.head;

        if(!this.head) {
            return null;
        }

        while (currNode.value !== item) {

            if(currNode.next === null) {
                return null;
            }
            else {
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

        let previousNode = this.head;

        while ((currNode !== null) && (currNode.value !== item)) {

            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('Item note found');
            return;
        }
        previousNode.next = currNode.next;
    }
}

function main() {
    let SLL = new LinkedList;
    SLL.insertFirst('Apollo')
    SLL.insertLast('Boomer')
    SLL.insertLast('Helo')
    SLL.insertLast('Husker')
    SLL.insertLast('Starbuck')
    SLL.insertLast('Tauhida')
    SLL.remove('Husker')

}

let inst = new LinkedList;
inst.insertFirst('Boomer')
