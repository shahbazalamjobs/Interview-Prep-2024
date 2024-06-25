

### Maps

- A Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

```js
// Creating and using a Map
const myMap = new Map();

// Adding key-value pairs to the Map
myMap.set('name', 'Alice');
myMap.set('age', 25);

// Retrieving values from the Map
console.log(myMap.get('name')); // Alice
console.log(myMap.get('age')); // 25

// Checking if a key exists in the Map
console.log(myMap.has('name')); // true
console.log(myMap.has('address')); // false

// Deleting a key-value pair from the Map
myMap.delete('age');
console.log(myMap.has('age')); // false

// Iterating over the Map entries
myMap.set('city', 'Wonderland');

for (let [key, value] of myMap) {
  console.log(key, value);
}
// Output:
// name Alice
// city Wonderland

// Iterating over the Map keys
for (let key of myMap.keys()) {
  console.log(key);
}
// Output:
// name
// city

// Iterating over the Map values
for (let value of myMap.values()) {
  console.log(value);
}
// Output:
// Alice
// Wonderland

// Getting the size of the Map
console.log(myMap.size); // 2

// Clearing all key-value pairs from the Map
myMap.clear();
console.log(myMap.size); // 0

// Creating and using a Set
const mySet = new Set();

// Adding values to the Set
mySet.add(1);
mySet.add(2);
mySet.add(2); // Duplicate values are ignored

// Checking if a value exists in the Set
console.log(mySet.has(1)); // true
console.log(mySet.has(3)); // false

// Deleting a value from the Set
mySet.delete(2);
console.log(mySet.has(2)); // false

// Iterating over the Set values
mySet.add(3);
mySet.add(4);

for (let value of mySet) {
  console.log(value);
}
// Output:
// 1
// 3
// 4

// Getting the size of the Set
console.log(mySet.size); // 3

// Clearing all values from the Set
mySet.clear();
console.log(mySet.size); // 0

// Creating a Map with multiple key-value pairs
const myMap = new Map([
  ['name', 'Alice'],
  ['age', 25],
  ['city', 'Wonderland']
]);

// Retrieving and logging values
console.log(myMap.get('name')); // Alice
console.log(myMap.get('age')); // 25
console.log(myMap.get('city')); // Wonderland

```
