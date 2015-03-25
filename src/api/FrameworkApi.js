'use strict';

let localStorageUtils = require('../utils/localStorageUtils');
let ApiUtils = require('../utils/ApiUtils');

let FrameworkApi = {
  getFrameworks(q = '') {
      return new Promise(function (resolve, reject) {
        ApiUtils.get('frameworks.json', {q}).then(function (res) {
          let favs = localStorageUtils.getAll('favorites');
          let results = res.results.filter(framework =>
            framework.name.indexOf(q.toLowerCase()) > -1);
          resolve({
            response: results.map(framework => {
              framework.isFavorited = favs.indexOf(framework.id) > -1;
              return Object.assign({id: framework.id}, framework);
            }),
            query: q
          });
        }).catch(function (err) {
          reject(err);
        });
      });
    },

    getFrameworkById(id) {
        return new Promise(function (resolve, reject) {
          ApiUtils.get('frameworks.json').then(function (res) {
            let favs = localStorageUtils.getAll('favorites');
            let framework = res.results.filter(framework => framework.id === id)[0] || {};
            let result = {};

            if (framework.id) {
              framework.isFavorited = favs.indexOf(framework.id) > -1;
              result = Object.assign({id: framework.id}, framework);
            }
            resolve({
              response: result
            });
          }).catch(function (err) {
            reject(err);
          });
        });
      }
};

module.exports = FrameworkApi;
