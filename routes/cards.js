const Router = require('express-promise-router')
const db = require('../db');

const router = new Router();

module.exports = router;

// API endpoints
// ----------------------------------------------------

// Mint new card
router.post('/mint', async (req, res) => {
    const owner_id = req.body.owner_id;
    const dog_id = req.body.dog_id;
    const dog_owner_id = req.body.dog_owner_id; // unnecessary
    const card_name = req.body.card_name;
    const card_image = req.body.card_image || "DEFAULT";
    const tier = req.body.tier;
    const attributes = req.body.attributes.split(",").map((e)=>e.trim());

    // Example:
    // INSERT INTO rarepuppersdbschema_dev.cards VALUES (DEFAULT, 1, 1, 1, 'Pablo the Pablano', 'www.example.com', 11, '{"derp", "if it fits i sits", "blep"}', DEFAULT, DEFAULT)
    console.log("MINT POST");
    console.log(owner_id + " : " + dog_id + " : " + dog_owner_id + " : " + card_name + " : " + tier + " : "+ attributes);
    const response = db.query(`INSERT INTO rarepuppersdbschema_dev.cards VALUES (DEFAULT, $1, $2, $3, $4, $5, $6, DEFAULT, DEFAULT)`, [owner_id, dog_id, card_name, card_image, tier, attributes]);
    res.send(response);
});

router.post('/:cardId/edit', async (req, res) => {
    res.send("Edit card endpoint of cardId: " + req.params.cardId);
});

router.post('/trade', async (req, res) => {
    res.send("Card trading endpoint");
});

router.post('/rate', async (req, res) => {
    res.send("Card rating endpoint");
});

// GET user's cards
router.post('/', async (req, res) => {
    const user_id  = req.body.user_id;

    const { rows } = await db.query(`SELECT * FROM rarepuppersdbschema_dev.cards WHERE owner_id = $1`, [user_id]);
    res.send(rows);
});

// GET all cards
router.get('/all', async (req, res) => {
    let query = "SELECT * FROM rarepuppersdbschema_dev.cards FULL OUTER JOIN rarepuppersdbschema_dev.dogs ON rarepuppersdbschema_dev.cards.dog_id=rarepuppersdbschema_dev.dogs.dog_id";
    let order = " ORDER BY rarepuppersdbschema_dev.cards.";
    let dir = "";
    if (typeof req.query.sort !== undefined)
    {
        switch (req.query.sort) {
            case "_id":
                // @TODO: test/use `_id $1` and dir instead of current solution
                order += "card_id ASC";
                //dir = "ASC";
                break;
            case "upvotes":
                order += "upvotes DESC";
                //dir =  "DESC";
                break;
            case "tier":
                order += "tier DESC";
                //dir =  "DESC";
                break;
            default:
                order += "card_id ASC";
                //dir = "ASC";
        }
        query += order;
    } 
    //console.log("query: " + query);
    const { rows } = await db.query(query);
    //console.log(rows);
    res.send(rows);
});

// GET card
router.get('/:cardId', async (req, res) => {
    const card_id = req.params.cardId;

    const { rows } = await db.query(`SELECT * FROM rarepuppersdbschema_dev.cards WHERE _id = $1`, [card_id]);
    res.send(rows[0]);
});

// ----------------------------------------------------


// Probably obsolete if/when using react router
// ----------------------------------------------------

router.get('/mint', async (req, res) => {
    res.send("Display mint cards form");
});

router.get('/:cardId/edit', async (req, res) => {
    res.send("Display card edit form of cardId: " + req.params.cardId);
});

// ----------------------------------------------------