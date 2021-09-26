// ./routes/index.js
const users = require('./users')
const cards = require('./cards')

module.exports = app => {
  app.use('/users', users)
  app.use('/cards', cards)
}