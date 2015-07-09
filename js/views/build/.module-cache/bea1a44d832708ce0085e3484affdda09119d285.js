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

    var HomePageClass = React.createClass({displayName: "HomePageClass",

      mixins: [backboneMixin],

      render: function() {
        var Jumbotron = ReactBoot.Jumbotron;
        var Button = ReactBoot.Button;

        var jumboStyle = {
          marginBottom: 0
        };
        
        return (
          React.createElement("div", null, 
            React.createElement("div", {className: 'promo'}, 
              React.createElement("div", {className: 'navbar-wrap'}, 
              React.createElement("div", {className: 'my-jumbotron'}, 
                React.createElement("h1", null, "TeamTrack"), 
                React.createElement("p", null, "E Pluribus Unum"), 
                React.createElement(Button, {bsStyle: "primary", href: "#createrunner"}, "Let's get started")
              )
              )
            )
          )
        )
      }
    });

  
    var HomePageView = Backbone.View.extend({

      el: $('#home-banner'),
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
