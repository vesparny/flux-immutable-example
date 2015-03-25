'use strict';
let BaseStore = require('./BaseStore');
let Immutable = require('immutable');

class BaseContentStore extends BaseStore {
  constructor(flux, initialState) {
    super(flux, initialState);
  }

  mergeIntoBag(immutableBag, data) {
    let newData = Immutable.fromJS(data);
    return immutableBag.merge(newData.reduce((result, element) =>
      result.set(element.get('id'), element), Immutable.Map()));
  }

  addOneToBag(immutableBag, element) {
    let newData = Immutable.fromJS(element);
    return immutableBag.set(newData.get('id'), newData);
  }
}

module.exports = BaseContentStore;
