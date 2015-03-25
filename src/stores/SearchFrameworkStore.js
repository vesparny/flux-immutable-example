'use strict';
let BaseLinkedListStore = require('../utils/BaseLinkedListStore');

class SearchFrameworkStore extends BaseLinkedListStore {
  constructor(flux) {
    super(flux);
    let frameworkActionIds = flux.getActionIds('framework');
    this.registerAsync(frameworkActionIds.searchFrameworks, this.handleBeginAsyncRequest,
      this.handleSearchFrameworkSuccess, this.handleErrorAsyncRequest);
  }

  handleSearchFrameworkSuccess(payload) {
    let frameworkStore = this.flux.getStore('framework');
    this.waitFor(frameworkStore);
    this.setData(payload.query, payload.response);
  }

  getframeworks(query) {
    return this.getIds(query).map(el =>
      this.flux.getStore('framework').getById(el));
  }

}

module.exports = SearchFrameworkStore;
