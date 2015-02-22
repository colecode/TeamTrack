define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react',
  'backbonemixin',
  'reactboot',
  'views/build/teamstable'
  ], function($, _, Backbone, React, backboneMixin, ReactBoot, TeamsTable){

    var MyTeamsComponent = React.createClass({

      mixins: [backboneMixin],

      getInitialState: function () {
        return {
            allTeams:[]
        };
      },


      loadListfromServer: function() {
        
        $.ajax({
          url:"api/index.php/myteams",
          type:"GET",
          success:function(data){
            this.setState({allTeams: data});
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
              <div className={'my-teams-div'}>
                <TeamsTable myteams={this.state.allTeams} />
              </div>
            </div>          
          </div>
        )
      }
    });

    var MyTeamsView = Backbone.View.extend({
      
      el: $('#mainContent'),
      events: {
  
        },

        initialize: function() { 
          
        },

        render: function (){
        
        React.render(       
          <MyTeamsComponent/>,
          this.el
          );
      } 

    });

    return MyTeamsView;
  });
