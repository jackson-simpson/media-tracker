import { useAppSelector } from '../hooks/hooks'
import { Link } from 'react-router-dom'
import { Book } from '../../models/books'
import { useState } from 'react'
import AddBook from './AddBook'

function Books() {
  const books = useAppSelector((state) => state.books as Book[])
  const [hidden, setHidden] = useState(true)

  const handleHidden = () => {
    setHidden(!hidden)
  }

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
      <section>
        {hidden ? (
          <button onClick={() => handleHidden()}>Add a book</button>
        ) : (
          <>
            <AddBook />
            <button onClick={() => handleHidden()}>Back</button>
          </>
        )}
      </section>
    </>
  )
}

export default Books
