"use strict";
/*global React*/

var React = require('react');
var ScrollContainer = require('./ScrollContainer.jsx');

var App = React.render( <ScrollContainer/>, $('#container')[0]);

module.exports = App;
