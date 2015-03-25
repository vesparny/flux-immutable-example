'use strict';

let React = require('react');
let { PropTypes } = React;
let ImmutableRenderMixin = require('react-immutable-render-mixin');

let FrameworkDetailElement = React.createClass({

  mixins: [ImmutableRenderMixin],

  propTypes: {
    framework: PropTypes.object.isRequired,
    onAddToFavoritesClick: PropTypes.func.isRequired,
    onRemoveFromFavoritesClick: PropTypes.func.isRequired
  },

  render() {
    let framework = this.props.framework.toJS();
    return (
      <div className="detail">
        <ul className="table-view">
          <li className="table-view-cell media list">
            <img className="media-object pull-left small-img" src={framework.image} />
            <div className="media-body">
              <h2 className="now">{framework.nameDesc}</h2>
            </div>
          </li>
        </ul>

        <div className="item">
          <img src={framework.image} className="full-image" />
          <p>{framework.description}</p>
        </div>

        {
          framework.isFavorited ?
            <div className="fav">
              <a onClick={this.props.onRemoveFromFavoritesClick
                .bind(null, framework.id)} className="favLink">
                <span className="icon icon-star-filled"></span>
                <span className="tab-label">Remove from Favs</span>
              </a>
            </div> :
            <div className="fav">
              <a onClick={this.props.onAddToFavoritesClick
                .bind(null, framework.id)} className="favLink">
                <span className="icon icon-star-filled"></span>
                <span className="tab-label">Add to Favs</span>
              </a>
            </div>
        }
      </div>
    );
  }
});

module.exports = FrameworkDetailElement;
