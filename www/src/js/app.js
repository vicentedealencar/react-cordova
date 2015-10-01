var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router');

require('react-fastclick');

var RouterRouter = Router.Router;
var Route = Router.Route;
var IndexRoute = Router.IndexRoute;

var HomePage = require('./pages/home');
var AboutPage = require('./pages/about');

var App = React.createClass({
  render: function () {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
});

var routes = (
  <Route component={App} path="/">
    <IndexRoute component={HomePage}/>
    <Route path="home" component={HomePage}/>
    <Route path="about" component={AboutPage}/>
  </Route>
);

ReactDOM.render(<RouterRouter routes={routes}/>, document.getElementById('app'));
