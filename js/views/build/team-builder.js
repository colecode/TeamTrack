define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react',
  'backbonemixin',
  'reactboot',
  'views/build/createteam',
  'views/build/createrunner',
  'views/build/simple-runners-table',
  'views/build/team-card',
  'models/create-team-model',
  'models/team-roster-model',
  
  ], function($, _, Backbone, React, backboneMixin, ReactBoot, CreateTeam, CreateRunner, SimpleRunnersTable, TeamCard, CreateTeamModel, TeamRosterModel){

    var OverlayMixin = ReactBoot.OverlayMixin;

    const CreateRunnerModal = React.createClass({displayName: "CreateRunnerModal",

      mixins: [OverlayMixin],
      
      getInitialState: function () {
        return {
            showModal: true
        };
      },

      handleToggle: function() {
        this.setState({showModal:!this.state.showModal});
      },

      handleCreateRunner: function() {
        
        var schoolCode = this.props.schoolCode;

        $.ajax({
          url:"api/index.php/getrunnersperschool/" + schoolCode,
          type:"GET",
          success:function(data){
            this.setState({allRunners: data.slice() }) ;
          }.bind(this), 
          error:function(err) {
            console.log('error building runners list');
            console.log(err);
          },    
          dataType:"json"
        });

      },

      render: function() {     
          return (React.createElement("div", null));
      },

      renderOverlay: function() {

       var Modal = ReactBoot.Modal;
       var Button = ReactBoot.Button;

       if (!this.state.showModal) {
            return React.createElement("span", null);
        }

        return (
              React.createElement(Modal, {title: "Create Runner", onRequestHide: this.handleToggle}, 
                React.createElement("div", {className: "modal-body"}, 
                  React.createElement(CreateRunner, {schoolCode: this.props.schoolCode, handleCreateRunner: this.handleCreateRunner})
                ), 
                React.createElement("div", {className: "modal-footer"}, 
                  React.createElement(Button, {onClick: this.handleToggle}, "Close")
                )
              )
          );
        }
           
    });



    var TeamBuilderClass = React.createClass({displayName: "TeamBuilderClass",

      mixins: [backboneMixin],
      

      getInitialState: function () {
        return {
            selectedRunners:[],
            allRunners:[],
            teamName: '',
            schoolName: '',
            schoolCode: -1,
            showModal: false,
        };
      },

      handleSchoolSelect: function(val) {
        
        this.setState({schoolCode: val.selectedDomain.domainCode});
        this.setState({schoolName: val.selectedDomain.children});

        $.ajax({
          url:"api/index.php/getrunnersperschool/" + val.selectedDomain.domainCode,
          type:"GET",
          success:function(data){
            this.setState({allRunners: data.slice() }) ;
          }.bind(this), 
          error:function(err) {
            console.log('error building runners list based on school selection');
            console.log(err);
          },    
          dataType:"json"
        });
      },

      handleTeamNameUpdate: function(val) {
        this.setState({teamName:val.teamName});
      },

      handleStateNameUpdate: function(val) {
        this.setState({stateName:val.stateName});
      },

      handleSubmit: function() {
        var myParent = this;
        var myTeam = new CreateTeamModel({'teamName':this.state.teamName, 'fk_schoolID':this.state.schoolCode, 'fk_coachID':3});
        
        myTeam.save(null, {
          success:function(model, response) {

            console.log('success! now populating TeamRoster....');

            // Loop through all selected runners and insert into TeamRoster table
            for (var i = myParent.state.selectedRunners.length - 1; i >= 0; i--) {
          
              var tmp = myParent.state.selectedRunners[i];
              var myRoster = new TeamRosterModel({'fk_teamID':response, 'fk_runnerID':tmp.runnerID});

              myRoster.save(null, {
                success:function(model, response) {
                  console.log('successfully added runner to roster!');
                },
                error: function(model, error) {
                  console.log(error);
                }
              });
            };

          },
          error: function(model, error) {
            
            console.log(error);
          }
        });   
      },

      openModal: function(){
        this.setState({ showModal: true });
      },

      handleCreateRunner: function() {

        var schoolCode = this.state.schoolCode;

        $.ajax({
          url:"api/index.php/getrunnersperschool/" + schoolCode,
          type:"GET",
          success:function(data){
            this.setState({allRunners: data.slice() }) ;
          }.bind(this), 
          error:function(err) {
            console.log('error building runners list based on school selection');
            console.log(err);
          },    
          dataType:"json"
        });
      },

      render: function() {

        return (
            React.createElement("div", {className: 'container'}, 
                React.createElement("div", {className: "row row-padding"}, 
                  React.createElement("div", {className: "col-md-12 centered"}, 
                    React.createElement("h4", null, "Enter Team Description"), 
                    React.createElement(CreateTeam, {onSchoolSelect: this.handleSchoolSelect, onTeamNameUpdate: this.handleTeamNameUpdate, onStateNameUpdate: this.handleStateNameUpdate})
                  )
                ), 
                React.createElement("div", {className: "row row-padding"}, 
                  React.createElement("div", {className: "col-md-12 centered"}, 
                    React.createElement("h4", null, "Select Runners"), 
                    React.createElement(SimpleRunnersTable, {selectedRunners: this.state.selectedRunners, allRunners: this.state.allRunners})
                  )
                ), 
                React.createElement("div", {className: "row-padding"}, 
                  React.createElement("div", {className: "text-center button-block"}, 
                    React.createElement("button", {className: "btn btn-block btn-primary"}, "Done")
                  )
                )
            )
        )
      }
    });
    
    var TeamBuilderView = Backbone.View.extend({
    
      el: $('#mainContent'),
      events: {
        
      },

      initialize: function() { 
        
      },

      render: function (){
        
        React.render(       
          React.createElement(TeamBuilderClass, null),
          this.el
        );
      } 
    });

    return TeamBuilderView;
  });


// var Modal = ReactBoot.Modal;
//         var Button = ReactBoot.Button;
//         return (
//           <Modal show={this.state.showModal} title='Modal heading' onRequestHide={this.handleToggle}>
//             <div className='modal-body'>
//               <CreateRunner schoolCode={this.props.schoolCode} handleCreateRunner={this.handleCreateRunner} />
//             </div>
//             <div className='modal-footer'>
//               <Button onClick={this.handleToggle}>Close</Button>
//             </div>
//           </Modal>

// <Col className='no-padding' xs={4} md={2}>
//                     <h4 style={headerStyle} >Create New Runner</h4>
//                     <CreateRunner schoolCode={this.state.schoolCode} handleCreateRunner={this.handleCreateRunner} />
//                   </Col>

//<TeamCard teamName={this.state.teamName} schoolName={this.state.schoolName} stateName={this.state.stateName} selectedRunners={this.state.selectedRunners} />
