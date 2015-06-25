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

    var test = 'test12233';
    var test = 'test33';
    var HomePageClass = React.createClass({displayName: 'HomePageClass',

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
                React.createElement("p", null, "Follow your team."), 
                React.createElement("p", null, " Also this is a test this is a test "), 
                React.createElement(Button, {bsStyle: "primary", href: "#createrunner"}, "Let's get started")
              )
              )
            )
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
