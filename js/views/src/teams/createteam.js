define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react',
  'backbonemixin',
  'models/createTeamModel'
  ], function($, _, Backbone, React, backboneMixin, CreateTeamModel){

    var CreateTeamMaster = React.createClass({

      mixins: [backboneMixin],

      getInitialState: function () {
        return {
            teamName: ''  
        };
      },

      handleSubmit: function() {

        myTeam = new CreateTeamModel({'tName':this.state.teamName});
        
        myTeam.save(null, {
          success:function(model, response) {
            swal({title:"", text: "Successfully created new team!", type:"success", timer: 2000 });
          },
          error: function(model, error) {
            sweetAlert("Oops!", "An error occured while creating a new team!", "error");
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
                <label>Team Name</label>
                <input type="text" className={"form-control"} value={this.props.teamName} onChange={this.onTeamNameChange} />
              </div>
              <div className={"text-center"}>
                <button className={"btn btn-primary"} onClick={this.handleSubmit}>Submit</button>
              </div>
            </form>       
            </div>          
          </div>
        )
      },

      onTeamNameChange: function (e) {
        this.setState({ teamName: e.target.value });
      }

    });
    
    var CreateTeamView = Backbone.View.extend({
    
      el: $('#mainContent'),
      events: {
      },

      initialize: function() {          
      },

      render: function (){
        
        React.render(       
          <CreateTeamMaster/>,
          this.el
        );
      } 
    });

    return CreateTeamView;
  });

