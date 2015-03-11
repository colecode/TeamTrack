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

    var NavBarComponent = React.createClass({displayName: 'NavBarComponent',

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
        $("#mainPageBar").hide();
        $("#bufferDiv").hide();
      },

      render: function() {
        var Button = ReactBoot.Button;
        
        return (
          React.createElement("div", {className: 'my-container'}, 
            React.createElement("div", {className: 'wrap'}, 
              React.createElement("div", {className: 'my-teams-div'}, 
                React.createElement(TeamsTable, {myteams: this.state.allTeams})
              )
            )
          )
        )
      }
    });

    return NavBarComponent;
  });
