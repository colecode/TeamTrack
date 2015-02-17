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
            selectedRunners:[] 
        };
      },

      handleTeamSubmit: function() {
        var teamArray = this.state.selectedRunners;
      },

      populateList: function() {
        
          masterModel = new RunnerCollection();

          masterModel.fetch({
            success: function (response) {
              console.log("Success fetch runners list!");
            },
            error: function(model,response,xhr) {
              console.log("Error fetch runners list");
              console.log(response);
              console.log(xhr);        
            }
          });

      },

      componentDidMount: function() {
        this.populateList();
      },

      render: function() {
        var Button = ReactBoot.Button;
        
        return (
          <div className={'my-container'}>
            <div className={'wrap'}>           
              <SearchBar />
              <div className={'runner-table-div'}>
                <RunnerTable selectedRunners={this.state.selectedRunners} runners={this.props.collection} onTeamSubmit={this.handleTeamSubmit} />
              </div>
              <br/>
              <Button bsStyle="primary" bsSize="large" block onClick={this.handleTeamSubmit}>Create Team</Button>
            </div>          
          </div>
        )
      }
    });

    var RunnerListView = Backbone.View.extend({
      
      el: $('#mainContent'),
      events: {
          // none
        },

        initialize: function() {
         
          masterModel = new RunnerCollection();

          masterModel.fetch({
            success: function (response) {
              console.log("Success fetch runners list!");
            },
            error: function(model,response,xhr) {
              console.log("Error fetch runners list");
              console.log(response);
              console.log(xhr);        
            }
          });
        },

        render: function (){
        
        React.render(       
          <RunnerListMaster collection={masterModel} />,
          this.el
          );
      } 

    });

    return RunnerListView;
  });
