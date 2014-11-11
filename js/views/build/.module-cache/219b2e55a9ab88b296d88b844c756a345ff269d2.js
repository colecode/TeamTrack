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
          
            // <div id="searchBarComponent">
            //   <form className={'form-search'}>
            //   <div className={'input-append'}>
            //     <input type="text" className={'span2 search-query'} />
            //     <button type="submit" className={'btn'}><i className={'icon-search'}></i></button>
            //   </div>
            //   </form> 
            // </div>   

            React.createElement("div", {id: "searchBarComponent"}, 
            React.createElement("div", {className: 'input-append'}, 
              React.createElement("input", {type: "text", className: "form-control", placeholder: "Search"}), 
              React.createElement("button", {type: "submit", className: "btn"}, React.createElement("i", {className: "glyphicon glyphicon-search"}))
            )
            )
          )
      }
    });

    return SearchBar;
  });
