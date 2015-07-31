"use strict";
var React = require('react');

var NavElt = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    data: React.PropTypes.object
  },
  render: function(){
    var content;
    if (this.props.data.type === 'a'){
      // --> {type:'a',
      //     content: {hyper_link: path,
      //                hyper_link_string: titleofsomekind}}
    }

    if (this.props.data.type === 'menu'){
      // --> {type: 'menu',
      //     content: [{hyper_link: path,
      //                hyper_link_string: titleofsomekind},..]
    }
    return (
      <li className="themex-nav-element">
        {content}
      </li>
    );
  }
});

module.exports = NavElt;
