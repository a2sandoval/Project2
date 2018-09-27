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
        Character.belongsTo(models.CharacterAttr, {
            onDelete: "cascade",
            foreignKey: {
                allowNull: false
            }
        });

        // Connect the character to its associated row of Character Skills
        Character.belongsTo(models.CharacterSkill, {
            onDelete: "cascade",
            foreignKey: {
                allowNull: false
            }
        });

        // Connect the character to its associated row of trait
        Character.belongsTo(models.CharacterTrait, {
            onDelete: "cascade",
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Character;
}