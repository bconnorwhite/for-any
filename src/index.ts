import { asArray } from "./utils";

export function mapAny<T, V>(
  any: (T | V[]),
  callback: (currentValue: (T | V), index?: number, array?: (T | V)[]) => any,
  thisArg?: any
): (any | any[]) {
  if(Array.isArray(any)) {
    return any.map(callback, thisArg);
  } else {
    return callback.bind(thisArg)(any, 0, [any]);
  }
}

export function filterAny<T, V>(
  any: (T | V[]),
  callback: (element: (T | V), index?: number, array?: (T | V)[]) => boolean,
  thisArg?: any
): (T | V[]) {
  if(Array.isArray(any)) {
    return any.filter(callback, thisArg);
  } else {
    return callback.bind(thisArg)(any, 0, [any]) ? any : undefined;
  }
}

export function reduceAny<T, V>(
  any: (T | V[]),
  callback: (accumulator: any, currentValue: (T | V), index?: number, array?: (T | V)[]) => any,
  initialValue?: any
): any {
  if(Array.isArray(any)) {
    return any.reduce(callback, initialValue);
  } else {
    return asArray(any).reduce(callback, initialValue);
  }
}

export function forEachAny<T, V>(
  any: (T | V[]),
  callback: (element: (T | V), index?: number, array?: (T | V)[]) => void,
  thisArg?: any
): void {
  if(Array.isArray(any)) {
    any.forEach(callback, thisArg);
  } else {
    callback.bind(thisArg)(any, 0, [any]);
  }
}

export function findAny<T, V>(
  any: (T | V[]),
  callback: (element: (T | V), index?: number, array?: (T | V)[]) => boolean,
  thisArg?: any
): (T | V) {
  if(Array.isArray(any)) {
    return any.find(callback, thisArg);
  } else {
    return asArray(any).find(callback, thisArg);
  }
}

export function stringReduceAny<T, V>(
  any: (T | V[]),
  callback: (currentValue: (T | V), index?: number, array?: (T | V)[]) => string | undefined,
  initialValue: string = ""
): string {
  if(Array.isArray(any)) {
    return any.reduce((previousValue, currentValue, currentIndex, array) => (
      `${previousValue}${callback(currentValue, currentIndex, array) ?? ""}`
    ), initialValue);
  } else {
    return asArray(any).reduce((previousValue, currentValue, currentIndex, array) => (
      `${previousValue}${callback(currentValue, currentIndex, array) ?? ""}`
    ), initialValue);
  }
}

export {
  asArray
}
