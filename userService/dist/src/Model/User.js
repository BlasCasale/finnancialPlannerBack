"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFunc = void 0;
const sequelize_1 = require("sequelize");
const UserFunc = (db) => {
    return db.define('User', {
        id: {
            primaryKey: true,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
            type: sequelize_1.DataTypes.UUID
        },
        username: {
            unique: true,
            allowNull: false,
            type: sequelize_1.DataTypes.STRING(30)
        },
        mail: {
            unique: true,
            allowNull: false,
            validate: {
                isEmail: true
            },
            type: sequelize_1.DataTypes.STRING(40)
        },
        password: {
            allowNull: false,
            type: sequelize_1.DataTypes.STRING(70)
        },
        isVerified: {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        verificationToken: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true
        }
    }, {
        timestamps: false
    });
};
exports.UserFunc = UserFunc;
