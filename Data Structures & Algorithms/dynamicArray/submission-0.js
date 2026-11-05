class DynamicArray {
    constructor(capacity) {
        this.arr = new Array(capacity);
        this.size = 0;
        this.capacity = capacity;
    }

    // Get element
    get(i) {
        return this.arr[i];
    }

    // Set element
    set(i, n) {
        this.arr[i] = n;
    }

    // Add element
    pushback(n) {
        if (this.size === this.capacity) {
            this.resize();
        }

        this.arr[this.size] = n;
        this.size++;
    }

    // Remove last element
    popback() {
        this.size--;
        return this.arr[this.size];
    }

    // Double capacity
    resize() {
        this.capacity *= 2;

        let newArr = new Array(this.capacity);

        for (let i = 0; i < this.size; i++) {
            newArr[i] = this.arr[i];
        }

        this.arr = newArr;
    }

    // Get size
    getSize() {
        return this.size;
    }

    // Get capacity
    getCapacity() {
        return this.capacity;
    }
}
