//var db = require("../models");
var path = require("path");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    //res.sendFile(path.join(__dirname, "/index.html"));
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/character/create", function (req, res) {
    //res.sendFile(path.join(__dirname, "/create.html"));
    res.sendFile(path.join(__dirname, "../public/create.html"));
  });

  // Load the page for a single character
  app.get("/character/:id", function (req, res) {
    //res.sendFile(path.join(__dirname, "/characters.html"));
    res.sendFile(path.join(__dirname, "../public/characters.html"));
  });

 

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    //res.render("404");
    //res.sendFile(path.join(__dirname, "404.html"));
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};
