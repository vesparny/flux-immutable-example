'use strict';

let { Actions } = require('flummox');
let localStorageUtils = require('../utils/localStorageUtils');

class FavoriteActions extends Actions {

  addFavorite (id) {
    localStorageUtils.push('favorites', id);
    return id;
  }

  removeFavorite (id) {
    localStorageUtils.pop('favorites', id);

    return id;
  }

}

module.exports = FavoriteActions;
