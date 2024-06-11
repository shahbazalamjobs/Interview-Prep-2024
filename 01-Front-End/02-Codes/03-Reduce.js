
// Reduce

// 1. Sum of no.
const num = [1, 2, 3];
const sum = num.reduce((acc, num) => {
    return acc + num;
}, 0);

console.log(sum); // 6

// 2. using normal function
const sum2 = num.reduce(function (acc, no) {
    return acc + no;
}, 0);


// 3. flatten array
const nestedArray = [[1, 2], [3, 4], [5, 6]];
const flatten = nestedArray.reduce((acc, arr) => {
    return acc.concat(arr);
}, []);

console.log(flatten);   // [ 1, 2, 3, 4, 5, 6 ]

// 4. sum from arr of obj
const products = [
    { name: 'Laptop', price: 1000 },
    { name: 'Phone', price: 500 },
    { name: 'Tablet', price: 700 }
];

let sum3 = products.reduce((acc, product) => {
    return acc + product.price;
}, 0);

console.log(sum3);  // 2200

// 5. Counting Instances:
const fruits = ['apple', 'banana', 'orange', 'apple', 'orange', 'banana', 'apple'];
const countingFruit = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
}, {});

console.log(countingFruit);

// 6. Group objects by a specific property.
const people = [
    { name: 'Alice', age: 21 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 21 },
    { name: 'David', age: 25 },
    { name: 'Eve', age: 21 }
];


// using map not recommended
const group = {};
people.map((individual) => {
    const age = individual.age;
    if (!group[age]) {
        group[age] = [];
    }

    group[age].push(individual);
    return group;
});

console.log(group);

// using reduce, suitable method 
const groupByAge = people.reduce((accumulator, individual) => {
    const age = individual.age;

    if (!accumulator[age]) {
        accumulator[age] = [];
    }

    accumulator[age].push(individual);
    return accumulator;

}, {});

console.log(groupByAge);

