define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react',
  'backbonemixin',
  ], function($, _, Backbone, React, backboneMixin){
    
    var schoolID = -1;

    var SimpleRunnersTableClass = React.createClass({

      mixins: [backboneMixin],

      getInitialState: function () {
        return {
            selectedRunners:[],
            allRunners:[]
        };
      },

       handleSelect: function(i) {
        $($("#simple-runners-table tbody tr")[i]).toggleClass("info");;
        
        // Index of object
        var a = this.props.selectedRunners.indexOf(this.props.allRunners[i]);
        
        // If object does not exist in array, add it
        if(a == -1)
        {
          this.props.selectedRunners.push(this.props.allRunners[i]); 
        }
        // Remove it
        else
        {
          this.props.selectedRunners.splice(a,1);
        }
              
      },

      render: function() {
       
        return (          
            <div className={"small-table"}>
              <table id="simple-runners-table" className={"table table-responsive"}>
                <thead>
                  <tr>
                    <th className={"centered"}>First Name</th>
                    <th className={"centered"}>Last Name</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.allRunners.map(function(runner, i) {
                      return (<tr onClick={this.handleSelect.bind(this, i)} key={i}>
                                <td>
                                {runner.firstName}
                                </td>
                                <td>
                                {runner.lastName}
                                </td>
                              </tr>);
                    },this)}
                </tbody>
              </table>

            </div>          
        )
      }

    });

    return SimpleRunnersTableClass;

  });
