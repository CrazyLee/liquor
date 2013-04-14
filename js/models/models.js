window.Wine = Backbone.Model.extend({

    //urlRoot: "",    

    defaults: {
        
        id: null,
        name: "",
        price: "",
        region: "",
        smell: "",
        material: "",
        volume: "",
        alcohol: "",
        description: "",
        picture: null
    }
});

window.WineCollection = Backbone.Collection.extend({

    model: Wine,

    //url: ""

});