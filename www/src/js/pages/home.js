var React = require('react');
var Router = require('react-router');

const Comp = (props) => (<div> sooo dumb {props.value} </div>);

const Btn = ({onClick, text}) => (<button className="btn btn-link btn-nav pull-left" onClick={onClick}>
            {text}
          </button>)

var Home = React.createClass({
  mixins: [
    Router.History
  ],

  goAbout: function () {
    this.history.pushState(null, '/about');
  },

  render: function () {
    return (
      <div className='homepage'>
        <header className="bar bar-nav">
          <Btn onClick={this.goAbout} text="About" />
          <h1 className="title">Home React Cordova</h1>
        </header>
        <div className="content">
          <p>home sweet home</p>
          <Comp value="42"/>
        </div>
      </div>
    );
  }
});

module.exports = Home;
