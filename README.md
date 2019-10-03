# for-any

Use map, filter, reduce, and forEach on both arrays and non-array types.

```
npm i @bconnorwhite/for-any
```

## API

### forEachAny<T>(any: (T | T[]), callback: (element: T, index?: number, array?: T[])=>void, thisArg?: any)=>void

```js
import { forEachAny } from 'for-any';

let array = ['a', 'b', 'c'];
let item = 'd';

let callback = (element)=>console.log(element);

forEachAny(array, callback);
// output: "a"
// output: "b"
// output: "c"

forEachAny(item, callback);
// output: "d"
```

### mapAny<T>(any: (T | T[]), callback: (currentValue: T, index?: number, array?: T[])=>any, thisArg?: any)=>(any | any[])

```js
import { mapAny } from 'for-any';

let array = [1, 4, 9, 16];
let item = 5;

let callback = (x)=>x*2;

let arrayResult = mapAny(array, callback);
console.log(arrayResult);
// output: [2, 8, 18, 32]

let itemResult = mapAny(item, callback;
console.log(itemResult);
// output: 10
```

### filterAny<T>(any: (T | T[]), callback: (element: T, index?: number, array?: T[])=>any[], thisArg?: any)=>(any | any[])

```js
import { filterAny } from 'for-any';

let array = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
let item1 = 'test';
let item2 = 'testing #2';

let callback = (x)=>x.length > 6;

let arrayResult = filterAny(array, callback);
console.log(arrayResult);
// output: ["exuberant", "destruction", "present"]

let item1Result = filterAny(item1, callback);
console.log(item1Result);
// output: undefined

let item2Result = filterAny(item2, callback);
console.log(item2Result);
// output: "testing #2"
```

### reduceAny<T>(any: (T | T[]), callback: (accumulator: T, currentValue: T, index?: number, array?: T[])=>any, initialValue?: T)=>any

```js
import { reduceAny } from 'for-any';

let array = [1, 2, 3, 4];
let item = 5;

let callback = (accumulator, currentValue) => accumulator + currentValue;

let arrayResult = reduceAny(array, callback);
console.log(arrayResult);
// output: 10

let itemResult = reduceAny(item, callback);
console.log(itemResult);
// output: 5
```

### findAny<T>(any: (T | T[]), callback: (element: T, index?: number, array?: T[])=>T, thisArg?: any)=>any

```js
import { findAny } from 'for-any';

let array = [5, 12, 8, 130, 44];
let item1 = 15;
let item2 = 5;

let callback = (element) => element > 10;

let arrayResult = findAny(array, callback);
console.log(arrayResult);
// output: 12

let item1Result = findAny(item1, callback);
console.log(item1Result);
// output: 15

let item2Result = findAny(item2, callback);
console.log(item2Result);
// output: undefined
```
