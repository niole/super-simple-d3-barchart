"use strict";
var React = require('react');

var Bar = React.createClass({
  getDefaultProps: function() {
    return {
      width: 0,
      height: 0,
      offset: 0
    }
  },

  render: function() {
    return (
      <rect fill={this.props.color}
        width={this.props.width} height={this.props.height}
        x={this.props.offset} y={this.props.availableHeight - this.props.height} />
    );
  }
});

module.exports = Bar;
