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

    var RunnerListMaster = React.createClass({

      mixins: [backboneMixin],

      getInitialState: function () {
        return {
            selectedRunners:[],
            allRunners:[]
        };
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
      },

      render: function() {
        var Button = ReactBoot.Button;
        
        return (
          <div className={'my-container'}>
            <div className={'wrap'}>           
              <SearchBar onSearch={this.handleSearch} />
              <div className={'runner-table-div'}>
                <RunnerTable selectedRunners={this.state.selectedRunners} runners={this.state.allRunners} onTeamSubmit={this.handleTeamSubmit} />
              </div>
            </div>          
          </div>
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
          <RunnerListMaster/>,
          this.el
          );
      } 

    });

    return RunnerListView;
  });
