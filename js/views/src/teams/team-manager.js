define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react',
  'backbonemixin',
  'reactboot',
  'fixeddatatable',
  'views/build/racestable',
  'views/build/splitstable'
  ], function($, _, Backbone, React, backboneMixin, ReactBoot, FixedDataTable, RacesTable, SplitsTable){

    var runnerId = -1;
    var allRows = [];

    var TeamManagerClass = React.createClass({

      mixins: [backboneMixin],

      getInitialState: function () {
        return {
            firstName: '',
            lastName: '',
            age: '',  
            stateName:'',
            schoolName: '',
            races:[], 
            selectedRace:[],
            allRaces:[],
            allSplits: [],
        };
      },

      handleTeamSelect: function(val) {
          $.ajax({
            url:"api/index.php/getsplits/" + val,
            type:"GET",
            success:function(data){            
              this.setState({allSplits: data});  
            }.bind(this),     
            dataType:"json"
          });
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

        $.ajax({
          url:"api/index.php/getraces/" + runnerId,
          type:"GET",
          success:function(data){            
            this.setState({allRaces: data});  
          }.bind(this),     
          dataType:"json"
        });

      },

      componentDidMount: function() {
        this.loadDataFromServer();
      },

      render: function() {

        var Grid = ReactBoot.Grid;
        var Row = ReactBoot.Row;
        var Col = ReactBoot.Col;
        var Button = ReactBoot.Button;

        var colStyle = {marginRight:130};
        var headerStyle = {width:250, marginBottom:20};

        return (

          <div>
            <div className={'wrap'}>   
              <Grid>
                <Row className='show-grid'>
                  <h4>Runner Description</h4>
                </Row>
                <Row className='show-grid'>
                  <p>Name: {this.state.firstName} {this.state.lastName}</p>
                  <p>State: {this.state.stateName}</p> 
                  <p>School: {this.state.schoolName}</p> 
                </Row>
                <Row className='show-grid'>
                  <Col className='no-padding' style={colStyle} xs={7} md={5}>
                    <h4>Races</h4>
                    <RacesTable onRaceSelect={this.handleRaceSelect} selectedRace={this.state.selectedRace} races={this.state.allRaces} /> 
                  </Col>
                  <Col className='no-padding' xs={4} md={2}>
                    <h4 style={headerStyle} >Splits</h4>  
                    <SplitsTable allSplits={this.state.allSplits} />
                  </Col>
                </Row>
              </Grid>
            </div>
          </div>
        )
      }

    });
    
    var TeamManagerView = Backbone.View.extend({
    
      el: $('#mainContent'),
      events: {
        
      },

      initialize: function() { 

      },

      render: function (){
        
        React.render(       
          <TeamManagerClass/>,
          this.el
        );
      } 
    });

    return TeamManagerView;
  });



