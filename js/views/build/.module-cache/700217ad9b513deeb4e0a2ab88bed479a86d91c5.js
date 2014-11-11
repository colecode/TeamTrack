define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react'
  ], function($, _, Backbone, React){

    var SearchBar = React.createClass({displayName: 'SearchBar',

      render: function() {

        return (
          React.createElement("div", {className: 'my-container'}, 
            React.createElement("div", {className: 'wrap'}, 
              React.createElement("form", null, 
                React.createElement("h5", null, "Search Bar"), 
                React.createElement("input", {type: "text", placeholder: "Search..."})
              )
            )
          )
          )
      }
    });

    return SearchBar;
  });
