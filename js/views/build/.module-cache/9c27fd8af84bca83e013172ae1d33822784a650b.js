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
        var Carousel = ReactBoot.Carousel;
        var CarouselItem = ReactBoot.CarouselItem;
        
        return (
          React.createElement("div", null, 
          React.createElement(Carousel, null, 
            React.createElement("div", {className: 'my-container'}, 
              React.createElement("div", {className: 'wrap'}, 

                React.createElement(CarouselItem, null, 
                  React.createElement("img", {width: 900, height: 500, alt: "900x500", src: "../resources/Running-high-res.jpg"}), 
                  React.createElement("div", {className: "carousel-caption"}, 
                    React.createElement("h3", null, "First slide label"), 
                    React.createElement("p", null, "Nulla vitae elit libero, a pharetra augue mollis interdum.")
                  )
                )
              
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
