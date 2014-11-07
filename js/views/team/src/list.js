
define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react'
  ], function($, _, Backbone, React){

    var MyWidget = React.createClass({
      handleClick: function() {
        alert('Hello!');
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
              <p>Colin Cole</p>
            </div>          
          </div>
          )
      }
    });

    var TeamListView = Backbone.View.extend({

      el: $('#mainContent'),
      events: {

      },

      initialize: function() {
        //console.log('test');
      },

      render: function (){

        React.render(
          React.createElement(MyWidget, null),
          document.getElementById('mainContent')
          );
        } 

      });

    return TeamListView;
  });
