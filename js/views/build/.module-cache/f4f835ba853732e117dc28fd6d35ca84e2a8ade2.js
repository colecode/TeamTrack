define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react',
  'views/build/dropdownRow',
  'reactboot'
  ], function($, _, Backbone, React, DropdownRow, ReactBoot){

    var DropdownContainer = React.createClass({displayName: 'DropdownContainer',

      render: function() {

        var MenuItem = ReactBoot.MenuItem;
        var DropdownButton = ReactBoot.DropdownButton;
        var rows = [];
        
        this.props.allDomains.forEach(function(domainVal, i) {
            rows.push(React.createElement(MenuItem, {eventKey: i}, domainVal.description))
            
        });

        return (     
           React.createElement(DropdownButton, {bsStyle: "primary", title: "Schools", key: 1}, 
              rows
           )                     
        )
      }
    });

    return DropdownContainer;
  });
