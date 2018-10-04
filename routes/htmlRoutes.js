//var db = require("../models");
var path = require("path");

module.exports = function (app) {
  // Load Home Page
  app.get("/", function (req, res) {
    //res.sendFile(path.join(__dirname, "/index.html"));
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // Load Portfolio Page
  app.get("/portfolio", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/portfolio.html"));
  });

  app.get("/contact", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/contact.html"));
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/404.html"));
  });
};
