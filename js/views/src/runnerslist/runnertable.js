define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react',
  'views/build/runnertablerow'
  ], function($, _, Backbone, React, RunnerTableRow){

    var RunnerTable = React.createClass({

      render: function() {

        var rows = [];
        console.log(this.props.myModel);
        console.log(this.props.collection);
        this.props.runners.forEach(function(runner) {
            console.log(runner);
            rows.push(<RunnerTableRow runner={runner} key={runner.id} />);
        });
        return (
          
            <div id="runnerTableComponent">
              <table className={'table'}>
                {rows}
              </table>
            </div>              
          )
      }
    });

    return RunnerTable;
  });
