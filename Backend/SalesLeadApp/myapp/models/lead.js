'use strict';

module.exports = (sequelize, DataTypes) => {
    var Lead = sequelize.define('Lead', {
         id: {
               allowNull: false,
               primaryKey: true,
               type: DataTypes.UUID,
               defaultValue: DataTypes.UUIDV4,
           },
         email: {
               allowNull: false,
               type: DataTypes.STRING,
           },
    });
    return Lead;
};