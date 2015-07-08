define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react',
  'reactboot'
  ], function($, _, Backbone, React, ReactBoot){

    var SandboxClass = React.createClass({displayName: "SandboxClass",

      render: function() {
        var Navbar = ReactBoot.Navbar;
        var Nav = ReactBoot.Nav;
        var NavItem = ReactBoot.NavItem;
        var DropdownButton = ReactBoot.DropdownButton;
        var MenuItem = ReactBoot.MenuItem;

        return (
          
        React.createElement(Navbar, {brand: "React-Bootstrap", inverse: true, toggleNavKey: 0}, 
          React.createElement(Nav, {right: true, eventKey: 0}, " ", /* This is the eventKey referenced */
          React.createElement(NavItem, {eventKey: 1, href: "#"}, "Link"), 
          React.createElement(NavItem, {eventKey: 2, href: "#"}, "Link"), 
          React.createElement(DropdownButton, {eventKey: 3, title: "Dropdown"}, 
            React.createElement(MenuItem, {eventKey: "1"}, "Action"), 
            React.createElement(MenuItem, {eventKey: "2"}, "Another action"), 
            React.createElement(MenuItem, {eventKey: "3"}, "Something else here"), 
            React.createElement(MenuItem, {divider: true}), 
            React.createElement(MenuItem, {eventKey: "4"}, "Separated link")
          )
          )
        )
        )
      }
    });

    var SandboxView = Backbone.View.extend({
    
      el: $('#mainContent'),
      events: {
      },

      initialize: function() {          
      },

      render: function (){
        
        React.render(       
          React.createElement(SandboxClass, null),
          this.el
        );
      } 
    });

    return SandboxView;

  });
