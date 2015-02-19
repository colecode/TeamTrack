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
  'reactboot'
  ], function($, _, Backbone, React, backboneMixin, SearchBar, RunnerTable, RunnerCollection, ReactBoot){

    var RunnerListMaster = React.createClass({displayName: 'RunnerListMaster',

      mixins: [backboneMixin],

      getInitialState: function () {
        return {
            selectedRunners:[],
            allRunners:[]
        };
      },

      handleSubmit: function() {
        swal({title:"", text: "You have successfully created a new team!", type:"success"});
      },

      handleSearch: function(val) {
        var test = val.searchTerm;
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
        $("#pageHeader").html("Step 3: Select athelets to add to your team roster");
        $("#mainPageBar").show();
        $("#bufferDiv").show();
      },

      render: function() {
        var Button = ReactBoot.Button;
        var nextBtnStyle = {paddingTop: 20};

        return (
          React.createElement("div", {className: 'my-container'}, 
            React.createElement("div", {className: 'wrap'}, 
              React.createElement(SearchBar, {onSearch: this.handleSearch}), 
              React.createElement("div", {className: 'runner-table-div'}, 
                React.createElement(RunnerTable, {selectedRunners: this.state.selectedRunners, runners: this.state.allRunners, onTeamSubmit: this.handleTeamSubmit})
              ), 
              React.createElement("div", {style: nextBtnStyle}, 
                React.createElement(Button, {bsStyle: "success", bsSize: "large", block: true, href: "#home"}, "Finish")
              )
            )
          )
        )
      }
    });

    var RunnerListView = Backbone.View.extend({
      
      el: $('#mainContent'),
      events: {
  
        },

        initialize: function(options) { 
          if(options)
          {
            var test = options.teamId;
          }
        },

        render: function (){
        
        React.render(       
          React.createElement(RunnerListMaster, null),
          this.el
          );
      } 

    });

    return RunnerListView;
  });
