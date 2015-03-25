'use strict';

let React = require('react');
let { PropTypes } = React;
let { Link } = require('react-router');
let ImmutableRenderMixin = require('react-immutable-render-mixin');

let FrameworkListElement = React.createClass({

  mixins: [ImmutableRenderMixin],

  propTypes: {
    framework: PropTypes.object.isRequired
  },

  render() {
    let { framework } = this.props;
    return (
      <li className="table-view-cell media">
        <Link to="detail" params={{id: framework.id}}>
          <img className="media-object pull-left small-img" src={framework.image} />
          <div className="media-body">
            <h2 className="now">{framework.nameDesc}</h2>
            <p className="now">{framework.description.substring(0, 250) + '...'}</p>
          </div>
        </Link>
      </li>
    );
  }
});

module.exports = FrameworkListElement;
