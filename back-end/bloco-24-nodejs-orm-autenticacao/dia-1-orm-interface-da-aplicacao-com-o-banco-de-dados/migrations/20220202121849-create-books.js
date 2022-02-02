module.exports = {
  async up (queryInterface, Sequelize) {
    const BooksTable = queryInterface.createTable('Books', {
      id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING
      },
      author: {
        allowNull: false,
        type: Sequelize.STRING
      },
      pageQuantity:{
        allowNull: true,
        type: Sequelize.INTEGER
      },
      createdAt:{
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt:{
        allowNull: false,
        type: Sequelize.DATE
      }
    })
    return BooksTable
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Books', null, {});
  }
};
