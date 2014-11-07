define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react'
  ], function($, _, Backbone, react){

    var MyWidget = React.createClass({displayName: 'MyWidget',
      handleClick: function() {
        alert('Hello!');
      },
      render: function() {
        return (React.createElement("div", null, 
          React.createElement("div", {class: "nav-site"}, 
          React.createElement("ul", null, 
            React.createElement("li", null, "John"), 
            React.createElement("li", null, "Smith")
          )
          ), 
          React.createElement("a", {href: "#", onClick: this.handleClick}, "Do something!")
          )
        )
      }
    });
});
