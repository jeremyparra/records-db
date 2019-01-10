module.exports = function (sequelize, DataTypes) {
    var Documents = sequelize.define("Documents", {
        document_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [10,100]
            }
        },
        source: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [10,200]
            }
        },
        category: {
            type: DataTypes.TEXT,
            defaultValue: [
                "public safety",
                "elections/campaigns",
                "environment",
                "business",
                "education"
            ],
            allowNull: false,
            validate: {
                len: [10,50]
            }
        },
        docdate: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [30,500]
            }
        },
        image: {
            type: DataTypes.BLOB
        }

    });

    return Documents;
};
