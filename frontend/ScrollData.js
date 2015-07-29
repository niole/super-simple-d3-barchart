"use strict";
var React = require('react');

function ScrollVis(height,width){
  this.dps = [];
  this.oldLength = 0;
  this.height = height;
  this.width = width;
  this.topBars = [];
  this.bottomBars = [];
  this.maxH = this.height/2;
  this.maxB = 250;
  this.barW = this.width/25;
}

ScrollVis.prototype.update_data = function(d){
  //when this.data's value changes, update whole vis
  this.dps.push(d);
  if (this.maxB < d){
    this.maxB = d;
  }
};

ScrollVis.prototype.add_bar = function(){
      var value = this.dps[this.dps.length-1];
      var heightBar = (Math.abs(value)*this.maxH)/this.maxB;
      if (value < 0){
        this.bottomBars.push(
          React.createElement('div',{
                                    className: "white-space",
                                    style:{
                                      backgroundColor: "white",
                                      position: "relative",
                                      width: this.barW,
                                      height: this.maxH,
                                      float: "right"
                                    }
                                    },
            React.createElement('div',{
                                      className: "bar",
                                      style: {
                                        height: heightBar,
                                        width: this.barW,
                                        backgroundColor: "blue",
                                        position: "absolute",
                                        top: "0px"
                                      }
                                      })
                             )

        );
        this.topBars.push(
          React.createElement('div',{
                                    className: "white-space",
                                    style:{
                                      backgroundColor: "white",
                                      width: this.barW,
                                      height: this.maxH,
                                      float: "right"
                                    }})
        );

      }else{
        this.bottomBars.push(
          React.createElement('div',{
                                    className: "white-space",
                                    style:{
                                      backgroundColor: "white",
                                      width: this.barW,
                                      height: this.maxH,
                                      float: "right"
                                    }})

        );

        this.topBars.push(
          React.createElement('div',{
                                    className: "white-space",
                                    style:{
                                      backgroundColor: "white",
                                      position: "relative",
                                      width: this.barW,
                                      height: this.maxH,
                                      float: "right"
                                    }
                                    },
            React.createElement('div',{
                                      className: "bar",
                                      style: {
                                        height: heightBar,
                                        width: this.barW,
                                        backgroundColor: "blue",
                                        position: "absolute",
                                        bottom: "0px",
                                      }
                                      })
                             )

        );
      }
};

ScrollVis.prototype.make_ship_container = function(){
  //TODO : add up the two divs that make up bigger div
  return ( React.createElement('div',{
                            className: "container",
                            style: {
                              width: this.width,
                              height: this.height,
                              position: "relative",
                              overflowX: "hidden"
                            }
                            },
  React.createElement('div',{
                            className: "top",
                            style: {
                              top: "0px",
                              position: "absolute",
                              borderBottom: "1px solid black"
                            }
  },this.topBars ),
  React.createElement('div',{
                            className: "bottom",
                            style: {
                              position: "absolute",
                              bottom: "0px",
                              borderTop: "1px solid black"
                            }
  },this.bottomBars)
                     )
         );
};

module.exports = ScrollVis;
