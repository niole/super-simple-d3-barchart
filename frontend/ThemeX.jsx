"use strict";
//using netflix career site's styles

var React = require('react');
var NavElt = require('./NavElt.jsx');

var ThemeX = React.createClass({
  propTypes: {
    nav_elt_data: React.PropTypes.array
  },
  render: function(){
    var nav_elts = this.props.nav_elt_data.map(function(d){
      return <NavElt
              title={d.title}
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
