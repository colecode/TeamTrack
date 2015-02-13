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
     
      handleChange: function() {    
        var newValue = this.refs.dropButtMenu.refs.myMenu.getDOMNode().value;
        //this.props.onDomainSelect({selectedDomain: this});
      },

      handleSelect: function() {    
        var newValue = this.refs.myMenu.getDOMNode().value;
        //this.props.onDomainSelect({selectedDomain: this});
      },

      getInitialState: function () {
        return {
          selected: ''
        };
      },

      render: function() {

        var MenuItem = ReactBoot.MenuItem;
        var DropdownButton = ReactBoot.DropdownButton;
        var rows = [];

        var myMenuItem = React.createElement(MenuItem, {ref: "myMenu", onSelect: this.handleSelect, value: "Alaska"}, "Alaska")
        rows.push(myMenuItem);

        // this.props.dmnArray.map(function(domainVal, i) {
        //     return(<MenuItem onSelect={this.handleSelect} key={i}>{domainVal.description}</MenuItem>)
        // });

        // return (     
        //    <DropdownButton bsStyle="primary" title={this.props.menuTitle} style={{width : 200}}>

        //     {this.props.dmnArray.map(function(domainVal, i) {
        //       return (<MenuItem onSelect={handleClick.bind(this, i)} key={i}>{domainVal.description}</MenuItem>);
        //     },this)}

        //    </DropdownButton>                     
        // )

        // {this.props.dmnArray.map(function(domainVal, i) {
        //         return(<MenuItem onSelect={
        //           function (e) { 
        //             console.log(this.children);
        //           }
        //       } key={i}>{domainVal.description}</MenuItem>)
        //       })}

        return (     
           React.createElement(DropdownButton, {bsStyle: "primary", title: this.props.menuTitle, style: {width : 200}}, 
              rows
           )                     
        )
      }

    });

    return DropdownContainer;
  });
