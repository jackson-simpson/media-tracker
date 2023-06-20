//==================== IMPORTS =====================
import express from 'express'
import * as db from '../db/db_functions/books'

//==================== CONFIG ======================
const router = express.Router()

//==================== ROUTES ======================

//TODO: Add a add book (may need to be combined with a external API)
//TODO: Add a delete route
//TODO: Add a update route for moving it to the read status.

// Get all books
router.get('/', async (req, res) => {
  try {
    const books = await db.getAllBooks()
    res.json(books)
  } catch (e) {
    res.sendStatus(500)
  }
})

// Add a new book
// router.post('/', async (req, res) => {
//   try {

//   } catch (err) {

//   }
// })

export default router
