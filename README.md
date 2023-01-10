<!--BEGIN HEADER-->
<div id="top" align="center">
  <h1>@bconnorwhite/for-any</h1>
  <a href="https://npmjs.com/package/@bconnorwhite/for-any">
    <img alt="NPM" src="https://img.shields.io/npm/v/@bconnorwhite/for-any.svg">
  </a>
  <a href="https://github.com/bconnorwhite/for-any">
    <img alt="TypeScript" src="https://img.shields.io/github/languages/top/bconnorwhite/for-any.svg">
  </a>
</div>

<br />

<blockquote align="center">Use standard array functions on both arrays and non-array types.</blockquote>

<br />

_If I should maintain this repo, please ⭐️_
<a href="https://github.com/bconnorwhite/for-any">
  <img align="right" alt="GitHub stars" src="https://img.shields.io/github/stars/bconnorwhite/for-any?label=%E2%AD%90%EF%B8%8F&style=social">
</a>

_DM me on [Twitter](https://twitter.com/bconnorwhite) if you have questions or suggestions._
<a href="https://twitter.com/bconnorwhite">
  <img align="right" alt="Twitter" src="https://img.shields.io/twitter/url?label=%40bconnorwhite&style=social&url=https%3A%2F%2Ftwitter.com%2Fbconnorwhite">
</a>

---
<!--END HEADER-->

## Installation

```sh
yarn add @bconnorwhite/for-any
```

```sh
npm install @bconnorwhite/for-any
```

```sh
pnpm add @bconnorwhite/for-any
```

## Usage

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

<!--BEGIN FOOTER-->

<br />

<h2 id="dependencies">Dependencies<a href="https://www.npmjs.com/package/@bconnorwhite/for-any?activeTab=dependencies"><img align="right" alt="dependencies" src="https://img.shields.io/librariesio/release/npm/@bconnorwhite/for-any.svg"></a></h2>

- [as-typed-array](https://www.npmjs.com/package/as-typed-array): Make any value an array


<br />

<h3>Dev Dependencies</h3>

- [autorepo](https://www.npmjs.com/package/autorepo): Autorepo abstracts away your dev dependencies, providing a single command to run all of your scripts.


<br />

<h2 id="license">License <a href="https://opensource.org/licenses/MIT"><img align="right" alt="license" src="https://img.shields.io/npm/l/@bconnorwhite/for-any.svg"></a></h2>

[MIT](https://opensource.org/licenses/MIT)
<!--END FOOTER-->
