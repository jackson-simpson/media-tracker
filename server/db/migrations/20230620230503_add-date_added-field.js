exports.up = function (knex) {
  return knex.schema.alterTable('books', (table) => {
    table.timestamp('date_added').defaultTo(Date.now())
  })
}

exports.down = function (knex) {
  return knex.schema.alterTable('books', (table) => {
    table.dropColumn('date_added')
  })
}
