app.routers.AppRouter = Backbone.Router.extend({
	routes: {
	  "": 'home',
  },

  initialize: function(){
    app.slider = new PageSlider($('body'));
    app.homeView = new app.views.HomeView();
  },

  home: function(){
    app.slider.slidePage(app.homeView.render().$el);
    $(document).trigger('initialize-wavesurfer');
  },
});