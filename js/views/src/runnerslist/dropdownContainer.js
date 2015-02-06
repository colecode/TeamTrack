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

      handleClick: function(i) {
        console.log('You clicked: ' + this.props.allDomains[i]);
      },

      getInitialState: function () {
        return {
          schoolName: '',
          dropTitle: '',
        };
      },

      render: function() {

        var MenuItem = ReactBoot.MenuItem;
        var DropdownButton = ReactBoot.DropdownButton;
        var rows = [];
        
        // this.props.allDomains.forEach(function(domainVal, i) {
        //     rows.push(<MenuItem onSelect={handleClick.bind(this, i)} key={i}>{domainVal.description}</MenuItem>)
        // });

        this.props.allDomains.forEach(function(domainVal, i) {
          rows.push(<MenuItem onSelect={
            function (e) { 
              //schoolName: this.children;
              console.log(this.children);
            }
          } key={i}>{domainVal.description}</MenuItem>)
        });

        return (     
           <DropdownButton bsStyle="primary" title={this.props.dropTitle} style={{width : 200}}>
              {rows}
           </DropdownButton>                     
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
