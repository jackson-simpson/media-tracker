import path from 'path'
import express from 'express'

import books from './routes/books'

const server = express()

server.use(express.json())
server.use('/api/v1/books', books)

server.use(express.static(path.join(__dirname, 'public')))

export default server
