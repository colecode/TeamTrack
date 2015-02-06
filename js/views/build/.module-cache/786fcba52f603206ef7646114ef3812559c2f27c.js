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
            rows.push(React.createElement(MenuItem, {onSelect: TestSelect(), eventKey: i}, domainVal.description))
        });

        return (     
           React.createElement(DropdownButton, {bsStyle: "primary", title: this.props.dropTitle, key: j}, 
              rows
           )                     
        )
      },

      onDomainChange: function (e) {
        console.log('selected!');
        console.log(e.target.value);
        //var test = this.props.schoolName;
        //this.setState({test: e.target.value });
      }

    });

    function TestSelect (e)
    {
      console.log('another select!');
    }

    return DropdownContainer;
  });
