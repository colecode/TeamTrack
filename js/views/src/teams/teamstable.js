define(
  [
  'jquery',
  'underscore',
  'react',
  'reactboot',
  ], function($, _, React, ReactBoot){

    var TeamsTable = React.createClass({
       
      handleSelect: function() {
              
      },

      render: function() {
        var PanelGroup = ReactBoot.PanelGroup;
        var Panel = ReactBoot.Panel;
        // for each team
        // generate a panel
            // for each panel
            // list all members of the team

            //<Panel header="Panel 1" eventKey='1'>Panel 1 content</Panel>
                //<Panel header="Panel 2" eventKey='2'>Panel 2 content</Panel>
        return (
            
            <div id="teamsTableComponent">
             <PanelGroup defaultActiveKey='1' accordion>
                
                {this.props.myteams.map(function(team, i) {
                      return (<Panel key={i} header={team.teamName}>
                                test
                              </Panel>);
                    },this)}
             </PanelGroup>
            </div>              
          )
      }
    });

    return TeamsTable;
});


