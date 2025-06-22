export class HashSet {
    constructor() {
        this.capacity = 16;
        this.size = 0;
        this.buckets = new Array(this.capacity).fill(null).map(() => []);
        this.loadFactor = 0.75;
    }
    
    hash(value) {
        let hashCode = 0;
        const primeNumber = 31;
        for (let i = 0; i < value.length; i++) {
            hashCode = (primeNumber * hashCode + value.charCodeAt(i)) % this.buckets.length;
        }
        return hashCode;
    }

    add(value) {
        const index = this.hash(value);
        const bucket = this.buckets[index];

        if (!bucket.includes(value)) {
            bucket.push(value);
            this.size++;

            if (this.size / this.capacity > this.loadFactor) {
                this.resize();
            }
        }
    }

    has(value) {
        const index = this.hash(value);
        const bucket = this.buckets[index];

        return bucket.includes(value); // Check if value exists
    }

    remove(value) {
        const index = this.hash(value);
        const bucket = this.buckets[index];
        
        const valueIndex = bucket.indexOf(value);
        if (valueIndex !== -1) {
            bucket.splice(valueIndex, 1); // Remove value
            this.size--;
            return true; // Value removed
        }
        return false; // Value not found
    }

    clear() {
        this.buckets = new Array(this.capacity).fill(null).map(() => []);
        this.size = 0; // Reset size
    }

    length() {
        return this.size; // Return current size
    }

    entries() {
        const result = [];
        for (const bucket of this.buckets) {
            for (const value of bucket) {
                result.push(value); // Collect all values
            }
        }
        return result; // Return all values in the set
    }

    resize() {
        const oldBuckets = this.buckets;
        this.capacity *= 2;
        this.buckets = new Array(this.capacity).fill(null).map(() => []);
        this.size = 0;

        for (const bucket of oldBuckets) {
            for (const value of bucket) {
                this.add(value); // Rehash and add values to new buckets
            }
        }
    }
}