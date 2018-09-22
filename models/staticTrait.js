module.exports = function (sequelize, DataTypes) {
    var StaticTrait = sequelize.define("StaticTrait", {
        name: DataTypes.STRING,
        designation: DataTypes.STRING,
        level: DataTypes.STRING,
        cost: DataTypes.INT,
        description: DataTypes.TEXT,
        effect: DataTypes.TEXT,
        modifier1: DataTypes.INT,
        modifier2: DataTypes.INT,
        opposite1: DataTypes.INT,
        opposite2: DataTypes.INT
    });
    
    return StaticTrait;
};