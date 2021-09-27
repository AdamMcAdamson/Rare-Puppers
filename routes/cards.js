const Router = require('express-promise-router')
const db = require('../db');

const router = new Router();

module.exports = router;

// API endpoints
// ----------------------------------------------------

// Mint new card
router.post('/mint', async (req, res) => {
    const user_id = req.body.user_id;
    const dog_tier = req.body.dog_tier;
    const dog_type = req.body.dog_type;
    const dog_attributes = req.body.dog_attributes;

    // @TODO rewrite
    db.query(`INSERT INSERT INTO rarepuppersdbschema.cards VALUES (DEFAULT, $1, $2, $3, $4, DEFAULT, DEFAULT)`, [user_id, dog_tier, dog_type, dog_attributes])
      .then(out => {
        // console.log(out);
        res.send(out);
    }).catch(e => console.error(e.stack));
});

// @TODO: Verify if valid URL
router.post('/:cardId/edit', (req, res) => {
    res.send("Edit card endpoint of cardId: " + req.params.cardId);
});

router.post('/trade', (req, res) => {
    res.send("Card trading endpoint");
});

router.post('/rate', (req, res) => {
    res.send("Card rating endpoint");
});

// GET user's cards
router.post('/', async (req, res) => {
    const user_id  = req.body.user_id;

    // console.log(req.body);
    // console.log(req.body.user_id);
    // console.log(req.body['user_id']);
    // console.log(user_id);
    
    const { cards } = await db.query('SELECT * FROM rarepuppersdbschema.cards WHERE owner_id = $1', [user_id])

    res.send(cards);

    // db.query('SELECT * FROM rarepuppersdbschema.cards WHERE owner_id = $1', [user_id])
    // .then(cards => {
    //     // console.log(cards.rows);
    //     res.send(cards.rows);
    // }).catch(e => console.error(e.stack));
});

// GET all cards
router.get('/all', async (req, res) => {

    const { cards } = await db.query('SELECT * FROM rarepuppersdbschema.cards');

    res.send(cards);

    // db.query('SELECT * FROM rarepuppersdbschema.cards')
    //   .then(cards => {
    //     // console.log(cards.rows);
    //     res.send(cards.rows);
    // }).catch(e => console.error(e.stack));
});

// GET card
router.get('/:cardId', async (req, res) => {
    const card_id = req.params.cardId;

    const { card } = await db.query('SELECT * FROM rarepuppersdbschema.cards WHERE _id = $1', [card_id]);
    
    res.send(card);
    
    // db.query('SELECT * FROM rarepuppersdbschema.cards WHERE _id = $1', [card_id])
    //   .then(card => {
    //     // console.log(card.rows[0]);
    //     res.send(card.rows[0]);
    // }).catch(e => console.error(e.stack));
});

// ----------------------------------------------------

// Probably obsolete if/when using react router
// ----------------------------------------------------

router.get('/mint', (req, res) => {
    res.send("Display mint cards form");
});

// @TODO: Verify if valid URL
router.get('/:cardId/edit', (req, res) => {
    res.send("Display card edit form of cardId: " + req.params.cardId);
});

// ----------------------------------------------------