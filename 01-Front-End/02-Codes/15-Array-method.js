
// Array

// create array 
// literal syntax

let arr1 = [1, 2, 3];

console.log(arr1);

// using array constrcutor 

let arr_1 = new Array(2, 3, 4);
console.log("arr_1: ", arr_1);

let arr2D = [[1, 2, 3], [4, 5, 60, [7, 8], [8]]];
console.log(arr2D);

// Sparse Arrays -  arrays containing empty slots.

let arr2 = [1, 2, 3, , 4, 5];
console.log(arr2);  // [ 1, 2, 3, <1 empty item>, 4, 5 ]
console.log(arr2.length);

arr2.length = 10;
console.log(arr2.length);   // [ 1, 2, 3, <1 empty item>, 4, 5, <9 empty items>, 7 ]

arr2[15] = 7;
console.log(arr2);


// Compare Arrays

// JavaScript arrays are objects, and if you try to compare two objects,
// the comparison takes place considering their references – and not their actual values.

let dough1 = ['flour', 'water', 'yeast', 'salt'];
let dough2 = ['flour', 'water', 'yeast', 'salt'];

console.log(dough1 === dough2); // false
console.log(Array() === Array()); // false

// Both false because  equality is checking reference, ref. are always going to be diff,


let dough3 = ['flour', 'water', 'yeast', 'salt'];
let dough4 = dough3;

console.log(dough3 === dough4); // true, coz both refer to same reference

// Array equality solution -Iterating
const equality = (array1, array2) => {
    if (array1.length !== array2.length) {
        return false;
    }

    for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            return false;
        }
    }

    return true;
}


console.log("Equality: ", equality(dough1, dough2));


// comparing 2d Array

let metal1 = [['Li', 'Na', 'K'], ['Be', 'Mg', 'Ca']];
let metal2 = [['Li', 'Na', 'K'], ['Be', 'Mg', 'Ca']];

const equality2DArr = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr1[i].length; i++) {
            if (arr1[i].length !== arr2[i].length) {
                return false;
            }

            if (arr1[i][j] !== arr2[i][j]) {
                return false;
            }

            return true;
        }
    }
}

console.log("2d Arr equality check: ", equality2DArr(metal1, metal2));  // true


// compare 2 array of objects

let albums1 = [
    { artist: 'Frank Zappa', title: 'Over-Nite Sensation', year: 1973 },
    { artist: 'Frank Zappa', title: 'Apostrophe', year: 1974 },
    { artist: 'Frank Zappa', title: 'One Size Fits All', year: 1975 }
];

// let albums2 = [
//     { artist: 'Frank Zappa', title: 'Over-Nite Sensation', year: 1973 },
//     { artist: 'Frank Zappa', title: 'Apostrophe', year: 1974 },
//     { artist: 'Frank Zappa', title: 'One Size Fits All', year: undefined },
// ];

let albums2 = [
    { artist: 'Frank Zappa', title: 'Over-Nite Sensation', year: 1973 },
    { artist: 'Frank Zappa', title: 'Apostrophe', year: 1974 },
    { artist: 'Frank Zappa', title: 'One Size Fits All', year: 1975 }
];

const compareArrObj = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
        console.log("false 1");
        return false;
    }

    const areObjEqual = (obj1, obj2) => {
        let obj1Keys = Object.keys(obj1);
        let obj2Keys = Object.keys(obj2);

        if (obj1Keys.length !== obj2Keys.length) {
            console.log("false 2");
            return false;
        }

        for (let key of obj1Keys) {
            if (obj1[key] !== obj2[key]) {
                console.log("false 3");
                return false;
            }
        }

        return true;
    }

    for (let i = 0; i < arr1.length; i++) {
        if (!areObjEqual(arr1[i], arr2[i])) {
            return false;
        }
    }

    return true;
}

console.log("Are both array of objects equal", compareArrObj(albums1, albums2));


// Common Array methods

let nobleGases = ['He', 'Ne', 'Ar', 'Kr', 'Xn'];
console.log(nobleGases);    //  ['He', 'Ne', 'Ar', 'Kr', 'Xn'];
nobleGases[5] = 'Na';
console.log(nobleGases);    //  ['He', 'Ne', 'Ar', 'Kr', 'Xn', 'Na];

nobleGases.push('Ge');
console.log(nobleGases);

let names = ['a', 'b', 'c'];
names.push('d', 'e', 'f');
console.log(names); // [ 'a', 'b', 'c', 'd', 'e', 'f' ]

let fruits = ['a', 'b', 'c'];
let otherFruits1 = ['d', 'e'];
fruits.push(...otherFruits1);
console.log(fruits);    // [ 'a', 'b', 'c', 'd', 'e']

let otherFruits2 = ['f', 'g'];
fruits.push(otherFruits2);
console.log(fruits);    // [ 'a', 'b', 'c', 'd', 'e', [ 'f', 'g' ] ]    


let arr3 = [1, 2, 3];
arr3.unshift(4) // [ 4, 1, 2, 3 ]
console.log(arr3);

