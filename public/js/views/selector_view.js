SelectorView = Backbone.View.extend({
  initialize: function() {
    this.count = 0;
    this.listenTo(this.collection, 'add', this.addOne);
    this.render();
  },

  render: function() {
    $(this.el).append('<div id="' + this.id + '"></div>');
    _(this.collection).each(function(image) {
      self.appendImage(image);
    }, this);
  },

  addOne: function(image) {
    this.count++;
    var view = new ImageView({ model: image, id: "image_" + this.count });
    $('div#' + this.id, this.el).append(view.render().el);
  }
});
