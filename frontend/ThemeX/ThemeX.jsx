"use strict";
//using netflix career site's styles

var React = require('react');
var NavElt = require('./NavElt.jsx');
var fakeData = require('./fakeData.js');

var ThemeX = React.createClass({
  getDefaultProps: function(){
    return {
      nav_elt_data: fakeData
    };
  },
  propTypes: {
    nav_elt_data: React.PropTypes.array
  },
  render: function(){
    var nav_elts = this.props.nav_elt_data.map(function(d){
      return <NavElt
              data={d.data}
              />;
    });
    return (
      <div className="themex-body">
        <header className="themex-header">
          <nav className="themex-nav">
            <ul className="themex-nav-elements">
              {nav_elts}
            </ul>
          </nav>
        </header>
      </div>
    );
  }
});

module.exports = ThemeX;
