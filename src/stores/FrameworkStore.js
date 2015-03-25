'use strict';
let Immutable = require('immutable');
let BaseContentStore = require('../utils/BaseContentStore');

class FrameworkStore extends BaseContentStore {
  constructor(flux) {
    let initialState = {
      frameworks: Immutable.Map(),
      isLoading: false
    };
    super(flux, initialState);
    let frameworksActionIds = flux.getActionIds('framework');
    let favoriteActionIds = flux.getActionIds('favorite');
    this.registerAsync(frameworksActionIds.searchFrameworks, this.handleBeginAsyncRequest,
      this.handleSearchframeworkSuccess, this.handleErrorAsyncRequest);
    this.registerAsync(frameworksActionIds.getFrameworkById, this.handleBeginAsyncRequest,
      this.handleFrameworkDetailSuccess, this.handleErrorAsyncRequest);
    this.register(favoriteActionIds.addFavorite, this.handleAddFavorite);
    this.register(favoriteActionIds.removeFavorite, this.handleRemoveFavorite);
  }

  handleSearchframeworkSuccess(payload) {
    this.setState({
      frameworks: this.mergeIntoBag(this.state.frameworks, payload.response)
    });
  }

  handleFrameworkDetailSuccess(payload) {
    this.setState({
      frameworks: this.addOneToBag(this.state.frameworks, payload.response),
      isLoading: false
    });
  }

  handleAddFavorite(id) {
    let edited = this.state.frameworks.updateIn([id], function (el) {
      return el.set('isFavorited', true);
    });
    this.setState({
      frameworks: edited
    });
  }

  handleRemoveFavorite(id) {
    let edited = this.state.frameworks.updateIn([id], function (el) {
      return el.set('isFavorited', false);
    });
    this.setState({
      frameworks: edited
    });
  }

  getById(id) {
    return this.state.frameworks.get(id);
  }
}

module.exports = FrameworkStore;
