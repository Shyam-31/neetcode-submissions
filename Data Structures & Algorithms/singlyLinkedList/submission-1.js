class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = new ListNode(-1); // dummy node
        this.tail = this.head;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        let curr = this.head.next;
        let i = 0;
        while (curr) {
            if (i === index) return curr.val;
            i++;
            curr = curr.next;
        }
        return -1;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
        const node = new ListNode(val, this.head.next);
        this.head.next = node;
        if (!node.next) this.tail = node; // list was empty
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val) {
        const node = new ListNode(val);
        this.tail.next = node;
        this.tail = node;
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {
        let i = 0;
        let curr = this.head; // start at dummy, stop at node before target
        while (i < index && curr) {
            i++;
            curr = curr.next;
        }

        // curr is the node before the target; target must exist
        if (curr && curr.next) {
            if (curr.next === this.tail) {
                this.tail = curr; // removing the tail
            }
            curr.next = curr.next.next;
            return true;
        }
        return false;
    }

    /**
     * @return {number[]}
     */
    getValues() {
        const res = [];
        let curr = this.head.next;
        while (curr) {
            res.push(curr.val);
            curr = curr.next;
        }
        return res;
    }
}