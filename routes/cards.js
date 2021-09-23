var express = require('express');
var router = express.Router();
var pg = require('pg');
var conString = require('../private/dbAccess') 

var client = new pg.Client(conString);


// Example database connection
/*
client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  client.query('SELECT NOW() AS "theTime"', function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }
    console.log(result.rows[0].theTime);
    // >> output: 2018-08-23T14:02:57.117Z
    client.end();
  });
});
*/


/* GET user cards. */

// API endpoints
// ----------------------------------------------------

router.post('/mint', (req, res, next) => {
    res.send("Mint cards endpoint");
});

router.post('/:cardId/edit', (req, res, next) => {
    res.send("Edit card endpoint of cardId: " + req.params.cardId);
});

router.post('/trade', (req, res, next) => {
    res.send("Card trading endpoint");
});

router.post('/rate', (req, res, next) => {
    res.send("Card rating endpoint");
});

// ----------------------------------------------------

// Probably obsolete if/when using react router
// ----------------------------------------------------

router.get('/', function(req, res, next) {
  res.send("Display user's cards");
});

router.get('/all', (req, res, next) => {
    res.send("Display all cards page, sorted and such by query");
});

router.get('/mint', (req, res, next) => {
    res.send("Display mint cards form");
});

router.get('/:cardId', (req, res, next) => {
    res.send("Display card page of cardId: " + req.params.cardId);
});

router.get('/:cardId/edit', (req, res, next) => {
    res.send("Display card edit form of cardId: " + req.params.cardId);
});

// ----------------------------------------------------

module.exports = router;
