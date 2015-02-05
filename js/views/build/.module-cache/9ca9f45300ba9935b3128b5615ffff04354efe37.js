define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react',
  'views/build/dropdownRow'
  ], function($, _, Backbone, React, DropdownRow){

    var DropdownContainer = React.createClass({displayName: 'DropdownContainer',

      render: function() {

        var rows = [];
        this.props.allDomains.forEach(function(domainVal) {
            //rows.push(<DropdownRow domainVal={domainVal} key={domainVal.id} />);
            rows.push(React.createElement("li", null, "'domainVal.description'"));
        });
        return (
          
            
              React.createElement("ul", {className: 'dropdown-menu'}, 
                rows
              )
                          
          )
      }
    });

    return DropdownContainer;
  });