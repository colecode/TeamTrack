define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react',
  'reactboot',
  ], function($, _, Backbone, React, ReactBoot){

    var RunnerTeamsTable = React.createClass({
      
      render: function() {
        var Table = ReactBoot.Table;

        return (
            
            <div>
              <Table>
              <thead>
                <tr>
                <th>Team Name</th>
                <th>Coach</th>
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
              </Table>
            </div>              
          )
      }
    });

    return RunnerTeamsTable;
});


