const users = require('./users')
const cards = require('./cards')

const express = require('express');

module.exports = app => {
  app.use(express.json());
  app.use(express.urlencoded());
  app.use('/users', users)
  app.use('/cards', cards)
}