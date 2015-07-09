define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react',
  'backbonemixin',
  'reactboot',
  ], function($, _, Backbone, React, backboneMixin, ReactBoot){
    
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
        $($("#myTable tbody tr")[i]).toggleClass("info");;
        
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

      loadListfromServer: function() {
        
        $.ajax({
          url:"api/index.php/runnersperschool",
          type:"GET",
          success:function(data){
            this.setState({allRunners: data});
          }.bind(this),     
          dataType:"json"
        });
      },

      componentDidMount: function() {
        //this.loadListfromServer();
      },

      render: function() {
       
        var Table = ReactBoot.Table;

        return (          
            <div>
              <Table>
                <thead>
                  <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>School</th>
                  <th>Gender</th>
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
                                <td>
                                {runner.schoolName}
                                </td>
                                <td>
                                {runner.gender}
                                </td>
                              </tr>);
                    },this)}
                </tbody>
              </Table>
            </div>          
        )
      }

    });

    return SimpleRunnersTableClass;

  });
