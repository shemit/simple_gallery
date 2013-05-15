ImageView = Backbone.View.extend({
  tagName: "div",
  events: {
    'click .activator': "activate",
  },

  render: function() {
    console.log(this.model);
    var attrs = this.model.attributes;
    var thumb = $('<img width="70px" alt="' + attrs.alt + '" src="' 
                               + attrs.thumb_url + '" />');
    var title = $('<h3></h3>').html(attrs.title);
    var el = $('<div class="activator"></div>').append(thumb).append(title);
    this.$el.append(el).addClass("image");
    return this;
  },

  activate: function() {
    var img = $('<img height="100%" width="auto" src="' + this.model.attributes.url + '" />')
    $("#big_img").html("").append(img);
  },
});
