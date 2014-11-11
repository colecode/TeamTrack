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

    var RunnerListMaster = React.createClass({displayName: 'RunnerListMaster',

      mixins: [backboneMixin],

      handleClick: function() {
        masterModel.fetch({
          success: function () {
            console.log('fetched!');
            TeamExampleView.render();
          },
          error: function(model,response,xhr) {
            
            console.log(response);
            console.log(xhr);
            console.log("Error");
          }
        });
      },

      render: function() {

        return (
          React.createElement("div", {className: 'my-container'}, 
            React.createElement("div", {className: 'wrap'}, 
              React.createElement("p", null, this.props.message), 
              React.createElement("a", {href: "#", onClick: this.handleClick}, "Fetch!")
            )
          )
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
          React.createElement(RunnerListMaster, {model: masterModel}),
          document.getElementById('mainContent')
        );
      } 

      });

    return TeamExampleView;
  });
