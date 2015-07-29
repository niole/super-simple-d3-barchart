"use strict";

var ScrollMixin = require('./scrollmixin');
var React = require('react');

var  isScrollMixin = {
  mixins: [ScrollMixin],
  componentDidMount: function() {
      this.CheckInterval = 100;
      console.log('isscrollmixin CDM');
      this.checkInterval = setInterval(this.checkScroll, this.CheckInterval);
      this.scrolling = false;
  },
  componentWillUnmount: function() {
      console.log('CWUM');
      clearInterval(this.checkInterval);
  },
  checkScroll: function() {
      console.log('isscrollmixin checkscroll');
      if (Date.now() - this.lastScrollTime > this.CheckInterval*2 && this.scrolling) {
          this.scrolling = false;
          this.onScrollEnd();
      }
  },
  onScroll: function() {
      console.log('onscroll called');
      if (!this.scrolling) {
          this.scrolling = true;
          this.onScrollStart();
      }
      this.lastScrollTime = Date.now();
  },
};

module.exports = isScrollMixin;
