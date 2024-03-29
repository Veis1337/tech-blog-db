const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Comment extends Model { }

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        body: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        postId: {
            type: DataTypes.INTEGER,
            references: {
            model: 'post',
            key: 'id',
            },
        },
    },
    {
            sequelize,
            timestamps: true,
            freezeTableName: true,
            underscored: true,
            modelName: "comment",
    }
);

module.exports = Comment;