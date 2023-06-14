import path from 'path'
import express from 'express'

import books from './routes/books'

const server = express()

server.use(express.json())
server.use('/api/v1/books', books)

server.use(express.static(path.join(__dirname, 'public')))

if (process.env.NODE_ENV === 'production') {
  server.use('/assets', express.static('/app/dist/assets'))
  server.get('*', (req, res) => {
    res.sendFile('/app/dist/index.html')
  })
}

export default server
