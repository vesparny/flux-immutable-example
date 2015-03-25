'use strict';

let React = require('react');
let FluxMixin = require('flummox/mixin');
let FrameworkDetail = require('../FrameworkDetail');

let { State} = require('react-router');

let Detail = React.createClass({
  mixins: [State, FluxMixin({
    framework: function (store) {
      return {
        framework: store.getById(this.getParams().id),
        isLoading: store.isLoading()
      };
    }
  })],

  componentDidMount() {
    this.flux.getActions('framework').getFrameworkById(this.getParams().id);
  },

  render() {
    let { framework, isLoading } = this.state;
    if (isLoading) {
      return <div className="padding"><span>Loading...</span></div>;
    }
    if (!framework) {
      return <div className="padding"><span>Nothing to display</span></div>;
    }
    return (
      <div className="padding">
        <FrameworkDetail
          framework={framework}
          onAddToFavoritesClick={this.handleAddToFavorites}
          onRemoveFromFavoritesClick={this.handleRemoveFromFavorites} />
      </div>
    );
  },

  handleAddToFavorites (id) {
    this.context.flux.getActions('favorite').addFavorite(id);
  },

  handleRemoveFromFavorites (id) {
    this.context.flux.getActions('favorite').removeFavorite(id);
  }
});

module.exports = Detail;
