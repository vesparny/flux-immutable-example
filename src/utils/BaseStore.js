'use strict';

let { Store } = require('flummox');

class BaseStore extends Store {
  constructor(flux, initialState) {
    super();
    this.state = initialState;
  }

  handleBeginAsyncRequest() {
    this.setState({isLoading: true});
  }

  handleErrorAsyncRequest(err) {
    this.setState({isLoading: false});
    console.log(err);
  }

  isLoading() {
    return this.state.isLoading;
  }
}

module.exports = BaseStore;
