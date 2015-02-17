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
        var Button = ReactBoot.Button;

        var jumboStyle = {
          marginBottom: 0
        };
        
        return (
          <div>
          <Jumbotron style={jumboStyle}>    
            <div className={'my-container'}>
            <div className={'wrap'}>  
              <h1>Hello!</h1>
              <p>Welcome to TeamTrack, the simplest way to track all of your runners&apos; performance metrics.</p>
              <p><Button bsStyle="primary" href="#createrunner">Let&apos;s get started</Button></p>
            </div>
            </div>      
          </Jumbotron>
          <HomeCarousel/>
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
