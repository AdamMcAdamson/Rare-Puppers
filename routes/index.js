const users = require('./users')
const cards = require('./cards')

module.exports = app => {
  app.use('/users', users)
  app.use('/api/cards', cards)
} 