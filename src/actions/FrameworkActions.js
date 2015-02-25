'use strict';

var { Actions } = require('flummox');
var FrameworkApi = require('../api/FrameworkApi');

class FrameworkActions extends Actions {

  searchFrameworks(q) {
    return FrameworkApi.getFrameworks(q);
  }

  newSearch(q) {
    return q;
  }

  getFrameworkById(id) {
    return FrameworkApi.getFrameworkById(id);
  }
}

module.exports = FrameworkActions;
