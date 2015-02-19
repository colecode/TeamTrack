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
        $("#pageHeader").html("Step 3: Build your roster");
        $("#mainPageBar").show();
        $("#bufferDiv").show();
      },

      render: function() {
        var Button = ReactBoot.Button;
        var nextBtnStyle = {paddingTop: 20};

        return (
          <div className={'my-container'}>
            <div className={'wrap'}>           
              <SearchBar onSearch={this.handleSearch} />
              <div className={'runner-table-div'}>
                <RunnerTable selectedRunners={this.state.selectedRunners} runners={this.state.allRunners} onTeamSubmit={this.handleTeamSubmit} />
              </div>
              <div style={nextBtnStyle}>
                <Button bsStyle="success" bsSize="large" block href="#home">Finished! Create My Team</Button>
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
