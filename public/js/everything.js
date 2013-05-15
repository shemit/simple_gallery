$(document).ready(function() {

  Item = Backbone.Model.extend({
    defaults: {
      name: "default name",
      content: "default content",
    }
  });

  ItemList = Backbone.Collection.extend({
    model: Item,
  });

  ItemListView = Backbone.View.extend({
    el: "body",

    events: {
      'click button#add': 'addItem',
    },

    initialize: function() {
      _.bindAll(this, 'render', 'addItem', 'appendItem');
      this.collection.bind('add', this.appendItem);
      this.counter = 0;
      this.render();
    },

    render: function() {
      var self = this;
      $(this.el).append($('<button id="add">Add List Item</button>'));
      $(this.el).append('<ul id="' + this.id + '"></ul>');
      _(this.collection).each(function(item) {
        self.appendItem(item);
      }, this);
    },

    addItem: function() {
      this.counter++;
      var item = new Item();
      item.set({
        name: "New Item Name " + this.counter,
        content: "New Item Content " + this.counter
      });
      this.collection.add(item);
    },

    appendItem: function(item) {
      $('ul#'+this.id, this.el).append($("<li>" + item.get("name") + "</li>"));
    }

  });

  $("body").append($('<div id="thinger"></div>'));
  $("body").append($('<div id="thinger2"></div>'));

  var list = new ItemList();
  var lview = new ItemListView({id: "iam1", collection: list, el: "#thinger"});
});
