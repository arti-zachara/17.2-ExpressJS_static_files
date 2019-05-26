var express = require("express");
var app = express();
app.use(express.static("assets"));

// ----- GET: main page
app.get("/", function(req, res) {
  res.sendFile("/index.html");
});

// ----- GET: data from the form
app.get("/userform", function(req, res) {
  const response = {
    first_name: req.query.first_name,
    last_name: req.query.last_name
  };
  res.json(response);
});

var server = app.listen(3000, "localhost", function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log(
    "Przykładowa aplikacja nasłuchuje na http://" + host + ":" + port
  );
});

// ------ handling 404
app.use(function(req, res, next) {
  res
    .status(404)
    .send("Not what you've been looking for but still I love U 3000");
});
