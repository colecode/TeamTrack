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
        this.props.runners.forEach(function(runner) {
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
