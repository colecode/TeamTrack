define(
  [
  'jquery',
  'underscore',
  'react',
  ], function($, _, React){

    var RunnerTeamsTable = React.createClass({
      
      render: function() {

        return (
            
            <div className={"medium-table"}>
              <table className={"table table-responsive"}>
              <thead>
                <tr>
                <th className={"centered"}>Team Name</th>
                <th className={"centered"}>Coach</th>
              </tr>
              </thead>
              <tbody>
                {this.props.runnerTeams.map(function(team, j) {
                      return (<tr>
                                <td>
                                {team.teamName}
                                </td>
                                <td>
                                Matt Martin
                                </td>
                              </tr>);
                    },this)}
                </tbody>
              </table>
            </div>              
          )
      }
    });

    return RunnerTeamsTable;
});


