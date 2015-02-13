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
          myParent.props.onDomainSelect({selectedDomain:this.children})
        }

        var MenuItem = ReactBoot.MenuItem;
        var DropdownButton = ReactBoot.DropdownButton;
        var rows = [];

        this.props.dmnArray.map(function(domainVal, i) {
          rows.push(<MenuItem onSelect={selectedDomainVal} key={i}>{domainVal.description}</MenuItem>)
        });

        return (    
           <DropdownButton ref="DropMenu" bsStyle="primary" title={this.props.menuTitle} style={{width : 200}} >
              {rows}
           </DropdownButton>                     
        )
      }

    });

    return DropdownContainer;
  });
