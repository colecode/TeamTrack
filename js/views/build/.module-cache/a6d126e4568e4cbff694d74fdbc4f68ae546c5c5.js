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
  ], function($, _, Backbone, React, backboneMixin, MyModel, SearchBar, RunnerTable){

    // Initialize the model here so it's scope can be reached in MyWidget
    var masterModel;

    var RunnerListMaster = React.createClass({displayName: 'RunnerListMaster',

      mixins: [backboneMixin],

      render: function() {

        return (
          React.createElement("div", {className: 'my-container'}, 
            React.createElement("div", {className: 'wrap'}, 
              React.createElement(SearchBar, null), 
              React.createElement(RunnerTable, {model: model})
            )
          )
          )
      }
    });

    var RunnerListView = Backbone.View.extend({
      
      el: $('#mainContent'),
      events: {
          // none
      },

      initialize: function() {
        // Set the model 
        // TODO: Server call will go here to retreive list of all Runnners
        masterModel = new MyModel();
      },

      render: function (){

        React.render(       
          React.createElement(RunnerListMaster, {model: masterModel}),
          document.getElementById('mainContent')
        );
      } 

      });

    return RunnerListView;
  });
