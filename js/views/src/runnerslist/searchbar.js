define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react'
  ], function($, _, Backbone, React){

    var SearchBar = React.createClass({

      render: function() {

        return (
          
            <div id="searchBarComponent">
            <div className={'input-group'}>
              <span className={"input-group-addon"}><i className={"glyphicon glyphicon-search"}></i></span>
              <input type="text" className={"form-control"} placeholder="Search" />
            </div>
            </div>
          )
      }
    });

    return SearchBar;
  });
