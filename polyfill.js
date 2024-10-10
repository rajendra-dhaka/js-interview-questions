if (!Array.prototype.custommap) {
  Array.prototype.custommap = function (callback, thisArg) {
    if (this === null || this === undefined) {
      throw new TypeError("method custommap called on null or undefined");
    }
    if (typeof callback !== "function") {
      throw new TypeError(callback + "callback is not a function");
    }

    const O = Object(this);
    const length = O.length >>> 0;
    const result = new Array(length);

    for (let i = 0; i < length; i++) {
      if (i in O) {
        result[i] = callback.call(thisArg, O[i], i, O);
      }
    }
    return result;
  };
}

console.log([1, 2, 3, 4].custommap((item) => item * 3));

if (!Array.prototype.customfilter) {
  Array.prototype.customfilter = function (callback, thisArg) {
    if (this === null || this === undefined) {
      throw new TypeError("customfilter is called on undefined or null");
    }
    if (typeof callback !== "function") {
      throw new TypeError(callback + "callback is not a function");
    }

    const O = Object(this);
    const result = [];

    for (let i = 0; i < O.length; i++) {
      if (i in O) {
        if (callback.call(thisArg, O[i], i, O)) {
          result.push(O[i]);
        }
      }
    }
    return result;
  };
}

console.log([1, 2, 3, 4, 5, 6, 7, 8].customfilter((item) => item === 5));

if (!Array.prototype.customreduce) {
  Array.prototype.customreduce = function (callback, initialValue, thisArg) {
    if (this === undefined || this === null) {
      throw new TypeError("customfilter is called on null or undefined value");
    }
    if (typeof callback !== "function") {
      throw new TypeError(callback + "callback is not a function");
    }
    const O = Object(this);
    const length = O.length >>> 0;
    let accumulator = initialValue;
    let startIndex = 0;

    // If no initial value, use the first element as the initial value
    if (accumulator === undefined) {
      accumulator = O[0];
      startIndex = 1;
    }

    for (let i = startIndex; i < length; i++) {
      if (i in O) {
        accumulator = callback.call(thisArg, accumulator, O[i], i, O);
      }
    }
    return accumulator;
  };
}

console.log(
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].customreduce((acc, item) => item + acc, 1)
);
