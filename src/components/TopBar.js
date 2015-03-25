'use strict';

let React = require('react');
let { PropTypes } = React;
let { Link } = require('react-router');

let TopBar = React.createClass({

  propTypes: {
    pathName: PropTypes.string.isRequired
  },

  render() {
    let pathName = this.props.pathName;
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
