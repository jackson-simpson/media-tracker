/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('books').del()
  await knex('books').insert([
    { id: 1, title: 'The Eye of the World', author: 'Robert Jordan' },
    { id: 2, title: 'The Way of Kings', author: 'Brandon Sanderson' },
    { id: 3, title: 'The Lord of the Rings', author: 'J.R.R. Tolkien' },
  ])
}
