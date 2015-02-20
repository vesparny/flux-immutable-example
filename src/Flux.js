'use strict';

var { Flummox } =  require('flummox');

var FrameworkActions = require('./actions/FrameworkActions');
var FavoriteActions = require('./actions/FavoriteActions');

var FrameworkStore = require('./stores/FrameworkStore');
var SearchFrameworkStore = require('./stores/SearchFrameworkStore');

class Flux extends Flummox {
  constructor() {
    super();
    this.createActions('framework', FrameworkActions);
    this.createActions('favorite', FavoriteActions);

    this.createStore('searchFramework', SearchFrameworkStore, this);
    this.createStore('framework', FrameworkStore, this);
  }
}

module.exports = Flux;
