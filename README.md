# for-any

Use map, filter, reduce, and forEach on both arrays and non-array types.

```
npm i @bconnorwhite/for-any
```

## API

### forEachAny<T>(any: (T | T[]), fn: (element: T, index: number, array: T[])=>void)=>void

```js
import { forEachAny } from 'for-any';

let array = ['a', 'b', 'c'];
let item = 'd';

let fn = (element)=>console.log(element);

forEachAny(array, fn);
// output: "a"
// output: "b"
// output: "c"

forEachAny(item, fn);
// output: "d"
```

### mapAny<T>(any: (T | T[]), fn: (currentValue: T, index: number, array: T[])=>any)=>(any | any[])

```js
import { mapAny } from 'for-any';

let array = [1, 4, 9, 16];
let item = 5;

let fn = (x)=>x*2;

let arrayResult = mapAny(array, fn);
console.log(arrayResult);
// output: [2, 8, 18, 32]

let itemResult = mapAny(item, fn;
console.log(itemResult);
// output: 10
```

### filterAny<T>(any: (T | T[]), fn: (element: T, index: number, array: T[])=>any[])=>(any | any[])

```js
import { filterAny } from 'for-any';

let array = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
let item1 = 'test';
let item2 = 'testing #2';

let fn = (x)=>x.length > 6;

let arrayResult = filterAny(array, fn);
console.log(arrayResult);
// output: ["exuberant", "destruction", "present"]

let item1Result = filterAny(item1, fn);
console.log(item1Result);
// output: _undefined_

let item2Result = filterAny(item2, fn);
console.log(item2Result);
// output: "testing #2"
```

### reduceAny<T>(any: (T | T[]), fn: (accumulator: T, currentValue: T, currentIndex: number, array: T[])=>any, initialValue: T)=>any

```js
import { reduceAny } from 'for-any';

let array = [1, 2, 3, 4];
let item = 5;

let fn = (accumulator, currentValue) => accumulator + currentValue;

let arrayResult = reduceAny(array, fn);
console.log(arrayResult);
// output: 10

let itemResult = reduceAny(array, fn);
console.log(itemResult);
// output: 5
```