arr3.unshift(5, 6, 7);
console.log(arr3);  //   [ 5, 6, 7, 4, 1, 2, 3 ]

arr3.pop();
console.log(arr3);   // [ 5, 6, 7, 4, 1, 2 ]

let arr3_pop = arr3.pop();
console.log(arr3_pop);  // 2


console.log(arr3);  // [ 5, 6, 7, 4, 1 ]
let arr3_shift = arr3.shift();
console.log(arr3_shift);    // 5
console.log(arr3);  // [ 6, 7, 4, 1 ] 


let arr4 = [1, 2, 3, 4];
console.log(arr4.splice(1, 2)); // [ 2, 3 ]
console.log(arr4);  // [ 1, 4 ]


// Array to string

// 1. toString()

let arr5 = ['a', 'b', 'c'];
console.log(arr5.toString());
console.log(arr5);
console.log("join: ", arr5.join(', '));

let arr6 = [1, 'a', null, undefined, [1, 'a'], {}, []];
console.log(arr6.join());   // 1,a,,,1,a,[object Object],
console.log(arr6.toString())    // 1,a,,,1,a,[object Object],


// JSON.stringify()    // to convert array containing object to string

let arr7 = ['a', 'b', 1, {}, [2, 3], { 'a': 1, 'b': 2, 'c': 'd' }];
console.log(JSON.stringify(arr7));

let albums3 = [
    { artist: 'Frank Zappa', title: 'Apostrophe', year: 1974 },
    { artist: 'Frank Zappa', title: 'One Size Fits All', year: 1975 }
];

console.log(JSON.stringify(albums3));

// Compare Arrays

// Arrays are objects, their comparison is based on references. Not on the actual values.

// Array comparison methods
// 1. Converting arrays to string then compare, it is good and fast but give unexpected result when it contains null and undefined

let a = [1, null, 3];
let b = [1, undefined, 3];

a[1] === b[1]; // false

null === undefined; // false

JSON.stringify(a) === JSON.stringify(b); // true

// 2. Better alternative for arr comparison, every()

// every syntax
// array.every((element, index, array) => {});

const compareArr = ((arr1, arr2) => {
    return arr1.length === arr2.length &&
        arr1.every((elem, index) => {
            return elem === arr2[index];
        });
});

let arr8_1 = [1, 2, 3];
let arr8_2 = [1, 2, 3];

console.log(compareArr(arr8_1, arr8_2));
console.log(compareArr(a, b)); 



// Array copying
// Most array method create shallow copy

// slice()
// array.slice(startIndex, endIndex)    // it copy entire array from start(including) to end(not including)


let arr9 = [1,2,3];
let arr9_copy = arr9.slice();
console.log(arr9_copy);     // [1,2,3]
console.log(arr9);     // [1,2,3]

let arr9_copy2 = arr9.slice(0, 2);
console.log(arr9_copy2);    // [ 1, 2 ]


arr9_copy[0] = 8;
console.log("arr9: ", arr9, " arr9_copy: ", arr9_copy)
// arr9:  [ 1, 2, 3 ]  arr9_copy:  [ 8, 2, 3 ]
// no change on original array bcoz of primitive values
// for non primitive values both arr will change coz of both elements refer to same reference

let albums4 = [
    {artist: 'Frank Zappa', title: 'Apostrophe'},
    {artist: 'Frank Zappa', title: 'One Size Fits All'}
];

let albums4_copy = albums4.slice();
console.log(albums4_copy);

albums4_copy[0].title = 'Hello'
console.log(albums4_copy);
console.log(albums4);

/* 

both output of albums4_copy, albums4

[
  { artist: 'Frank Zappa', title: 'Hello' },
  { artist: 'Frank Zappa', title: 'One Size Fits All' }
]

albums4_copy is shallow copy bcoz both array element have reference to same

i.e. albums4_copy[0] === albums4[0] // true


albumsCopy[1] = {artist: 'Captain Beefheart', title: 'Safe as Milk'};

console.log(albumsCopy);
// [
//  {artist: 'Frank Zappa', title: 'Apostrophe'},
//  {artist: 'Captain Beefheart', title: 'Safe as Milk'}
// ];

console.log(albums);
// [
//  {artist: 'Frank Zappa', title: 'Apostrophe'},
//  {artist: 'Frank Zappa', title: 'Absolutely Free'}
// ];

*/



// Creating Deep copy of Array
// using json parse and json stringify

let albums5 = [
    {artist: 'Frank Zappa', title: 'Apostrophe'},
    {artist: 'Frank Zappa', title: 'One Size Fits All'}
];

const albums5_copy = JSON.parse(JSON.stringify(albums5));
console.log(albums5_copy);

albums5_copy[0].artist = 'SRK';
console.log(albums5_copy);
console.log(albums5);

