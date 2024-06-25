

## Spread Operator

### Spread operator used in the frontend (JavaScript):

### 1. Cloning arrays
```javascript
const originalArray = [1, 2, 3];
const clonedArray = [...originalArray];
console.log(clonedArray); // Output: [1, 2, 3]
```

### 2. Merging arrays
```javascript
const array1 = [1, 2];
const array2 = [3, 4];
const mergedArray = [...array1, ...array2];
console.log(mergedArray); // Output: [1, 2, 3, 4]
```

### 3. Spreading elements in function calls
```javascript
const numbers = [1, 2, 3];
const sum = (a, b, c) => a + b + c;
console.log(sum(...numbers)); // Output: 6
```

### 4. Adding items to arrays
```javascript
const array = [1, 2, 3];
const newArray = [...array, 4, 5];
console.log(newArray); // Output: [1, 2, 3, 4, 5]
```

### 5. Creating shallow copies of objects
```javascript
const originalObject = { a: 1, b: 2 };
const copiedObject = { ...originalObject };
console.log(copiedObject); // Output: { a: 1, b: 2 }
```

### 6. Merging objects
```javascript
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const mergedObject = { ...obj1, ...obj2 };
console.log(mergedObject); // Output: { a: 1, b: 2 }
```

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

### 9. Combining props in React components
```jsx
const defaultProps = { a: 1, b: 2 };
const userProps = { b: 3, c: 4 };
const combinedProps = { ...defaultProps, ...userProps };
const Component = (props) => <div {...combinedProps}></div>;
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
