define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react',
  'reactboot',
  ], function($, _, Backbone, React, ReactBoot){

    var SplitsTable = React.createClass({
       
      // getInitialState: function () {
      //   return {
      //       allSplits:[]
      //     };
      // },

      // loadDataFromServer: function() {
        
      //   var test = this.props.myRace;
        
      //   if(test)
      //   {
      //   $.ajax({
      //     url:"api/index.php/getsplits/" + test,
      //     type:"GET",
      //     success:function(data){            
      //       this.setState({allSplits: data});  
      //     }.bind(this),     
      //     dataType:"json"
      //   });
      // }

      // },

      handleSelect: function(i) {

        var test = 'test';
        var test2 = 'test2';
      },
              

      // // Called immediately when the React class is rendered - better option than passing in loaded domain arrays from via Backbone View
      componentDidMount: function() {
        //this.loadDataFromServer();
        var test = this.props.allSplits;
      },
       
      render: function() {
        var Table = ReactBoot.Table;

        return (
            
            <div id="splitsTableComponent">
              <Table id="mySplitsTable">
              <thead>
                <tr>
                <th>Split Number</th>
                <th>Split Time</th>
              </tr>
              </thead>
              <tbody>
                {this.props.allSplits.map(function(split, j) {
                      return (<tr onClick={this.handleSelect.bind(this, j)} key={j}>
                                <td>
                                {split.splitIndex}
                                </td>
                                <td>
                                {split.splitTime}
                                </td>
                              </tr>);
                    },this)}
                </tbody>
              </Table>
            </div>              
          )
      }
    });

    return SplitsTable;
});


