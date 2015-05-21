define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react',
  'backbonemixin',
  'reactboot',
  ], function($, _, Backbone, React, backboneMixin, ReactBoot){

    var runnerId = -1;

    var RunnerProfileClass = React.createClass({

      mixins: [backboneMixin],
      mixins: [React.addons.LinkedStateMixin],

      getInitialState: function () {
        return {
            firstName: '',
            lastName: '',
            age: '',  
            stateName:'',
            schoolName: ''   
        };
      },

      loadDataFromServer: function() {
        
        $.ajax({
          url:"api/index.php/getprofile/" + runnerId,
          type:"GET",
          success:function(data){            
            this.setState({firstName: data[0].firstName});
            this.setState({lastName: data[0].lastName});
            this.setState({schoolName: data[0].schoolName});
            this.setState({stateName: data[0].stateName});
          }.bind(this),     
          dataType:"json"
        });

      },

      // Called immediately when the React class is rendered - better option than passing in loaded domain arrays from via Backbone View
      componentDidMount: function() {
        this.loadDataFromServer();
      },

      render: function() {

        var Label = ReactBoot.Label;

        return (

          <div className={'left-align-container'}>
            <h3>Runner Profile</h3>
            <div className={'input-group margin-bottom-sm form-field-sizes'}>
              <h4>First Name: {this.state.firstName}</h4> 
              <h4>Last Name: {this.state.lastName}</h4> 
              <h4>School Name: {this.state.schoolName}</h4>
              <h4>State Name: {this.state.stateName}</h4>
            </div>
          </div>
        )
      }

    });
    
    var RunnerProfileView = Backbone.View.extend({
    
      el: $('#mainContent'),
      events: {
        
      },

      initialize: function(options) { 

          if(options)
          {
            runnerId = options.runnerId;
          }
        },

      render: function (){
        
        React.render(       
          <RunnerProfileClass/>,
          this.el
        );
      } 
    });

    return RunnerProfileView;
  });

