"use strict";

var React = require('react');
var BarChart = require('./BarChart.jsx');

React.render( <BarChart
              width={600}
              height={600}
              />, $('#container')[0]);
