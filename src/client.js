'use strict';

var React = require('react');
var Router = require('react-router');
var { Route, DefaultRoute } = Router;
var App = require('./App');
var List = require('./components/handlers/List');
var Detail = require('./components/handlers/Detail');
var Search = require('./components/handlers/Search');
var flux = new (require('./Flux'))();

// Expose globally
window.React = React;

var FastClick = require('fastclick');
FastClick.attach(document.body);

var routes = (
  <Route name='explore' path='/' handler={App}>
    <Route name='list' path='/frameworks' handler={List} />
    <Route name='detail' path='/frameworks/:id' handler={Detail} />
    <DefaultRoute handler={Search} name="search"/>
  </Route>
);

Router.run(routes, function (Handler, state) { // jshint unused:false
  React.withContext({flux}, function() {
    React.render(<Handler />, document.getElementById('app'));
  });
});
