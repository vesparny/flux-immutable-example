'use strict';

let ArrayUtils = {
  remove(array, item) {
    for (let i = array.length - 1; i >= 0; i -= 1) {
      if (array[i] === item) {
        array.splice(i, 1);
      }
    }
  }
};

module.exports = ArrayUtils;
