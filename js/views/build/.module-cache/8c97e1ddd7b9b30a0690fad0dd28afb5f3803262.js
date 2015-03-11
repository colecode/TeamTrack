define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react'
  ], function($, _, Backbone, React){

    var NavBarComponent = React.createClass({displayName: 'NavBarComponent',

      render: function() {
        
        return (
          React.createElement("div", null, 
          React.createElement("nav", {className: 'navbar navbar-default', style: "margin-bottom:0px;"}, 
  React.createElement("div", {className: 'container-fluid'}, 
    React.createElement("div", {className: 'navbar-wrap'}, 
    React.createElement("div", {className: 'navbar-header'}, 
      React.createElement("button", {type: "button", className: 'navbar-toggle collapsed', 'data-toggle': "collapse", 'data-target': "#bs-example-navbar-collapse-1"}, 
        React.createElement("span", {className: 'sr-only'}, "Toggle navigation"), 
        React.createElement("span", {className: 'icon-bar'}), 
        React.createElement("span", {className: 'icon-bar'}), 
        React.createElement("span", {className: 'icon-bar'})
      ), 
      React.createElement("a", {className: 'navbar-brand', href: "#home"}, "TeamTrack")
    ), 
    React.createElement("div", {className: 'collapse navbar-collapse', id: "bs-example-navbar-collapse-1"}, 
      React.createElement("ul", {className: 'nav navbar-nav'}
      ), 
      React.createElement("form", {className: 'navbar-form navbar-left', role: "search"}, 
        React.createElement("div", {className: 'form-group'}, 
          React.createElement("input", {type: "text", className: 'form-control', placeholder: "Search"})
        ), 
        React.createElement("button", {type: "submit", className: 'btn btn-default'}, "Submit")
      ), 
      React.createElement("ul", {className: 'nav navbar-nav navbar-right'}, 
        React.createElement("li", null, React.createElement("a", {href: "#myteams"}, "My Teams")), 
        React.createElement("li", {className: 'dropdown'}, 
          React.createElement("a", {href: "#", className: 'dropdown-toggle', 'data-toggle': "dropdown", role: "button", 'aria-expanded': "false"}, "Account ", React.createElement("span", {className: 'caret'})), 
          React.createElement("ul", {className: 'dropdown-menu', role: "menu"}, 
            React.createElement("li", null, React.createElement("a", {href: "#"}, "Action")), 
            React.createElement("li", null, React.createElement("a", {href: "#"}, "Another action")), 
            React.createElement("li", null, React.createElement("a", {href: "#"}, "Something else here")), 
            React.createElement("li", {className: 'divider'}), 
            React.createElement("li", null, React.createElement("a", {href: "#"}, "Separated link"))
          )
        )
      )
    )
  )
  )
)
)
        )
      }
    });

    return NavBarComponent;
  });
