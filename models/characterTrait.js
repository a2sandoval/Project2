module.exports = function (sequelize, DataTypes) {
    // I haven't seen characters with more than 12 traits, so this should be safe
    // Stores the ID value of the trait rather than all of the information associated with the trait
    let CharacterTrait = sequelize.define("CharacterTrait", {
        trait1: {
            type: DataTypes.INTEGER,
            validate: {
                max: 81
            }
        },
        trait2: {
            type: DataTypes.INTEGER,
            validate: {
                max: 81
            }
        },
        trait3: {
            type: DataTypes.INTEGER,
            validate: {
                max: 81
            }
        },
        trait4: {
            type: DataTypes.INTEGER,
            validate: {
                max: 81
            }
        },
        trait5: {
            type: DataTypes.INTEGER,
            validate: {
                max: 81
            }
        },
        trait6: {
            type: DataTypes.INTEGER,
            validate: {
                max: 81
            }
        },
        trait7: {
            type: DataTypes.INTEGER,
            validate: {
                max: 81
            }
        },
        trait8: {
            type: DataTypes.INTEGER,
            validate: {
                max: 81
            }
        },
        trait9: {
            type: DataTypes.INTEGER,
            validate: {
                max: 81
            }
        },
        trait10: {
            type: DataTypes.INTEGER,
            validate: {
                max: 81
            }
        },
        trait11: {
            type: DataTypes.INTEGER,
            validate: {
                max: 81
            }
        },
        trait12: {
            type: DataTypes.INTEGER,
            validate: {
                max: 81
            }
        }
    });

    // Connect this to the Character
    CharacterTrait.associate = function (models) {
        CharacterTrait.hasOne(models.Character);
    };

    return CharacterTrait;
}