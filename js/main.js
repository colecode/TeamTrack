// Filename: main.js

// Require.js allows us to configure shortcut alias
// There usage will become more apparent further along in the tutorial.
require.config({
  paths: {
    jquery: 'http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min',
    underscore: 'http://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.7.0/underscore-min',
    backbone: 'http://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.2/backbone-min',
    react: 'http://fb.me/react-0.12.0',
    backbonemixin: 'http://cdnjs.cloudflare.com/ajax/libs/backbone-react-component/0.7.2/backbone-react-component',
    mastersite: '/css/master-site.js'
  }
});

require([
  // Load our app module and pass it to our definition function
  'app',
], function(App){
  // The "app" dependency is passed in as "App"
  App.initialize();
});