define([], function() {
  var config = {};

  config.apiKey = "UD7lHogMHoISJd8gFGyP4yfw"

  config.scopes =
    "https://www.googleapis.com/auth/tasks https://www.googleapis.com/auth/userinfo.profile"

  config.clientId =
    "529747815380-di4lukuh92el9fsvgnk2uup4lhd14ctl.apps.googleusercontent.com";

  _.templateSettings = {
    interpolate: /\{\{(.+?)\}\}/g
  };

  return config;
});
