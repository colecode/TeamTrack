define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react',
  'backbonemixin',
  'models/createTeamModel'
  ], function($, _, Backbone, React, backboneMixin, CreateTeamModel){

    // var CreateTeamModel = Backbone.Model.extend({
    //   defaults: {
    //     tName: ""
    //   },
    //   url : 'api/index.php/teams'
    // });

    // Holds the UI and data-bind
    var CreateTeamMaster = React.createClass({

      mixins: [backboneMixin],

      getInitialState: function () {
        return {
            teamName: ''  
        };
      },

      handleSubmit: function() {

        myTeam = new CreateTeamModel({'tName':this.state.teamName});
        console.log(myTeam);
        myTeam.save(null, {
          //wait:true,
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

