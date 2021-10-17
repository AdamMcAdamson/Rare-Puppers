const users = require('./users')
const dogs = require('./dogs')
const cards = require('./cards')

module.exports = app => {
  app.use('/users', users)
  app.use('/dogs', dogs)
  app.use('/cards', cards)
} 