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

      handleClick: function() {
        masterModel.set('name', 'pooo');
      },

      render: function() {

        return (
          React.createElement("div", {className: 'my-container'}, 
            React.createElement("div", {className: 'wrap'}, 
              React.createElement(SearchBar, null), 
              React.createElement(RunnerTable, {runners: this.props.model})
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

        // masterModel = [
        // {id: '1', first: 'Colin', last: 'Cole', school: 'HH'},
        // {id: '2', first: 'Andrew', last: 'Whitman', school: 'HH'},
        // {id: '3', first: 'Josh', last: 'Black', school: 'HH'},
        // {id: '4', first: 'Hank', last: 'Baker', school: 'HF'},
        // {id: '5', first: 'Mike', last: 'Burke', school: 'HF'}      
        // ];

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
