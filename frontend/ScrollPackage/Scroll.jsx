"use strict";

var React = require('react');

var Scroll = React.createClass({
    getDefaultProps: function(){
      return {
        lastScrollVal: function(){return 0;},
        scrolling: function(){return false;},
        scrollUp: function(){return false;},
        scrollDown: function(){return false;},
      };
    },
    propTypes: {
      lastScrollVal: React.PropTypes.func,
      scrolling: React.PropTypes.func,
      scollUp: React.PropTypes.func,
      scrollDown: React.PropTypes.func,
      scrollobj: React.PropTypes.object
    },
    getInitialState: function() {

        return {
                scrolling: false,
                };
    },
    componentDidMount: function(){
      $('#react-scroll').bind('mousewheel', function(event){
        this.onScroll(event);
       }.bind(this));
      this.scrolling = false;
      this.lastScrollVal = 0;
      this.CheckInterval = 100;

      this.checkInterval = setInterval(this.checkScroll, this.CheckInterval);
    },
   componentWillUnmount: function() {
     $('#react-scroll').removeEventListener('mousewheel');
     clearInterval(this.checkInterval);
   },
   checkScroll: function() {
       if (Date.now() - this.lastScrollTime > this.CheckInterval*2 && this.props.scrolling) {
        this.props.scrolling(false);
        this.props.scrollUp(false);
        this.props.scrollDown(false);

        this.lastScrollVal = 0;
        this.scrollUp = false;
        this.scrolling = false;
        this.onScrollEnd();
      }
   },
   onScroll: function(event) {
    event.preventDefault();
    var scrollVal = event.originalEvent.wheelDelta;

    if (!this.props.scrolling) {
        this.scrolling=true;
        this.props.scrolling(true);
        this.onScrollStart();
    }

    this.lastScrollTime = Date.now();
    if (scrollVal >= this.lastScrollVal){
      console.log('scrollval > lastval');
      this.props.lastScrollVal(scroll);
      this.props.scrollUp(true);
      this.props.scrollDown(false);
    }else{
      console.log('scrollval < lastval');
      this.props.scrollUp(false);
      this.props.scrollDown(true);
    }
    this.props.lastScrollVal(scrollVal);
    this.lastScrollVal = scrollVal;
    },
    onScrollStart: function() {
        this.setState({scrolling: true});
    },
    onScrollEnd: function() {
      this.setState({scrolling: false});
    },
    render: function() {
      return (
        React.createElement('div',{
                                  id: 'react-scroll',
                                  className: 'react-scroll',
                                  style: {
                                    position: "relative"
                                  }
                                  },
                                  this.props.scrollobj
                            )

            );
    }
});

module.exports = Scroll;
