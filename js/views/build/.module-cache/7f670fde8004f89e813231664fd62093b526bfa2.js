define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react',
  'backbonemixin',
  //'models/team',
  'views/build/searchbar',
  'views/build/runnertable'
  ], function($, _, Backbone, React, backboneMixin){

    // Initialize the model here so it's scope can be reached in MyWidget
    var masterModel;

    var MessageModel = Backbone.Model.extend({
      defaults: {
        message: "Text Message"
      }
    });

    var TeamCollection = Backbone.Collection.extend({
      url : 'api/example1.php',
      model: MessageModel
    });

    var RunnerListMaster = React.createClass({displayName: 'RunnerListMaster',

      mixins: [backboneMixin],

      handleClick: function() {

        sweetAlert("!!", "Sweeeeeeet", "error");
        // masterModel.fetch({

        //   success: function (response) {
        //     console.log("Success!");
        //     console.log(masterModel.toJSON());
        //   },
        //   error: function(model,response,xhr) {
        //     console.log("Error");
        //     console.log(response);
        //     console.log(xhr);        
        //   }
        // });
      },

      render: function() {

        return (
          React.createElement("div", {className: 'my-container'}, 
            React.createElement("div", {className: 'wrap'}, 
              React.createElement("p", null, this.props.model), 
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
        //masterModel = new MessageModel();

        //var todos = new TodosCollection([myTodo]);
        //var myMsg = new MessageModel({message:'Read the whole book', id: 2});
        masterModel = new TeamCollection();

        console.log(masterModel.toJSON());

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
