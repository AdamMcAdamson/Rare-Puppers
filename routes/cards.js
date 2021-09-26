const Router = require('express-promise-router')
const db = require('../db');

const router = new Router();

module.exports = router;


/* GET user cards. */

// API endpoints
// ----------------------------------------------------


// Mint new card
router.post('/mint', async (req, res) => {
    const { user_id } = req.body.user_id;
    const { dog_tier } = req.body.dog_tier;
    const { dog_type } = req.body.dog_type;
    const { dog_attributes } = req.body.dog_attributes;

    const { queryRes } = await db.query(`INSERT INSERT INTO rarepuppersdbschema.cards VALUES (DEFAULT, $1, $2, $3, $4, DEFAULT, DEFAULT)`, [user_id, dog_tier, dog_type, dog_attributes]);
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

// GET user's cards
router.post('/', async (req, res) => {
    const { user_id } = req.body.user_id;

    const { cards } = await db.query('SELECT * FROM rarepuppersdbschema.card WHERE owner_id = $1', [user_id]);
    res.send(cards);
});

// GET all cards
router.get('/all', async (req, res) => {
    
    const { cards } = await db.query('SELECT * FROM rarepuppersdbschema.cards');
    res.send(cards.rows);
    console.log(cards.rows);
    // db.query('SELECT * FROM rarepuppersdbschema.cards').then(cards => {
    //     console.log(cards.rows);
    //     res.send(cards.rows);
    // }).catch(e => console.error(e.stack));
});

router.get('/mint', async (req, res) => {
    res.send("Display mint cards form");
});

// GET card
router.get('/:cardId', async (req, res) => {
    const { card_id } = req.params.cardId;

    const { card } = db.query('SELECT * FROM rarepuppersdbschema.cards WHERE _id = $1', [card_id]);
    res.send(card);
});

// @TODO: Verify if valid URL
router.get('/:cardId/edit', async (req, res) => {
    res.send("Display card edit form of cardId: " + req.params.cardId);
});

// ----------------------------------------------------

module.exports = router;
