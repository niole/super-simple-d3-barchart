"use strict";
var React = require('react');

function ScrollVis(height,width){
  this.dps = [];
  this.oldLength = 0;
  this.height = height;
  this.width = width;
  this.topBars = [];
  this.bottomBars = [];
  this.maxH = Math.floor(this.height/2);
  this.maxB = 1300;
  this.barW = this.width/25;
  this.numDivs = 25;
  this.startPos = 0;
}

ScrollVis.prototype.add_data = function(d){
  //when this.data's value changes, update whole vis
  //get rid of first element in topBars and bottomBars if
  //number of data points exceeds what the vis can hold
  if (this.dps.length >= this.numDivs){
    this.startPos += 1;
    this.topBars.shift();
    this.bottomBars.shift();
  }

  if (this.maxB < Math.abs(d)){
    this.dps.push(this.maxB);
  }else{
    this.dps.push(d);
  }
};

ScrollVis.prototype.add_bar = function(){
  /**
   * builds individual vis parts
   */
      var value = this.dps[this.dps.length-1];
      var heightBar = (Math.abs(value)*this.maxH)/this.maxB;
      if (value < 0){
        this.bottomBars.push(
          React.createElement('div',{
                                    className: "white-space",
                                    style:{
                                      backgroundColor: "#eee",
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
                                        backgroundColor: "white",
                                        border: "1px solid grey",
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
                                      backgroundColor: "#eee",
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
                                      backgroundColor: "#eee",
                                      width: this.barW,
                                      height: this.maxH,
                                      float: "right"
                                    }})

        );

        this.topBars.push(
          React.createElement('div',{
                                    className: "white-space",
                                    style:{
                                      backgroundColor: "#eee",
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
                                        backgroundColor: "white",
                                        border: "1px solid grey",
                                        position: "absolute",
                                        bottom: "0px",
                                      }
                                      })
                             )

        );
      }
};

ScrollVis.prototype.make_ship_container = function(){
  /*
  *puts top and bottom div collections inside of a container
  *that allows for scrolling vis to scroll
 */

  return ( React.createElement('div',{
                            className: "container",
                            style: {
                              width: "100%",
                              height: this.height,
                            }
                            },
  React.createElement('div',{
                            className: "vis-wrapper",
                            style: {
                              height: "100%",
                              width: this.width,
                              position: "relative",
                              overflow: "hidden",
                              whiteSpace: "nowrap"
                            }
                            },
  React.createElement('div',{
                            className: "top",
                            style: {
                              top: "0px",
                              position: "absolute",
                              borderBottom: "1px solid black",
                              display: "inline-block",
                              overflow: "hidden",
                            }
  },this.topBars ),
  React.createElement('div',{
                            className: "bottom",
                            style: {
                              position: "absolute",
                              bottom: "0px",
                              borderTop: "1px solid black",
                              display: "inline-block",
                              overflow: "hidden"

                            }
  },this.bottomBars)
                     )
                     )
         );
};

module.exports = ScrollVis;
