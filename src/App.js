'use strict';

var React = require('react');
var { RouteHandler } = require('react-router');
var TopBar = require('./components/TopBar');
var { State } = require('react-router');

var App = React.createClass({

  mixins: [ State ],

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
