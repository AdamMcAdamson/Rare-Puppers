const express = require('express')
const router = express.Router();
const db = require('../db');

module.exports = router;

// GET user profile 
router.get('/:userId', async (req, res) => {
  const { user_id } = req.params.userId;

  const { user } = db.query('SELECT * FROM rarepuppersdbschema.users WHERE _id = $1', [user_id]);
  res.send(user);
});