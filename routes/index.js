// ./routes/index.js
const users = require('./users')
const cards = require('./cards')

module.exports = app => {
  app.use(express.json());
  app.use(express.urlencoded());
  app.use('/users', users)
  app.use('/cards', cards)
}