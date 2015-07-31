define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react',
  'backbonemixin',
  'reactboot',
  'views/build/create-team',
  'views/build/createrunner',
  'views/build/simple-runners-table',
  'views/build/team-card',
  'models/create-team-model',
  'models/team-roster-model',
  
  ], function($, _, Backbone, React, backboneMixin, ReactBoot, CreateTeam, CreateRunner, SimpleRunnersTable, TeamCard, CreateTeamModel, TeamRosterModel){

    var OverlayMixin = ReactBoot.OverlayMixin;

    const CreateRunnerModal = React.createClass({

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
          return (<div></div>);
      },

      renderOverlay: function() {

       var Modal = ReactBoot.Modal;
       var Button = ReactBoot.Button;

       if (!this.state.showModal) {
            return <span/>;
        }

        return (
              <Modal title='Create Runner' onRequestHide={this.handleToggle}>
                <div className='modal-body'>
                  <CreateRunner schoolCode={this.props.schoolCode} handleCreateRunner={this.handleCreateRunner} />
                </div>
                <div className='modal-footer'>
                  <Button onClick={this.handleToggle}>Close</Button>
                </div>
              </Modal>
          );
        }
           
    });


    var ColinModal = React.createClass({
      render: function() {
        return(

            <div className={"modal fade"} id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
              <div className={"modal-dialog"} role="document">
                <div className={"modal-content"}>
                  <div className={"modal-header"}>
                    <button type="button" className={"close"} data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 className={"modal-title"} id="myModalLabel">Modal title</h4>
                  </div>
                  <div className={"modal-body"}>
                    Test Test!
                  </div>
                  <div className={"modal-footer"}>
                    <button type="button" className={"btn btn-default"} data-dismiss="modal">Close</button>
                    <button type="button" className={"btn btn-primary"}>Save changes</button>
                  </div>
                </div>
              </div>
            </div>

          );
      }

    });



    var TeamBuilderClass = React.createClass({

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
            <div className={'container'}>   
                <div className={"row row-padding"}>
                  <div className={"col-md-12 centered"}>
                    <h4>Enter Team Description</h4>
                    <CreateTeam onSchoolSelect={this.handleSchoolSelect} onTeamNameUpdate={this.handleTeamNameUpdate} onStateNameUpdate={this.handleStateNameUpdate} />
                  </div>
                </div>
                <div className={"row row-padding"}>
                  <div className={"col-md-12 centered"}>
                    <h4>Select Runners</h4>
                    <SimpleRunnersTable selectedRunners={this.state.selectedRunners} allRunners={this.state.allRunners}/>
                  </div>
                </div>
                <div className={"row-padding"}>
                  <div className={"text-center button-block"}>
                    <button className={"btn btn-block btn-primary"}>Done</button>       
                  </div>
                </div> 
            </div>
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
          <TeamBuilderClass/>,
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
