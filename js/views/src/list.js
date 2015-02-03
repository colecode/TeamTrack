
define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react',
  'backbonemixin',
  'models/runnerListModel'
  ], function($, _, Backbone, React, backboneMixin, MyModel){

    // Initialize the model here so it's scope can be reached in MyWidget
    var masterModel;

    var MyWidget = React.createClass({

      mixins: [backboneMixin],

      handleClick: function() {
        masterModel.set('name', 'pooo');
      },
      handleSweet: function() {
        sweetAlert("Oops...", "Something went wrong!", "error");
      },
      render: function() {

        return (
          <div className={'my-container'}>
            <div className={'wrap'}>
              <ul className={'nav nav-tabs'}>
                <li className={'active'}><a href='#'>John</a></li>
                <li><a href='#'>Han Solo</a></li>
              </ul>         
              <a href="#" onClick={this.handleClick}>Do song!</a>
              <div>
              <button className={'btn btn-primary'} onClick={this.handleSweet}>Popup sweet alert</button>
              </div>
              <p>Colin Cole Test</p>
              <p>{this.props.name}</p>
            </div>          
          </div>
          )
      }
    });

    var TeamListView = Backbone.View.extend({
      
      el: $('#mainContent'),
      events: {
          // none
      },

      initialize: function() {
        // Set the model 
        // TODO: Server call will go here to retreive list of all Runnners
        masterModel = new MyModel();
      },

      render: function (){

        React.render(       
          <MyWidget model={masterModel} />,
          document.getElementById('mainContent')
        );
      } 

      });

    return TeamListView;
  });
