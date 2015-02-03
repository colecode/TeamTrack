define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react',
  'backbonemixin',
  'models/createRunnerModel'
  ], function($, _, Backbone, React, backboneMixin, CreateRunnerModel){

    // var CreateRunnerModel = Backbone.Model.extend({
    //   defaults: {
    //     fName: "", 
    //     lName: "",
    //     sName:""
    //   },
    //   url : 'api/index.php/runners'
    // });

    var CreateRunnerMaster = React.createClass({

      mixins: [backboneMixin],

      getInitialState: function () {
        return {
            firstName: '',
            lastName: '',
            schoolName: ''    
        };
      },

      handleSubmit: function() {

        myRunner = new CreateRunnerModel({'fName':this.state.firstName, 'lName':this.state.lastName, 'sName':this.state.schoolName});

        myRunner.save(null, {
          success:function(model, response) {
            console.log('Successfully saved!');
            console.log(response);
          },
          error: function(model, error) {
            console.log('error!!');
            console.log(model.toJSON());
            console.log(error);
          }
        });
      },

      render: function() {
        
        return (
          <div className={'my-container'}>
            <div className={'wrap'}>
            <form role="form">
              <div className={"form-group"}>
                <label>First name</label>
                <input type="text" className={"form-control"} value={this.props.firstName} onChange={this.onFirstNameChange} />
              </div>
              <div className={"form-group"}>
                <label>Last name</label>
                <input type="text" className={"form-control"} value={this.props.lastName} onChange={this.onLastNameChange} />
              </div>
              <div className={"form-group"}>
                <label>School</label>
                <input type="text" className={"form-control"} value={this.props.schoolName} onChange={this.onSchoolNameChange} />
              </div>
              <div className={"text-center"}>
                <button className={"btn btn-primary"} onClick={this.handleSubmit}>Submit</button>
              </div>
            </form>       
            </div>          
          </div>
        )
      },

      onFirstNameChange: function (e) {
        this.setState({ firstName: e.target.value });
      },

      onLastNameChange: function (e) {
        this.setState({ lastName: e.target.value });
      },

      onSchoolNameChange: function (e) {
        this.setState({ schoolName: e.target.value });
      }

    });
    
    var CreateRunnerView = Backbone.View.extend({
    
      el: $('#mainContent'),
      events: {
      },

      initialize: function() {          
      },

      render: function (){
        
        React.render(       
          <CreateRunnerMaster/>,
          this.el
        );
      } 
    });

    return CreateRunnerView;
  });

