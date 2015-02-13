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

      handleClick: function(e) {    
        var test = val;
        //this.props.onDomainSelect({selectedDomain: this});
      },

      getInitialState: function () {
        return {
          schoolName: ''
        };
      },

      render: function() {

        var MenuItem = ReactBoot.MenuItem;
        var DropdownButton = ReactBoot.DropdownButton;

        return (     
           React.createElement(DropdownButton, {bsStyle: "primary", title: this.props.menuTitle, style: {width : 200}}, 

            this.props.dmnArray.map(function(domainVal, i) {
              return (React.createElement(MenuItem, {onSelect: this.handleClick, key: i}, domainVal.description));
            },this)

           )                     
        )
      }

    });

    return DropdownContainer;
  });
