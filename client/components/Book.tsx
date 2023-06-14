import { useAppSelector } from '../hooks/hooks'
import { Book } from '../../models/books'
import { useParams } from 'react-router-dom'

function Books() {
  const books = useAppSelector((state) => state.books as Book[])
  const { id } = useParams()
  const book = books.find((b) => b.id === Number(id))

  return (
    <>
      <header>
        <h3>{book && book.title}</h3>
      </header>
    </>
  )
}

export default Books
