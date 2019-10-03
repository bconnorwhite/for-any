"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function forEachAny(any, callback, thisArg) {
    if (Array.isArray(any)) {
        any.forEach(function (element, index, array) {
            callback(element, index, array);
        }, thisArg);
    }
    else {
        callback.bind(thisArg)(any, 0, [any]);
    }
}
exports.forEachAny = forEachAny;
function mapAny(any, callback, thisArg) {
    if (Array.isArray(any)) {
        return any.map(function (currentValue, index, array) { return callback(currentValue, index, array); }, thisArg);
    }
    else {
        return callback.bind(thisArg)(any, 0, [any]);
    }
}
exports.mapAny = mapAny;
function filterAny(any, callback, thisArg) {
    if (Array.isArray(any)) {
        return any.filter(function (element, index, array) { return callback(element, index, array); }, thisArg);
    }
    else {
        return callback.bind(thisArg)(any, 0, [any]) ? any : undefined;
    }
}
exports.filterAny = filterAny;
function reduceAny(any, callback, initialValue) {
    if (!Array.isArray(any)) {
        any = [any];
    }
    return any.reduce(function (accumulator, currentValue, index, array) { return callback(accumulator, currentValue, index, array); }, initialValue);
}
exports.reduceAny = reduceAny;
function findAny(any, callback, thisArg) {
    if (!Array.isArray(any)) {
        any = [any];
    }
    return any.find(callback, thisArg);
}
exports.findAny = findAny;
