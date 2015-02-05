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
          
            React.createElement("div", {id: "dropdownComponent"}, 
              React.createElement("ul", {className: 'dropdown-menu'}, 
                rows
              )
            )              
          )
      }
    });

    return DropdownContainer;
  });