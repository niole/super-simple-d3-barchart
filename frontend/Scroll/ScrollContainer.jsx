"use strict";

//var isScrollMixin = require('./isscrollmixin');
//var ScrollMixin = require('./scrollmixin');
var React = require('react');
var ScrollData = require('./ScrollData');
var NavBar = require('./NavBar.jsx');

var ScrollContainer = React.createClass({

    getInitialState: function() {
      this.scrollvis = new ScrollData(400,600);

      return {
              scrolling: false,
              bars: -1,
              colors: -1,
              vis: null,
              n: 35
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
      var n = event.originalEvent.wheelDelta;
      this.scrollvis.add_data(n);

      if (this.scrollvis.dps.length > this.scrollvis.oldLength){
        this.scrollvis.oldLength += 1;
        this.scrollvis.add_bar();
        this.setState({
                      vis: this.scrollvis.make_ship_container(),
                      n: (this.state.n+20)%100
                      });
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
    this.scrollvis.update_color_state();
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
        <span className="app-header">Text</span>
        <NavBar bars={this.barsEvent} colors={this.colorsEvent}/>
        <div className="page">
          <div id="scroll" className="target-container">
            <div className="target" style={{"backgroundColor":color}}>
              <span id="scroll-text" style={{"top":this.state.n}}>scroll</span>
            </div>
          </div>
          <div className="vis-backdrop">
            {this.state.vis}
          </div>
        </div>
      </div>
          );
  }
});

module.exports = ScrollContainer;
