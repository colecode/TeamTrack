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
          // <div className={'my-container'}>
          //   <div className={'wrap'}>
          //     <form>
          //       <h5>Search Bar</h5>
          //       <input type="text" placeholder="Search..." />
          //     </form>
          //   </div>          
          // </div>
          React.createElement("p", null, "Test Search Bar")
          )
      }
    });

    return SearchBar;
  });
