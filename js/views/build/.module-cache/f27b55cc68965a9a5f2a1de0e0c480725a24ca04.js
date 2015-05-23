define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react',
  'backbonemixin',
  'reactboot',
  'fixeddatatable'
  ], function($, _, Backbone, React, backboneMixin, ReactBoot, FixedDataTable){

    var runnerId = -1;

    var RunnerProfileClass = React.createClass({displayName: 'RunnerProfileClass',

      mixins: [backboneMixin],
      mixins: [React.addons.LinkedStateMixin],

      getInitialState: function () {
        return {
            firstName: '',
            lastName: '',
            age: '',  
            stateName:'',
            schoolName: '',
            races:[]  
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
            this.setState({races: data});  
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
        var rows = [];

        function rowGetter(rowIndex) {
          
          $.ajax({
            url:"api/index.php/getraces/" + runnerId,
            type:"GET",
            success:function(data){            
              //this.setState({races: data}); 
              rows = data;
              return rows[rowIndex]; 
            }.bind(this),     
            dataType:"json"
        });
          //return rows[rowIndex];
        };

        return (

          React.createElement("div", {className: 'left-align-container'}, 
          React.createElement("div", {id: "profile-header"}, 
            React.createElement("h3", null, "Runner Profile"), 
            React.createElement("div", {className: 'input-group margin-bottom-sm form-field-sizes'}, 
              React.createElement("h4", null, "First Name: ", this.state.firstName), 
              React.createElement("h4", null, "Last Name: ", this.state.lastName), 
              React.createElement("h4", null, "School Name: ", this.state.schoolName), 
              React.createElement("h4", null, "State Name: ", this.state.stateName)
            )
          ), 
          React.createElement("div", {id: "races-box"}, 
            React.createElement("h3", null, "Races"), 
            React.createElement(Table, {
            rowHeight: 50, 
            rowGetter: rowGetter, 
            rowsCount: rows.length, 
            width: 500, 
            height: rows.length * 50, 
            headerHeight: 50}, 
            React.createElement(Column, {label: "Date", width: 100, dataKey: 0}), 
            React.createElement(Column, {label: "Race Name", width: 100, dataKey: 1}), 
            React.createElement(Column, {label: "Finish Time", width: 100, dataKey: 2})
            )
          )
          )
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
          React.createElement(RunnerProfileClass, null),
          this.el
        );
      } 
    });

    return RunnerProfileView;
  });

