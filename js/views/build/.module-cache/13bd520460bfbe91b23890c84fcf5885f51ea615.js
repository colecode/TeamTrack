define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react',
  'backbonemixin',
  'reactboot'
  ], function($, _, Backbone, React, backboneMixin, ReactBoot){

    var CarouselClass = React.createClass({displayName: "CarouselClass",

      mixins: [backboneMixin],
      render: function() {
        var Carousel = ReactBoot.Carousel;
        var CarouselItem = ReactBoot.CarouselItem;
        
        return (
          
          React.createElement(Carousel, null, 
                React.createElement(CarouselItem, null, 
                React.createElement("div", {className: "carousel-caption"}, 
                    React.createElement("h3", null, "Be the best"), 
                    React.createElement("p", null, "Add new runners. Build a team. Become a champion.")
                  ), 
                  React.createElement("img", {width: 1600, height: 500, alt: "1600x500", src: "resources/bolt-widescreen.jpg"})
                )
            )
        )
      }
    });

    return CarouselClass;
  });
