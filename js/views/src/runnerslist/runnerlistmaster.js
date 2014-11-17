define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react',
  'backbonemixin',
  'models/team',
  'views/build/searchbar',
  'views/build/runnertable',
  'collections/teams'
  ], function($, _, Backbone, React, backboneMixin, RunnerModel, SearchBar, RunnerTable, RunnersCollection){

    // Initialize the model here so it's scope can be reached in MyWidget
    var masterModel;

    var RunnerListMaster = React.createClass({

      mixins: [backboneMixin],

      render: function() {

        return (
          <div className={'my-container'}>
            <div className={'wrap'}>
              <SearchBar />
              <RunnerTable runners={this.props.model} />
            </div>          
          </div>
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
        //masterModel = new MyModel();

        // var testMasterModel = [
        // {id: '1', first: 'Colin', last: 'Cole', school: 'HH'},
        // {id: '2', first: 'Andrew', last: 'Whitman', school: 'HH'},
        // {id: '3', first: 'Josh', last: 'Black', school: 'HH'},
        // {id: '4', first: 'Hank', last: 'Baker', school: 'HF'},
        // {id: '5', first: 'Mike', last: 'Burke', school: 'HF'}      
        // ];

        // console.log(testMasterModel);


        // Adding static models to collection
        // Next step: Pull/create models from API service 
        masterModel = new RunnersCollection();

        var runner1 = new RunnerModel(
        {
          "id": "1",
          "first": "Walter",
          "last": "White",
          "school": "HH"
        });

        var runner2 = new RunnerModel(
        {
          "id": "2",
          "first": "Skylar",
          "last": "White",
          "school": "HH"
        });

        masterModel.add(runner1);
        masterModel.add(runner2);
        console.log(masterModel.toJSON());
      },

      render: function (){

        React.render(       
          <RunnerListMaster model={masterModel.toJSON()} />,
          this.el
        );
      } 

      });

    return RunnerListView;
  });
