'use strict';

var React = require('react');
var FluxMixin = require('flummox/mixin');
var FrameworkDetail = require('../FrameworkDetail');

var { State} = require('react-router');

//jshint newcap:false
var Detail = React.createClass({
  mixins: [State, FluxMixin({
    framework:function(store){
      return {
        framework: store.getById(this.getParams().id),
        isLoading: store.isLoading()
      };
    }
  })], //jshint ignore:line

  componentDidMount() {
    this.flux.getActions('framework').getFrameworkById(this.getParams().id);
  },

  render() {
    var { framework, isLoading } = this.state;
    if (isLoading){
      return <div className="padding"><span>Loading...</span></div>;
    }
    if (!framework){
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
