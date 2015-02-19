define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react',
  'reactboot'
  ], function($, _, Backbone, React, ReactBoot){


    var DropdownContainer = React.createClass({displayName: 'DropdownContainer',
         
      render: function() {
        
        var myParent = this;

        function selectedDomainVal() {
          var test = myParent;
          myParent.props.onDomainSelect({selectedDomain:this})
        }

        var MenuItem = ReactBoot.MenuItem;
        var DropdownButton = ReactBoot.DropdownButton;
        var rows = [];

        this.props.dmnArray.map(function(domainVal, i) {
          rows.push(React.createElement(MenuItem, {onSelect: selectedDomainVal, domainCode: domainVal.id, key: domainVal.id}, domainVal.description))
        });

        if(this.props.disabled == 1)
        {
          return (    
           React.createElement(DropdownButton, {disabled: true, ref: "DropMenu", bsStyle: "primary", title: this.props.menuTitle, style: {width : 200}}, 
              rows
           )                     
          )
        }
        else
        {
          return (    
           React.createElement(DropdownButton, {ref: "DropMenu", bsStyle: "primary", title: this.props.menuTitle, style: {width : 200}}, 
              rows
           )                     
          )
        }

      }

    });

    return DropdownContainer;
  });
