import { useAppSelector } from '../hooks/hooks'
import { Book } from '../../models/books'
import { useNavigate, useParams } from 'react-router-dom'
import EditBook from './EditBook'

function Books() {
  const navigate = useNavigate()
  const books = useAppSelector((state) => state.books as Book[])
  const { id } = useParams()
  const book = books.find((b) => b.id === Number(id))

  return (
    <>
      <header>
        <h2>{book && book.title}</h2>
        <h3>By {book && book.author}</h3>
      </header>
      <EditBook />
      <button onClick={() => navigate('/')}>Back to Home</button>
    </>
  )
}

export default Books
