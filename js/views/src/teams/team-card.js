define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react',
  'reactboot'
  ], function($, _, Backbone, React, ReactBoot){
    
    var TeamCardClass = React.createClass({
      handleSubmit: function() {
        console.log('test2');
      },
      render: function() {
        
        var Well = ReactBoot.Well;
        var Table = ReactBoot.Table;
        var Button = ReactBoot.Button;
        
        var headerStyle = {
          marginTop: '0'
        };
        var wellStyle = {
          backgroundColor: '#4CDA84'
        };

        return (  
       
          <div>   
            <Well style={wellStyle}>
              <h3 style={headerStyle}>Team Card</h3>
              <div>
                <p>{this.props.teamName}</p>
              </div>
              <div>
                <p>{this.props.stateName}</p>
              </div> 
              <div>
               <p>{this.props.schoolName}  </p>
              </div> 
              <Table id='card-runners-table'>
                <thead>
                  <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.selectedRunners.map(function(runner, i) {
                      return (<tr key={i}>
                                <td>
                                {runner.firstName}
                                </td>
                                <td>
                                {runner.lastName}
                                </td>
                              </tr>);
                    },this)}
                </tbody>
              </Table> 
            </Well>
        </div>        
        )
      }

    });

    return TeamCardClass;

  });
