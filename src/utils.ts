export function asArray<T>(any: (T | T[])): T[] {
  if(Array.isArray(any)) {
    return any;
  } else {
    return [any];
  }
}
