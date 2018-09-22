var db = require("../models");

module.exports = function (app) {
  // Grab info for all characters
  app.get("/api/characters", function (req, res) {
    db.Character.findAll({
      include: [db.CharacterAttr, db.CharacterSkill, db.CharacterTrait]
    }).then(function (dbAll) {
      res.json(dbAll);
    })
  });

  // Grab info for first X characters
  app.get("/api/characters/:limit", function (req, res) {
    db.Character.findAll({
      include: [db.CharacterAttr, db.CharacterSkill, db.CharacterTrait],
      limit: req.params.limit
    }).then(function (dbAll) {
      res.json(dbAll);
    })
  });

  // Grab info for first X characters, skipping the first Y characters (good for pagination)
  app.get("/api/characters/:limit/:skip", function (req, res) {
    db.Character.findAll({
      include: [db.CharacterAttr, db.CharacterSkill, db.CharacterTrait],
      limit: req.params.limit,
      offset: res.params.skip
    }).then(function (dbAll) {
      res.json(dbAll);
    })
  });

  // Grab info for a single character
  app.get("/api/characters/:id", function (req, res) {
    db.Character.findAll({
      include: [db.CharacterAttr, db.CharacterSkill, db.CharacterTrait],
      where: {
        id: req.params.id
      }
    }).then(function (dbCharacter) {
      res.json(dbCharacter);
    })
  });

  // Post URL for main character info
  app.post("/api/characters", function(req, res) {
    db.Character.create(req.body).then(function(dbCharacter) {
      res.json(dbCharacter);
    })
  });

  // Posl URL for character attributes info
  app.post("/api/characters/attributes", function(req, res) {
    db.CharacterAttr.create(req.body).then(function(dbCharacter) {
      res.json(dbCharacter);
    })
  });

  // Post URL for character skills info
  app.post("/api/characters/skills", function(req, res) {
    db.CharacterSkill.create(req.body).then(function(dbCharacter) {
      res.json(dbCharacter);
    })
  });

  // Post URL for character traits info
  app.post("/api/characters/traits", function(req, res) {
    db.CharacterTrait.create(req.body).then(function(dbCharacter) {
      res.json(dbCharacter);
    })
  });

  // Delete a character from the system
  app.delete("/api/characters/:id", function (req, res) {
    db.Character.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbCharacter) {
      res.json(dbCharacter);
    });
  });
};
