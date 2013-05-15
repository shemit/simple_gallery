var express = require('express'),
    app = express();

app.listen('8000');

app.configure(function() {
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.get('/', function(req, res) {
  res.render('index', 
      { "title": "Template Engine Awesomesauce!",
        "content": ""
      });
});

app.get('/gallery', function(req, res) {
  var gallery = {
    "samurai" : {
      id: "0",
      title: "Samurai",
      alt: "He's a samamamaurai!",
      url: "/img/full/samurai.jpg",
      thumb_url: "/img/thumb/samurai.jpg",
    },
    "wanderer" : {
      id: "1",
      title: "Wanderer",
      alt: "He's a wawawanderer!",
      url: "/img/full/wander.jpg",
      thumb_url: "/img/thumb/wander.jpg",
    },
    "archer" : {
      id: "2",
      title: "Archer",
      alt: "He's a arararacherrer!",
      url: "/img/full/archer.jpg",
      thumb_url: "/img/thumb/archer.jpg",
    },
    "derby" : {
      id: "3",
      title: "Derby",
      alt: "She's a dererebry!",
      url: "/img/full/derby.jpg",
      thumb_url: "/img/thumb/derby.jpg",
    },
    "face" : {
      id: "4",
      title: "Girl",
      alt: "She's a...girl.",
      url: "/img/full/face.jpg",
      thumb_url: "/img/thumb/face.jpg",
    }
  }
  res.send(JSON.stringify(gallery));
});
