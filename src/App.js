'use strict';

let React = require('react');
let { RouteHandler } = require('react-router');
let TopBar = require('./components/TopBar');
let { State } = require('react-router');

let App = React.createClass({

  mixins: [State],

  render() {
    return (
      <div className="ionic-body">
        <TopBar pathName={this.getPathname()} />
        <div className="content overflow-scroll has-header">
          <RouteHandler />
        </div>
      </div>
    );
  }
});
module.exports = App;
