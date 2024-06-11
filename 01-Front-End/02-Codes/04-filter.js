

// filter 

// 1. filter even no.s 

const numbers = [1, 5, 7, 8, 12, 10, 9, 4, 2];
const evenNo = numbers.filter((num) => {
    return num % 2 === 0;
});

console.log(evenNo);


// 2. Filtering out null or undefined values:
const array1 = [1, null, 2, undefined, 3];
// const filterArr1 = array1.filter((num) => {
//     return (num !== undefined && num !== null);
// });

// console.log(filterArr1);

// conscise
const filterArr1 = array1.filter(item => item !== null && item !== undefined);
console.log(filterArr1);


// 3. Filtering out empty strings:
const array2 = ["", "hello", "world", "", "example"];
// const filterArr2 = array2.filter((item) => {
//     item.trim();
//     return (item !== "");
// })

// console.log(filterArr2)

// conscise
const filterArr2 = array2.filter(str => str !== "");
console.log(filterArr2)


// 4. Filtering out duplicate values:
const array3 = [1, 2, 3, 3, 4, 5, 5];
const filterArr3 = array3.filter((num, index, arr) => arr.indexOf(num) === index);


// 5. Filtering based on a property of objects in an array:
const users = [
    { id: 1, name: "John", age: 30 },
    { id: 2, name: "Alice", age: 25 },
    { id: 3, name: "Bob", age: 35 },
    { id: 4, name: "David", age: 38 }
];

// filter age > 30

const filterUsers = users.filter(user => (user.age > 30));
console.log(filterUsers);


// 6. Filtering based on multiple conditions "filter num>15 && num <45"
const numbers1 = [10, 20, 30, 40, 50];
const filterNumbers1 = numbers1.filter(num => num > 15 && num < 45);
console.log(filterNumbers1);

// 7. Filtering based on a specific value:
const fruits = ["apple", "banana", "orange", "apple", "kiwi"];
const filterFruit = fruits.filter(fruit => fruit === 'apple');
console.log(filterFruit);


// 8. Filtering based on a regex pattern:
const words = ["hello", "world", "JavaScript", "goodbye"];
const filterWord = words.filter(str => /oo/.test(str));
console.log(filterWord);


// 9. Filtering based on the length of strings:
const words2 = ["hello", "world", "JavaScript", "goodbye"];


// 10. Filtering based on truthy values:
const array4 = [0, 1, "", "hello", null, undefined, NaN];
const filterArr4 = array4.filter(Boolean);
console.log(filterArr4);


// 11. Filtering based on user input (search filter):

const products1 = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Phone" },
    { id: 3, name: "Tablet" }
];
const userInput = "lap";

const filterProd1 = products1.filter(prod => prod.name.toLowerCase().includes(userInput.toLocaleLowerCase()));
console.log(filterProd1);



// Filter Backend

// 12. Filtering an Array of User Data:
const users2 = [
    { id: 1, name: "John", active: true },
    { id: 2, name: "Alice", active: false },
    { id: 3, name: "Bob", active: true }
];

// const filterUsers2 = users2.filter(user => user.active === true);    
const filterUsers2 = users2.filter(user => user.active);    // more optimized
console.log(filterUsers2);


// 13. Filtering Data from a Database Query:
client.query('SELECT * FROM users', (err, res) => {
    if (err) throw err;

    // Filter users based on a specific condition
    const filteredUsers = res.rows.filter(user => user.age > 18);

    console.log(filteredUsers);
    client.end();
});


// 14. Filtering a List of Orders by Status
const orders2 = [
    { id: 1, status: 'shipped' },
    { id: 2, status: 'pending' },
    { id: 3, status: 'shipped' },
    { id: 4, status: 'delivered' }
];

const filterOrders2 = orders2.filter(order => {
    return order.status === "shipped";
});

console.log(filterOrders2);
