'use strict';

module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('Tasks', [
      {
        title: 'coffee time',
        description: 'drink cofeee',
        startDate: new Date(),
        endDate: new Date('2026-01-01T12:00:00.000Z'),
      },
      {
        title: 'lunch time',
        description: 'have lunch',
        startDate: new Date(),
        endDate: new Date('2025-01-01T12:00:00.000Z'),
      },
    ]);
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('Tasks', null, {});
  }
};
