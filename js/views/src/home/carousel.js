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
                  <img width={1600} height={500} alt="900x500" src="resources/bolt-widescreen.jpg"/>
                  <div className={"carousel-caption"}>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </div>
                </CarouselItem>
            </Carousel>
        )
      }
    });

    return CarouselClass;
  });
