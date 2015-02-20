'use strict';
var BaseStore = require('./BaseStore');
var Immutable = require('immutable');

class BaseLinkedListStore extends BaseStore {
  constructor(flux) {
    var initialState = {
      list: Immutable.Map(),
      isLoading: true
    };
    this.flux = flux;
    super(flux, initialState);
  }

  getIds(key) {
    return this.state.list.get(key, Immutable.List());
  }

  setData(key, data) {
    this.setState({
      list: this.state.list.set(key, Immutable.fromJS(data).map(el =>
        el.get('id'))),
      isLoading: false
    });
  }
}

module.exports = BaseLinkedListStore;
