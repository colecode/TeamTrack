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

      selectedItem: function() {
        console.log('selected!!!!');
      },

      render: function(j) {

        var MenuItem = ReactBoot.MenuItem;
        var DropdownButton = ReactBoot.DropdownButton;
        var rows = [];
        
        this.props.allDomains.forEach(function(domainVal, i) {
            rows.push(React.createElement(MenuItem, {onSelect: selectedItem, eventKey: i}, domainVal.description))
        });

        return (     
           React.createElement(DropdownButton, {bsStyle: "primary", title: this.props.dropTitle, key: j}, 
              rows
           )                     
        )
      }

    });

    // function selectedItem ()
    // {

    //   console.log(this.children);
    //   //console.log('another select!');
    // }

    return DropdownContainer;
  });
