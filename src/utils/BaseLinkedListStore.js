'use strict';

let BaseStore = require('./BaseStore');
let Immutable = require('immutable');

class BaseLinkedListStore extends BaseStore {
  constructor(flux) {
    let initialState = {
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
