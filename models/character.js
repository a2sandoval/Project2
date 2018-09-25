module.exports = function (sequelize, DataTypes) {
    var Character = sequelize.define("Character", {
        playerName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1] // Must include this field
            }
        },
        charName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1] // Must include this field
            }
        },
        image: DataTypes.STRING,
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1] // Must include this field
            }
        },
        background: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1] // Must include this field
            }
        },
        stuff: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1] // Must include this field
            }
        }
    });

    Character.associate = function (models) {
        // Connect the character to its associated row of character Attributes
        Character.hasOne(models.CharacterAttr, {
            onDelete: "cascade"
        });

        // Connect the character to its associated row of Character Skills
        Character.hasOne(models.CharacterSkill, {
            onDelete: "cascade"
        });

        // Connect the character to its associated row of trait
        Character.hasOne(models.CharacterTrait, {
            onDelete: "cascade"
        });
    };

    return Character;
}