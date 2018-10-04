var db = require("../models");
module.exports = function (app) {
  // Grab info for all characters
  app.get("/api/characters", function (req, res) {
    db.Character.findAll({
      include: [db.CharacterAttr, db.CharacterSkill, db.CharacterTrait]
    }).then(function (dbAll) {
      res.json(dbAll);
    });
  });

  // Post URL for character traits info
  app.post("/api/characters/traits", function (req, res) {
    db.CharacterTrait.create(req.body).then(function (dbCharacter) {
      res.json(dbCharacter);
    });
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
