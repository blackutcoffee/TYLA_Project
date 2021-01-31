const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, UserProfile, Meal, SelectMeal, Diet, MealDiet } = require('../models');
const withAuth = require('../utils/auth');

// GET Route By userID
router.get('/:id', (req, res) => {
  User.findOne({
    where: {
      // ID: req.session.id
      id: req.params.id
    },
    attributes: [
      'username',
      'email',
      'id'
    ],
    include: [
      {
        model: Meal,
        attributes: ['id', 'title', 'description', 'image', 'created_at'],
        through: SelectMeal,
        include: [
          {
            model: Diet,
            attributes: ['id', 'diet_name']
          }
        ]
      },
      {
        model: UserProfile,
        attributes: ['first_name', 'last_name', 'street_address', 'city', 'state', 'zip_code']
      }
    ]
  })
  .then(dbUserData => {
    if (!dbUserData) {
      res.status(404).json({ message: 'One must be logged in to view this data' });
      return;
    }

    // Serializes Data
    const user = dbUserData.get({ plain: true });

    // Filters Data To Template
    res.render('dashboard', {
      user,
      loggedIn: req.session.loggedIn
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;