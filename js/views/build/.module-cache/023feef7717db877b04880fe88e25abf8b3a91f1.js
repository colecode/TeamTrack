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
          
            React.createElement("div", {id: "searchBarComponent"}, 
              React.createElement("form", {className: 'form-search'}, 
              React.createElement("div", {className: 'input-append'}, 
                React.createElement("input", {type: "text", className: 'span2 search-query'}), 
                React.createElement("button", {type: "submit", className: 'btn'}, React.createElement("i", {className: 'icon-search'}))
              )
              )
            )   
          )
      }
    });

    return SearchBar;
  });
