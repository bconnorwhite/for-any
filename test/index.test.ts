import { test, expect } from "@jest/globals";
import {
  mapAny,
  filterAny,
  reduceAny,
  forEachAny,
  findAny,
  stringReduceAny
} from "../source/index.js";

test("mapAny", () => {
  expect(mapAny(1, (x) => x + 1)).toBe(2);
  expect(mapAny([1, 2, 3], (x) => x + 1)).toEqual([2, 3, 4]);
});

test("filterAny", () => {
  expect(filterAny(1, (x) => x > 1)).toBeUndefined();
  expect(filterAny(2, (x) => x > 1)).toBe(2);
  expect(filterAny([1, 2, 3], (x) => x > 1)).toEqual([2, 3]);
});

test("reduceAny", () => {
  expect(reduceAny(1, (x, y) => x + y, 0)).toBe(1);
  expect(reduceAny([1, 2, 3], (x, y) => x + y, 0)).toBe(6);
});

test("forEachAny", () => {
  let sum = 0;
  forEachAny(1, (x) => (sum += x));
  expect(sum).toBe(1);
  sum = 0;
  forEachAny([1, 2, 3], (x) => (sum += x));
  expect(sum).toBe(6);
});

test("findAny", () => {
  expect(findAny(1, (x) => x > 1)).toBeUndefined();
  expect(findAny(2, (x) => x > 1)).toBe(2);
  expect(findAny([1, 2, 3], (x) => x > 1)).toBe(2);
});

test("stringReduceAny", () => {
  expect(stringReduceAny("abc", (x) => x, "")).toBe("abc");
  expect(stringReduceAny(["a", "b", "c"], (x) => x, "")).toBe("abc");
});
