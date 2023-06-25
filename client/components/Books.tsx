import { useAppSelector } from '../hooks/hooks'
import { Link } from 'react-router-dom'
import { Book } from '../../models/books'
import AddBook from './AddBook'

function Books() {
  const books = useAppSelector((state) => state.books as Book[])

  return (
    <>
      <ul>
        {books.map((book) => {
          return (
            <Link to={`/books/${book.id}`} key={book.id}>
              <li>{book.title}</li>
            </Link>
          )
        })}
      </ul>
      <AddBook />
    </>
  )
}

export default Books
