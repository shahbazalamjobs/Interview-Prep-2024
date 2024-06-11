
// For Each Practice

// 01- Logging each values

let names = ['Shyam', 'Raju', 'Mamu', 'Rocky'];

names.forEach((name, index) => {
    console.log(index + 1 + " : " + name);
})


// 02- Modifying DOM elements

// let containerEle = document.createElement('div');
// let containerEle = document.querySelector('.containerEle');

// names.forEach((name) => {
//     let li = document.createElement('li');
//     li.textContent = name;
//     containerEle.appendChild(li);
// })



// 03- Performing Side Effects

// names.forEach((user) =>{
//     fetch(`api\send-email?user=${user}`)
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(err => console.error(err));
// })


// 04- Accumulating Values

let numbers = [4, 5, 8, -6, 20, 15];
let sum = 0;

numbers.forEach((number) => {
    sum += number;
})

console.log(sum);   // Sum: 15


// Example 5: Counting Occurrences
let fruits = ['Apple', 'Banana', 'Apple', 'Mango', 'Apple'];

let count = 0;

fruits.forEach((fruit) => {

    if (fruit === 'Apple') {
        count++;
    }
})

console.log("Fruit counts: ", count);   // Number of Apples: 3


// Example 6: Normalizing Data

let strings = ['  hello ', 'world  ', ' foo ', ' bar'];

strings.forEach((str, index, arr) => {
    arr[index] = str.trim();
})

console.log(strings)     // ["hello", "world", "foo", "bar"]


// Example 7: Creating Objects

let users = ['Alice', 'Bob', 'Charlie'];
let userObj = [];

users.forEach((user, index) => {
    userObj.push({ id: index + 1, user });
})

console.log(userObj);


// Example 8: Asynchronous Operations
// We dont use this but just for understanding

let urls = ['https://api.example.com/1', 'https://api.example.com/2', 'https://api.example.com/3'];

urls.forEach((url) => {
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.error("Error: ", error));
});



// Example 9: Chaining Promises
// We dont use this but just for understanding

let tasks = [task1, task2, task3];

let tasks = [task1, task2, task3];

tasks.forEach(task => {
    task().then(result => {
        console.log('Task completed with result:', result);
    }).catch(error => {
        console.error('Task failed:', error);
    });
});



// Example 10: Event Listeners : Adding event listeners to a list of elements.

let buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log("Button clicked");
    })
});




// Iterating over object keys

let obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
}

for(let key in obj){
    if(obj.hasOwnProperty(key)){
        console.log(key, obj[key]);
    }
}

let x = Object.keys(obj).length;
console.log("length:", x);




// Practice codes


// 1. Sum of Array Elements: Calculate the sum of all elements in an array.
const numbers1 = [5, 6, 8, 2, 3];

let sum = 0;
numbers1.forEach(num => sum += num);

console.log(sum); // Output: 24

// 2. Product of Array Elements: Find the product of all elements in an array.
const numbers2 = [5, 6, 8, 2, 3];

let mul = 1;
numbers2.forEach(num => mul *= num);

console.log(mul); // Output: 1440

// 3. Filtering: Filter out elements of an array based on certain conditions.
const numbers3 = [5, 6, 8, 2, 3, 10];

let evenNo = [];
numbers3.forEach((num) => {
    if (num % 2 === 0) {
        evenNo.push(num);
    }
});

console.log(evenNo); // Output: [6, 8, 2, 10]

// 4. String Concatenation: Concatenate all elements of an array into a single string.
const strings = ['America', 'India', 'Australia', 'Saudi Arabia', 'Africa'];

let concatStr = '';
strings.forEach((str) => {
    concatStr = concatStr.concat(str + ' ');
});

console.log(concatStr); // Output: "America India Australia Saudi Arabia Africa "

// 5. Counting Occurrences: Count occurrences of specific elements in an array.
const numbers4 = [5, 6, 8, 2, 3, 10, 5, 4, 2, 8, 3, 3, 10, 2, 5, 5, 10];

let count = 0;
numbers4.forEach((num) => {
    if (num === 5) {
        count++;
    }
});

console.log(count); // Output: 5

// 6. Replacing Elements: Replace certain elements in an array with new values.
const numbers5 = [5, 6, 8, 2, 3, 10, 5, 4, 2, 8, 3, 3, 10, 2, 5, 5, 10];

numbers5.forEach((num, index) => {
    if (num === 8) {
        numbers5[index] = 7;
    }
});

console.log(numbers5); // Output: [5, 6, 7, 2, 3, 10, 5, 4, 2, 7, 3, 3, 10, 2, 5, 5, 10]

// 7. Filtering Items with 'z': Filter items that include the character 'z'.
const items1 = ['apple', 'banana', 'grape', 'orange', 'adrakz', 'amchurz', 'amlza'];
let filteredItems1 = [];

items1.forEach(item => {
    if (item.includes('z')) {
        filteredItems1.push(item);
    }
});

console.log(filteredItems1); // Output: ['adrakz', 'amchurz', 'amlza']

// 8. forEach for DOM Manipulation: Change the color of items with the class 'item'.
const items2 = document.querySelectorAll('.item');
items2.forEach(item => item.style.color = 'blue');

// 9. Event Listeners for Multiple Elements: Add a click event listener to buttons with the class 'button'.
const buttons = document.querySelectorAll('.button');
buttons.forEach(button => button.addEventListener('click', () => alert('Button clicked!')));

// 10. Creating and Appending DOM Elements: Create and append list items for users.
const users = ['Alice', 'Bob', 'Charlie'];
const userList = document.getElementById('userList');
users.forEach(user => {
    const li = document.createElement('li');
    li.textContent = user;
    userList.appendChild(li);
});

// 11. Form Validation: Add an 'error' class to empty input fields.
const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
    if (input.value === '') {
        input.classList.add('error');
    }
});

// 12. Toggling Classes: Add a 'highlight' class to items containing 'active'.
const items3 = document.querySelectorAll('.item');
items3.forEach(item => {
    if (item.textContent.includes('active')) {
        item.classList.add('highlight');
    }
});

// 13. Filtering and Displaying Data: Filter items containing 'a' and display them in a list.
const items4 = ['apple', 'banana', 'grape', 'orange'];
const filteredItems2 = items4.filter(item => item.includes('a'));
const list = document.getElementById('filteredItems');
filteredItems2.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    list.appendChild(li);
});

// 14. Animating Elements: Add a class to elements with a delay.
const elements = document.querySelectorAll('.animate');
elements.forEach((element, index) => {
    setTimeout(() => {
        element.classList.add('start-animation');
    }, index * 100);
});
