define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react'
  ], function($, _, Backbone, React){
    
    var MyTeamsTable = React.createClass({displayName: "MyTeamsTable",

      getInitialState: function () {
        return {
            myTeams:[]
        };
      },

      handleSelect: function(i) {

          var selectedTeam = this.state.myTeams[i];
          this.props.onTeamSelect(selectedTeam.teamID);
      },

      loadDataFromServer: function() {
        
        // Hardcoded until User Mgmt is setup
        var coachID = 3;

        $.ajax({
          url:"api/index.php/getteamspercoach/" + coachID,
          type:"GET",
          success:function(data){            
            this.setState({myTeams: data});  
          }.bind(this),     
          dataType:"json"
        });

      },

      componentDidMount: function() {
        this.loadDataFromServer();
      },

      render: function() {
       
        return (          
            React.createElement("div", null, 
              React.createElement("table", {className: "table table-responsive"}, 
                React.createElement("thead", null, 
                  React.createElement("tr", null, 
                    React.createElement("th", {className: "centered"}, "Team Name"), 
                    React.createElement("th", {className: "centered"}, "School")
                  )
                ), 
                React.createElement("tbody", null, 
                  this.state.myTeams.map(function(team, i) {
                      return (React.createElement("tr", {onClick: this.handleSelect.bind(this, i), key: i}, 
                                React.createElement("td", null, 
                                team.teamName
                                ), 
                                React.createElement("td", null, 
                                team.schoolName
                                )
                              ));
                    },this)
                )
              )
            )          
        )
      }

    });

    return MyTeamsTable;

  });
