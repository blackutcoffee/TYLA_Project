const seedUsers = require('./user-seeds');
const seedUserProfile = require('./user-profile-seeds');
const seedMeals = require('./meal-seeds');
const seedDiets = require('./diet-seeds');
const seedMealDiets = require('./meal-diet-seeds');
const seedSelectedMeals = require('./selected-meal-seeds');


const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  await seedUserProfile();
  console.log('\n----- PROFILES SEEDED -----\n');

  await seedMeals();
  console.log('\n----- MEALS SEEDED -----\n');

  await seedDiets();
  console.log('\n----- DIETS SEEDED -----\n');

  await seedMealDiets();
  console.log('\n----- MEAL-DIETS SEEDED -----\n');

  await seedSelectedMeals();
  console.log('\n----- SELECTED-MEALS SEEDED -----\n');

  process.exit(0);
};

seedAll();