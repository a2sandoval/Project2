var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/index.html"));
  });

  // Load the page for a single character
  app.get("/character/:id", function(req, res) {
    // db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
    //   res.render("example", {
    //     example: dbExample
    //   });
    // });

    res.sendFile(path.join(__dirname, "../public/html/characters.html"));
  });

  app.get("/character/create", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/create.html"));
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    //res.render("404");
    res.sendFile(path.join(__dirname, "../public/html/404.html"));
  });
};
