'use strict';
var BaseStore = require('./BaseStore');
var Immutable = require('immutable');

class BaseContentStore extends BaseStore {
  constructor(flux, initialState) {
    super(flux, initialState);
  }

  mergeIntoBag(immutableBag, data) {
    var newData = Immutable.fromJS(data);
    return immutableBag.merge(newData.reduce((result, element) =>
      result.set(element.get('id'), element), Immutable.Map()));
  }

  addOneToBag(immutableBag, element) {
    var newData = Immutable.fromJS(element);
    return immutableBag.set(newData.get('id'), newData);
  }
}

module.exports = BaseContentStore;
