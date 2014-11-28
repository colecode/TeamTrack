define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react',
  'backbonemixin',
  'models/runner',
  'views/build/searchbar',
  'views/build/runnertable',
  'collections/runners'
  ], function($, _, Backbone, React, backboneMixin, RunnerModel, SearchBar, RunnerTable, RunnerCollection){

    // Initialize the model here so it's scope can be reached in MyWidget
    var masterModel;

    var RunnerListMaster = React.createClass({displayName: 'RunnerListMaster',

      mixins: [backboneMixin],

      render: function() {

        return (
          React.createElement("div", {className: 'my-container'}, 
            React.createElement("div", {className: 'wrap'}, 
              React.createElement(SearchBar, null), 
              React.createElement(RunnerTable, {runners: this.props.collection})
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
        // Adding static models to collection
        // Next step: Pull/create models from API service 

        masterModel = new RunnerCollection();
        masterModel.fetch({

          success: function (response) {
            console.log("Success!");
            //console.log(masterModel.toJSON());
          },
          error: function(model,response,xhr) {
            console.log("Error");
            console.log(response);
            console.log(xhr);        
          }
        });

        // var runner1 = new RunnerModel(
        // {
        //   "id": "1",
        //   "first": "Walter",
        //   "last": "White",
        //   "school": "HH"
        // });

        // var runner2 = new RunnerModel(
        // {
        //   "id": "2",
        //   "first": "Skylar",
        //   "last": "White",
        //   "school": "HH"
        // });

        //  masterModel.add(runner1);
        //  masterModel.add(runner2);
      },

      render: function (){
        // **IMPORTANT** This inital props has to be named 'collection' //
        React.render(       
          React.createElement(RunnerListMaster, {collection: masterModel}),
          this.el
        );
      } 

      });

    return RunnerListView;
  });
