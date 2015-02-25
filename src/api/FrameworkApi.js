'use strict';

var Promise = require('es6-promise').Promise; // jshint ignore:line
var Parse = require('parse').Parse;
var assign = require('object-assign');
var localStorageUtils = require('../utils/localStorageUtils');

var Framework = Parse.Object.extend('Frameworks', {}, {
  getFrameworks(q) {
      return new Promise(function (resolve, reject) {
        var query = new Parse.Query(Framework);

        if (q) {
          query.contains('name', q.toLowerCase());
        }
        query.find({
          success: function (frameworks) {
            var favs = localStorageUtils.getAll('favorites');
            resolve({
              response: frameworks.map(framework => {
                framework.attributes.isFavorited = favs.indexOf(framework.id) > -1;

                return assign({id: framework.id}, framework.attributes);
              }),
              query: q
            });
          },
          error: function (obj, err) {
            reject(err);
          }
        });
      });
    },

    getFrameworkById(id) {
      return new Promise(function (resolve, reject) {
        var query = new Parse.Query(Framework);
        query.equalTo('objectId', id);
        query.first({
          success: function (framework) {
            var favs = localStorageUtils.getAll('favorites');
            framework.attributes.isFavorited = favs.indexOf(framework.id) > -1;
            resolve({
              response: assign({id: framework.id}, framework.attributes)
            });
          },
          error: function (obj, err) {
            reject(err);
          }
        });
      });
    }

});
module.exports = Framework;
