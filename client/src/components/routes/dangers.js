// routes/dangers.js
const express = require('express');
const router = express.Router();
const Danger = require('../models/Danger');

router.post('/dangers', async (req, res) => {
  try {
    const { locationX, locationY, radius } = req.body;
    const newDanger = new Danger({ locationX, locationY, radius });
    await newDanger.save();
    res.status(201).json(newDanger);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
