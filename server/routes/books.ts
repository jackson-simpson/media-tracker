//==================== IMPORTS =====================
import express from 'express'
import * as db from '../db/db_functions/books'

//==================== CONFIG ======================
const router = express.Router()

//==================== ROUTES ======================

//TODO: Add a add book (may need to be combined with a external API)
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

// Delete a new book
router.delete('/:id', async (req, res) => {
  const id = Number(req.params.id)
  try {
    await db.deleteBook(id)
    res.sendStatus(200)
  } catch (err) {
    console.log('Book Route: Delete. Error!', err)
    res.sendStatus(500)
  }
})

//Add a book
router.post('/', async (req, res) => {
  const newBook = req.body

  try {
    const bookAddConformationArr = await db.addBook(newBook) // Book Add Confirmation Arrary
    res.json(bookAddConformationArr[0])
  } catch (err) {
    console.error('Book Route: Post. Error! ', err)
    res.sendStatus(500)
  }
})

//Update a book
router.patch('/:id', async (req, res) => {
  const newBookData = req.body
  const id = Number(req.params.id)

  try {
    const updatedBookData = await db.updateBook(id, newBookData)
    res.json(updatedBookData)
  } catch (err) {
    console.error('Book Route: Patch. Error! ', err)
    res.sendStatus(500)
  }
})

export default router
