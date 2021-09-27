const Router = require('express-promise-router')
const db = require('../db');

const router = new Router();

module.exports = router;

// GET user profile 
router.get('/:userId', async (req, res) => {
  const user_id = req.params.userId;

  const { rows } = await db.query('SELECT * FROM rarepuppersdbschema.users WHERE _id = $1', [user_id]);
  res.send(rows[0]);
});