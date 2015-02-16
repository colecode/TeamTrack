define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react',
  'reactboot'
  ], function($, _, Backbone, React, ReactBoot){


    var DropdownContainer = React.createClass({
         
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
          rows.push(<MenuItem onSelect={selectedDomainVal} domainCode={domainVal.id} key={domainVal.id}>{domainVal.description}</MenuItem>)
        });

        if(this.props.disabled == 1)
        {
          return (    
           <DropdownButton disabled ref="DropMenu" bsStyle="primary" title={this.props.menuTitle} style={{width : 200}} >
              {rows}
           </DropdownButton>                     
          )
        }
        else
        {
          return (    
           <DropdownButton ref="DropMenu" bsStyle="primary" title={this.props.menuTitle} style={{width : 200}} >
              {rows}
           </DropdownButton>                     
          )
        }

      }

    });

    return DropdownContainer;
  });
