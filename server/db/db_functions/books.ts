const { connection } = require('../connection')

// Get All Books

function getAllBooks() {
  return connection('books').select
}

module.exports = {
  getAllBooks,
}
