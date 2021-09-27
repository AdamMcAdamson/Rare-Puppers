const express = require('express')
const router = express.Router();
const db = require('../db');

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

// API endpoints
// ----------------------------------------------------

// Mint new card
router.post('/mint', (req, res) => {
    const { user_id } = req.body.user_id;
    const { dog_tier } = req.body.dog_tier;
    const { dog_type } = req.body.dog_type;
    const { dog_attributes } = req.body.dog_attributes;

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
router.post('/', (req, res) => {
    const { user_id } = req.body.user_id;

    console.log(user_id);
    db.query('SELECT * FROM rarepuppersdbschema.cards WHERE owner_id = $1', [user_id])
    .then(cards => {
        // console.log(cards.rows);
        res.send(cards.rows);
    }).catch(e => console.error(e.stack));
});

// GET all cards
router.get('/all', (req, res) => {
    db.query('SELECT * FROM rarepuppersdbschema.cards')
      .then(cards => {
        // console.log(cards.rows);
        res.send(cards.rows);
    }).catch(e => console.error(e.stack));
});

// GET card
router.get('/:cardId', (req, res) => {
    const { card_id } = req.params.cardId;

    db.query('SELECT * FROM rarepuppersdbschema.cards WHERE _id = $1', [card_id])
      .then(card => {
        // console.log(card.rows[0]);
        res.send(card.rows[0]);
    }).catch(e => console.error(e.stack));
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

module.exports = router;
