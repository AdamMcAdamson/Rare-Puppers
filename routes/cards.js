const Router = require('express-promise-router')
const db = require('../db');

const router = new Router();

module.exports = router;


/* GET user cards. */

// API endpoints
// ----------------------------------------------------

router.post('/mint', async (req, res) => {
    res.send("Mint cards endpoint");
});

// @TODO: Verify if valid URL
router.post('/:cardId/edit', async (req, res) => {
    res.send("Edit card endpoint of cardId: " + req.params.cardId);
});

router.post('/trade', async (req, res) => {
    res.send("Card trading endpoint");
});

router.post('/rate', async (req, res) => {
    res.send("Card rating endpoint");
});

// ----------------------------------------------------

// Probably obsolete if/when using react router
// ----------------------------------------------------

router.get('/', async (req, res) => {
  res.send("Display user's cards");
});

router.get('/all', async (req, res) => {
    const { rows } = await db.query('SELECT * FROM cards');
    res.send(rows);
});

router.get('/mint', async (req, res) => {
    res.send("Display mint cards form");
});

router.get('/:cardId', async (req, res) => {
    res.send("Display card page of cardId: " + req.params.cardId);
});

// @TODO: Verify if valid URL
router.get('/:cardId/edit', async (req, res) => {
    res.send("Display card edit form of cardId: " + req.params.cardId);
});

// ----------------------------------------------------

module.exports = router;
