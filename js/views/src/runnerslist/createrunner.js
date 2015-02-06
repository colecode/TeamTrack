define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react',
  'backbonemixin',
  'models/createRunnerModel',
  'collections/dropdownCollection',
  'views/build/dropdownContainer',
  'reactboot'
  ], function($, _, Backbone, React, backboneMixin, CreateRunnerModel, DropdownCollection, DropdownContainer, ReactBoot){

    //var dropdownCollection;
    //var states_dropdownCollection;
    var dmnArray_Schools = [];
    var dmnArray_States = [];

    var CreateRunnerMaster = React.createClass({

      mixins: [backboneMixin],
      mixins: [React.addons.LinkedStateMixin],

      getInitialState: function () {
        return {
            firstName: '',
            lastName: '',
            schoolName: '',
            stateName:''  
        };
      },

      handleSubmit: function() {

        myRunner = new CreateRunnerModel({'fName':this.state.firstName, 'lName':this.state.lastName, 'sName':this.state.schoolName});

        myRunner.save(null, {
          success:function(model, response) {
            swal({title:"", text: "Successfully created new runner!", type:"success", timer: 2000 });
          },
          error: function(model, error) {
            sweetAlert("Oops!", "An error occured while creating a new runner!", "error");
            console.log(error);
          }
        });
      },

      render: function() {
        
        return (
          <div className={'my-container'}>
            <div className={'wrap'}>
            <form role="form">
              <div className={"form-group"}>
                <label>First name</label>
                <input type="text" className={"form-control"} valueLink={this.linkState('firstName')} />
                
              </div>
              <div className={"form-group"}>
                <label>Last name</label>
                <input type="text" className={"form-control"} valueLink={this.linkState('lastName')} />

              </div>
              <div className={"form-group"}>
                <label>School</label><br/>
                <ul className={"list-inline"}>
                  <li>
                    <DropdownContainer allDomains={this.props.dmnArray_Schools} dropTitle="School" />
                  </li>
                  <li>
                    <input type="text" className={"form-control"} valueLink={this.linkState('schoolName')} />
                  </li>
                </ul>
              </div>
              <div className={"form-group"}>
                <label>State</label><br/>  
                <ul className={"list-inline"}>
                  <li>
                    <DropdownContainer allDomains={this.props.dmnArray_States} dropTitle="State"/>
                  </li>
                  <li>
                    <input type="text" className={"form-control"} value={this.props.stateName}/>
                  </li>
                </ul>
              </div>
              <div className={"text-center"}>
                <button className={"btn btn-primary"} onClick={this.handleSubmit}>Submit</button>
              </div>
            </form>       
            </div>          
          </div>
        )
      },

      // No longer used - leave as an example
      onFirstNameChange: function (e) {
        this.setState({ firstName: e.target.value });
      }   

    });
    
    var CreateRunnerView = Backbone.View.extend({
    
      el: $('#mainContent'),
      events: {
      },

      initialize: function() {  

        $.ajax({
            url:"api/index.php/dmnSchools",
            type:"GET",
            async:false,
            success:function(msg){
               dmnArray_Schools = msg;
            },
            dataType:"json"
        });

        $.ajax({
            url:"api/index.php/dmnStates",
            type:"GET",
            async:false,
            success:function(msg){
              dmnArray_States = msg;
            },
            dataType:"json"
        });

        
      },

      render: function (){
        
        React.render(       
          <CreateRunnerMaster dmnArray_Schools={dmnArray_Schools} dmnArray_States={dmnArray_States}/>,
          this.el
        );
      } 
    });

    return CreateRunnerView;
  });

