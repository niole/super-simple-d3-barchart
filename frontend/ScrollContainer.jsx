"use strict";

//var isScrollMixin = require('./isscrollmixin');
//var ScrollMixin = require('./scrollmixin');
var React = require('react');
var ScrollData = require('./ScrollData');

var ScrollContainer = React.createClass({
    getInitialState: function() {
      this.scrollvis = new ScrollData(600,600);

        return {
                scrolling: false,
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
      this.vis = undefined;

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

    this.scrollvis.update_data(event.originalEvent.wheelDelta);

    if (this.scrollvis.dps.length > this.scrollvis.oldLength){
      this.scrollvis.oldLength += 1;
      this.scrollvis.add_bar();
      this.vis = this.scrollvis.make_ship_container();
      this.setState({vis: this.vis});
    }

    },
    onScrollStart: function() {
        this.setState({scrolling: true});
    },
    onScrollEnd: function() {
        this.setState({scrolling: false});
    },
    render: function() {

      var color;
      if (this.state.scrolling){
        color = "green";
      }else{
        color = "red";
      }
      return (
        React.createElement('div',{},
          React.createElement('div', {
                                      id: "scroll",
                                      className: "target-container"
                                    },
            React.createElement('div',{
                                      className: "target",
                                      style: {
                                        backgroundColor: color
                                             }
                                      }
                                )
                              ),
                              this.state.vis
                            )

            );
    }
});

module.exports = ScrollContainer;
