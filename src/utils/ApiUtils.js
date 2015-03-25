'use strict';

let Promise = require('es6-promise').Promise; // jshint ignore:line
let request = require('superagent');
let timeout = 10000;

function makeCall (method, url, data = {}) {
  let req = request[method](url)
    .set('Accept', 'application/json')
    .timeout(timeout);

  if (method === 'get') {
    req.type('json')
      .query(data);
  } else {
    req.send(data);
  }

  return new Promise(function (resolve, reject) {
    req.end(function (err, res) {
      if (err) {
        reject(err);
      } else if (res.status === 400) {
        reject(err);
      } else if (!res.ok) {
        reject(err);
      } else {
        resolve(res.body);
      }
    });
  });
}
let ApiUtils = {
  get(url, data) {
      return makeCall('get', url, data);
    },

    post(url, data) {
      return makeCall('post', url, data);
    },

    put(url, data) {
      return makeCall('put', url, data);
    },

    patch(url, data) {
      return makeCall('patch', url, data);
    },

    delete(url, data) {
      return makeCall('del', url, data);
    }
};

module.exports = ApiUtils;
