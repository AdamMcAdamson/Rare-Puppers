const Router = require('express-promise-router')
const db = require('../db');

const router = new Router();

module.exports = router;

// API endpoints
// ----------------------------------------------------

// Add new dog
router.post('/new', async (req, res) => {
    const owner_id = req.body.owner_id;
    const dog_id = req.body.dog_id;
    const dog_type = req.body.dog_type;

    // INSERT INTO rarepuppersdbschema_dev.dogs VALUES (DEFAULT, 1, 'Pablo', 'pupper')
    const response = db.query(`INSERT INSERT INTO rarepuppersdbschema_dev.cards VALUES (DEFAULT, $1, $2, $3)`, [user_id, dog_id, dog_type]);
    res.send(response);
});

// @TODO: Other queries
