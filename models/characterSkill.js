module.exports = function (sequelize, DataTypes) {
    // Variables start with "sk" to help differentiate in other files
    var CharacterSkill = sequelize.define("CharacterSkill", {
        skAthletics: {
            type: DataTypes.INT,
            allowNull: false,
            validate: {
                min: 0,
                max: 5
            }
        },
        skConvince: {
            type: DataTypes.INT,
            allowNull: false,
            validate: {
                min: 0,
                max: 5
            }
        },
        skCraft: {
            type: DataTypes.INT,
            allowNull: false,
            validate: {
                min: 0,
                max: 5
            }
        },
        skFighting: {
            type: DataTypes.INT,
            allowNull: false,
            validate: {
                min: 0,
                max: 5
            }
        },
        skKnowledge: {
            type: DataTypes.INT,
            allowNull: false,
            validate: {
                min: 0,
                max: 5
            }
        },
        skMarksman: {
            type: DataTypes.INT,
            allowNull: false,
            validate: {
                min: 0,
                max: 5
            }
        },
        skMedicine: {
            type: DataTypes.INT,
            allowNull: false,
            validate: {
                min: 0,
                max: 5
            }
        },
        skScience: {
            type: DataTypes.INT,
            allowNull: false,
            validate: {
                min: 0,
                max: 5
            }
        },
        skSubterfuge: {
            type: DataTypes.INT,
            allowNull: false,
            validate: {
                min: 0,
                max: 5
            }
        },
        skSurvival: {
            type: DataTypes.INT,
            allowNull: false,
            validate: {
                min: 0,
                max: 5
            }
        },
        skTechnology: {
            type: DataTypes.INT,
            allowNull: false,
            validate: {
                min: 0,
                max: 5
            }
        },
        skTransport: {
            type: DataTypes.INT,
            allowNull: false,
            validate: {
                min: 0,
                max: 5
            }
        }
    });

    // Connect to character
    CharacterSkill.associate = function (models) {
        CharacterSkill.belongsTo(models.Character, {
            foreignKey: {
                allowNull: false
            }
        })
    };

    return CharacterSkill;
};