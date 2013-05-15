$().ready(function() {
  function populate(collection) {
    $.get("/gallery", function(data) {
      data = JSON.parse(data);

      for (k in data) {
        var d = data[k];
        if (collection.where({id: d.id}).length == 0) {
          var image = new Image();
          image.set(d);
          collection.add(image);
        }
      }
    });
  }

  var done_moving = true;
  var sign = 0;

  $("body").append($('<div id="menu"></div>'));
  $("body").append($('<div id="big_img"></div>'));
  $("#menu").append($('<div id="minimizer"></div>').html('-')
    .css("position", "absolute")
    .css("left", "400px")
    .css("top", "0px")
    .css("padding", "10px")
    .css("height", "20px")
    .css("width", "20px")
    .css("font-size", "20px")
    .css("background", "#333")
    .css("cursor", "pointer")
    .css("color", "#aaa")
    .css("text-align", "center")
    .click(function() {
      if (done_moving) {
        done_moving = false;
        sign = (sign + 1) % 2;
        $("#menu").animate({
          left: ((-400) * sign) + "px",
        }, 1000, function() {
          $("#minimizer").html(sign % 2 == 0 ? '-' : '+');
          done_moving = true;});
      }
    }));

  images = new ImageList();
  var app = new SelectorView({id: "gallery", collection: images, el: "#menu"});
  populate(images);
  setInterval(function(){ populate(images); }, 5000);

});
