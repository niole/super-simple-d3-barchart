"use strict";
var React = require('react');

var NavElt = React.createClass({
  propTypes: {
    data: React.PropTypes.object
  },
  render: function(){
    var content = [];
    if (this.props.data.type === 'a'){
      // --> {type:'a',
      //     content: {hyper_path: path,
      //                hyper_string: titleofsomekind}}
      content.push(
        <a
        className="themex-nav-text"
        href={this.props.data.content.hyper_link}
        >
        {this.props.data.content.hyper_string}
        </a>
      );
    }

    if (this.props.data.type === 'menu'){
      // --> {type: 'menu',
      //     content: [{hyper_link: path,
      //                hyper_link_string: titleofsomekind},..]
      // for now menu and a will act the same
      content.push(
        <a
        className="themex-nav-text"
        href={this.props.data.content[0].hyper_link}
        >
        {this.props.data.content[0].hyper_string}
        </a>
      );
    }
    return (
      <li className="themex-nav-element">
        {content}
      </li>
    );
  }
});

module.exports = NavElt;
