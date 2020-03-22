# for-any
![dependencies](https://img.shields.io/david/ConnorWhite/for-any)
![minzipped size](https://img.shields.io/bundlephobia/minzip/@bconnorwhite/for-any)
![typescript](https://img.shields.io/github/languages/top/ConnorWhite/for-any)
![npm](https://img.shields.io/npm/v/@bconnorwhite/for-any)

Use standard array functions on both arrays and non-array types.

```
yarn add @bconnorwhite/for-any
```

## API

###### Standard Functions:

- [mapAny](#mapAny)  
- [filterAny](#filterAny)  
- [reduceAny](#reduceAny)  
- [forEachAny](#forEachAny)  
- [findAny](#findAny)

###### Extended Functions:

- [stringReduceAny](#stringReduceAny)

###### Utility Functions:

- [asArray](#asArray)

---
### Standard Functions
---

#### mapAny

```ts
mapAny<T, V>(
  any: (T | V[]),
  callback: (currentValue: (T | V), index?: number, array?: (T | V)[]) => any,
  thisArg?: any
) => (any | any[])
```

###### Example usage:

```js
import { mapAny } from '@bconnorwhite/for-any';

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

---

#### filterAny

```ts
filterAny<T, V>(
  any: (T | V[]),
  callback: (element: (T | V), index?: number, array?: (T | V)[]) => boolean,
  thisArg?: any
) => (T | V[])
```

###### Example usage:

```js
import { filterAny } from '@bconnorwhite/for-any';

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

---

#### reduceAny

```ts
reduceAny<T, V>(
  any: (T | V[]),
  callback: (accumulator: any, currentValue: (T | V), index?: number, array?: (T | V)[]) => any,
  initialValue?: any
) => any
```

###### Example usage:

```js
import { reduceAny } from '@bconnorwhite/for-any';

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

---

#### forEachAny

```ts
forEachAny<T, V>(
  any: (T | V[]),
  callback: (element: (T | V), index?: number, array?: (T | V)[]) => void,
  thisArg?: any
) => void
```

###### Example usage:

```js
import { forEachAny } from '@bconnorwhite/for-any';

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

---

#### findAny

```ts
findAny<T, V>(
  any: (T | V[]),
  callback: (element: (T | V), index?: number, array?: (T | V)[]) => boolean,
  thisArg?: any
) => (T | V)
```

###### Example usage:

```js
import { findAny } from '@bconnorwhite/for-any';

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
---
### Extended Functions
---

#### stringReduceAny

```ts
stringReduceAny<T, V>(
  any: (T | V[]),
  callback: (currentValue: (T | V), index?: number, array?: (T | V)[]) => string,
  initialValue: string = ""
) => string
```

###### Example usage:

```js
import { stringReduceAny } from '@bconnorwhite/for-any';

let array = ["This", "forms", "a", "sentence"];
let item = "Nice";

let callback = (currentValue, index, array) => {
  return currentValue + ((index === array.length-1) ? "." : " ");
}

let arrayResult = stringReduceAny(array, callback);
console.log(arrayResult);
// output: "This forms a sentence."

let itemResult = reduceAny(item, callback);
console.log(itemResult);
// output: "Nice."
```


---
### Utility Functions
---

#### asArray

```ts
asArray<T>(any: (T | T[])): T[]
```

###### Example usage:

```js
import { asArray } from '@bconnorwhite/for-any';

let array = [5, 12, 8, 130, 44];
let item = 15;

let arrayResult = asArray(array);
console.log(arrayResult);
// output: [5, 12, 8, 130, 44]

let itemResult = asArray(item);
console.log(itemResult);
// output: [15]
```
