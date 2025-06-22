export class HashMap {
    constructor() {
        this.capacity = 16;
        this.size = 0;
        this.buckets = new Array(this.capacity).fill(null).map(() => []);
        this.loadFactor = 0.75;
    }

    hash(key) {
        let hashCode = 0;
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
        hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.buckets.length;
    }
    return hashCode;
    }

    set(key, value) {
        const index = this.hash(key);
        const bucket = this.buckets[index];
        
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket[i][1] = value; // Update existing key
                return;
            }
        }

        bucket.push([key, value]); // Add new key-value pair
        this.size++;

        if (this.size / this.capacity > this.loadFactor) {
            this.resize();
        }
    }

    get(key) {
        const index = this.hash(key);
        const bucket = this.buckets[index];
        
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                return bucket[i][1]; // Return value if key found
            }
        }
        return null; // Key not found
    }

    has(key) {
        const index = this.hash(key);
        const bucket = this.buckets[index];
        
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                return true; // Key exists
            }
        }
        return false; // Key does not exist
    }

    remove(key) {
        const index = this.hash(key);
        const bucket = this.buckets[index];

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket.splice(i, 1); // Remove key-value pair
                this.size--;
                return true; // Successfully removed
            }
        }
        return false; // Key not found
    }

    length() {
        return this.size; // Return the number of key-value pairs
    }

    clear() {
        this.buckets = new Array(this.capacity).fill(null).map(() => []);
        this.size = 0; // Reset size
    }

    keys() {
        const keysArray = [];
        for (const bucket of this.buckets) {
            for (const pair of bucket) {
                keysArray.push(pair[0]); // Collect keys from each bucket
            }
        }
        return keysArray; // Return all keys
    }

    values() {
        const valuesArray = [];
        for (const bucket of this.buckets) {
            for (const pair of bucket) {
                valuesArray.push(pair[1]); // Collect values from each bucket
            }
        }
        return valuesArray; // Return all values
    }

    entries() {
        const entriesArray = [];
        for (const bucket of this.buckets) {
            for (const pair of bucket) {
                entriesArray.push([pair[0], pair[1]]); // Collect key-value pairs
            }
        }
        return entriesArray; // Return all entries
    }

    resize() {
        const oldBuckets = this.buckets;
        this.capacity *= 2;
        this.buckets = Array(this.capacity).fill(null).map(() => []);
        this.size = 0;

        for (let bucket of oldBuckets) {
            for (let [key, value] of bucket) {
                this.set(key, value); // Rehash all existing entries
            }
        }
    }
}