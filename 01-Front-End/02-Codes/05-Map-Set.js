

// map

const map1 = new Map();

map1.set("fruit", "apple");
console.log(map1.get("fruit"));

map1.set("age", 25);
console.log(map1.get("age"));

console.log(map1.has("fruit"));
console.log(map1.has("age"));

map1.set("mobile", "samsung");
map1.delete("mobile");
console.log(map1.get("mobile"));

map1.set("address", "USA");

for (let [key, value] of map1) {
  console.log([key, value]);
}

for (let key of map1.keys()) {
  console.log(key);
}

for (let val of map1.values()) {
  console.log(val);
}

console.log(map1.size);

map1.clear();
console.log(map1.size);


// Set

const set1 = new Set();
set1.add(1);
set1.add(2);
set1.add(2); // Duplicate values are ignored

console.log(set1.has(1));
console.log(set1.has(3));

set1.delete(1);
console.log(set1.has(1));

set1.add(3);
set1.add(4);

for (let value of set1) {
  console.log(value);
}

console.log(set1.size);

set1.clear();
console.log(set1.size); // 0
