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
     
      handleButtonSelect: function() {
        var newValue = this.refs.DropMenu.refs.menu.refs.myMenuItem.props.children;
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

        // var myMenuItem = <MenuItem ref="myMenu" onSelect={this.handleSelect}>Alaska</MenuItem>
        // rows.push(myMenuItem);
        // var myMenuItem2 = <MenuItem ref="myMenu" onSelect={this.handleSelect}>Georgia</MenuItem>
        // rows.push(myMenuItem2);

        // this.props.dmnArray.map(function(domainVal, i) {
        //   rows.push(<MenuItem ref="myMenuItem" key={i}>{domainVal.description}</MenuItem>)
        // });

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

        this.props.dmnArray.map(function(domainVal, i) {
          rows.push(React.createElement(MenuItem, {onSelect: 
            function (e) { 
              //schoolName: this.children;
              console.log(this);
            }, 
          key: i}, domainVal.description))
        });

        return (     
           React.createElement(DropdownButton, {ref: "DropMenu", bsStyle: "primary", title: this.props.menuTitle, style: {width : 200}}, 
              rows
           )                     
        )
      }

    });

    return DropdownContainer;
  });
