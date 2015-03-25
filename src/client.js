'use strict';
/* eslint no-undef:0 */
/* eslint no-unused-vars:0 */

let React = require('react');
let Router = require('react-router');
let { Route, DefaultRoute } = Router;
let App = require('./App');
let List = require('./components/handlers/List');
let Detail = require('./components/handlers/Detail');
let Search = require('./components/handlers/Search');
let flux = new (require('./Flux'))();

// Expose globally
window.React = React;

let FastClick = require('fastclick');
FastClick.attach(document.body);

let routes = (
  <Route name='explore' path='/' handler={App}>
    <Route name='list' path='/frameworks' handler={List} />
    <Route name='detail' path='/frameworks/:id' handler={Detail} />
    <DefaultRoute handler={Search} name="search"/>
  </Route>
);

Router.run(routes, function (Handler, state) {
  React.withContext({flux}, function () {
    React.render(<Handler />, document.getElementById('app'));
  });
});
