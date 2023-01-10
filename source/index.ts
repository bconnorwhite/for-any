import asArray, { AsArray, AsItem } from "as-typed-array";


/**
 * Maps an array or item to another array or item.
 */
export function mapAny<A, V>(
  any: A,
  callback: (currentValue: AsItem<A>, index: number, array: AsArray<A>) => V,
  thisArg?: any
): A extends Array<any> ? V[] : V {
  if(Array.isArray(any)) {
    return any.map(callback as any, thisArg) as A extends Array<any> ? V[] : V;
  } else {
    return callback.bind(thisArg)(any as AsItem<A>, 0, asArray(any)) as A extends Array<any> ? V[] : V;
  }
}

/**
 * Filters an array or item.
 * If the item is filtered out, undefined is returned.
 */
export function filterAny<A>(
  any: A,
  callback: (element: AsItem<A>, index: number, array: AsArray<A>) => boolean,
  thisArg?: any
): A extends Array<any> ? A : AsItem<A> | undefined {
  if(Array.isArray(any)) {
    return any.filter(callback as any, thisArg) as A extends Array<any> ? A : AsItem<A> | undefined;
  } else {
    return (callback.bind(thisArg)(any as AsItem<A>, 0, asArray(any)) ? any : undefined) as A extends Array<any> ? A : AsItem<A> | undefined;
  }
}

/**
 * Reduces an array or item.
 */
export function reduceAny<A, I>(
  any: A,
  callback: (accumulator: I extends undefined ? AsItem<A> : I, currentValue: AsItem<A>, index: number, array: AsArray<A>) => I extends undefined ? AsItem<A> : I,
  initialValue?: I
): I extends undefined ? AsItem<A> : I {
  if(Array.isArray(any)) {
    return (any as any).reduce(callback, initialValue);
  } else {
    const initial = (initialValue ?? any) as I extends undefined ? AsItem<A> : I;
    return (asArray(any) as any).reduce(callback, initial);
  }
}

/**
 * Executes a provided function once per array or item element.
 */
export function forEachAny<A>(
  any: A,
  callback: (element: AsItem<A>, index: number, array: AsArray<A>) => void,
  thisArg?: any
): void {
  if(Array.isArray(any)) {
    any.forEach(callback as any, thisArg);
  } else {
    callback.bind(thisArg)(any as AsItem<A>, 0, asArray(any));
  }
}

/**
 * Returns the value of the first element in the array or item that satisfies the provided testing function.
 */
export function findAny<A>(
  any: A,
  callback: (element: AsItem<A>, index: number, array: AsArray<A>) => boolean,
  thisArg?: any
): AsItem<A> | undefined {
  if(Array.isArray(any)) {
    return any.find(callback as any, thisArg);
  } else {
    return asArray(any).find(callback as any, thisArg);
  }
}

/**
 * Reduces to a single string after mapping each element to a string.
 */
export function stringReduceAny<A>(
  any: A,
  callback: (currentValue: AsItem<A>, index: number, array: AsArray<A>) => string | undefined,
  initialValue = ""
): string {
  return (asArray(any) as any).reduce((previousValue: string, currentValue: AsItem<A>, currentIndex: number, array: AsArray<A>) => (
    `${previousValue}${callback(currentValue, currentIndex, array) ?? ""}`
  ), initialValue);
}

export {
  asArray
};
