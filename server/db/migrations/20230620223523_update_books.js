exports.up = function (knex) {
  return knex.schema.alterTable('books', (table) => {
    table.boolean('read')
  })
}

exports.down = function (knex) {
  return knex.schema.alterTable('books', (table) => {
    table.dropColumn('read')
  })
}
