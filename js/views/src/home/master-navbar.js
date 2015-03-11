define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react'
  ], function($, _, Backbone, React){

    var NavBarComponent = React.createClass({

      render: function() {
        
        return (
          <div>
          <nav className={'navbar navbar-default'} style={'margin-bottom:0px;'}>
  <div className={'container-fluid'}>
    <div className={'navbar-wrap'}>
    <div className={'navbar-header'}>
      <button type="button" className={'navbar-toggle collapsed'} data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
        <span className={'sr-only'}>Toggle navigation</span>
        <span className={'icon-bar'}></span>
        <span className={'icon-bar'}></span>
        <span className={'icon-bar'}></span>
      </button>
      <a className={'navbar-brand'} href="#home">TeamTrack</a>
    </div>
    <div className={'collapse navbar-collapse'} id="bs-example-navbar-collapse-1">
      <ul className={'nav navbar-nav'}>
      </ul>
      <form className={'navbar-form navbar-left'} role="search">
        <div className={'form-group'}>
          <input type="text" className={'form-control'} placeholder="Search" />
        </div>
        <button type="submit" className={'btn btn-default'}>Submit</button>
      </form>
      <ul className={'nav navbar-nav navbar-right'}>
        <li><a href="#myteams">My Teams</a></li>
        <li className={'dropdown'}>
          <a href="#" className={'dropdown-toggle'} data-toggle="dropdown" role="button" aria-expanded="false">Account <span className={'caret'}></span></a>
          <ul className={'dropdown-menu'} role="menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li className={'divider'}></li>
            <li><a href="#">Separated link</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
  </div>
</nav>
</div>
        )
      }
    });

    return NavBarComponent;
  });
