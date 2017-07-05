var app = app || {};

app.FlightView = Backbone.View.extend({

  tagName: 'tr',



  render: function(){

    // old function that is just getting ID
    // var flightID = this.model.get('id');
    // this.$el.html(flightID);
    // this.$el.appendTo('#flights');

    var rawTemplate = $('#FlightViewTemplate').html();
    var template = _.template( rawTemplate );
    var markup = template(this.model.attributes);

    this.$el.html( markup ).attr("flight_id", this.model.get('id')).appendTo('#flights');
  }

});


app.SearchView = Backbone.View.extend({
  tagName: 'tr',
  events: {
    "click": "gotoFlightDetail"
  },

  gotoFlightDetail: function(event){
    console.log(event);

    var flight_id = this.model.get('id');
    console.log(flight_id);
    // console.log(flight_id);
    app.router.navigate( "flights/" + flight_id, true );
    // console.log(event);
  },

  render: function(){

    // old function that is just getting ID
    // var flightID = this.model.get('id');
    // this.$el.html(flightID);
    // this.$el.appendTo('#flights');

    var rawTemplate = $('#FlightViewTemplate').html();
    var template = _.template( rawTemplate );
    var markup = template(this.model.attributes);

    this.$el.html( markup ).appendTo('#searchFlights');
  }


});
