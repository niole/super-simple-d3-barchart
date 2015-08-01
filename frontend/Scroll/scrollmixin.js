"use strict";
//var ExecutionEnvironment = require('react/lib/ExecutionEnvironment');

var ScrollMixin = {
  componentDidMount: function(){
     document.addEventListener('scroll', this.onScroll, false);
  },
  componentWillUnmount: function(){
   document.removeEventListener('scroll', this.onScroll, false);
  }
};

module.exports = ScrollMixin;
