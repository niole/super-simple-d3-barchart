"use strict";
var React = require('react');

var Dash = React.createClass({
  getInitialState: function(){
    return {
      scroll: false,
      colors: false,
      points: false,
      lines: false
    };
  },
  checkChange: function(){
    if ($('.scroll').checked === true){
      console.log('scroll true');
      this.setState({scroll: true});
    }
  },
  render: function(){
    return(
      <div>
        <input onClick={this.checkChange} type="checkbox" className="scroll"/>
      </div>
    );
  }
});

module.exports = Dash;
