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
            firstName: 'Hank',
            lastName: 'McCoy',
            age: '',  
            stateName:'',
            schoolName: ''       
        };
      },

      // Load Dmns for dropdowns
      loadDomainsFromServer: function() {
        
        // $.ajax({
        //   url:"api/index.php/dmnStates",
        //   type:"GET",
        //   success:function(data){
        //     this.setState({dmnArray_States: data});
        //   }.bind(this),     
        //   dataType:"json"
        // });

      },

      // Called immediately when the React class is rendered - better option than passing in loaded domain arrays from via Backbone View
      componentDidMount: function() {
        this.loadDomainsFromServer();
      },

      render: function() {

        return (

          <div className={'form-box-wrap'}>
            <h3>Runner Profile</h3>
            <div className={'input-group margin-bottom-sm form-field-sizes'}>
              <h5>First Name</h5>
              <label className={'form-control text-center'} valueLink={this.linkState('firstName')} />
            </div>
            <div className={'input-group margin-bottom-sm form-field-sizes'}>
              <h5>Last Name</h5>
              <label className={'form-control text-center'} valueLink={this.linkState('lasttName')} />
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

