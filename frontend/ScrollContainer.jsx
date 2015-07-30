"use strict";

//var isScrollMixin = require('./isscrollmixin');
//var ScrollMixin = require('./scrollmixin');
var React = require('react');
var ScrollData = require('./ScrollData');
var NavBar = require('./NavBar.jsx');

var ScrollContainer = React.createClass({
    getInitialState: function() {
      this.scrollvis = new ScrollData(600,600);

      return {
              scrolling: false,
              bars: -1,
              colors: -1,
              vis: null
              };
    },
    componentDidMount: function(){
      $('#scroll').bind('mousewheel', function(event){
        this.onScroll(event);
       }.bind(this));

      this.CheckInterval = 100;
      this.checkInterval = setInterval(this.checkScroll, this.CheckInterval);
      this.scrolling = false;

    },
   componentWillUnmount: function() {
     $('#scroll').removeEventListener('mousewheel');
     clearInterval(this.checkInterval);
   },
   checkScroll: function() {
       if (Date.now() - this.lastScrollTime > this.CheckInterval*2 && this.scrolling) {
        console.log('isscrollmixin checkscroll');
       this.scrolling = false;
       this.onScrollEnd();
      }
   },
   onScroll: function(event) {
    event.preventDefault();

    if (!this.scrolling) {
        this.scrolling = true;
        this.onScrollStart();
    }
    this.lastScrollTime = Date.now();
    if (this.state.bars > 0){
      this.scrollvis.add_data(event.originalEvent.wheelDelta);

      if (this.scrollvis.dps.length > this.scrollvis.oldLength){
        this.scrollvis.oldLength += 1;
        this.scrollvis.add_bar();
        this.setState({vis: this.scrollvis.make_ship_container()});
      }
    }

  },
  onScrollStart: function() {
      this.setState({scrolling: true});
  },
  onScrollEnd: function() {
      this.setState({scrolling: false});
  },
  barsEvent: function(n){
    this.setState({bars: this.state.bars*n});
  },
  colorsEvent: function(n){
    this.setState({colors: this.state.colors*n});
  },
  render: function() {

    var color;
    if (this.state.scrolling){
      color = "green";
    }else{
      color = "red";
    }
    return (
      <div className="app-container">
        <NavBar bars={this.barsEvent} colors={this.colorsEvent}/>
        <div className="page">
          <div id="scroll" className="target-container">
            <div className="target" style={{"backgroundColor":color}}/>
          </div>
          {this.state.vis}
        </div>
      </div>
          );
  }
});

module.exports = ScrollContainer;
