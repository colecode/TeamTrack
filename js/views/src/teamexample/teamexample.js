define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react',
  'backbonemixin',
  'models/team',
  'views/build/searchbar',
  'views/build/runnertable'
  ], function($, _, Backbone, React, backboneMixin){

    // Initialize the model here so it's scope can be reached in MyWidget
    var masterModel;

    var MessageModel = Backbone.Model.extend({
      url : 'api/example1.php',
      defaults: {
        message: "Text Message"
      }
    });

    var RunnerListMaster = React.createClass({

      mixins: [backboneMixin],

      handleClick: function() {
        masterModel.fetch({
          success: function () {
            console.log('fetched!');
            TeamExampleView.render();
          },
          error: function(model,response,xhr) {
            console.log(model);
            console.log(response);
            console.log(xhr);
            console.log("Error");
          }
        });
      },

      render: function() {

        return (
          <div className={'my-container'}>
            <div className={'wrap'}>
              <p>{this.props.message}</p>
              <a href="#" onClick={this.handleClick}>Fetch!</a>
            </div>          
          </div>
          )
      }
    });

    var TeamExampleView = Backbone.View.extend({
      
      el: $('#mainContent'),
      events: {
          // none
      },

      initialize: function() {
        // Set the model 
        // TODO: Server call will go here to retreive list of all Runnners
        //masterModel = new MyModel();
        masterModel = new MessageModel();

      },

      render: function (){

        React.render(       
          <RunnerListMaster model={masterModel} />,
          document.getElementById('mainContent')
        );
      } 

      });

    return TeamExampleView;
  });
