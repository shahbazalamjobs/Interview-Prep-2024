

## Spread Operator


```javascript
// Array Literals
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArray = [...arr1, ...arr2];
console.log('Combined Array:', combinedArray); // Output: [1, 2, 3, 4, 5, 6]

// Function Calls
function sum(a, b, c) {
  return a + b + c;
}
const numbers = [1, 2, 3];
console.log('Sum:', sum(...numbers)); // Output: 6

// Object Literals
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const combinedObject = { ...obj1, ...obj2 };
console.log('Combined Object:', combinedObject); // Output: { a: 1, b: 2, c: 3, d: 4 }

// Copying Arrays
const originalArray = [1, 2, 3];
const copyArray = [...originalArray];
console.log('Copied Array:', copyArray); // Output: [1, 2, 3]

// Merging Objects
const objA = { name: 'Alice', age: 25 };
const objB = { job: 'Developer', country: 'USA' };
const mergedObj = { ...objA, ...objB };
console.log('Merged Object:', mergedObj); // Output: { name: 'Alice', age: 25, job: 'Developer', country: 'USA' }

// Adding New Elements to an Array
const fruits = ['apple', 'banana'];
const moreFruits = ['cherry', ...fruits, 'date'];
console.log('More Fruits:', moreFruits); // Output: ['cherry', 'apple', 'banana', 'date']

// Combining Arrays with Additional Elements
const baseArray = [0, 1, 2];
const newArray = [-1, ...baseArray, 3];
console.log('New Array:', newArray); // Output: [-1, 0, 1, 2, 3]

// Cloning Objects
const originalObject = { x: 1, y: 2 };
const clonedObject = { ...originalObject };
console.log('Cloned Object:', clonedObject); // Output: { x: 1, y: 2 }

// Merging Arrays of Objects
const users1 = [{ id: 1, name: 'John' }];
const users2 = [{ id: 2, name: 'Jane' }];
const mergedUsers = [...users1, ...users2];
console.log('Merged Users:', mergedUsers); // Output: [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }]

// Adding Properties to an Object
const baseObj = { e: 5, f: 6 };
const newObj = { ...baseObj, g: 7 };
console.log('New Object:', newObj); // Output: { e: 5, f: 6, g: 7 }

// Updating Object Properties
const originalObj = { name: 'Alice', age: 25, job: 'Developer', country: 'USA' };
const updatedObj = { ...originalObj, age: 26, job: 'Senior Developer' };
console.log('Updated Object:', updatedObj);   // Output: { name: 'Alice', age: 26, job: 'Senior Developer', country: 'USA' }
```

This example covers:
- Combining arrays using spread (`...`).
- Using spread in function calls.
- Combining objects with spread.
- Copying arrays and objects.
- Merging objects.
- Adding elements to arrays.
- Adding properties to objects.
- Updating object properties with spread. 



### Spread operator used in the frontend (JavaScript):

### 7. Converting NodeLists to arrays
```javascript
const nodeList = document.querySelectorAll('div');
const array = [...nodeList];
console.log(array); // Output: [div, div, div, ...]
```

### 8. Spreading elements in JSX (React)
```jsx
const props = { a: 1, b: 2 };
const Component = (props) => <div {...props}></div>;
```

### 10. Updating state in React
```jsx
const [state, setState] = useState({ a: 1, b: 2 });
setState((prevState) => ({ ...prevState, b: 3 }));
```

### 11. Duplicating and manipulating arrays in Redux
```javascript
const initialState = { items: [1, 2, 3] };
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return { ...state, items: [...state.items, action.payload] };
        default:
            return state;
    }
};
```

### 12. Copying arrays for state management
```javascript
const array = [1, 2, 3];
const newArray = [...array];
newArray.push(4);
console.log(newArray); // Output: [1, 2, 3, 4]
console.log(array); // Output: [1, 2, 3]
```

### 13. Combining multiple reducer outputs
```javascript
const reducer1 = { a: 1 };
const reducer2 = { b: 2 };
const combinedState = { ...reducer1, ...reducer2 };
console.log(combinedState); // Output: { a: 1, b: 2 }
```

### 14. Creating new arrays from existing ones with additional elements
```javascript
const originalArray = [1, 2, 3];
const newArray = [0, ...originalArray, 4];
console.log(newArray); // Output: [0, 1, 2, 3, 4]
```

### 15. Extracting elements from arrays
```javascript
const array = [1, 2, 3, 4];
const [first, ...rest] = array;
console.log(first); // Output: 1
console.log(rest); // Output: [2, 3, 4]
```


---


### Backend (Node.js) use of spread operator



### 8. Combining middleware in Express.js
```javascript
const express = require('express');
const app = express();

const middleware1 = (req, res, next) => { console.log('Middleware 1'); next(); };
const middleware2 = (req, res, next) => { console.log('Middleware 2'); next(); };

const combinedMiddleware = [middleware1, middleware2];

app.use(...combinedMiddleware);

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(3000, () => console.log('Server running on port 3000'));
```

### 9. Handling optional parameters in function calls
```javascript
const greet = (greeting, ...names) => {
  return `${greeting}, ${names.join(' and ')}!`;
};
console.log(greet('Hello', 'Alice', 'Bob')); // Output: Hello, Alice and Bob!
```

### 10. Combining configurations or settings
```javascript
const defaultConfig = { host: 'localhost', port: 3000 };
const userConfig = { port: 8080, debug: true };
const finalConfig = { ...defaultConfig, ...userConfig };
console.log(finalConfig); // Output: { host: 'localhost', port: 8080, debug: true }
```

### 11. Copying elements between arrays
```javascript
const sourceArray = [1, 2, 3];
const targetArray = [...sourceArray];
console.log(targetArray); // Output: [1, 2, 3]
```

### 12. Flattening nested arrays
```javascript
const nestedArray = [1, [2, 3], [4, 5]];
const flatArray = nestedArray.flat();
console.log(flatArray); // Output: [1, 2, 3, 4, 5]
```

### 14. Extracting subsets of data from objects
```javascript
const user = { id: 1, name: 'Alice', email: 'alice@example.com' };
const { email, ...rest } = user;
console.log(rest); // Output: { id: 1, name: 'Alice' }
```

### 15. Implementing REST API payloads for updates and inserts
```javascript
const express = require('express');
const app = express();

app.use(express.json());

let users = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];

app.post('/users', (req, res) => {
  const newUser = { ...req.body, id: users.length + 1 };
  users = [...users, newUser];
  res.status(201).json(newUser);
});

app.put('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  users = users.map(user => user.id === userId ? { ...user, ...req.body } : user);
  res.json(users.find(user => user.id === userId));
});

app.listen(3000, () => console.log('Server running on port 3000'));
```

### 16. Updating object

```js
// Original object
const originalObject = { name: 'Alice', age: 25, job: 'Developer', country: 'USA' };

// Update the 'age' and 'job' properties
const updatedObject = { ...originalObject, age: 26, job: 'Senior Developer' };

console.log('Original Object:', originalObject); // Output: { name: 'Alice', age: 25, job: 'Developer', country: 'USA' }
console.log('Updated Object:', updatedObject);   // Output: { name: 'Alice', age: 26, job: 'Senior Developer', country: 'USA' }

```
