define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react'
  ], function($, _, Backbone, React){
    
    var TeamCardClass = React.createClass({

      render: function() {
       
        return (          
          <div >   
          <div className={'input-group form-field-sizes'}>
            {this.props.teamName}
          </div>
          <div className={'input-group form-field-sizes'}>
            {this.props.schoolName}
          </div> 
          <div className={'input-group form-field-sizes'}>
           {this.props.stateName}  
          </div>  
        </div>        
        )
      }

    });

    return TeamCardClass;

  });
