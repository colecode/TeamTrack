define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react',  
  'backbonemixin',
  ], function($, _, Backbone, React, backboneMixin){

    var DropdownRow = React.createClass({displayName: 'DropdownRow',

      mixins: [backboneMixin],
      render: function() {

        return (  
          React.createElement("li", null, this.props.domainVal.description)             
        )
      }
    });

    return DropdownRow;
  });