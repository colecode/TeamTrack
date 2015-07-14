define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react',
  'reactboot'
  ], function($, _, Backbone, React, ReactBoot){
    
    var TeamCardClass = React.createClass({

      render: function() {
        var Well = ReactBoot.Well;
        var headerStyle = {
          marginTop: '0'
        };
        var wellStyle = {
          backgroundColor: '#4CDA84'
        };

        return (          
          <div>   
            <Well style={wellStyle}>
              <h3 style={headerStyle}>Team Card</h3>
              <div className={'input-group form-field-sizes'}>
                <p>Team Name:</p>{this.props.teamName}
              </div>
              <div className={'input-group form-field-sizes'}>
                <p>State:</p>{this.props.stateName}
              </div> 
              <div className={'input-group form-field-sizes'}>
               <p>School:</p>{this.props.schoolName}  
              </div>  
            </Well>
        </div>        
        )
      }

    });

    return TeamCardClass;

  });
