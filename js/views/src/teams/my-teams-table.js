define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react'
  ], function($, _, Backbone, React){
    
    var MyTeamsTable = React.createClass({

      getInitialState: function () {
        return {
            myTeams:[]
        };
      },

      handleSelect: function(i) {

          var selectedTeam = this.state.myTeams[i];
          this.props.onTeamSelect(selectedTeam.teamID);
      },

      loadDataFromServer: function() {
        
        // Hardcoded until User Mgmt is setup
        var coachID = 3;

        $.ajax({
          url:"api/index.php/getteamspercoach/" + coachID,
          type:"GET",
          success:function(data){            
            this.setState({myTeams: data});  
          }.bind(this),     
          dataType:"json"
        });

      },

      componentDidMount: function() {
        this.loadDataFromServer();
      },

      render: function() {
       
        return (          
            <div>
              <table className={"table table-responsive"}>
                <thead>
                  <tr>
                    <th className={"centered"}>Team Name</th>
                    <th className={"centered"}>School</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.myTeams.map(function(team, i) {
                      return (<tr onClick={this.handleSelect.bind(this, i)} key={i}>
                                <td>
                                {team.teamName}
                                </td>
                                <td>
                                {team.schoolName}
                                </td>
                              </tr>);
                    },this)}
                </tbody>
              </table>
            </div>          
        )
      }

    });

    return MyTeamsTable;

  });
