module.exports = function (sequelize, DataTypes) {
    var StaticTrait = sequelize.define("StaticTrait", {
        name: DataTypes.STRING,
        designation: DataTypes.STRING,
        level: DataTypes.STRING,
        cost: DataTypes.INTEGER,
        description: DataTypes.TEXT,
        effect: DataTypes.TEXT,
        modifier1: DataTypes.INTEGER,
        modifier2: DataTypes.INTEGER,
        opposite1: DataTypes.INTEGER,
        opposite2: DataTypes.INTEGER
    });
    
    return StaticTrait;
};