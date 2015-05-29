define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react',
  'backbonemixin',
  'reactboot',
  'fixeddatatable',
  'views/build/racestable',
  'views/build/splitstable'
  ], function($, _, Backbone, React, backboneMixin, ReactBoot, FixedDataTable, RacesTable, SplitsTable){

    var runnerId = -1;
    var allRows = [];

    var RunnerProfileClass = React.createClass({

      mixins: [backboneMixin],
      mixins: [React.addons.LinkedStateMixin],

      getInitialState: function () {
        return {
            firstName: '',
            lastName: '',
            age: '',  
            stateName:'',
            schoolName: '',
            races:[], 
            selectedRace:[],
            allRaces:[]
        };
      },

      loadDataFromServer: function() {
        
        $.ajax({
          url:"api/index.php/getprofile/" + runnerId,
          type:"GET",
          success:function(data){            
            this.setState({firstName: data[0].firstName});
            this.setState({lastName: data[0].lastName});
            this.setState({schoolName: data[0].schoolName});
            this.setState({stateName: data[0].stateName});
          }.bind(this),     
          dataType:"json"
        });

        $.ajax({
          url:"api/index.php/getraces/" + runnerId,
          type:"GET",
          success:function(data){            
            this.setState({allRaces: data});  
            //allRows = data;
          }.bind(this),     
          dataType:"json"
        });

      },

      // Called immediately when the React class is rendered - better option than passing in loaded domain arrays from via Backbone View
      componentDidMount: function() {
        this.loadDataFromServer();
      },

      render: function() {

        var Label = ReactBoot.Label;
        var Table = FixedDataTable.Table;
        var Column = FixedDataTable.Column;

        // Table data as a list of array.
        // var rows = [
        // ['a1', 'b1', 'c1'],
        // ['a2', 'b3', 'c2'],
        // ['a3', 'b3', 'c3']  
        // ];
        var rows = allRows;

        // var rows = function getRows() {
        //   $.ajax({
        //       url:"api/index.php/getraces/" + runnerId,
        //       type:"GET",
        //       success:function(data){            
        //         return data;
        //     }.bind(this),     
        //     dataType:"json"
        //   });
        // };

        function rowGetter(rowIndex) {
          return rows[rowIndex];
        };

        // function rowGetter2(rowIndex) {
          
        //   var tet = 1;
        //   $.ajax({
        //     url:"api/index.php/getraces/" + runnerId,
        //     type:"GET",
        //     success:function(data){            
        //       //this.setState({races: data}); 
        //       rows = data;
        //       return rows[rowIndex]; 
        //     }.bind(this),     
        //     dataType:"json"
        // });
        //   //return rows[rowIndex];
        // };

        return (

          <div className={'left-align-container'}>
          <div id="profile-header">
            <h3>Runner Profile</h3>
            <div className={'input-group margin-bottom-sm form-field-sizes'}>
              <h4>First Name: {this.state.firstName}</h4> 
              <h4>Last Name: {this.state.lastName}</h4> 
              <h4>School Name: {this.state.schoolName}</h4>
              <h4>State Name: {this.state.stateName}</h4>
            </div>
          </div>
          <div id="races-box">
            <h3>Races</h3>
            <RacesTable selectedRace={this.state.selectedRace} races={this.state.allRaces} />      
          </div>
          </div>
        )
      }

    });
    
    var RunnerProfileView = Backbone.View.extend({
    
      el: $('#mainContent'),
      events: {
        
      },

      initialize: function(options) { 

          if(options)
          {
            runnerId = options.runnerId;
          }
        },

      render: function (){
        
        React.render(       
          <RunnerProfileClass/>,
          this.el
        );
      } 
    });

    return RunnerProfileView;
  });




// <Table
//             rowHeight={50}
//             rowGetter={rowGetter}
//             rowsCount={rows.length}
//             width={500}
//             height={rows.length * 50}
//             headerHeight={50}>
//             <Column label="Date" width={100} dataKey={0} />
//             <Column label="Race Name" width={100} dataKey={1} />
//             <Column label="Finish Time" width={100} dataKey={2} />
//             </Table>

