
// compare 2 objects of polyfils for lodash.Equal

let ob1 = { a: 1, b: 2, c: 3, d: {a1: 1} };
let ob2 = { a: 1, b: 2, c: 3, d: {a1: 1} };

// 1. using strigify

console.log("Stringify compare: ", JSON.stringify(ob1) === JSON.stringify(ob2));
// but gives err when order changes

// 2. Polyfil

function compareObj(obj1, obj2) {
    let obj1Keys = Object.keys(obj1);
    let obj2Keys = Object.keys(obj2);

    if (obj1Keys.length !== obj2Keys.length) {
        return false;
    }

    let isObject = (obj) => {
        return typeof (obj) === 'object';
    }

    for (let key of obj1Keys) {
        let value1 = obj1[key];
        let value2 = obj2[key];

        let isObjects = isObject(value1) && isObject(value2);

        if (!isObjects && (value1 !== value2)) {
            return false;
        }

        if (isObject && compareObj(value1, value2)) {
            return false;
        }

        return true;
    }
}

let isObjEqual = compareObj(ob1, ob2);
console.log("Function compare: ", isObjEqual);
