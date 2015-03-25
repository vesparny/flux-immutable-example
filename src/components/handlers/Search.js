'use strict';

let React = require('react');
let { Navigation } = require('react-router');
let LinkedStateMixin = require('react/lib/LinkedStateMixin');

let Search = React.createClass({
  mixins: [LinkedStateMixin, Navigation],

  getInitialState() {
    return {
      search: 'React'
    };
  },

  render() {
    return (
      <div className="padding">
        <form onSubmit={this.handleSubmit}>
          <input type="search" placeholder="Search" valueLink={this.linkState('search')} />
          <button type="submit" className="btn btn-positive btn-block">Search</button>
        </form>
        <div className="padding text-center">
          <a href="https://github.com/vesparny/flux-immutable-example">source code on GitHub</a>
          <br />
          <a href="https://twitter.com/vesparny">follow me on twitter</a>
        </div>
      </div>
    );
  },

  handleSubmit(e) {
    e.preventDefault();
    this.transitionTo('list', null, {
      q: this.state.search
    });
  }
});
module.exports = Search;
