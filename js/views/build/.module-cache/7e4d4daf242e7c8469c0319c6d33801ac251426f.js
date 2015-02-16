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
          
              

              React.createElement(Carousel, null, 
                React.createElement(CarouselItem, null, 
                  React.createElement("img", {width: 900, height: 500, alt: "900x500", src: "/resources/Running-high-res.jpg"}), 
                  React.createElement("div", {className: "carousel-caption"}, 
                    React.createElement("h3", null, "Third slide label"), 
                    React.createElement("p", null, "Praesent commodo cursus magna, vel scelerisque nisl consectetur.")
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
