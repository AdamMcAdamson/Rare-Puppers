const Router = require('express-promise-router')
const db = require('../db');

const router = new Router();

module.exports = router;

/* GET users listing. */
router.get('/', async (req, res) => {
  res.send('respond with a resource');
});