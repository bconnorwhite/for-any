<div align="center">
  <h1>@bconnorwhite/for-any</h1>
  <a href="https://npmjs.com/package/@bconnorwhite/for-any">
    <img alt="npm" src="https://img.shields.io/npm/v/@bconnorwhite/for-any.svg">
  </a>
  <a href="https://github.com/bconnorwhite/for-any">
    <img alt="typescript" src="https://img.shields.io/github/languages/top/bconnorwhite/for-any.svg">
  </a>
  <a href="https://github.com/bconnorwhite/for-any">
    <img alt="GitHub stars" src="https://img.shields.io/github/stars/bconnorwhite/for-any?label=Stars%20Appreciated%21&style=social">
  </a>
  <a href="https://twitter.com/bconnorwhite">
    <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/bconnorwhite.svg?label=%40bconnorwhite&style=social">
  </a>
</div>

<br />

> Use standard array functions on both arrays and non-array types.

## Installation

```bash
yarn add @bconnorwhite/for-any
```

```bash
npm install @bconnorwhite/for-any
```

## API

### Standard Functions:

- [mapAny](#mapAny)  
- [filterAny](#filterAny)  
- [reduceAny](#reduceAny)  
- [forEachAny](#forEachAny)  
- [findAny](#findAny)

### Extended Functions:

- [stringReduceAny](#stringReduceAny)

### Utility Functions:

- [asArray](#asArray)

##

### Standard Functions

#### mapAny

##### Usage:
```ts
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

##### Types:
```ts
function mapAny<T, V>(
  any: (T | V[]),
  callback: (currentValue: (T | V), index?: number, array?: (T | V)[]) => any,
  thisArg?: any
): (any | any[]);
```

<br />

#### filterAny

##### Example usage:

```ts
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

##### Types:
```ts
function filterAny<T, V>(
  any: (T | V[]),
  callback: (element: (T | V), index?: number, array?: (T | V)[]) => boolean,
  thisArg?: any
): (T | V[] | undefined);
```

<br />

#### reduceAny

##### Example usage:
```ts
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

##### Types:
```ts
function reduceAny<T, V>(
  any: (T | V[]),
  callback: (accumulator: any, currentValue: (T | V), index?: number, array?: (T | V)[]) => any,
  initialValue?: any
): any;
```

<br />

#### forEachAny

##### Example usage:
```ts
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

##### Types:
```ts
function forEachAny<T, V>(
  any: (T | V[]),
  callback: (element: (T | V), index?: number, array?: (T | V)[]) => void,
  thisArg?: any
): void;
```

<br />

#### findAny

##### Example usage:
```ts
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

##### Types:
```ts
function findAny<T, V>(
  any: (T | V[]),
  callback: (element: (T | V), index?: number, array?: (T | V)[]) => boolean,
  thisArg?: any
): (T | V | undefined);
```

##

### Extended Functions

#### stringReduceAny

##### Example usage:
```ts
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

##### Types:
```ts
function stringReduceAny<T, V>(
  any: (T | V[]),
  callback: (currentValue: (T | V), index?: number, array?: (T | V)[]) => string,
  initialValue: string = ""
): string;
```

##

### Utility Functions

#### asArray

##### Example usage:
```ts
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

##### Types:
```ts
function asArray<T>(any: (T | T[])): T[];
```

<br />

<h2>Dev Dependencies<img align="right" alt="David" src="https://img.shields.io/david/dev/bconnorwhite/for-any.svg"></h2>

- [@bconnorwhite/bob](https://www.npmjs.com/package/@bconnorwhite/bob): Bob is a toolkit for TypeScript projects

<h2>License <img align="right" alt="license" src="https://img.shields.io/npm/l/@bconnorwhite/for-any.svg"></h2>

[MIT](https://opensource.org/licenses/MIT)
