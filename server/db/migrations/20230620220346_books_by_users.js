exports.up = function (knex) {
  return knex.schema.createTable('books_by_users', (table) => {
    table.integer('book_id')
    table.string('auth0_user_id')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('books_by_users')
}
