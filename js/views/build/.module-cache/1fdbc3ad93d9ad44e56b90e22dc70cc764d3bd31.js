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
        var i = 1;
        this.props.allDomains.forEach(function(domainVal) {
            rows.push(React.createElement(MenuItem, {eventKey: i}, domainVal.description))
            i++;
        });

        return (     
           React.createElement(DropdownButton, {bsStyle: "primary", title: "Schools"}, 
              rows
           )                     
        )
      }
    });

    return DropdownContainer;
  });
