const express = require('express')
const db = require('../db')

const router = express.Router()

//GET ROUTES

//Get books

router.get('/', async (req, res) => {
  const books = await db.getAllBooks()
  const viewData = { books }

  res.json('showAllBooks', viewData)
})

//Export
export default router
