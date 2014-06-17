var app = {
  views: {},
  models: {},
  routers: {},
  utils: {},
  adapters: {},
  collections: {}
};

// make this request when submit the login form with username and password
// POST https://api.oauth2server.com/token
//     grant_type=password&
//     username=USERNAME&
//     password=PASSWORD&
//     client_id=CLIENT_ID

// then get the token back and set it on each request in header

$(document).on("ready", function () {
  app.router = new app.routers.AppRouter();
  app.utils.templates.load(['HomeView'], function () {
    app.router = new app.routers.AppRouter();
    Backbone.history.start();
  });
}).on("load", function(){
  FastClick.attach(document.body);
});