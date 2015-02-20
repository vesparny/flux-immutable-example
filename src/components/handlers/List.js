'use strict';

var React = require('react');
var FrameworkListElement = require('../FrameworkListElement');
var FluxMixin = require('flummox/mixin');
var { State} = require('react-router');

var List = React.createClass({
  //jshint newcap:false
  mixins: [State, FluxMixin({
    searchFramework: function(store){
      return {
        frameworks: store.getframeworks(this.getQuery().q),
        isLoading: store.isLoading()
      };
    }
  })],

  componentDidMount() {
    this.flux.getActions('framework').searchFrameworks(this.getQuery().q);
  },

  render() {
    var { frameworks, isLoading } = this.state;
    if (isLoading){
      return <div className="padding"><span>Loading...</span></div>;
    }
    if (frameworks.size === 0){
      return <div className="padding"><span>Try another search</span></div>;
    }
    return (
      <div className="padding">
        <ul className="table-view list">
          {this.state.frameworks.toJS().map(framework =>
            <FrameworkListElement key={framework.id} framework={framework} />)
          }
        </ul>
      </div>
    );
  }
});
module.exports = List;
