import express from 'express'
import * as db from '../db/db_functions/books'

const router = express.Router()

//GET ROUTES

//Get all books

router.get('/', async (req, res) => {
  try {
    const books = await db.getAllBooks()
    res.json(books)
  } catch (e) {
    res.sendStatus(500)
  }
})

//Export
export default router
