define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react',
  'backbonemixin',
  'views/build/searchbar',
  'views/build/runnertable',
  'collections/runners'
  ], function($, _, Backbone, React, backboneMixin, SearchBar, RunnerTable, RunnerCollection){

    var RunnerListMaster = React.createClass({

      mixins: [backboneMixin],

      handleTeamSubmit: function(teamRunners) {
        var aTeam = teamRunners;
      },

      render: function() {
        
        return (
          <div className={'my-container'}>
            <div className={'wrap'}>
              <SearchBar />
              <RunnerTable runners={this.props.collection} onTeamSubmit={this.handleTeamSubmit} />
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
