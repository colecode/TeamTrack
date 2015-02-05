define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react',  
  'backbonemixin',
  'reactboot'
  ], function($, _, Backbone, React, backboneMixin, ReactBoot){

    var DropdownRow = React.createClass({displayName: 'DropdownRow',

      mixins: [backboneMixin],
      render: function() {
        
        var MenuItem = ReactBoot.MenuItem;
        return (  
          React.createElement("li", null, this.props.domainVal.description)             
        )
      }
    });

    return DropdownRow;
  });