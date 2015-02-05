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

      render: function() {

        var rows = [];
        this.props.allDomains.forEach(function(domainVal) {
            rows.push(React.createElement(DropdownRow, {domainVal: domainVal, key: domainVal.id}));
        });
        return (
          
           React.createElement(DropdownButton, {bsStyle: "primary", title: "Schools"}, 
              rows
           )
                          
        )
      }
    });

    return DropdownContainer;
  });

// <div id="schoolDropdownComponent" className={'dropdown'}>
//             <button className={'btn btn-default dropdown-toggle'} type="button" id="dropdownMenu1" data-toggle="dropdown" aria-expanded="true">
//               Dropdown
//               <span className={'caret'}></span>
//             </button>
//             <ul className={'dropdown-menu'}>
//               {rows}
//             </ul>
//           </div>