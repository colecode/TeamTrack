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
            <div className={"mdl-card mdl-shadow--2dp demo-card-wide"}>
              <div className={"mdl-card__title"}>
                <h2 className={"mdl-card__title-text"}>Welcome</h2>
              </div>
              <div className={"mdl-card__supporting-text"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris sagittis pellentesque lacus eleifend lacinia...
              </div>
              <div className={"mdl-card__actions mdl-card--border"}>
                <a className={"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"}>
                  Get Started
                </a>
              </div>
              <div className={"mdl-card__menu"}>
                <button className={"mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect"}>
                  <i className={"material-icons"}>share</i>
                </button>
              </div>
            </div>
        </div>        
        )
      }

    });

    return TeamCardClass;

  });
