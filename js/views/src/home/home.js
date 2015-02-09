define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react',
  'backbonemixin',
  'reactboot'
  ], function($, _, Backbone, React, backboneMixin, ReactBoot){

    var HomePageClass = React.createClass({

      mixins: [backboneMixin],
      render: function() {
        var Jumbotron = ReactBoot.Jumbotron;
        var Button = ReactBoot.Button;
        
        return (
          
              <Jumbotron>
                <div className={'my-container'}>
                <div className={'wrap'}>
                  <h1>Hello!</h1>
                  <p>Welcome to TeamTrack, the simplest way to track all of your runners&apos; performance metrics.</p>
                  <p><Button bsStyle="primary" href="#createrunner">Create a Team</Button></p>
                </div>
                </div>
              </Jumbotron>
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
