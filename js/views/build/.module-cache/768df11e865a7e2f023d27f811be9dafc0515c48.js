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

      handleSelect: function(i) {
        console('test' + arg1);
      },

      handleClick: function(e) {    
        var test = e;
        //this.props.onDomainSelect({selectedDomain: this});
      },

      getInitialState: function () {
        return {
          schoolName: ''
        };
      },

      render: function() {

        var MenuItem = ReactBoot.MenuItem;
        var DropdownButton = ReactBoot.DropdownButton;

        this.props.dmnArray.forEach(function(domainVal, i) {
            rows.push(React.createElement(MenuItem, {onSelect: handleClick.bind(this, i), key: i}, domainVal.description))
        });

        // return (     
        //    <DropdownButton bsStyle="primary" title={this.props.menuTitle} style={{width : 200}}>

        //     {this.props.dmnArray.map(function(domainVal, i) {
        //       return (<MenuItem onSelect={handleClick.bind(this, i)} key={i}>{domainVal.description}</MenuItem>);
        //     },this)}

        //    </DropdownButton>                     
        // )

        return (     
           React.createElement(DropdownButton, {bsStyle: "primary", title: this.props.menuTitle, style: {width : 200}}, 
              rows
           )                     
        )
      }

    });

    return DropdownContainer;
  });
