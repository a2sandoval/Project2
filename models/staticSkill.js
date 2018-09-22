module.exports = function (sequelize, DataTypes) {
    var StaticSkill = sequelize.define("StaticSkill", {
        name: DataTypes.STRING,
        description: DataTypes.TEXT,
        expertise: DataTypes.TEXT
    });

    return StaticSkill;
};