define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react',
  'backbonemixin',
  'reactboot'
  ], function($, _, Backbone, React, backboneMixin, ReactBoot){

    var HomePageClass = React.createClass({displayName: 'HomePageClass',

      mixins: [backboneMixin],
      render: function() {
        var Jumbotron = ReactBoot.Jumbotron;
        var Button = ReactBoot.Button;
        
        return (
          
              React.createElement(Jumbotron, null, 
                React.createElement("h1", null, "Hello, world!"), 
                React.createElement("p", null, "This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."), 
                React.createElement("p", null, React.createElement(Button, {bsStyle: "primary"}, "Learn more"))
              )

        )
      }
    });

  
    var HomePageView = Backbone.View.extend({

      el: $('#mainContent'),
      events: {
      },

      initialize: function() {
      },

      render: function (){

        React.render(       
          React.createElement(HomePageClass, null),
          this.el
          );
      } 

    });

    return HomePageView;
  });
