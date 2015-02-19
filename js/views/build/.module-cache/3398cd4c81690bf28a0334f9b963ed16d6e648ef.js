define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react',
  'backbonemixin',
  'reactboot',
  'views/build/carousel'
  ], function($, _, Backbone, React, backboneMixin, ReactBoot, HomeCarousel){

    var HomePageClass = React.createClass({displayName: 'HomePageClass',

      mixins: [backboneMixin],

      componentDidMount: function() {
        $("#mainPageBar").hide();
      },

      render: function() {
        var Jumbotron = ReactBoot.Jumbotron;
        var Button = ReactBoot.Button;

        var jumboStyle = {
          marginBottom: 0
        };
        
        return (
          React.createElement("div", null, 
          React.createElement(Jumbotron, {style: jumboStyle}, 
            React.createElement("div", {className: 'my-container'}, 
            React.createElement("div", {className: 'wrap'}, 
              React.createElement("h1", null, "Hello!"), 
              React.createElement("p", null, "Welcome to TeamTrack, the simplest way to track all of your runners' performance metrics."), 
              React.createElement("p", null, React.createElement(Button, {bsStyle: "primary", href: "#createrunner"}, "Let's get started"))
            )
            )
          ), 
          React.createElement(HomeCarousel, null)
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
