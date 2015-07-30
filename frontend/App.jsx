"use strict";

var React = require('react');
var ScrollContainer = require('./ScrollContainer.jsx');
var Dash = require('./Dash.jsx');

var App = React.render( <ScrollContainer/>, $('#container')[0]);

module.exports = App;
