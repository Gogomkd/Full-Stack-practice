// 'use strict' ;
module.exports = {
   up: (queryInterface, Sequelize) => {
       return queryInterface.createTable('Users', {
           id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,

            allowNull: false,
            primaryKey: true
        },
        createdAt: {
               allowNull: false,
               type: Sequelize.DATE,
           },
           updatedAt: {
               allowNull: false,
               type: Sequelize.DATE,
           },
        username: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        lastname: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        password: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
         
        }
           
       });
   },
   down: (queryInterface, Sequelize) => {
       return queryInterface.dropTable('Users');
   }
};