define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react'
  ], function($, _, Backbone, React){

    var SearchBar = React.createClass({

      getInitialState: function () {
        return {
          searchInput:''
        };
      },

      render: function() {

        return (     
            <div id="search-bar">
              <div className={'input-group'} style={{height:70}}>
                <span className={"input-group-addon"}><i className={"glyphicon glyphicon-search"}></i></span>
                <input type="text" className={"form-control"} style={{height:70}} value={this.state.searchInput} onChange={this.onSearchChange} placeholder="Search by last name"/>
              </div>
            </div>
          )
        },

      onSearchChange: function (e) {
        this.setState({ searchInput: e.target.value });
        this.props.onSearch({searchTerm: e.target.value});
      }  

    });

    return SearchBar;
  });
