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

    var HomePageClass = React.createClass({

      mixins: [backboneMixin],

      render: function() {
        var Jumbotron = ReactBoot.Jumbotron;

        var jumboStyle = {
          marginBottom: 0
        };
        
        return (
          <div>        
            <div className={'promo'}>
              <div className={'navbar-wrap'}>
              <div className={'my-jumbotron'}>
                <h1>TeamTrack</h1>
                <p>E Pluribus Unum</p>
              </div>
              </div>
            </div>
          </div>
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
          <HomePageClass/>,
          this.el
          );
      } 

    });

    return HomePageView;
  });
