define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react'
  ], function($, _, Backbone, React){
    
  
    var TMRunnersTable = React.createClass({

      handleSelect: function(i) {

          var selectedRunner = this.props.teamRunners[i];
          this.props.handleRunnerSelect(selectedRunner.runnerID);
      },

      render: function() {
       
        return (          
            <div className={"small-table"} >
              <table className={"table table-responsive"}>
                <thead>
                  <tr>
                    <th className={"centered"}>Name</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.teamRunners.map(function(runner, i) {
                      
                      return (<tr onClick={this.handleSelect.bind(this, i)} key={i}>
                                <td>
                                {runner.firstName} {runner.lastName}
                                </td>
                                <td>
                                Remove From Team
                                </td>
                              </tr>);
                    },this)}
                </tbody>
              </table>

            </div>          
        )
      }

    });

    return TMRunnersTable;

  });
