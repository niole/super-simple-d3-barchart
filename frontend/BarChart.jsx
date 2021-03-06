"use strict";
var React = require('react');
var Chart = require('./Chart.jsx');
var DataSeries = require('./DataSeries.jsx');

var BarChart = React.createClass({
  render: function() {
    return (
      <Chart width={this.props.width} height={this.props.height}>
        <DataSeries data={[ 30, 10, 5, 8, 15, 10 ]} width={this.props.width} height={this.props.height} color="cornflowerblue" />
      </Chart>
    );
  }
});

module.exports = BarChart;
