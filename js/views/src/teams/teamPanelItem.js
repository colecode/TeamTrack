define(
  [
  'jquery',
  'underscore',
  'react',
  'reactboot',
  ], function($, _, React, ReactBoot){

    var TeamsPanelItem = React.createClass({
       
      handleSelect: function() {
              
      },

      render: function() {
        var PanelGroup = ReactBoot.PanelGroup;
        var Panel = ReactBoot.Panel;
        
        return (
            
            <div id="panelItemDiv">
             <PanelGroup defaultActiveKey='1' accordion>
                
                {this.props.runnersonteam.map(function(runOnTeam, i) {
                      return (<Panel eventKey={i} header={team.teamName}>
                                test {i}
                              </Panel>);
                    },this)}
             </PanelGroup>
            </div>              
          )
      }
    });

    return TeamsPanelItem;
});