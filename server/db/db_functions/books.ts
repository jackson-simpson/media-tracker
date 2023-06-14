const { db } = require('../connection')

// Get All Books

function getAllBooks() {
  return db('books').select
}

module.exports = {
  getAllBooks,
}
