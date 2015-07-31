"use strict";
var React = require('react');

var NavBar = React.createClass({
  propTypes: {
    bars: React.PropTypes.func,
    colors: React.PropTypes.func
  },
  getInitialState: function(){
    return {
            barsButton: -1,
            colorsButton: -1
            };
  },
  scrollBars: function(e){
    e.preventDefault();
    this.props.bars(-1);
    this.setState({barsButton: this.state.barsButton*-1});
  },
  scrollColors: function(e){
    e.preventDefault();
    this.props.colors(-1);

    this.setState({colorsButton: this.state.colorsButton*-1});
  },
  render: function(){
    var b, c = "#333";
    if (this.state.barsButton > 0){
      b = "#9351A6";
      if (this.state.colorsButton > 0 ){
        c = "#e18728";
      }
    }

    return (
      <header className="scroll-nav">
        <a style={{"backgroundColor":b}} id="scroll-link" onClick={this.scrollBars} className="nav-button">
          <span>bars</span>
        </a>
        <div style={{"backgroundColor":c}} id="color-link" onClick={this.scrollColors} className="nav-button">
          <span>colors</span>
        </div>
      </header>
    );
  }
});

module.exports = NavBar;
