define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react'
  ], function($, _, Backbone, React){

    var NavBarComponent = React.createClass({displayName: 'NavBarComponent',

      render: function() {
        
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
