"use strict";
exports.__esModule = true;
function forEachAny(any, fn) {
    if (Array.isArray(any)) {
        any.forEach(function (element, index, array) {
            fn(element, index, array);
        });
    }
    else {
        fn(any, 0, [any]);
    }
}
exports.forEachAny = forEachAny;
function mapAny(any, fn) {
    if (Array.isArray(any)) {
        return any.map(function (currentValue, index, array) { return fn(currentValue, index, array); });
    }
    else {
        return fn(any, 0, [any]);
    }
}
exports.mapAny = mapAny;
function filterAny(any, fn) {
    if (Array.isArray(any)) {
        return any.filter(function (element, index, array) { return fn(element, index, array); });
    }
    else {
        return fn(any, 0, [any]) ? any : undefined;
    }
}
exports.filterAny = filterAny;
function reduceAny(any, fn, initialValue) {
    if (!Array.isArray(any)) {
        any = [any];
    }
    return any.reduce(function (accumulator, currentValue, currentIndex, array) { return fn(accumulator, currentValue, currentIndex, array); }, initialValue);
}
exports.reduceAny = reduceAny;
