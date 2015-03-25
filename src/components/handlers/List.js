'use strict';

let React = require('react');
let FrameworkListElement = require('../FrameworkListElement');
let FluxMixin = require('flummox/mixin');
let { State} = require('react-router');

let List = React.createClass({
  mixins: [State, FluxMixin({
    searchFramework: function (store) {
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
    let { frameworks, isLoading } = this.state;
    if (isLoading) {
      return <div className="padding"><span>Loading...</span></div>;
    }
    if (frameworks.size === 0) {
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
