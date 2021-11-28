"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return Promise.all([
      queryInterface.addColumn(
        "Messages", // table name
        "chatId", // new field name
        {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: "Chats",
            key: "id",
          },
          onDelete: "CASCADE",
        }
      ),
      queryInterface.removeColumn("Messages", "ChatId"),
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return Promise.all([
      queryInterface.removeColumn("Messages", "chatId"),
      queryInterface.addColumn(
        "Messages", // table name
        "ChatId", // new field name
        {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: "Chats",
            key: "id",
          },
          onDelete: "CASCADE",
        }
      ),
    ]);
  },
};
