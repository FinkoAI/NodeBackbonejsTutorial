requirejs.config({
  baseUrl: "js",
  paths: {
    text: "lib/text"
  },
  shim: {
    'lib/underscore-min': {
      exports: '_'
    },
    'lib/backbone-min': {
      deps: [
        'lib/underscore-min',
        "https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"
      ],
      exports: 'Backbone'
    },
    'app': {
      deps: ['lib/underscore-min', 'lib/backbone-min']
    }
  }
});

require(["app"], function(App) {
  window.bTask = new App();
});
