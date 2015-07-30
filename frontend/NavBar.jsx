"use strict";
var React = require('react');

var NavBar = React.createClass({
  propTypes: {
    bars: React.PropTypes.func,
    colors: React.PropTypes.func
  },
  render: function(){
    return (
      <nav className="scroll-nav">
        <a id="scroll-link" onClick={this.props.bars.bind(null,-1)} className="nav-button">
          <span>bars</span>
        </a>
        <div id="color-link" onClick={this.props.colors.bind(null,-1)} className="nav-button">
          <span>colors</span>
        </div>
      </nav>
    );
  }
});

module.exports = NavBar;
