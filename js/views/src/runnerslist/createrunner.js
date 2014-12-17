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

    var CreateRunnerModel = Backbone.Model.extend({
      defaults: {
        id: "1",
        firstName: "Harry", 
        lastName: "Potter",
        aSchool: "Hogwarts"
      },
      url: 'api/index.php/runners'
    });

    // Used to hold the STATE of the inputs
    // var CreateRunnerParent = React.createClass({

    //   getInitialState: function() {
    //     return {
    //       firstName: '',
    //       lastName: '',
    //       aSchool: ''
    //     };
    //   },

    //   render: function() {
    //     return (<CreateRunnerMaster 
    //                 firstName={this.state.firstName}
    //                 lastName={this.state.lastName}
    //                 aSchool={this.state.aSchool}/>)
    //   }

    // });

    // Holds the UI and data-bind
    var CreateRunnerMaster = React.createClass({

      mixins: [backboneMixin],

      handleClick: function() {

        console.log('submit clicked!');
        console.log(masterModel);     

      },

      handleChange: function(e) {

      },

      render: function() {
        console.log(masterModel);
        return (
          <div className={'my-container'}>
            <div className={'wrap'}>
            <form role="form">
              <div className={"form-group"}>
                <label>First name</label>
                <input type="text" className={"form-control"} id="createRunnerFirst" placeholder="First name" defaultValue={this.props.firstName}/>
              </div>
              <div className={"form-group"}>
                <label>Last name</label>
                <input type="text" className={"form-control"} id="createRunnerLast" placeholder="Last name" defaultValue={this.props.lastName} />
              </div>
              <div className={"form-group"}>
                <label>School</label>
                <input type="text" className={"form-control"} id="createRunnerSchool" placeholder="School" defaultValue={this.props.aSchool} />
              </div>
              <div className={"text-center"}>
                <button className={"btn btn-primary"} onClick={this.handleClick}>Submit</button>
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
          masterModel = new CreateRunnerModel();
      },

      render: function (){
        
        React.render(       
          <CreateRunnerMaster model={masterModel}/>,
          this.el
        );
      } 

      });

    return CreateRunnerView;
  });

