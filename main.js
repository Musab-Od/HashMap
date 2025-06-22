import { HashMap } from "./hashMap.js";
import { HashSet } from "./hashSet.js";

const hashmap = new HashMap();
const hashset = new HashSet();


hashmap.set('apple', 'red')
hashmap.set('banana', 'yellow')
hashmap.set('carrot', 'orange')
hashmap.set('dog', 'brown')
hashmap.set('elephant', 'gray')
hashmap.set('frog', 'green')
hashmap.set('grape', 'purple')
hashmap.set('hat', 'black')
hashmap.set('ice cream', 'white')
hashmap.set('jacket', 'blue')
hashmap.set('kite', 'pink')
hashmap.set('lion', 'golden')
hashmap.set('moon', 'silver')
hashmap.set('apple', 'green') // Update existing key
console.log(hashmap.get('apple')); // Should return 'green'
console.log(hashmap.has('banana')); // Should return true
console.log(hashmap.remove('carrot')); // Should return true
console.log(hashmap.remove('nonexistent')); // Should return false
console.log(hashmap.keys()); // Should return all keys
console.log(hashmap.values()); // Should return all values
console.log(hashmap.entries()); // Should return all key-value pairs

console.log(hashmap.length());
console.log(hashmap.capacity);

hashmap.clear(); // Clear the hash map
console.log(hashmap.entries());

hashset.add('apple')
hashset.add('banana')
hashset.add('carrot')
hashset.add('dog')
hashset.add('elephant')
hashset.add('frog')
hashset.add('grape')
hashset.add('hat')
hashset.add('ice cream')
hashset.add('jacket')
hashset.add('kite')
hashset.add('lion')
console.log(hashset.length());
console.log(hashset.capacity);
hashset.add('moon')
console.log(hashset.has('apple')); // Should return true
console.log(hashset.has('Hmmm')); // Should return false
console.log(hashset.remove('hat')); // Should return true
console.log(hashset.remove('nonexistent')); // Should return false
console.log(hashset.entries()); // Should return all values

console.log(hashset.length());
console.log(hashset.capacity);

hashset.clear(); // Clear the hash map
console.log(hashset.entries());