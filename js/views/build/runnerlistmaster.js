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

    var RunnerListClass = React.createClass({displayName: "RunnerListClass",

      mixins: [backboneMixin],

      getInitialState: function () {
        return {
            selectedRunners:[],
            allRunners:[]
        };
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
          url:"api/index.php/getrunners",
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
        
        return (
          React.createElement("div", {className: 'container'}, 
              React.createElement(SearchBar, {onSearch: this.handleSearch})
          )
        )
      }
    });

    var RunnerListView = Backbone.View.extend({
      
      el: $('#mainContent'),
      events: {
  
        },

        initialize: function() { 

        },

        render: function (){
        
        React.render(       
          React.createElement(RunnerListClass, null),
          this.el
          );
      } 

    });

    return RunnerListView;
  });



// <div className={'runner-table-div'}>
//                 <RunnerTable selectedRunners={this.state.selectedRunners} runners={this.state.allRunners} onTeamSubmit={this.handleTeamSubmit} />
//               </div>
