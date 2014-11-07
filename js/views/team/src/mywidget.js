define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react'
  ], function($, _, Backbone, react){

    var MyWidget = React.createClass({
      handleClick: function() {
        alert('Hello!');
      },
      render: function() {
        return (<div>
          <div class="nav-site">
          <ul>
            <li>John</li>
            <li>Smith</li>
          </ul>
          </div>          
          <a href="#" onClick={this.handleClick}>Do something!</a>
          </div>
        )
      }
    });
});
