define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react',
  'views/build/dropdownRow',
  'reactboot'
  ], function($, _, Backbone, React, DropdownRow, ReactBoot){

    var DropdownContainer = React.createClass({

      render: function() {

        var MenuItem = ReactBoot.MenuItem;
        var DropdownButton = ReactBoot.DropdownButton;
        var rows = [];
        
        this.props.allDomains.forEach(function(domainVal, i) {

            rows.push(<MenuItem onSelect={this.onDomainChange} eventKey={i}>{domainVal.description}</MenuItem>)
        });

        return (     
           <DropdownButton bsStyle="primary" title={this.props.dropTitle}>
              {rows}
           </DropdownButton>                     
        )
      },

      onDomainChange: function (e) {
        this.setState({ schoolName: e.target.value });
      }

    });

    return DropdownContainer;
  });
