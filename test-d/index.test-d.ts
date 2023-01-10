import { expectType } from "tsd";
import { mapAny, filterAny, reduceAny, forEachAny } from "../source/index.js";

expectType<string>(mapAny("ok", (value) => value));
expectType<string[]>(mapAny(["ok"], (value) => value));

expectType<string | undefined>(filterAny("ok", (value) => Boolean(value)));
expectType<string[]>(filterAny(["ok"], (value) => Boolean(value)));

expectType<number>(reduceAny(1, (x, y) => x + y, 0));
expectType<number>(reduceAny([1, 2, 3], (x, y) => x + y, 0));

forEachAny("ok", (value) => expectType<string>(value));
