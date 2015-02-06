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

      render: function(j) {

        var MenuItem = ReactBoot.MenuItem;
        var DropdownButton = ReactBoot.DropdownButton;
        var rows = [];
        
        this.props.allDomains.forEach(function(domainVal, i) {
            rows.push(React.createElement(MenuItem, {onSelect: 
              function (e) { 
                console.log(this.children);
                this.setState({ schoolName: this.children });
              }, 
            eventKey: i}, domainVal.description))
        });

        return (     
           React.createElement(DropdownButton, {bsStyle: "primary", title: this.props.dropTitle, key: j}, 
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
