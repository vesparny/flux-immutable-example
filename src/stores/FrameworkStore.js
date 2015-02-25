'use strict';
var Immutable = require('immutable');
var BaseContentStore = require('../utils/BaseContentStore');

class FrameworkStore extends BaseContentStore {
  constructor(flux) {
    var initialState = {
      frameworks: Immutable.Map(),
      isLoading: false
    };
    super(flux, initialState);
    var frameworksActionIds = flux.getActionIds('framework');
    var favoriteActionIds = flux.getActionIds('favorite');
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
      frameworks:  this.addOneToBag(this.state.frameworks, payload.response),
      isLoading: false
    });
  }

  handleAddFavorite(id) {
    var edited = this.state.frameworks.updateIn([id], function (el) {
      return el.set('isFavorited', true);
    });
    this.setState({
      frameworks: edited
    });
  }

  handleRemoveFavorite(id) {
    var edited = this.state.frameworks.updateIn([id], function (el) {
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
