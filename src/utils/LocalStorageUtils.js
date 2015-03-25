'use strict';

let ArrayUtils = require('./ArrayUtils');

function getAll (key) {
  return JSON.parse(window.localStorage.getItem(key)) || [];
}

let LocalStorageUtils = {
  push(key, value) {
      let data = getAll(key);
      if (data.indexOf(value) === -1) {
        data.push(value);
        window.localStorage.setItem(key, JSON.stringify(data));
      }
      return data;
    },
    pop(key, value) {
      let data = getAll(key);
      ArrayUtils.remove(data, value);
      window.localStorage.setItem(key, JSON.stringify(data));
      return data;
    },
    getAll(key) {
      return JSON.parse(window.localStorage.getItem(key)) || [];
    }
};

module.exports = LocalStorageUtils;
