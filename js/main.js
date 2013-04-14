var AppRouter = Backbone.Router.extend({

    routes: {
        ""                  : "list",
        "wines/page/:page"	: "list",
        "wines/:id"         : "wineDetails"
    },

    initialize: function () {
        this.headerView = new HeaderView();
        $('.header').html(this.headerView.el);
    },

	list: function(page) {
        var p = page ? parseInt(page, 10) : 1;
        var wineList = new WineCollection();
        wineList.fetch({success: function(){
            $("#content").html(new WineListView({model: wineList, page: p}).el);
        }});        
    },

    wineDetails: function (id) {
        var wine = new Wine({id: id});
        wine.fetch({success: function(){
            $("#content").html(new WineView({model: wine}).el);
        }});        
    }	

});

utils.loadTemplate(['HeaderView', 'WineView', 'WineListItemView'], function() {
    app = new AppRouter();
    Backbone.history.start();
});