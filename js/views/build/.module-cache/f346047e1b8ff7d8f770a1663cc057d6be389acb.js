define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react',
  'backbonemixin',
  'models/team'
  ], function($, _, Backbone, React, backboneMixin, MyModel){

    // Initialize the model here so it's scope can be reached in MyWidget
    var masterModel;

    var RunnerListMaster = React.createClass({displayName: 'RunnerListMaster',

      mixins: [backboneMixin],

      handleClick: function() {
        masterModel.set('name', 'pooo');
      },
      handleSweet: function() {
        sweetAlert("Oops...", "Something went wrong!", "error");
      },
      render: function() {

        return (
          React.createElement("div", {className: 'my-container'}, 
            React.createElement("div", {className: 'wrap'}
              
            )
          )
          )
      }
    });

    var TeamListView = Backbone.View.extend({
      
      el: $('#mainContent'),
      events: {
          // none
      },

      initialize: function() {
        // Set the model 
        // TODO: Server call will go here to retreive list of all Runnners
        //<SearchBar />
        //<RunnerTable data={} />
        masterModel = new MyModel();
      },

      render: function (){

        React.render(       
          React.createElement(MyWidget, {model: masterModel}),
          document.getElementById('mainContent')
        );
      } 

      });

    return TeamListView;
  });
