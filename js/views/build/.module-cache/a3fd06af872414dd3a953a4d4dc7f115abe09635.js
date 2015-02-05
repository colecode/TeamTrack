define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react',
  'views/build/dropdownRow'
  ], function($, _, Backbone, React, DropdownRow){

    var DropdownContainer = React.createClass({displayName: 'DropdownContainer',

      render: function() {

        var rows = [];
        this.props.allDomains.forEach(function(domainVal) {
            rows.push(React.createElement(DropdownRow, {domainVal: domainVal, key: domainVal.id}));
        });
        return (
          
          React.createElement("div", {id: "schoolDropdownComponent", className: 'dropdown'}, 
            React.createElement("button", {className: 'btn btn-default dropdown-toggle', type: "button", id: "dropdownMenu1", 'data-toggle': "dropdown", 'aria-expanded': "true"}, 
              "Dropdown", 
              React.createElement("span", {className: 'caret'})
            ), 
            React.createElement("ul", {className: 'dropdown-menu'}, 
              rows
            )
          )
                          
          )
      }
    });

    return DropdownContainer;
  });