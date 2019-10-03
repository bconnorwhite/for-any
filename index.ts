export function forEachAny<T>(any: (T | T[]), callback: (element: T, index?: number, array?: T[])=>void, thisArg?: any) {
  if(Array.isArray(any)) {
    any.forEach((element: T, index?: number, array?: T[]) => {
      callback(element, index, array);
    }, thisArg);
  } else {
    callback.bind(thisArg)(any, 0, [any]);
  }
}

export function mapAny<T>(any: (T | T[]), callback: (currentValue: T, index?: number, array?: T[])=>any, thisArg?: any) {
  if(Array.isArray(any)) {
    return any.map((currentValue: T, index?: number, array?: T[]) => callback(currentValue, index, array), thisArg);
  } else {
    return callback.bind(thisArg)(any, 0, [any]);
  }
}

export function filterAny<T>(any: (T | T[]), callback: (element: T, index?: number, array?: T[])=>any[], thisArg?: any) {
  if(Array.isArray(any)) {
    return any.filter((element: T, index?: number, array?: T[]) => callback(element, index, array), thisArg);
  } else {
    return callback.bind(thisArg)(any, 0, [any]) ? any : undefined;
  }
}

export function reduceAny<T>(any: (T | T[]), callback: (accumulator: T, currentValue: T, index?: number, array?: T[])=>any, initialValue?: T) {
  if(!Array.isArray(any)) {
    any = [any];
  }
  return any.reduce((accumulator: T, currentValue: T, index?: number, array?: T[]) => callback(accumulator, currentValue, index, array), initialValue);
}

export function findAny<T>(any: (T | T[]), callback: (element: T, index?: number, array?: T[])=>T, thisArg?: any) {
  if(!Array.isArray(any)) {
    any = [any];
  }
  return any.find(callback, thisArg);
}