/* 

o/p

[
  { artist: 'SRK', title: 'Apostrophe' },
  { artist: 'Frank Zappa', title: 'One Size Fits All' }
]
[
  { artist: 'Frank Zappa', title: 'Apostrophe' },
  { artist: 'Frank Zappa', title: 'One Size Fits All' }
]

*/


// Search Inside Array

// 1. includes
// array.includes(searchElement, fromIndex)
// array.includes(searchElement, fromIndex)


let array1 = [1, 2, 3, 4, 5];
console.log(array1.includes(3));       // Output: true
console.log(array1.includes(3, 3));    // Output: false
console.log(array1.includes(6));       // Output: false
console.log(array1.includes(4, -2));   // Output: true (because -2 is interpreted as 3)
// here -2 means array1.length = 5 -> 5 -2 = 3, starting index = 3 -> 4

let string1 = "hello world";
console.log(string1.includes("world"));      // Output: true
console.log(string1.includes("o"));          // Output: true
console.log(string1.includes("o", 5));       // Output: true
console.log(string1.includes("z"));          // Output: false
console.log(string1.includes("o", -2));      // Output: true (fromIndex < 0 is treated as 0)


// 2. indexOf
// array.indexOf(searchElement, fromIndex)
// string.indexOf(searchValue, fromIndex)

let array2 = [1, 2, 3, 4, 5, 3];
console.log(array2.indexOf(3));       // Output: 2
console.log(array2.indexOf(3, 3));    // Output: 5
console.log(array2.indexOf(6));       // Output: -1
console.log(array2.indexOf(3, -2));   // Output: 5 (because -2 is interpreted as 4)

let string2 = "hello world";
console.log(string2.indexOf("world"));      // Output: 6
console.log(string2.indexOf("o"));          // Output: 4
console.log(string2.indexOf("o", 5));       // Output: 7
console.log(string2.indexOf("z"));          // Output: -1
console.log(string2.indexOf("o", -2));      // Output: 4 (fromIndex < 0 is treated as 0)



// 3. find and find last -> gives first and last element that follows callback condition

let users2 = [
    { id: 1, name: 'Alice', age: 28 },
    { id: 2, name: 'Bob', age: 34 },
    { id: 3, name: 'Charlie', age: 22 },
    { id: 4, name: 'David', age: 34 },
    { id: 5, name: 'Eve', age: 40 }
  ];
  
  // Find index of the first user over 30
  let indexOver30 = users2.findIndex(user => user.age > 30);
  console.log(indexOver30); // Output: 1
  
  // Find index of the last user over 30
  let lastIndexOver30 = users2.findLastIndex(user => user.age > 30);
  console.log(lastIndexOver30); // Output: 4
  
  // Find index of the first user whose name starts with 'C'
  let indexNameStartsWithC = users2.findIndex(user => user.name.startsWith('C'));
  console.log(indexNameStartsWithC); // Output: 2
  
  // Find index of the last user whose age is 34
  let lastIndexAge34 = users2.findLastIndex(user => user.age === 34);
  console.log(lastIndexAge34); // Output: 3
  
  // Find index of the first user whose age is greater than 30 and name starts with 'D'
  let indexAgeOver30NameD = users2.findIndex(user => user.age > 30 && user.name.startsWith('D'));
  console.log(indexAgeOver30NameD); // Output: 3
  
  // Find index of the last user whose age is less than 40 and name length is 3
  let lastIndexUnder40NameLength3 = users2.findLastIndex(user => user.age < 40 && user.name.length === 3);
  console.log(lastIndexUnder40NameLength3); // Output: 1
  

//   Conditions on every array elements

//   4. every and some 

// The every method tests whether all elements in the array pass the test implemented by the provided function. 
// It returns true if the callback function returns a truthy value for every array element; otherwise, it returns false.

// The some method tests whether at least one element in the array passes the test implemented by the provided function. 
// It returns true if the callback function returns a truthy value for at least one element in the array; otherwise, it returns false.

// array.every(callback(element, index, array), thisArg)
// array.some(callback(element, index, array), thisArg)

let users3 = [
    { id: 1, name: 'Alice', age: 28 },
    { id: 2, name: 'Bob', age: 34 },
    { id: 3, name: 'Charlie', age: 22 },
    { id: 4, name: 'David', age: 34 },
    { id: 5, name: 'Eve', age: 40 }
  ];
  
  // Check if all users are over 18
  let allAdults = users3.every(user => user.age > 18);
  console.log(allAdults); // Output: true
  
  // Check if there is at least one user under 30
  let anyUnder30 = users3.some(user => user.age < 30);
  console.log(anyUnder30); // Output: true
  
  // Check if all users have names longer than 3 characters
  let allNamesLongerThan3 = users3.every(user => user.name.length > 3);
  console.log(allNamesLongerThan3); // Output: false (because Bob's name length is 3)
  
  // Check if there is at least one user over 30 and their name starts with 'D'
  let anyOver30NameStartsWithD = users3.some(user => user.age > 30 && user.name.startsWith('D'));
  console.log(anyOver30NameStartsWithD); // Output: true (David meets the condition)
  
