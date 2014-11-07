
define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react'
  ], function($, _, Backbone, React){

    var MyWidget = React.createClass({displayName: 'MyWidget',
      handleClick: function() {
        alert('Hello!');
      },
      handleSweet: function() {
        sweetAlert("Oops...", "Something went wrong!", "error");
      },
      render: function() {

        return (

          React.createElement("div", {className: 'my-container'}, 
            React.createElement("div", {className: 'wrap'}, 
              React.createElement("ul", {className: 'nav nav-tabs'}, 
                React.createElement("li", {className: 'active'}, React.createElement("a", {href: "#"}, "John")), 
                React.createElement("li", null, React.createElement("a", {href: "#"}, "Han Solo"))
              ), 
              React.createElement("a", {href: "#", onClick: this.handleClick}, "Do song!"), 
              React.createElement("div", null, 
              React.createElement("button", {className: 'btn btn-primary', onClick: this.handleSweet}, "Popup sweet alert")
              ), 
              React.createElement("p", null, "Colin Cole")
            )
          )
          )
      }
    });

    var TeamListView = Backbone.View.extend({

      el: $('#mainContent'),
      events: {

      },

      initialize: function() {
        //console.log('test');
      },

      render: function (){

        React.render(
          React.createElement(MyWidget, null),
          document.getElementById('mainContent')
          );
        } 

      });

    return TeamListView;
  });
