const cards = require("./cards");
const users = require("./users");

module.exports = app => {
  app.use('/users', users);
  app.use('/cards', cards);
}