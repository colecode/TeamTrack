define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react',
  'backbonemixin',
  'views/build/searchbar',
  'views/build/runnertable',
  'collections/runners',
  'reactboot',
  'models/runnerToRosterModel'
  ], function($, _, Backbone, React, backboneMixin, SearchBar, RunnerTable, RunnerCollection, ReactBoot, RunnerRosterModel){
    
    var teamId = -1;

    var SimpleRunnersTableClass = React.createClass({displayName: "SimpleRunnersTableClass",

      mixins: [backboneMixin],

      getInitialState: function () {
        return {
            selectedRunners:[],
            allRunners:[]
        };
      },

      handleSubmit: function() {
        var flag = false;

        //for each object in selected runners
        for (var i = this.state.selectedRunners.length - 1; i >= 0; i--) {
          
          var tmp = this.state.selectedRunners[i];
          var myRunner = new RunnerRosterModel({'tId':teamId, 'rId':tmp.id});

          myRunner.save(null, {
            success:function(model, response) {
              // 
            },
            error: function(model, error) {
              console.log(error);
              flag = true;      
            }
          });
        };

        if(flag)
        {
          sweetAlert("Oops!", "An error occured while building your roster!", "error");      
        }
        else
        {
          swal({title:"", text: "You have successfully created a new team!", type:"success"});
        }

      },

      handleSearch: function(val) {
  
        if(val.searchTerm)
        {
          $.ajax({
            url:"api/index.php/runners/" + val.searchTerm,
            type:"GET",
            success:function(data){
              this.setState({allRunners: data});
            }.bind(this),     
            dataType:"json"
          });
        }
        else
        {
          this.loadListfromServer();
        }
      },

      loadListfromServer: function() {
        
        $.ajax({
          url:"api/index.php/runners",
          type:"GET",
          success:function(data){
            this.setState({allRunners: data});
          }.bind(this),     
          dataType:"json"
        });
      },

      componentDidMount: function() {
        this.loadListfromServer();
      },

      render: function() {
        var Button = ReactBoot.Button;
        var nextBtnStyle = {paddingTop: 20};

        return (
          React.createElement("div", {className: 'my-container'}, 
            React.createElement("div", {className: 'wrap'}, 
              React.createElement(SearchBar, {onSearch: this.handleSearch}), 
              React.createElement("div", {className: 'runner-table-div'}, 
                React.createElement(RunnerTable, {selectedRunners: this.state.selectedRunners, runners: this.state.allRunners})
              ), 
              React.createElement("div", {style: nextBtnStyle}, 
                React.createElement(Button, {bsStyle: "success", bsSize: "large", block: true, onClick: this.handleSubmit}, "Finish")
              )
            )
          )
        )
      }
    });

    return SimpleRunnersTableClass;
  });
