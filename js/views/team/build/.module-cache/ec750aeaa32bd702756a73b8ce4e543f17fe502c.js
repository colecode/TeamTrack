
define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react',
  'backbonemixin',
  'models/team'
  ], function($, _, Backbone, React, backboneMixin, MyModel){

    var model = new Backbone.Model({foo: 'bar'});

    var TeamModel = new Backbone.Model
    ({
      foo: 'barColin'
    });


    var MyWidget = React.createClass({displayName: 'MyWidget',

      mixins: [backboneMixin],

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
              React.createElement("p", null, "Colin Cole Test"), 
              React.createElement("p", null, this.props.foo)
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
        this.collection = new MyModel();
      },

      render: function (){

        React.render(
          
        React.createElement(MyWidget, {model: MyModel}),
        document.getElementById('mainContent')

          );
        } 

      });

    return TeamListView;
  });
