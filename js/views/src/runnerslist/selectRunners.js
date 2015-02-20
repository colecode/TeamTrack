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

    var RunnerListMaster = React.createClass({

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
                <RunnerTable selectedRunners={this.state.selectedRunners} runners={this.state.allRunners}/>
              </div>
              <div style={nextBtnStyle}>
                <Button bsStyle="success" bsSize="large" block onClick={this.handleSubmit}>Finish</Button>
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
            teamId = options.teamId;
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
