'use strict';

var Promise = require('es6-promise').Promise; // jshint ignore:line
var assign = require('object-assign');
var localStorageUtils = require('../utils/localStorageUtils');
var ApiUtils = require('../utils/ApiUtils');

var FrameworkApi = {
  getFrameworks(q = '') {
      return new Promise(function (resolve, reject) {
        ApiUtils.get('frameworks.json', {q}).then(function (res) {
          var favs = localStorageUtils.getAll('favorites');
          var results = res.results.filter(framework =>
            framework.name.indexOf(q.toLowerCase()) > -1);
          resolve({
            response: results.map(framework => {
              framework.isFavorited = favs.indexOf(framework.id) > -1;

              return assign({id: framework.id}, framework);
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
            var favs = localStorageUtils.getAll('favorites');
            var framework = res.results.filter(framework => framework.id === id)[0] || {};
            var result = {};

            if (framework.id) {
              framework.isFavorited = favs.indexOf(framework.id) > -1;
              result = assign({id: framework.id}, framework);
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
