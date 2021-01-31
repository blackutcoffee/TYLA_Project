const User = require('./User');
const Meal = require('./Meal');
const SelectMeal = require('./SelectMeal');
const Diet = require('./Diet');
const MealDiet = require('./MealDiet');
const UserProfile = require('./UserProfile');

UserProfile.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasOne(UserProfile, {
    foreignKey: 'user_id'
});

Meal.belongsToMany(User, {
    through: SelectMeal,
    foreignKey: 'meal_id'
});

User.belongsToMany(Meal, {
    through: SelectMeal,
    foreignKey: 'user_id'
});

Meal.hasMany(SelectMeal, {
    foreignKey: 'meal_id'
});

User.hasMany(SelectMeal, {
    foreignKey: 'user_id'
});


Meal.belongsToMany(Diet, {
    through: MealDiet,
    foreignKey: 'meal_id'
});
Diet.belongsToMany(Meal, {
    through: MealDiet,
    foreignKey: 'diet_id'
});

Meal.hasMany(MealDiet, {
    foreignKey: 'meal_id'
});

Diet.hasMany(MealDiet, {
    foreignKey: 'diet_id'
});

module.exports = { User, Meal, SelectMeal, Diet, MealDiet, UserProfile };