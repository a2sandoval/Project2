module.exports = function(sequelize, DataTypes) {
    let StaticAttribute = sequelize.define("StaticAttribute", {
        name: DataTypes.STRING,
        description: DataTypes.TEXT,
        lvlOne: DataTypes.TEXT,
        lvlTwo: DataTypes.TEXT,
        lvlThree: DataTypes.TEXT,
        lvlFour: DataTypes.TEXT,
        lvlFive: DataTypes.TEXT,
        lvlSix: DataTypes.TEXT,
        lvlSevenPlus: DataTypes.TEXT
    });

    return StaticAttribute;
};