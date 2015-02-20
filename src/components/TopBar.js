'use strict';

var React = require('react');
var { PropTypes } = React;
var { Link } = require('react-router');

var TopBar = React.createClass({

  propTypes: {
    pathName: PropTypes.string.isRequired
  },

  render() {
    var pathName = this.props.pathName;
    return (
      <header className="bar bar-nav">
      {
        pathName !== '/' ?
        <Link to="search" className="btn pull-left">Search</Link> :
         null
      }

        <button className="btn pull-right" onClick={function() { window.alert('TODO');} }>Favorites</button>
        <h1 className="title">Flux Immutable Example</h1>
      </header>
    );
  }
});

module.exports = TopBar;
