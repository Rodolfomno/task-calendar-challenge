'use strict';

module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('Tasks', [
      {
        title: 'Avaliar o Rodolfo',
        description: 'Me chamar pra conversar',
        startDate: new Date(),
        endDate: new Date(),
      },
    ]);
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('Tasks', null, {});
  }
};
