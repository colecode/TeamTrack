define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react',
  'backbonemixin',
  'views/build/searchbar',
  'views/build/runnertable',
  'collections/runners'
  ], function($, _, Backbone, React, backboneMixin, SearchBar, RunnerTable, RunnerCollection){

    var RunnerListMaster = React.createClass({displayName: 'RunnerListMaster',

      mixins: [backboneMixin],

      handleSubmit: function() {

        //console.log({this.props.children});
        // var myRunner = new CreateRunnerModel({'fName':this.state.firstName, 'lName':this.state.lastName, 'sName':this.state.schoolName});

        // myRunner.save(null, {
        //   success:function(model, response) {
        //     swal({title:"", text: "Successfully created new runner!", type:"success", timer: 2000 });
        //   },
        //   error: function(model, error) {
        //     sweetAlert("Oops!", "An error occured while creating a new runner!", "error");
        //     console.log(error);
        //   }
        // });
      },

      render: function() {
        
        return (
          React.createElement("div", {className: 'my-container'}, 
            React.createElement("div", {className: 'wrap'}, 
              React.createElement(SearchBar, null), 
              React.createElement("button", {className: "btn btn-primary", onClick: this.handleSubmit}, "Submit"), 
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
         
          masterModel = new RunnerCollection();

          masterModel.fetch({
            success: function (response) {
              console.log("Success fetch runners list!");
            },
            error: function(model,response,xhr) {
              console.log("Error fetch runners list");
              console.log(response);
              console.log(xhr);        
            }
          });
        },

        render: function (){
        
        React.render(       
          React.createElement(RunnerListMaster, {collection: masterModel}),
          this.el
          );
      } 

    });

    return RunnerListView;
  });
