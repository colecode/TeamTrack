
define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react',
  'backbonemixin',
  'models/team'
  ], function($, _, Backbone, React, backboneMixin, MyModel){

    // var model = new Backbone.Model({foo: 'bar'});

    // var TeamModel = new Backbone.Model
    // ({
    //   foo: 'barColin'
    // });


    var MyWidget = React.createClass({

      mixins: [backboneMixin],

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

      },

      initialize: function() {
        this.model = new MyModel();
      },

      render: function (){

        React.render(
          
        <MyWidget model={this.model} />,
        document.getElementById('mainContent')

          );
        } 

      });

    return TeamListView;
  });
