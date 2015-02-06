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

      handleClick: function(i) {
        console.log('You clicked: ' + this.props.allDomains[i]);
      },

      getInitialState: function () {
        return {
          schoolName: ''
        };
      },

      render: function() {

        var MenuItem = ReactBoot.MenuItem;
        var DropdownButton = ReactBoot.DropdownButton;
        var rows = [];
        
        this.props.allDomains.forEach(function(domainVal, i) {
            rows.push(React.createElement(MenuItem, {onSelect: this.handleClick.bind(this, i), key: i}, domainVal.description))
        });

        return (     
           React.createElement(DropdownButton, {bsStyle: "primary", title: this.props.dropTitle}, 
              rows
           )                     
        )
      }

    });

    function selectedItem ()
    {
      //console.log(this.children);
      //DropdownContainer.setState({ schoolName: this.chilren });
    }

    return DropdownContainer;
  });
