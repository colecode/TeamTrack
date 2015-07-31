 define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react'
  ], function($, _, Backbone, React){

    var MyTeamsTable = React.createClass({

      handleSelect: function(i) {

          var selectedTeam = this.props.teamsPerCoach[i];
          this.props.handleTeamSelect(selectedTeam);
      },

      render: function() {
       
        return (          
            <div className={"medium-table"}>
              <table className={"table table-responsive"}>
                <thead>
                  <tr>
                    <th className={"centered"}>Team Name</th>
                    <th className={"centered"}>School</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.teamsPerCoach.map(function(team, i) {
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
