export function forEachAny<T>(any: (T | T[]), fn: (element: T, index: number, array: T[])=>void) {
  if(Array.isArray(any)) {
    any.forEach((element: T, index: number, array: T[]) => {
      fn(element, index, array);
    });
  } else {
    fn(any, 0, [any]);
  }
}

export function mapAny<T>(any: (T | T[]), fn: (currentValue: T, index: number, array: T[])=>any) {
  if(Array.isArray(any)) {
    return any.map((currentValue: T, index: number, array: T[]) => fn(currentValue, index, array));
  } else {
    return fn(any, 0, [any]);
  }
}

export function filterAny<T>(any: (T | T[]), fn: (element: T, index: number, array: T[])=>any[]) {
  if(Array.isArray(any)) {
    return any.filter((element: T, index: number, array: T[]) => fn(element, index, array));
  } else {
    return fn(any, 0, [any]) ? any : undefined;
  }
}

export function reduceAny<T>(any: (T | T[]), fn: (accumulator: T, currentValue: T, currentIndex: number, array: T[])=>any, initialValue: T) {
  if(!Array.isArray(any)) {
    any = [any];
  }
  return any.reduce((accumulator: T, currentValue: T, currentIndex: number, array: T[]) => fn(accumulator, currentValue, currentIndex, array), initialValue);
}
