define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react',
  'backbonemixin',
  'models/runner'
  ], function($, _, Backbone, React, backboneMixin, RunnerModel){

    // Initialize the model here so it's scope can be reached in MyWidget
    var masterModel;

    var CreateRunnerMaster = React.createClass({

      mixins: [backboneMixin],

      render: function() {

        return (
          <div className={'my-container'}>
            <div className={'wrap'}>
            
            <form role="form">
              <div className={"form-group"}>
                <label>First name</label>
                <input type="text" className={"form-control"} id="createRunnerFirst" placeholder="First name" />
              </div>
              <div className={"form-group"}>
                <label>Last name</label>
                <input type="text" className={"form-control"} id="createRunnerLast" placeholder="Last name" />
              </div>
              <div className={"form-group"}>
                <label>School</label>
                <input type="text" className={"form-control"} id="createRunnerSchool" placeholder="School" />
              </div>
              <div className={"text-center"}>
                <button className={"btn btn-primary"}>Submit</button>
              </div>
            </form>       
            </div>          
          </div>
          )
      }
    });

    var CreateRunnerView = Backbone.View.extend({
      
      el: $('#mainContent'),
      events: {
          // none
      },

      initialize: function() {
          // none
      },

      render: function (){
        // **IMPORTANT** This inital props has to be named 'collection' //
        React.render(       
          <CreateRunnerMaster/>,
          this.el
        );
      } 

      });

    return CreateRunnerView;
  });

