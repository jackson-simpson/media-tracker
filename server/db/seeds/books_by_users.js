/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('books_by_users').del()
  await knex('books_by_users').insert([
    { book_id: 1, auth0_user_id: '1001' },
    { book_id: 2, auth0_user_id: '1002' },
    { book_id: 3, auth0_user_id: '1003' },
  ])
}
