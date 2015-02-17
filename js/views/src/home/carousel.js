define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react',
  'backbonemixin',
  'reactboot'
  ], function($, _, Backbone, React, backboneMixin, ReactBoot){

    var CarouselClass = React.createClass({

      mixins: [backboneMixin],
      render: function() {
        var Carousel = ReactBoot.Carousel;
        var CarouselItem = ReactBoot.CarouselItem;
        
        return (
          
          <Carousel>
                <CarouselItem>
                <div className={"carousel-caption"}>
                    <h3>Be the best</h3>
                    <p>Add new runners. Build a team. Become a champion.</p>
                  </div>
                  <img width={1600} height={500} alt="1600x500" src="resources/bolt-widescreen.jpg"/>    
                </CarouselItem>
            </Carousel>
        )
      }
    });

    return CarouselClass;
  });
