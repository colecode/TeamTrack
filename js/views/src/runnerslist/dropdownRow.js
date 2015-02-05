define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react',  
  'backbonemixin',
  'reactboot'
  ], function($, _, Backbone, React, backboneMixin, ReactBoot){

    var DropdownRow = React.createClass({

      mixins: [backboneMixin],
      render: function() {
        
        var MenuItem = ReactBoot.MenuItem;
        return (   
          <MenuItem>{this.props.domainVal.description}</MenuItem>         
        )
      }
    });

    return DropdownRow;
  });