
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
